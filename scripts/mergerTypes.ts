/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import * as fs from 'node:fs';
import { parseString } from 'xml2js';

const reservedWords = [
  'abstract',
  'arguments',
  'await',
  'boolean',
  'break',
  'byte',
  'case',
  'catch',
  'char',
  'class',
  'const',
  'continue',
  'debugger',
  'default',
  'delete',
  'do',
  'double',
  'else',
  'enum',
  'eval',
  'export',
  'extends',
  'false',
  'final',
  'finally',
  'float',
  'for',
  'function',
  'goto',
  'if',
  'implements',
  'import',
  'in',
  'instanceof',
  'int',
  'interface',
  'let',
  'long',
  'native',
  'new',
  'null',
  'package',
  'private',
  'protected',
  'public',
  'return',
  'short',
  'static',
  'super',
  'switch',
  'synchronized',
  'this',
  'throw',
  'throws',
  'transient',
  'true',
  'try',
  'typeof',
  'var',
  'void',
  'volatile',
  'while',
  'with',
  'yield',
];

type Properties = Record<string, string>;

type Node = {
  $?: Properties;
};

type NodeWithAttributes = {
  $: Properties;
} & Node;

type SequenceNode = {
  element: NodeWithAttributes[] | NodeWithAttributes;
} & NodeWithAttributes;

type ExtensionNode = {
  sequence: SequenceNode;
} & NodeWithAttributes;

type ComplexContentNode = {
  extension: ExtensionNode;
} & Node;

type ComplexTypeNode = Record<string, unknown> & Node;

type ComplexTypeNodeWithSequence = {
  sequence?: SequenceNode;
} & ComplexTypeNode;

type ComplexTypeNodeWithComplexContent = {
  complexContent: ComplexContentNode;
} & ComplexTypeNode;

type RestrictionNode = {
  enumeration: NodeWithAttributes[] | NodeWithAttributes;
} & NodeWithAttributes;

type SimpleTypeNode = {
  restriction: RestrictionNode;
} & NodeWithAttributes;

type ElementNode = {
  complexType: ComplexTypeNodeWithSequence;
} & NodeWithAttributes;

type SchemaNode = {
  complexType: ComplexTypeNode[] | ComplexTypeNode;
  simpleType: SimpleTypeNode[] | SimpleTypeNode;
  element: ElementNode[] | ElementNode;
} & NodeWithAttributes;

type TypesNode = {
  schema: SchemaNode | SchemaNode[];
} & Node;

type DefinitionsNode = {
  types: TypesNode;
} & NodeWithAttributes;

const wsdlFolder = './resources';
const outputFolder = './src';
const wsdlFile = 'metadata.wsdl'

const wsdl = fs.readFileSync(`${wsdlFolder}/${wsdlFile}`, 'utf-8');
const map = convertWsdlToMap(wsdl);
const meta = writeTypeMap(filterMetadataTypesOnly(map))
const header = '/*\n'
  + ' * Copyright (c) 2023, salesforce.com, inc.\n'
  + ' * All rights reserved.\n'
  + ' * Licensed under the BSD 3-Clause license.\n'
  + ' * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause\n'
  + ' */\n\n'
fs.writeFileSync(`${outputFolder}/metaTypes.ts`, header+meta);

function filterMetadataTypesOnly(
  typeMap: Map<string, { parents: string[]; fields: SequenceNode[] | NodeWithAttributes[] }>
): Map<string, { parents: string[]; fields: SequenceNode[] | NodeWithAttributes[] }> {
  const filteredMapWithOnlyMetadataTypes = new Map<string, { parents: string[]; fields: SequenceNode[] | NodeWithAttributes[] }>()
  let actualFilterMapSize: number = 0

  // Initialize with top which is Metadata
  filteredMapWithOnlyMetadataTypes.set('Metadata', typeMap.get('Metadata') ?? { parents: [], fields: [] })
  // Construct a Map of types which have parents
  const filteredMapWithParents = new Map(Array.from(typeMap).filter(([, value]) => value.parents.length))
  // Construct list of types names which are string or enum
  const listTypesThatAreString: string[] = []
  typeMap.forEach((value, key) => {
    if (value.fields.every((f) => 'value' in f.$) && !value.parents.length) {
      listTypesThatAreString.push(key)
    }
  })

  // Get all types which inherites from stored types starting with Metadata
  do {
    actualFilterMapSize = filteredMapWithOnlyMetadataTypes.size
    filteredMapWithParents.forEach((value, key) => {
        if (!listTypesThatAreString.includes(key) && !filteredMapWithOnlyMetadataTypes.has(key) && value.parents.some(item => filteredMapWithOnlyMetadataTypes.has(translateTypeName(item)))) {
          filteredMapWithOnlyMetadataTypes.set(key, value)
        }
      })
  } while (actualFilterMapSize !== filteredMapWithOnlyMetadataTypes.size);
  // Get only 1 type
  // const getType = 'CustomObjectTranslation'
  // filteredMapWithOnlyMetadataTypes.set(getType, typeMap.get(getType) ?? { parents: [], fields: [] })

  do {
    actualFilterMapSize = filteredMapWithOnlyMetadataTypes.size
    filteredMapWithOnlyMetadataTypes.forEach((value) => {
        value.parents.forEach((val) => {
          const typ = translateTypeName(val)
          if (!listTypesThatAreString.includes(typ) && !filteredMapWithOnlyMetadataTypes.has(typ) && typeMap.has(typ)) {
            filteredMapWithOnlyMetadataTypes.set(typ, typeMap.get(typ) ?? { parents: [], fields: [] })
          }
        })
        value.fields.filter((val) => val.$.type)
          .forEach((el) => {
            const typ = translateTypeName(el.$.type)
            if (!listTypesThatAreString.includes(typ) && !filteredMapWithOnlyMetadataTypes.has(typ) && typeMap.has(typ)) {
              filteredMapWithOnlyMetadataTypes.set(typ, typeMap.get(typ) ?? { parents: [], fields: [] })
            }
          })
      })
  } while (actualFilterMapSize !== filteredMapWithOnlyMetadataTypes.size);

  filteredMapWithOnlyMetadataTypes.forEach((value) => {
    // eslint-disable-next-line no-param-reassign
    value.parents = value.parents.filter((el) => !listTypesThatAreString.includes(translateTypeName(el)))
    value.fields.forEach((val) => {
      const typ = translateTypeName(val.$.type)
      if (listTypesThatAreString.includes(typ)) {
        // eslint-disable-next-line no-param-reassign
        val.$.type = 'string'
        // eslint-disable-next-line no-param-reassign
        // value.fields[ind].$.type = 'string'
      }
    })
  })

  // filteredMapWithOnlyMetadataTypes.delete('string')
  // filteredMapWithOnlyMetadataTypes.delete('boolean')
  // filteredMapWithOnlyMetadataTypes.delete('number')
  // filteredMapWithOnlyMetadataTypes.delete('any')

  return filteredMapWithOnlyMetadataTypes
}

function translateTypeName(fieldTypeXml: string): string {
  switch (fieldTypeXml) {
    case 'boolean': {
      return 'boolean';
    }
    case 'base64Binary':
    case 'string': {
      return 'string';
    }

    case 'double':
    case 'long':
    case 'int': {
      return 'number';
    }

    case 'dateTime':
    case 'time':
    case 'date': {
      return 'Date';
    }

    case 'anyType': {
      return 'any';
    }

    default: {
      if (fieldTypeXml?.startsWith('tns_')) {
        return fieldTypeXml?.replace('tns_', '');
      } else if (fieldTypeXml?.startsWith('ens_')) {
        return fieldTypeXml?.replace('ens_', '');
      } else if (fieldTypeXml?.startsWith('mns_')) {
        return fieldTypeXml?.replace('mns_', '');
      } else if (fieldTypeXml?.startsWith('fns_')) {
        return fieldTypeXml?.replace('fns_', '');
      } else {
        return 'any';
      }
    }
  }
}

function writeTypeMap(
  typeMap: Map<string, { parents: string[]; fields: SequenceNode[] | NodeWithAttributes[] }>
): string {
  let output = '';

  typeMap.forEach((info, type) => {
    if (info.parents.length) {
      output += `export type ${type} = `;
      output += info.parents.map((p) => treatTypeName(p)).join(' & ');
      if (info.fields.length){
        output += ' & {\n';
        // there's a duplciate field on UIObjectRelationConfig - with potentially more to come, filter out the duplicate
        // as well as fields that shouldn't be here !('value' in n.$')
        info.fields
          .filter((n, i) => info.fields.map((f) => f.$.name).indexOf(n.$.name) === i && !('value' in n.$))
          .map((f) => {
            output += treatAttribute(f);
          });
        output += '}';
      }
      output += '\n\n';
    } else
    if (info.fields.every((f) => 'value' in f.$)) {
      // we have an enum type
      output += `export type ${type} = `;
      if (info.fields.length === 0) output += 'string';
      output += info.fields.map((f) => `'${f.$.value}'`).join('\n      |');
      output += '\n\n';
    } else {
      output += `export type ${type} = `;
      // output += info.parents.map((p) => treatTypeName(p)).join(' & ');
      // if (info.parents.length) {
      //   output += ' & {\n';
      // } else {
        output += '{\n';
      // }
      // there's a duplciate field on UIObjectRelationConfig - with potentially more to come, filter out the duplicate
      // as well as fields that shouldn't be here !('value' in n.$')
      info.fields
        .filter((n, i) => info.fields.map((f) => f.$.name).indexOf(n.$.name) === i && !('value' in n.$))
        .map((f) => {
          output += treatAttribute(f);
        });
      output += '}\n\n';
    }
  });

  return output;
}

function treatTypeName(s: string): string {
  let str = s;
  if (reservedWords.includes(str)) {
    str += '_';
  }

  if (str?.startsWith('tns_')) {
    str = str?.replace('tns_', '');
  } else if (str?.startsWith('ens_')) {
    str = str?.replace('ens_', '');
  } else if (str?.startsWith('mns_')) {
    str = str?.replace('mns_', '');
  } else if (str?.startsWith('fns_')) {
    str = str?.replace('fns_', '');
  }

  return str;
}

function treatAttribute(elementNode: NodeWithAttributes): string {
  let attributeOutput = '';

  const { name: fieldName, type: fieldTypeXml, minOccurs, maxOccurs, nillable } = elementNode.$;

  console.assert(fieldName !== undefined, 'A field name is undefined', elementNode.$);
  console.assert(fieldTypeXml !== undefined, 'A field type is undefined');

  const isArray = maxOccurs === 'unbounded';
  const optional = (!isArray && minOccurs === '0') || nillable ? '?' : '';
  attributeOutput += `    ${fieldName}${optional}: `;

  const fieldType = translateTypeName(fieldTypeXml ?? '') ?? 'any';

  if (isArray) {
    attributeOutput += `${fieldType}[]`;
  } else {
    attributeOutput += fieldType;
  }

  attributeOutput += ';\n';

  return attributeOutput;
}

function convertWsdlToMap(wsdl: string): Map<string, { parents: string[]; fields: SequenceNode[] | NodeWithAttributes[] }> {
  let output: Map<string, { parents: string[]; fields: SequenceNode[] | NodeWithAttributes[] }> = new Map;

  parseString(
    wsdl
      // Remove the xsd namespace prefix, because partner.wsdl does not use it.
      .replaceAll('xsd:', '')
      // Transform the namespace prefixes, to make them Typescript friendly.
      .replaceAll('tns:', 'tns_')
      .replaceAll('ens:', 'ens_')
      .replaceAll('mns:', 'mns_')
      .replaceAll('fns:', 'fns_')
      .replaceAll('soap:', 'soap_')
      .replaceAll('xmlns:', 'xmlns_'),
    {
      explicitArray: false,
      mergeAttrs: false,
      explicitChildren: false,
      explicitCharkey: true,
    },
    (err, result) => {
      const arr = toArray((result as { definitions: DefinitionsNode }).definitions.types.schema);

      output = treatComplexTypeNode([
        ...arr.flatMap((a) => a.simpleType).filter((x) => x),
        ...arr.flatMap((a) => a.element).filter((x) => x),
        ...arr.flatMap<ComplexTypeNode>((a) => a.complexType).filter((x) => x),
      ]);
    }
  );

  return output;
}

function treatComplexTypeNode(
  source: Array<SimpleTypeNode | ComplexTypeNode | ElementNode>
): Map<string, { parents: string[]; fields: SequenceNode[] | NodeWithAttributes[] }> {
  const typeMap = new Map<string, { parents: string[]; fields: SequenceNode[] | NodeWithAttributes[] }>();

  source.map((type) => {
    const key = treatTypeName(type.$?.name ?? '');
    if (!typeMap.has(key)) {
      if ((type as ComplexTypeNodeWithComplexContent).complexContent) {
        // complex content case
        const t = type as ComplexTypeNodeWithComplexContent;
        typeMap.set(key, {
          parents: [t.complexContent.extension.$.base],
          fields: toArray(t.complexContent.extension.sequence?.element ?? []) as SequenceNode[],
        });
      } else if ((type as ElementNode).complexType) {
        typeMap.set(key, {
          parents: [],
          fields: toArray((type as ElementNode).complexType?.sequence?.element ?? []) as SequenceNode[]
        });
      } else {
        typeMap.set(key, {
          parents: [],
          fields: toArray(
            ((type as ComplexTypeNodeWithSequence).sequence?.element as SequenceNode[]) ??
              // handle simple types here - adding enum values to fields
              toArray((type as SimpleTypeNode).restriction?.enumeration ?? [])
          ),
        });
      }
    } else {
      // we have this key, update it - use ! because we just ensured the map has it
      const currValue = typeMap.get(key)!;
      if ((type as ComplexTypeNodeWithComplexContent).complexContent) {
        // complex content case
        const t = type as ComplexTypeNodeWithComplexContent;
        currValue.parents.push(t.complexContent.extension.$.base);
        currValue.fields.push(...(toArray(t.complexContent.extension.sequence?.element) as SequenceNode[]));
      } else if ((type as ElementNode).complexType) {
        typeMap.set(key, {
          parents: [],
          fields: toArray((type as ElementNode).complexType?.sequence?.element ?? []) as SequenceNode[]
        });
        currValue.fields.concat(
          ((type as ElementNode).complexType?.sequence?.element as SequenceNode[])
        );
      } else {
        currValue.fields.concat(
          ((type as ComplexTypeNodeWithSequence).sequence?.element as SequenceNode[]) ??
            ((type as SimpleTypeNode).restriction.enumeration as SequenceNode[])
        );
      }
      typeMap.set(key, currValue);
    }
  });

  return typeMap;
}

function toArray<Type>(input: Type | Type[] | undefined): Type[] {
  if (input === undefined) {
    return [];
  }

  return Array.isArray(input) ? input : [input];
}