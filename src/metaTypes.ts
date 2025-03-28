/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

export type Metadata = {
    fullName?: string;
    module?: string;
}

export type AIApplication = Metadata & {
    developerName: string;
    masterLabel?: string;
    predictionDefinitions: AIPredictionDefinition[];
    status: string;
    type: string;
}

export type AIApplicationConfig = Metadata & {
    aiApplicationDeveloperName: string;
    applicationId?: string;
    developerName: string;
    insightReasonEnabled?: boolean;
    masterLabel?: string;
    rank?: number;
    scoringMode?: string;
}

export type AIConvSummarizationConfig = Metadata & {
    fieldName: string;
    lookUpRelatedRecordField?: string;
    name: string;
    objectName: string;
    recommendationOutputFieldName: string;
    relatedEntity?: string;
    status: string;
}

export type AIModel = Metadata & {
    approvalStatus: string;
    contentVersion?: string;
    dataset?: string;
    externalId?: string;
    failureReasonCode?: string;
    modelContent?: string;
    modelDef: string;
    modelFactors: AIModelFactor[];
    modelGraphs: AIModelGraph[];
    modelMetrics: AIModelMetric[];
    priority?: number;
    scoringStatus: string;
    trainingEndTime: Date;
    trainingStartTime: Date;
    type: string;
}

export type AIReplyRecommendationsSettings = Metadata & {
    enableAIReplyRecommendations?: boolean;
    enableGenReplyRecommendations?: boolean;
    enableServiceEinsteinGPTGrounding?: boolean;
}

export type AIScoringModelDefVersion = Metadata & {
    aiScoringModelDefinition: string;
    aiScoringSteps: AIScoringStep[];
    developerName: string;
    masterLabel: string;
    modelMode: string;
}

export type AIScoringModelDefinition = Metadata & {
    aiModelConfig: string;
    aiScoringModelDefVersions: AIScoringModelDefVersion[];
    description?: string;
    masterLabel: string;
}

export type AIUsecaseDefinition = Metadata & {
    aiUsecaseFieldMappings: AIUsecaseFieldMapping[];
    aiUsecaseModels: AIUsecaseModel[];
    creatorType: string;
    masterLabel: string;
    maximumInsightCount?: number;
    maximumRecommendationCount?: number;
    maximumSuggestionCount?: number;
    primaryResponseObject?: string;
    recommendationResponseObject?: string;
    recommendationSource?: string;
    secondaryResponseObject?: string;
    shouldSaveFeatures?: boolean;
    shouldSaveInsights?: boolean;
    shouldSaveRecommendation?: boolean;
    shouldSaveRequestResponse?: boolean;
    shouldSaveScore?: boolean;
    shouldSaveSuggestions?: boolean;
    suggestionImpactMinimumPct?: number;
    usecaseName: string;
}

export type AccountForecastSettings = Metadata & {
    accountFilterId?: string;
    accountForecastFormulas: AccountForecastFormula[];
    acctPrdctPrdFrcstVolCnt?: number;
    calculationFrequency: string;
    displayDuration: number;
    displayedForecastMetrics: string;
    displayedRevenueMetrics: string;
    editableAtStartOfPeriod: boolean;
    editsAllowedFor: number;
    forecastFrequency: string;
    objectMapping?: ObjectMapping;
    opportunityItemScheduleEnabled?: boolean;
    opportunityProbabilityEnabled?: boolean;
    primaryNotifEmailAddress?: string;
    productFilterId?: string;
    recalculateAllFrcstCnt?: number;
    regenerateForecastCnt?: number;
    salesAgreementFilterId?: string;
    secondaryNotifEmailAddress?: string;
    startingPeriod: number;
}

export type AccountIntelligenceSettings = Metadata & {
    enableAccountLogos?: boolean;
    enableAutomatedAccountFields?: boolean;
    enableNewsStories?: boolean;
}

export type AccountPlanObjMeasCalcDef = Metadata & {
    conditions: AccountPlanObjMeasCalcCond[];
    description?: string;
    developerName: string;
    masterLabel: string;
    rollupType: string;
    status: string;
    targetField?: string;
    targetObject: string;
}

export type AccountRelationshipShareRule = Metadata & {
    accessLevel: string;
    accountToCriteriaField: string;
    description?: string;
    entityType: string;
    masterLabel: string;
    staticFormulaCriteria?: string;
    type: string;
}

export type AccountSettings = Metadata & {
    enableAccountDiscovery?: boolean;
    enableAccountHistoryTracking?: boolean;
    enableAccountInsightsInMobile?: boolean;
    enableAccountOwnerReport?: boolean;
    enableAccountTeams?: boolean;
    enableContactHistoryTracking?: boolean;
    enableRelateContactToMultipleAccounts?: boolean;
    enableReportsToOnPersonAccount?: boolean;
    showViewHierarchyLink?: boolean;
}

export type AccountingModelConfig = Metadata & {
    accountingType: string;
    defaultAccrualAccountCode?: string;
    defaultWriteOffAccountCode?: string;
    earliestCreatedDate: Date;
    expectedCashFlowGrouping?: string;
    financeBook?: string;
    internalMappingDetails: string;
    isActive: boolean;
    isGroupedByFundAccount?: boolean;
    isUsed: boolean;
    jobFilterCriteria?: string;
    masterLabel: string;
    paidCashFlowGrouping?: string;
    recordTypeFilter?: string;
    runOrder?: number;
}

export type AcctMgrTargetSettings = Metadata & {
    acctMgrPeriodicTargetDstrCnt?: number;
    periodType: string;
    pricebookId?: string;
    teamMemberHierarchyType: string;
}

export type ActionLauncherItemDef = Metadata & {
    identifier: string;
    itemActionType: string;
    itemCategory: string;
    itemLanguage: string;
    masterLabel: string;
    subType: string;
    type: string;
    versionNumber?: string;
}

export type ActionLinkGroupTemplate = Metadata & {
    actionLinkTemplates: ActionLinkTemplate[];
    category: string;
    executionsAllowed: string;
    hoursUntilExpiration?: number;
    isPublished: boolean;
    name: string;
}

export type ActionPlanTemplate = Metadata & {
    actionPlanTemplateItem: ActionPlanTemplateItem[];
    actionPlanTemplateItemDependencies: ActionPlanTemplateItemDependency[];
    actionPlanType?: string;
    description?: string;
    isAdHocItemCreationEnabled: boolean;
    name: string;
    targetEntityType: string;
    uniqueName: string;
}

export type ActionableEventOrchDef = Metadata & {
    actionableEventUsageType?: string;
    apiName: string;
    contextDefinitionDeveloperName?: string;
    contextMappingTitle?: string;
    eventCategory?: string;
    eventSubtypeApiName?: string;
    eventTypeApiName: string;
    executionProcedureAPIName?: string;
    executionProcedureType?: string;
    isActive: boolean;
    isTemplate: boolean;
    label: string;
}

export type ActionableEventTypeDef = Metadata & {
    apiName: string;
    eventSubtypes: EventSubtype[];
    label: string;
}

export type ActionsSettings = Metadata & {
    enableDefaultQuickActionsOn?: boolean;
    enableMdpEnabled?: boolean;
    enableOfflineWebLinks?: boolean;
    enableThirdPartyActions?: boolean;
}

export type ActivationPlatform = Metadata & {
    activationFlowType?: string;
    activationPlatformAdditionalMetadata?: string;
    activationPlatformConnectorType?: string;
    dataConnector?: string;
    description: string;
    enabled: boolean;
    includeSegmentNames?: boolean;
    logoUrl?: string;
    masterLabel: string;
    notes?: string;
    outputFormat: string;
    outputGrouping: string;
    periodicRefreshFrequecy?: string;
    platformProcessingType?: string;
    platformType: string;
    refreshFrequency: string;
    refreshMode: string;
}

export type ActivationPlatformActvAttr = Metadata & {
    activationPlatform: string;
    actvPlatformAdncIdentifier?: string;
    destinationName?: string;
    fieldName?: string;
    isFromSourceObject?: boolean;
    isRequired: boolean;
    masterLabel: string;
    objectName?: string;
}

export type ActivationPlatformField = Metadata & {
    activationPlatform: string;
    helpText?: string;
    isHidden: boolean;
    isRequired: boolean;
    masterLabel: string;
    type?: string;
}

export type ActivitiesSettings = Metadata & {
    allowUsersToRelateMultipleContactsToTasksAndEvents?: boolean;
    autoRelateEventAttendees?: boolean;
    enableActivityReminders?: boolean;
    enableCalendarHomeLWC?: boolean;
    enableClickCreateEvents?: boolean;
    enableDragAndDropScheduling?: boolean;
    enableEmailTracking?: boolean;
    enableFlowTaskNotifsViaApex?: boolean;
    enableGroupTasks?: boolean;
    enableHideChildEventsPreference?: boolean;
    enableListViewScheduling?: boolean;
    enableLogNote?: boolean;
    enableMLSingleClientProfile?: boolean;
    enableMultidayEvents?: boolean;
    enableRecurringEvents?: boolean;
    enableRecurringTasks?: boolean;
    enableRollUpActivToContactsAcct?: boolean;
    enableSidebarCalendarShortcut?: boolean;
    enableSimpleTaskCreateUI?: boolean;
    enableTimelineCompDateSort?: boolean;
    enableUNSTaskDelegatedToNotifications?: boolean;
    enableUserListViewCalendars?: boolean;
    meetingRequestsLogo?: string;
    showCustomLogoMeetingRequests?: boolean;
    showEventDetailsMultiUserCalendar?: boolean;
    showHomePageHoverLinksForEvents?: boolean;
    showMyTasksHoverLinks?: boolean;
}

export type ActnblListKeyPrfmIndDef = Metadata & {
    aggregateOperationName: string;
    description?: string;
    fieldName: string;
    filterExpression?: string;
    masterLabel: string;
    objectName: string;
    status: string;
}

export type ActvPfrmDataConnectorS3 = Metadata & {
    bucketName: string;
    exportDirectory: string;
    masterLabel: string;
}

export type ActvPlatformAdncIdentifier = Metadata & {
    activationPlatform: string;
    identifierHashMethod?: string;
    identifierType: string;
    masterLabel: string;
}

export type ActvPlatformFieldValue = Metadata & {
    activationPlatformField: string;
    isDefault: boolean;
    masterLabel: string;
    value?: string;
}

export type ActvPlatformOAuthConnector = Metadata & {
    masterLabel: string;
    oauthProvider: string;
    oauthUrl: string;
}

export type AddOnDefinition = Metadata & {
    cloudServiceProvider?: string;
    defaultLicenseDuration?: number;
    defaultStatus?: string;
    description?: string;
    includedPlatformLicenseDefinitions: IncludedPlatformLicenseDefinition[];
    includedUserLicenseDefinitions: IncludedUserLicenseDefinition[];
    licenseOwner?: string;
    managementServiceProvider?: string;
    managementTenantId?: string;
    name: string;
}

export type AddressSettings = Metadata & {
    countriesAndStates: CountriesAndStates;
}

export type AdvAccountForecastSet = Metadata & {
    accountFieldName?: string;
    calculationFrequency?: string;
    description?: string;
    dimensions: AdvAcctForecastDimension[];
    displayGroups: AdvAcctFrcstDisplayGroup[];
    forecastAdjPeriods: AdvAcctForecastAdjPeriod[];
    forecastFactObjectName: string;
    forecastFormulas: AdvAccountForecastFormula[];
    forecastPeriodGroupName: string;
    forecastQuantityFieldName?: string;
    forecastRevenueFieldName?: string;
    forecastSetFieldName?: string;
    forecastSetName: string;
    forecastStatusFieldName?: string;
    generationDpeDefName?: string;
    measureDefinitions: AdvAcctForecastMeasureDef[];
    periodFieldName?: string;
    recalculateDpeDefName?: string;
    regenerationDpeDefName?: string;
    rolloverDpeDefName?: string;
    rolloverFrequency?: string;
    status: string;
}

export type AdvAcctForecastDimSource = Metadata & {
    advAcctForecastDimSrcName: string;
    sourceObjectName: string;
}

export type AdvAcctForecastPeriodGroup = Metadata & {
    forecastPeriodGroupName: string;
    forecastPeriods: AdvAccountForecastPeriod[];
    startPeriod: number;
    status: string;
}

export type AdvancedObjectMapping = Metadata & {
    client: string;
    description?: string;
    label: string;
    rows: AdvancedFieldMapping[];
    sourceObject?: string;
    targetObject?: string;
}

export type AffinityScoreDefinition = Metadata & {
    affinityScoreDefinitionDesc?: string;
    affinityScoreDefinitionName?: string;
    affinityScoreType?: string;
    masterLabel?: string;
    numberOfMonths?: number;
    numberOfRanges?: number;
    scoreRangeList?: string;
    sourceFieldApiNameList?: string;
    sourceObjectApiNameList?: string;
    targetFieldApiNameList?: string;
    targetObjectApiName?: string;
}

export type Ai4mSettings = Metadata & {
    enableEinsteinMCDesiger?: boolean;
    enableStoEmailPooledModel?: boolean;
    enableUmaEef?: boolean;
    enableUmaEefWhatsappSetting?: boolean;
    enableUmaEes?: boolean;
    enableUmaEesSmsSetting?: boolean;
    enableUmaEesWhatsappSetting?: boolean;
    enableUmaGlobalModel?: boolean;
    enableUmaSto?: boolean;
}

export type AiPluginUtteranceDef = Metadata & {
    developerName: string;
    language: string;
    masterLabel: string;
    utterance: string;
}

export type AnalyticSnapshot = Metadata & {
    description?: string;
    groupColumn?: string;
    mappings: AnalyticSnapshotMapping[];
    name: string;
    runningUser?: string;
    sourceReport: string;
    targetObject: string;
}

export type AnalyticsWorkspace = Metadata & {
    description?: string;
    isProtected?: boolean;
    masterLabel: string;
}

export type AnalyticsDashboard = Metadata & {
    description?: string;
    layouts: AnalyticsDashboardLayout[];
    masterLabel: string;
    style?: string;
    templateAssetSourceName?: string;
    templateSource?: string;
    version?: number;
    widgets: AnalyticsDashboardWidget[];
}

export type AnalyticsSettings = Metadata & {
    alwaysGenPreviews?: boolean;
    analyticsAdoptionMetadata?: boolean;
    autoInstallApps?: boolean;
    bundleCachingOptOut?: boolean;
    canAccessAnalyticsViaAPI?: boolean;
    canAnnotateDashboards?: boolean;
    canEnableSavedView?: boolean;
    canExploreDataConversationally?: boolean;
    canShareAppsWithCommunities?: boolean;
    canViewThumbnailAssets?: boolean;
    concurrencyLimitSharing?: boolean;
    enableAmazonRedshiftOutputConnector?: boolean;
    enableAnalyticsEncryption?: boolean;
    enableAnalyticsSharingEnable?: boolean;
    enableAutoCompleteCombo?: boolean;
    enableAutonomousExperience?: boolean;
    enableAzureDLGen2OutputConnector?: boolean;
    enableC360GlobalProfileData?: boolean;
    enableCreateLegacyDataflows?: boolean;
    enableCrmaDataCloudIntegration?: boolean;
    enableCrtSetupLightningUiPref?: boolean;
    enableDashboardCmpRefreshPref?: boolean;
    enableDashboardComponentSnapshot?: boolean;
    enableDashboardFlexiTable?: boolean;
    enableDashboardToPDFEnable?: boolean;
    enableDataCloudReportingPref?: boolean;
    enableEmailReportsToPortalUsers?: boolean;
    enableFirebirdEditor?: boolean;
    enableFloatingReportHeaders?: boolean;
    enableIncludeDisclaimerMessage?: boolean;
    enableInsights?: boolean;
    enableInsightsHCMode?: boolean;
    enableLightningReportBuilder?: boolean;
    enableLotusNotesImages?: boolean;
    enableMassEnableReportBuilder?: boolean;
    enableNewChartsEngine?: boolean;
    enableNullDimension?: boolean;
    enableOrgCanSeeLivePreviews?: boolean;
    enableOrgCanViewTableau?: boolean;
    enableOrgCanViewThumbnailForOA?: boolean;
    enableOrgHasMobileOfflineEnabled?: boolean;
    enableOrgHasWatchlistEnabled?: boolean;
    enableQueryLiveConnectors?: boolean;
    enableRemoveFooterForRepDisplay?: boolean;
    enableRemoveFooterFromRepExp?: boolean;
    enableReportCdnPref?: boolean;
    enableReportHideXlsExportPref?: boolean;
    enableReportInlineEditPref?: boolean;
    enableReportNotificationsEnable?: boolean;
    enableReportSubOrgEmailPref?: boolean;
    enableReportingOnSDMPref?: boolean;
    enableRequestPrioritySchdl?: boolean;
    enableS1AnalyticsEclairEnable?: boolean;
    enableS3OutputConnector?: boolean;
    enableSFXJoinedReportsEnable?: boolean;
    enableSalesforceOutputConnector?: boolean;
    enableSecureImageSharing?: boolean;
    enableShowHighContrastChart?: boolean;
    enableSnowflakeOutputConnector?: boolean;
    enableSummaryFilterOrgPref?: boolean;
    enableTableauHyperOutputConnector?: boolean;
    enableUseOldChartsLookAndFeel?: boolean;
    enableWaveAssetsNewDateVersion?: boolean;
    enableWaveCustomFiscal?: boolean;
    enableWaveIndexMVDim?: boolean;
    enableWaveIndexMVDimV2?: boolean;
    enableWaveMultiCurrency?: boolean;
    enableWaveRecordNavigation?: boolean;
    enableWaveReplication?: boolean;
    enableWaveSharingInheritance?: boolean;
    enableWaveSqlCFIndexing?: boolean;
    enableWaveTrendedDatasetCleanup?: boolean;
    enableWriteToDataCloud?: boolean;
    etlOrchestrationPref?: boolean;
    isDiscoveryOptimizationEnabled?: boolean;
    isHighVolumePushbackEnabled?: boolean;
    maxHoursAppInProgress?: number;
    queryCachingOptOut?: boolean;
    recipeDirectDataPref?: boolean;
    recipeFiscalPref?: boolean;
    recipePreCachingOptOut?: boolean;
    recipeStagedDataPref?: boolean;
    replaceBlankMeasuresWithNulls?: boolean;
    setWaveIsYearEndFiscalYear?: boolean;
    sonicEnabled?: boolean;
    turnOnTimeZones?: boolean;
}

export type AndroidPushApplicationSetup = Metadata & {
    fcmProject?: string;
    serverKey?: string;
    serviceAccount?: string;
}

export type AnimationRule = Metadata & {
    animationFrequency: string;
    developerName: string;
    isActive: boolean;
    masterLabel: string;
    recordTypeContext: string;
    recordTypeName?: string;
    sobjectType: string;
    targetField: string;
    targetFieldChangeToValues: string;
}

export type ApexEmailNotifications = Metadata & {
    apexEmailNotification: ApexEmailNotification[];
}

export type ApexSettings = Metadata & {
    defaultQueueableDelay?: number;
    enableAggregateCodeCoverageOnly?: boolean;
    enableApexAccessRightsPref?: boolean;
    enableApexApprovalLockUnlock?: boolean;
    enableApexCtrlImplicitWithSharingPref?: boolean;
    enableApexPropertyGetterPref?: boolean;
    enableAuraApexCtrlAuthUserAccessCheckPref?: boolean;
    enableAuraApexCtrlGuestUserAccessCheckPref?: boolean;
    enableCompileOnDeploy?: boolean;
    enableDisableParallelApexTesting?: boolean;
    enableGaplessTestAutoNum?: boolean;
    enableMngdCtrlActionAccessPref?: boolean;
    enableNonCertifiedApexMdCrud?: boolean;
    enableRestrictCommunityExecAnon?: boolean;
    enableSecureNoArgConstructorPref?: boolean;
    enableTestSetupSkipTestResults?: boolean;
}

export type ApexTestSuite = Metadata & {
    testClassName: string[];
}

export type AppExperienceSettings = Metadata & {
    doesHideAllAppsInAppLauncher?: boolean;
}

export type AppFrameworkTemplateBundle = Metadata & {
    assetVersion?: number;
    description?: string;
    label: string;
    maxAppCount?: number;
    templateBadgeIcon?: string;
    templateType: string;
}

export type AppMenu = Metadata & {
    appMenuItems: AppMenuItem[];
}

export type AppNotificationType = Metadata & {
    notificationType: string;
    pushByDefault: boolean;
    subscribed: boolean;
}

export type ApplePushApplicationSetup = Metadata & {
    applicationBundle?: string;
    certificate?: string;
    environment: string;
    keyIdentifier?: string;
    password?: string;
    signingKey?: string;
    teamIdentifier?: string;
}

export type Application = Metadata & {
    contactEmail?: string;
    contactPhone?: string;
    description?: string;
    developerName: string;
    iconUrl?: string;
    infoUrl?: string;
    label: string;
    logoUrl?: string;
    moduleRefs: ModuleRefs;
    version?: string;
}

export type ApplicationRecordTypeConfig = Metadata & {
    applicationObjectName: string;
    applicationUsageType: string;
    recordTypeName: string;
}

export type ApplicationSubtypeDefinition = Metadata & {
    applicationUsageType: string;
    description?: string;
    masterLabel: string;
}

export type AppointmentAssignmentPolicy = Metadata & {
    masterLabel: string;
    policyApplicableDuration: string;
    policyType: string;
    utilizationFactor: string;
}

export type AppointmentSchedulingPolicy = Metadata & {
    appointmentAssignmentPolicy?: string;
    appointmentStartTimeInterval: string;
    extCalEventHandler?: string;
    isSvcTerrOpHoursWithShiftsUsed?: boolean;
    isSvcTerritoryMemberShiftUsed?: boolean;
    masterLabel: string;
    shouldCheckExternalCalendar: boolean;
    shouldConsiderCalendarEvents: boolean;
    shouldEnforceExcludedResource: boolean;
    shouldEnforceRequiredResource: boolean;
    shouldMatchSkill: boolean;
    shouldMatchSkillLevel: boolean;
    shouldRespectVisitingHours: boolean;
    shouldUsePrimaryMembers: boolean;
    shouldUseSecondaryMembers: boolean;
}

export type ApprovalProcess = Metadata & {
    active: boolean;
    allowRecall?: boolean;
    allowedSubmitters: ApprovalSubmitter[];
    approvalPageFields?: ApprovalPageField;
    approvalStep: ApprovalStep[];
    description?: string;
    emailTemplate?: string;
    enableMobileDeviceAccess?: boolean;
    entryCriteria?: ApprovalEntryCriteria;
    finalApprovalActions?: ApprovalAction;
    finalApprovalRecordLock?: boolean;
    finalRejectionActions?: ApprovalAction;
    finalRejectionRecordLock?: boolean;
    initialSubmissionActions?: ApprovalAction;
    label: string;
    nextAutomatedApprover?: NextAutomatedApprover;
    postTemplate?: string;
    processOrder?: number;
    recallActions?: ApprovalAction;
    recordEditability: string;
    showApprovalHistory?: boolean;
}

export type AssessmentQuestion = Metadata & {
    assessmentQuestionVersion?: AssessmentQuestionVersion;
    dataType: string;
    developerName: string;
    displayTextCategory?: string;
    formulaResponseDataType?: string;
    name: string;
    questionCategory: string;
    relatedQuestion?: string;
}

export type AssessmentQuestionSet = Metadata & {
    assessmentQuestionDeveloperNames: string[];
    developerName: string;
    name: string;
}

export type AssignmentRule = Metadata & {
    active?: boolean;
    ruleEntry: RuleEntry[];
}

export type AssignmentRules = Metadata & {
    assignmentRule: AssignmentRule[];
}

export type AssistantContextItem = Metadata & {
    assistantVersionId: string;
    description?: string;
    developerName: string;
    index?: number;
    masterLabel?: string;
    parentContextItem?: string;
    parentRelationField?: string;
    searchType?: string;
    slotClass?: string;
    sobjectType?: string;
    whereClause?: string;
}

export type AssistantDefinition = Metadata & {
    appVersionNumber?: number;
    assistantDefinitionProfiles: AssistantDefinitionProfile[];
    description?: string;
    developerName: string;
    masterLabel?: string;
    status?: string;
}

export type AssistantSkillQuickAction = Metadata & {
    assistantSkillQuickActionParams: AssistantSkillQuickActionParam[];
    description?: string;
    developerName: string;
    masterLabel?: string;
    prompt?: string;
    quickAction?: string;
}

export type AssistantSkillSobjectAction = Metadata & {
    assistantSkillSobjectParams: AssistantSkillSobjectParam[];
    description?: string;
    developerName: string;
    masterLabel?: string;
    prompt?: string;
    recordType?: string;
    sobjectType?: string;
    target?: string;
    type: string;
}

export type AssistantVersion = Metadata & {
    assistantDefinitionId: string;
    assistantSkills: AssistantSkill[];
    assistantVersionActions: AssistantVersionAction[];
    description?: string;
    developerName: string;
    masterLabel?: string;
    versionNumber?: number;
}

export type Audience = Metadata & {
    audienceName: string;
    container: string;
    criteria: AudienceCriteria;
    description?: string;
    formula?: string;
    formulaFilterType?: string;
    isDefaultAudience?: boolean;
    targets?: PersonalizationTargetInfos;
}

export type AuraDefinitionBundle = Metadata & {
    SVGContent?: string;
    apiVersion?: number;
    auraDefinitions?: AuraDefinitions;
    controllerContent?: string;
    description?: string;
    designContent?: string;
    documentationContent?: string;
    helperContent?: string;
    markup?: string;
    modelContent?: string;
    packageVersions: PackageVersion[];
    rendererContent?: string;
    styleContent?: string;
    testsuiteContent?: string;
    type?: string;
}

export type AuthProvider = Metadata & {
    appleTeam?: string;
    authorizeUrl?: string;
    consumerKey?: string;
    consumerSecret?: string;
    controlPlane?: string;
    customMetadataTypeRecord?: string;
    defaultScopes?: string;
    ecKey?: string;
    errorUrl?: string;
    executionUser?: string;
    friendlyName: string;
    iconUrl?: string;
    idTokenIssuer?: string;
    includeOrgIdInIdentifier?: boolean;
    isPkceEnabled?: boolean;
    linkKickoffUrl?: string;
    logoutUrl?: string;
    oauthKickoffUrl?: string;
    paramForwardAllowlist?: AuthProvParamFwdAllowlist[];
    plugin?: string;
    portal?: string;
    providerType: string;
    registrationHandler?: string;
    requireMfa?: boolean;
    sendAccessTokenInHeader?: boolean;
    sendClientCredentialsInHeader?: boolean;
    sendSecretInApis?: boolean;
    ssoKickoffUrl?: string;
    tokenUrl?: string;
    userInfoUrl?: string;
}

export type AutoResponseRule = Metadata & {
    active?: boolean;
    ruleEntry: RuleEntry[];
}

export type AutoResponseRules = Metadata & {
    autoResponseRule: AutoResponseRule[];
}

export type AutomatedContactsSettings = Metadata & {
    enableAddContactAutomatically?: boolean;
    enableAddContactRoleAutomatically?: boolean;
    enableAddContactRoleWithSuggestion?: boolean;
    enableAddContactWithSuggestion?: boolean;
}

export type BatchCalcJobDefinition = Metadata & {
    aggregates: BatchCalcJobAggregate[];
    appends: BatchCalcJobUnion[];
    atomicWritebacks: BatchCalcJobAtomicWriteback[];
    customNodes: BatchCalcJobCustomNode[];
    dataSpaceApiName?: string;
    datasources: BatchCalcJobDatasource[];
    definitionRunMode?: string;
    description?: string;
    executionPlatformType?: string;
    filters: BatchCalcJobFilter[];
    forecasts: BatchCalcJobForecast[];
    hierarchyPaths: BatchCalcJobHierarchyPath[];
    isTemplate?: boolean;
    joins: BatchCalcJobSourceJoin[];
    label?: string;
    parameters: BatchCalcJobParameter[];
    processType?: string;
    status: string;
    transforms: BatchCalcJobTransform[];
    writebacks: BatchCalcJobWritebackObject[];
}

export type BatchProcessJobDefinition = Metadata & {
    batchSize: number;
    dataSource: BatchDataSource;
    description?: string;
    executionProcessApiName?: string;
    flowApiName?: string;
    flowInputVariable?: string;
    masterLabel: string;
    processGroup: string;
    retryCount: number;
    retryInterval: number;
    status?: string;
    type?: string;
}

export type BenefitAction = Metadata & {
    benefitActionParameters: BenefitActionParameter[];
    description?: string;
    flowDefinition?: string;
    isActive: boolean;
    isBenefitExpirationAllowed?: boolean;
    isBenefitUpdateAllowed?: boolean;
    masterLabel: string;
    memberBenefitVariableName?: string;
    processType: string;
    type: string;
}

export type BillingSettings = Metadata & {
    enableBillingSetup?: boolean;
    enableCrMemoApplicationToPostedInvoices?: boolean;
    enableInvoiceEmailDelivery?: boolean;
    enableInvoicePdfGeneration?: boolean;
    enableNegInvoiceLnConversionToCrMemoLn?: boolean;
    enablePaymentScheduleAutomation?: boolean;
    enableTransactionJournalCreation?: boolean;
    enableTransactionsApplicationToInvoices?: boolean;
    enableTrxnAmountsStorageInCorpCurrency?: boolean;
}

export type BlacklistedConsumer = Metadata & {
    blockedByApiWhitelisting: boolean;
    consumerKey: string;
    consumerName: string;
    masterLabel: string;
}

export type BldgEnrgyIntensityCnfg = Metadata & {
    buildingEnergyIntensityType: string;
    recordType: string;
}

export type BlockchainSettings = Metadata & {
    enableBcp?: boolean;
    enableEtpNft?: boolean;
}

export type Bot = Metadata & {
    agentType?: string;
    botMlDomain?: LocalMlDomain;
    botUser?: string;
    botVersions: BotVersion[];
    contextVariables: ConversationContextVariable[];
    conversationChannelProviders: ConversationDefinitionChannelProvider[];
    defaultOutboundFlow?: string;
    description?: string;
    iconUrl?: string;
    label?: string;
    logPrivateConversationData?: boolean;
    pageContextVariables: PageContextVariable[];
    richContentEnabled?: boolean;
    sessionTimeout?: number;
    type?: string;
}

export type BotVersion = Metadata & {
    articleAnswersGPTEnabled?: boolean;
    botDialogGroups: BotDialogGroup[];
    botDialogs: BotDialog[];
    citationsEnabled?: boolean;
    company?: string;
    conversationDefinitionPlanners: ConversationDefinitionPlanner[];
    conversationGoals: ConversationDefinitionGoal[];
    conversationSystemDialogs: ConversationSystemDialog[];
    conversationVariables: ConversationVariable[];
    copilotPrimaryLanguage?: string;
    copilotSecondaryLanguages?: string;
    entryDialog: string;
    initialIntentDetectionEnabled?: boolean;
    intentDisambiguationEnabled?: boolean;
    intentThreshold?: number;
    intentV3Enabled?: boolean;
    knowledgeActionEnabled?: boolean;
    knowledgeFallbackEnabled?: boolean;
    mainMenuDialog?: string;
    nlpProviders: ConversationDefinitionNlpProvider[];
    responseDelayMilliseconds?: number;
    role?: string;
    smallTalkEnabled?: boolean;
    toneType?: string;
}

export type BotBlock = Metadata & {
    botBlockVersions: BotBlockVersion[];
    description?: string;
    icon?: string;
    masterLabel: string;
    richContentEnabled?: boolean;
}

export type BotBlockVersion = Metadata & {
    botDialogs: BotDialog[];
    conversationGoals: ConversationDefinitionGoal[];
    conversationLanguages: string;
    conversationVariables: ConversationVariable[];
    description?: string;
    mlDomain: LocalMlDomain;
    permissionSet?: string;
    status: string;
}

export type BotSettings = Metadata & {
    enableBots?: boolean;
}

export type BotTemplate = Metadata & {
    botDialogGroups: BotDialogGroup[];
    botDialogs: BotDialog[];
    contextVariables: ConversationContextVariable[];
    conversationGoals: ConversationDefinitionGoal[];
    conversationLanguages: string;
    conversationSystemDialogs: ConversationSystemDialog[];
    conversationVariables: ConversationVariable[];
    description?: string;
    entryDialog?: string;
    icon?: string;
    mainMenuDialog?: string;
    masterLabel: string;
    mlDomain?: LocalMlDomain;
    permissionSet?: string;
    richContentEnabled?: boolean;
    type?: string;
}

export type BrandingSet = Metadata & {
    brandingSetProperty: BrandingSetProperty[];
    description?: string;
    masterLabel: string;
    type?: string;
}

export type BriefcaseDefinition = Metadata & {
    briefcaseRules: BriefcaseRule[];
    description?: string;
    isActive: boolean;
    masterLabel: string;
    type?: string;
}

export type BusinessHoursEntry = Metadata & {
    active?: boolean;
    default: boolean;
    fridayEndTime?: Date;
    fridayStartTime?: Date;
    mondayEndTime?: Date;
    mondayStartTime?: Date;
    name?: string;
    saturdayEndTime?: Date;
    saturdayStartTime?: Date;
    sundayEndTime?: Date;
    sundayStartTime?: Date;
    thursdayEndTime?: Date;
    thursdayStartTime?: Date;
    timeZoneId?: string;
    tuesdayEndTime?: Date;
    tuesdayStartTime?: Date;
    wednesdayEndTime?: Date;
    wednesdayStartTime?: Date;
}

export type BusinessHoursSettings = Metadata & {
    businessHours: BusinessHoursEntry[];
    holidays: Holiday[];
}

export type BusinessProcess = Metadata & {
    description?: string;
    isActive?: boolean;
    values: PicklistValue[];
}

export type PicklistValue = Metadata & {
    color?: string;
    default: boolean;
    description?: string;
    isActive?: boolean;
    allowEmail?: boolean;
    closed?: boolean;
    controllingFieldValues: string[];
    converted?: boolean;
    cssExposed?: boolean;
    forecastCategory?: string;
    highPriority?: boolean;
    probability?: number;
    reverseRole?: string;
    reviewed?: boolean;
    won?: boolean;
}

export type GlobalPicklistValue = Metadata & {
    color?: string;
    default: boolean;
    description?: string;
    isActive?: boolean;
}

export type BusinessProcessGroup = Metadata & {
    businessProcessDefinitions: BusinessProcessDefinition[];
    customerSatisfactionMetric: string;
    description?: string;
    masterLabel: string;
}

export type BusinessProcessTypeDefinition = Metadata & {
    applicationUsageType: string;
    description?: string;
    masterLabel: string;
}

export type CMSConnectSource = Metadata & {
    cmsConnectAsset: CMSConnectAsset[];
    cmsConnectLanguage: CMSConnectLanguage[];
    cmsConnectPersonalization?: CMSConnectPersonalization;
    cmsConnectResourceType: CMSConnectResourceType[];
    connectionType: string;
    cssScope?: string;
    developerName: string;
    languageEnabled?: string;
    masterLabel: string;
    namedCredential?: string;
    personalizationEnabled?: string;
    rootPath?: string;
    sortOrder: number;
    status: string;
    type: string;
    websiteUrl?: string;
}

export type CallCenter = Metadata & {
    adapterUrl?: string;
    contactCenterChannels: ContactCenterChannel[];
    customSettings?: string;
    displayName: string;
    displayNameLabel: string;
    internalNameLabel: string;
    sections: CallCenterSection[];
    vendorCallCenterStatusMaps: VendorCallCenterStatusMap[];
    version?: string;
}

export type CallCenterRoutingMap = Metadata & {
    callCenter: string;
    developerName: string;
    externalId: string;
    masterLabel: string;
    quickConnect?: string;
    referenceRecord: string;
}

export type CallCoachingMediaProvider = Metadata & {
    isActive: boolean;
    providerDescription: string;
    providerName: string;
}

export type CallCtrAgentFavTrfrDest = Metadata & {
    agent: string;
    callCenter: string;
    name: string;
    transferDestination: string;
}

export type CampaignInfluenceModel = Metadata & {
    isActive?: boolean;
    isDefaultModel: boolean;
    isModelLocked: boolean;
    modelDescription?: string;
    name: string;
    recordPreference?: string;
}

export type CampaignSettings = Metadata & {
    aiAttributionTimeframe?: number;
    enableAIAttribution?: boolean;
    enableAccountsAsCM?: boolean;
    enableAutoCampInfluenceDisabled?: boolean;
    enableB2bmaCampaignInfluence2?: boolean;
    enableCampaignHistoryTrackEnabled?: boolean;
    enableCampaignInfluence2?: boolean;
    enableCampaignMemberTWCF?: boolean;
    enableEKAI?: boolean;
    enableOpportunityInfluence?: boolean;
    enableSuppressNoValueCI2?: boolean;
}

export type CampaignTemplateDefinition = Metadata & {
    description: string;
    developerName: string;
    masterLabel: string;
}

export type CanvasMetadata = Metadata & {
    accessMethod: string;
    canvasOptions?: string;
    canvasUrl: string;
    lifecycleClass?: string;
    locationOptions?: string;
    samlInitiationMethod?: string;
}

export type CareBenefitVerifySettings = Metadata & {
    codeSetType?: string;
    defaultNpi?: string;
    generalPlanServiceTypeCode?: string;
    isDefault?: boolean;
    masterLabel: string;
    organizationName?: string;
    serviceApexClass?: string;
    serviceNamedCredential?: string;
    serviceTypeSourceSystem?: string;
    uriPath?: string;
}

export type CareRequestConfiguration = Metadata & {
    careRequestRecordType: string;
    careRequestRecords: CareRequestRecords[];
    careRequestType: string;
    isActive?: boolean;
    isDefaultRecordType?: boolean;
    masterLabel: string;
}

export type CaseSettings = Metadata & {
    caseAssignNotificationTemplate?: string;
    caseAutoProcUser?: boolean;
    caseCloseNotificationTemplate?: string;
    caseCommentNotificationTemplate?: string;
    caseCreateNotificationTemplate?: string;
    caseFeedItemSettings: FeedItemSettings[];
    caseFeedReadUnreadLtng?: boolean;
    caseMergeInLightning?: boolean;
    closeCaseThroughStatusChange?: boolean;
    defaultCaseFeedLayoutOn?: boolean;
    defaultCaseOwner?: string;
    defaultCaseOwnerType?: string;
    defaultCaseUser?: string;
    emailActionDefaultsHandlerClass?: string;
    emailToCase?: EmailToCaseSettings;
    enableCaseFeed?: boolean;
    enableCaseSwarming?: boolean;
    enableCollapseEmailThread?: boolean;
    enableDraftEmails?: boolean;
    enableEarlyEscalationRuleTriggers?: boolean;
    enableEmailActionDefaultsHandler?: boolean;
    enableEmailContactOnCasePost?: boolean;
    enableEscalateQfiToCaseInternal?: boolean;
    enableEscalateQfiToCaseNetworks?: boolean;
    enableExtNetworksCaseFeedEnabled?: boolean;
    enableMultiLangSolnSrchCSS?: boolean;
    enableMultiLangSolnSrchPKB?: boolean;
    enableMultiLangSolution?: boolean;
    enableSolutionCategory?: boolean;
    enableSolutionInlineCategory?: boolean;
    enableSolutionShortSummary?: boolean;
    enableSuggestedArticlesApplication?: boolean;
    enableSuggestedArticlesCustomerPortal?: boolean;
    enableSuggestedArticlesPartnerPortal?: boolean;
    enableSuggestedSolutions?: boolean;
    escalateCaseBefore?: boolean;
    genericMessageEnabled?: boolean;
    keepCaseMergeRecords?: boolean;
    keepRecordTypeOnAssignmentRule?: boolean;
    notifyContactOnCaseComment?: boolean;
    notifyDefaultCaseOwner?: boolean;
    notifyOwnerOnCaseComment?: boolean;
    notifyOwnerOnCaseOwnerChange?: boolean;
    predictiveSupportEnabled?: boolean;
    rtaCaseComment?: boolean;
    showEmailAttachmentsInCaseAttachmentsRL?: boolean;
    showFewerCloseActions?: boolean;
    systemUserEmail?: string;
    useSystemEmailAddress?: boolean;
    useSystemUserAsDefaultCaseUser?: boolean;
    visibleInCssCheckbox?: boolean;
    webToCase?: WebToCaseSettings;
}

export type CaseSubjectParticle = Metadata & {
    index: number;
    textField?: string;
    type: string;
}

export type ChannelLayout = Metadata & {
    doesExcludeFieldLabels?: boolean;
    doesExcludeFiles?: boolean;
    enabledChannels: string[];
    label: string;
    layoutItems: ChannelLayoutItem[];
    recordType?: string;
}

export type ChannelObjectLinkingRule = Metadata & {
    actionForNoRecordFound: string;
    actionForSingleRecordFound: string;
    channelType: string;
    description?: string;
    isLinkedRecordOpenedAsSubTab: boolean;
    isRuleActive: boolean;
    masterLabel: string;
    objectToLink: string;
    ruleName: string;
}

export type ChannelRevMgmtSettings = Metadata & {
    enableDesignRegistration?: boolean;
    enablePriceProtection?: boolean;
}

export type ChatterAnswersSettings = Metadata & {
    emailFollowersOnBestAnswer?: boolean;
    emailFollowersOnReply?: boolean;
    emailOwnerOnPrivateReply?: boolean;
    emailOwnerOnReply?: boolean;
    enableAnswerViaEmail?: boolean;
    enableChatterAnswers: boolean;
    enableFacebookSSO?: boolean;
    enableInlinePublisher?: boolean;
    enableReputation?: boolean;
    enableRichTextEditor?: boolean;
    facebookAuthProvider?: string;
    showInPortals?: boolean;
}

export type ChatterEmailsMDSettings = Metadata & {
    enableChatterDigestEmailsApiOnly?: boolean;
    enableChatterEmailAttachment?: boolean;
    enableCollaborationEmail?: boolean;
    enableDisplayAppDownloadBadges?: boolean;
    enableEmailReplyToChatter?: boolean;
    enableEmailToChatter?: boolean;
    noQnOwnNotifyOnCaseCmt?: boolean;
    noQnOwnNotifyOnRep?: boolean;
    noQnSubNotifyOnBestR?: boolean;
    noQnSubNotifyOnRep?: boolean;
}

export type ChatterExtension = Metadata & {
    compositionComponent: string;
    description: string;
    extensionName: string;
    headerText?: string;
    hoverText?: string;
    icon: string;
    isProtected?: boolean;
    masterLabel: string;
    renderComponent: string;
    type: string;
}

export type ChatterSettings = Metadata & {
    allowChatterGroupArchiving?: boolean;
    allowRecordsInChatterGroup?: boolean;
    enableApprovalRequest?: boolean;
    enableCaseFeedRelativeTimestamps?: boolean;
    enableChatter?: boolean;
    enableChatterEmoticons?: boolean;
    enableFeedEdit?: boolean;
    enableFeedPinning?: boolean;
    enableFeedsDraftPosts?: boolean;
    enableFeedsRichText?: boolean;
    enableInviteCsnUsers?: boolean;
    enableOutOfOfficeEnabledPref?: boolean;
    enableRichLinkPreviewsInFeed?: boolean;
    enableTodayRecsInFeed?: boolean;
    unlistedGroupsEnabled?: boolean;
}

export type ChoiceList = Metadata & {
    choiceListValue: ChoiceListValue[];
    description?: string;
    masterLabel: string;
}

export type ClaimFinancialSettings = Metadata & {
    claimCovPendingAuthStatus: string;
    claimPendingAuthorityStatus: string;
    clmCovPymtDtlPendAuthSts: string;
    masterLabel: string;
}

export type ClauseCatgConfiguration = Metadata & {
    description?: string;
    isProtected?: boolean;
    masterLabel: string;
    usageType: string;
}

export type CleanDataService = Metadata & {
    cleanRules: CleanRule[];
    description: string;
    masterLabel: string;
    matchEngine: string;
}

export type CloudServiceProvider = Metadata & {
    authParams: string;
    authType: string;
    baseApiUrl: string;
    cloudServiceProviderApis: CloudServiceProviderApi[];
    externalId: string;
    name: string;
    provisioningAutomationType?: string;
    sendAggregatedLicenseInfo?: boolean;
    sendAggregatedLicenses?: boolean;
    sendLicenseInfo?: boolean;
    sendTenantChange?: boolean;
    sendTenantUsage?: boolean;
    shouldIncludeOrderItems?: boolean;
    usageAggregateServiceUser?: string;
}

export type CmsnStmtLineItemConfig = Metadata & {
    failureStatus: string;
    insPolicyMatchingCriteria: string;
    masterLabel: string;
    reprocessingEligibility: string;
    successStatus: string;
}

export type CmsnStmtLineItemTypConfig = Metadata & {
    brkrRevSpltArngLnItmTyp?: string;
    commissionStmtLineItemType: string;
    masterLabel: string;
    prodSplitArngLineItemType?: string;
}

export type CommandAction = Metadata & {
    actionType: string;
    description?: string;
    intents: CommandActionIntent[];
    label: string;
    parameters: CommandActionParam[];
    responseTemplates: CommandActionResponse[];
    target?: string;
}

export type CommerceSettings = Metadata & {
    commerceAnalyticsEnabled?: boolean;
    commerceAppEnabled?: boolean;
    commerceConciergeEnabled?: boolean;
    commerceCopilotEcomEnabled?: boolean;
    commerceDCSegmentEnabled?: boolean;
    commerceDiscoveryExpansion?: boolean;
    commerceEnabled?: boolean;
    commerceNGPEnabled?: boolean;
    commerceRLMSubs?: boolean;
    convCommShopCopilotEnabled?: boolean;
    lowestUnitPriceTracking?: boolean;
    messagingEngagementDataKit?: boolean;
}

export type CommissionStatementConfig = Metadata & {
    cmsnProcBatchPrcJobDef?: string;
    failureStatus: string;
    inProgressStatus: string;
    invalidProducerCmsnStatus?: string;
    masterLabel: string;
    partialSuccessStatus: string;
    stdCmsnProcBtchPrcJobDef?: string;
    successStatus: string;
}

export type CommsServiceConsoleSettings = Metadata & {
    enableCommsServiceConsole?: boolean;
}

export type CommunicationChannelType = Metadata & {
    channelName: string;
    masterLabel: string;
}

export type CommunitiesSettings = Metadata & {
    applyLoginPageTypeToEmbeddedLogin?: boolean;
    blockEmbeddedLoginUnknownURLRedirect?: boolean;
    canModerateAllFeedPosts?: boolean;
    canModerateInternalFeedPosts?: boolean;
    embeddedVisualforcePages?: boolean;
    enableCommunityWorkspaces?: boolean;
    enableCspContactVisibilityPref?: boolean;
    enableCspNotesOnAccConPref?: boolean;
    enableEnablePRM?: boolean;
    enableExternalAccHierPref?: boolean;
    enableGuestPermDisOptOutCruc?: boolean;
    enableGuestSecurityOptOutCruc?: boolean;
    enableGuvSecurityOptOutPref?: boolean;
    enableInviteChatterGuestEnabled?: boolean;
    enableNameFieldsUserPIIEnabled?: boolean;
    enableNetPortalUserReportOpts?: boolean;
    enableNetworksEnabled?: boolean;
    enableOotbProfExtUserOpsEnable?: boolean;
    enablePRMAccRelPref?: boolean;
    enablePowerCustomerCaseStatus?: boolean;
    enablePreventBadgeGuestAccess?: boolean;
    enableRelaxPartnerAccountFieldPref?: boolean;
    enableUnsupportedBrowserModalPref?: boolean;
    enableUsernameUniqForOrgPref?: boolean;
}

export type Community = Metadata & {
    active?: boolean;
    chatterAnswersFacebookSsoUrl?: string;
    communityFeedPage?: string;
    dataCategoryName?: string;
    description?: string;
    emailFooterDocument?: string;
    emailHeaderDocument?: string;
    emailNotificationUrl?: string;
    enableChatterAnswers?: boolean;
    enablePrivateQuestions?: boolean;
    expertsGroup?: string;
    portal?: string;
    reputationLevels?: ReputationLevels;
    showInPortal?: boolean;
    site?: string;
}

export type CommunityAIModelMapping = Metadata & {
    modelContent: string;
    modelEntityType: string;
    modelStatus: string;
    name: string;
    networkId?: string;
    setupDefinition?: string;
}

export type CommunityTemplateDefinition = Metadata & {
    baseTemplate?: string;
    bundlesInfo: CommunityTemplateBundleInfo[];
    category: string;
    defaultBrandingSet?: string;
    defaultThemeDefinition: string;
    description?: string;
    enableExtendedCleanUpOnDelete?: boolean;
    masterLabel: string;
    navigationLinkSet: NavigationLinkSet[];
    pageSetting: CommunityTemplatePageSetting[];
    publisher?: string;
}

export type CommunityThemeDefinition = Metadata & {
    bundlesInfo: CommunityThemeBundleInfo[];
    customThemeLayoutType: CommunityCustomThemeLayoutType[];
    defaultBrandingSet?: string;
    description?: string;
    enableExtendedCleanUpOnDelete?: boolean;
    masterLabel: string;
    publisher?: string;
    themeRouteOverride: CommunityThemeRouteOverride[];
    themeSetting: CommunityThemeSetting[];
}

export type CompactLayout = Metadata & {
    fields: string[];
    label: string;
}

export type CompanySettings = Metadata & {
    enableCustomFiscalYear: boolean;
    fiscalYear?: FiscalYearSettings;
}

export type ConnectedApp = Metadata & {
    attributes: ConnectedAppAttribute[];
    canvas?: CanvasMetadata;
    canvasConfig?: ConnectedAppCanvasConfig;
    contactEmail: string;
    contactPhone?: string;
    description?: string;
    iconUrl?: string;
    infoUrl?: string;
    ipRanges: ConnectedAppIpRange[];
    label: string;
    logoUrl?: string;
    mobileAppConfig?: ConnectedAppMobileDetailConfig;
    mobileStartUrl?: string;
    oauthConfig?: ConnectedAppOauthConfig;
    oauthPolicy?: ConnectedAppOauthPolicy;
    permissionSetName: string[];
    plugin?: string;
    pluginExecutionUser?: string;
    profileName: string[];
    samlConfig?: ConnectedAppSamlConfig;
    sessionPolicy?: ConnectedAppSessionPolicy;
    startUrl?: string;
}

export type ConnectedAppSettings = Metadata & {
    enableAdminApprovedAppsOnly?: boolean;
    enableAdminApprovedAppsOnlyForExternalUser?: boolean;
    enableSkipUserProvisioningWizardWelcomePage?: boolean;
}

export type ConnectivityDevConfigMetadata = Metadata & {
    allowNonSubscribedNotifTypes?: boolean;
    isOauth?: boolean;
    issuer?: string;
    mobileStartUrl?: string;
    nameIdFormat?: string;
    samlAscUrl?: string;
    samlCertificate?: string;
    samlEncryptionCertificate?: string;
    samlEncryptionType?: string;
    samlEntityUrl?: string;
    samlIdpSLOBinding?: string;
    samlSigningAlgoType?: string;
    samlSubjectType?: string;
    singleLogoutUrl?: string;
    startUrl?: string;
    subjectCustomAttr?: string;
}

export type ConsentBannerSettings = Metadata & {
    allowButtonColor: string;
    allowButtonTextColor: string;
    bannerColor: string;
    bannerFontFamily: string;
    bannerMessage: string;
    bannerPosition: string;
    bannerTextColor: string;
    declineButtonColor: string;
    declineButtonTextColor: string;
    infoText?: string;
    infoUrl?: string;
    privacyPolicyText?: string;
    privacyPolicyUrl?: string;
}

export type ContentSettings = Metadata & {
    enableCMSC2CConnections?: boolean;
    enableChatterFileLink?: boolean;
    enableContent?: boolean;
    enableContentAutoAssign?: boolean;
    enableContentDistForPortalUsers?: boolean;
    enableContentDistPwOptionsBit1?: boolean;
    enableContentDistPwOptionsBit2?: boolean;
    enableContentDistribution?: boolean;
    enableContentSupportMultiLanguage?: boolean;
    enableContentWorkspaceAccess?: boolean;
    enableDeleteFileInContentPacks?: boolean;
    enableFileIngestToDataCloud?: boolean;
    enableFileShareSetByRecord?: boolean;
    enableFilesUsrShareNetRestricted?: boolean;
    enableJPGPreviews?: boolean;
    enableLWCFileUpload?: boolean;
    enableLibraryManagedFiles?: boolean;
    enableShowChatterFilesInContent?: boolean;
    enableSiteGuestUserToUploadFiles?: boolean;
    enableUploadFilesOnAttachments?: boolean;
    setValidContentTypeForAtchDocDownload?: boolean;
    skipContentAssetTriggers?: boolean;
    skipContentAssetTriggersOnDeploy?: boolean;
}

export type ContextDefinition = Metadata & {
    canBeReferenceDefinition?: boolean;
    clonedFrom?: string;
    contextDefinitionReferences: ContextDefinitionReference[];
    contextDefinitionVersions: ContextDefinitionVersion[];
    contextTtl?: number;
    description?: string;
    displayName?: string;
    hasSystemTags?: boolean;
    inheritedFrom?: string;
    inheritedFromVersion?: string;
    isProtected?: boolean;
    masterLabel: string;
    title: string;
}

export type ContextUseCaseMapping = Metadata & {
    contextDefinitionName: string;
    mappingName: string;
    mappingType: string;
    masterLabel: string;
    referenceObjectName?: string;
    referenceObjectRecordType?: string;
    targetObjectCustomFieldName?: string;
    targetObjectName?: string;
    targetObjectRecordType?: string;
    useCaseType: string;
}

export type ContractSettings = Metadata & {
    autoCalculateEndDate?: boolean;
    autoExpirationDelay?: string;
    autoExpirationRecipient?: string;
    autoExpireContracts?: boolean;
    enableContractHistoryTracking?: boolean;
    notifyOwnersOnContractExpiration?: boolean;
}

export type ContractType = Metadata & {
    contractTypeConfigs: ContractTypeConfig[];
    isDefault?: boolean;
    masterLabel: string;
    subTypes?: string;
}

export type ConvIntelligenceSignalRule = Metadata & {
    actionType: string;
    actionValue?: string;
    active: boolean;
    channelAddressIdentifier: string;
    channelType: string;
    criteria: string;
    developerName: string;
    participantRole?: string;
    ruleName: string;
    service: string;
    subrule: ConvIntelligenceSignalSubRule[];
}

export type ConvReasonReportDefinition = Metadata & {
    endDate: Date;
    externalModelIdentifier?: string;
    name: string;
    pipelineRunIdentifier?: string;
    refreshFrequency: string;
    reportLanguage?: string;
    startDate: Date;
    status: string;
}

export type ConvReasonReportSegmentDef = Metadata & {
    convReasonReportDefinition: string;
    conversationChannel?: string;
    filterCriteria?: string;
    filterCriteriaAsJson?: string;
    name: string;
    segmentObject?: string;
    segmentType: string;
    targetField?: string;
    targetObject: string;
}

export type ConversationChannelDefinition = Metadata & {
    connectedAppOauthLink?: string;
    connectedAppType?: string;
    consentOwner?: string;
    conversationVendorInfo?: string;
    customEventPayloadField: string;
    customEventTypeField?: string;
    customIcon?: string;
    customPlatformEvent: string;
    customerConnectedAppOauthLink?: string;
    developerName: string;
    isInboundReceiptsEnabled?: boolean;
    isTypingIndicatorDisabled?: boolean;
    masterLabel: string;
    routingOwner?: string;
    supportsCustomChannelParameters?: boolean;
    supportsDoubleOptInConsent?: boolean;
    supportsExplicitConsent?: boolean;
    supportsImplicitConsent?: boolean;
    supportsIsoCountryCode?: boolean;
    supportsKeywords?: boolean;
}

export type ConversationMessageDefinition = Metadata & {
    constants: ConversationMessageConstant[];
    contentCategory?: string;
    description?: string;
    label: string;
    language?: string;
    messageHandlers: ConversationMessageHandler[];
    messageLayouts: ConversationMessageLayout[];
    optionsParameter?: ConversationMessageOptionsParameter;
    parameters: ConversationMessageParameter[];
    type: string;
}

export type ConversationVendorInfo = Metadata & {
    agentSSOSupported?: boolean;
    awsAccountKey?: string;
    awsRootEmail?: string;
    awsTenantVersion?: number;
    bridgeComponent?: string;
    clientAuthMode?: string;
    connectorUrl?: string;
    customConfig?: string;
    customIcon?: string;
    customLoginUrl?: string;
    developerName: string;
    einsteinConversationInsightsSupported?: boolean;
    integrationClass?: string;
    integrationClassName?: string;
    intelligenceSupported?: boolean;
    isTaxCompliant?: boolean;
    keyProvisioningSupported?: boolean;
    masterLabel: string;
    namedCredential?: string;
    namedCredentialSupported?: boolean;
    partnerContactCenterListSupported?: boolean;
    partnerPhoneNumbersSupported?: boolean;
    partnerTransferDestinationsSupported?: boolean;
    queueManagementSupported?: boolean;
    serverAuthMode?: string;
    telephonySettingsComponent?: string;
    unifiedRoutingSupported?: boolean;
    universalCallRecordingAccessSupported?: boolean;
    userSyncingSupported?: boolean;
    vendorType?: string;
}

export type ConversationalIntelligenceSettings = Metadata & {
    enableCallCoaching?: boolean;
    enableCallCoachingZoom?: boolean;
    enableCallExplorer?: boolean;
    enableCallSummarization?: boolean;
    enableConversationMining?: boolean;
    enableDiarizationPref?: boolean;
    enableGenerativeConvInsights?: boolean;
    enableManualUpload?: boolean;
    enableOpptyMatching?: boolean;
    enableRealtimeInsights?: boolean;
    enableUnifiedActivities?: boolean;
}

export type CorsWhitelistOrigin = Metadata & {
    urlPattern: string;
}

export type CspTrustedSite = Metadata & {
    canAccessCamera?: boolean;
    canAccessMicrophone?: boolean;
    context?: string;
    description?: string;
    endpointUrl: string;
    isActive: boolean;
    isApplicableToConnectSrc?: boolean;
    isApplicableToFontSrc?: boolean;
    isApplicableToFrameSrc?: boolean;
    isApplicableToImgSrc?: boolean;
    isApplicableToMediaSrc?: boolean;
    isApplicableToStyleSrc?: boolean;
    mobileExtension?: string;
}

export type CurrencySettings = Metadata & {
    enableCurrencyEffectiveDates?: boolean;
    enableCurrencySymbolWithMultiCurrency?: boolean;
    enableMultiCurrency?: boolean;
    isMultiCurrencyActivationAllowed?: boolean;
    isParenCurrencyConvDisabled?: boolean;
}

export type CustomAddressFieldSettings = Metadata & {
    enableCustomAddressField?: boolean;
}

export type CustomApplication = Metadata & {
    actionOverrides: AppActionOverride[];
    brand?: AppBrand;
    consoleConfig?: ServiceCloudConsoleConfig;
    defaultLandingTab?: string;
    description?: string;
    formFactors: string[];
    isNavAutoTempTabsDisabled?: boolean;
    isNavPersonalizationDisabled?: boolean;
    isNavTabPersistenceDisabled?: boolean;
    isOmniPinnedViewEnabled?: boolean;
    isServiceCloudConsole?: boolean;
    label?: string;
    logo?: string;
    navType?: string;
    preferences?: AppPreferences;
    profileActionOverrides: AppProfileActionOverride[];
    setupExperience?: string;
    subscriberTabs: string[];
    tabSetType?: string;
    tabs: string[];
    uiType?: string;
    utilityBar?: string;
    workspaceConfig?: AppWorkspaceConfig;
}

export type CustomApplicationComponent = Metadata & {
    buttonIconUrl?: string;
    buttonStyle?: string;
    buttonText?: string;
    buttonWidth?: number;
    height?: number;
    isHeightFixed: boolean;
    isHidden: boolean;
    isWidthFixed: boolean;
    visualforcePage: string;
    width?: number;
}

export type CustomDataType = Metadata & {
    customDataTypeComponents: CustomDataTypeComponent[];
    description?: string;
    displayFormula?: string;
    editComponentsOnSeparateLines?: boolean;
    label: string;
    rightAligned?: boolean;
    supportComponentsInReports?: boolean;
}

export type CustomFeedFilter = Metadata & {
    criteria: FeedFilterCriterion[];
    description?: string;
    isProtected?: boolean;
    label: string;
}

export type CustomField = Metadata & {
    businessOwnerGroup?: string;
    businessOwnerUser?: string;
    businessStatus?: string;
    caseSensitive?: boolean;
    complianceGroup?: string;
    customDataType?: string;
    defaultValue?: string;
    deleteConstraint?: string;
    deprecated?: boolean;
    description?: string;
    displayFormat?: string;
    displayLocationInDecimal?: boolean;
    elementType?: string;
    encryptionScheme?: string;
    escapeMarkup?: boolean;
    externalDeveloperName?: string;
    externalId?: boolean;
    fieldManageability?: string;
    formula?: string;
    formulaTreatBlanksAs?: string;
    inlineHelpText?: string;
    isAIPredictionField?: boolean;
    isConvertLeadDisabled?: boolean;
    isFilteringDisabled?: boolean;
    isNameField?: boolean;
    isSortingDisabled?: boolean;
    label?: string;
    length?: number;
    lookupFilter?: LookupFilter;
    maskChar?: string;
    maskType?: string;
    metadataRelationshipControllingField?: string;
    mktDataLakeFieldAttributes?: MktDataLakeFieldAttributes;
    mktDataModelFieldAttributes?: MktDataModelFieldAttributes;
    picklist?: Picklist;
    populateExistingRows?: boolean;
    precision?: number;
    readOnlyProxy?: boolean;
    referenceTargetField?: string;
    referenceTo?: string;
    relationshipLabel?: string;
    relationshipName?: string;
    relationshipOrder?: number;
    reparentableMasterDetail?: boolean;
    required?: boolean;
    restrictedAdminField?: boolean;
    scale?: number;
    securityClassification?: string;
    startingNumber?: number;
    stripMarkup?: boolean;
    summarizedField?: string;
    summaryFilterItems: FilterItem[];
    summaryForeignKey?: string;
    summaryOperation?: string;
    trackFeedHistory?: boolean;
    trackHistory?: boolean;
    trackTrending?: boolean;
    translateData?: boolean;
    type?: string;
    unique?: boolean;
    valueSet?: ValueSet;
    visibleLines?: number;
    writeRequiresMasterRead?: boolean;
}

export type CustomValue = Metadata & {
    color?: string;
    default: boolean;
    description?: string;
    isActive?: boolean;
    label?: string;
}

export type StandardValue = CustomValue & {
    allowEmail?: boolean;
    closed?: boolean;
    converted?: boolean;
    cssExposed?: boolean;
    forecastCategory?: string;
    groupingString?: string;
    highPriority?: boolean;
    probability?: number;
    reverseRole?: string;
    reviewed?: boolean;
    won?: boolean;
}

export type CustomHelpMenuSection = Metadata & {
    customHelpMenuItems: CustomHelpMenuItem[];
    masterLabel: string;
}

export type CustomIndex = Metadata & {
    allowNullValues?: boolean;
    booleanIndexedValue?: boolean;
}

export type CustomLabel = Metadata & {
    categories?: string;
    language: string;
    protected: boolean;
    shortDescription: string;
    value: string;
}

export type CustomLabels = Metadata & {
    labels: CustomLabel[];
}

export type CustomMetadata = Metadata & {
    description?: string;
    label?: string;
    protected?: boolean;
    values: CustomMetadataValue[];
}

export type CustomNotificationType = Metadata & {
    customNotifTypeName: string;
    description?: string;
    desktop: boolean;
    masterLabel: string;
    mobile: boolean;
    slack?: boolean;
}

export type CustomObject = Metadata & {
    actionOverrides: ActionOverride[];
    allowInChatterGroups?: boolean;
    articleTypeChannelDisplay?: ArticleTypeChannelDisplay;
    businessProcesses: BusinessProcess[];
    compactLayoutAssignment?: string;
    compactLayouts: CompactLayout[];
    customHelp?: string;
    customHelpPage?: string;
    customSettingsType?: string;
    deploymentStatus?: string;
    deprecated?: boolean;
    description?: string;
    enableActivities?: boolean;
    enableBulkApi?: boolean;
    enableDataTranslation?: boolean;
    enableDivisions?: boolean;
    enableEnhancedLookup?: boolean;
    enableFeeds?: boolean;
    enableHistory?: boolean;
    enableLicensing?: boolean;
    enablePublishStatusTracking?: boolean;
    enableReports?: boolean;
    enableSearch?: boolean;
    enableSharing?: boolean;
    enableStreamingApi?: boolean;
    eventType?: string;
    externalDataSource?: string;
    externalIndexAvailable?: boolean;
    externalName?: string;
    externalRepository?: string;
    externalSharingModel?: string;
    fieldSets: FieldSet[];
    fields: CustomField[];
    gender?: string;
    historyRetentionPolicy?: HistoryRetentionPolicy;
    household?: boolean;
    indexes: Index[];
    label?: string;
    listViews: ListView[];
    mktDataLakeAttributes?: MktDataLakeAttributes;
    mktDataModelAttributes?: MktDataModelAttributes;
    nameField?: CustomField;
    pluralLabel?: string;
    profileSearchLayouts: ProfileSearchLayouts[];
    publishBehavior?: string;
    recordTypeTrackFeedHistory?: boolean;
    recordTypeTrackHistory?: boolean;
    recordTypes: RecordType[];
    searchLayouts?: SearchLayouts;
    sharingModel?: string;
    sharingReasons: SharingReason[];
    sharingRecalculations: SharingRecalculation[];
    startsWith?: string;
    validationRules: ValidationRule[];
    visibility?: string;
    webLinks: WebLink[];
}

export type FieldSet = Metadata & {
    availableFields: FieldSetItem[];
    description: string;
    displayedFields: FieldSetItem[];
    label: string;
}

export type Index = Metadata & {
    fields: IndexField[];
    label: string;
    minNumRequiredIndexedFields?: number;
    type?: string;
}

export type ListView = Metadata & {
    booleanFilter?: string;
    columns: string[];
    division?: string;
    filterScope: string;
    filters: ListViewFilter[];
    label: string;
    language?: string;
    queue?: string;
    sharedTo?: SharedTo;
}

export type RecordType = Metadata & {
    active: boolean;
    businessProcess?: string;
    compactLayoutAssignment?: string;
    description?: string;
    label: string;
    picklistValues: RecordTypePicklistValue[];
}

export type SharingReason = Metadata & {
    label: string;
}

export type ValidationRule = Metadata & {
    active: boolean;
    description?: string;
    errorConditionFormula: string;
    errorDisplayField?: string;
    errorMessage: string;
    shouldEvaluateOnClient?: boolean;
}

export type WebLink = Metadata & {
    availability: string;
    description?: string;
    displayType: string;
    encodingKey?: string;
    hasMenubar?: boolean;
    hasScrollbars?: boolean;
    hasToolbar?: boolean;
    height?: number;
    isResizable?: boolean;
    linkType: string;
    masterLabel?: string;
    openType: string;
    page?: string;
    position?: string;
    protected: boolean;
    requireRowSelection?: boolean;
    scontrol?: string;
    showsLocation?: boolean;
    showsStatus?: boolean;
    url?: string;
    width?: number;
}

export type CustomObjectTranslation = Metadata & {
    caseValues: ObjectNameCaseValue[];
    fieldSets: FieldSetTranslation[];
    fields: CustomFieldTranslation[];
    gender?: string;
    layouts: LayoutTranslation[];
    nameFieldLabel?: string;
    quickActions: QuickActionTranslation[];
    recordTypes: RecordTypeTranslation[];
    sharingReasons: SharingReasonTranslation[];
    standardFields: StandardFieldTranslation[];
    startsWith?: string;
    validationRules: ValidationRuleTranslation[];
    webLinks: WebLinkTranslation[];
    workflowTasks: WorkflowTaskTranslation[];
}

export type CustomPageWebLink = Metadata & {
    availability: string;
    description?: string;
    displayType: string;
    encodingKey?: string;
    hasMenubar?: boolean;
    hasScrollbars?: boolean;
    hasToolbar?: boolean;
    height?: number;
    isResizable?: boolean;
    linkType: string;
    masterLabel?: string;
    openType: string;
    page?: string;
    position?: string;
    protected: boolean;
    requireRowSelection?: boolean;
    scontrol?: string;
    showsLocation?: boolean;
    showsStatus?: boolean;
    url?: string;
    width?: number;
}

export type CustomPermission = Metadata & {
    connectedApp?: string;
    description?: string;
    externalClientApplication?: string;
    isLicensed: boolean;
    label: string;
    requiredPermission: CustomPermissionDependencyRequired[];
}

export type CustomSite = Metadata & {
    active: boolean;
    allowGuestPaymentsApi?: boolean;
    allowHomePage: boolean;
    allowStandardAnswersPages?: boolean;
    allowStandardIdeasPages: boolean;
    allowStandardLookups: boolean;
    allowStandardPortalPages: boolean;
    allowStandardSearch: boolean;
    analyticsTrackingCode?: string;
    authorizationRequiredPage?: string;
    bandwidthExceededPage?: string;
    browserXssProtection: boolean;
    cachePublicVisualforcePagesInProxyServers?: boolean;
    changePasswordPage?: string;
    chatterAnswersForgotPasswordConfirmPage?: string;
    chatterAnswersForgotPasswordPage?: string;
    chatterAnswersHelpPage?: string;
    chatterAnswersLoginPage?: string;
    chatterAnswersRegistrationPage?: string;
    clickjackProtectionLevel: string;
    contentSniffingProtection: boolean;
    customWebAddresses: SiteWebAddress[];
    description?: string;
    enableAuraRequests?: boolean;
    favoriteIcon?: string;
    fileNotFoundPage?: string;
    forgotPasswordPage?: string;
    genericErrorPage?: string;
    guestProfile?: string;
    inMaintenancePage?: string;
    inactiveIndexPage?: string;
    indexPage: string;
    masterLabel: string;
    myProfilePage?: string;
    portal?: string;
    redirectToCustomDomain?: boolean;
    referrerPolicyOriginWhenCrossOrigin: boolean;
    robotsTxtPage?: string;
    selfRegPage?: string;
    serverIsDown?: string;
    siteAdmin?: string;
    siteGuestRecordDefaultOwner?: string;
    siteIframeWhiteListUrls: SiteIframeWhiteListUrl[];
    siteRedirectMappings: SiteRedirectMapping[];
    siteTemplate?: string;
    siteType: string;
    subdomain?: string;
    urlPathPrefix?: string;
}

export type CustomTab = Metadata & {
    actionOverrides: ActionOverride[];
    auraComponent?: string;
    customObject?: boolean;
    description?: string;
    flexiPage?: string;
    frameHeight?: number;
    hasSidebar?: boolean;
    icon?: string;
    label?: string;
    lwcComponent?: string;
    motif?: string;
    page?: string;
    scontrol?: string;
    splashPageLink?: string;
    url?: string;
    urlEncodingKey?: string;
}

export type CustomerDataPlatformSettings = Metadata & {
    enableCustomerDataPlatform?: boolean;
}

export type CustomizablePropensityScoringSettings = Metadata & {
    enableCpsPref?: boolean;
}

export type Dashboard = Metadata & {
    backgroundEndColor: string;
    backgroundFadeDirection: string;
    backgroundStartColor: string;
    chartTheme?: string;
    colorPalette?: string;
    dashboardChartTheme?: string;
    dashboardColorPalette?: string;
    dashboardFilters: DashboardFilter[];
    dashboardGridLayout?: DashboardGridLayout;
    dashboardResultRefreshedDate?: string;
    dashboardResultRunningUser?: string;
    dashboardType?: string;
    description?: string;
    folderName?: string;
    isGridLayout?: boolean;
    leftSection?: DashboardComponentSection;
    middleSection?: DashboardComponentSection;
    numSubscriptions?: number;
    owner?: string;
    rightSection?: DashboardComponentSection;
    runningUser?: string;
    textColor: string;
    title: string;
    titleColor: string;
    titleSize: number;
}

export type DataCalcInsightTemplate = Metadata & {
    builderExpression: string;
    creationType?: string;
    dataspaceName: string;
    dataspacePrefix: string;
    definitionType: string;
    description: string;
    developerName: string;
    expression: string;
    masterLabel: string;
    scheduleEndDate?: Date;
    scheduleInterval?: string;
    scheduleStartDateTime?: Date;
    sourceObjectDevName?: string;
    templateVersion?: number;
}

export type DataCategoryGroup = Metadata & {
    active: boolean;
    dataCategory: DataCategory;
    description?: string;
    label: string;
    objectUsage?: ObjectUsage;
}

export type DataConnectionParamTmpl = Metadata & {
    paramName: string;
    value: string;
}

export type DataConnectorIngestApi = Metadata & {
    isProtected?: boolean;
    masterLabel: string;
    sourceName: string;
}

export type DataConnectorS3 = Metadata & {
    delimiter?: string;
    fileNameWildcard?: string;
    fileType?: string;
    importFromDirectory?: string;
    masterLabel: string;
    s3AccessKey?: string;
    s3BucketName: string;
    s3SecretKey?: string;
}

export type DataDotComSettings = Metadata & {
    enableAccountExportButtonOff?: boolean;
    enableAccountImportButtonOff?: boolean;
    enableAllowDupeContactFromLead?: boolean;
    enableAllowDupeLeadFromContact?: boolean;
    enableContactExportButtonOff?: boolean;
    enableContactImportButtonOff?: boolean;
    enableDDCSocialKeyEnabled?: boolean;
    enableDataDotComCleanEnabled?: boolean;
    enableDataDotComOptOutsEnabled?: boolean;
    enableDatacloudAPIEnabled?: boolean;
}

export type DataKitObjectDependency = Metadata & {
    dataPackageKitDef: string;
    developerName: string;
    masterLabel: string;
    sourceObject: string;
    sourceObjectType: string;
    targetObject: string;
}

export type DataKitObjectTemplate = Metadata & {
    developerName: string;
    entityPayload?: string;
    masterLabel: string;
    parentDataPackageKitDefinitionName: string;
    sourceObject?: string;
    sourceObjectType: string;
    templateVersion?: number;
}

export type DataModelTaxonomy = Metadata & {
    creationType?: string;
    dataModelType: string;
    dataObjectCategories: DataObjectCategory[];
    isProtected?: boolean;
    masterLabel: string;
    supplier: string;
    updateDate: Date;
    versionNbr: number;
}

export type DataObjectCategory = Metadata & {
    definitionCreationType?: string;
    masterLabel: string;
}

export type DataObjectSearchIndexConf = Metadata & {
    application: string;
    channel?: string;
    masterLabel: string;
    nameFieldReference: string;
    objectReference: string;
    retriever?: string;
    searchIndex: string;
}

export type DataPackageKitDefinition = Metadata & {
    dataKitSource?: string;
    dataKitType?: string;
    dataSpaceDefinitionDevName?: string;
    deploymentOrder?: string;
    description?: string;
    developerName: string;
    isDeployed?: boolean;
    isEnabled?: boolean;
    masterLabel: string;
    versionNumber?: number;
}

export type DataPackageKitObject = Metadata & {
    masterLabel: string;
    parentDataPackageKitDefinitionName: string;
    referenceObjectName: string;
    referenceObjectType: string;
}

export type DataPlatform = Metadata & {
    dataConnectorType: string;
    dataPlatDataSetBundles: DataPlatDataSetBundle[];
    description?: string;
    forExportIntOrgName?: string;
    forImportIntOrgName?: string;
    isConfiguredByAdmin?: boolean;
    isProtected?: boolean;
    largeIconUri?: string;
    masterLabel: string;
    smallIconUri?: string;
}

export type DataSource = Metadata & {
    masterLabel: string;
    prefix: string;
}

export type DataSourceBundleDefinition = Metadata & {
    bundleVersion?: number;
    dataPlatform: string;
    description?: string;
    icon?: string;
    isMultiDeploymentSupported?: boolean;
    masterLabel: string;
}

export type DataSourceField = Metadata & {
    datatype: string;
    dateFormat?: string;
    definitionCreationType?: string;
    externalDataType?: string;
    externalName: string;
    fieldFormula?: string;
    isDataRequired?: boolean;
    isEventDate?: boolean;
    isFormula?: boolean;
    isRecordModified?: boolean;
    keyQualifierName?: string;
    length?: number;
    masterLabel: string;
    precision?: number;
    primaryIndexOrder?: number;
    scale?: number;
    sequence: number;
    srcKeyQualifier?: string;
    usageTag?: string;
    versionNumber: number;
}

export type DataSourceObject = Metadata & {
    accelerationEnabled?: string;
    additionalDLOInfoJson?: string;
    creationType?: string;
    dataConnection?: string;
    dataSource: string;
    dataSourceFields: DataSourceField[];
    dmoDeveloperName?: string;
    dmoLabel?: string;
    externalDatabaseName?: string;
    externalObjectName?: string;
    externalRecordIdentifier?: string;
    externalSchemaName?: string;
    masterLabel: string;
    objectCategory?: string;
    objectType?: string;
    sourceObject?: string;
    storageType?: string;
    templateVersion?: number;
}

export type DataSourceTenant = Metadata & {
    externalRecordId: string;
    masterLabel: string;
}

export type DataSrcDataModelFieldMap = Metadata & {
    filterApplied?: boolean;
    filterOperationType?: string;
    filterValue?: string;
    masterLabel: string;
    sourceField: string;
    targetField: string;
    templateVersion?: number;
    versionNumber: number;
}

export type DataStreamDefinition = Metadata & {
    areHeadersIncludedInFile?: boolean;
    bulkIngest?: boolean;
    creationType: string;
    dataConnector: string;
    dataConnectorType?: string;
    dataExtensionIdentifier?: string;
    dataExtractField?: string;
    dataExtractMethods?: string;
    dataPlatDataSetBundle?: string;
    dataPlatformDataSetItemName?: string;
    dataSource: string;
    description?: string;
    fileNameWildcard?: string;
    internalOrganization?: string;
    isLimitedToNewFiles?: boolean;
    isMissingFileFailure?: boolean;
    masterLabel: string;
    mktDataLakeObject: string;
    mktDataTranObject?: string;
    parameters: MktDataConnectionSrcParam[];
}

export type MktDataConnectionSrcParam = Metadata & {
    paramName: string;
    value: string;
}

export type DataStreamTemplate = Metadata & {
    dataConnectionSourceParameters: DataConnectionParamTmpl[];
    dataSourceBundleDefinition: string;
    dataSourceObject: string;
    filterCriteria?: string;
    masterLabel: string;
    objectCategory: string;
    refreshDayOfMonth?: number;
    refreshDayOfWeek?: number;
    refreshFrequency?: string;
    refreshHours?: string;
    refreshMode?: string;
    refreshStartDate?: Date;
    sourceObjectName?: string;
    streamType?: string;
    streamingAppDataConnectorType?: string;
    templateVersion?: number;
}

export type DataspaceScope = Metadata & {
    description?: string;
    isProtected?: boolean;
    masterLabel: string;
    metadataGroups: DataspaceScopeSchemaAccess[];
}

export type DecisionMatrixDefinition = Metadata & {
    description?: string;
    groupKey?: string;
    label: string;
    processType?: string;
    subGroupKey?: string;
    type?: string;
    versions: DecisionMatrixDefinitionVersion[];
}

export type DecisionMatrixDefinitionVersion = Metadata & {
    columns: DecisionMatrixDefinitionVersionColumn[];
    decisionMatrixDefinition?: string;
    endDate?: Date;
    groupKeyValue?: string;
    label: string;
    startDate: Date;
    status: string;
    subGroupKeyValue?: string;
    versionNumber: number;
}

export type DecisionTable = Metadata & {
    collectOperator?: string;
    conditionCriteria?: string;
    conditionType?: string;
    dataSourceType?: string;
    decisionTableParameters: DecisionTableParameter[];
    decisionTableSourceCriterias: DecisionTableSourceCriteria[];
    description?: string;
    doesConsiderNullValue?: boolean;
    executionType?: string;
    filterResultBy?: string;
    hasIncrementalSyncFailed?: boolean;
    isIncrementalSyncEnabled?: boolean;
    lastIncrementalSyncDate?: string;
    lastSyncDate?: string;
    refreshFailureReason?: string;
    refreshStatus?: string;
    setupName: string;
    sourceConditionLogic?: string;
    sourceObject: string;
    status: string;
    type?: string;
    uploadStatus?: string;
    usageType?: string;
}

export type DecisionTableDatasetLink = Metadata & {
    decisionTableName: string;
    decisionTblDatasetParameters: DecisionTblDatasetParameter[];
    description?: string;
    isDefault?: boolean;
    setupName: string;
    sourceObject?: string;
}

export type PlatformEventSubscriberConfig = Metadata & {
    batchSize?: number;
    isProtected?: boolean;
    masterLabel: string;
    numPartitions?: number;
    partitionKey?: string;
    platformEventConsumer: string;
    user?: string;
}

export type FtestTopLevelWithDeclMd1 = Metadata & {
    bitVectorFieldRound?: boolean;
    bitVectorFieldSquare?: boolean;
    bitVectorFieldTriangle?: boolean;
    booleanField?: boolean;
    dateField?: Date;
    dateTimeField?: Date;
    doubleField?: number;
    emailField?: string;
    ftestDetailWithDeclMd2: FtestDetailWithDeclMd2[];
    integerField: number;
    isProtected?: boolean;
    masterLabel: string;
    overriddenFieldName?: string;
    staticEnumField?: string;
    typeOneItems: FtestDetailWithDeclMd1[];
}

export type FtestTopLevelWithDeclMd3 = Metadata & {
    isProtected?: boolean;
    lookupThatCameBefore?: string;
    masterLabel: string;
}

export type FtestTopLevelWithCrud = Metadata & {
    isProtected?: boolean;
    masterLabel: string;
    textField?: string;
}

export type SchedulingObjective = Metadata & {
    isProtected?: boolean;
    masterLabel: string;
    schedulingCategory: string;
    schedulingObjectiveParameters: SchedulingObjectiveParameter[];
    schedulingObjectiveType: string;
}

export type FtestTopLevelWithDeclMd2 = Metadata & {
    enumOrIdField?: string;
    isProtected?: boolean;
    lookupField?: string;
    masterLabel: string;
    onOrOffField: string;
    season?: string;
    someUser?: string;
    staticResourceLookup?: string;
    stripEnumOrIdSuffix?: string;
    textField?: string;
    urlField?: string;
}

export type PipelineInspMetricConfig = Metadata & {
    isCumulative: boolean;
    isProtected?: boolean;
    masterLabel: string;
    metric: string;
}

export type VirtualVisitConfig = Metadata & {
    comprehendServiceType?: string;
    experienceCloudSiteUrl?: string;
    externalMsgServiceIdentifier?: string;
    externalRoleIdentifier?: string;
    externalUserIdentifier?: string;
    isProtected?: boolean;
    masterLabel: string;
    messagingRegion?: string;
    namedCredential?: string;
    storageBucketName?: string;
    usageType?: string;
    videoCallApptTypeValue?: string;
    videoControlRegion?: string;
    visitRegion?: string;
}

export type MobileSecurityAssignment = Metadata & {
    connectedApplication?: string;
    isProtected?: boolean;
    masterLabel: string;
    profile?: string;
}

export type MobileSecurityPolicy = Metadata & {
    effectiveDate?: Date;
    isEnabled: boolean;
    isProtected?: boolean;
    masterLabel: string;
    mobilePlatform?: string;
    mobileSecurityAssignment?: string;
    ruleValue: string;
    ruleValueType: string;
    severityLevel: string;
    type: string;
}

export type LearningAchievementConfig = Metadata & {
    description?: string;
    iconName?: string;
    isProtected?: boolean;
    learningAchievementType: string;
    learningAchvRecordType: string;
    masterLabel: string;
}

export type RecordAlertDataSource = Metadata & {
    apexClass?: string;
    isActive?: boolean;
    isProtected?: boolean;
    masterLabel: string;
    type: string;
}

export type DocumentCategory = Metadata & {
    description?: string;
    isProtected?: boolean;
    masterLabel: string;
}

export type RecAlrtDataSrcExpSetDef = Metadata & {
    expressionSetDefinition: string;
    expressionSetObject: string;
    isActive: boolean;
    isProtected?: boolean;
    masterLabel: string;
    recordAlertDataSource: string;
}

export type EmployeeDataSyncProfile = Metadata & {
    description?: string;
    employeeDataSyncField: EmployeeDataSyncField[];
    isActive: boolean;
    isProtected?: boolean;
    masterLabel: string;
}

export type RegisteredExternalService = Metadata & {
    configUrl?: string;
    description?: string;
    documentationUrl?: string;
    extensionPointName?: string;
    externalServiceProvider: string;
    externalServiceProviderType: string;
    iconUri?: string;
    isApplication?: boolean;
    isProtected?: boolean;
    masterLabel: string;
}

export type CustomFieldDisplay = Metadata & {
    displayType: string;
    fieldApiName: string;
    isProtected?: boolean;
    masterLabel: string;
}

export type AccountingFieldMapping = Metadata & {
    accountingModelConfig: string;
    isForAllocationType?: boolean;
    isForPaymentType?: boolean;
    isForTransactionType?: boolean;
    isProtected?: boolean;
    mappingBehavior: string;
    masterLabel: string;
    sourceField?: string;
    targetField: string;
}

export type RecordAlertTemplate = Metadata & {
    description?: string;
    isProtected?: boolean;
    masterLabel: string;
    recordAlertCategory?: string;
    subject?: string;
}

export type RelatedRecordAccessDef = Metadata & {
    description?: string;
    isProtected?: boolean;
    jctObjectCstmFilterExps?: string;
    jctObjectFilterLogic?: string;
    junctionObject?: string;
    masterLabel: string;
    relatedRecordAccessFltr: RelatedRecordAccessFltr[];
    relatedRecordAccessMap: RelatedRecordAccessMap[];
    shareTo?: string;
    sourceObject: string;
    sourceObjectCstmFilterExps?: string;
    sourceObjectFilterLogic?: string;
    status: string;
    targetObject: string;
    targetObjectCstmFilterExps?: string;
    targetObjectFilterLogic?: string;
}

export type MobSecurityCertPinConfig = Metadata & {
    certificateHash: string;
    domainName: string;
    isEnabled: boolean;
    isProtected?: boolean;
    isSubdomainIncluded: boolean;
    masterLabel: string;
    mobilePlatform?: string;
    mobileSecurityAssignment?: string;
    severityLevel: string;
    type: string;
}

export type SlackFeatureSettings = Metadata & {
    isProtected?: boolean;
    masterLabel: string;
}

export type ActionableListDefinition = Metadata & {
    actionableListDatasetColumns: ActionableListDatasetColumn[];
    actionableListMemberStatuses: ActionableListMemberStatus[];
    batchCalcJobDefinition?: string;
    datasetName?: string;
    edgeMart?: string;
    isActive?: boolean;
    isProtected?: boolean;
    masterLabel: string;
    objectName: string;
    sourceType?: string;
    type?: string;
}

export type CareProviderSearchConfig = Metadata & {
    isActive?: boolean;
    isProtected?: boolean;
    mappedObject: string;
    masterLabel: string;
    sourceField?: string;
    targetField?: string;
}

export type CareSystemFieldMapping = Metadata & {
    externalIdField?: string;
    isActive?: boolean;
    isProtected?: boolean;
    masterLabel: string;
    role: string;
    sourceSystem?: string;
    targetObject?: string;
}

export type CareLimitType = Metadata & {
    isProtected?: boolean;
    limitType?: string;
    masterLabel: string;
    metricType?: string;
}

export type AssessmentConfiguration = Metadata & {
    configuration: string;
    isProtected?: boolean;
    masterLabel: string;
    resolution: string;
    type: string;
}

export type SchedulingRule = Metadata & {
    isProtected?: boolean;
    masterLabel: string;
    schedulingCategory: string;
    schedulingRuleParameters: SchedulingRuleParameter[];
    schedulingRuleType: string;
}

export type CareProviderAfflRoleConfig = Metadata & {
    affiliationType?: string;
    isProtected?: boolean;
    masterLabel: string;
    providerRole?: string;
}

export type OpptStageDescription = Metadata & {
    description: string;
    isProtected?: boolean;
    masterLabel: string;
    opportunityStageIdentifier: string;
}

export type DatasetImportRequest = Metadata & {
    asyncApiJob?: string;
    dataConnector?: string;
    dataFile?: string;
    dataPrepRecipe?: string;
    isProtected?: boolean;
    masterLabel: string;
    user: string;
}

export type PortalDelegablePermissionSet = Metadata & {
    isProtected?: boolean;
    masterLabel: string;
    permissionSet: string;
    profile: string;
}

export type RelatedRecordAssocCriteria = Metadata & {
    associationHandlerApexClass?: string;
    associationType: string;
    description?: string;
    eventType: string;
    isProtected?: boolean;
    masterLabel: string;
    preCondition: string;
    referenceObject: string;
    selectedOwnerField?: string;
    status: string;
}

export type DocumentCategoryDocumentType = Metadata & {
    documentCategory: string;
    documentType: string;
    isProtected?: boolean;
    masterLabel: string;
}

export type ShiftSegmentType = Metadata & {
    adherenceThreshold: number;
    category: string;
    color?: string;
    isActive?: boolean;
    isProtected?: boolean;
    masterLabel: string;
    servicePresenceStatus?: string;
}

export type ProductConfiguratorSettings = Metadata & {
    enableProductConfigurator?: boolean;
}

export type DataImportManagementSettings = Metadata & {
    enableDataConnectorHubspot?: boolean;
    enableEasyImport?: boolean;
}

export type WorkforceEngagementSettings = Metadata & {
    enableHistoricalAdherence?: boolean;
    enableIndividualAdherence?: boolean;
    enableIntradayManagement?: boolean;
    enableMachineLearningForecasting?: boolean;
    enableRealTimeAdherence?: boolean;
    enableWorkforceEngagement?: boolean;
    enableWorkforceEngagementConfiguration?: boolean;
}

export type ClaimMgmtFoundationEnabledSettings = Metadata & {
    enableWarrantyClaimMgmt?: boolean;
}

export type EinsteinCopilotSettings = Metadata & {
    enableEinsteinGptCopilot?: boolean;
}

export type FTestSettings = Metadata & {
    enableTestPref?: boolean;
}

export type MediaAdSalesSettings = Metadata & {
    enableMediaAdSales?: boolean;
}

export type IndustriesPricingSettings = Metadata & {
    enableDebugPriceLogs?: boolean;
    enableHighAvailability?: boolean;
    enableLowestPriceCompliance?: boolean;
    enablePricingWaterfall?: boolean;
    enablePricingWaterfallPersistence?: boolean;
    enableSalesforcePricing?: boolean;
}

export type BranchManagementSettings = Metadata & {
    associateAccountWithBranch?: boolean;
}

export type DynamicFormsSettings = Metadata & {
    enableFormsOnMobile?: boolean;
}

export type CodeBuilderSettings = Metadata & {
    enableCodeBuilder?: boolean;
}

export type IndustriesContextSettings = Metadata & {
    enableContextDefinitions?: boolean;
}

export type IndustriesLsCommercialSettings = Metadata & {
    enableLsPtntSuptPgmGenAIPref?: boolean;
}

export type IncludeEstTaxInQuoteCPQSettings = Metadata & {
    enableQuoteEstimatedTaxCPQ?: boolean;
}

export type ConversationServiceIntegrationSettings = Metadata & {
    enableConvoCatchUpForAgents?: boolean;
    enableConvoCatchUpForSupervisors?: boolean;
}

export type EinsteinAISettings = Metadata & {
    enableAIFeedbackWithDC?: boolean;
    enableAITrustInputToxicityDetection?: boolean;
    enableAITrustPromptInjectionDetection?: boolean;
    enablePBHideScopedNotif?: boolean;
    enablePBPromptPerformanceMetrics?: boolean;
    enableTrustPIIMasking?: boolean;
}

export type IndustriesGamificationSettings = Metadata & {
    enableGamification?: boolean;
}

export type PlatformEventSettings = Metadata & {
    enableEnhancedUsageMetrics?: boolean;
}

export type AssociationEngineSettings = Metadata & {
    enableAssociationEngine?: boolean;
}

export type IndustriesUsageSettings = Metadata & {
    enableUsage?: boolean;
}

export type OrgSettings = Metadata & {
    enableCustomerSuccessPortal?: boolean;
    enableIncludeContractStatus?: boolean;
    enableMakeDeploymentsMandatory?: boolean;
    enableManageSelfServiceUsers?: boolean;
    enableOrgFeedSentimentAnalysis?: boolean;
    enableRADeploymentAttributeOnly?: boolean;
    enableResetDivisionOnLogin?: boolean;
}

export type AgentforceForDevelopersSettings = Metadata & {
    agentforceForDevelopersOptOut?: boolean;
}

export type IncludeEstTaxInQuoteSettings = Metadata & {
    enableQuoteEstimatedTax?: boolean;
}

export type ReferralMarketingSettings = Metadata & {
    enableMarketingCloudIntegration?: boolean;
}

export type AccountPlanSettings = Metadata & {
    enableAccountPlan?: boolean;
}

export type PaymentsManagementEnabledSettings = Metadata & {
    paymentsManagementEnabled?: boolean;
}

export type EinsteinGptSettings = Metadata & {
    enableAIProviderAWSBedrock?: boolean;
    enableAIProviderAzureOpenAI?: boolean;
    enableAIProviderGoogleVertex?: boolean;
    enableAIProviderOpenAI?: boolean;
    enableEinsteinGPTDeployPromptTemplatesAsActive?: boolean;
    enableEinsteinGptGlobalLangSupport?: boolean;
    enableEinsteinGptPlatform?: boolean;
}

export type PlatformSlackSettings = Metadata & {
    enableSlackService?: boolean;
    enableSlackServiceAlerts?: boolean;
    slackCapabilitiesEnabled?: boolean;
}

export type RevenueManagementSettings = Metadata & {
    enableAutoAddDerivedAsset?: boolean;
    enableCoreCPQ?: boolean;
    enableDeltaPricing?: boolean;
    enableRampDeal?: boolean;
    enableTransactionProcessor?: boolean;
    groupsEnabled?: boolean;
}

export type KnowledgeGenerationSettings = Metadata & {
    enableKSUsingHybridSearch?: boolean;
    enableKnowledgeGeneration?: boolean;
}

export type DynamicFulfillmentOrchestratorSettings = Metadata & {
    enableDFOFallout?: boolean;
    enableDFOJeopardy?: boolean;
    enableDFOPref?: boolean;
    enableDROFutureDatedTasks?: boolean;
    enableDROInflightRequest?: boolean;
    enableDROTaskSource?: boolean;
}

export type MailMergeSettings = Metadata & {
    enableExtendedMailMerge?: boolean;
    saveMailMergeDocsAsSalesforceDocs?: boolean;
}

export type AccountingSettings = Metadata & {
    enableAccountingSubledger?: boolean;
    enableFinancePeriod?: boolean;
    enablePaymentMethodAdjust?: boolean;
    enableScheduledJob?: boolean;
    enableSkipReversalLogic?: boolean;
}

export type CollectionsDashboardSettings = Metadata & {
    enableCollectionsDashboard?: boolean;
}

export type InvLatePymntRiskCalcSettings = Metadata & {
    enableInvLatePymntRiskCalc?: boolean;
}

export type FTestAccessSettings = Metadata & {
    enableTestPref?: boolean;
}

export type SceGlobalModelOptOutSettings = Metadata & {
    sceGlobalModelOptOut?: boolean;
}

export type SandboxSettings = Metadata & {
    disableSandboxExpirationEmails?: boolean;
}

export type InterestTaggingSettings = Metadata & {
    enableInterestTagging?: boolean;
}

export type IndustriesRatingSettings = Metadata & {
    enableRating?: boolean;
    enableRatingWaterfall?: boolean;
    enableRatingWaterfallPersistence?: boolean;
}

export type EvfSettings = Metadata & {
    enableCopilotAnalytics?: boolean;
}

export type SourceTrackingSettings = Metadata & {
    enableSourceTrackingSandboxes?: boolean;
}

export type DevHubSettings = Metadata & {
    enableDevOpsCenter?: boolean;
    enableDevOpsCenterGA?: boolean;
    enablePackaging2?: boolean;
    enableScratchOrgManagementPref?: boolean;
    enableScratchOrgSnapshotPref?: boolean;
    enableShapeExportPref?: boolean;
}

export type IndustriesLoyaltySettings = Metadata & {
    enableAutomaticMemberTierAssessmentSelection?: boolean;
    enableAutomaticVoucherCodeGeneration?: boolean;
    enableFixedTypeNQPAggregation?: boolean;
    enableLoyaltyApiAccessForExternalSiteUsers?: boolean;
    enableLoyaltyGenerativeAi?: boolean;
    enableLoyaltyRedeemedPointsExpirationInfoPref?: boolean;
    enableLoyaltyRulesVerifyCdpMemberSegment?: boolean;
    enableLoyaltyServiceExcellence?: boolean;
    enableNQPRealTimePointBalance?: boolean;
    enableNegativePointBalance?: boolean;
    enableNonQualifyingPointsConsolidation?: boolean;
    enablePointsLifecycleTracking?: boolean;
    enablePromSetupProcRuleStatusInheritDplymt?: boolean;
    enableQPRealTimePointBalance?: boolean;
    enableSegmentQueryByDataGraph?: boolean;
}

export type Web3Settings = Metadata & {
    enableMultisig?: boolean;
}

export type IndustriesUnifiedPromotionsSettings = Metadata & {
    enableGlobalPromotionsProductCatalogManagement?: boolean;
    enableUnifiedPromotions?: boolean;
}

export type AppAnalyticsSettings = Metadata & {
    enableAppAnalyticsOptOut?: boolean;
    enableSimulationMode?: boolean;
}

export type MapsAndLocationSettings = Metadata & {
    enableAddressAutoComplete?: boolean;
    enableMapsAndLocation?: boolean;
}

export type LargeQuotesandOrdersForRlmSettings = Metadata & {
    enableLargeQuotesandOrdersForRlm?: boolean;
}

export type OnlineSalesSettings = Metadata & {
    enableSubscriptionAppEnrolled?: boolean;
}

export type DelegateGroup = Metadata & {
    customObjects: string[];
    groups: string[];
    label: string;
    loginAccess: boolean;
    permissionSetGroups: string[];
    permissionSets: string[];
    profiles: string[];
    roles: string[];
}

export type DeploymentSettings = Metadata & {
    doesSkipAsyncApexValidation?: boolean;
}

export type DgtAssetMgmtProvider = Metadata & {
    icon: string;
    label: string;
    masterLabel: string;
}

export type DgtAssetMgmtPrvdLghtCpnt = Metadata & {
    dgtAssetMgmtProvider: string;
    lightningComponentBundle?: string;
    masterLabel: string;
    type: string;
}

export type DigitalExperienceBundle = Metadata & {
    description?: string;
    digitalExperienceFolderShares?: DigitalExperienceFolderShares;
    label: string;
    modules?: DigitalExperienceModuleCollection;
    spaceResources: DigitalExperience[];
}

export type MetadataWithContent = Metadata & {
    content?: string;
}

export type AccessControlPolicy = MetadataWithContent & {
    active: boolean;
    deploymentStatus: string;
    description?: string;
    masterLabel: string;
    targetEntity: string;
    version: number;
}

export type ApexClass = MetadataWithContent & {
    apiVersion: number;
    packageVersions: PackageVersion[];
    status: string;
}

export type ApexComponent = MetadataWithContent & {
    apiVersion?: number;
    description?: string;
    label: string;
    packageVersions: PackageVersion[];
}

export type ApexPage = MetadataWithContent & {
    apiVersion: number;
    availableInTouch?: boolean;
    confirmationTokenRequired?: boolean;
    description?: string;
    label: string;
    packageVersions: PackageVersion[];
}

export type ApexTrigger = MetadataWithContent & {
    apiVersion: number;
    packageVersions: PackageVersion[];
    status: string;
}

export type Certificate = MetadataWithContent & {
    caSigned: boolean;
    encryptedWithPlatformEncryption?: boolean;
    expirationDate?: Date;
    keySize?: number;
    masterLabel: string;
    privateKeyExportable?: boolean;
}

export type CodeBundle = MetadataWithContent & {
    apiVersion: number;
    description?: string;
}

export type ContentAsset = MetadataWithContent & {
    format?: string;
    isVisibleByExternalUsers?: boolean;
    language: string;
    masterLabel: string;
    originNetwork?: string;
    relationships?: ContentAssetRelationships;
    versions: ContentAssetVersions;
}

export type DataPipeline = MetadataWithContent & {
    apiVersion: number;
    label: string;
    scriptType: string;
}

export type DataWeaveResource = MetadataWithContent & {
    apiVersion: number;
    isGlobal?: boolean;
    isProtected?: boolean;
}

export type DiscoveryAIModel = MetadataWithContent & {
    algorithmType: string;
    classificationThreshold?: number;
    description?: string;
    label: string;
    modelFields: DiscoveryModelField[];
    modelRuntimeType: string;
    predictedField: string;
    predictionType: string;
    sourceType: string;
    status: string;
    trainingMetrics?: string;
    transformations: DiscoveryModelTransform[];
}

export type DiscoveryStory = MetadataWithContent & {
    application: string;
    autopilot?: string;
    classificationThreshold?: number;
    label: string;
    outcome: DiscoveryStoryOutcome;
    sourceContainer: string;
    sourceType: string;
    validationContainer?: string;
}

export type Document = MetadataWithContent & {
    description?: string;
    internalUseOnly: boolean;
    keywords?: string;
    name?: string;
    public: boolean;
}

export type DocumentTemplate = MetadataWithContent & {
    customClassName?: string;
    defaultFontStyle?: string;
    documentConversionResourceName?: string;
    documentGenerationMechanism?: string;
    extractOmniDataTransformName?: string;
    fileExtension?: string;
    hasBatchableSection?: boolean;
    isActive?: boolean;
    isSectionProcessed?: boolean;
    lastEmbeddedTmplSectionKey?: string;
    mapperOmniDataTransformName?: string;
    masterLabel?: string;
    name?: string;
    namespace?: string;
    sectionHeaderFontStyle?: string;
    sectionHeaderFontStyleValue?: string;
    shouldDisplayUnmappedToken?: boolean;
    shouldExtractEmbeddedTmplToken?: boolean;
    status?: string;
    targetTokenItemObject?: string;
    targetTokenObject?: string;
    tokenList?: string;
    tokenMappingMethodType?: string;
    tokenMappingType: string;
    type: string;
    uniqueName?: string;
    usageType?: string;
    versionNumber?: string;
    xmlRelationshipMetadata?: string;
}

export type EclairGeoData = MetadataWithContent & {
    maps: EclairMap[];
    masterLabel: string;
}

export type EmailTemplate = MetadataWithContent & {
    apiVersion?: number;
    attachedDocuments: string[];
    attachments: Attachment[];
    available: boolean;
    description?: string;
    encodingKey: string;
    letterhead?: string;
    name: string;
    packageVersions: PackageVersion[];
    pageDevName?: string;
    relatedEntityType?: string;
    style: string;
    subject?: string;
    textOnly?: string;
    type: string;
    uiType?: string;
}

export type FieldServiceMobileExtension = MetadataWithContent & {
    description?: string;
    developerName: string;
    fileName: string;
    masterLabel?: string;
    size?: number;
    version?: number;
}

export type InboundCertificate = MetadataWithContent & {
    expirationDate: Date;
    issuer: string;
    masterLabel: string;
    serialId: string;
}

export type NetworkBranding = MetadataWithContent & {
    loginBackgroundImageUrl?: string;
    loginFooterText?: string;
    loginLogo?: string;
    loginLogoName?: string;
    loginPrimaryColor?: string;
    loginQuaternaryColor?: string;
    loginRightFrameUrl?: string;
    network?: string;
    pageFooter?: string;
    pageHeader?: string;
    primaryColor: string;
    primaryComplementColor: string;
    quaternaryColor: string;
    quaternaryComplementColor: string;
    secondaryColor: string;
    staticLogoImageUrl?: string;
    tertiaryColor: string;
    tertiaryComplementColor: string;
    zeronaryColor: string;
    zeronaryComplementColor: string;
}

export type Orchestration = MetadataWithContent & {
    context: string;
    masterLabel: string;
}

export type Schema = MetadataWithContent & {
    description?: string;
    schemaContentType: string;
    sequenceNumber: number;
}

export type Scontrol = MetadataWithContent & {
    contentSource: string;
    description?: string;
    encodingKey: string;
    fileContent?: string;
    fileName?: string;
    name: string;
    supportsCaching: boolean;
}

export type SiteDotCom = MetadataWithContent & {
    label: string;
    siteType: string;
}

export type SlackApp = MetadataWithContent & {
    apiVersion?: number;
    appKey: string;
    appToken: string;
    botScopes?: string;
    clientKey: string;
    clientSecret: string;
    isProtected?: boolean;
    masterLabel: string;
    signingSecret: string;
    userScopes?: string;
}

export type StaticResource = MetadataWithContent & {
    cacheControl: string;
    contentType: string;
    description?: string;
}

export type UiPlugin = MetadataWithContent & {
    description?: string;
    extensionPointIdentifier: string;
    isEnabled: boolean;
    language: string;
    masterLabel: string;
}

export type UiViewDefinition = MetadataWithContent & {
    type: string;
}

export type UserAuthCertificate = MetadataWithContent & {
    developerName: string;
    expirationDate?: Date;
    masterLabel: string;
    serialNumber: string;
    user: string;
}

export type ViewDefinition = MetadataWithContent & {
    apiVersion?: number;
    description?: string;
    isProtected?: boolean;
    masterLabel: string;
    targetType: string;
}

export type WaveDashboard = MetadataWithContent & {
    application: string;
    dateVersion?: number;
    description?: string;
    masterLabel: string;
    templateAssetSourceName?: string;
}

export type WaveComponent = WaveDashboard

export type WaveDataflow = MetadataWithContent & {
    application?: string;
    dataflowType?: string;
    description?: string;
    masterLabel: string;
}

export type WaveLens = MetadataWithContent & {
    application: string;
    datasets: string[];
    dateVersion?: number;
    description?: string;
    masterLabel: string;
    templateAssetSourceName?: string;
    visualizationType: string;
}

export type WaveRecipe = MetadataWithContent & {
    application?: string;
    dataflow: string;
    format?: string;
    masterLabel: string;
    securityPredicate?: string;
    targetDatasetAlias?: string;
    templateAssetSourceName?: string;
}

export type DigitalExperienceConfig = Metadata & {
    label: string;
    site: Site;
    space: string;
}

export type DisclosureDefinition = Metadata & {
    description?: string;
    disclosureType: string;
    isProtected?: boolean;
    masterLabel: string;
}

export type DisclosureDefinitionVersion = Metadata & {
    authoringMode?: string;
    description?: string;
    disclosureDefCurrVer?: string;
    disclosureDefinition: string;
    documentTemplateGlobalKey?: string;
    isActive?: boolean;
    isCurrentVersion?: boolean;
    isProtected?: boolean;
    masterLabel: string;
    omniScriptCnfgApiName?: string;
    omniScriptConfiguration?: string;
    versionNumber: string;
}

export type DisclosureType = Metadata & {
    description?: string;
    disclosureBodyLogo?: string;
    disclosureBodyUrl?: string;
    disclosureCategory: string;
    isProtected?: boolean;
    masterLabel: string;
}

export type DiscoveryGoal = Metadata & {
    active: boolean;
    deployedModels: DiscoveryDeployedModel[];
    label: string;
    modelCards: DiscoveryModelCard[];
    outcome: DiscoveryGoalOutcome;
    predictionType: string;
    pushbackField?: string;
    pushbackType?: string;
    subscribedEntity?: string;
    terminalStateFilters: DiscoveryFilter[];
}

export type DiscoverySettings = Metadata & {
    einsteinAR4ConvOnDmndRecs?: boolean;
    einsteinARForConvo?: boolean;
    enableEinsteinAnswersPref?: boolean;
    enableEinsteinArticleRecommendations?: boolean;
}

export type DocumentChecklistSettings = Metadata & {
    dciCustomSharing?: boolean;
    deleteDCIWithFiles?: boolean;
}

export type DocumentGenerationSetting = Metadata & {
    batchDocGnrnPctLimitPerHour?: number;
    documentTemplateLibraryName: string;
    generationMechanism?: string;
    guestAccessNamedCredential?: string;
    inProgDocGenRqstTmot?: number;
    isBatchDocGnrnEnabled?: boolean;
    isInProgRqstTmotEnab?: boolean;
    isServerSideDocGenEnabled?: boolean;
    masterLabel: string;
    previewType?: string;
}

export type DocumentType = Metadata & {
    description?: string;
    isActive: boolean;
    masterLabel: string;
}

export type DuplicateRule = Metadata & {
    actionOnInsert: string;
    actionOnUpdate: string;
    alertText?: string;
    description?: string;
    duplicateRuleFilter?: DuplicateRuleFilter;
    duplicateRuleMatchRules?: DuplicateRuleMatchRule[];
    isActive: boolean;
    masterLabel: string;
    operationsOnInsert: string[];
    operationsOnUpdate: string[];
    securityOption: string;
    sortOrder: number;
}

export type EACSettings = Metadata & {
    addRcCompToFlexiPages?: boolean;
    autoContactCreationPref?: boolean;
    autoContactEnrichmentPref?: boolean;
    autoPopulateGoogleMeetLinks?: boolean;
    automatedEmailFilter?: boolean;
    dSThresholdNotification?: boolean;
    enableActivityAnalyticsPref?: boolean;
    enableActivityCapture?: boolean;
    enableActivityMetrics?: boolean;
    enableActivitySyncEngine?: boolean;
    enableEACForEveryonePref?: boolean;
    enableEnforceEacSharingPref?: boolean;
    enableInboxActivitySharing?: boolean;
    enableInsightsInTimeline?: boolean;
    enableInsightsInTimelineEacStd?: boolean;
    enableUnifiedActivitiesPref?: boolean;
    provisionProductivityFeatures?: boolean;
    relationshipGraphPref?: boolean;
    s2XSvcAccEmail?: boolean;
    salesforceEventsOnlyPref?: boolean;
    sensitiveEmailFilter?: boolean;
    showEACCalendarPref?: boolean;
    syncEmailToCoreActivity?: boolean;
    syncInternalEvents?: boolean;
}

export type ESignatureConfig = Metadata & {
    configType?: string;
    configValue?: string;
    description?: string;
    groupType?: string;
    masterLabel: string;
    vendor: string;
}

export type ESignatureEnvelopeConfig = Metadata & {
    expirationPeriod?: number;
    expirationWarningPeriod?: number;
    firstReminderPeriod?: number;
    isExpirationEnabled?: boolean;
    isReminderEnabled?: boolean;
    isVendorDefaultNtfcnEnabled?: boolean;
    masterLabel: string;
    reminderIntervalPeriod?: number;
    targetObjectName: string;
    vendor: string;
    vendorAccountIdentifier?: string;
}

export type EditionDefinition = Metadata & {
    cloudServiceProvider?: string;
    defaultLicenseDuration?: number;
    defaultStatus?: string;
    description?: string;
    includedPlatformLicenseDefinitions: IncludedPlatformLicenseDefinition[];
    includedUserLicenseDefinitions: IncludedUserLicenseDefinition[];
    licenseOwner?: string;
    managementServiceProvider?: string;
    managementTenantId?: string;
    name: string;
}

export type EinsteinAgentSettings = Metadata & {
    einsteinAgentRecommendations?: boolean;
    reRunAttributeBasedRules?: boolean;
    runAssignmentRules?: boolean;
    summarizationCopilot?: boolean;
    summarizationRecs?: boolean;
    voiceWrapUpRecs?: boolean;
}

export type EinsteinAssistantSettings = Metadata & {
    enableEinsteinAssistantDataExtractionEnabled?: boolean;
    enableEinsteinAssistantEnabled?: boolean;
    enableEinsteinEnableVoiceLogging?: boolean;
}

export type EinsteinDealInsightsSettings = Metadata & {
    enableUnlikelyToCloseThisMonth?: boolean;
}

export type EinsteinDocumentCaptureSettings = Metadata & {
    enableEinsteinDocumentReader?: boolean;
}

export type EmailAdministrationSettings = Metadata & {
    enableComplianceBcc?: boolean;
    enableEmailConsentManagement?: boolean;
    enableEmailSenderIdCompliance?: boolean;
    enableEmailSpfCompliance?: boolean;
    enableEmailToSalesforce?: boolean;
    enableEmailTrackingIPBlocklist?: boolean;
    enableEmailWorkflowApproval?: boolean;
    enableEnhancedEmailEnabled?: boolean;
    enableHandleBouncedEmails?: boolean;
    enableHtmlEmail?: boolean;
    enableInternationalEmailAddresses?: boolean;
    enableListEmailLogActivities?: boolean;
    enableResendBouncedEmails?: boolean;
    enableRestrictTlsToDomains?: boolean;
    enableSendThroughGmailPref?: boolean;
    enableSendViaExchangePref?: boolean;
    enableSendViaGmailPref?: boolean;
    enableTinyMceSalesEmailEnabled?: boolean;
    enableUseOrgFootersForExtTrans?: boolean;
    enableVerifyEmailDomainByDkim?: boolean;
    sendEmailsEvenWhenAutomationUpdatesSameRecord?: boolean;
    sendMassEmailNotification?: boolean;
    sendTextOnlySystemEmails?: boolean;
}

export type EmailIntegrationSettings = Metadata & {
    doesEmailLogAsEmailMessageInOutlook?: boolean;
    doesGmailStayConnectedToSalesforce?: boolean;
    enableContactAndEventSync?: boolean;
    enableContextualEverywhere?: boolean;
    enableEmailTrackingInMobile?: boolean;
    enableEngageForOutlook?: boolean;
    enableExtensionHostUnrestricted?: boolean;
    enableGmailIntegration?: boolean;
    enableInboxInternalEmailTracking?: boolean;
    enableInboxMobileIntune?: boolean;
    enableOutlookIntegration?: boolean;
    enableOutlookMobileIntegration?: boolean;
    enableProductivityFeatures?: boolean;
    enableSupplementalContactInfoInMobile?: boolean;
    isLayoutCustomizationAllowed?: boolean;
    orgIsSyncingEventsOutbound?: boolean;
    shouldUseTrustedDomainsList?: boolean;
}

export type EmailServicesFunction = Metadata & {
    apexClass: string;
    attachmentOption: string;
    authenticationFailureAction: string;
    authorizationFailureAction: string;
    authorizedSenders?: string;
    emailServicesAddresses: EmailServicesAddress[];
    errorRoutingAddress?: string;
    functionInactiveAction: string;
    functionName: string;
    isActive?: boolean;
    isAuthenticationRequired?: boolean;
    isErrorRoutingEnabled?: boolean;
    isTextAttachmentsAsBinary?: boolean;
    isTlsRequired?: boolean;
    overLimitAction: string;
}

export type EmailTemplateSettings = Metadata & {
    enableTemplateEnhancedFolderPref?: boolean;
}

export type EmbeddedServiceBranding = Metadata & {
    contrastInvertedColor?: string;
    contrastPrimaryColor?: string;
    embeddedServiceConfig: string;
    font?: string;
    height?: number;
    masterLabel: string;
    navBarColor?: string;
    navBarTextColor?: string;
    primaryColor?: string;
    secondaryColor?: string;
    secondaryNavBarColor?: string;
    width?: number;
}

export type EmbeddedServiceConfig = Metadata & {
    areGuestUsersAllowed?: boolean;
    authMethod?: string;
    branding?: string;
    deploymentFeature: string;
    deploymentType: string;
    embeddedServiceAppointmentSettings?: EmbeddedServiceAppointmentSettings;
    embeddedServiceCustomComponents: EmbeddedServiceCustomComponent[];
    embeddedServiceCustomLabels: EmbeddedServiceCustomLabel[];
    embeddedServiceCustomizations: EmbeddedServiceCustomization[];
    embeddedServiceFlowConfig?: EmbeddedServiceFlowConfig;
    embeddedServiceFlows: EmbeddedServiceFlow[];
    embeddedServiceForms: EmbeddedServiceForm[];
    embeddedServiceLayouts: EmbeddedServiceLayout[];
    embeddedServiceMessagingChannel?: EmbeddedServiceMessagingChannel;
    isEnabled?: boolean;
    isTermsAndConditionsEnabled?: boolean;
    isTermsAndConditionsRequired?: boolean;
    masterLabel: string;
    shouldHideAuthDialog?: boolean;
    site?: string;
}

export type EmbeddedServiceFlowConfig = Metadata & {
    enabled: boolean;
}

export type EmbeddedServiceFieldService = Metadata & {
    embeddedServiceConfig: string;
    enabled: boolean;
    fieldServiceConfirmCardImg?: string;
    fieldServiceHomeImg?: string;
    fieldServiceLogoImg?: string;
    masterLabel: string;
    shouldShowExistingAppointment?: boolean;
    shouldShowNewAppointment?: boolean;
}

export type EmbeddedServiceLiveAgent = Metadata & {
    avatarImg?: string;
    embeddedServiceConfig: string;
    embeddedServiceQuickActions: EmbeddedServiceQuickAction[];
    enabled: boolean;
    fontSize: string;
    isOfflineCaseEnabled?: boolean;
    isQueuePositionEnabled?: boolean;
    liveAgentChatUrl?: string;
    liveAgentContentUrl?: string;
    liveChatButton: string;
    liveChatDeployment: string;
    masterLabel: string;
    offlineCaseBackgroundImg?: string;
    prechatBackgroundImg?: string;
    prechatEnabled: boolean;
    prechatJson?: string;
    scenario: string;
    smallCompanyLogoImg?: string;
    waitingStateBackgroundImg?: string;
}

export type EmbeddedServiceMenuSettings = Metadata & {
    branding?: string;
    embeddedServiceCustomLabels: EmbeddedServiceCustomLabel[];
    embeddedServiceCustomizations: EmbeddedServiceCustomization[];
    embeddedServiceMenuItems: EmbeddedServiceMenuItem[];
    isEnabled?: boolean;
    masterLabel?: string;
    site?: string;
}

export type EmployeeFieldAccessSettings = Metadata & {
    enableEmployeeFieldMaskDefaults?: boolean;
    enableEmployeeFieldMasking?: boolean;
}

export type EmployeeUserSettings = Metadata & {
    emailEncoding: string;
    enableEmployeeAutoCreateUser?: boolean;
    enableEmployeeIsSourceOfTruth?: boolean;
    permset?: string;
    profile: string;
    usernameSuffix?: string;
}

export type EnablementMeasureDefinition = Metadata & {
    description?: string;
    developerName: string;
    masterLabel: string;
    sourceMeasureObject: EnablementMeasureSourceObjectDefinition;
    status: string;
}

export type EnablementProgramDefinition = Metadata & {
    description: string;
    developerName: string;
    doesAllowSelfEnrollment?: boolean;
    masterLabel: string;
    name: string;
    network?: string;
    sections: EnablementProgramSection[];
    tasks: EnablementProgramTask[];
    type: string;
}

export type EnblProgramTaskSubCategory = Metadata & {
    developerName: string;
    icon: string;
    learningItemType: string;
    masterLabel: string;
}

export type EncryptionKeySettings = Metadata & {
    canOptOutOfDerivationWithBYOK?: boolean;
    dataCloudEncryption?: boolean;
    enableBringYourOwnkms?: boolean;
    enableCacheOnlyKeys?: boolean;
    enableReplayDetection?: boolean;
    tenantLevelEncryption?: boolean;
}

export type EnhancedNotesSettings = Metadata & {
    enableEnhancedNotes?: boolean;
    enableTasksOnEnhancedNotes?: boolean;
}

export type EntitlementProcess = Metadata & {
    SObjectType?: string;
    active?: boolean;
    businessHours?: string;
    description?: string;
    entryStartDateField?: string;
    exitCriteriaBooleanFilter?: string;
    exitCriteriaFilterItems: FilterItem[];
    exitCriteriaFormula?: string;
    isRecordTypeApplied?: boolean;
    isVersionDefault?: boolean;
    milestones: EntitlementProcessMilestoneItem[];
    name?: string;
    recordType?: string;
    versionMaster?: string;
    versionNotes?: string;
    versionNumber?: number;
}

export type EntitlementSettings = Metadata & {
    assetLookupLimitedToActiveEntitlementsOnAccount?: boolean;
    assetLookupLimitedToActiveEntitlementsOnContact?: boolean;
    assetLookupLimitedToSameAccount?: boolean;
    assetLookupLimitedToSameContact?: boolean;
    enableEntitlementVersioning: boolean;
    enableEntitlements: boolean;
    enableMilestoneFeedItem?: boolean;
    enableMilestoneStoppedTime?: boolean;
    entitlementLookupLimitedToActiveStatus?: boolean;
    entitlementLookupLimitedToSameAccount?: boolean;
    entitlementLookupLimitedToSameAsset?: boolean;
    entitlementLookupLimitedToSameContact?: boolean;
    ignoreMilestoneBusinessHours?: boolean;
}

export type EntitlementTemplate = Metadata & {
    businessHours?: string;
    casesPerEntitlement?: number;
    entitlementProcess?: string;
    isPerIncident?: boolean;
    term?: number;
    type?: string;
}

export type EscalationRule = Metadata & {
    active?: boolean;
    ruleEntry: RuleEntry[];
}

export type EscalationRules = Metadata & {
    escalationRule: EscalationRule[];
}

export type EssentialsSettings = Metadata & {
    emailConnectorEnabled?: boolean;
}

export type EventDelivery = Metadata & {
    eventParameters: EventParameterMap[];
    eventSubscription: string;
    referenceData?: string;
    type: string;
}

export type EventLogObjectSettings = Metadata & {
    eventLogObjects: EventLogObject[];
}

export type EventRelayConfig = Metadata & {
    destinationResourceName: string;
    eventChannel: string;
    label?: string;
    relayOption?: string;
    state?: string;
    usageType?: string;
}

export type EventSettings = Metadata & {
    bypassMeteringBlock?: boolean;
    enableApexLimitEvents?: boolean;
    enableDeleteMonitoringData?: boolean;
    enableDynamicStreamingChannel?: boolean;
    enableEventLogGeneration?: boolean;
    enableEventLogObjectFeature?: boolean;
    enableEventLogWaveIntegration?: boolean;
    enableLightningLoggerEvents?: boolean;
    enableLoginForensics?: boolean;
    enableStreamingApi?: boolean;
    enableTransactionSecurityPolicies?: boolean;
    eventLogRetentionDuration?: number;
}

export type EventSubscription = Metadata & {
    active?: boolean;
    eventParameters: EventParameterMap[];
    eventType: string;
    referenceData: string;
}

export type ExperienceBundle = Metadata & {
    experienceResources?: ExperienceResources;
    label: string;
    type: string;
    urlPathPrefix?: string;
}

export type ExperienceBundleSettings = Metadata & {
    enableExperienceBundleMetadata?: boolean;
}

export type ExperienceContainer = Metadata & {
    masterLabel: string;
    space: string;
    type: string;
}

export type ExperiencePropertyTypeBundle = Metadata & {
    description?: string;
    masterLabel: string;
    resources: ExperiencePropertyTypeBundleResource[];
}

export type ExplainabilityActionDefinition = Metadata & {
    actionLogSchemaType: string;
    applicationSubtype: string;
    applicationType: string;
    description?: string;
    internal: boolean;
    masterLabel: string;
    processType: string;
}

export type ExplainabilityActionVersion = Metadata & {
    actionLogMessageTemplate?: string;
    actionSpecification: string;
    active: boolean;
    definitionVersion: number;
    description?: string;
    explainabilityActionDef: string;
    masterLabel: string;
}

export type ExplainabilityMsgTemplate = Metadata & {
    evaluationResult: string;
    expressionSetStepType: string;
    expsSetProcessType: string;
    isDefault?: boolean;
    masterLabel: string;
    message: string;
}

export type ExpressionSetDefinition = Metadata & {
    contextDefinitions: string[];
    description?: string;
    executionScale?: string;
    interfaceSourceType?: string;
    label: string;
    processType?: string;
    template?: boolean;
    versions: ExpressionSetDefinitionVersion[];
}

export type ExpressionSetDefinitionVersion = Metadata & {
    description?: string;
    endDate?: Date;
    expressionSetDefinition?: string;
    label: string;
    rank?: number;
    shouldShowExplExternally?: boolean;
    startDate: Date;
    status: string;
    steps: ExpressionSetStep[];
    uiTier?: boolean;
    variables: ExpressionSetVariable[];
    versionNumber: number;
}

export type ExpressionSetMessageToken = Metadata & {
    description?: string;
    developerName: string;
    masterLabel: string;
}

export type ExpressionSetObjectAlias = Metadata & {
    dataType: string;
    mappings: ExpressionSetObjectAliasField[];
    objectApiName: string;
    usageType: string;
}

export type ExtConvParticipantIntegDef = Metadata & {
    connectedAppOauthLink?: string;
    conversationVendorInfo?: string;
    customEventPayloadField: string;
    customEventTypeField?: string;
    customPlatformEvent: string;
    developerName: string;
    externalConversationBotDefs: ExternalConversationBotDef[];
    masterLabel: string;
}

export type ExtDataTranFieldTemplate = Metadata & {
    dataSourceField: string;
    externalDataTranField?: string;
    externalName?: string;
    isDataRequired?: boolean;
    masterLabel: string;
    sourceFieldName?: string;
}

export type ExtDataTranObjectTemplate = Metadata & {
    dataSourceObject: string;
    extDataTranFieldTemplates: ExtDataTranFieldTemplate[];
    externalDataTranObject?: string;
    externalName?: string;
    masterLabel: string;
    sourceObjectName?: string;
    templateVersion?: number;
}

export type ExternalAIModel = Metadata & {
    applicationSourceType: string;
    externalModelKey: string;
    externalModelStatus: string;
    name: string;
    threshold?: number;
    trainingJobName?: string;
}

export type ExternalAuthIdentityProvider = Metadata & {
    authenticationFlow: string;
    authenticationProtocol: string;
    description?: string;
    externalAuthIdentityProviderParameters: ExternalAuthIdentityProviderParameter[];
    label: string;
}

export type ExternalClientAppSettings = Metadata & {
    enableClientSecretInRestApiAccess?: boolean;
    enableConsumerSecretApiAccess?: boolean;
    enablePackageEcaOauthFromDevOrg?: boolean;
}

export type ExternalClientApplication = Metadata & {
    contactEmail?: string;
    contactPhone?: string;
    description?: string;
    distributionState?: string;
    iconUrl?: string;
    infoUrl?: string;
    isProtected?: boolean;
    label?: string;
    logoUrl?: string;
    managedType?: string;
    orgScopedExternalApp?: string;
}

export type ExternalCredential = Metadata & {
    authenticationProtocol: string;
    description?: string;
    externalCredentialParameters: ExternalCredentialParameter[];
    label: string;
}

export type ExternalDataConnector = Metadata & {
    dataConnectionStatus: string;
    dataConnectorConfiguration: string;
    dataConnectorType: string;
    dataPlatform: string;
    externalDataTranObjects: ExternalDataTranObject[];
    masterLabel: string;
}

export type ExternalDataTranObject = Metadata & {
    availabilityStatus: string;
    creationType: string;
    extDataTranObjectTemplate?: string;
    externalDataTranFields: ExternalDataTranField[];
    masterLabel: string;
    mktDataTranObject?: string;
    objectCategory: string;
}

export type ExternalDataTranField = Metadata & {
    creationType?: string;
    datatype: string;
    dateFormat?: string;
    extDataTranFieldTemplate?: string;
    externalName?: string;
    isCurrencyIsoCode?: boolean;
    isDataRequired?: boolean;
    length?: number;
    masterLabel: string;
    mktDataTranField?: string;
    precision?: number;
    primaryIndexOrder?: number;
    scale?: number;
    sequence?: number;
}

export type ExternalDataSource = Metadata & {
    authProvider?: string;
    certificate?: string;
    customConfiguration?: string;
    customHttpHeaders: CustomHttpHeader[];
    endpoint?: string;
    externalDataSrcDescriptors: ExternalDataSrcDescriptor[];
    isWritable?: boolean;
    label: string;
    namedCredential?: string;
    oauthRefreshToken?: string;
    oauthScope?: string;
    oauthToken?: string;
    password?: string;
    principalType: string;
    protocol: string;
    repository?: string;
    type: string;
    username?: string;
    version?: string;
}

export type ExternalDataSrcDescriptor = Metadata & {
    customObject?: string;
    descriptor: string;
    descriptorVersion?: string;
    developerName: string;
    externalDataSource: string;
    subtype: string;
    systemVersion: number;
    type: string;
}

export type ExternalDocStorageConfig = Metadata & {
    documentPath: string;
    externalDocStorageIdentifier: string;
    masterLabel: string;
    namedCredential: string;
    recordType?: string;
    storageDriveType: string;
    targetObject: string;
}

export type ExternalServiceRegistration = Metadata & {
    description?: string;
    label: string;
    namedCredential?: string;
    namedCredentialReference?: string;
    operations: ExternalServiceOperation[];
    providerAssetEndpoint?: string;
    registrationProvider?: string;
    registrationProviderType?: string;
    schema?: string;
    schemaAbsoluteUrl?: string;
    schemaType?: string;
    schemaUploadFileExtension?: string;
    schemaUploadFileName?: string;
    schemaUrl?: string;
    serviceBinding?: string;
    serviceDescriptor?: string;
    serviceName?: string;
    status: string;
    systemVersion?: number;
}

export type ExtlClntAppConfigurablePolicies = Metadata & {
    externalClientApplication: string;
    isEnabled: boolean;
    isMobilePluginEnabled?: boolean;
    isNotificationPluginEnabled?: boolean;
    isOauthPluginEnabled?: boolean;
    isPushPluginEnabled?: boolean;
    isSamlPluginEnabled?: boolean;
    label?: string;
    startPage?: string;
    startUrl?: string;
}

export type ExtlClntAppGlobalOauthSettings = Metadata & {
    callbackUrl?: string;
    certificate?: string;
    consumerKey?: string;
    consumerSecret?: string;
    externalClientApplication: string;
    idTokenConfig?: ExternalAppIdTokenConfig;
    isClientCredentialsFlowEnabled?: boolean;
    isCodeCredFlowEnabled?: boolean;
    isCodeCredPostOnly?: boolean;
    isConsumerSecretOptional?: boolean;
    isDeviceFlowEnabled?: boolean;
    isIntrospectAllTokens?: boolean;
    isNamedUserJwtEnabled?: boolean;
    isPkceRequired?: boolean;
    isRefreshTokenRotationEnabled?: boolean;
    isSecretRequiredForRefreshToken?: boolean;
    isSecretRequiredForTokenExchange?: boolean;
    isTokenExchangeEnabled?: boolean;
    label?: string;
    shouldRotateConsumerKey?: boolean;
    shouldRotateConsumerSecret?: boolean;
}

export type ExtlClntAppMobileConfigurablePolicies = Metadata & {
    externalClientApplication: string;
    label?: string;
    screenLockTimeout: string;
}

export type ExtlClntAppMobileSettings = Metadata & {
    externalClientApplication: string;
    isScreenLockEnabled: boolean;
    label?: string;
}

export type ExtlClntAppNotificationSettings = Metadata & {
    externalClientApplication: string;
    label?: string;
    notificationTypes: ExtlClntAppNotificationType[];
}

export type ExtlClntAppOauthConfigurablePolicies = Metadata & {
    apexHandler?: string;
    clientCredentialsFlowUser?: string;
    commaSeparatedCustomScopes?: string;
    commaSeparatedPermissionSet?: string;
    commaSeparatedProfile?: string;
    customAttributes: ExtlClntAppOauthPoliciesAttribute[];
    executeHandlerAs?: string;
    externalClientApplication: string;
    guestJwtTimeout?: number;
    ipRelaxationPolicyType?: string;
    isClientCredentialsFlowEnabled?: boolean;
    isGuestCodeCredFlowEnabled?: boolean;
    isNamedUserJwtEnabled?: boolean;
    isTokenExchangeFlowEnabled?: boolean;
    label?: string;
    namedUserJwtTimeout?: number;
    permittedUsersPolicyType?: string;
    policyAction?: string;
    refreshTokenPolicyType?: string;
    refreshTokenValidityPeriod?: number;
    refreshTokenValidityUnit?: string;
    requiredSessionLevel?: string;
    sessionTimeoutInMinutes?: number;
    singleLogoutUrl?: string;
    startUrl?: string;
}

export type ExtlClntAppOauthSettings = Metadata & {
    areAttributesIncludedInAssetToken?: boolean;
    areCustomPermsIncludedInAssetToken?: boolean;
    assetTokenAudiences?: string;
    assetTokenSigningCertificate?: string;
    assetTokenValidity?: number;
    clientAssertionCertificate?: string;
    commaSeparatedCustomScopes?: string;
    commaSeparatedOauthScopes?: string;
    customAttributes: ExtlClntAppOauthSettingsAttribute[];
    externalClientApplication: string;
    isFirstPartyAppEnabled?: boolean;
    label?: string;
    oauthLink?: string;
    singleLogoutUrl?: string;
    trustedIpRanges: ExtlClntAppOauthIpRange[];
}

export type ExtlClntAppPushConfigurablePolicies = Metadata & {
    externalClientApplication: string;
    isFullContent: boolean;
    label?: string;
}

export type ExtlClntAppPushSettings = Metadata & {
    androidPushConfig?: ExtlClntAppAndroidPushConfig;
    applePushConfig?: ExtlClntAppApplePushConfig;
    externalClientApplication: string;
    label?: string;
    pushConfigLink?: string;
    pushServiceType: string;
}

export type ExtlClntAppSamlConfigurablePolicies = Metadata & {
    acsUrl: string;
    certificate?: string;
    commaSeparatedPermissionSet?: string;
    commaSeparatedProfile?: string;
    customAttributes: ExtlClntAppSamlConfigurablePoliciesAttribute[];
    encryptionCertificate?: string;
    encryptionType?: string;
    entityUrl: string;
    externalClientApplication: string;
    issuer?: string;
    label?: string;
    nameIdFormat?: string;
    signingAlgorithmType?: string;
    singleLogoutBindingType?: string;
    singleLogoutUrl?: string;
    startUrl?: string;
    subjectCustomAttribute?: string;
    subjectType?: string;
}

export type ExtlClntAppSampleConfigurablePolicies = Metadata & {
    adminOnlyPolicy?: string;
    externalClientApplication: string;
    label: string;
    policy1?: string;
    policy2?: string;
}

export type ExtlClntAppSampleSettings = Metadata & {
    devicePlatform: string;
    deviceType: string;
    externalClientApplication: string;
    label: string;
    minimumOsVersion?: string;
    policy1?: string;
    policy1DevManaged?: boolean;
    policy2?: string;
    policy2DevManaged?: boolean;
    version?: string;
}

export type FTestFieldMappingMd = Metadata & {
    label: string;
}

export type FTestToolingFLU = Metadata & {
    int: number;
    stringWithDifferentName: string;
    text2?: string;
}

export type FeatureParameterBoolean = Metadata & {
    dataflowDirection: string;
    masterLabel: string;
    value: boolean;
}

export type FeatureParameterDate = Metadata & {
    dataflowDirection: string;
    masterLabel: string;
    value: Date;
}

export type FeatureParameterInteger = Metadata & {
    dataflowDirection: string;
    masterLabel: string;
    value: number;
}

export type FieldMappingConfig = Metadata & {
    description?: string;
    fieldMappingConfigItems: FieldMappingConfigItem[];
    masterLabel?: string;
    processType?: string;
    sourceObjectId?: string;
}

export type FieldRestrictionRule = Metadata & {
    active: boolean;
    classification: string[];
    classificationType?: string;
    description?: string;
    enforcementType: string;
    masterLabel: string;
    recordFilter: string;
    targetEntity: string;
    userCriteria: string;
    version: number;
}

export type FieldServiceSettings = Metadata & {
    apptAssistantExpiration?: number;
    apptAssistantInfoUrl?: string;
    apptAssistantRadiusUnitValue?: string;
    apptAssistantRadiusValue?: number;
    apptAssistantStatus?: string;
    canPopulateGoogleAddress?: boolean;
    canSendAppCenterCrashReports?: boolean;
    canStoreMobileAnalytics?: boolean;
    deepLinkPublicSecurityKey?: string;
    doesAllowEditSaForCrew?: boolean;
    doesAvlCalcInclOvertime?: boolean;
    doesAvlCalcInclPrimOnly?: boolean;
    doesShareSaParentWoWithAr?: boolean;
    doesShareSaWithAr?: boolean;
    enableBatchWindow?: boolean;
    enableDocumentBuilder?: boolean;
    enableFloatingWorkOrder?: boolean;
    enableLsdkMode?: boolean;
    enablePopulateWorkOrderAddress?: boolean;
    enableStandbyMode?: boolean;
    enableWorkOrders?: boolean;
    enableWorkPlansAutoGeneration?: boolean;
    enableWorkStepManualStatusUpdate?: boolean;
    enrouteStatus?: string;
    fieldServiceNotificationsOrgPref?: boolean;
    fieldServiceOrgPref?: boolean;
    isGeoCodeSyncEnabled?: boolean;
    isLocationHistoryEnabled?: boolean;
    mobileFeedbackEmails?: string;
    o2EngineEnabled?: boolean;
    objectMappingItem: ObjectMappingItem[];
    optimizationServiceAccess?: boolean;
    overrideDefaultLwcStyling?: boolean;
    serviceAppointmentsDueDateOffsetOrgValue?: number;
    workOrderDurationSource?: string;
    workOrderLineItemSearchFields: string[];
    workOrderSearchFields: string[];
}

export type FieldSrcTrgtRelationship = Metadata & {
    definitionCreationType: string;
    lookupFieldName?: string;
    masterLabel: string;
    owner: string;
    relationshipCardinality: string;
    sourceFieldName: string;
    targetEntity: string;
    targetFieldName: string;
}

export type FileUploadAndDownloadSecuritySettings = Metadata & {
    dispositions: FileTypeDispositionAssignmentBean[];
    noHtmlUploadAsAttachment: boolean;
}

export type FilesConnectSettings = Metadata & {
    enableContentHubAllowed?: boolean;
    enableContentHubCvtLinksAllowed?: boolean;
    enableContentHubEOSearchLayout?: boolean;
}

export type FlexiPage = Metadata & {
    description?: string;
    events: FlexiPageEvent[];
    flexiPageRegions: FlexiPageRegion[];
    masterLabel: string;
    parentFlexiPage?: string;
    platformActionlist?: PlatformActionList;
    quickActionList?: QuickActionList;
    sobjectType?: string;
    template: FlexiPageTemplateInstance;
    type: string;
}

export type Flow = Metadata & {
    actionCalls: FlowActionCall[];
    apexPluginCalls: FlowApexPluginCall[];
    apiVersion?: number;
    areMetricsLoggedToDataCloud?: boolean;
    assignments: FlowAssignment[];
    choices: FlowChoice[];
    collectionProcessors: FlowCollectionProcessor[];
    constants: FlowConstant[];
    customErrors: FlowCustomError[];
    customProperties: FlowCustomProperty[];
    decisions: FlowDecision[];
    description?: string;
    dynamicChoiceSets: FlowDynamicChoiceSet[];
    environments: string[];
    exitRules: FlowExitRule[];
    experiments: FlowExperiment[];
    formulas: FlowFormula[];
    interviewLabel?: string;
    isAdditionalPermissionRequiredToRun?: boolean;
    isOverridable?: boolean;
    isTemplate?: boolean;
    label: string;
    loops: FlowLoop[];
    migratedFromWorkflowRuleName?: string;
    orchestratedStages: FlowOrchestratedStage[];
    overriddenFlow?: string;
    processMetadataValues: FlowMetadataValue[];
    processType?: string;
    recordCreates: FlowRecordCreate[];
    recordDeletes: FlowRecordDelete[];
    recordLookups: FlowRecordLookup[];
    recordRollbacks: FlowRecordRollback[];
    recordUpdates: FlowRecordUpdate[];
    runInMode?: string;
    screens: FlowScreen[];
    sourceTemplate?: string;
    stages: FlowStage[];
    start?: FlowStart;
    startElementReference?: string;
    status?: string;
    steps: FlowStep[];
    subflows: FlowSubflow[];
    textTemplates: FlowTextTemplate[];
    timeZoneSidKey?: string;
    transforms: FlowTransform[];
    triggerOrder?: number;
    variables: FlowVariable[];
    waits: FlowWait[];
}

export type FlowCategory = Metadata & {
    description?: string;
    flowCategoryItems: FlowCategoryItems[];
    masterLabel: string;
}

export type FlowDefinition = Metadata & {
    activeVersionNumber?: number;
    description?: string;
    masterLabel?: string;
}

export type FlowSettings = Metadata & {
    canDebugFlowAsAnotherUser?: boolean;
    doesEnforceApexCpuTimeLimit?: boolean;
    doesFormulaEnforceDataAccess?: boolean;
    doesFormulaGenerateHtmlOutput?: boolean;
    enableEmailSimpleRespectProfiles?: boolean;
    enableEmailsimpleSecureProfiles?: boolean;
    enableFlowBREncodedFixEnabled?: boolean;
    enableFlowCustomPropertyEditor?: boolean;
    enableFlowDeployAsActiveEnabled?: boolean;
    enableFlowFieldFilterEnabled?: boolean;
    enableFlowFormulasFixEnabled?: boolean;
    enableFlowInterviewSharingEnabled?: boolean;
    enableFlowNullPreviousValueFix?: boolean;
    enableFlowPauseEnabled?: boolean;
    enableFlowReactiveChoiceOptions?: boolean;
    enableFlowReactiveScreens?: boolean;
    enableFlowUseApexExceptionEmail?: boolean;
    enableFlowViaRestUsesUserCtxt?: boolean;
    enableLightningRuntimeEnabled?: boolean;
    isApexPluginAccessModifierRespected?: boolean;
    isEnhancedFlowListViewVisible?: boolean;
    isFlowBlockAccessToSessionIDEnabled?: boolean;
    isManageFlowRequiredForAutomationCharts?: boolean;
    isSupportRollbackOnErrorForApexInvocableActionsEnabled?: boolean;
}

export type FlowTest = Metadata & {
    description?: string;
    flowApiName: string;
    label: string;
    testPoints: FlowTestPoint[];
}

export type Folder = Metadata & {
    accessType?: string;
    folderShares: FolderShare[];
    name: string;
    publicFolderAccess?: string;
    sharedTo?: SharedTo;
}

export type DashboardFolder = Folder

export type DocumentFolder = Folder

export type EmailFolder = Folder

export type EmailTemplateFolder = Folder

export type ReportFolder = Folder

export type ForecastingFilter = Metadata & {
    filterLogic?: string;
    forecastingCustomCategory?: string;
    forecastingType: string;
    forecastingTypeSource: string;
    forecastingTypeSourceCategory?: string;
    isProtected?: boolean;
    masterLabel: string;
}

export type ForecastingFilterCondition = Metadata & {
    colName?: string;
    fieldName: string;
    forecastingFilter: string;
    forecastingSourceDefinition?: string;
    isProtected?: boolean;
    masterLabel: string;
    operation: string;
    sortOrder: number;
    value?: string;
}

export type ForecastingGroup = Metadata & {
    developerName: string;
    forecastingGroupItems: ForecastingGroupItem[];
    groupField: string;
    masterLabel: string;
    sourceObject: string;
}

export type ForecastingObjectListSettings = Metadata & {
    forecastingTypeObjectListSettings: ForecastingTypeObjectListSettings[];
}

export type ForecastingSettings = Metadata & {
    defaultToPersonalCurrency?: boolean;
    enableForecasts?: boolean;
    forecastingCategoryMappings: ForecastingCategoryMapping[];
    forecastingDisplayedFamilySettings: ForecastingDisplayedFamilySettings[];
    forecastingSubmissionSettings: ForecastingSubmissionSettings;
    forecastingTypeSettings: ForecastingTypeSettings[];
    globalAdjustmentsSettings: AdjustmentsSettings;
    globalForecastRangeSettings: ForecastRangeSettings;
    globalQuotasSettings: QuotasSettings;
}

export type ForecastingSourceDefinition = Metadata & {
    categoryField?: string;
    cdpDataspace?: string;
    dateField?: string;
    externalSourceObject?: string;
    familyField?: string;
    isProtected?: boolean;
    masterLabel: string;
    measureField?: string;
    sourceObject?: string;
    territory2Field?: string;
    userField?: string;
}

export type ForecastingType = Metadata & {
    active: boolean;
    amount: boolean;
    dateType: string;
    developerName: string;
    forecastingGroupDeveloperName?: string;
    hasCustomGroup?: boolean;
    hasProductFamily: boolean;
    masterLabel: string;
    opportunitySplitType?: string;
    opptyLineItemSplitType?: string;
    quantity: boolean;
    roleType: string;
    territory2Model?: string;
}

export type ForecastingTypeSource = Metadata & {
    forecastingSourceDefinition: string;
    forecastingType: string;
    isProtected?: boolean;
    masterLabel: string;
    parentSourceDefinition?: string;
    relationField?: string;
    sourceGroup: number;
}

export type FormulaSettings = Metadata & {
    enableDSTAwareDatevalue?: boolean;
}

export type FtestFirstTopLevel = Metadata & {
    content: number;
    isProtected?: boolean;
    longUrl?: string;
    longUrlNewSlot?: string;
    masterLabel: string;
}

export type FtestSecondTopLevel = Metadata & {
    content: number;
    isProtected?: boolean;
    masterLabel: string;
    user?: string;
}

export type FuelType = Metadata & {
    description?: string;
    isActive?: boolean;
    isProtected?: boolean;
    isStationaryAssetFuel?: boolean;
    isVehicleAssetFuel?: boolean;
    masterLabel: string;
}

export type FuelTypeSustnUom = Metadata & {
    fuelType: string;
    isProtected?: boolean;
    masterLabel?: string;
    unitOfMeasure: string;
}

export type FulfillmentStepType = Metadata & {
    developerName: string;
    handler: string;
    isActive: boolean;
    masterLabel: string;
}

export type FunctionReference = Metadata & {
    access?: string;
    description?: string;
    imageReference?: string;
    label?: string;
    permissionSet?: string;
}

export type FundraisingConfig = Metadata & {
    donorExternalIdField?: string;
    donorMatchingMethod?: string;
    failedTransactionCount?: number;
    householdSoftCreditRole?: string;
    installmentExtDayCount?: number;
    isHshldSoftCrAutoCrea?: boolean;
    lapsedUnpaidTrxnCount?: number;
    masterLabel?: string;
    outreachSourceCodeGenFmla?: string;
    shouldClosePaidRcrCmt?: boolean;
    shouldCreateRcrSchdTrxn?: boolean;
    utmCampaignSrcObj?: string;
    utmCampaignSrcObjField?: string;
    utmMediumSrcObj?: string;
    utmMediumSrcObjField?: string;
    utmSourceSrcObj?: string;
    utmSourceSrcObjField?: string;
}

export type GatewayProviderPaymentMethodType = Metadata & {
    comments?: string;
    gtwyProviderPaymentMethodType?: string;
    masterLabel: string;
    paymentGatewayProvider?: string;
    paymentMethodType?: string;
    recordType?: string;
}

export type GenAiFunction = Metadata & {
    description?: string;
    invocationTarget: string;
    invocationTargetType: string;
    isConfirmationRequired?: boolean;
    isIncludeInProgressIndicator?: boolean;
    mappingAttributes: GenAiPlannerAttr[];
    masterLabel: string;
    progressIndicatorMessage?: string;
}

export type GenAiPlanner = Metadata & {
    attributeMappings: GenAiPlannerAttrMapping[];
    capabilities?: string;
    description?: string;
    genAiFunctions: GenAiPlannerFunctionDef[];
    genAiPlannerRuleExpressions: GenAiPlannerRuleExpr[];
    genAiPlugins: GenAiPlannerFunctionDef[];
    masterLabel: string;
    plannerType: string;
    ruleExpressionAssignments: GenAiPlannerRuleExprAsgn[];
    ruleExpressions: GenAiPlannerRuleExprDef[];
}

export type GenAiPluginInstructionDef = Metadata & {
    description: string;
    developerName: string;
    language: string;
    masterLabel: string;
}

export type GenAiPlugin = Metadata & {
    aiPluginUtterances: AiPluginUtteranceDef[];
    canEscalate?: boolean;
    description?: string;
    developerName: string;
    genAiFunctions: GenAiPluginFunctionDef[];
    genAiPluginInstructions: GenAiPluginInstructionDef[];
    language: string;
    masterLabel: string;
    pluginType: string;
    scope?: string;
}

export type GenAiPromptTemplate = Metadata & {
    activeVersion?: string;
    createdInVersion?: number;
    description?: string;
    developerName?: string;
    masterLabel?: string;
    overrideSource?: string;
    relatedEntity?: string;
    relatedField?: string;
    templateVersions: GenAiPromptTemplateVersion[];
    type?: string;
    visibility?: string;
}

export type GenAiPromptTemplateActv = Metadata & {
    accessLevel: string;
    developerName: string;
    masterLabel?: string;
    templateDeveloperName: string;
}

export type GlobalPicklist = Metadata & {
    description?: string;
    globalPicklistValues: GlobalPicklistValue[];
    masterLabel: string;
    sorted: boolean;
}

export type GlobalValueSet = Metadata & {
    customValue: CustomValue[];
    description?: string;
    masterLabel: string;
    sorted: boolean;
}

export type GlobalValueSetTranslation = Metadata & {
    valueTranslation: ValueTranslation[];
}

export type GoogleAppsSettings = Metadata & {
    enableGmailButtons?: boolean;
    enableGmailButtonsAndLinks?: boolean;
    enableGmailLinks?: boolean;
    enableGoogleDocs?: boolean;
    enableGoogleDocsTab?: boolean;
    enableGoogleTalk?: boolean;
    googleAppsDomain?: string;
    googleAppsDomainLinked?: boolean;
    googleAppsDomainValidated?: boolean;
}

export type Group = Metadata & {
    description?: string;
    doesIncludeBosses?: boolean;
    name: string;
}

export type HerokuIntegrationSettings = Metadata & {
    enableHerokuIntegration?: boolean;
}

export type HighVelocitySalesSettings = Metadata & {
    enableACAutoSendEmail?: boolean;
    enableACChangeTargetAssignee?: boolean;
    enableACSkipWeekends?: boolean;
    enableAutoBdrEmailPref?: boolean;
    enableAutoBdrVoicePref?: boolean;
    enableBusinessHours?: boolean;
    enableCadenceVariantTestingPref?: boolean;
    enableChgTgtAssigneeUsrPermPref?: boolean;
    enableDispositionCategory?: boolean;
    enableEinsteinSdrEmailPref?: boolean;
    enableEngagementWaveAnalyticsPref?: boolean;
    enableHighVelocitySales?: boolean;
    enableHighVelocitySalesSetup?: boolean;
    enableInvoiceAttributionPref?: boolean;
    enableLogACallForCTIPref?: boolean;
    enableLogTasksForLinkedInPref?: boolean;
    enableMultipleCadencesPref?: boolean;
    enableOpportunityAttributionPermPref?: boolean;
    enableProspectingCenterPref?: boolean;
    enableQuickCadenceAutoSendEmail?: boolean;
    enableTaskLoggingPref?: boolean;
}

export type HomePageComponent = Metadata & {
    body?: string;
    height?: number;
    links: string[];
    page?: string;
    pageComponentType: string;
    showLabel?: boolean;
    showScrollbars?: boolean;
    width?: string;
}

export type HomePageLayout = Metadata & {
    narrowComponents: string[];
    wideComponents: string[];
}

export type IPAddressRange = Metadata & {
    description?: string;
    endIpAddress: string;
    ipAddressFeature: string;
    ipAddressUsageScope: string;
    isProtected?: boolean;
    masterLabel: string;
    startIpAddress: string;
}

export type Icon = Metadata & {
    image: string;
    key: string;
    usageType: string;
}

export type IdeasSettings = Metadata & {
    enableChatterProfile?: boolean;
    enableHtmlIdea?: boolean;
    enableIdeaMultipleCategory?: boolean;
    enableIdeaThemes?: boolean;
    enableIdeas?: boolean;
    enableIdeasControllerExtensions?: boolean;
    enableIdeasReputation?: boolean;
    halfLife?: number;
    ideasProfilePage?: string;
}

export type IdentityProviderSettings = Metadata & {
    certificateName: string;
    enableIdentityProvider: boolean;
}

export type IdentityVerificationProcDef = Metadata & {
    identityVerificationProcDtls: IdentityVerificationProcDtl[];
    masterLabel: string;
    searchLayoutType: string;
}

export type IdentityVerificationProcDtl = Metadata & {
    apexClass?: string;
    dataSourceType: string;
    developerName: string;
    displayRecordFieldName?: string;
    identityVerificationProcFlds: IdentityVerificationProcFld[];
    isActive?: boolean;
    isRetryAllowedAfterLimit?: boolean;
    linkedIdVerfProcessDet?: string;
    masterLabel: string;
    objectName?: string;
    optionalVerifiersMinVerfCount?: number;
    retryLimit?: number;
    searchFilter?: string;
    searchRecordUniqueIdField?: string;
    searchResultSortBy?: string;
    searchSequenceNumber: number;
    searchType: string;
}

export type IdentityVerificationProcFld = Metadata & {
    customFieldLabel?: string;
    dataSourceType: string;
    developerName: string;
    fieldDataType?: string;
    fieldName: string;
    fieldType: string;
    fieldValueFormula?: string;
    isActive?: boolean;
    isManualInput?: boolean;
    masterLabel: string;
    sequenceNumber: number;
}

export type IframeWhiteListUrlSettings = Metadata & {
    iframeWhiteListUrls: IframeWhiteListUrl[];
}

export type InboundNetworkConnection = Metadata & {
    connectionType: string;
    description: string;
    inboundNetworkConnProperties: InboundNetworkConnProperty[];
    isActive: boolean;
    label: string;
    status: string;
}

export type IncidentMgmtSettings = Metadata & {
    enableAlertBroadcastType?: boolean;
    enableEmailBroadcastType?: boolean;
    enableITSMChangeMgmt?: boolean;
    enableITSMIncidentMgmt?: boolean;
    enableITSMProblemMgmt?: boolean;
    enableIncidentMgmt?: boolean;
    enableSiteBannerBroadcastType?: boolean;
    enableSlackBroadcastType?: boolean;
}

export type IndustriesAutomotiveSettings = Metadata & {
    enableAutomotiveAppraisals?: boolean;
    enableAutomotiveCloud?: boolean;
    enableAutomotiveScheduler?: boolean;
    enableAutomotiveServiceExcellence?: boolean;
    enableConnectedVehSrvcsCmpnt?: boolean;
    enableDealerEssntlsAutomotive?: boolean;
}

export type IndustriesChannelPartnerInventorySettings = Metadata & {
    enableChannelPartnerInventoryTracking?: boolean;
}

export type IndustriesEinsteinFeatureSettings = Metadata & {
    documentReaderConfidenceOrgValue: number;
}

export type IndustriesEventOrchSettings = Metadata & {
    enableEventOrchDecisionTable?: boolean;
}

export type IndustriesFieldServiceSettings = Metadata & {
    enableIndustriesFieldService?: boolean;
}

export type IndustriesManufacturingSettings = Metadata & {
    enableConnectedAssetSrvcsCmpnt?: boolean;
    enableFleetManagement?: boolean;
    enableIndManufacturing?: boolean;
    enableIndustriesMfgAccountForecast?: boolean;
    enableIndustriesMfgAdvForecast?: boolean;
    enableIndustriesMfgIAS?: boolean;
    enableIndustriesMfgProgram?: boolean;
    enableIndustriesMfgTargets?: boolean;
    enablePartnerLeadManagement?: boolean;
    enablePartnerPerformanceManagement?: boolean;
    enablePartnerVisitManagement?: boolean;
    enablePtnrLeadMgmtMappings?: boolean;
    enableRevMgmtForSlsAgr?: boolean;
    enableVehAndAstLending?: boolean;
    enableVehAssetFinAddtnlCmpnts?: boolean;
    enableVehicleAndAssetFinance?: boolean;
}

export type IndustriesSettings = Metadata & {
    allowMultipleProducersToWorkOnSamePolicy?: boolean;
    appointmentDistributionOrgPref?: boolean;
    captureResourceUtilizationOrgPref?: boolean;
    createCustomerPropertyFromLAProperty?: boolean;
    createFSCAssetFromLAAsset?: boolean;
    createFSCAssetFromLAProperty?: boolean;
    createFSCLiabilityFromLAFinancial?: boolean;
    createFSCLiabilityFromLALiability?: boolean;
    createFinancialAccountFromLAAsset?: boolean;
    createFinancialAccountFromLALiability?: boolean;
    createFinancialAccountsFromLAFinancials?: boolean;
    createFinancialAccountsFromLAProperty?: boolean;
    enableAIAccelerator?: boolean;
    enableAWSTextractAnalyzeIDPref?: boolean;
    enableAWSTextractQueriesPref?: boolean;
    enableAWSTextractTablesPref?: boolean;
    enableAcademicInsightsAI?: boolean;
    enableAcademicOperations?: boolean;
    enableAccessToMasterListOfCoverageTypes?: boolean;
    enableAccountScoreEnabled?: boolean;
    enableActionableList?: boolean;
    enableActionableListOrgPref?: boolean;
    enableAdvancedScheduling?: boolean;
    enableAdverseEvents?: boolean;
    enableAdvisingSummaryAI?: boolean;
    enableAlumniRelations?: boolean;
    enableAnyResourceTypeOrgPref?: boolean;
    enableAppFrmAnywhereOrgPref?: boolean;
    enableAppInviteOrgPref?: boolean;
    enableApplnDecStdSharing?: boolean;
    enableAutoComplaintSummaryPref?: boolean;
    enableB2B?: boolean;
    enableB2BAccountPlan?: boolean;
    enableB2BEinstein?: boolean;
    enableBehavioralHealthAppPref?: boolean;
    enableBenefitAndGoalSharingPref?: boolean;
    enableBenefitManagementPreference?: boolean;
    enableBlockResourceAvailabilityOrgPref?: boolean;
    enableBusinessMessenger?: boolean;
    enableCSRDReportingOrgPref?: boolean;
    enableCalculationDetail?: boolean;
    enableCalculationUsingParentPolicyOnly?: boolean;
    enableCallReportAdminContextPref?: boolean;
    enableCandidateMatching?: boolean;
    enableCapacitySchedulingPref?: boolean;
    enableCareGapPrefSetting?: boolean;
    enableCareMgmtSlackAccess?: boolean;
    enableCarePlansPreference?: boolean;
    enableCareTaskSharingSetting?: boolean;
    enableCaseReferralPref?: boolean;
    enableCdpSalesExcellence?: boolean;
    enableCdsAppFormProdSiteUsers?: boolean;
    enableCdsAppFormSiteUsers?: boolean;
    enableCdsApplicationForm?: boolean;
    enableCdsApplicationFormProduct?: boolean;
    enableCdsPartyProfile?: boolean;
    enableCdsPartyProfileSiteUsers?: boolean;
    enableChurnPredictionRT?: boolean;
    enableClaimMgmt?: boolean;
    enableClinicalDataModel?: boolean;
    enableCollectionFLowOps?: boolean;
    enableCollectionRiskScoringCFE?: boolean;
    enableCollectionTimeline?: boolean;
    enableComparisonViewAI?: boolean;
    enableCompliantDataSharingForAccount?: boolean;
    enableCompliantDataSharingForBudget?: boolean;
    enableCompliantDataSharingForBudgetSiteUsers?: boolean;
    enableCompliantDataSharingForCustomObjects?: boolean;
    enableCompliantDataSharingForFinancialDeal?: boolean;
    enableCompliantDataSharingForFundingAward?: boolean;
    enableCompliantDataSharingForFundingAwardSiteUsers?: boolean;
    enableCompliantDataSharingForFundingOpportunity?: boolean;
    enableCompliantDataSharingForFundingOpportunitySiteUsers?: boolean;
    enableCompliantDataSharingForIndividualApplication?: boolean;
    enableCompliantDataSharingForIndividualApplicationSiteUsers?: boolean;
    enableCompliantDataSharingForIndividualApplicationTask?: boolean;
    enableCompliantDataSharingForIndividualApplicationTaskSiteUsers?: boolean;
    enableCompliantDataSharingForInteraction?: boolean;
    enableCompliantDataSharingForInteractionSummary?: boolean;
    enableCompliantDataSharingForOpportunity?: boolean;
    enableCompliantDataSharingForPreliminaryApplicationRef?: boolean;
    enableCompliantDataSharingForPreliminaryApplicationRefSiteUsers?: boolean;
    enableComprehendMedical?: boolean;
    enableContactCenterAccess?: boolean;
    enableContractMgmtPref?: boolean;
    enableContractSearchPref?: boolean;
    enableContractsAIPref?: boolean;
    enableCreateMultiAttendeeEventOrgPref?: boolean;
    enableCrisisCenterAccess?: boolean;
    enableCriteriaBasedSearchAndFilter?: boolean;
    enableCustomFlowsOnCycleCount?: boolean;
    enableCustomFlowsOnExpiryPage?: boolean;
    enableDCHEnGpt?: boolean;
    enableDCHEnGptAccuracy?: boolean;
    enableDCHEnGptFirstDraft?: boolean;
    enableDCHEnGptIL?: boolean;
    enableDCHEnGptSearch?: boolean;
    enableDCHGoogleAddOn?: boolean;
    enableDCHMSO365AddIn?: boolean;
    enableDFDataCapture?: boolean;
    enableDataCloudEventsOnTimeline?: boolean;
    enableDealManagement?: boolean;
    enableDeleteCustomObjectParticipantRecordCompliantDataSharing?: boolean;
    enableDepriveSoqlAccessGuestUserOrgPref?: boolean;
    enableDepriveSoqlAccessOrgPref?: boolean;
    enableDigitalLendingPref?: boolean;
    enableDigitalLendingReadOnlyOrgPref?: boolean;
    enableDiscoveryFrameworkMetadata?: boolean;
    enableDiscoveryFrwrkSampleTemplate?: boolean;
    enableDisplaySummaryOnTimeline?: boolean;
    enableDontSharePartyprofWPortalOrgPref?: boolean;
    enableDpeProviderSearchSettingsOrgPref?: boolean;
    enableDropInAppointmentsOrgPref?: boolean;
    enableDropInFallbackMechOrgPref?: boolean;
    enableDropInSkillMatchingOrgPref?: boolean;
    enableEDCSkillsGenerator?: boolean;
    enableEGPTInsuranceCmpntPref?: boolean;
    enableESGReportingOrgPref?: boolean;
    enableEUCoreAI?: boolean;
    enableEUCoreServiceAppOn?: boolean;
    enableEducationCloud?: boolean;
    enableEinsteinDocReader?: boolean;
    enableEinsteinVisits?: boolean;
    enableEngagementVisualsAI?: boolean;
    enableEnhancedQuestionCreation?: boolean;
    enableEnhancedUIForISPref?: boolean;
    enableEpcDeleteAccess?: boolean;
    enableEventManagementOrgPref?: boolean;
    enableEventWriteOrgPref?: boolean;
    enableExistingHealthCloudOrg?: boolean;
    enableFSCInsuranceReport?: boolean;
    enableFSCInsuranceServiceConsole?: boolean;
    enableFinSummaryRollupMgmt?: boolean;
    enableFinancialAccountMgmt?: boolean;
    enableFinancialDealCallReportCmpPref?: boolean;
    enableFinancialDealCallReportPref?: boolean;
    enableFinancialDealRoleHierarchy?: boolean;
    enableFormFramework?: boolean;
    enableFundraising?: boolean;
    enableGenAIAssessmentQuestions?: boolean;
    enableGnrcDisclsFrmwrk?: boolean;
    enableGrantmaking?: boolean;
    enableGroupMembershipPref?: boolean;
    enableHCReferralScoring?: boolean;
    enableHcCorePatientConsole?: boolean;
    enableHcStdRelationshipJunctions?: boolean;
    enableHighScaleRuleProcessingPref?: boolean;
    enableHomeHealth?: boolean;
    enableHomeHlthRschdFlowRcntVer?: boolean;
    enableIAMPatchModifyPref?: boolean;
    enableIESentimentAnalysis?: boolean;
    enableIndCrossObjChangelog?: boolean;
    enableIndustriesAssessment?: boolean;
    enableIndustriesAssessmentGuestOrgPref?: boolean;
    enableIndustriesAssessmentPrefill?: boolean;
    enableIndustriesCaptchaVerification?: boolean;
    enableIndustriesIntegrationOrchestratorPref?: boolean;
    enableIndustriesKYC?: boolean;
    enableIndustriesLPIPreference?: boolean;
    enableIndustriesOnboarding?: boolean;
    enableIndustriesRebates?: boolean;
    enableIndustriesShipAndDebit?: boolean;
    enableIndustriesStageManagementPref?: boolean;
    enableInformationLibrary?: boolean;
    enableIntegratedCareManagementSetting?: boolean;
    enableInteractionCstmSharingPref?: boolean;
    enableInteractionRoleHierarchy?: boolean;
    enableInteractionSummaryPref?: boolean;
    enableInteractionSummaryRoleHierarchy?: boolean;
    enableLSC4CEContractLifecycleManagement?: boolean;
    enableLSC4CEDocumentManagement?: boolean;
    enableLSC4CEEmailAndTemplate?: boolean;
    enableLSC4CEKeyAccountManagement?: boolean;
    enableLSC4CEMedInsights?: boolean;
    enableLSC4CERemoteEngagement?: boolean;
    enableLSC4CEVisits?: boolean;
    enableLifeSciInquiry?: boolean;
    enableLifeSciencesClinialTrailManagement?: boolean;
    enableLifeSciencesConsent?: boolean;
    enableLifeSciencesCustomerEngagementBase?: boolean;
    enableLifeSciencesMergeManagement?: boolean;
    enableLifeSciencesProviderEngagementCompliance?: boolean;
    enableLifeSciencesSiteManagement?: boolean;
    enableManyToManyRelationships?: boolean;
    enableMaterialityAssessment?: boolean;
    enableMcgSetting?: boolean;
    enableMedRecSetting?: boolean;
    enableMedicalDeviceEnabled?: boolean;
    enableMedicationManagementEnabled?: boolean;
    enableMentoring?: boolean;
    enableMicrosoftWordAddInEnabled?: boolean;
    enableMortgageRlaTotalsOrgPref?: boolean;
    enableMulesoftFhirR4Apis?: boolean;
    enableMultiResourceOrgPref?: boolean;
    enableMultipleCareProgramEnrolleeOrgPref?: boolean;
    enableMultipleTopicsForShiftsOrgPref?: boolean;
    enableNZCENCarbonAccounting?: boolean;
    enableNZCENGPTDCHIL?: boolean;
    enableNZCENScope3ProcHub?: boolean;
    enableNZCMngEnrgyAttrCr?: boolean;
    enableNZCMngEsgPgm?: boolean;
    enableNZCWithEinstein?: boolean;
    enableNewTimelineSetupFlow?: boolean;
    enableNextBestAction?: boolean;
    enableNextBestCustomer?: boolean;
    enableNextBestMessage?: boolean;
    enableObjectDetection?: boolean;
    enableOutcomes?: boolean;
    enableOverbookingOrgPref?: boolean;
    enableOverbookingWithGroupOrgPref?: boolean;
    enablePCMConfigRules?: boolean;
    enablePartyProfileParentSharingOrgPref?: boolean;
    enablePartyprofParentMultiSharingOrgPref?: boolean;
    enablePatientAppointmentSchedulingOrgPref?: boolean;
    enablePatientServicesOrchestration?: boolean;
    enablePersonAcctAddrSync?: boolean;
    enablePolicyAdministration?: boolean;
    enablePreBookedFallbackMechOrgPref?: boolean;
    enableProgramCohorts?: boolean;
    enableProviderSearchForGuestUser?: boolean;
    enableProviderSearchPreciseMatch?: boolean;
    enableProviderSearchSyncOrgPref?: boolean;
    enablePulseChecks?: boolean;
    enableRBLUsingCalcService?: boolean;
    enableRecordRollup?: boolean;
    enableReferralManagementApp?: boolean;
    enableReferralScoring?: boolean;
    enableReminders?: boolean;
    enableRosterFileFeatureOrgPreference?: boolean;
    enableSCAllocScorEmssnSpentAmt?: boolean;
    enableSCAssignFootprint?: boolean;
    enableSCBEIEnabled?: boolean;
    enableSCCarbonAccounting?: boolean;
    enableSCCarbonCreditAlloc?: boolean;
    enableSCCreateFootprint?: boolean;
    enableSCDGF?: boolean;
    enableSCEmssnsForecasting?: boolean;
    enableSCExpansionUseCase?: boolean;
    enableSCExternalEngMgmt?: boolean;
    enableSCGenrateCnsmpRcd?: boolean;
    enableSCSNGManagement?: boolean;
    enableSCScope3HubEnabled?: boolean;
    enableSCSnGAffiliates?: boolean;
    enableSCSplitCnsmpRcd?: boolean;
    enableSCTargetSetting?: boolean;
    enableSCWasteManagement?: boolean;
    enableSCWaterManagement?: boolean;
    enableSaveForLaterForDiscoveryFramework?: boolean;
    enableSchedulerPaymentsPref?: boolean;
    enableScoringFrameworkCRMAPref?: boolean;
    enableScoringFrameworkOrgPref?: boolean;
    enableSentimentAnalysis?: boolean;
    enableShareSaWithArOrgPref?: boolean;
    enableSlackForCib?: boolean;
    enableSmartTags?: boolean;
    enableSourceCodeGeneration?: boolean;
    enableStudentManagement?: boolean;
    enableStudentSuccess?: boolean;
    enableSustainabilityCloud?: boolean;
    enableSyncInteractionsPref?: boolean;
    enableTearSheetPref?: boolean;
    enableTextExtract?: boolean;
    enableTimelinePref?: boolean;
    enableTopicOrTemplate?: boolean;
    enableTopicTimeSlot?: boolean;
    enableTrialManagementRandomization?: boolean;
    enableTurnOffDsclsReprtPbsrName?: boolean;
    enableUMPayerAppAccessOrgPreference?: boolean;
    enableVideoVisitsOrgPref?: boolean;
    enableVisitCalendarSync?: boolean;
    enableVisitInventoryEnabled?: boolean;
    enableWealthManagementAIPref?: boolean;
    isCustomDpeTxObsProviderSearchEnabled?: boolean;
    loanApplicantAddressAutoCreation?: boolean;
    loanApplicantAutoCreation?: boolean;
    mortgageSalesforceSharing?: boolean;
    nonProfitCloudEmbeddedAI?: boolean;
    partyProfMultiShrPrtnrsOrgPref?: boolean;
    rlaEditIfAccHasEdit?: boolean;
    showCollectionContactAndAccount?: boolean;
    transformRBLtoDPE?: boolean;
}

export type InsPlcyCoverageSpecConfig = Metadata & {
    coverageSpecification: string;
    isNetworkTierApplicable: boolean;
    masterLabel: string;
}

export type InsPlcyLineOfBusConfig = Metadata & {
    lineOfBusiness: string;
    masterLabel: string;
    termName: string;
}

export type InsPolicyLifecycleConfig = Metadata & {
    customContextDefinition?: string;
    customContextMapping?: string;
    displayFields: string;
    policyProcessType: string;
    standardContextDefinition?: string;
    standardContextMapping?: string;
}

export type InsPolicyManagementConfig = Metadata & {
    expectedRevExpsSetDef?: string;
    label: string;
    premiumCalcExpsSetDef?: string;
    stdExpectedRevExpsSetDef?: string;
    stdPremiumCalcExpsSetDef?: string;
}

export type InsRatePlanCmsnConfig = Metadata & {
    calculationType: string;
    displayFields: string;
    ratePlanCommissionType: string;
}

export type InsRatePlanTypeConfig = Metadata & {
    displayFields: string;
    ratePlanCommissionTypes: string;
    ratePlanType: string;
}

export type InstalledPackage = Metadata & {
    activateRSS: boolean;
    password?: string;
    securityType?: string;
    versionNumber: string;
}

export type IntegrationProviderDef = Metadata & {
    active?: boolean;
    apexClass?: string;
    description?: string;
    developerName: string;
    externalServiceOperationName?: string;
    externalServiceRegistration?: string;
    fileBasedApexClass?: string;
    inputDataProcessor?: string;
    integrationProviderAttributes: IntegrationProviderAttr[];
    javaClassName?: string;
    outputDataProcessor?: string;
    providerLabel: string;
    type: string;
}

export type InternalDataConnector = Metadata & {
    alias: string;
    dataConnectionStatus: string;
    dataConnectorType: string;
    dataPlatform: string;
    dataSourceTenant: string;
    dataSpace: string;
    externalRecordId: string;
    isMetadataSync: boolean;
    masterLabel: string;
}

export type InternalOrganization = Metadata & {
    isForDataExport: boolean;
    isForDataImport: boolean;
    masterLabel: string;
}

export type InventoryReplenishmentSettings = Metadata & {
    enableInventoryReplenishment?: boolean;
}

export type InventorySettings = Metadata & {
    enableOCIB2CIntegration?: boolean;
    enableOmniChannelInventory?: boolean;
}

export type InvocableActionSettings = Metadata & {
    isPartialSaveAllowed?: boolean;
}

export type IoTSettings = Metadata & {
    enableIoT?: boolean;
    enableIoTInsightsPilot?: boolean;
    enableIoTUsageEmail?: boolean;
}

export type KeywordList = Metadata & {
    description?: string;
    keywords: Keyword[];
    masterLabel: string;
}

export type KnowledgeSettings = Metadata & {
    answers?: KnowledgeAnswerSettings;
    cases?: KnowledgeCaseSettings;
    defaultLanguage?: string;
    enableChatterQuestionKBDeflection?: boolean;
    enableCreateEditOnArticlesTab?: boolean;
    enableExternalMediaContent?: boolean;
    enableKbStandardSharing?: boolean;
    enableKnowledge?: boolean;
    enableKnowledgeAgentContribution?: boolean;
    enableKnowledgeAnswersPromotion?: boolean;
    enableKnowledgeArticleTextHighlights?: boolean;
    enableKnowledgeCaseRL?: boolean;
    enableKnowledgeKeywordAutoComplete?: boolean;
    enableKnowledgeTitleAutoComplete?: boolean;
    enableLightningKbAutoLoadRichTextField?: boolean;
    enableLightningKnowledge?: boolean;
    languages?: KnowledgeLanguageSettings;
    showArticleSummariesCustomerPortal?: boolean;
    showArticleSummariesInternalApp?: boolean;
    showArticleSummariesPartnerPortal?: boolean;
    showValidationStatusField?: boolean;
    suggestedArticles?: KnowledgeSuggestedArticlesSettings;
    votingEnabled?: boolean;
}

export type LaborCostOptimizationSettings = Metadata & {
    canShowVehicle?: boolean;
    canShowVehicleDefinition?: boolean;
    enableTimeSheetsAndLaborCostOptimization?: boolean;
    endTimeOffset?: number;
    startTimeOffset?: number;
}

export type LanguageSettings = Metadata & {
    enableCanadaIcuFormat?: boolean;
    enableDataTranslation?: boolean;
    enableEndUserLanguages?: boolean;
    enableICULocaleDateFormat?: boolean;
    enableLanguageExtensionPackage?: boolean;
    enableLocalNamesForStdObjects?: boolean;
    enableLocaleInsensitiveFiltering?: boolean;
    enablePlatformLanguages?: boolean;
    enableTranslationWorkbench?: boolean;
    useLanguageFallback?: boolean;
}

export type Layout = Metadata & {
    customButtons: string[];
    customConsoleComponents?: CustomConsoleComponents;
    emailDefault?: boolean;
    excludeButtons: string[];
    feedLayout?: FeedLayout;
    headers: string[];
    layoutSections: LayoutSection[];
    miniLayout?: MiniLayout;
    multilineLayoutFields: string[];
    platformActionList?: PlatformActionList;
    quickActionList?: QuickActionList;
    relatedContent?: RelatedContent;
    relatedLists: RelatedListItem[];
    relatedObjects: string[];
    runAssignmentRulesDefault?: boolean;
    showEmailCheckbox?: boolean;
    showHighlightsPanel?: boolean;
    showInteractionLogPanel?: boolean;
    showKnowledgeComponent?: boolean;
    showRunAssignmentRulesCheckbox?: boolean;
    showSolutionSection?: boolean;
    showSubmitAndAttachButton?: boolean;
    summaryLayout?: SummaryLayout;
}

export type LeadConfigSettings = Metadata & {
    doesEnableLeadConvertDefaultSubjectBlankTaskCreation?: boolean;
    doesHideOpportunityInConvertLeadWindow?: boolean;
    doesPreserveLeadStatus?: boolean;
    doesSelectNoOpportunityOnConvertLead?: boolean;
    doesTrackHistory?: boolean;
    enableConversionsOnMobile?: boolean;
    enableOrgWideMergeAndDelete?: boolean;
    shouldLeadConvertRequireValidation?: boolean;
    shouldSendNotificationEmailWhenLeadOwnerUpdatesViaApexInLEX?: boolean;
}

export type LeadConvertSettings = Metadata & {
    allowOwnerChange?: boolean;
    objectMapping: ObjectMapping[];
    opportunityCreationOptions?: string;
}

export type LearningItemType = Metadata & {
    apexEvaluationHandler?: string;
    apexSerializerDeserializer?: string;
    customField: string;
    customObject: string;
    developerName: string;
    icon: string;
    lightningComponentDefinition: string;
    masterLabel: string;
}

export type Letterhead = Metadata & {
    available: boolean;
    backgroundColor: string;
    bodyColor: string;
    bottomLine: LetterheadLine;
    description?: string;
    footer: LetterheadHeaderFooter;
    header: LetterheadHeaderFooter;
    middleLine: LetterheadLine;
    name: string;
    topLine: LetterheadLine;
}

export type LicenseDefinition = Metadata & {
    aggregationGroup: string;
    description?: string;
    isPublished: boolean;
    label: string;
    licensedCustomPermissions: LicensedCustomPermissions[];
    licensingAuthority: string;
    licensingAuthorityProvider: string;
    minPlatformVersion: number;
    origin: string;
    revision: number;
    trialLicenseDuration: number;
    trialLicenseQuantity: number;
}

export type LicensingSettings = Metadata & {
    enableAutoCreateLicenseDefinition?: boolean;
    enableOnDemandProvisioning?: boolean;
}

export type LifeSciConfigCategory = Metadata & {
    category: string;
    categoryLabel?: string;
    isProtected?: boolean;
    masterLabel: string;
}

export type LifeSciConfigRecord = Metadata & {
    assignments: LifeSciConfigAssignment[];
    fieldValues: LifeSciConfigFieldValue[];
    isActive?: boolean;
    isOrgLevel?: boolean;
    isProtected?: boolean;
    lifeSciConfigCategory: string;
    masterLabel: string;
    parentConfigRecord?: string;
    type?: string;
}

export type LightningBolt = Metadata & {
    category: string;
    lightningBoltFeatures: LightningBoltFeatures[];
    lightningBoltImages: LightningBoltImages[];
    lightningBoltItems: LightningBoltItems[];
    masterLabel: string;
    publisher: string;
    summary: string;
}

export type LightningComponentBundle = Metadata & {
    apiVersion?: number;
    capabilities?: Capabilities;
    description?: string;
    isExplicitImport?: boolean;
    isExposed?: boolean;
    lwcResources?: LwcResources;
    masterLabel?: string;
    runtimeNamespace?: string;
    targetConfigs?: string;
    targets?: Targets;
}

export type LightningExperienceSettings = Metadata & {
    activeThemeName?: string;
    enableAccessCheckCrucPref?: boolean;
    enableApiUserLtngOutAccessPref?: boolean;
    enableAuraCDNPref?: boolean;
    enableAuraSecStaticResCRUCPref?: boolean;
    enableDeferRenderingWorkspacePage?: boolean;
    enableErrorExperienceEnabled?: boolean;
    enableFeedbackInMobile?: boolean;
    enableGoogleSheetsForSfdcEnabled?: boolean;
    enableHideOpenInQuip?: boolean;
    enableIE11DeprecationMsgHidden?: boolean;
    enableIE11LEXCrucPref?: boolean;
    enableInAppLearning?: boolean;
    enableInAppTooltips?: boolean;
    enableLEXExtensionComponentCustomization?: boolean;
    enableLEXExtensionDarkMode?: boolean;
    enableLEXExtensionInlineEditModifier?: boolean;
    enableLEXExtensionLinkGrabber?: boolean;
    enableLEXExtensionRelatedLists?: boolean;
    enableLEXExtensionRequiredFields?: boolean;
    enableLEXExtensionTrailhead?: boolean;
    enableLEXOnIpadEnabled?: boolean;
    enableLexEndUsersNoSwitching?: boolean;
    enableLightningPreviewPref?: boolean;
    enableNavPersonalizationOptOut?: boolean;
    enableNoBackgroundNavigations?: boolean;
    enableQuip?: boolean;
    enableRemoveThemeBrandBanner?: boolean;
    enableS1BannerPref?: boolean;
    enableS1BrowserEnabled?: boolean;
    enableS1DesktopEnabled?: boolean;
    enableS1UiLoggingEnabled?: boolean;
    enableSalesforceNext?: boolean;
    enableSidToken3rdPartyAuraApp?: boolean;
    enableSkypeChatEnabled?: boolean;
    enableSparkAllUsers?: boolean;
    enableSparkConversationEnabled?: boolean;
    enableStackedModalManagerEnabled?: boolean;
    enableTryLightningOptOut?: boolean;
    enableUseS1AlohaDesktop?: boolean;
    enableUsersAreLightningOnly?: boolean;
    enableWebExEnabled?: boolean;
    enableWebexAllUsers?: boolean;
    isLEXExtensionComponentCustomizationOff?: boolean;
    isLEXExtensionDarkModeOff?: boolean;
    isLEXExtensionLinkGrabberOff?: boolean;
    isLEXExtensionOff?: boolean;
}

export type LightningExperienceTheme = Metadata & {
    defaultBrandingSet: string;
    description?: string;
    designSystemVersion?: string;
    masterLabel: string;
    shouldOverrideLoadingImage?: boolean;
}

export type LightningMessageChannel = Metadata & {
    description?: string;
    isExposed?: boolean;
    lightningMessageFields: LightningMessageField[];
    masterLabel: string;
}

export type LightningOnboardingConfig = Metadata & {
    collaborationGroup?: string;
    customQuestion?: string;
    feedbackFormDaysFrequency?: number;
    isCustom: boolean;
    masterLabel: string;
    promptDelayTime?: number;
    sendFeedbackToSalesforce: boolean;
}

export type LightningTypeBundle = Metadata & {
    description?: string;
    masterLabel: string;
    resources: LightningTypeBundleResource[];
}

export type LiveAgentSettings = Metadata & {
    enableChatFindOrCreateEnable?: boolean;
    enableLiveAgent?: boolean;
    enableQuickTextEnabled?: boolean;
}

export type LiveChatAgentConfig = Metadata & {
    assignments?: AgentConfigAssignments;
    autoGreeting?: string;
    capacity?: number;
    criticalWaitTime?: number;
    customAgentName?: string;
    disableTransferConferenceGreeting?: boolean;
    enableAgentFileTransfer?: boolean;
    enableAgentSneakPeek?: boolean;
    enableAssistanceFlag?: boolean;
    enableAutoAwayOnDecline?: boolean;
    enableAutoAwayOnPushTimeout?: boolean;
    enableChatConferencing?: boolean;
    enableChatMonitoring?: boolean;
    enableChatTransferToAgent?: boolean;
    enableChatTransferToButton?: boolean;
    enableChatTransferToSkill?: boolean;
    enableLogoutSound?: boolean;
    enableNotifications?: boolean;
    enableRequestSound?: boolean;
    enableSneakPeek?: boolean;
    enableVisitorBlocking?: boolean;
    enableWhisperMessage?: boolean;
    label: string;
    supervisorDefaultAgentStatusFilter?: string;
    supervisorDefaultButtonFilter?: string;
    supervisorDefaultSkillFilter?: string;
    supervisorSkills?: SupervisorAgentConfigSkills;
    transferableButtons?: AgentConfigButtons;
    transferableSkills?: AgentConfigSkills;
}

export type LiveChatButton = Metadata & {
    animation?: string;
    autoGreeting?: string;
    chasitorIdleTimeout?: number;
    chasitorIdleTimeoutWarning?: number;
    chatPage?: string;
    customAgentName?: string;
    deployments?: LiveChatButtonDeployments;
    enableQueue?: boolean;
    inviteEndPosition?: string;
    inviteImage?: string;
    inviteStartPosition?: string;
    isActive?: boolean;
    label: string;
    numberOfReroutingAttempts?: number;
    offlineImage?: string;
    onlineImage?: string;
    optionsCustomRoutingIsEnabled?: boolean;
    optionsHasChasitorIdleTimeout: boolean;
    optionsHasInviteAfterAccept?: boolean;
    optionsHasInviteAfterReject?: boolean;
    optionsHasRerouteDeclinedRequest?: boolean;
    optionsIsAutoAccept?: boolean;
    optionsIsInviteAutoRemove?: boolean;
    overallQueueLength?: number;
    perAgentQueueLength?: number;
    postChatPage?: string;
    postChatUrl?: string;
    preChatFormPage?: string;
    preChatFormUrl?: string;
    pushTimeOut?: number;
    routingType: string;
    site?: string;
    skills?: LiveChatButtonSkills;
    timeToRemoveInvite?: number;
    type: string;
    windowLanguage?: string;
}

export type LiveChatDeployment = Metadata & {
    brandingImage?: string;
    connectionTimeoutDuration?: number;
    connectionWarningDuration?: number;
    displayQueuePosition?: boolean;
    domainWhiteList?: LiveChatDeploymentDomainWhitelist;
    enablePrechatApi?: boolean;
    enableTranscriptSave?: boolean;
    label: string;
    mobileBrandingImage?: string;
    site?: string;
    windowTitle: string;
}

export type LiveChatSensitiveDataRule = Metadata & {
    actionType: string;
    description?: string;
    enforceOn: number;
    isEnabled: boolean;
    pattern: string;
    priority: number;
    processingType: string;
    replacement?: string;
    version: string;
}

export type LiveMessageSettings = Metadata & {
    enableCheckCEUserPerm?: boolean;
    enableLiveMessage?: boolean;
}

export type LocationUse = Metadata & {
    isBookable?: boolean;
    isProtected?: boolean;
    locationType: string;
    masterLabel: string;
    use?: string;
}

export type LoyaltyProgramSetup = Metadata & {
    label?: string;
    programProcesses: LoyaltyProgramProcess[];
}

export type MLDataDefinition = Metadata & {
    developerName: string;
    entityDeveloperName: string;
    excludedFields: string[];
    includedFields: string[];
    joinFields: MLField[];
    parentDefinitionDevName: string;
    scoringFilter?: MLFilter;
    segmentFilter?: MLFilter;
    trainingFilter?: MLFilter;
    type: string;
}

export type MLGenerativeDefinition = Metadata & {
    aiApplicationDeveloperName: string;
    description?: string;
    developerName: string;
    masterLabel?: string;
    status: string;
    type: string;
}

export type MLPredictionDefinition = Metadata & {
    aiApplicationDeveloperName: string;
    description?: string;
    developerName: string;
    masterLabel?: string;
    negativeExpression?: MLFilter;
    positiveExpression?: MLFilter;
    predictionField?: string;
    priority?: number;
    pushbackField?: string;
    status: string;
    type: string;
}

export type MLRecommendationDefinition = Metadata & {
    aiApplicationDeveloperName: string;
    description?: string;
    developerName: string;
    externalId?: string;
    interactionDateTimeField?: string;
    masterLabel: string;
    negativeExpression?: MLFilter;
    positiveExpression?: MLFilter;
    status: string;
}

export type MacroSettings = Metadata & {
    contextualMacroFiltering?: boolean;
    enableAdvancedSearch?: boolean;
    macrosInFolders?: boolean;
}

export type ManagedContentType = Metadata & {
    description?: string;
    developerName: string;
    isMetadataContent?: boolean;
    managedContentNodeTypes: ManagedContentNodeType[];
    masterLabel: string;
}

export type ManagedContentTypeBundle = Metadata & {
    description?: string;
    developerName: string;
    masterLabel: string;
    schemaBody: string;
}

export type ManagedEventSubscription = Metadata & {
    defaultReplay?: string;
    errorRecoveryReplay?: string;
    label?: string;
    state?: string;
    topicName?: string;
    version?: string;
}

export type ManagedTopic = Metadata & {
    managedTopicType: string;
    name: string;
    parentName: string;
    position: number;
    topicDescription: string;
}

export type ManagedTopics = Metadata & {
    managedTopic: ManagedTopic[];
}

export type MarketAudienceDefinition = Metadata & {
    audienceContactPoints: AudienceContactPoint[];
    audiencePackageOwner?: string;
    channels?: string;
    description?: string;
    externalKey?: string;
    isProtected?: boolean;
    lastAudienceExcludedCount?: number;
    lastAudienceMemberCount?: number;
    marketAudienceFields: MarketAudienceField[];
    masterLabel: string;
    status: string;
}

export type MarketSegmentDefinition = Metadata & {
    additionalMetadata?: string;
    excludeCriteria?: string;
    includeCriteria?: string;
    masterLabel: string;
    segmentOn?: string;
    segmentType: string;
}

export type MarketingAppExtActivity = Metadata & {
    description?: string;
    endpointUrl?: string;
    isActive?: boolean;
    isProtected?: boolean;
    marketingAppExtension: string;
    masterLabel: string;
}

export type MarketingAppExtension = Metadata & {
    description?: string;
    isActive?: boolean;
    isProtected?: boolean;
    marketingAppExtActions: MarketingAppExtAction[];
    marketingAppExtActivities: MarketingAppExtActivity[];
    masterLabel: string;
}

export type MatchingRule = Metadata & {
    booleanFilter?: string;
    description?: string;
    label: string;
    matchingRuleItems: MatchingRuleItem[];
    ruleStatus: string;
}

export type MatchingRules = Metadata & {
    matchingRules: MatchingRule[];
}

export type MeetingsSettings = Metadata & {
    enableSalesforceMeetings?: boolean;
    enableSalesforceMeetingsSyncCheck?: boolean;
    enableZoomVideoConference?: boolean;
}

export type MessagingChannel = Metadata & {
    automatedResponses: MessagingAutoResponse[];
    channelUsages: MessagingChannelUsage[];
    countryCode?: string;
    customParameters: MessagingChannelCustomParameter[];
    description?: string;
    embeddedConfig?: EmbeddedMessagingChannel;
    externalAccountId?: string;
    masterLabel: string;
    messagingChannelType: string;
    messagingKeywords: MessagingKeyword[];
    platformKey?: string;
    queueRoutingConfig?: string;
    sessionHandlerFlow?: string;
    sessionHandlerQueue?: string;
    sessionHandlerType: string;
    sessionHandlerUser?: string;
    standardParameters: MessagingChannelStandardParameter[];
}

export type MetadataGroup = Metadata & {
    description?: string;
    mappings: string[];
}

export type MfgProgramTemplate = Metadata & {
    description?: string;
    programTemplateItems: MfgProgramTemplateItem[];
    programTemplateName: string;
    status: string;
}

export type MfgServiceConsoleSettings = Metadata & {
    enableMfgServiceConsole?: boolean;
}

export type MilestoneType = Metadata & {
    description?: string;
    recurrenceType?: string;
}

export type MktCalcInsightObjectDef = Metadata & {
    builderExpression?: string;
    creationType: string;
    description?: string;
    expression?: string;
    masterLabel: string;
}

export type MktDataConnection = Metadata & {
    connectionMethod: string;
    connectionStatus?: string;
    connectorName: string;
    credentials: MktDataConnectionCred[];
    externalRecordIdentifier?: string;
    masterLabel: string;
    parameters: MktDataConnectionParam[];
}

export type MktDataConnectionCred = Metadata & {
    credentialName: string;
    value: string;
}

export type MktDataConnectionParam = Metadata & {
    paramName: string;
    value: string;
}

export type MktDataTranField = Metadata & {
    creationType: string;
    datatype: string;
    dateFormat?: string;
    externalName: string;
    isDataRequired?: boolean;
    length?: number;
    masterLabel: string;
    precision?: number;
    primaryIndexOrder?: number;
    scale?: number;
    sequence: number;
}

export type MktDataTranObject = Metadata & {
    connector: string;
    creationType: string;
    dataSource: string;
    dataSourceObject: string;
    masterLabel: string;
    mktDataTranFields: MktDataTranField[];
    objectCategory: string;
}

export type MktDatalakeSrcKeyQualifier = Metadata & {
    description?: string;
    masterLabel: string;
}

export type MlDomain = Metadata & {
    description?: string;
    label: string;
    mlIntents: MlIntent[];
    mlSlotClasses: MlSlotClass[];
}

export type MlModelArtifact = Metadata & {
    algorithmType?: string;
    connectorType?: string;
    deployStatus?: string;
    description?: string;
    generativeModelType?: string;
    inputFeatures: MlModelInput[];
    label: string;
    modelCapabilities: string[];
    modelCapability?: string;
    modelType?: string;
    outputFeatures: MlModelOutput[];
    parameterOverrides: MlParameterOverride[];
    parameters: MlParameterDefinition[];
    parentModel?: string;
    predictionType?: string;
    runtimeType?: string;
    source?: string;
    sourceContainer?: string;
    sourceType?: string;
    trainingMetrics?: string;
    type: string;
}

export type MlModelConnection = Metadata & {
    deployStatus?: string;
    endpoints: MlModelEndpoint[];
    externalSystemRegistry?: string;
    foundationalModelName?: string;
    label: string;
    outputFeatures: MlModelOutput[];
    registeredModelApiName?: string;
    type: string;
}

export type MlModelSchema = Metadata & {
    format?: string;
    isMultiRowPrediction?: boolean;
    label: string;
    multiRowPredictionKey?: string;
    multiRowResultKey?: string;
    schema: string;
}

export type MobileApplicationDetail = Metadata & {
    applicationBinaryFile?: string;
    applicationBinaryFileName?: string;
    applicationBundleIdentifier?: string;
    applicationFileLength?: number;
    applicationIconFile?: string;
    applicationIconFileName?: string;
    applicationInstallUrl?: string;
    devicePlatform: string;
    deviceType?: string;
    minimumOsVersion?: string;
    privateApp?: boolean;
    version: string;
}

export type MobileSettings = Metadata & {
    dashboardMobile?: DashboardMobileSettings;
    enableImportContactFromDevice?: boolean;
    enableOfflineDraftsEnabled?: boolean;
    enablePopulateNameManuallyInToday?: boolean;
    enableS1EncryptedStoragePref2?: boolean;
    enableS1OfflinePref?: boolean;
}

export type ModerationRule = Metadata & {
    action: string;
    actionLimit?: number;
    active: boolean;
    description?: string;
    entitiesAndFields: ModeratedEntityField[];
    masterLabel: string;
    notifyLimit?: number;
    timePeriod?: string;
    type?: string;
    userCriteria: string[];
    userMessage?: string;
}

export type Module = Metadata & {
    description?: string;
    label: string;
    moduleDependencies?: ModuleDependencies;
    moduleType: string;
    name: string;
    types: PackageTypeMembers[];
    version?: string;
}

export type MyDomainDiscoverableLogin = Metadata & {
    apexHandler: string;
    executeApexHandlerAs?: string;
    usernameLabel?: string;
}

export type MyDomainSettings = Metadata & {
    areLegacyRedirectsMaintained?: boolean;
    canOnlyLoginWithMyDomainUrl?: boolean;
    doesApiLoginRequireOrgDomain?: boolean;
    doesWarnOnForceComRedirect?: boolean;
    doesWarnOnRedirect?: boolean;
    domainPartition?: string;
    enableCrossDomainPreviewCookies?: boolean;
    enableEdgeDuringRollout?: boolean;
    enableExtendedRedirections?: boolean;
    enableLegacyRedirections?: boolean;
    enableNativeBrowserForAuthOnAndroid?: boolean;
    enableNativeBrowserForAuthOnIos?: boolean;
    enableShareBrowserSessionAndroidForAuth?: boolean;
    enableShareBrowserSessionIOSForAuth?: boolean;
    instancedUrlRedirectHandling?: string;
    isFirstPartyCookieUseRequired?: boolean;
    logRedirections?: boolean;
    myDomainName?: string;
    myDomainSuffix?: string;
    onboardCustomerSpecificSuffix?: boolean;
    redirectForceComSiteUrls?: boolean;
    redirectPriorMyDomain?: boolean;
    use3rdPartyCookieBlockingCompatibleHostnames?: boolean;
    useEdge?: boolean;
    useEnhancedDomainsInSandbox?: boolean;
    useStabilizedMyDomainHostnames?: boolean;
    useStabilizedSandboxMyDomainHostnames?: boolean;
}

export type NameSettings = Metadata & {
    enableInformalName?: boolean;
    enableMiddleName?: boolean;
    enableNameSuffix?: boolean;
}

export type NamedCredential = Metadata & {
    allowMergeFieldsInBody?: boolean;
    allowMergeFieldsInHeader?: boolean;
    authProvider?: string;
    authTokenEndpointUrl?: string;
    awsAccessKey?: string;
    awsAccessSecret?: string;
    awsRegion?: string;
    awsService?: string;
    calloutStatus?: string;
    certificate?: string;
    endpoint?: string;
    generateAuthorizationHeader?: boolean;
    jwtAudience?: string;
    jwtFormulaSubject?: string;
    jwtIssuer?: string;
    jwtSigningCertificate?: string;
    jwtTextSubject?: string;
    jwtValidityPeriodSeconds?: number;
    label: string;
    namedCredentialParameters: NamedCredentialParameter[];
    namedCredentialType?: string;
    oauthRefreshToken?: string;
    oauthScope?: string;
    oauthToken?: string;
    outboundNetworkConnection?: string;
    password?: string;
    principalType?: string;
    protocol?: string;
    username?: string;
}

export type NavigationMenu = Metadata & {
    container: string;
    containerType: string;
    label: string;
    navigationMenuItem: NavigationMenuItem[];
}

export type Network = Metadata & {
    allowInternalUserLogin?: boolean;
    allowMembersToFlag?: boolean;
    allowedExtensions?: string;
    branding?: Branding;
    caseCommentEmailTemplate?: string;
    changePasswordTemplate: string;
    chgEmailVerNewTemplate?: string;
    chgEmailVerOldTemplate?: string;
    communityRoles?: CommunityRoles;
    description?: string;
    deviceActEmailTemplate?: string;
    disableReputationRecordConversations?: boolean;
    emailFooterLogo?: string;
    emailFooterText?: string;
    emailSenderAddress: string;
    emailSenderName: string;
    embeddedLoginEnabled?: boolean;
    enableApexCDNCaching?: boolean;
    enableCustomVFErrorPageOverrides?: boolean;
    enableDirectMessages?: boolean;
    enableExpFriendlyUrlsAsDefault?: boolean;
    enableExperienceBundleBasedSnaOverrideEnabled?: boolean;
    enableGuestChatter?: boolean;
    enableGuestFileAccess?: boolean;
    enableGuestMemberVisibility?: boolean;
    enableImageOptimizationCDN?: boolean;
    enableInvitation?: boolean;
    enableKnowledgeable?: boolean;
    enableLWRExperienceConnectedApp?: boolean;
    enableMemberVisibility?: boolean;
    enableNicknameDisplay?: boolean;
    enablePrivateMessages?: boolean;
    enableReputation?: boolean;
    enableShowAllNetworkSettings?: boolean;
    enableSiteAsContainer?: boolean;
    enableTalkingAboutStats?: boolean;
    enableTopicAssignmentRules?: boolean;
    enableTopicSuggestions?: boolean;
    enableUpDownVote?: boolean;
    feedChannel?: string;
    forgotPasswordTemplate: string;
    gatherCustomerSentimentData?: boolean;
    headlessForgotPasswordTemplate?: string;
    headlessRegistrationTemplate?: string;
    lockoutTemplate?: string;
    logoutUrl?: string;
    maxFileSizeKb?: number;
    navigationLinkSet?: NavigationLinkSet;
    networkAuthApiSettings?: NetworkAuthApiSettings;
    networkMemberGroups?: NetworkMemberGroup;
    networkPageOverrides?: NetworkPageOverride;
    newSenderAddress?: string;
    picassoSite?: string;
    pwdlessRegEmailTemplate?: string;
    recommendationAudience?: RecommendationAudience;
    recommendationDefinition?: RecommendationDefinition;
    reputationLevels?: ReputationLevelDefinitions;
    reputationPointsRules?: ReputationPointsRules;
    selfRegMicroBatchSubErrorEmailTemplate?: string;
    selfRegProfile?: string;
    selfRegistration?: boolean;
    sendWelcomeEmail?: boolean;
    site: string;
    siteArchiveStatus?: string;
    status: string;
    tabs: NetworkTabSet;
    urlPathPrefix?: string;
    verificationTemplate?: string;
    welcomeTemplate: string;
}

export type NotificationTypeConfig = Metadata & {
    notificationTypeSettings: NotificationTypeSettings[];
}

export type NotificationsSettings = Metadata & {
    enableActvityReminderBrowserNotifs?: boolean;
    enableMobileAppPushNotifications?: boolean;
    enableNotifications?: boolean;
}

export type OauthCustomScope = Metadata & {
    assignedTo: OauthCustomScopeApp[];
    description: string;
    developerName: string;
    isProtected?: boolean;
    isPublic?: boolean;
    masterLabel: string;
}

export type OauthOidcSettings = Metadata & {
    blockOAuthUnPwFlow?: boolean;
    blockOAuthUsrAgtFlow?: boolean;
    isPkceRequired?: boolean;
    oAuthCdCrdtFlowEnable?: boolean;
}

export type OauthTokenExchangeHandler = Metadata & {
    description: string;
    developerName: string;
    enablements: OauthTokenExchHandlerApp[];
    isAccessTokenSupported: boolean;
    isEnabled: boolean;
    isIdTokenSupported: boolean;
    isJwtSupported: boolean;
    isProtected?: boolean;
    isRefreshTokenSupported: boolean;
    isSaml2Supported: boolean;
    isUserCreationAllowed: boolean;
    masterLabel: string;
    tokenHandlerApex: string;
}

export type ObjectHierarchyRelationship = Metadata & {
    childObjectMapping?: ObjectMapping;
    childObjectMappingId?: string;
    inputObjRecordsGrpFieldName?: string;
    mappingType?: string;
    masterLabel?: string;
    outputPntRelationshipFieldName?: string;
    parentObjectMapping: ObjectMapping;
    parentObjectMappingId?: string;
    parentRecord?: string;
    parentRelationshipFieldName?: string;
    sourceReferenceRelaFieldName?: string;
    usageType: string;
}

export type ObjectLinkingSettings = Metadata & {
    enableObjectLinking?: boolean;
}

export type ObjectSourceTargetMap = Metadata & {
    creationType?: string;
    fieldSourceTargetMaps: FieldSourceTargetMap[];
    masterLabel: string;
    sequenceNbr?: number;
    sourceObjectName: string;
    targetObjectName: string;
}

export type OcrSampleDocument = Metadata & {
    applicationType?: string;
    contentAsset?: string;
    documentHeight?: number;
    documentType: string;
    masterLabel: string;
    ocrSampleDocumentFields: OcrSampleDocumentField[];
    ocrSampleDocumentPages: OcrSampleDocumentPage[];
}

export type OcrTemplate = Metadata & {
    active?: boolean;
    description?: string;
    documentType: string;
    masterLabel: string;
    ocrTargetObjects: OcrTargetObject[];
    ocrTemplateSampleDocuments: OcrTemplateSampleDocument[];
    pageCount?: number;
    templateName: string;
}

export type OmniChannelPricingSettings = Metadata & {
    enableOmniChannelPricing?: boolean;
}

export type OmniChannelSettings = Metadata & {
    enableOmniAutoLoginPrompt?: boolean;
    enableOmniChannel?: boolean;
    enableOmniSecondaryRoutingPriority?: boolean;
    enableOmniSkillsRouting?: boolean;
}

export type OmniDataTransform = Metadata & {
    active?: boolean;
    assignmentRulesUsed?: boolean;
    deletedOnSuccess?: boolean;
    description?: string;
    errorIgnored?: boolean;
    expectedInputJson?: string;
    expectedInputOtherData?: string;
    expectedInputXml?: string;
    expectedOutputJson?: string;
    expectedOutputOtherData?: string;
    expectedOutputXml?: string;
    fieldLevelSecurityEnabled?: boolean;
    inputParsingClass?: string;
    inputType?: string;
    name: string;
    namespace?: string;
    nullInputsIncludedInOutput?: boolean;
    omniDataTransformItem: OmniDataTransformItem[];
    outputParsingClass?: string;
    outputType?: string;
    overrideKey?: string;
    preprocessorClassName?: string;
    previewJsonData?: string;
    previewOtherData?: string;
    previewSourceObjectData?: string;
    previewXmlData?: string;
    processSuperBulk?: boolean;
    requiredPermission?: string;
    responseCacheTtlMinutes?: number;
    responseCacheType?: string;
    rollbackOnError?: boolean;
    sourceObject?: string;
    sourceObjectDefault?: boolean;
    synchronousProcessThreshold?: number;
    targetOutputDocumentIdentifier?: string;
    targetOutputFileName?: string;
    type: string;
    uniqueName?: string;
    versionNumber?: number;
    xmlDeclarationRemoved?: boolean;
    xmlOutputTagsOrder?: string;
}

export type OmniExtTrackingDef = Metadata & {
    description?: string;
    developerName: string;
    isActive: boolean;
    masterLabel: string;
    omniExtTrackingDefKey?: string;
    omniExtTrackingEventDefs: OmniExtTrackingEventDef[];
    trackingFrameworkInformation: string;
    trackingServiceProvider: string;
}

export type OmniExtTrackingEventDef = Metadata & {
    componentType: string;
    description?: string;
    developerName: string;
    inclusionRule: string;
    masterLabel: string;
    omniExtTrackingDef?: string;
    omniExtTrackingEventDefKey?: string;
    payloadTemplate: string;
}

export type OmniIntegrationProcedure = Metadata & {
    customHtmlTemplates?: string;
    customJavaScript?: string;
    description?: string;
    designerCustomizationType?: string;
    elementTypeComponentMapping?: string;
    isActive?: boolean;
    isIntegrationProcedure?: boolean;
    isMetadataCacheDisabled?: boolean;
    isOmniScriptEmbeddable?: boolean;
    isTestProcedure?: boolean;
    isWebCompEnabled?: boolean;
    language: string;
    lastPreviewPage?: string;
    name: string;
    nameSpace?: string;
    omniProcessElements: OmniProcessElement[];
    omniProcessKey?: string;
    omniProcessType: string;
    overrideKey?: string;
    propertySetConfig?: string;
    requiredPermission?: string;
    responseCacheType?: string;
    subType: string;
    type: string;
    uniqueName: string;
    versionNumber: number;
    webComponentKey?: string;
}

export type OmniInteractionAccessConfig = Metadata & {
    configName?: string;
    isAsyncCardCachingEnabled: boolean;
    isCardApexRemoteDisabled: boolean;
    isCardCacheDisabled: boolean;
    isCardDataTfrmDisabled: boolean;
    isCardIntegrationProcDisabled: boolean;
    isCardRestApiDisabled: boolean;
    isCardSoqlDisabled: boolean;
    isCardSoslDisabled: boolean;
    isCardStreamingApiDisabled: boolean;
    isDataTfrmEncrpFieldsDisabled: boolean;
    masterLabel: string;
    setupOwner?: string;
}

export type OmniInteractionConfig = Metadata & {
    masterLabel: string;
    value: string;
}

export type OmniScript = Metadata & {
    assessmentDefinitionMetadata: AssessmentDefinitionMetadata[];
    customHtmlTemplates?: string;
    customJavaScript?: string;
    description?: string;
    designerCustomizationType?: string;
    discoveryFrameworkUsageType?: string;
    elementTypeComponentMapping?: string;
    isActive?: boolean;
    isIntegrationProcedure?: boolean;
    isMetadataCacheDisabled?: boolean;
    isOmniScriptEmbeddable?: boolean;
    isTestProcedure?: boolean;
    isWebCompEnabled?: boolean;
    language: string;
    lastPreviewPage?: string;
    name: string;
    nameSpace?: string;
    omniAssessmentTasks: OmniAssessmentTaskMetadata[];
    omniProcessElements: OmniProcessElement[];
    omniProcessKey?: string;
    omniProcessType: string;
    overrideKey?: string;
    propertySetConfig?: string;
    requiredPermission?: string;
    responseCacheType?: string;
    subType: string;
    type: string;
    uniqueName: string;
    versionNumber: number;
    webComponentKey?: string;
}

export type OmniStudioSettings = Metadata & {
    enableOmniStudioMetadata?: boolean;
}

export type OmniSupervisorConfig = Metadata & {
    isTimelineHidden: boolean;
    masterLabel: string;
    omniSupervisorConfigAction: OmniSupervisorConfigAction[];
    omniSupervisorConfigGroup: OmniSupervisorConfigGroup[];
    omniSupervisorConfigProfile: OmniSupervisorConfigProfile[];
    omniSupervisorConfigQueue: OmniSupervisorConfigQueue[];
    omniSupervisorConfigSkill: OmniSupervisorConfigSkill[];
    omniSupervisorConfigTab: OmniSupervisorConfigTab[];
    skillVisibility?: string;
}

export type OmniTrackingComponentDef = Metadata & {
    componentType: string;
    componentVersion: number;
    developerName: string;
    masterLabel: string;
    omniTrackingComponentDefKey?: string;
    omniTrackingGroup?: string;
}

export type OmniTrackingGroup = Metadata & {
    description?: string;
    developerName: string;
    endDate?: Date;
    groupType: string;
    isActive: boolean;
    masterLabel: string;
    maxAgeInDays?: number;
    omniExtTrackingDef?: string;
    omniTrackingComponentDefs: OmniTrackingComponentDef[];
    omniTrackingGroupKey?: string;
    startDate?: Date;
}

export type OmniUiCard = Metadata & {
    authorName: string;
    clonedFromOmniUiCardKey?: string;
    dataSourceConfig: string;
    description?: string;
    isActive: boolean;
    name: string;
    omniUiCardType: string;
    overrideKey?: string;
    propertySetConfig: string;
    sampleDataSourceResponse?: string;
    stylingConfiguration?: string;
    versionNumber: string;
}

export type OpportunityScoreSettings = Metadata & {
    enableOpportunityScoring?: boolean;
}

export type OpportunitySettings = Metadata & {
    autoActivateNewReminders?: boolean;
    customizableProductSchedulesEnabled?: boolean;
    doesEnforceStandardOpportunitySaveLogic?: boolean;
    enableExpandedPipelineInspectionSetup?: boolean;
    enableFindSimilarOpportunities?: boolean;
    enableForecastCategoryMetrics?: boolean;
    enableOpportunityFieldHistoryTracking?: boolean;
    enableOpportunityInsightsInMobile?: boolean;
    enableOpportunityTeam?: boolean;
    enablePipelineChangesMetrics?: boolean;
    enablePipelineInspection?: boolean;
    enablePipelineInspectionFlow?: boolean;
    enablePipelineInspectionSingleCategoryRollup?: boolean;
    enableRevenueInsights?: boolean;
    enableServiceCaseInsights?: boolean;
    enableUpdateReminders?: boolean;
    findSimilarOppFilter?: FindSimilarOppFilter;
    oppAmountDealMotionEnabled?: boolean;
    oppCloseDateDealMotionEnabled?: boolean;
    promptToAddProducts?: boolean;
    pushCountEnabled?: boolean;
    simpleOppCreateFromContact?: boolean;
    simpleOppCreateFromEvent?: boolean;
}

export type OrchestrationContext = Metadata & {
    datasets: OrchestrationContextDataset[];
    description?: string;
    events: OrchestrationContextEvent[];
    imageFile: string;
    imageScale: number;
    masterLabel: string;
    runtimeType: string;
    salesforceObject?: string;
    salesforceObjectPrimaryKey?: string;
}

export type OrderManagementSettings = Metadata & {
    deliveryEstimationEnabled?: boolean;
    enableB2CHighScaleOrders?: boolean;
    enableB2CIntegration?: boolean;
    enableDuplicateManagement?: boolean;
    enableHighScaleOrders?: boolean;
    enableIndividualOrderItemTaxAdjustments?: boolean;
    enableOMAutomation?: boolean;
    enableOrderManagement?: boolean;
    enablePersonAccountsForShoppers?: boolean;
    initOMAutomation?: boolean;
}

export type OrderSettings = Metadata & {
    enableEnhancedCommerceOrders?: boolean;
    enableNegativeQuantity?: boolean;
    enableOptionalPricebook?: boolean;
    enableOrderEvents?: boolean;
    enableOrderWithMultiplePriceBooks?: boolean;
    enableOrders: boolean;
    enableReductionOrders?: boolean;
    enableZeroQuantity?: boolean;
}

export type OutboundNetworkConnection = Metadata & {
    connectionType: string;
    description?: string;
    isActive: boolean;
    label: string;
    outboundNetworkConnProperties: OutboundNetworkConnProperty[];
    status: string;
}

export type Package = Metadata & {
    apiAccessLevel?: string;
    description?: string;
    namespacePrefix?: string;
    objectPermissions: ProfileObjectPermissions[];
    packageType?: string;
    postInstallClass?: string;
    setupWeblink?: string;
    types: PackageTypeMembers[];
    uninstallClass?: string;
    version: string;
}

export type PardotEinsteinSettings = Metadata & {
    enableCampaignInsight?: boolean;
    enableEngagementScore?: boolean;
}

export type PardotSettings = Metadata & {
    enableAIEinsteinEngageFreq?: boolean;
    enableAIOptimizedSendTime?: boolean;
    enableAeDataConnector?: boolean;
    enableB2bmaAppEnabled?: boolean;
    enableEngagementHistoryDashboards?: boolean;
    enableEnhancedProspectCustomFieldsSync?: boolean;
    enablePardotAppV1Enabled?: boolean;
    enablePardotEnabled?: boolean;
    enablePardotObjectSync?: boolean;
    enableProspectActivityDataset?: boolean;
}

export type ParticipantRole = Metadata & {
    defaultAccessLevel: string;
    isActive?: boolean;
    masterLabel: string;
    parentObject: string;
}

export type PartyDataModelSettings = Metadata & {
    enableAutoSelectIndividualOnMerge?: boolean;
    enableConsentManagement?: boolean;
    enableIndividualAutoCreate?: boolean;
}

export type PathAssistant = Metadata & {
    active: boolean;
    entityName: string;
    fieldName: string;
    masterLabel: string;
    pathAssistantSteps: PathAssistantStep[];
    recordTypeName: string;
}

export type PathAssistantSettings = Metadata & {
    canOverrideAutoPathCollapseWithUserPref?: boolean;
    pathAssistantEnabled?: boolean;
}

export type PaymentGatewayProvider = Metadata & {
    apexAdapter?: string;
    comments?: string;
    idempotencySupported: string;
    masterLabel: string;
}

export type PaymentsSettings = Metadata & {
    enablePayments?: boolean;
}

export type PermissionSet = Metadata & {
    applicationVisibilities: PermissionSetApplicationVisibility[];
    classAccesses: PermissionSetApexClassAccess[];
    customMetadataTypeAccesses: PermissionSetCustomMetadataTypeAccess[];
    customPermissions: PermissionSetCustomPermissions[];
    customSettingAccesses: PermissionSetCustomSettingAccess[];
    dataspaceScopes: DataspaceScopeAccess[];
    description?: string;
    emailRoutingAddressAccesses: PermissionSetEmailRoutingAddressAccess[];
    externalCredentialPrincipalAccesses: PermissionSetExternalCredentialPrincipalAccess[];
    externalDataSourceAccesses: PermissionSetExternalDataSourceAccess[];
    fieldPermissions: PermissionSetFieldPermissions[];
    flowAccesses: PermissionSetFlowAccess[];
    hasActivationRequired?: boolean;
    label: string;
    license?: string;
    objectPermissions: PermissionSetObjectPermissions[];
    pageAccesses: PermissionSetApexPageAccess[];
    recordTypeVisibilities: PermissionSetRecordTypeVisibility[];
    tabSettings: PermissionSetTabSetting[];
    userPermissions: PermissionSetUserPermission[];
}

export type MutingPermissionSet = PermissionSet & {
    label: string;
}

export type PermissionSetGroup = Metadata & {
    description?: string;
    hasActivationRequired?: boolean;
    label: string;
    mutingPermissionSets: string[];
    permissionSets: string[];
    status?: string;
}

export type PermissionSetLicenseDefinition = Metadata & {
    customPermissions: PermissionSetLicenseDefinitionCustomPermission[];
    isSupplementLicense?: boolean;
    label: string;
    licenseExpirationPolicy: string;
    userLicenseRestrictions?: string;
}

export type PersonAccountOwnerPowerUser = Metadata & {
    developerName: string;
    masterLabel: string;
    portalType: string;
    user: string;
}

export type PicklistSettings = Metadata & {
    isPicklistApiNameEditDisabled?: boolean;
}

export type PlatformCachePartition = Metadata & {
    description?: string;
    isDefaultPartition: boolean;
    masterLabel: string;
    platformCachePartitionTypes: PlatformCachePartitionType[];
}

export type PlatformEncryptionSettings = Metadata & {
    canEncryptManagedPackageFields?: boolean;
    enableDeterministicEncryption?: boolean;
    enableEncryptFieldHistory?: boolean;
    enableEncryptionSearchEnabled?: boolean;
    enableEventBusEncryption?: boolean;
    isMEKForEncryptionRequired?: boolean;
    isUseHighAssuranceKeysRequired?: boolean;
}

export type PlatformEventChannel = Metadata & {
    channelType: string;
    eventType?: string;
    label: string;
}

export type PlatformEventChannelMember = Metadata & {
    enrichedFields: EnrichedField[];
    eventChannel: string;
    filterExpression?: string;
    selectedEntity: string;
}

export type PlatformLicenseDefinition = Metadata & {
    cloudServiceProvider?: string;
    defaultLicenseDuration?: number;
    defaultStatus?: string;
    description?: string;
    hasDynamicResourceGroupKey?: boolean;
    includedFeatures: IncludedFeature[];
    licenseOwner?: string;
    managementServiceProvider?: string;
    managementTenantId?: string;
    minPlatformVersion?: number;
    name: string;
    settingItems: SettingItem[];
    settingUsageDefinitions: SettingUsageDefinition[];
}

export type Portal = Metadata & {
    active: boolean;
    admin?: string;
    defaultLanguage?: string;
    description?: string;
    emailSenderAddress: string;
    emailSenderName: string;
    enableSelfCloseCase?: boolean;
    footerDocument?: string;
    forgotPassTemplate?: string;
    headerDocument?: string;
    isSelfRegistrationActivated?: boolean;
    loginHeaderDocument?: string;
    logoDocument?: string;
    logoutUrl?: string;
    newCommentTemplate?: string;
    newPassTemplate?: string;
    newUserTemplate?: string;
    ownerNotifyTemplate?: string;
    selfRegNewUserUrl?: string;
    selfRegUserDefaultProfile?: string;
    selfRegUserDefaultRole?: string;
    selfRegUserTemplate?: string;
    showActionConfirmation?: boolean;
    stylesheetDocument?: string;
    type: string;
}

export type PortalsSettings = Metadata & {
    clickjackSSPLoginPage?: boolean;
    redirectPortalLoginToHttps?: boolean;
}

export type PostTemplate = Metadata & {
    default?: boolean;
    description?: string;
    fields: string[];
    label: string;
}

export type PredictionBuilderSettings = Metadata & {
    enablePredictionBuilder?: boolean;
    isPredictionBuilderStarted?: boolean;
}

export type PresenceDeclineReason = Metadata & {
    label: string;
}

export type PresenceUserConfig = Metadata & {
    assignments?: PresenceConfigAssignments;
    capacity: number;
    declineReasons: string[];
    enableAutoAccept?: boolean;
    enableDecline?: boolean;
    enableDeclineReason?: boolean;
    enableDisconnectSound?: boolean;
    enableRequestSound?: boolean;
    interruptibleCapacity?: number;
    label: string;
    presenceStatusOnDecline?: string;
    presenceStatusOnPushTimeout?: string;
    userDisplayName?: string;
}

export type PriceRule = Metadata & {
    conditionLogic: string;
    description?: string;
    effectiveDate?: Date;
    expirationDate?: Date;
    masterLabel: string;
    priceRuleActions: PriceRuleAction[];
    priceRuleConditions: PriceRuleCondition[];
    priceRuleExecutionStages: PriceRuleExecutionStage[];
    sequence: number;
    status: string;
}

export type PriceSheetDefinition = Metadata & {
    description?: string;
    isProtected?: boolean;
    masterLabel: string;
    prcShtAttrDefinitions: PrcShtAttrDefinition[];
    priceSheetEntity: string;
}

export type PricingActionParameters = Metadata & {
    contextDefinition: string;
    contextMapping: string;
    developerName: string;
    effectiveFrom: Date;
    effectiveTo?: Date;
    masterLabel: string;
    objectName?: string;
    pricingProcedure?: string;
}

export type PricingRecipe = Metadata & {
    defaultPricingProcedure?: ExpressionSetDefinition;
    defaultPricingProcedureDeveloperName?: string;
    defaultPricingProcedureId?: string;
    developerName?: string;
    isActive?: boolean;
    isInternal?: boolean;
    masterLabel: string;
    pricingRecipeTableMapping: PricingRecipeTableMapping[];
}

export type PrivacySettings = Metadata & {
    authorizationCaptureBrowser?: boolean;
    authorizationCaptureEmail?: boolean;
    authorizationCaptureIp?: boolean;
    authorizationCaptureLocation?: boolean;
    authorizationCustomSharing?: boolean;
    authorizationCustomSharingPCU?: boolean;
    authorizationLockingAndVersioning?: boolean;
    enableConfigurableUserPIIActive?: boolean;
    enableConsentAuditTrail?: boolean;
    enableConsentEventStream?: boolean;
    enableDefaultMetadataValues?: boolean;
    enableSalesforceArchive?: boolean;
    useUmaDefaultConsentRecs?: boolean;
}

export type ProcedureOutputResolution = Metadata & {
    developerName: string;
    formula: string;
    isActive: boolean;
    isInternal?: boolean;
    masterLabel: string;
    pricingElement: string;
}

export type ProcessFlowMigration = Metadata & {
    destinationFlowDefinition: string;
    destinationFlowVersion: string;
    developerName: string;
    masterLabel: string;
    migratedCriteriaLabel?: string;
    migratedCriteriaName?: string;
    processVersion: string;
}

export type ProductAttrDisplayConfig = Metadata & {
    dataType: string;
    displayType: string;
    masterLabel: string;
    status: string;
}

export type ProductAttributeSet = Metadata & {
    description?: string;
    developerName: string;
    masterLabel: string;
    productAttributeSetItems: ProductAttributeSetItem[];
}

export type ProductDiscoverySettings = Metadata & {
    discoverProductsFlowNameOrgValue?: string;
    enableGuidedSelling?: boolean;
    prodDiscBrowseContextDefOrgValue?: string;
    prodDiscPricingEnabledOrgValue?: string;
    prodDiscProcedureOrgValue?: string;
    prodDiscQualEnabledOrgValue?: string;
    prodDiscQualificationOrgValue?: string;
}

export type ProductFamilyUsage = Metadata & {
    productFamilyUsageType: string;
}

export type ProductSettings = Metadata & {
    enableCascadeActivateToRelatedPrices?: boolean;
    enableMySettings?: boolean;
    enableQuantitySchedule?: boolean;
    enableRevenueSchedule?: boolean;
}

export type ProductSpecificationRecType = Metadata & {
    isCommercial: boolean;
    masterLabel: string;
    productSpecificationType: string;
    recordType: string;
}

export type ProductSpecificationType = Metadata & {
    description?: string;
    masterLabel: string;
}

export type Profile = Metadata & {
    applicationVisibilities: ProfileApplicationVisibility[];
    categoryGroupVisibilities: ProfileCategoryGroupVisibility[];
    classAccesses: ProfileApexClassAccess[];
    custom?: boolean;
    customMetadataTypeAccesses: ProfileCustomMetadataTypeAccess[];
    customPermissions: ProfileCustomPermissions[];
    customSettingAccesses: ProfileCustomSettingAccess[];
    description?: string;
    externalDataSourceAccesses: ProfileExternalDataSourceAccess[];
    fieldPermissions: ProfileFieldLevelSecurity[];
    flowAccesses: ProfileFlowAccess[];
    layoutAssignments: ProfileLayoutAssignment[];
    loginFlows: LoginFlow[];
    loginHours?: ProfileLoginHours;
    loginIpRanges: ProfileLoginIpRange[];
    objectPermissions: ProfileObjectPermissions[];
    pageAccesses: ProfileApexPageAccess[];
    profileActionOverrides: ProfileActionOverride[];
    recordTypeVisibilities: ProfileRecordTypeVisibility[];
    tabVisibilities: ProfileTabVisibility[];
    userLicense?: string;
    userPermissions: ProfileUserPermission[];
}

export type ProfilePasswordPolicy = Metadata & {
    forgotPasswordRedirect?: boolean;
    lockoutInterval: number;
    maxLoginAttempts: number;
    minimumPasswordLength: number;
    minimumPasswordLifetime?: boolean;
    obscure?: boolean;
    passwordComplexity: number;
    passwordExpiration: number;
    passwordHistory: number;
    passwordQuestion: number;
    profile: string;
}

export type ProfileSessionSetting = Metadata & {
    externalCommunityUserIdentityVerif: boolean;
    forceLogout: boolean;
    profile: string;
    requiredSessionLevel?: string;
    sessionPersistence: boolean;
    sessionTimeout: number;
    sessionTimeoutWarning: boolean;
}

export type Prompt = Metadata & {
    masterLabel: string;
    promptVersions: PromptVersion[];
}

export type PublicKeyCertificate = Metadata & {
    description?: string;
    isActive?: boolean;
    jsonWebKey?: string;
    masterLabel: string;
}

export type PublicKeyCertificateSet = Metadata & {
    description?: string;
    jwksEndPoint?: string;
    jwtIssuer?: string;
    masterLabel: string;
    publicKeyCertificateSetKeys: PublicKeyCertificateSetKey[];
    type: string;
}

export type Queue = Metadata & {
    description?: string;
    doesSendEmailToMembers?: boolean;
    email?: string;
    name: string;
    queueMembers?: QueueMembers;
    queueRoutingConfig?: string;
    queueSobject: QueueSobject[];
}

export type QueueRoutingConfig = Metadata & {
    capacityPercentage?: number;
    capacityType?: string;
    capacityWeight?: number;
    dropAdditionalSkillsTimeout?: number;
    isAttributeBased?: boolean;
    label: string;
    pushTimeout?: number;
    queueOverflowAssignee?: string;
    routingModel: string;
    routingPriority: number;
    skills: QueueRoutingConfigSkill[];
    userOverflowAssignee?: string;
}

export type QuickAction = Metadata & {
    actionSubtype?: string;
    canvas?: string;
    description?: string;
    fieldOverrides: FieldOverride[];
    flowDefinition?: string;
    height?: number;
    icon?: string;
    isProtected?: boolean;
    label?: string;
    lightningComponent?: string;
    lightningWebComponent?: string;
    optionsCreateFeedItem: boolean;
    page?: string;
    quickActionLayout?: QuickActionLayout;
    quickActionParameters: QuickActionParameters[];
    quickActionSendEmailOptions?: QuickActionSendEmailOptions;
    standardLabel?: string;
    successMessage?: string;
    targetObject?: string;
    targetParentField?: string;
    targetRecordType?: string;
    type: string;
    width?: number;
}

export type QuickTextSettings = Metadata & {
    hideQuickTextUiInLtng?: boolean;
    lightningQuickTextEnabled?: boolean;
    quickTextsInFolders?: boolean;
}

export type QuoteSettings = Metadata & {
    enableQuote: boolean;
    enableQuotesWithoutOppEnabled?: boolean;
}

export type RealTimeEventSettings = Metadata & {
    realTimeEvents: RealTimeEvent[];
}

export type RecommendationBuilderSettings = Metadata & {
    enableErbEnabledPref?: boolean;
    enableErbStartedPref?: boolean;
}

export type RecommendationStrategy = Metadata & {
    actionContext: StrategyAction[];
    aiLoad: StrategyNodeAiLoad[];
    aiSort: StrategyNodeAiSort[];
    contextRecordType?: string;
    description?: string;
    filter: StrategyNodeFilter[];
    if: StrategyNodeIf[];
    invocableAction: StrategyNodeInvocableAction[];
    isTemplate?: boolean;
    label: string;
    map: StrategyNodeMap[];
    mutuallyExclusive: StrategyNodeExclusive[];
    onBehalfOfExpression?: string;
    recommendationLimit: StrategyNodeRecommendationLimit[];
    recommendationLoad: StrategyNodeRecommendationLoad[];
    sort: StrategyNodeSort[];
    union: StrategyNodeUnion[];
}

export type RecordActionDeployment = Metadata & {
    channelConfigurations: RecordActionDeploymentChannel[];
    componentName?: string;
    deploymentContexts: RecordActionDeploymentContext[];
    hasComponents?: boolean;
    hasGuidedActions?: boolean;
    hasOmniscripts?: boolean;
    hasRecommendations?: boolean;
    masterLabel: string;
    recommendation?: RecordActionRecommendation;
    selectableItems: RecordActionSelectableItem[];
}

export type RecordAggregationDefinition = Metadata & {
    aggregateFromObject: string;
    aggregateToObject: string;
    aggregationType: string;
    batchProcessingDefinition?: string;
    description?: string;
    displayName: string;
    recordAggregationObject: RecordAggregationObject[];
    status: string;
}

export type RecordAlertCategory = Metadata & {
    description?: string;
    masterLabel: string;
    severity?: string;
}

export type RecordPageSettings = Metadata & {
    enableActivityRelatedList?: boolean;
    enableFullRecordView?: boolean;
}

export type RedirectWhitelistUrl = Metadata & {
    url: string;
}

export type ReferencedDashboard = Metadata & {
    application: string;
    description?: string;
    embedUrl: string;
    masterLabel: string;
    templateAssetSourceName?: string;
    visibility: string;
}

export type RelationshipGraphDefinition = Metadata & {
    isActive: boolean;
    isTemplate: boolean;
    masterLabel: string;
    relationshipGraphDefVersions: RelationshipGraphDefVersion[];
}

export type RemoteSiteSetting = Metadata & {
    description?: string;
    disableProtocolSecurity: boolean;
    isActive: boolean;
    url: string;
}

export type Report = Metadata & {
    aggregateFilters: ReportAggregateFilter[];
    aggregates: ReportAggregate[];
    block: Report[];
    blockInfo?: ReportBlockInfo;
    buckets: ReportBucketField[];
    chart?: ReportChart;
    colorRanges: ReportColorRange[];
    columns: ReportColumn[];
    crossFilters: ReportCrossFilter[];
    currency?: string;
    customDetailFormulas: ReportCustomDetailFormula[];
    dataCategoryFilters: ReportDataCategoryFilter[];
    description?: string;
    division?: string;
    filter?: ReportFilter;
    folderName?: string;
    format: string;
    formattingRules: ReportFormattingRule[];
    groupingsAcross: ReportGrouping[];
    groupingsDown: ReportGrouping[];
    historicalSelector?: ReportHistoricalSelector;
    isSmartTotalDisabled?: boolean;
    name: string;
    numSubscriptions?: number;
    params: ReportParam[];
    reportType: string;
    reportTypeApiName?: string;
    roleHierarchyFilter?: string;
    rowLimit?: number;
    scope?: string;
    showCurrentDate?: boolean;
    showDetails?: boolean;
    showGrandTotal?: boolean;
    showSubTotals?: boolean;
    sortColumn?: string;
    sortOrder?: string;
    territoryHierarchyFilter?: string;
    timeFrameFilter?: ReportTimeFrameFilter;
    userFilter?: string;
}

export type ReportType = Metadata & {
    autogenerated?: boolean;
    baseObject: string;
    category?: string;
    deployed: boolean;
    description?: string;
    join?: ObjectRelationship;
    label: string;
    sections: ReportLayoutSection[];
}

export type RestrictionRule = Metadata & {
    active: boolean;
    dataspaceScope?: string;
    description?: string;
    enforcementType: string;
    masterLabel: string;
    recordFilter: string;
    targetEntity: string;
    userCriteria?: string;
    version: number;
}

export type RetailExecutionSettings = Metadata & {
    enableProductHierarchy?: boolean;
    enableRetailExecution?: boolean;
    enableVisitSharing?: boolean;
}

export type RetrievalSummaryDefinition = Metadata & {
    masterLabel: string;
    retrievalSummaryDefFields: RetrievalSummaryDefField[];
    retrievalSummaryDefObjects: RetrievalSummaryDefObject[];
    rootObject: string;
}

export type RoleOrTerritory = Metadata & {
    caseAccessLevel?: string;
    contactAccessLevel?: string;
    description?: string;
    mayForecastManagerShare?: boolean;
    name: string;
    opportunityAccessLevel?: string;
}

export type Role = RoleOrTerritory & {
    parentRole?: string;
}

export type Territory = RoleOrTerritory & {
    accountAccessLevel?: string;
    parentTerritory?: string;
}

export type RuleLibraryDefinition = Metadata & {
    contextDefinition: string;
    contextRuleStatus: string;
    description?: string;
    label: string;
    ruleLibraryContextTags: RuleLibraryContextTag[];
    rulesetDefinitions: RulesetDefinition[];
    usageType: string;
}

export type SalesAgreementSettings = Metadata & {
    actualsCalculationMode: string;
    decimalScale?: number;
    displayGroups: AdvAcctFrcstDisplayGroup[];
    displayedAgreementTermsMetrics: string;
    futureActCalcSchedules?: number;
    isOnlyApprovalProcessUsed: boolean;
    measureDefinitions: AdvAcctForecastMeasureDef[];
    objectMapping?: ObjectMapping;
    primaryNotifEmailAddress?: string;
    renewalPeriodDayCount?: number;
    secondaryNotifEmailAddress?: string;
}

export type SalesWorkQueueSettings = Metadata & {
    featureName: string;
    targetEntity: string;
    targetField: string;
}

export type SamlSsoConfig = Metadata & {
    attributeName?: string;
    attributeNameIdFormat?: string;
    decryptionCertificate?: string;
    errorUrl?: string;
    executionUserId?: string;
    identityLocation: string;
    identityMapping: string;
    issuer: string;
    loginUrl?: string;
    logoutUrl?: string;
    name: string;
    oauthTokenEndpoint?: string;
    redirectBinding?: boolean;
    requestSignatureMethod?: string;
    requestSigningCertId?: string;
    salesforceLoginUrl?: string;
    samlEntityId: string;
    samlJitHandlerId?: string;
    samlVersion: string;
    singleLogoutBinding?: string;
    singleLogoutUrl?: string;
    useConfigRequestMethod?: boolean;
    useSameDigestAlgoForSigning?: boolean;
    userProvisioning?: boolean;
    validationCert: string;
}

export type SchemaDefinition = Metadata & {
    description?: string;
    domainType: string;
    schemas: Schema[];
}

export type SchemaSettings = Metadata & {
    enableAdvancedCMTSecurity?: boolean;
    enableAdvancedCSSecurity?: boolean;
    enableListCustomSettingCreation?: boolean;
    enableSOSLOnCustomSettings?: boolean;
}

export type ScoreCategory = Metadata & {
    categoryName: string;
    description: string;
    developerName: string;
    iconUrl: string;
    masterLabel: string;
    parentCategoryId?: string;
    scoreCategoryCalcInsights: ScoreCategoryCalcInsight[];
    scoreRangeClassifications: ScoreRangeClassification[];
}

export type SearchCriteriaConfiguration = Metadata & {
    actionList?: string;
    additionalSearchCriteria?: string;
    aggrCriteriaFieldset?: FieldSet;
    configurationType?: string;
    description?: string;
    distanceCriteria?: string;
    filterType?: string;
    isActive?: boolean;
    isSingleFieldSort?: boolean;
    masterLabel: string;
    resultDisplayFormat?: string;
    resultFieldset?: FieldSet;
    resultFlexCard?: string;
    searchCriteriaFieldset?: FieldSet;
    searchableObjDataSyncInfo?: string;
    searchableObject: string;
    sortingCriteriaFieldset?: FieldSet;
}

export type SearchCustomization = Metadata & {
    channel: string;
    masterLabel: string;
    objectOverride: SearchCustomizationObjectOverride[];
    objectToAlwaysSearch: string[];
    selectedObject: string[];
    selectedProfile: string[];
}

export type SearchOrgWideObjectConfig = Metadata & {
    masterLabel: string;
    objectReference: string;
    searchOrgWideFieldConfig: SearchOrgWideFieldConfig[];
}

export type SearchResultActionConfig = Metadata & {
    actionReference: string;
    actionScope: string;
    actionType: string;
    description?: string;
    masterLabel: string;
}

export type SearchSettings = Metadata & {
    documentContentSearchEnabled: boolean;
    enableAdvancedSearchInAlohaSidebar?: boolean;
    enableEinsteinSearchAnswersGPT?: boolean;
    enableEinsteinSearchAssistantDialog?: boolean;
    enableEinsteinSearchEs4kPilot?: boolean;
    enableEinsteinSearchNLSFilters?: boolean;
    enableEinsteinSearchNaturalLanguage?: boolean;
    enableEinsteinSearchPersonalization?: boolean;
    enableEinsteinSearchQA?: boolean;
    enablePersonalTagging?: boolean;
    enablePublicTagging?: boolean;
    enableQuerySuggestionPigOn?: boolean;
    enableSalesforceGeneratedSynonyms?: boolean;
    enableSearchTermHistory?: boolean;
    enableSetupSearch?: boolean;
    enableSuggestArticlesLinksOnly?: boolean;
    enableUseDefaultSearchEntity?: boolean;
    optimizeSearchForCJKEnabled: boolean;
    recentlyViewedUsersForBlankLookupEnabled: boolean;
    searchSettingsByObject: SearchSettingsByObject;
    sidebarAutoCompleteEnabled: boolean;
    sidebarDropDownListEnabled: boolean;
    sidebarLimitToItemsIOwnCheckboxEnabled: boolean;
    singleSearchResultShortcutEnabled: boolean;
    spellCorrectKnowledgeSearchEnabled: boolean;
}

export type SearchableObjDataSyncInfo = Metadata & {
    dataSyncActive?: boolean;
    dataSyncJob?: string;
    description?: string;
    displayFieldSet?: FieldSet;
    lastDataSyncRunDate?: string;
    lookupMappings?: ObjectMapping;
    masterLabel: string;
    parsingFieldSet?: FieldSet;
    picklistMappings: ObjectMapping[];
    scheduleFrequencyInHours?: string;
    searchableObject: string;
    typeAheadMappings: ObjectMapping[];
}

export type SecuritySettings = Metadata & {
    canUsersGrantLoginAccess?: boolean;
    enableAdminLoginAsAnyUser?: boolean;
    enableAuditFieldsInactiveOwner?: boolean;
    enableAuraSecureEvalPref?: boolean;
    enableCoepHeader?: boolean;
    enableCoopHeader?: boolean;
    enableCrossOrgRedirects?: boolean;
    enablePermissionsPolicy?: boolean;
    enableRequireHttpsConnection?: boolean;
    networkAccess?: NetworkAccess;
    passwordPolicies?: PasswordPolicies;
    redirectBlockModeEnabled?: boolean;
    sendCspForUncommonClients?: boolean;
    sessionSettings?: SessionSettings;
    singleSignOnSettings?: SingleSignOnSettings;
}

export type ServiceAISetupDefinition = Metadata & {
    appSourceType: string;
    name: string;
    setupStatus: string;
    supportedLanguages?: string;
}

export type ServiceAISetupField = Metadata & {
    entity: string;
    field: string;
    fieldMappingType: string;
    fieldPosition: number;
    name: string;
    setupDefinition: string;
}

export type ServiceChannel = Metadata & {
    acwExtensionDuration?: number;
    afterConvoWorkMaxTime?: number;
    doesMinimizeWidgetOnAccept?: boolean;
    hasAcwExtensionEnabled?: boolean;
    hasAfterConvoWorkTimer?: boolean;
    hasAutoAcceptEnabled?: boolean;
    interactionComponent?: string;
    isInterruptible?: boolean;
    label: string;
    maxExtensions?: string;
    relatedEntityType: string;
    secondaryRoutingPriorityField?: string;
    serviceChannelFieldPriorities: ServiceChannelFieldPriority[];
}

export type ServiceCloudVoiceSettings = Metadata & {
    disableSCVTaskCreationForHVS?: boolean;
    enableAmazonQueueManagement?: boolean;
    enableDefaultChannelForSCV?: boolean;
    enableDigitalVoiceWhatsapp?: boolean;
    enableEndUserForSCV?: boolean;
    enableOmniCapacityForSCV?: boolean;
    enablePTQueueManagement?: boolean;
    enablePhoneNumberMaskingForSCV?: boolean;
    enableRZoneCloudVoiceOptIn?: boolean;
    enableSCVBYOT?: boolean;
    enableSCVExternalTelephony?: boolean;
    enableSCVOpenVCAsNewTabHVS?: boolean;
    enableSCVSupportBannerDisplayed?: boolean;
    enableServiceCloudVoice?: boolean;
}

export type ServicePresenceStatus = Metadata & {
    channels?: ServiceChannelStatus;
    label: string;
}

export type ServiceProcess = Metadata & {
    description?: string;
    processLabel: string;
    serviceProcessAttributes: ServiceProcessAttribute[];
    serviceProcessDependencies: ServiceProcessDependency[];
    serviceProcessItemGroups: ServiceProcessItemGroup[];
    shortDescription?: string;
    usageType: string;
}

export type ServiceSetupAssistantSettings = Metadata & {
    enableServiceSetupAssistant?: boolean;
}

export type SharingBaseRule = Metadata & {
    accessLevel: string;
    accountSettings?: AccountSharingRuleSettings;
    description?: string;
    label: string;
    sharedTo: SharedTo;
}

export type SharingCriteriaRule = SharingBaseRule & {
    booleanFilter?: string;
    criteriaItems: FilterItem[];
    includeRecordsOwnedByAll: boolean;
}

export type SharingGuestRule = SharingBaseRule & {
    booleanFilter?: string;
    criteriaItems: FilterItem[];
    includeHVUOwnedRecords: boolean;
}

export type SharingOwnerRule = SharingBaseRule & {
    sharedFrom: SharedTo;
}

export type SharingTerritoryRule = SharingOwnerRule

export type SharingRules = Metadata & {
    sharingCriteriaRules: SharingCriteriaRule[];
    sharingGuestRules: SharingGuestRule[];
    sharingOwnerRules: SharingOwnerRule[];
    sharingTerritoryRules: SharingTerritoryRule[];
}

export type SharingSet = Metadata & {
    accessMappings: AccessMapping[];
    description?: string;
    name: string;
    profiles: string[];
}

export type SharingSettings = Metadata & {
    deferGroupMembership?: boolean;
    deferSharingRules?: boolean;
    enableAccountRoleOptimization?: boolean;
    enableAssetSharing?: boolean;
    enableCommunityUserVisibility?: boolean;
    enableExternalSharingModel?: boolean;
    enableManagerGroups?: boolean;
    enableManualUserRecordSharing?: boolean;
    enablePartnerSuperUserAccess?: boolean;
    enablePortalUserCaseSharing?: boolean;
    enablePortalUserVisibility?: boolean;
    enableRemoveTMGroupMembership?: boolean;
    enableRestrictAccessLookupRecords?: boolean;
    enableSecureGuestAccess?: boolean;
    enableShareObjectReportTypes?: boolean;
    enableStandardReportVisibility?: boolean;
    enableTerritoryForecastManager?: boolean;
}

export type SiteSettings = Metadata & {
    enableProxyLoginICHeader?: boolean;
    enableTopicsInSites?: boolean;
}

export type Skill = Metadata & {
    assignments?: SkillAssignments;
    description?: string;
    label: string;
    skillType?: string;
}

export type SkillType = Metadata & {
    masterLabel: string;
}

export type SlackRecordLayout = Metadata & {
    isProtected?: boolean;
    masterLabel: string;
    sobjectType: string;
    viewMode: string;
}

export type SocialCustomerServiceSettings = Metadata & {
    caseSubjectOption: string;
    enableAllFBResponseAccounts?: boolean;
    enableInboundProcessingConcurrency?: boolean;
    enableSocialApprovals?: boolean;
    enableSocialCaseAssignmentRules?: boolean;
    enableSocialCustomerService?: boolean;
    enableSocialPersonaHistoryTracking?: boolean;
    enableSocialPostHistoryTracking?: boolean;
    enableSocialReceiveParentPost?: boolean;
}

export type StageDefinition = Metadata & {
    active: boolean;
    description?: string;
    masterLabel: string;
    referenceObject: string;
    referenceObjectField: string;
    referenceObjectRecordType?: string;
    stageTransition: StageTransition[];
    stageValue: StageValue[];
}

export type StandardValueSet = Metadata & {
    groupingStringEnum?: string;
    sorted: boolean;
    standardValue: StandardValue[];
}

export type StandardValueSetTranslation = Metadata & {
    valueTranslation: ValueTranslation[];
}

export type StnryAssetEnvSrcCnfg = Metadata & {
    recordType: string;
    stationaryAssetType: string;
}

export type StreamingAppDataConnector = Metadata & {
    appIdentifier: string;
    dataConnectorType: string;
    isProtected?: boolean;
    masterLabel: string;
    streamingAppDataConnectorType: string;
}

export type SubscriptionManagementSettings = Metadata & {
    enableConvertNegativeInvoiceLinesToCreditMemoAndApply?: boolean;
    enablePaymentScheduleAutomation?: boolean;
    enableRefundAutomation?: boolean;
    enableRevSubMgmtBlngOptOut?: boolean;
    enableSubscriptionManagement?: boolean;
}

export type SurveySettings = Metadata & {
    enableGenerativeAISurveys?: boolean;
    enableIndustriesCxmEnabled?: boolean;
    enableSurvey?: boolean;
    enableSurveyOwnerCanManageResponse?: boolean;
}

export type SustainabilityUom = Metadata & {
    description?: string;
    isProductUom?: boolean;
    isProtected?: boolean;
    isStationaryAssetUom?: boolean;
    isVehicleAssetUom?: boolean;
    masterLabel: string;
    unitType: string;
}

export type SustnUomConversion = Metadata & {
    conversionFactor: number;
    fuelType?: string;
    isProtected?: boolean;
    masterLabel?: string;
    sourceUom: string;
    targetUom: string;
    uomsKey?: string;
}

export type SvcCatalogCategory = Metadata & {
    image?: string;
    isActive?: boolean;
    isProtected?: boolean;
    masterLabel: string;
    parentCategory?: string;
    sortOrder?: number;
}

export type SvcCatalogFilterCriteria = Metadata & {
    conditions: SvcCatalogFilterCondition[];
    criteriaRelation: string;
    description?: string;
    isActive?: boolean;
    mainLabel: string;
}

export type SvcCatalogFulfillmentFlow = Metadata & {
    description: string;
    flow: string;
    icon?: string;
    isProtected?: boolean;
    items: SvcCatalogFulfillFlowItem[];
    masterLabel: string;
}

export type SvcCatalogItemDef = Metadata & {
    apiVersion?: number;
    catalogFilterCriteria: SvcCatalogItemDefFiltrCrit[];
    categories: SvcCatalogCategoryItem[];
    dataCategories: SvcCatalogItemDefDataCategorySelection[];
    description?: string;
    fulfillmentFlow?: string;
    image?: string;
    inputs: SvcCatalogItemAttribute[];
    internalNotes?: string;
    isAvailableToAllCustomers: boolean;
    isFeatured?: boolean;
    isGuestAccessible: boolean;
    isProtected?: boolean;
    masterLabel: string;
    sharedTo?: SharedTo;
    status: string;
}

export type SynonymDictionary = Metadata & {
    groups: SynonymGroup[];
    isProtected?: boolean;
    label: string;
}

export type SystemNotificationSettings = Metadata & {
    disableDowntimeNotifications?: boolean;
    disableMaintenanceNotifications?: boolean;
}

export type Territory2 = Metadata & {
    accountAccessLevel?: string;
    caseAccessLevel?: string;
    contactAccessLevel?: string;
    customFields: FieldValue[];
    description?: string;
    name: string;
    objectAccessLevels: Territory2AccessLevel[];
    opportunityAccessLevel?: string;
    parentTerritory?: string;
    ruleAssociations: Territory2RuleAssociation[];
    territory2Type: string;
}

export type Territory2Model = Metadata & {
    customFields: FieldValue[];
    description?: string;
    name: string;
}

export type Territory2Rule = Metadata & {
    active: boolean;
    booleanFilter?: string;
    name: string;
    objectType: string;
    ruleItems: Territory2RuleItem[];
}

export type Territory2Settings = Metadata & {
    defaultAccountAccessLevel?: string;
    defaultCaseAccessLevel?: string;
    defaultContactAccessLevel?: string;
    defaultOpportunityAccessLevel?: string;
    enableTerritoryManagement2?: boolean;
    opportunityFilterSettings?: Territory2SettingsOpportunityFilter;
    showTM2EnabledBanner?: boolean;
    supportedObjects: Territory2SupportedObject[];
    t2ForecastAccessLevel?: string;
    tm2BypassRealignAccInsert?: boolean;
    tm2EnableUserAssignmentLog?: boolean;
}

export type Territory2Type = Metadata & {
    description?: string;
    name: string;
    priority: number;
}

export type TimeSheetTemplate = Metadata & {
    active: boolean;
    description?: string;
    frequency: string;
    masterLabel: string;
    startDate: Date;
    timeSheetTemplateAssignments: TimeSheetTemplateAssignment[];
    workWeekEndDay: string;
    workWeekStartDay: string;
}

export type TimelineObjectDefinition = Metadata & {
    baseObject: string;
    definition: string;
    isActive?: boolean;
    masterLabel: string;
}

export type TopicsForObjects = Metadata & {
    enableTopics: boolean;
    entityApiName: string;
}

export type TrailheadSettings = Metadata & {
    enableConfettiEffect?: boolean;
    enableMyTrailheadPref?: boolean;
    enableTrailheadInLexTerms?: boolean;
}

export type TransactionProcessingType = Metadata & {
    description?: string;
    isProtected?: boolean;
    masterLabel: string;
    ruleEngine?: string;
    saveType: string;
}

export type TransactionSecurityPolicy = Metadata & {
    action: TransactionSecurityAction;
    active: boolean;
    apexClass?: string;
    blockMessage?: string;
    customEmailContent?: string;
    description?: string;
    developerName?: string;
    eventName?: string;
    eventType?: string;
    executionUser?: string;
    flow?: string;
    masterLabel?: string;
    resourceName?: string;
    type?: string;
}

export type Translations = Metadata & {
    botBlocks: BotBlockTranslation[];
    botTemplates: BotTemplateTranslation[];
    bots: BotTranslation[];
    conversationMessageDefinitions: ConversationMessageDefinitionTranslation[];
    customApplications: CustomApplicationTranslation[];
    customLabels: CustomLabelTranslation[];
    customPageWebLinks: CustomPageWebLinkTranslation[];
    customTabs: CustomTabTranslation[];
    desFieldTemplateMessages: ExplainabilityMsgTemplateFieldTranslation[];
    flowDefinitions: FlowDefinitionTranslation[];
    identityVerificationCustomFieldLabels: IdentityVerificationFieldTranslation[];
    pipelineInspMetricConfigs: PipelineInspMetricConfigTranslation[];
    prompts: PromptTranslation[];
    quickActions: GlobalQuickActionTranslation[];
    reportTypes: ReportTypeTranslation[];
    scontrols: ScontrolTranslation[];
}

export type TrialOrgSettings = Metadata & {
    enableSampleDataDeleted?: boolean;
}

export type UIObjectRelationConfig = Metadata & {
    UIObjectRelationFieldConfigs: UIObjectRelationFieldConfig[];
    contextObject: string;
    contextObjectRecordType?: string;
    directRelationshipField?: string;
    indirectObjectContextField?: string;
    indirectObjectRelatedField?: string;
    indirectRelationshipObject?: string;
    isActive?: boolean;
    masterLabel: string;
    relatedObject: string;
    relatedObjectRecordType?: string;
    relationshipType: string;
}

export type UiFormatSpecificationSet = Metadata & {
    field: string;
    formatType: string;
    masterLabel: string;
    sobjectType: string;
    uiFormatSpecifications: UiFormatSpecification[];
}

export type UnifiedApplication = Metadata & {
    description?: string;
    label: string;
    unifiedApplicationMember: UnifiedApplicationMember[];
}

export type UserAccessPolicy = Metadata & {
    booleanFilter: string;
    description?: string;
    isProtected?: boolean;
    masterLabel: string;
    order?: number;
    status: string;
    triggerType?: string;
    userAccessPolicyActions: UserAccessPolicyAction[];
    userAccessPolicyFilters: UserAccessPolicyFilter[];
}

export type UserCriteria = Metadata & {
    creationAgeInSeconds?: number;
    description?: string;
    lastChatterActivityAgeInSeconds?: number;
    masterLabel: string;
    profiles: string[];
    userTypes: string[];
}

export type UserEngagementSettings = Metadata & {
    canUseAdoptionApps?: boolean;
    doesScheduledSwitcherRunDaily?: boolean;
    enableCustomHelpGlobalSection?: boolean;
    enableHelpMenuShowFeedback?: boolean;
    enableHelpMenuShowHelp?: boolean;
    enableHelpMenuShowNewUser?: boolean;
    enableHelpMenuShowSearch?: boolean;
    enableHelpMenuShowSfdcContent?: boolean;
    enableHelpMenuShowShortcut?: boolean;
    enableHelpMenuShowSupport?: boolean;
    enableHelpMenuShowTrailhead?: boolean;
    enableIBILOptOutDashboards?: boolean;
    enableIBILOptOutEvents?: boolean;
    enableIBILOptOutReports?: boolean;
    enableIBILOptOutTasks?: boolean;
    enableLexToClassicFeedbackEnable?: boolean;
    enableOrchestrationInSandbox?: boolean;
    enableOrgUserAssistEnabled?: boolean;
    enableScheduledSwitcher?: boolean;
    enableSfdcProductFeedbackSurvey?: boolean;
    enableShowSalesforceUserAssist?: boolean;
    isAutoTransitionDelayed?: boolean;
    isCrucNotificationDisabled?: boolean;
    isCustomProfileAutoTransitionDelayed?: boolean;
    isLEXWelcomeMatDisabled?: boolean;
    isMeetTheAssistantDisabledInClassic?: boolean;
    isMeetTheAssistantDisabledInLightning?: boolean;
    isSmartNudgesDisabled?: boolean;
    optimizerAppEnabled?: boolean;
    suggestedForYou?: boolean;
}

export type UserInterfaceSettings = Metadata & {
    alternateAlohaListView?: boolean;
    dynamicMruActionsOff?: boolean;
    enableAsyncRelatedLists?: boolean;
    enableClickjackUserPageHeaderless?: boolean;
    enableCollapsibleSections?: boolean;
    enableCollapsibleSideBar?: boolean;
    enableCustomObjectTruncate?: boolean;
    enableCustomeSideBarOnAllPages?: boolean;
    enableDeleteFieldHistory?: boolean;
    enableExternalObjectAsyncRelatedLists?: boolean;
    enableHoverDetails?: boolean;
    enableInlineEdit?: boolean;
    enableLightningVerticalNav?: boolean;
    enableNewPageLayoutEditor?: boolean;
    enablePersonalCanvas?: boolean;
    enablePrintableListViews?: boolean;
    enableProfileCustomTabsets?: boolean;
    enableQuickCreate?: boolean;
    enableQuickSetupPanel?: boolean;
    enableRelatedListHovers?: boolean;
    enableSldsV2?: boolean;
    enableSpotlight?: boolean;
    enableTabOrganizer?: boolean;
    enableVertNavThemedIconsEnabled?: boolean;
    enableVerticalNavSeamlessSwitching?: boolean;
    multiColumnSort?: boolean;
    multiColumnSortLv?: boolean;
    multiColumnSortRl?: boolean;
}

export type UserLicenseDefinition = Metadata & {
    cloudServiceProvider?: string;
    defaultLicenseDuration?: number;
    defaultStatus?: string;
    description?: string;
    hasDynamicResourceGroupKey?: boolean;
    includedFeatures: IncludedFeature[];
    isPermissionSetLicense?: boolean;
    licenseKey?: string;
    licenseOwner?: string;
    licensingAuthority?: string;
    managementServiceProvider?: string;
    managementTenantId?: string;
    minPlatformVersion?: number;
    name: string;
    settingItems: SettingItem[];
    settingUsageDefinitions: SettingUsageDefinition[];
    standardPermissionSets: StandardPermissionSet[];
}

export type UserManagementSettings = Metadata & {
    enableCanAnswerContainUsername?: boolean;
    enableConcealPersonalInfo?: boolean;
    enableContactlessExternalIdentityUsers?: boolean;
    enableEnhancedConcealPersonalInfo?: boolean;
    enableEnhancedPermsetMgmt?: boolean;
    enableEnhancedProfileMgmt?: boolean;
    enableEnhcUiUserAccessPolicies?: boolean;
    enableNewProfileUI?: boolean;
    enableProfileFiltering?: boolean;
    enableRestrictEmailDomains?: boolean;
    enableScrambleUserData?: boolean;
    enableUserSelfDeactivate?: boolean;
    enhancedPermSetList?: boolean;
    enhancedUserListView?: boolean;
    enhancedUserRoleListView?: boolean;
    groupSummaryUIEnhancement?: boolean;
    permsetsInFieldCreation?: boolean;
    psaExpirationUIEnabled?: boolean;
    restrictedProfileCloning?: boolean;
    userAccessPoliciesEnabled?: boolean;
}

export type UserProvisioningConfig = Metadata & {
    approvalRequired?: string;
    connectedApp: string;
    enabled?: boolean;
    enabledOperations?: string;
    flow?: string;
    masterLabel: string;
    namedCredential?: string;
    notes?: string;
    onUpdateAttributes?: string;
    reconFilter?: string;
    userAccountMapping?: string;
}

export type VehicleAssetEmssnSrcCnfg = Metadata & {
    recordType: string;
    vehicleAssetType: string;
}

export type VisualizationPlugin = Metadata & {
    description?: string;
    developerName: string;
    icon: string;
    masterLabel: string;
    visualizationResources: VisualizationResource[];
    visualizationTypes: VisualizationType[];
}

export type VoiceSettings = Metadata & {
    enableCallDisposition?: boolean;
    enableConsentReminder?: boolean;
    enableDefaultRecording?: boolean;
    enableVoiceCallList?: boolean;
    enableVoiceCallRecording?: boolean;
    enableVoiceCoaching?: boolean;
    enableVoiceConferencing?: boolean;
    enableVoiceLocalPresence?: boolean;
    enableVoiceMail?: boolean;
    enableVoiceMailDrop?: boolean;
}

export type WarrantyLifecycleMgmtSettings = Metadata & {
    enableWarrantyLCMgmt?: boolean;
}

export type WaveAnalyticAssetCollection = Metadata & {
    collectionType: string;
    color: string;
    description?: string;
    folder?: string;
    items: WaveAnalyticAssetCollectionItem[];
    label: string;
    masterLabel: string;
    shares: FolderShare[];
}

export type WaveApplication = Metadata & {
    assetIcon?: string;
    description?: string;
    folder: string;
    masterLabel: string;
    shares: FolderShare[];
    templateOrigin?: string;
    templateVersion?: string;
}

export type WaveDataset = Metadata & {
    application: string;
    description?: string;
    masterLabel: string;
    templateAssetSourceName?: string;
    type?: string;
}

export type WaveTemplateBundle = Metadata & {
    assetIcon?: string;
    assetVersion?: number;
    description?: string;
    label: string;
    templateType: string;
}

export type WaveTemplateDetailsMetadata = Metadata

export type WaveTemplateExternalDataMetadata = Metadata & {
    edgemartLabel: string;
    format: string;
    label: string;
    simulatedRowCount?: number;
}

export type WaveTemplateLensDashboardMetadata = Metadata

export type WaveXmd = Metadata & {
    application?: string;
    dataset: string;
    datasetConnector?: string;
    datasetFullyQualifiedName?: string;
    dates: WaveXmdDate[];
    dimensions: WaveXmdDimension[];
    measures: WaveXmdMeasure[];
    organizations: WaveXmdOrganization[];
    origin?: string;
    type?: string;
    waveVisualization?: string;
}

export type WebStoreBundle = Metadata & {
    autoFacetingEnabled?: boolean;
    cartToOrderAutoCustomFieldMapping?: boolean;
    commerceEinsteinActivitiesTracked?: boolean;
    commerceEinsteinDeployed?: boolean;
    country?: string;
    defaultCurrency?: string;
    defaultLanguage?: string;
    defaultTaxLocaleType: string;
    description?: string;
    guestBrowsingEnabled?: boolean;
    guestCartTimeToLive?: number;
    label: string;
    orderLifeCycleType?: string;
    pricingStrategy: string;
    productGrouping?: string;
    skipAdditionalEntitlementCheckForSearch?: boolean;
    skuDetectionEnabled?: boolean;
    storeName?: string;
    supportedCurrencies?: string;
    supportedLanguages?: string;
    supportedShipToCountries?: string;
    type: string;
}

export type WebStoreTemplate = Metadata & {
    autoFacetingEnabled?: boolean;
    cartAsyncProcessingEnabled?: boolean;
    cartCalculateEnabled?: boolean;
    cartToOrderAutoCustomFieldMapping?: boolean;
    checkoutTimeToLive?: number;
    checkoutValidAfterDate?: Date;
    commerceEinsteinActivitiesTracked?: boolean;
    commerceEinsteinDeployed?: boolean;
    country?: string;
    defaultCurrency?: string;
    defaultLanguage: string;
    defaultTaxLocaleType: string;
    description?: string;
    duplicateCartItemsEnabled?: boolean;
    guestBrowsingEnabled?: boolean;
    guestCartEnabled: boolean;
    guestCartTimeToLive?: number;
    guestCheckoutEnabled: boolean;
    masterLabel: string;
    maxValuesPerFacet?: number;
    orderActivationStatus?: string;
    orderLifeCycleType?: string;
    paginationSize?: number;
    preserveGuestCartEnabled: boolean;
    pricingStrategy: string;
    productGrouping?: string;
    skipAdditionalEntitlementCheckForSearch?: boolean;
    skuDetectionEnabled?: boolean;
    splitShipmentEnabled: boolean;
    supportedCurrencies?: string;
    supportedLanguages: string;
    supportedShipToCountries?: string;
    type: string;
}

export type WebToXSettings = Metadata & {
    shouldHideRecordInfoInEmail?: boolean;
    webToCaseSpamFilter?: boolean;
    webToLeadSpamFilter?: boolean;
}

export type WindowsPushApplicationSetup = Metadata & {
    packageSecurityIdentifier: string;
    secretKey: string;
}

export type WorkDotComSettings = Metadata & {
    enableCoachingManagerGroupAccess?: boolean;
    enableGoalManagerGroupAccess?: boolean;
    enableProfileSkills?: boolean;
    enableProfileSkillsAddFeedPost?: boolean;
    enableProfileSkillsAutoSuggest?: boolean;
    enableProfileSkillsUsePlatform?: boolean;
    enableWorkBadgeDefRestrictPref?: boolean;
    enableWorkCalibration?: boolean;
    enableWorkCanvasPref?: boolean;
    enableWorkCertification?: boolean;
    enableWorkCertificationNotification?: boolean;
    enableWorkRewardsPref?: boolean;
    enableWorkThanksPref?: boolean;
    enableWorkUseObjectivesForGoals?: boolean;
}

export type WorkSkillRouting = Metadata & {
    isActive: boolean;
    masterLabel: string;
    relatedEntity: string;
    workSkillRoutingAttributes: WorkSkillRoutingAttribute[];
}

export type Workflow = Metadata & {
    alerts: WorkflowAlert[];
    fieldUpdates: WorkflowFieldUpdate[];
    flowActions: WorkflowFlowAction[];
    flowAutomation: WorkflowFlowAutomation[];
    knowledgePublishes: WorkflowKnowledgePublish[];
    outboundMessages: WorkflowOutboundMessage[];
    rules: WorkflowRule[];
    send: WorkflowSend[];
    tasks: WorkflowTask[];
}

export type WorkflowAction = Metadata

export type WorkflowFieldUpdate = WorkflowAction & {
    description?: string;
    field: string;
    formula?: string;
    literalValue?: string;
    lookupValue?: string;
    lookupValueType?: string;
    name: string;
    notifyAssignee: boolean;
    operation: string;
    protected: boolean;
    reevaluateOnChange?: boolean;
    targetObject?: string;
}

export type WorkflowFlowAction = WorkflowAction & {
    description?: string;
    flow: string;
    flowInputs: WorkflowFlowActionParameter[];
    label: string;
    language?: string;
    protected: boolean;
}

export type WorkflowFlowAutomation = WorkflowAction & {
    activeOrLastInactiveVersion?: string;
    activeOrLatestVersion?: string;
    activeVersion?: string;
    fireflyGuid?: string;
    isFlowAccessEnabled?: boolean;
    latestVersion?: string;
    masterLabel?: string;
    migratedFrom?: string;
    objectType?: string;
}

export type WorkflowKnowledgePublish = WorkflowAction & {
    action: string;
    description?: string;
    label: string;
    language?: string;
    protected: boolean;
}

export type WorkflowOutboundMessage = WorkflowAction & {
    apiVersion: number;
    description?: string;
    endpointUrl: string;
    fields: string[];
    includeSessionId: boolean;
    integrationUser: string;
    name: string;
    protected: boolean;
    useDeadLetterQueue?: boolean;
}

export type WorkflowSend = WorkflowAction & {
    action: string;
    description?: string;
    label: string;
    language?: string;
    protected: boolean;
}

export type WorkflowTask = WorkflowAction & {
    assignedTo?: string;
    assignedToType: string;
    description?: string;
    dueDateOffset: number;
    notifyAssignee: boolean;
    offsetFromField?: string;
    priority: string;
    protected: boolean;
    status: string;
    subject: string;
}

export type WorkflowRule = Metadata & {
    actions: WorkflowActionReference[];
    active: boolean;
    booleanFilter?: string;
    criteriaItems: FilterItem[];
    description?: string;
    failedMigrationToolVersion?: string;
    formula?: string;
    triggerType: string;
    workflowTimeTriggers: WorkflowTimeTrigger[];
}

export type DigitalExperience = MetadataWithContent & {
    fileName: string;
    filePath?: string;
    format: string;
}

export type WorkflowAlert = WorkflowAction & {
    ccEmails: string[];
    description: string;
    protected: boolean;
    recipients: WorkflowEmailRecipient[];
    senderAddress?: string;
    senderType?: string;
    template: string;
}

export type AIPredictionDefinition = {
    dataDefinitions: AIDataDefinition[];
    description: string;
    predictionTargets: AIPredictionTarget[];
    status: string;
    type: string;
}

export type AIModelFactor = {
    externalId?: string;
    factorComponents: AIFactorComponent[];
    intensityType: string;
    intensityValue: number;
    lowerLimit: number;
    type: string;
    upperLimit: number;
}

export type AIModelGraph = {
    dataSetType: string;
    graphPoints: string;
    graphType: string;
    schemaVersion: string;
}

export type AIModelMetric = {
    classLabel1?: string;
    classLabel2?: string;
    iteration?: number;
    metricType: string;
    metricValue: number;
}

export type AIScoringStep = {
    aiModelConfigStep: string;
    stepDetail?: string;
}

export type AIUsecaseFieldMapping = {
    additionalFieldInformation?: string;
    customPredictionLabel?: string;
    developerName: string;
    joinFieldInformation?: string;
    mappedFieldName: string;
    mappedFieldType: string;
    masterLabel: string;
    responseFieldName: string;
    responseObject: string;
    sequenceNumber?: number;
}

export type AIUsecaseModel = {
    aiFeatureExtractors: AIFeatureExtractor[];
    arePredctGenInRealTime: boolean;
    defaultFeatureExtractor?: AIFeatureExtractor;
    developerName: string;
    masterLabel: string;
    predictionDefinition: string;
    predictionPlatform: string;
}

export type AccountForecastFormula = {
    endingPeriod: number;
    formula: string;
    formulaType: string;
    startingPeriod: number;
}

export type ObjectMapping = {
    inputObject: string;
    mappingFields: ObjectMappingField[];
    outputObject: string;
}

export type AccountPlanObjMeasCalcCond = {
    fieldName: string;
    operation: string;
    value: string;
}

export type ActionLinkTemplate = {
    actionUrl: string;
    headers?: string;
    isConfirmationRequired: boolean;
    isGroupDefault: boolean;
    label?: string;
    labelKey: string;
    linkType: string;
    method: string;
    position: number;
    requestBody?: string;
    userAlias?: string;
    userVisibility: string;
}

export type ActionPlanTemplateItem = {
    actionPlanTemplateItemValue: ActionPlanTemplateItemValue[];
    displayOrder?: number;
    isRequired?: boolean;
    itemEntityType: string;
    name: string;
    uniqueName: string;
}

export type ActionPlanTemplateItemDependency = {
    creationType: string;
    name: string;
    previousTemplateItem: ActionPlanTemplateItem;
    templateItem: ActionPlanTemplateItem;
}

export type EventSubtype = {
    apiName: string;
    label: string;
}

export type IncludedPlatformLicenseDefinition = {
    fullName?: string;
    name: string;
    quantity?: number;
}

export type IncludedUserLicenseDefinition = {
    fullName?: string;
    name: string;
    quantity?: number;
}

export type CountriesAndStates = {
    countries: Country[];
}

export type AdvAcctForecastDimension = {
    advAcctForecastDimName: string;
    dimensionFieldName: string;
    dimensionSourceName?: string;
    hierarchySequenceNumber: number;
}

export type AdvAcctFrcstDisplayGroup = {
    advAcctFrcstDisplayGroupName: string;
    displayGroupItems: AdvAcctFrcstDplyGroupItem[];
    displayGroupType?: string;
    isDefault?: boolean;
    userProfileName?: string;
}

export type AdvAcctForecastAdjPeriod = {
    adjustmentDayCount: number;
    frequency: string;
    profileName?: string;
    startDay: number;
}

export type AdvAccountForecastFormula = {
    endPeriod: number;
    formulaExpression: string;
    formulaType: string;
    startPeriod: number;
}

export type AdvAcctForecastMeasureDef = {
    advAcctForecastMeasureDefName: string;
    aggregationType?: string;
    computationMethod?: string;
    forecastDataMeasureName: string;
    forecastMeasureName: string;
    forecastMeasureType: string;
    isAdjustmentTracked?: boolean;
}

export type AdvAccountForecastPeriod = {
    displayDuration: number;
    sequenceNumber: number;
    type: string;
}

export type AdvancedFieldMapping = {
    sourceField: string;
    sourceObject: string;
    targetField: string;
    targetObject: string;
}

export type AnalyticSnapshotMapping = {
    aggregateType?: string;
    sourceField: string;
    sourceType: string;
    targetField: string;
}

export type AnalyticsDashboardLayout = {
    analyticsDashboard: string;
    columnCount?: string;
    label?: string;
    layoutName?: string;
    maxWidth?: string;
    pages: AnalyticsDashboardPage[];
    rowHeight?: string;
    style?: string;
    version?: number;
}

export type AnalyticsDashboardWidget = {
    analyticsDashboard: string;
    buttonWidgetDefs: AnalyticsButtonWidgetDef[];
    containerWidgetDefs: AnalyticsContainerWidgetDef[];
    filterWidgetDefs: AnalyticsFilterWidgetDef[];
    label?: string;
    metricWidgetDefs: AnalyticsMetricWidgetDef[];
    parameterWidgetDefs: AnalyticsParamWidgetDef[];
    textWidgetDefs: AnalyticsTextWidgetDef[];
    type: string;
    vizWidgetDefs: AnalyticsVizWidgetDef[];
    widgetActions: AnalyticsAssetAction[];
    widgetName?: string;
}

export type ApexEmailNotification = {
    email?: string;
    user?: string;
}

export type AppMenuItem = {
    name: string;
    type: string;
}

export type ModuleRefs = {
    moduleRef: ModuleRef[];
}

export type ApprovalSubmitter = {
    submitter?: string;
    type: string;
}

export type ApprovalPageField = {
    field: string[];
}

export type ApprovalStep = {
    allowDelegate?: boolean;
    approvalActions?: ApprovalAction;
    assignedApprover: ApprovalStepApprover;
    description?: string;
    entryCriteria?: ApprovalEntryCriteria;
    ifCriteriaNotMet?: string;
    label: string;
    name: string;
    rejectBehavior?: ApprovalStepRejectBehavior;
    rejectionActions?: ApprovalAction;
}

export type ApprovalEntryCriteria = {
    booleanFilter?: string;
    criteriaItems: FilterItem[];
    formula?: string;
}

export type ApprovalAction = {
    action: WorkflowActionReference[];
}

export type NextAutomatedApprover = {
    useApproverFieldOfRecordOwner?: boolean;
    userHierarchyField: string;
}

export type AssessmentQuestionVersion = {
    additionalInformation?: string;
    description?: string;
    guidanceInformation?: string;
    helpText?: string;
    isActive: boolean;
    name: string;
    optionSourceResponseValue?: boolean;
    questionText: string;
    responseValues?: string;
    status: string;
    versionNumber: number;
}

export type RuleEntry = {
    assignedTo?: string;
    assignedToType?: string;
    booleanFilter?: string;
    businessHours?: string;
    businessHoursSource?: string;
    criteriaItems: FilterItem[];
    disableEscalationWhenModified?: boolean;
    escalationAction: EscalationAction[];
    escalationStartTime?: string;
    formula?: string;
    notifyCcRecipients?: boolean;
    overrideExistingTeams?: boolean;
    replyToEmail?: string;
    senderEmail?: string;
    senderName?: string;
    team: string[];
    template?: string;
}

export type AssistantDefinitionProfile = {
    profile?: string;
}

export type AssistantSkillQuickActionParam = {
    description?: string;
    field?: string;
    index?: number;
    prompt?: string;
    referenceTarget?: string;
    slotClass?: string;
}

export type AssistantSkillSobjectParam = {
    description?: string;
    field?: string;
    index?: number;
    prompt?: string;
    referenceTarget?: string;
    slotClass?: string;
}

export type AssistantSkill = {
    assistantSkillIntents: AssistantSkillIntent[];
    description?: string;
    externalModel?: string;
    index?: number;
    mlDomain?: string;
    skillType?: string;
}

export type AssistantVersionAction = {
    action?: string;
}

export type AudienceCriteria = {
    criterion: AudienceCriterion[];
}

export type PersonalizationTargetInfos = {
    target: PersonalizationTargetInfo[];
}

export type AuraDefinitions = {
    auraDefinition: AuraDefinition[];
}

export type PackageVersion = {
    majorNumber: number;
    minorNumber: number;
    namespace?: string;
    packageId?: string;
}

export type AuthProvParamFwdAllowlist = {
    description?: string;
    param: string;
}

export type BatchCalcJobAggregate = BatchCalcJobAbstractMetadataValue & {
    description?: string;
    fields: BatchCalcJobAggregateField[];
    groupBy: string[];
    label: string;
    name: string;
    sourceName: string;
}

export type BatchCalcJobUnion = BatchCalcJobAbstractMetadataValue & {
    description?: string;
    isDisjointedSchema?: boolean;
    label: string;
    name: string;
    sources: string[];
}

export type BatchCalcJobAtomicWriteback = BatchCalcJobAbstractMetadataValue & {
    description?: string;
    label: string;
    name: string;
    writebackObjectRelationships: BatchCalcJobAtomicWritebackRelationship[];
    writebackSequence?: number;
}

export type BatchCalcJobCustomNode = BatchCalcJobAbstractMetadataValue & {
    description?: string;
    extensionName: string;
    extensionNamespace: string;
    label: string;
    name: string;
    parameters: BatchCalcJobCustomNodeParameter[];
    sources: string[];
}

export type BatchCalcJobDatasource = BatchCalcJobAbstractMetadataValue & {
    CSVDelimiter?: string;
    description?: string;
    fields: BatchCalcJobDatasourceField[];
    fileIdentifier?: string;
    filePath?: string;
    fileSource?: string;
    label: string;
    name: string;
    sourceName: string;
    type: string;
}

export type BatchCalcJobFilter = BatchCalcJobAbstractMetadataValue & {
    criteria: BatchCalcJobFilterCriteria[];
    description?: string;
    filterCondition?: string;
    filterParameterName?: string;
    isDynamicFilter?: boolean;
    label: string;
    name: string;
    sourceName: string;
}

export type BatchCalcJobForecast = BatchCalcJobAbstractMetadataValue & {
    accuracyPercent?: string;
    aggregationFields: BtchCalcJobFrcstAggrFld[];
    dateFieldName: string;
    description?: string;
    forecastModelType?: string;
    forecastPeriodCount?: number;
    forecastPeriodType: string;
    groupFields: BatchCalcJobFrcstGrpFld[];
    label: string;
    name: string;
    periodStartDateName: string;
    seasonality?: string;
    shouldExcludeLastPeriod?: boolean;
    sourceName: string;
}

export type BatchCalcJobHierarchyPath = BatchCalcJobAbstractMetadataValue & {
    description?: string;
    hierarchyFieldName: string;
    isSelfFieldValueIncluded?: boolean;
    label: string;
    name: string;
    parentFieldName: string;
    selfFieldName: string;
    sourceName: string;
}

export type BatchCalcJobSourceJoin = BatchCalcJobAbstractMetadataValue & {
    description?: string;
    fields: BatchCalcJobJoinResultField[];
    joinKeys: BatchCalcJobJoinKey[];
    label: string;
    name: string;
    primarySourceName: string;
    secondarySourceName: string;
    type: string;
}

export type BatchCalcJobParameter = BatchCalcJobAbstractMetadataValue & {
    dataType: string;
    defaultValue?: string;
    description?: string;
    isMultiValue: boolean;
    label: string;
    name: string;
}

export type BatchCalcJobTransform = BatchCalcJobAbstractMetadataValue & {
    description?: string;
    droppedFields: BatchCalcJobTransformDroppedField[];
    expressionFields: BatchCalcJobTransformAddedField[];
    label: string;
    name: string;
    orderBy: BatchCalcJobOrderByField[];
    partitionBy: string[];
    sourceName: string;
    transformationType: string;
}

export type BatchCalcJobWritebackObject = BatchCalcJobAbstractMetadataValue & {
    description?: string;
    externalIdFieldName?: string;
    fields: BatchCalcJobWritebackMapping[];
    filterCondition?: string;
    folderName?: string;
    isChangedRow?: boolean;
    isExistingDataset?: boolean;
    label: string;
    name: string;
    operationType?: string;
    sharingInheritanceObjectName?: string;
    sourceName: string;
    storageType?: string;
    targetObjectName: string;
    writebackRecordMaxLimit?: number;
    writebackSequence?: number;
    writebackUser?: string;
}

export type BatchDataSource = {
    condition: string;
    criteria?: string;
    filters: BatchDataSrcFilterCriteria[];
    sourceObject: string;
    sourceObjectField?: string;
}

export type BenefitActionParameter = {
    dataType: string;
    masterLabel: string;
    name?: string;
    objectName?: string;
    parameterValues: BenefitActionParameterValue[];
    picklistName?: string;
}

export type LocalMlDomain = {
    label: string;
    mlIntents: MlIntent[];
    mlSlotClasses: MlSlotClass[];
    name: string;
}

export type ConversationContextVariable = {
    SObjectType?: string;
    contextVariableMappings: ConversationContextVariableMapping[];
    dataType: string;
    description?: string;
    developerName: string;
    includeInPrompt?: boolean;
    label: string;
}

export type ConversationDefinitionChannelProvider = {
    agentRequired?: boolean;
    chatButtonName: string;
}

export type PageContextVariable = {
    SObjectType?: string;
    dataType: string;
    description?: string;
    developerName: string;
    label: string;
}

export type BotDialogGroup = {
    description?: string;
    developerName: string;
    label: string;
}

export type BotDialog = {
    botDialogGroup?: string;
    botSteps: BotStep[];
    description?: string;
    developerName: string;
    isPlaceholderDialog?: boolean;
    label: string;
    mlIntent?: string;
    mlIntentTrainingEnabled?: boolean;
    showInFooterMenu?: boolean;
}

export type ConversationDefinitionPlanner = {
    genAiPlannerName: string;
}

export type ConversationDefinitionGoal = {
    developerName: string;
    label: string;
}

export type ConversationSystemDialog = {
    dialog: string;
    type: string;
}

export type ConversationVariable = {
    SObjectType?: string;
    collectionType?: string;
    dataType: string;
    description?: string;
    developerName: string;
    includeInPrompt?: boolean;
    label: string;
    visibility?: string;
}

export type ConversationDefinitionNlpProvider = {
    language?: string;
    nlpProviderName?: string;
    nlpProviderType: string;
}

export type BrandingSetProperty = {
    propertyName: string;
    propertyValue?: string;
}

export type BriefcaseRule = {
    briefcaseRuleFilters: BriefcaseRuleFilter[];
    filterLogic?: string;
    isAscendingOrder?: boolean;
    isRelatedFilesRule?: boolean;
    orderBy?: string;
    queryScope?: string;
    recordLimit?: number;
    relatedRules: BriefcaseRule[];
    relationshipField?: string;
    relationshipType?: string;
    targetEntity: string;
}

export type Holiday = {
    activityDate?: Date;
    businessHours: string[];
    description?: string;
    endTime?: Date;
    isRecurring?: boolean;
    name?: string;
    recurrenceDayOfMonth?: number;
    recurrenceDayOfWeek: string[];
    recurrenceDayOfWeekMask?: number;
    recurrenceEndDate?: Date;
    recurrenceInstance?: string;
    recurrenceInterval?: number;
    recurrenceMonthOfYear?: string;
    recurrenceStartDate?: Date;
    recurrenceType?: string;
    startTime?: Date;
}

export type BusinessProcessDefinition = {
    businessProcessFeedbacks: BusinessProcessFeedback[];
    description?: string;
    developerName: string;
    masterLabel: string;
    sequenceNumber: number;
}

export type CMSConnectAsset = {
    assetPath: string;
    assetType: string;
    sortOrder: number;
}

export type CMSConnectLanguage = {
    cmsLanguage: string;
    language: string;
}

export type CMSConnectPersonalization = {
    connectorPage: string;
    connectorPageAsset: string;
}

export type CMSConnectResourceType = {
    cmsConnectResourceDefinition: CMSConnectResourceDefinition[];
    developerName: string;
    masterLabel: string;
    resourceType: string;
}

export type ContactCenterChannel = {
    channel: string;
    contactCenter: string;
    voiceMailFallbackQueue?: string;
    voiceMailHandler?: string;
}

export type CallCenterSection = {
    items: CallCenterItem[];
    label: string;
    name: string;
}

export type VendorCallCenterStatusMap = {
    externalStatus: string;
    servicePresenceStatus: string;
}

export type CareRequestRecords = {
    careRequestRecord: string;
}

export type FeedItemSettings = {
    characterLimit?: number;
    displayFormat?: string;
    feedItemType: string;
}

export type EmailToCaseSettings = {
    enableE2CAttachmentAsFile?: boolean;
    enableE2CDeduplicateAttachments?: boolean;
    enableE2CExternalServer?: boolean;
    enableE2CSourceTracking?: boolean;
    enableEmailToCase?: boolean;
    enableHtmlEmail?: boolean;
    enableNewToReadTriggers?: boolean;
    enableOnDemandEmailToCase?: boolean;
    enableThreadIDInBody?: boolean;
    enableThreadIDInSubject?: boolean;
    enableThreadTokenInBody?: boolean;
    enableThreadTokenInSubject?: boolean;
    movingEmailEnabled?: boolean;
    notifyOwnerOnNewCaseEmail?: boolean;
    overEmailLimitAction?: string;
    preQuoteSignature?: boolean;
    replyWithNewContentOnly?: boolean;
    routingAddresses: EmailToCaseRoutingAddress[];
    showServiceEmailOpenPrompt?: boolean;
    showWordCountInComposer?: boolean;
    unauthorizedSenderAction?: string;
    useEmailHeadersForThreading?: boolean;
}

export type WebToCaseSettings = {
    caseOrigin?: string;
    defaultResponseTemplate?: string;
    enableWebToCase?: boolean;
}

export type ChannelLayoutItem = {
    field: string;
}

export type ChoiceListValue = {
    embeddedServiceCustomLabels: EmbeddedServiceCustomLabel[];
    isDefaultValue: boolean;
    order: number;
    valueName: string;
}

export type CleanRule = {
    bulkEnabled: boolean;
    bypassTriggers: boolean;
    bypassWorkflow: boolean;
    description: string;
    developerName: string;
    fieldMappings: FieldMapping[];
    masterLabel: string;
    matchRule: string;
    sourceSobjectType: string;
    status: string;
    targetSobjectType: string;
}

export type CloudServiceProviderApi = {
    cloudServiceProviderApiType: string;
    name: string;
    version: number;
}

export type CommandActionIntent = {
    phrase: string;
    responseTemplates: CommandActionResponse[];
}

export type CommandActionParam = {
    defaultValue?: string;
    description?: string;
    name: string;
    required?: boolean;
    type: string;
}

export type CommandActionResponse = {
    template: string;
}

export type ReputationLevels = {
    chatterAnswersReputationLevels: ChatterAnswersReputationLevel[];
    ideaReputationLevels: IdeaReputationLevel[];
}

export type CommunityTemplateBundleInfo = {
    description?: string;
    image?: string;
    order: number;
    title: string;
    type: string;
}

export type NavigationLinkSet = {
    navigationMenuItem: NavigationMenuItem[];
}

export type CommunityTemplatePageSetting = {
    page: string;
    themeLayout: string;
}

export type CommunityThemeBundleInfo = CommunityTemplateBundleInfo

export type CommunityCustomThemeLayoutType = {
    description?: string;
    label: string;
}

export type CommunityThemeRouteOverride = {
    customThemeLayoutType?: string;
    pageAttributes: string;
    pageType: string;
    themeLayoutType?: string;
}

export type CommunityThemeSetting = {
    customThemeLayoutType?: string;
    themeLayout: string;
    themeLayoutType?: string;
}

export type FiscalYearSettings = {
    fiscalYearNameBasedOn?: string;
    startMonth?: string;
}

export type ConnectedAppAttribute = {
    formula: string;
    key: string;
}

export type ConnectedAppCanvasConfig = {
    accessMethod: string;
    canvasUrl: string;
    lifecycleClass?: string;
    locations: string[];
    options: string[];
    samlInitiationMethod?: string;
}

export type ConnectedAppIpRange = {
    description?: string;
    end: string;
    start: string;
}

export type ConnectedAppMobileDetailConfig = {
    applicationBinaryFile?: string;
    applicationBinaryFileName?: string;
    applicationBundleIdentifier?: string;
    applicationFileLength?: number;
    applicationIconFile?: string;
    applicationIconFileName?: string;
    applicationInstallUrl?: string;
    devicePlatform: string;
    deviceType?: string;
    minimumOsVersion?: string;
    privateApp?: boolean;
    version: string;
}

export type ConnectedAppOauthConfig = {
    assetTokenConfig?: ConnectedAppOauthAssetToken;
    callbackUrl: string;
    certificate?: string;
    consumerKey?: string;
    consumerSecret?: string;
    idTokenConfig?: ConnectedAppOauthIdToken;
    isAdminApproved?: boolean;
    isClientCredentialEnabled?: boolean;
    isCodeCredentialEnabled?: boolean;
    isCodeCredentialPostOnly?: boolean;
    isConsumerSecretOptional?: boolean;
    isIntrospectAllTokens?: boolean;
    isNamedUserJwtEnabled?: boolean;
    isPkceRequired?: boolean;
    isRefreshTokenRotationEnabled?: boolean;
    isSecretRequiredForRefreshToken?: boolean;
    isSecretRequiredForTokenExchange?: boolean;
    isTokenExchangeEnabled?: boolean;
    oauthClientCredentialUser?: string;
    scopes: string[];
    singleLogoutUrl?: string;
}

export type ConnectedAppOauthPolicy = {
    ipRelaxation: string;
    isTokenExchangeFlowEnabled?: boolean;
    refreshTokenPolicy: string;
    singleLogoutUrl?: string;
}

export type ConnectedAppSamlConfig = {
    acsUrl: string;
    certificate?: string;
    encryptionCertificate?: string;
    encryptionType?: string;
    entityUrl: string;
    issuer?: string;
    samlIdpSLOBindingEnum?: string;
    samlNameIdFormat?: string;
    samlSigningAlgoType?: string;
    samlSloUrl?: string;
    samlSubjectCustomAttr?: string;
    samlSubjectType: string;
}

export type ConnectedAppSessionPolicy = {
    policyAction?: string;
    sessionLevel?: string;
    sessionTimeout?: number;
}

export type ContextDefinitionReference = {
    inheritedFrom?: string;
    referenceContextDefinition: string;
}

export type ContextDefinitionVersion = {
    contextMappings: ContextMapping[];
    contextNodes: ContextNode[];
    endDate?: string;
    isActive?: boolean;
    startDate: string;
    versionNumber: number;
}

export type ContractTypeConfig = {
    configType: string;
    configValue: string;
    usageType?: string;
}

export type ConvIntelligenceSignalSubRule = {
    operandValue: string;
    operator: string;
    order: number;
    type: string;
}

export type ConversationMessageConstant = {
    compositeValues: ConversationMessageConstantCompositeValue[];
    constantType: string;
    label?: string;
    name?: string;
    primitiveValues: ConversationMessageConstantPrimitiveValue[];
    valueType?: string;
}

export type ConversationMessageHandler = {
    activeRequestDurationMinutes: number;
    handlerName: string;
    handlerType: string;
}

export type ConversationMessageLayout = {
    externalTemplates: ConvMsgExternalTemplateVersion[];
    formatType: string;
    layoutItems: ConversationMessageLayoutItem[];
    messageType: string;
}

export type ConversationMessageOptionsParameter = {
    compositeTypeDetails?: ConversationMessageParameterCompositeDetails;
    optionsParameterType: string;
    primitiveTypeDetails?: ConversationMessageParameterPrimitiveDetails;
}

export type ConversationMessageParameter = {
    compositeTypeDetails?: ConversationMessageParameterCompositeDetails;
    parameterType: string;
    primitiveTypeDetails?: ConversationMessageParameterPrimitiveDetails;
}

export type AppActionOverride = ActionOverride & {
    pageOrSobjectType: string;
}

export type AppBrand = {
    footerColor?: string;
    headerColor?: string;
    logo?: string;
    logoVersion?: number;
    shouldOverrideOrgTheme?: boolean;
}

export type ServiceCloudConsoleConfig = {
    componentList?: AppComponentList;
    detailPageRefreshMethod: string;
    footerColor?: string;
    headerColor?: string;
    keyboardShortcuts: KeyboardShortcuts;
    listPlacement: ListPlacement;
    listRefreshMethod: string;
    liveAgentConfig?: LiveAgentConfig;
    primaryTabColor?: string;
    pushNotifications: PushNotification[];
    tabLimitConfig?: TabLimitConfig;
    whitelistedDomains: string[];
}

export type AppPreferences = {
    enableCustomizeMyTabs: boolean;
    enableKeyboardShortcuts: boolean;
    enableListViewHover: boolean;
    enableListViewReskin: boolean;
    enableMultiMonitorComponents: boolean;
    enablePinTabs: boolean;
    enableTabHover: boolean;
    enableTabLimits: boolean;
    saveUserSessions: boolean;
}

export type AppProfileActionOverride = ProfileActionOverride & {
    profile: string;
}

export type AppWorkspaceConfig = {
    mappings: WorkspaceMapping[];
}

export type CustomDataTypeComponent = {
    developerSuffix: string;
    enforceFieldRequiredness?: boolean;
    label: string;
    length?: number;
    precision?: number;
    scale?: number;
    sortOrder?: string;
    sortPriority?: number;
    type: string;
}

export type FeedFilterCriterion = {
    feedItemType: string;
    feedItemVisibility?: string;
    relatedSObjectType?: string;
}

export type LookupFilter = {
    active: boolean;
    booleanFilter?: string;
    description?: string;
    errorMessage?: string;
    filterItems: FilterItem[];
    infoMessage?: string;
    isOptional: boolean;
}

export type MktDataLakeFieldAttributes = {
    dateFormat?: string;
    definitionCreationType?: string;
    externalName?: string;
    isEventDate?: boolean;
    isInternalOrganization?: boolean;
    isRecordModified?: boolean;
    keyQualifierName?: string;
    mktDatalakeSrcKeyQualifier?: string;
    primaryIndexOrder?: number;
    usageTag?: string;
}

export type MktDataModelFieldAttributes = {
    definitionCreationType?: string;
    invalidMergeActionType?: string;
    isDynamicLookup?: boolean;
    keyQualifierName?: string;
    labelOverride?: string;
    masterLabel?: string;
    primaryIndexOrder?: number;
    refAttrDeveloperName?: string;
    usageTag?: string;
}

export type Picklist = {
    controllingField?: string;
    picklistValues: PicklistValue[];
    restrictedPicklist?: boolean;
    sorted: boolean;
}

export type FilterItem = {
    field: string;
    operation: string;
    value?: string;
    valueField?: string;
}

export type ValueSet = {
    controllingField?: string;
    restricted?: boolean;
    valueSetDefinition?: ValueSetValuesDefinition;
    valueSetName?: string;
    valueSettings: ValueSettings[];
}

export type CustomHelpMenuItem = {
    linkUrl: string;
    masterLabel: string;
    sortOrder: number;
}

export type CustomMetadataValue = {
    field: string;
    value?: any;
}

export type ActionOverride = {
    actionName?: string;
    comment?: string;
    content?: string;
    formFactor?: string;
    skipRecordTypeSelect?: boolean;
    type?: string;
}

export type ArticleTypeChannelDisplay = {
    articleTypeTemplates: ArticleTypeTemplate[];
}

export type HistoryRetentionPolicy = {
    archiveAfterMonths: number;
    archiveRetentionYears: number;
    description?: string;
    gracePeriodDays: number;
}

export type MktDataLakeAttributes = {
    creationType?: string;
    isEnabled?: boolean;
    objectCategory?: string;
}

export type MktDataModelAttributes = {
    creationType?: string;
    dataModelTaxonomy?: string;
    dataSpaceName?: string;
    dataSpacePrefix?: string;
    description?: string;
    isEnabled?: boolean;
    isSegmentable?: boolean;
    isUsedForMetrics?: boolean;
    labelOverride?: string;
    masterLabel?: string;
    objectCategory?: string;
    referenceEntityGroup?: string;
    referenceEntityName?: string;
    referenceEntitySubjectArea?: string;
}

export type ProfileSearchLayouts = {
    fields: string[];
    profileName?: string;
}

export type SearchLayouts = {
    customTabListAdditionalFields: string[];
    excludedStandardButtons: string[];
    listViewButtons: string[];
    lookupDialogsAdditionalFields: string[];
    lookupFilterFields: string[];
    lookupPhoneDialogsAdditionalFields: string[];
    massQuickActions: string[];
    searchFilterFields: string[];
    searchResultsAdditionalFields: string[];
    searchResultsCustomButtons: string[];
}

export type SharingRecalculation = {
    className: string;
}

export type FieldSetItem = {
    alternativeDisplayFormat?: string;
    field?: string;
    isFieldManaged?: boolean;
    isRequired?: boolean;
}

export type IndexField = {
    name: string;
    sortDirection: string;
}

export type ListViewFilter = {
    field: string;
    operation: string;
    value?: string;
}

export type SharedTo = {
    allCustomerPortalUsers?: string;
    allInternalUsers?: string;
    allPartnerUsers?: string;
    channelProgramGroup: string[];
    channelProgramGroups: string[];
    group: string[];
    groups: string[];
    guestUser: string[];
    managerSubordinates: string[];
    managers: string[];
    portalRole: string[];
    portalRoleAndSubordinates: string[];
    queue: string[];
    role: string[];
    roleAndSubordinates: string[];
    roleAndSubordinatesInternal: string[];
    roles: string[];
    rolesAndSubordinates: string[];
    territories: string[];
    territoriesAndSubordinates: string[];
    territory: string[];
    territoryAndSubordinates: string[];
}

export type RecordTypePicklistValue = {
    picklist: string;
    values: PicklistValue[];
}

export type ObjectNameCaseValue = {
    article?: string;
    caseType?: string;
    plural?: boolean;
    possessive?: string;
    value: string;
}

export type FieldSetTranslation = {
    label: string;
    name: string;
}

export type CustomFieldTranslation = {
    caseValues: ObjectNameCaseValue[];
    gender?: string;
    help?: string;
    label?: string;
    lookupFilter?: LookupFilterTranslation;
    name: string;
    picklistValues: PicklistValueTranslation[];
    relationshipLabel?: string;
    startsWith?: string;
}

export type LayoutTranslation = {
    layout: string;
    layoutType?: string;
    sections: LayoutSectionTranslation[];
}

export type QuickActionTranslation = {
    aspect?: string;
    label: string;
    name: string;
    quickActionParametersTranslation: QuickActionParametersTranslation[];
}

export type RecordTypeTranslation = {
    description?: string;
    label: string;
    name: string;
}

export type SharingReasonTranslation = {
    label: string;
    name: string;
}

export type StandardFieldTranslation = {
    label?: string;
    name: string;
}

export type ValidationRuleTranslation = {
    errorMessage: string;
    name: string;
}

export type WebLinkTranslation = {
    label: string;
    name: string;
}

export type WorkflowTaskTranslation = {
    description?: string;
    name: string;
    subject?: string;
}

export type CustomPermissionDependencyRequired = {
    customPermission: string;
    dependency: boolean;
}

export type SiteWebAddress = {
    certificate?: string;
    domainName: string;
    primary: boolean;
}

export type SiteIframeWhiteListUrl = {
    url: string;
}

export type SiteRedirectMapping = {
    action: string;
    isActive?: boolean;
    isDynamic?: boolean;
    source: string;
    target: string;
}

export type DashboardFilter = {
    dashboardFilterOptions: DashboardFilterOption[];
    name: string;
}

export type DashboardGridLayout = {
    dashboardGridComponents: DashboardGridComponent[];
    numberOfColumns: number;
    rowHeight: number;
}

export type DashboardComponentSection = {
    columnSize: string;
    components: DashboardComponent[];
}

export type DataCategory = {
    dataCategory: DataCategory[];
    label: string;
    name: string;
}

export type ObjectUsage = {
    object: string[];
}

export type DataPlatDataSetBundle = {
    bundleType?: string;
    dataPlatformDataSets: DataPlatformDataSet[];
    description?: string;
    iconUri?: string;
    sortOrder?: number;
}

export type DataspaceScopeSchemaAccess = {
    metadataGroup: string;
}

export type DecisionMatrixDefinitionVersionColumn = {
    columnType: string;
    dataType: string;
    displaySequence: number;
    isWildcardColumn: boolean;
    name: string;
    rangeValue?: string;
    wildcardValue?: string;
}

export type DecisionTableParameter = {
    dataType?: string;
    decimalScale?: number;
    domainObject?: string;
    fieldName: string;
    fieldPath?: string;
    isGroupByField?: boolean;
    isPriorityField?: boolean;
    isRequired?: boolean;
    length?: number;
    operator?: string;
    sequence?: number;
    sortType?: string;
    usage: string;
}

export type DecisionTableSourceCriteria = {
    operator: string;
    sequenceNumber: number;
    sourceFieldName: string;
    value?: string;
    valueType: string;
}

export type DecisionTblDatasetParameter = {
    datasetFieldName: string;
    datasetSourceObject: string;
    fieldName: string;
}

export type FtestDetailWithDeclMd2 = {
    booleanField?: boolean;
    dateField?: Date;
    dateTimeField?: Date;
    doubleField?: number;
    emailField?: string;
    integerField: number;
    staticEnumField?: string;
}

export type FtestDetailWithDeclMd1 = {
    bitVectorFieldBlooper?: boolean;
    bitVectorFieldRound?: boolean;
    bitVectorFieldSquare?: boolean;
    bitVectorFieldTriangle?: boolean;
    booleanField?: boolean;
    dateField?: Date;
    dateTimeField?: Date;
    doubleField?: number;
    emailField?: string;
    enumOrIdField?: string;
    integerField: number;
    staticEnumField?: string;
    subItems: FtestSubDetailWithDeclMd[];
}

export type SchedulingObjectiveParameter = {
    parameterKey: string;
    value?: string;
}

export type EmployeeDataSyncField = {
    description?: string;
    isActive: boolean;
    isDefault: boolean;
    isRequired: boolean;
    sourceField: string;
    targetField: string;
}

export type RelatedRecordAccessFltr = {
    field: string;
    objectType: string;
    operator: string;
    sequenceNumber: number;
    value: string;
}

export type RelatedRecordAccessMap = {
    sourceObjAccessLevel: string;
    sourceObjParticipantRole?: string;
    targetObjAccessLevel: string;
    targetObjParticipantRole?: string;
}

export type ActionableListDatasetColumn = {
    dataDomain?: string;
    dataType?: string;
    displayOrder?: number;
    isDefault?: boolean;
    isGroupedByListDefObj?: boolean;
    isTypeAheadSearchEnabled?: boolean;
    objectName?: string;
    sourceColumnApiName?: string;
    sourceFieldName?: string;
}

export type ActionableListMemberStatus = {
    iconName?: string;
    status?: string;
}

export type SchedulingRuleParameter = {
    schedulingParameterKey: string;
    value?: string;
}

export type DigitalExperienceFolderShares = {
    digitalExperienceFolderShare: DigitalExperienceFolderShare[];
}

export type DigitalExperienceModuleCollection = {
    module: DigitalExperienceModule[];
}

export type ContentAssetRelationships = {
    emailTemplate: ContentAssetLink[];
    insightsApplication: ContentAssetLink[];
    network: ContentAssetLink[];
    organization?: ContentAssetLink;
    workspace: ContentAssetLink[];
}

export type ContentAssetVersions = {
    version: ContentAssetVersion[];
}

export type DiscoveryModelField = {
    isDisparateImpact?: boolean;
    isSensitive?: boolean;
    label: string;
    name: string;
    type: string;
    values: string[];
}

export type DiscoveryModelTransform = {
    config?: string;
    sourceFieldNames: string[];
    targetFieldNames: string[];
    type: string;
}

export type DiscoveryStoryOutcome = {
    failureValue?: string;
    field: string;
    goal: string;
    label: string;
    successValue?: string;
    type: string;
}

export type EclairMap = {
    boundingBoxBottom?: number;
    boundingBoxLeft?: number;
    boundingBoxRight?: number;
    boundingBoxTop?: number;
    mapLabel?: string;
    mapName: string;
    projection: string;
}

export type Attachment = {
    content: string;
    name: string;
}

export type Site = {
    urlPathPrefix?: string;
}

export type DiscoveryDeployedModel = {
    active: boolean;
    aiModel: string;
    classificationThreshold?: number;
    fieldMappings: DiscoveryFieldMap[];
    filters: DiscoveryFilter[];
    label: string;
    name: string;
    prescribableFields: DiscoveryPrescribableField[];
}

export type DiscoveryModelCard = {
    contactEmail?: string;
    contactName?: string;
    label?: string;
    sections?: string;
}

export type DiscoveryGoalOutcome = {
    field: string;
    fieldLabel: string;
    goal: string;
    mappedField?: string;
}

export type DiscoveryFilter = {
    field: string;
    operator: string;
    type?: string;
    values: DiscoveryFilterValue[];
}

export type DuplicateRuleFilter = {
    booleanFilter?: string;
    duplicateRuleFilterItems: DuplicateRuleFilterItem[];
}

export type DuplicateRuleMatchRule = {
    matchRuleSObjectType: string;
    matchingRule: string;
    objectMapping?: ObjectMapping;
}

export type EmailServicesAddress = {
    authorizedSenders?: string;
    developerName: string;
    isActive?: boolean;
    localPart: string;
    runAsUser: string;
}

export type EmbeddedServiceAppointmentSettings = {
    appointmentConfirmImg?: string;
    enabled: boolean;
    homeImg?: string;
    logoImg?: string;
    shouldShowExistingAppointment?: boolean;
    shouldShowNewAppointment?: boolean;
}

export type EmbeddedServiceCustomComponent = {
    componentBundleType?: string;
    customComponent?: string;
    customComponentType?: string;
}

export type EmbeddedServiceCustomLabel = {
    customLabel?: string;
    feature?: string;
    labelKey?: string;
}

export type EmbeddedServiceCustomization = {
    customizationName: string;
    description?: string;
    embeddedServiceResources: EmbeddedServiceResource[];
}

export type EmbeddedServiceFlow = {
    flow: string;
    flowType: string;
    isAuthenticationRequired: boolean;
}

export type EmbeddedServiceForm = {
    displayContext: string;
    embeddedServiceFormFields: EmbeddedServiceFormField[];
    isActive?: boolean;
}

export type EmbeddedServiceLayout = {
    embeddedServiceLayoutRules: EmbeddedServiceLayoutRule[];
    layout: string;
    layoutType?: string;
}

export type EmbeddedServiceMessagingChannel = {
    businessHours?: string;
    isEnabled: boolean;
    messagingChannel: string;
    shouldShowDeliveryReceipts: boolean;
    shouldShowEmojiSelection: boolean;
    shouldShowReadReceipts: boolean;
    shouldShowTypingIndicators: boolean;
    shouldStartNewLineOnEnter: boolean;
}

export type EmbeddedServiceQuickAction = {
    embeddedServiceLiveAgent: string;
    order: number;
    quickActionDefinition: string;
    quickActionType?: string;
}

export type EmbeddedServiceMenuItem = {
    channel?: string;
    channelType?: string;
    customUrl?: string;
    displayOrder?: number;
    embeddedServiceCustomLabels: EmbeddedServiceCustomLabel[];
    iconUrl?: string;
    isDisplayedOnPageLoad: boolean;
    itemName: string;
    osOptionsHideInIOS?: boolean;
    osOptionsHideInLinuxOS?: boolean;
    osOptionsHideInMacOS?: boolean;
    osOptionsHideInOtherOS?: boolean;
    osOptionsHideInWindowsOS?: boolean;
    phoneNumber?: string;
    shouldOpenUrlInSameTab?: boolean;
}

export type EnablementMeasureSourceObjectDefinition = {
    aggregateFieldApiName?: string;
    aggregateFunction: string;
    dateFieldApiName: string;
    displayFieldApiName: string;
    filterLogic?: string;
    filters: EnablementMeasureFilterDefinition[];
    objectApiName: string;
    relatedMeasureObjects: EnablementMeasureRelatedObjectDefinition[];
    userFieldApiName: string;
}

export type EnablementProgramSection = {
    developerName: string;
    name: string;
    sequenceNumber: number;
    tasks: EnablementProgramTask[];
}

export type EnablementProgramTask = {
    customSubCategoryName?: string;
    day: number;
    description: string;
    developerName: string;
    exercise?: EnablementProgramTaskExercise;
    milestone?: EnablementProgramTaskMilestone;
    name: string;
    sequenceNumber: number;
    taskCategory: string;
    taskSubCategory: string;
}

export type EntitlementProcessMilestoneItem = {
    businessHours?: string;
    criteriaBooleanFilter?: string;
    milestoneCompletionCriteria?: MilestoneCompletionCriteria;
    milestoneCriteriaFilterItems: FilterItem[];
    milestoneCriteriaFormula?: string;
    milestoneName?: string;
    minutesCustomClass?: string;
    minutesToComplete?: number;
    successActions: WorkflowActionReference[];
    timeTriggers: EntitlementProcessMilestoneTimeTrigger[];
    useCriteriaStartTime?: boolean;
}

export type EventParameterMap = {
    parameterName: string;
    parameterValue?: string;
}

export type EventLogObject = {
    eventLogName: string;
    isEnabled: boolean;
}

export type ExperienceResources = {
    experienceResource: ExperienceResource[];
}

export type ExperiencePropertyTypeBundleResource = {
    fileName: string;
    filePath: string;
    source: string;
}

export type ExpressionSetStep = {
    actionType?: string;
    advancedCondition?: ExpressionSetAdvancedCondition;
    aggregation?: ExpressionSetAggregation;
    assignment?: ExpressionSetAssignment;
    conditionExpression?: ExpressionSetConditionExpression;
    customElement?: ExpressionSetCustomElement;
    decisionTable?: ExpressionSetDecisionTable;
    description?: string;
    failedExplainerTemplate?: string;
    failedMessageTokenMappings: ExplainabilityMessageTemplateTokenMapping[];
    label: string;
    name: string;
    noResultExplainerTemplate?: string;
    noResultMessageTokenMappings: ExplainabilityMessageTemplateTokenMapping[];
    parentStep?: string;
    passedExplainerTemplate?: string;
    passedMessageTokenMappings: ExplainabilityMessageTemplateTokenMapping[];
    resultIncluded?: boolean;
    sequenceNumber: number;
    shouldExposExecPathMsgOnly?: boolean;
    shouldExposeConditionDetails?: boolean;
    shouldShowExplExternally?: boolean;
    stepType: string;
    subExpression?: ExpressionSetSubExpression;
}

export type ExpressionSetVariable = {
    collection?: boolean;
    dataType: string;
    decimalPlaces?: number;
    description?: string;
    fields: ExpressionSetVariableField[];
    input?: boolean;
    lookupName?: string;
    lookupType?: string;
    name: string;
    objectName?: string;
    output?: boolean;
    resultStep?: string;
    type: string;
    value?: string;
}

export type ExpressionSetObjectAliasField = {
    dataType?: string;
    decimalScale?: number;
    fieldAlias: string;
    sourceFieldName: string;
}

export type ExternalConversationBotDef = {
    displayName?: string;
    externalId: string;
    isActive?: boolean;
    type?: string;
}

export type ExternalAuthIdentityProviderParameter = {
    description?: string;
    parameterName: string;
    parameterType: string;
    parameterValue?: string;
    sequenceNumber?: number;
}

export type ExternalCredentialParameter = {
    authProvider?: string;
    certificate?: string;
    description?: string;
    externalAuthIdentityProvider?: string;
    parameterGroup?: string;
    parameterName: string;
    parameterType: string;
    parameterValue?: string;
    sequenceNumber?: number;
}

export type CustomHttpHeader = {
    description?: string;
    headerFieldName: string;
    headerFieldValue: string;
    isActive?: boolean;
}

export type ExternalServiceOperation = {
    active: boolean;
    name: string;
}

export type ExternalAppIdTokenConfig = {
    idTokenAudience?: string;
    idTokenIncludeAttributes?: boolean;
    idTokenIncludeCustomPermissions?: boolean;
    idTokenIncludeStandardClaims?: boolean;
    idTokenValidityInMinutes?: number;
}

export type ExtlClntAppNotificationType = {
    notificationType: string;
    pushByDefault?: boolean;
}

export type ExtlClntAppOauthPoliciesAttribute = {
    formula: string;
    key: string;
}

export type ExtlClntAppOauthSettingsAttribute = {
    formula: string;
    key: string;
}

export type ExtlClntAppOauthIpRange = {
    description?: string;
    endIpAddress: string;
    startIpAddress: string;
}

export type ExtlClntAppAndroidPushConfig = {
    fcmProject: string;
    serviceAccount: string;
}

export type ExtlClntAppApplePushConfig = {
    applicationBundle?: string;
    certificate?: string;
    environment: string;
    keyIdentifier?: string;
    password?: string;
    signingKey?: string;
    teamIdentifier?: string;
}

export type ExtlClntAppSamlConfigurablePoliciesAttribute = {
    formula: string;
    key: string;
}

export type FieldMappingConfigItem = {
    destinationFieldId?: string;
    destinationObjectId?: string;
    sequence?: number;
    sourceFieldId?: string;
}

export type ObjectMappingItem = {
    mappingType: string;
    objectMapping: ObjectMapping;
}

export type FileTypeDispositionAssignmentBean = {
    behavior: string;
    fileType: string;
    securityRiskFileType: boolean;
}

export type FlexiPageEvent = {
    sourceName: string;
    sourceProperties: FlexiPageEventSourceProperty[];
    sourceType: string;
    targets: FlexiPageEventTarget[];
}

export type FlexiPageRegion = {
    appendable?: string;
    itemInstances: ItemInstance[];
    mode?: string;
    name: string;
    prependable?: string;
    replaceable?: string;
    type: string;
}

export type PlatformActionList = {
    actionListContext: string;
    platformActionListItems: PlatformActionListItem[];
    relatedSourceEntity?: string;
}

export type QuickActionList = {
    quickActionListItems: QuickActionListItem[];
}

export type FlexiPageTemplateInstance = {
    componentType?: string;
    flexipageDataSources: FlexipageDataSource[];
    identifier?: string;
    name: string;
    properties: ComponentInstanceProperty[];
    schemaProperties: FlexiPageCompSchemaPropertyDef[];
}

export type FlowActionCall = FlowNode & {
    actionCallPaths: FlowActionCallPath[];
    actionName?: string;
    actionType?: string;
    connector?: FlowConnector;
    dataTypeMappings: FlowDataTypeMapping[];
    faultConnector?: FlowConnector;
    flowTransactionModel?: string;
    inputParameters: FlowActionCallInputParameter[];
    isWaitUntilCompleted?: boolean;
    nameSegment?: string;
    offset?: number;
    offsetUnit?: string;
    outputParameters: FlowActionCallOutputParameter[];
    storeOutputAutomatically?: boolean;
    timeoutConnector?: FlowConnector;
    versionSegment?: number;
    versionString?: string;
}

export type FlowApexPluginCall = FlowNode & {
    apexClass: string;
    connector?: FlowConnector;
    faultConnector?: FlowConnector;
    inputParameters: FlowApexPluginCallInputParameter[];
    outputParameters: FlowApexPluginCallOutputParameter[];
}

export type FlowAssignment = FlowNode & {
    assignmentItems: FlowAssignmentItem[];
    connector?: FlowConnector;
}

export type FlowChoice = FlowElement & {
    choiceText: string;
    dataType: string;
    userInput?: FlowChoiceUserInput;
    value?: FlowElementReferenceOrValue;
}

export type FlowCollectionProcessor = FlowNode & {
    assignNextValueToReference?: string;
    collectionProcessorType: string;
    collectionReference: string;
    conditionLogic?: string;
    conditions: FlowCondition[];
    connector?: FlowConnector;
    formula?: string;
    limit?: number;
    mapItems: FlowCollectionMapItem[];
    outputSObjectType?: string;
    sortOptions: FlowCollectionSortOption[];
}

export type FlowConstant = FlowElement & {
    dataType: string;
    value?: FlowElementReferenceOrValue;
}

export type FlowCustomError = FlowNode & {
    description?: string;
    connector?: FlowConnector;
    customErrorMessages: FlowCustomErrorMessage[];
}

export type FlowCustomProperty = {
    name: string;
    value?: FlowElementReferenceOrValue;
}

export type FlowDecision = FlowNode & {
    defaultConnector?: FlowConnector;
    defaultConnectorLabel?: string;
    rules: FlowRule[];
}

export type FlowDynamicChoiceSet = FlowElement & {
    collectionReference?: string;
    dataType: string;
    displayField: string;
    filterLogic?: string;
    filters: FlowRecordFilter[];
    limit?: number;
    object: string;
    outputAssignments: FlowOutputFieldAssignment[];
    picklistField?: string;
    picklistObject?: string;
    sortField?: string;
    sortOrder?: string;
    valueField?: string;
}

export type FlowExitRule = FlowElement & {
    conditions: FlowCondition[];
    label: string;
    logicalOperator: string;
    ruleOrder: number;
}

export type FlowExperiment = FlowNode & {
    duration?: number;
    durationUnit?: string;
    paths: FlowExperimentPath[];
    testGroupPercentage?: number;
    type: string;
}

export type FlowFormula = FlowElement & {
    dataType?: string;
    expression: string;
    scale?: number;
}

export type FlowLoop = FlowNode & {
    assignNextValueToReference?: string;
    collectionReference?: string;
    iterationOrder?: string;
    nextValueConnector?: FlowConnector;
    noMoreValuesConnector?: FlowConnector;
}

export type FlowOrchestratedStage = FlowNode & {
    connector?: FlowConnector;
    exitActionInputParameters: FlowStageStepExitActionInputParameter[];
    exitActionName?: string;
    exitActionOutputParameters: FlowStageStepExitActionOutputParameter[];
    exitActionType?: string;
    exitConditionLogic?: string;
    exitConditions: FlowCondition[];
    faultConnector?: FlowConnector;
    stageSteps: FlowStageStep[];
}

export type FlowMetadataValue = {
    name: string;
    value?: FlowElementReferenceOrValue;
}

export type FlowRecordCreate = FlowNode & {
    assignRecordIdToReference?: string;
    connector?: FlowConnector;
    doesUpsert?: boolean;
    doesUpsertAllOrNone?: boolean;
    faultConnector?: FlowConnector;
    filterLogic?: string;
    filters: FlowRecordFilter[];
    inputAssignments: FlowInputFieldAssignment[];
    inputReference?: string;
    object?: string;
    operationMultMatchingRecords?: string;
    operationOneMatchingRecord?: string;
    operationZeroMatchingRecords?: string;
    storeOutputAutomatically?: boolean;
    upsertExternalIdField?: string;
    upsertStandardIdField?: string;
}

export type FlowRecordDelete = FlowNode & {
    connector?: FlowConnector;
    faultConnector?: FlowConnector;
    filterLogic?: string;
    filters: FlowRecordFilter[];
    inputReference?: string;
    object?: string;
}

export type FlowRecordLookup = FlowNode & {
    assignNullValuesIfNoRecordsFound?: boolean;
    connector?: FlowConnector;
    faultConnector?: FlowConnector;
    filterLogic?: string;
    filters: FlowRecordFilter[];
    getFirstRecordOnly?: boolean;
    limit?: FlowElementReferenceOrValue;
    object?: string;
    outputAssignments: FlowOutputFieldAssignment[];
    outputReference?: string;
    queriedFields: string[];
    sortField?: string;
    sortOrder?: string;
    storeOutputAutomatically?: boolean;
}

export type FlowRecordRollback = FlowNode & {
    connector?: FlowConnector;
}

export type FlowRecordUpdate = FlowNode & {
    connector?: FlowConnector;
    faultConnector?: FlowConnector;
    filterLogic?: string;
    filters: FlowRecordFilter[];
    inputAssignments: FlowInputFieldAssignment[];
    inputReference?: string;
    object?: string;
}

export type FlowScreen = FlowNode & {
    actions: FlowScreenAction[];
    allowBack?: boolean;
    allowFinish?: boolean;
    allowPause?: boolean;
    backButtonLabel?: string;
    connector?: FlowConnector;
    fields: FlowScreenField[];
    helpText?: string;
    nextOrFinishButtonLabel?: string;
    pauseButtonLabel?: string;
    pausedText?: string;
    rules: FlowScreenRule[];
    showFooter?: boolean;
    showHeader?: boolean;
    stageReference?: FlowElementReferenceOrValue;
    triggers: FlowScreenTrigger[];
}

export type FlowStage = FlowElement & {
    isActive: boolean;
    label: string;
    stageOrder: number;
}

export type FlowStart = FlowNode & {
    capabilityTypes: FlowCapability[];
    connector?: FlowConnector;
    dataGraph?: string;
    dataTypeMappings: FlowDataTypeMapping[];
    doesRequireRecordChangedToMeetCriteria?: boolean;
    entryType?: string;
    eventName?: string;
    eventType?: string;
    filterFormula?: string;
    filterLogic?: string;
    filters: FlowRecordFilter[];
    flowRunAsUser?: string;
    form?: string;
    inputs: FlowStartInputParameter[];
    object?: string;
    objectContainer?: string;
    publishSegment?: boolean;
    recordTriggerType?: string;
    schedule?: FlowSchedule;
    scheduledPaths: FlowScheduledPath[];
    segment?: string;
    triggerType?: string;
    triggeringDataGraph?: string;
    triggeringDataModelObjectPath?: string;
}

export type FlowStep = FlowNode & {
    connectors: FlowConnector[];
}

export type FlowSubflow = FlowNode & {
    connector?: FlowConnector;
    flowName?: string;
    inputAssignments: FlowSubflowInputAssignment[];
    outputAssignments: FlowSubflowOutputAssignment[];
    storeOutputAutomatically?: boolean;
}

export type FlowTextTemplate = FlowElement & {
    isViewedAsPlainText?: boolean;
    text: string;
}

export type FlowTransform = FlowNode & {
    apexClass?: string;
    connector?: FlowConnector;
    dataType?: string;
    isCollection?: boolean;
    objectType?: string;
    scale?: number;
    storeOutputAutomatically?: boolean;
    transformValues: FlowTransformValue[];
}

export type FlowVariable = FlowElement & {
    apexClass?: string;
    dataType: string;
    isCollection?: boolean;
    isInput?: boolean;
    isOutput?: boolean;
    objectType?: string;
    scale?: number;
    value?: FlowElementReferenceOrValue;
}

export type FlowWait = FlowNode & {
    defaultConnector?: FlowConnector;
    defaultConnectorLabel: string;
    faultConnector?: FlowConnector;
    timeZoneId?: string;
    waitEvents: FlowWaitEvent[];
}

export type FlowCategoryItems = {
    flow: string;
}

export type FlowTestPoint = {
    assertions: FlowTestAssertion[];
    elementApiName: string;
    parameters: FlowTestParameter[];
}

export type FolderShare = {
    accessLevel: string;
    sharedTo: string;
    sharedToType: string;
}

export type ForecastingGroupItem = {
    displayPosition: number;
    sourceApiValue?: string;
}

export type ForecastingTypeObjectListSettings = {
    forecastingObjectListLabelMappings: ForecastingObjectListLabelMapping[];
    forecastingObjectListSelectedSettings: ForecastingObjectListSelectedSettings;
    forecastingObjectListUnselectedSettings: ForecastingObjectListUnselectedSettings;
    forecastingTypeDeveloperName: string;
}

export type ForecastingCategoryMapping = {
    forecastingItemCategoryApiName: string;
    weightedSourceCategories: WeightedSourceCategory[];
}

export type ForecastingDisplayedFamilySettings = {
    productFamily?: string;
}

export type ForecastingSubmissionSettings = {
    allowForecastingSubmissions: boolean;
}

export type ForecastingTypeSettings = {
    active: boolean;
    displayedCategoryApiNames: string[];
    forecastedCategoryApiNames: string[];
    forecastingDateType: string;
    hasProductFamily: boolean;
    isAmount: boolean;
    isAvailable: boolean;
    isQuantity: boolean;
    managerAdjustableCategoryApiNames: string[];
    masterLabel: string;
    name: string;
    opportunityListFieldsLabelMappings: OpportunityListFieldsLabelMapping[];
    opportunityListFieldsSelectedSettings: OpportunityListFieldsSelectedSettings;
    opportunityListFieldsUnselectedSettings: OpportunityListFieldsUnselectedSettings;
    opportunitySplitName?: string;
    ownerAdjustableCategoryApiNames: string[];
    territory2ModelName?: string;
}

export type AdjustmentsSettings = {
    allowExpandedColumns: boolean;
    enableAdjustments: boolean;
    enableOwnerAdjustments: boolean;
}

export type ForecastRangeSettings = {
    beginning: number;
    displaying: number;
    periodType: string;
}

export type QuotasSettings = {
    showQuotas: boolean;
}

export type GenAiPlannerAttr = {
    description?: string;
    label: string;
    name: string;
    parameterName: string;
    parameterType: string;
}

export type GenAiPlannerAttrMapping = {
    attributeName: string;
    attributeType: string;
    constantValue?: string;
    mappingTargetName?: string;
    mappingType: string;
}

export type GenAiPlannerFunctionDef = {
    genAiCustomizedPlugin?: GenAiLocalPlugin;
    genAiFunctionName?: string;
    genAiPluginName?: string;
}

export type GenAiPlannerRuleExpr = {
    conditions: GenAiPlannerRuleExprCondition[];
    expression?: string;
    expressionLabel: string;
    expressionName: string;
    expressionType?: string;
}

export type GenAiPlannerRuleExprAsgn = {
    ruleExpressionName: string;
    targetName: string;
    targetType: string;
}

export type GenAiPlannerRuleExprDef = {
    conditions: GenAiPlannerRuleExprCondition[];
    expression?: string;
    expressionLabel: string;
    expressionName: string;
    expressionType?: string;
}

export type GenAiPluginFunctionDef = {
    functionName: string;
}

export type GenAiPromptTemplateVersion = {
    classification?: string;
    content?: string;
    defaultLanguageScope?: string;
    description?: string;
    inputs: GenAiPromptTemplateInput[];
    keywords?: string;
    primaryModel?: string;
    status?: string;
    templateDataProviders: GenAiPromptTemplateDataProvider[];
    versionIdentifier?: string;
    versionNumber?: number;
}

export type ValueTranslation = {
    masterLabel: string;
    translation?: string;
}

export type IframeWhiteListUrl = {
    context: string;
    url?: string;
}

export type InboundNetworkConnProperty = {
    propertyName: string;
    propertyValue: string;
}

export type IntegrationProviderAttr = {
    dataType: string;
    dateTimeValue?: Date;
    dateValue?: Date;
    description?: string;
    developerName: string;
    doubleValue?: number;
    integerValue?: number;
    label: string;
    percentageValue?: number;
    required: boolean;
    stringValue?: string;
    trueOrFalseValue?: boolean;
}

export type Keyword = {
    keyword: string;
}

export type KnowledgeAnswerSettings = {
    assignTo?: string;
    defaultArticleType?: string;
    enableArticleCreation?: boolean;
}

export type KnowledgeCaseSettings = {
    articlePDFCreationProfile?: string;
    articlePublicSharingCommunities?: KnowledgeCommunitiesSettings;
    articlePublicSharingSites?: KnowledgeSitesSettings;
    articlePublicSharingSitesChatterAnswers?: KnowledgeSitesSettings;
    assignTo?: string;
    customizationClass?: string;
    defaultContributionArticleType?: string;
    editor?: string;
    enableArticleCreation?: boolean;
    enableArticlePublicSharingSites?: boolean;
    enableCaseDataCategoryMapping?: boolean;
    useProfileForPDFCreation?: boolean;
}

export type KnowledgeLanguageSettings = {
    language: KnowledgeLanguage[];
}

export type KnowledgeSuggestedArticlesSettings = {
    caseFields?: KnowledgeCaseFieldsSettings;
    useSuggestedArticlesForCase?: boolean;
    workOrderFields?: KnowledgeWorkOrderFieldsSettings;
    workOrderLineItemFields?: KnowledgeWorkOrderLineItemFieldsSettings;
}

export type CustomConsoleComponents = {
    primaryTabComponents?: PrimaryTabComponents;
    subtabComponents?: SubtabComponents;
}

export type FeedLayout = {
    autocollapsePublisher?: boolean;
    compactFeed?: boolean;
    feedFilterPosition?: string;
    feedFilters: FeedLayoutFilter[];
    fullWidthFeed?: boolean;
    hideSidebar?: boolean;
    highlightExternalFeedItems?: boolean;
    leftComponents: FeedLayoutComponent[];
    rightComponents: FeedLayoutComponent[];
    useInlineFiltersInConsole?: boolean;
}

export type LayoutSection = {
    customLabel?: boolean;
    detailHeading?: boolean;
    editHeading?: boolean;
    label?: string;
    layoutColumns: LayoutColumn[];
    style: string;
}

export type MiniLayout = {
    fields: string[];
    relatedLists: RelatedListItem[];
}

export type RelatedContent = {
    relatedContentItems: RelatedContentItem[];
}

export type RelatedListItem = {
    customButtons: string[];
    excludeButtons: string[];
    fields: string[];
    quickActions: string[];
    relatedList: string;
    sortField?: string;
    sortOrder?: string;
}

export type SummaryLayout = {
    masterLabel: string;
    sizeX: number;
    sizeY?: number;
    sizeZ?: number;
    summaryLayoutItems: SummaryLayoutItem[];
    summaryLayoutStyle: string;
}

export type LetterheadLine = {
    color: string;
    height: number;
}

export type LetterheadHeaderFooter = {
    backgroundColor: string;
    height: number;
    horizontalAlignment?: string;
    logo?: string;
    verticalAlignment?: string;
}

export type LicensedCustomPermissions = {
    customPermission: string;
    licenseDefinition: string;
}

export type LifeSciConfigAssignment = {
    assignedTo: string;
    assignmentLevel: string;
}

export type LifeSciConfigFieldValue = {
    dataType: string;
    dateTimeValue?: Date;
    dateValue?: Date;
    fieldName: string;
    fieldValue?: string;
    hasBooleanValue?: boolean;
    integerValue?: number;
    longTextValue?: string;
    numberValue?: number;
    objectValue?: string;
    phoneValue?: string;
    picklistValue?: string;
    textValue?: string;
    urlValue?: string;
}

export type LightningBoltFeatures = {
    description?: string;
    order: number;
    title: string;
}

export type LightningBoltImages = {
    image: string;
    order: number;
}

export type LightningBoltItems = {
    name: string;
    type: string;
}

export type Capabilities = {
    capability: string[];
}

export type LwcResources = {
    lwcResource: LwcResource[];
}

export type Targets = {
    target: string[];
}

export type LightningMessageField = {
    description?: string;
    fieldName: string;
}

export type LightningTypeBundleResource = {
    fileName: string;
    filePath: string;
    fileType: string;
    source: string;
}

export type AgentConfigAssignments = {
    profiles?: AgentConfigProfileAssignments;
    users?: AgentConfigUserAssignments;
}

export type SupervisorAgentConfigSkills = {
    skill: string[];
}

export type AgentConfigButtons = {
    button: string[];
}

export type AgentConfigSkills = {
    skill: string[];
}

export type LiveChatButtonDeployments = {
    deployment: string[];
}

export type LiveChatButtonSkills = {
    skill: string[];
}

export type LiveChatDeploymentDomainWhitelist = {
    domain: string[];
}

export type LoyaltyProgramProcess = {
    description?: string;
    executionType?: string;
    journalSubType?: string;
    journalType?: string;
    loyaltyTierGroup?: string;
    parameters: LoyaltyProgramProcessParameter[];
    processName: string;
    processType: string;
    rules: LoyaltyProgramProcessRule[];
    status?: string;
}

export type MLField = {
    entity?: string;
    entityName?: string;
    field?: string;
    fieldName?: string;
    relatedField?: MLField;
    relationType?: string;
    type: string;
}

export type MLFilter = {
    filterName: string;
    lhFilter?: MLFilter;
    lhPredictionField?: string;
    lhType?: string;
    lhUnit?: string;
    lhValue?: string;
    operation: string;
    rhFilter?: MLFilter;
    rhPredictionField?: string;
    rhType?: string;
    rhUnit?: string;
    rhValue?: string;
    sortOrder?: number;
}

export type ManagedContentNodeType = {
    helpText?: string;
    isLocalizable?: boolean;
    isRequired?: boolean;
    nodeLabel: string;
    nodeName: string;
    nodeType: string;
    placeholderText?: string;
}

export type AudienceContactPoint = {
    audienceDefinition: string;
    audienceVersion?: number;
    contactPointType: string;
    slotName: string;
}

export type MarketAudienceField = {
    audienceDefinition: string;
    audienceVersion: number;
    fieldDataType: string;
    fieldDescription?: string;
    fieldName: string;
    slotName: string;
}

export type MarketingAppExtAction = {
    actionName: string;
    actionParams?: string;
    actionSchema?: string;
    actionSelector: string;
    apiName: string;
    description?: string;
    isActive?: boolean;
    marketingAppExtension: string;
}

export type MatchingRuleItem = {
    blankValueBehavior?: string;
    fieldName: string;
    matchingMethod: string;
}

export type MessagingAutoResponse = {
    autoResponseContentType: string;
    language?: string;
    messageDefinitionName?: string;
    response?: string;
    responseTimeoutInMins?: number;
    type: string;
}

export type MessagingChannelUsage = {
    channelConsentType?: string;
    deploymentType: string;
}

export type MessagingChannelCustomParameter = {
    actionParameterMappings: MessagingChannelActionParameterMapping[];
    externalParameterName: string;
    masterLabel: string;
    maxLength?: number;
    name: string;
    parameterDataType: string;
    parameterValueMappings: MessagingChannelParameterValueMapping[];
}

export type EmbeddedMessagingChannel = {
    anonymousUserJwtExpirationTime?: number;
    authMode: string;
    connectedApp?: string;
    isAttachmentUploadEnabled?: boolean;
    isEstimatedWaitTimeEnabled?: boolean;
    isFallbackMessageEnabled?: boolean;
    isSaveTranscriptEnabled?: boolean;
    messagingAuthorizations: MessagingAuthorization[];
    verifiedUserJwtExpirationTime?: number;
}

export type MessagingKeyword = {
    keyword: string[];
    keywordType: string;
    language: string;
}

export type MessagingChannelStandardParameter = {
    actionParameterMappings: MessagingChannelActionParameterMapping[];
    parameterType: string;
    parameterValueMappings: MessagingChannelParameterValueMapping[];
}

export type MfgProgramTemplateItem = {
    advAccountForecastSet?: string;
    description?: string;
    templateItemName: string;
    transformationDisplayOrder: number;
    transformationType: string;
}

export type MlIntent = {
    description?: string;
    developerName: string;
    label: string;
    mlIntentUtterances: MlIntentUtterance[];
    relatedMlIntents: MlRelatedIntent[];
}

export type MlSlotClass = {
    dataType: string;
    description?: string;
    developerName: string;
    extractionRegex?: string;
    extractionType?: string;
    label: string;
    mlSlotClassValues: MlSlotClassValue[];
}

export type MlModelInput = {
    isDisparateImpact?: boolean;
    isSegmentField?: boolean;
    isSensitive?: boolean;
    label: string;
    name: string;
    position?: number;
    type: string;
    values: string[];
}

export type MlModelOutput = {
    label: string;
    name: string;
    type: string;
}

export type MlParameterOverride = {
    continuousValue?: number;
    discreteValue?: string;
    parameter: string;
}

export type MlParameterDefinition = {
    continuousDefault?: number;
    continuousMaximum?: number;
    continuousMinimum?: number;
    description?: string;
    discreteDefault?: string;
    discreteValues: string[];
    modelCapabilities: string[];
    name: string;
    subtype?: string;
    type: string;
}

export type MlModelEndpoint = {
    inputSchema?: string;
    label: string;
    name: string;
    outputSchema?: string;
    outputs: MlModelOutputEndpoint[];
    type?: string;
    url: string;
}

export type DashboardMobileSettings = {
    enableDashboardIPadApp?: boolean;
}

export type ModeratedEntityField = {
    entityName: string;
    fieldName?: string;
    keywordList?: string;
}

export type ModuleDependencies = {
    moduleRef: ModuleRef[];
}

export type PackageTypeMembers = {
    members: string[];
    name: string;
}

export type NamedCredentialParameter = {
    certificate?: string;
    description?: string;
    externalCredential?: string;
    globalNamedPrincipalCredential?: boolean;
    managedFeatureEnabledCallout?: boolean;
    outboundNetworkConnection?: string;
    parameterName: string;
    parameterType: string;
    parameterValue?: string;
    readOnlyNamedCredential?: boolean;
    sequenceNumber?: number;
    systemUserNamedCredential?: boolean;
}

export type NavigationMenuItem = {
    defaultListViewId?: string;
    label: string;
    menuItemBranding?: NavigationMenuItemBranding;
    position: number;
    publiclyAvailable?: boolean;
    subMenu?: NavigationSubMenu;
    target?: string;
    targetPreference?: string;
    type: string;
}

export type Branding = {
    loginFooterText?: string;
    loginLogo?: string;
    pageFooter?: string;
    pageHeader?: string;
    primaryColor: string;
    primaryComplementColor: string;
    quaternaryColor: string;
    quaternaryComplementColor: string;
    secondaryColor: string;
    tertiaryColor: string;
    tertiaryComplementColor: string;
    zeronaryColor: string;
    zeronaryComplementColor: string;
}

export type CommunityRoles = {
    customerUserRole?: string;
    employeeUserRole?: string;
    partnerUserRole?: string;
}

export type NetworkAuthApiSettings = {
    doesForgotPasswordRequireAuth?: boolean;
    doesPasswordLoginRequireAuth?: boolean;
    doesPwdlessLoginRequireAuth?: boolean;
    doesRegistrationRequireAuth?: boolean;
    emailTmplsAllowlist: NetworkEmailTmplAllowlist[];
    headlessDiscoveryExecutionUser?: string;
    headlessDiscoveryHandler?: string;
    isFirstPartyAppsAllowed?: boolean;
    isForgotPwdAllowed?: boolean;
    isForgotPwdEmailTemplateAllowlistingEnabled?: boolean;
    isHeadlessUserRegistrationAllowed?: boolean;
    isPwdlessLoginAllowed?: boolean;
    isRecaptchaRequiredForgotPwd?: boolean;
    isRecaptchaRequiredPwdlessLogin?: boolean;
    isRecaptchaRequiredRgstr?: boolean;
    isUniversalClientRgstrAllowed?: boolean;
    isUserDisambiguationAllowedForgotPwd?: boolean;
    isUserDisambiguationAllowedUsernamePwd?: boolean;
    maxPasswordResetAttempts?: number;
    recaptchaScoreThreshold?: number;
    recaptchaSecretKey?: string;
    registrationExecutionUser?: string;
    registrationHandler?: string;
    registrationUserDefaultProfile?: string;
}

export type NetworkMemberGroup = {
    permissionSet: string[];
    profile: string[];
}

export type NetworkPageOverride = {
    changePasswordPageOverrideSetting?: string;
    forgotPasswordPageOverrideSetting?: string;
    homePageOverrideSetting?: string;
    loginPageOverrideSetting?: string;
    selfRegProfilePageOverrideSetting?: string;
}

export type RecommendationAudience = {
    recommendationAudienceDetails: RecommendationAudienceDetail[];
}

export type RecommendationDefinition = {
    recommendationDefinitionDetails: RecommendationDefinitionDetail[];
}

export type ReputationLevelDefinitions = {
    level: ReputationLevel[];
}

export type ReputationPointsRules = {
    pointsRule: ReputationPointsRule[];
}

export type NetworkTabSet = {
    customTab: string[];
    defaultTab: string;
    standardTab: string[];
}

export type NotificationTypeSettings = {
    appSettings: AppSettings[];
    notificationChannels?: NotificationChannels;
    notificationType: string;
}

export type OauthCustomScopeApp = {
    connectedApp: string;
}

export type OauthTokenExchHandlerApp = {
    apexExecutionUser: string;
    connectedApp?: string;
    externalClientApp?: string;
    isDefault: boolean;
}

export type FieldSourceTargetMap = {
    creationType?: string;
    filterApplied?: boolean;
    filterOperationType?: string;
    filterValue?: string;
    isSourceFormula?: boolean;
    sourceField: string;
    sourceFormula?: string;
    targetField: string;
}

export type OcrSampleDocumentField = {
    cellColumnNumber?: number;
    cellColumnSpanValue?: number;
    cellRowNumber?: number;
    cellRowSpanValue?: number;
    fieldLabelMaxX?: number;
    fieldLabelMaxY?: number;
    fieldLabelMinX?: number;
    fieldLabelMinY?: number;
    fieldValueName?: string;
    isAutoExtractedValue?: boolean;
    keyContent?: string;
    ocrSampleDocument: string;
    ocrSampleDocumentPage?: string;
    ocrSampleDocumentPageItem?: OcrSampleDocumentPageItem;
}

export type OcrSampleDocumentPage = {
    ocrSampleDocument: string;
    ocrSampleDocumentPageItems: OcrSampleDocumentPageItem[];
    pageHeight?: number;
    pageNumber: number;
}

export type OcrTargetObject = {
    ocrTargetObjFieldMappings: OcrTargetObjFieldMapping[];
    targetObject: string;
    targetObjectRecordType?: string;
}

export type OcrTemplateSampleDocument = {
    ocrSampleDocument?: string;
}

export type OmniDataTransformItem = {
    defaultValue?: string;
    disabled?: boolean;
    filterDataType?: string;
    filterGroup?: number;
    filterOperator?: string;
    filterValue?: string;
    formulaConverted?: string;
    formulaExpression?: string;
    formulaResultPath?: string;
    formulaSequence?: number;
    globalKey?: string;
    inputFieldName?: string;
    inputObjectName?: string;
    inputObjectQuerySequence?: number;
    linkedFieldName?: string;
    linkedObjectSequence?: number;
    lookupByFieldName?: string;
    lookupObjectName?: string;
    lookupReturnedFieldName?: string;
    migrationAttribute?: string;
    migrationCategory?: string;
    migrationGroup?: string;
    migrationKey?: string;
    migrationPattern?: string;
    migrationProcess?: string;
    migrationType?: string;
    migrationValue?: string;
    name: string;
    omniDataTransformation?: string;
    omniDataTransformationId?: string;
    outputCreationSequence?: number;
    outputFieldFormat?: string;
    outputFieldName?: string;
    outputObjectName?: string;
    requiredForUpsert?: boolean;
    transformValuesMappings?: string;
    upsertKey?: boolean;
}

export type OmniProcessElement = {
    childElements: OmniProcessElement[];
    description?: string;
    designerCustomizationType?: string;
    discoveryFrameworkUsageType?: string;
    embeddedOmniScriptKey?: string;
    isActive?: boolean;
    isOmniScriptEmbeddable?: boolean;
    level?: number;
    name: string;
    omniProcessVersionNumber?: number;
    parentElementName?: string;
    parentElementType?: string;
    propertySetConfig?: string;
    sequenceNumber?: number;
    type?: string;
    uniqueIndex?: string;
}

export type AssessmentDefinitionMetadata = {
    approvalDateTime?: Date;
    displayType?: string;
    effectiveFromDate?: Date;
    effectiveToDate?: Date;
    lastRevisedDateTime?: Date;
    performerType?: string;
    purpose?: string;
}

export type OmniAssessmentTaskMetadata = {
    name: string;
    status: string;
    uniqueName: string;
}

export type OmniSupervisorConfigAction = {
    actionName: string;
    actionTab: string;
    customActionFlow?: string;
    displayOrder: number;
}

export type OmniSupervisorConfigGroup = {
    group: string;
}

export type OmniSupervisorConfigProfile = {
    profile: string;
}

export type OmniSupervisorConfigQueue = {
    queue: string;
}

export type OmniSupervisorConfigSkill = {
    skill: string;
}

export type OmniSupervisorConfigTab = {
    displayOrder: number;
    flexiPage?: string;
    tabType: string;
}

export type FindSimilarOppFilter = {
    similarOpportunitiesDisplayColumns: string[];
    similarOpportunitiesMatchFields: string[];
}

export type OrchestrationContextDataset = {
    datasetType: string;
    orchestrationDataset: string;
}

export type OrchestrationContextEvent = {
    eventType: string;
    orchestrationEvent: string;
    platformEvent: string;
    platformEventPrimaryKey: string;
}

export type OutboundNetworkConnProperty = {
    propertyName: string;
    propertyValue: string;
}

export type ProfileObjectPermissions = {
    allowCreate?: boolean;
    allowDelete?: boolean;
    allowEdit?: boolean;
    allowRead?: boolean;
    customizeSetup?: boolean;
    deleteSetup?: boolean;
    modifyAllRecords?: boolean;
    object: string;
    viewAllFields?: boolean;
    viewAllRecords?: boolean;
    viewSetup?: boolean;
}

export type PathAssistantStep = {
    fieldNames: string[];
    info?: string;
    picklistValueName: string;
}

export type PermissionSetApplicationVisibility = {
    application: string;
    visible: boolean;
}

export type PermissionSetApexClassAccess = {
    apexClass: string;
    enabled: boolean;
}

export type PermissionSetCustomMetadataTypeAccess = {
    enabled: boolean;
    name: string;
}

export type PermissionSetCustomPermissions = {
    enabled: boolean;
    name: string;
}

export type PermissionSetCustomSettingAccess = {
    enabled: boolean;
    name: string;
}

export type DataspaceScopeAccess = {
    customizeActivationDefinitions?: boolean;
    customizeAllDefinitions?: boolean;
    customizeCalculatedInsightDefinitions?: boolean;
    customizeDataActionDefinitions?: boolean;
    customizeDataApplicationDefinitions: boolean;
    customizeDataShareDefinitions: boolean;
    customizeFTestDataspaceScopedDefinition: boolean;
    customizeIdentityResolutionDefinitions?: boolean;
    customizeMLPredictionDefinitions: boolean;
    customizeSegmentationDefinitions?: boolean;
    customizeSemanticSearchDefinitions: boolean;
    dataAccessLevel?: string;
    dataspaceScope: string;
    viewActivationDefinitions?: boolean;
    viewCalculatedInsightDefinitions?: boolean;
    viewDataActionDefinitions?: boolean;
    viewDataApplicationDefinitions: boolean;
    viewDataShareDefinitions: boolean;
    viewFTestDataspaceScopedDefinition: boolean;
    viewIdentityResolutionDefinitions?: boolean;
    viewMLPredictionDefinitions: boolean;
    viewSegmentationDefinitions?: boolean;
    viewSemanticSearchDefinitions: boolean;
}

export type PermissionSetEmailRoutingAddressAccess = {
    enabled: boolean;
    name: string;
}

export type PermissionSetExternalCredentialPrincipalAccess = {
    enabled: boolean;
    externalCredentialPrincipal: string;
}

export type PermissionSetExternalDataSourceAccess = {
    enabled: boolean;
    externalDataSource: string;
}

export type PermissionSetFieldPermissions = {
    editable: boolean;
    field: string;
    readable?: boolean;
}

export type PermissionSetFlowAccess = {
    enabled: boolean;
    flow: string;
}

export type PermissionSetObjectPermissions = {
    allowCreate: boolean;
    allowDelete: boolean;
    allowEdit: boolean;
    allowRead: boolean;
    customizeSetup?: boolean;
    deleteSetup?: boolean;
    modifyAllRecords: boolean;
    object: string;
    viewAllFields?: boolean;
    viewAllRecords: boolean;
    viewSetup?: boolean;
}

export type PermissionSetApexPageAccess = {
    apexPage: string;
    enabled: boolean;
}

export type PermissionSetRecordTypeVisibility = {
    recordType: string;
    visible: boolean;
}

export type PermissionSetTabSetting = {
    tab: string;
    visibility: string;
}

export type PermissionSetUserPermission = {
    enabled: boolean;
    name: string;
}

export type PermissionSetLicenseDefinitionCustomPermission = {
    name: string;
}

export type PlatformCachePartitionType = {
    allocatedCapacity: number;
    allocatedPartnerCapacity: number;
    allocatedPurchasedCapacity: number;
    allocatedTrialCapacity: number;
    cacheType: string;
}

export type EnrichedField = {
    name: string;
}

export type IncludedFeature = {
    name: string;
    settingOverrides: SettingOverride[];
}

export type SettingItem = {
    durableId: string;
    editable?: boolean;
    ignoreQuantity?: boolean;
    namespace?: string;
    value: string;
}

export type SettingUsageDefinition = {
    frequencyDefault: string;
    hasRolloverDefault?: boolean;
    isPersistentResource: boolean;
    overageGraceDefault?: number;
    setting: string;
}

export type PresenceConfigAssignments = {
    profiles?: PresenceConfigProfileAssignments;
    users?: PresenceConfigUserAssignments;
}

export type PriceRuleAction = {
    conditionVariable?: string;
    priceRuleActionItems: PriceRuleActionItem[];
    sequence: number;
    targetObject?: string;
    type: string;
}

export type PriceRuleCondition = {
    accumulateResultCondInput?: string;
    accumulateResultCondInputType?: string;
    accumulateResultOperator?: string;
    aggregatedConditionVariable?: string;
    aggregationType?: string;
    conditionVariable?: string;
    matchType: string;
    priceRuleConditionFilters: PriceRuleConditionFilter[];
    scope: string;
    sequence: number;
    targetObject: string;
}

export type PriceRuleExecutionStage = {
    stage: string;
}

export type PrcShtAttrDefinition = {
    columnLabel?: string;
    columnName: string;
    columnType: string;
    isRangeColumn: boolean;
}

export type PricingRecipeTableMapping = {
    fileBasedDecisionTableName?: string;
    isInternal?: boolean;
    lookupTable?: Metadata;
    lookupTableDeveloperName?: string;
    pricingComponentType?: string;
    pricingProcedureOutputMapList: PricingProcedureOutputMap[];
    pricingRecipe: string;
}

export type ProductAttributeSetItem = {
    field: string;
    sequence: number;
}

export type ProfileApplicationVisibility = {
    application: string;
    default: boolean;
    visible: boolean;
}

export type ProfileCategoryGroupVisibility = {
    dataCategories: string[];
    dataCategoryGroup: string;
    visibility: string;
}

export type ProfileApexClassAccess = {
    apexClass: string;
    enabled: boolean;
}

export type ProfileCustomMetadataTypeAccess = {
    enabled: boolean;
    name: string;
}

export type ProfileCustomPermissions = {
    enabled: boolean;
    name: string;
}

export type ProfileCustomSettingAccess = {
    enabled: boolean;
    name: string;
}

export type ProfileExternalDataSourceAccess = {
    enabled: boolean;
    externalDataSource: string;
}

export type ProfileFieldLevelSecurity = {
    editable: boolean;
    field: string;
    readable?: boolean;
}

export type ProfileFlowAccess = {
    enabled: boolean;
    flow: string;
}

export type ProfileLayoutAssignment = {
    layout: string;
    recordType?: string;
}

export type LoginFlow = {
    flow?: string;
    flowType: string;
    friendlyName: string;
    uiLoginFlowType: string;
    useLightningRuntime?: boolean;
    vfFlowPage?: string;
    vfFlowPageTitle?: string;
}

export type ProfileLoginHours = {
    fridayEnd?: string;
    fridayStart?: string;
    mondayEnd?: string;
    mondayStart?: string;
    saturdayEnd?: string;
    saturdayStart?: string;
    sundayEnd?: string;
    sundayStart?: string;
    thursdayEnd?: string;
    thursdayStart?: string;
    tuesdayEnd?: string;
    tuesdayStart?: string;
    wednesdayEnd?: string;
    wednesdayStart?: string;
}

export type ProfileLoginIpRange = {
    description?: string;
    endAddress: string;
    startAddress: string;
}

export type ProfileApexPageAccess = {
    apexPage: string;
    enabled: boolean;
}

export type ProfileActionOverride = {
    actionName: string;
    content?: string;
    formFactor: string;
    pageOrSobjectType: string;
    recordType?: string;
    type: string;
}

export type ProfileRecordTypeVisibility = {
    default: boolean;
    personAccountDefault?: boolean;
    recordType: string;
    visible: boolean;
}

export type ProfileTabVisibility = {
    tab: string;
    visibility: string;
}

export type ProfileUserPermission = {
    enabled: boolean;
    name: string;
}

export type PromptVersion = {
    actionButtonLabel?: string;
    actionButtonLink?: string;
    body: string;
    customApplication?: string;
    delayDays?: number;
    description?: string;
    dismissButtonLabel?: string;
    displayPosition?: string;
    displayType: string;
    elementRelativePosition?: string;
    endDate?: Date;
    experience?: string;
    experienceContext?: string;
    header?: string;
    icon?: string;
    image?: string;
    imageAltText?: string;
    imageLink?: string;
    imageLocation?: string;
    indexWithIsPublished?: string;
    indexWithoutIsPublished?: string;
    isPublished?: boolean;
    masterLabel: string;
    publishedByUser?: string;
    publishedDate?: Date;
    referenceElementContext?: string;
    shouldDisplayActionButton?: boolean;
    shouldIgnoreGlobalDelay?: boolean;
    startDate?: Date;
    stepNumber?: number;
    targetAppDeveloperName?: string;
    targetAppNamespacePrefix?: string;
    targetPageKey1?: string;
    targetPageKey2?: string;
    targetPageKey3?: string;
    targetPageKey4?: string;
    targetPageType?: string;
    targetRecordType?: string;
    themeColor?: string;
    themeSaturation?: string;
    timesToDisplay?: number;
    title: string;
    uiFormulaRule?: UiFormulaRule;
    userAccess?: string;
    userProfileAccess?: string;
    versionNumber: number;
    videoLink?: string;
}

export type PublicKeyCertificateSetKey = {
    publicKeyCertificate: string;
}

export type QueueMembers = {
    publicGroups?: PublicGroups;
    roleAndSubordinates?: RoleAndSubordinates;
    roleAndSubordinatesInternal?: RoleAndSubordinatesInternal;
    roles?: Roles;
    users?: Users;
}

export type QueueSobject = {
    sobjectType: string;
}

export type QueueRoutingConfigSkill = {
    skill?: string;
}

export type FieldOverride = {
    field: string;
    formula?: string;
    literalValue?: string;
}

export type QuickActionLayout = {
    layoutSectionStyle: string;
    quickActionLayoutColumns: QuickActionLayoutColumn[];
}

export type QuickActionParameters = {
    name: string;
    type: string;
    value?: string;
}

export type QuickActionSendEmailOptions = {
    defaultEmailTemplateName?: string;
    ignoreDefaultEmailTemplateSubject: boolean;
}

export type RealTimeEvent = {
    entityName: string;
    isEnabled: boolean;
}

export type StrategyAction = {
    action: string;
    argument: StrategyActionArg[];
    description?: string;
    label?: string;
    name: string;
    type: string;
}

export type StrategyNodeAiLoad = StrategyNodeUnionBase & {
    acceptanceLabel: string;
    actionReference: string;
    descriptionField: string;
    recommendationDefinitionDevName: string;
    rejectionLabel?: string;
    titleField: string;
}

export type StrategyNodeAiSort = StrategyNodeUnionBase

export type StrategyNodeFilter = StrategyNodeUnionBase & {
    expression: string;
}

export type StrategyNodeIf = StrategyNodeUnionBase & {
    childNodeExpression: IfExpression[];
    onlyFirstMatch?: boolean;
}

export type StrategyNodeInvocableAction = StrategyNodeUnionBase & {
    action: string;
    argument: StrategyNodeInvocableActionArg[];
    isGenerator: boolean;
    type: string;
}

export type StrategyNodeMap = StrategyNodeUnionBase & {
    mapExpression: MapExpression[];
}

export type StrategyNodeExclusive = StrategyNodeUnionBase

export type StrategyNodeRecommendationLimit = StrategyNodeUnionBase & {
    filterMode: string[];
    lookbackDuration?: number;
    maxRecommendationCount?: number;
}

export type StrategyNodeRecommendationLoad = StrategyNodeUnionBase & {
    condition: RecommendationLoadCondition[];
    conditionLogic?: string;
    object: string;
    sortField: StrategyNodeSortField[];
}

export type StrategyNodeSort = StrategyNodeUnionBase & {
    field: StrategyNodeSortField[];
}

export type StrategyNodeUnion = StrategyNodeUnionBase

export type RecordActionDeploymentChannel = {
    channel: string;
    channelItems: RecordActionDefaultItem[];
    isAutopopEnabled?: boolean;
}

export type RecordActionDeploymentContext = {
    entityName: string;
    recommendationStrategy?: string;
}

export type RecordActionRecommendation = {
    defaultStrategy?: string;
    hasDescription: boolean;
    hasImage: boolean;
    hasRealtimeRecommendations?: boolean;
    hasRejectAction: boolean;
    hasTitle: boolean;
    maxDisplayRecommendations: number;
    shouldLaunchActionOnReject: boolean;
}

export type RecordActionSelectableItem = {
    action: string;
    frequentActionSequenceNbr?: number;
    isFrequentAction?: boolean;
    type: string;
}

export type RecordAggregationObject = {
    associatedObject: string;
    developerName?: string;
    filterLogic?: string;
    masterLabel: string;
    recordAggregationJoinCondition: RecordAggregationJoinCondition[];
    recordAggregationObjectFilter: RecordAggregationObjectFilter[];
}

export type RelationshipGraphDefVersion = {
    graphDefinition: string;
    graphType: string;
}

export type ReportAggregateFilter = {
    aggregate: string;
    operator: string;
    value: string;
}

export type ReportAggregate = {
    acrossGroupingContext?: string;
    calculatedFormula: string;
    datatype: string;
    description?: string;
    developerName: string;
    downGroupingContext?: string;
    isActive: boolean;
    isCrossBlock?: boolean;
    masterLabel: string;
    reportType?: string;
    scale?: number;
}

export type ReportBlockInfo = {
    aggregateReferences: ReportAggregateReference[];
    blockId: string;
    joinTable: string;
}

export type ReportBucketField = {
    bucketType: string;
    developerName: string;
    masterLabel: string;
    nullTreatment?: string;
    otherBucketLabel?: string;
    sourceColumnName: string;
    useOther?: boolean;
    values: ReportBucketFieldValue[];
}

export type ReportChart = {
    backgroundColor1?: string;
    backgroundColor2?: string;
    backgroundFadeDir?: string;
    chartSummaries: ChartSummary[];
    chartType: string;
    enableHoverLabels?: boolean;
    expandOthers?: boolean;
    groupingColumn?: string;
    legendPosition?: string;
    location?: string;
    secondaryGroupingColumn?: string;
    showAxisLabels?: boolean;
    showPercentage?: boolean;
    showTotal?: boolean;
    showValues?: boolean;
    size?: string;
    sortLegendValues?: boolean;
    sortReportCharts?: boolean;
    summaryAxisManualRangeEnd?: number;
    summaryAxisManualRangeStart?: number;
    summaryAxisRange?: string;
    textColor?: string;
    textSize?: number;
    title?: string;
    titleColor?: string;
    titleSize?: number;
}

export type ReportColorRange = {
    aggregate?: string;
    columnName: string;
    highBreakpoint?: number;
    highColor: string;
    lowBreakpoint?: number;
    lowColor: string;
    midColor: string;
}

export type ReportColumn = {
    aggregateTypes: string[];
    field: string;
    reverseColors?: boolean;
    showChanges?: boolean;
}

export type ReportCrossFilter = {
    criteriaItems: ReportFilterItem[];
    operation: string;
    primaryTableColumn: string;
    relatedTable: string;
    relatedTableJoinColumn: string;
}

export type ReportCustomDetailFormula = {
    calculatedFormula: string;
    dataType: string;
    description?: string;
    developerName: string;
    label: string;
    scale: number;
}

export type ReportDataCategoryFilter = {
    dataCategory: string;
    dataCategoryGroup: string;
    operator: string;
}

export type ReportFilter = {
    booleanFilter?: string;
    criteriaItems: ReportFilterItem[];
    language?: string;
}

export type ReportFormattingRule = {
    aggregate?: string;
    columnName: string;
    values: ReportFormattingRuleValue[];
}

export type ReportGrouping = {
    aggregateType?: string;
    dateGranularity?: string;
    field: string;
    sortByName?: string;
    sortOrder: string;
    sortType?: string;
}

export type ReportHistoricalSelector = {
    snapshot: string[];
}

export type ReportParam = {
    name: string;
    value: string;
}

export type ReportTimeFrameFilter = {
    dateColumn: string;
    endDate?: Date;
    interval: string;
    startDate?: Date;
}

export type ObjectRelationship = {
    join?: ObjectRelationship;
    outerJoin: boolean;
    relationship: string;
}

export type ReportLayoutSection = {
    columns: ReportTypeColumn[];
    masterLabel: string;
}

export type RetrievalSummaryDefField = {
    field: string;
    sequenceNumber: number;
}

export type RetrievalSummaryDefObject = {
    recordAggregationDefinition: string;
    retrievalSummaryDefFields: RetrievalSummaryDefField[];
    sequenceNumber: number;
}

export type RuleLibraryContextTag = {
    hashableContextTag: string;
    mappingName: string;
    usageSubType: string;
}

export type RulesetDefinition = {
    apiName: string;
    endDate?: Date;
    executionType: string;
    label: string;
    ruleDefinitions: RuleDefinition[];
    startDate?: Date;
    status: string;
    usageType: string;
}

export type ScoreCategoryCalcInsight = {
    insightDateFieldName: string;
    insightName: string;
    insightScoreFieldName: string;
    insightSubjectFieldName: string;
}

export type ScoreRangeClassification = {
    classificationName: string;
    colorHexadecimalCode: string;
    rangeEndValue: number;
    rangeStartValue: number;
}

export type SearchCustomizationObjectOverride = {
    explicitFilter: SearchCustomizationExplicitFilter[];
    fieldOverride: SearchCustomizationFieldOverride[];
    objectApiName: string;
    rule: SearchCustomizationRule[];
    searchable?: boolean;
}

export type SearchOrgWideFieldConfig = {
    fieldReference: string;
    isSearchable?: boolean;
    isSecure?: boolean;
}

export type SearchSettingsByObject = {
    searchSettingsByObject: ObjectSearchSetting[];
}

export type NetworkAccess = {
    ipRanges: IpRange[];
}

export type PasswordPolicies = {
    apiOnlyUserHomePageURL?: string;
    complexity?: string;
    expiration?: string;
    historyRestriction?: string;
    lockoutInterval?: string;
    maxLoginAttempts?: string;
    minimumPasswordLength?: string;
    minimumPasswordLifetime?: boolean;
    obscureSecretAnswer?: boolean;
    passwordAssistanceMessage?: string;
    passwordAssistanceURL?: string;
    questionRestriction?: string;
}

export type SessionSettings = {
    allowUserAuthenticationByCertificate?: boolean;
    allowUserCertBasedAuthenticationWithOcspValidation?: boolean;
    canConfirmEmailChangeInLightningCommunities?: boolean;
    canConfirmIdentityBySmsOnly?: boolean;
    disableTimeoutWarning?: boolean;
    enableBuiltInAuthenticator?: boolean;
    enableCSPOnEmail?: boolean;
    enableCSRFOnGet?: boolean;
    enableCSRFOnPost?: boolean;
    enableCacheAndAutocomplete?: boolean;
    enableClickjackNonsetupSFDC?: boolean;
    enableClickjackNonsetupUser?: boolean;
    enableClickjackNonsetupUserHeaderless?: boolean;
    enableClickjackSetup?: boolean;
    enableCoepHeader?: boolean;
    enableContentSniffingProtection?: boolean;
    enableCoopHeader?: boolean;
    enableLightningLogin?: boolean;
    enableLightningLoginOnlyWithUserPerm?: boolean;
    enableMFADirectUILoginOptIn?: boolean;
    enableOauthCorsPolicy?: boolean;
    enablePermissionsPolicy?: boolean;
    enablePostForSessions?: boolean;
    enableSMSIdentity?: boolean;
    enableU2F?: boolean;
    enforceIpRangesEveryRequest?: boolean;
    enforceUserDeviceRevoked?: boolean;
    forceLogoutOnSessionTimeout?: boolean;
    forceRelogin?: boolean;
    grantCameraAccess?: string;
    grantMicrophoneAccess?: string;
    hasRetainedLoginHints?: boolean;
    hasUserSwitching?: boolean;
    hstsOnForcecomSites?: boolean;
    identityConfirmationOnEmailChange?: boolean;
    identityConfirmationOnTwoFactorRegistrationEnabled?: boolean;
    lockSessionsToDomain?: boolean;
    lockSessionsToIp?: boolean;
    lockerServiceAPIVersion?: string;
    lockerServiceCSP?: boolean;
    lockerServiceNext?: boolean;
    lockerServiceNextControl?: boolean;
    logoutURL?: string;
    redirectBlockModeEnabled?: boolean;
    redirectionWarning?: boolean;
    referrerPolicy?: boolean;
    referrerPolicyDirective?: string;
    requireHttpOnly?: boolean;
    sendCspForUncommonClients?: boolean;
    sessionTimeout?: string;
    sidToken3rdPartyAuraApp?: boolean;
    skipSFAWhenMFADirectUILogin?: boolean;
    terminateUserSessionsWhenAdminResetsPassword?: boolean;
    useEAPIRateLimitForConnectAPI?: boolean;
    useLocalStorageForLogoutUrl?: boolean;
    welcomeEmailTemplateId?: string;
}

export type SingleSignOnSettings = {
    enableCaseInsensitiveFederationID?: boolean;
    enableForceDelegatedCallout?: boolean;
    enableMultipleSamlConfigs?: boolean;
    enableSamlJitProvisioning?: boolean;
    enableSamlLogin?: boolean;
    isLoginWithSalesforceCredentialsDisabled?: boolean;
}

export type ServiceChannelFieldPriority = {
    priority: number;
    value: string;
}

export type ServiceChannelStatus = {
    channel: string[];
}

export type ServiceProcessAttribute = {
    attributeType?: string;
    baseObjectApiName?: string;
    dataType?: string;
    description?: string;
    developerName: string;
    fieldIdentifier?: string;
    groupApiName: string;
    inputVariableValue?: string;
    isAttrValueDerivAtRuntime?: boolean;
    isRequired?: boolean;
    label: string;
    parentAttribute?: string;
    referenceObjectApiName?: string;
    sortOrder?: number;
}

export type ServiceProcessDependency = {
    dependencyReference: string;
    processStepName?: string;
    type: string;
}

export type ServiceProcessItemGroup = {
    apiName: string;
    groupName: string;
    sortOrder: number;
}

export type AccountSharingRuleSettings = {
    caseAccessLevel: string;
    contactAccessLevel: string;
    opportunityAccessLevel: string;
}

export type AccessMapping = {
    accessLevel: string;
    object: string;
    objectField: string;
    userField: string;
}

export type SkillAssignments = {
    profiles?: SkillProfileAssignments;
    users?: SkillUserAssignments;
}

export type StageTransition = {
    criteria: StageCriteria[];
    customPermission?: string;
    fromStageValue: string;
    stepGroup: StgFulfillmentStepDefGrp[];
    toStageValue: string;
    userPermission?: string;
}

export type StageValue = {
    criteria: StageCriteria[];
    stepGroup: StgFulfillmentStepDefGrp[];
    value: string;
}

export type SvcCatalogFilterCondition = {
    index: number;
    operator: string;
    source: string;
    value: string;
}

export type SvcCatalogFulfillFlowItem = {
    catalogInputVariable: string;
    displayType?: string;
    fieldDefinition?: string;
    fieldLookupDomain?: string;
    isAdditionalQuestionsInputVariable?: boolean;
    isRequired?: boolean;
    lookupDomainFieldType?: string;
    masterLabel: string;
    objectLookupDomain?: string;
}

export type SvcCatalogItemDefFiltrCrit = {
    svcCatalogFilterCriteria: string;
}

export type SvcCatalogCategoryItem = {
    isPrimaryCategory?: boolean;
    sortOrder?: number;
    svcCatalogCategory: string;
}

export type SvcCatalogItemDefDataCategorySelection = {
    category: string;
    categoryGroup: string;
}

export type SvcCatalogItemAttribute = {
    field?: string;
    inputType: string;
    inputVariable?: string;
    isRequired: boolean;
    label: string;
    maxValue?: number;
    minValue?: number;
    name: string;
    object?: string;
    options: SvcCatalogItemAttrDetail[];
    type: string;
    value?: string;
}

export type SynonymGroup = {
    languages: string[];
    terms: string[];
}

export type FieldValue = {
    name: string;
    value?: any;
}

export type Territory2AccessLevel = {
    accessLevel: string;
    objectType: string;
}

export type Territory2RuleAssociation = {
    inherited: boolean;
    ruleName: string;
}

export type Territory2RuleItem = {
    field: string;
    operation: string;
    value?: string;
}

export type Territory2SettingsOpportunityFilter = {
    apexClassName?: string;
    enableFilter: boolean;
    runMultiThreaded: boolean;
    runOnCreate: boolean;
}

export type Territory2SupportedObject = {
    defaultAccessLevel: string;
    objectType: string;
    state: string;
}

export type TimeSheetTemplateAssignment = {
    assignedTo?: string;
}

export type TransactionSecurityAction = {
    block: boolean;
    endSession: boolean;
    freezeUser: boolean;
    notifications: TransactionSecurityNotification[];
    twoFactorAuthentication: boolean;
}

export type BotBlockTranslation = {
    botBlockVersions: BotBlockVersionTranslation[];
    fullName: string;
}

export type BotTemplateTranslation = {
    botDialogs: BotDialogTranslation[];
    fullName: string;
}

export type BotTranslation = {
    botVersions: BotVersionTranslation[];
    fullName: string;
}

export type ConversationMessageDefinitionTranslation = {
    constantValueTranslations: ConversationMessageConstantValueTranslation[];
    label: string;
    name: string;
}

export type CustomApplicationTranslation = {
    description?: string;
    label?: string;
    name: string;
}

export type CustomLabelTranslation = {
    label: string;
    name: string;
}

export type CustomPageWebLinkTranslation = {
    label: string;
    name: string;
}

export type CustomTabTranslation = {
    label: string;
    name: string;
}

export type ExplainabilityMsgTemplateFieldTranslation = {
    description?: string;
    label?: string;
    name: string;
    templateMessage?: string;
}

export type FlowDefinitionTranslation = {
    flows: FlowTranslation[];
    fullName: string;
    label?: string;
}

export type IdentityVerificationFieldTranslation = {
    customFieldLabel?: string;
    description?: string;
    label?: string;
    name: string;
}

export type PipelineInspMetricConfigTranslation = {
    label: string;
    name: string;
}

export type PromptTranslation = {
    description?: string;
    label?: string;
    name: string;
    promptVersions: PromptVersionTranslation[];
}

export type GlobalQuickActionTranslation = {
    aspect?: string;
    label: string;
    name: string;
}

export type ReportTypeTranslation = {
    description?: string;
    label?: string;
    name: string;
    sections: ReportTypeSectionTranslation[];
}

export type ScontrolTranslation = {
    label: string;
    name: string;
}

export type UIObjectRelationFieldConfig = {
    displayLabel: string;
    queryText: string;
    rowOrder: number;
}

export type UiFormatSpecification = {
    formatProperties: string;
    formatType: string;
    order: number;
    visibilityRule?: UiFormulaRule;
}

export type UnifiedApplicationMember = {
    name: string;
    type: string;
}

export type UserAccessPolicyAction = {
    action: string;
    target: string;
    type: string;
}

export type UserAccessPolicyFilter = {
    columnName?: string;
    operation: string;
    sortOrder: number;
    target: string;
    type: string;
    value?: string;
}

export type StandardPermissionSet = {
    developerName: string;
    isSessionBased?: boolean;
    namespace?: string;
    profileKey?: string;
    requiredAccessCheck?: string;
    settingValues: SettingValue[];
}

export type VisualizationResource = {
    description?: string;
    file: string;
    rank?: number;
    type: string;
}

export type VisualizationType = {
    description?: string;
    developerName: string;
    icon: string;
    masterLabel: string;
    scriptBootstrapMethod?: string;
}

export type WaveAnalyticAssetCollectionItem = {
    asset?: string;
    assetType?: string;
    sortOrder?: number;
}

export type WaveXmdDate = {
    alias: string;
    compact?: boolean;
    dateFieldDay?: string;
    dateFieldEpochDay?: string;
    dateFieldEpochSecond?: string;
    dateFieldFiscalMonth?: string;
    dateFieldFiscalQuarter?: string;
    dateFieldFiscalWeek?: string;
    dateFieldFiscalYear?: string;
    dateFieldFullYear?: string;
    dateFieldHour?: string;
    dateFieldMinute?: string;
    dateFieldMonth?: string;
    dateFieldQuarter?: string;
    dateFieldSecond?: string;
    dateFieldWeek?: string;
    dateFieldYear?: string;
    description?: string;
    firstDayOfWeek: number;
    fiscalMonthOffset: number;
    isYearEndFiscalYear?: boolean;
    label?: string;
    showInExplorer?: boolean;
    sortIndex: number;
    type: string;
}

export type WaveXmdDimension = {
    conditionalFormatting: WaveXmdFormattingProperty[];
    customActions: WaveXmdDimensionCustomAction[];
    customActionsEnabled?: boolean;
    dateFormat?: string;
    defaultAction?: string;
    description?: string;
    field: string;
    fullyQualifiedName?: string;
    imageTemplate?: string;
    isDerived: boolean;
    isMultiValue?: boolean;
    label?: string;
    linkTemplate?: string;
    linkTemplateEnabled?: boolean;
    linkTooltip?: string;
    members: WaveXmdDimensionMember[];
    origin?: string;
    recordDisplayFields: WaveXmdRecordDisplayLookup[];
    recordIdField?: string;
    recordOrganizationIdField?: string;
    salesforceActions: WaveXmdDimensionSalesforceAction[];
    salesforceActionsEnabled?: boolean;
    showDetailsDefaultFieldIndex?: number;
    showInExplorer?: boolean;
    sortIndex: number;
}

export type WaveXmdMeasure = {
    conditionalFormatting: WaveXmdFormattingProperty[];
    currencies: WaveXmdMeasure[];
    currencyCode?: string;
    dateFormat?: string;
    description?: string;
    field: string;
    formatCustomFormat?: string;
    formatDecimalDigits?: number;
    formatDecimalSeparator?: string;
    formatIsNegativeParens?: boolean;
    formatPrefix?: string;
    formatSuffix?: string;
    formatThousandsSeparator?: string;
    formatUnit?: string;
    formatUnitMultiplier?: number;
    fullyQualifiedName?: string;
    isDerived: boolean;
    isMultiCurrency?: boolean;
    label?: string;
    origin?: string;
    showDetailsDefaultFieldIndex?: number;
    showInExplorer?: boolean;
    sortIndex: number;
}

export type WaveXmdOrganization = {
    instanceUrl: string;
    label: string;
    organizationIdentifier: string;
    sortIndex: number;
}

export type WorkSkillRoutingAttribute = {
    field: string;
    isAdditionalSkill?: boolean;
    skill: string;
    skillLevel?: number;
    skillPriority?: number;
    value?: string;
}

export type WorkflowFlowActionParameter = {
    name: string;
    value?: string;
}

export type WorkflowActionReference = {
    name: string;
    type: string;
}

export type WorkflowTimeTrigger = {
    actions: WorkflowActionReference[];
    offsetFromField?: string;
    timeLength?: string;
    workflowTimeTriggerUnit: string;
}

export type WorkflowEmailRecipient = {
    field?: string;
    recipient?: string;
    type: string;
}

export type AIDataDefinition = {
    dataFilter?: AIFilterGroup;
    description?: string;
    fieldType?: string;
    managedFields: AIManagedField[];
    modelDefinitions: AIModelDefinition[];
}

export type AIPredictionTarget = {
    predictionExpressions: AIPredictionExpression[];
    pushbackField?: AIPredictionField;
    strategy?: string;
    targetField?: AIPredictionField;
}

export type AIFactorComponent = {
    leftHandDerivedField?: string;
    leftHandField?: string;
    operator: string;
    rightHandDerivedField?: string;
    rightHandField?: string;
    sortOrder?: number;
    value: string;
}

export type AIFeatureExtractor = {
    batchInputSourceIdentifier?: string;
    batchInputSourceType?: string;
    className?: string;
    developerName: string;
    extractorType: string;
    featureInputType: string;
    inputContext?: string;
    masterLabel: string;
}

export type ObjectMappingField = {
    inputField: string;
    outputField: string;
}

export type ActionPlanTemplateItemValue = {
    itemEntityType: string;
    name: string;
    valueFormula?: string;
    valueLiteral?: string;
}

export type Country = {
    active: boolean;
    integrationValue: string;
    isoCode: string;
    label: string;
    orgDefault: boolean;
    standard: boolean;
    states: State[];
    visible: boolean;
}

export type AdvAcctFrcstDplyGroupItem = {
    advAcctFrcstDplyGroupItemName: string;
    displayOrder: number;
    measureReferenceName?: string;
}

export type AnalyticsDashboardPage = {
    index?: number;
    label?: string;
    pageName?: string;
    pageWidgets: AnalyticsDashPageWidget[];
}

export type AnalyticsButtonWidgetDef = {
    parameters?: string;
}

export type AnalyticsContainerWidgetDef = {
    parameters?: string;
}

export type AnalyticsFilterWidgetDef = {
    initialValues?: string;
    parameters?: string;
    source?: string;
}

export type AnalyticsMetricWidgetDef = {
    parameters?: string;
    source?: string;
    version?: number;
}

export type AnalyticsParamWidgetDef = {
    initialValues?: string;
    parameters?: string;
    source?: string;
}

export type AnalyticsTextWidgetDef = {
    parameters?: string;
}

export type AnalyticsVizWidgetDef = {
    analyticsVisualization?: string;
    parameters?: string;
}

export type AnalyticsAssetAction = {
    actionType: string;
    eventType: string;
    parameters?: string;
    version?: number;
}

export type ModuleRef = {
    name: string;
    namespacePrefix?: string;
    version?: string;
}

export type ApprovalStepApprover = {
    approver: Approver[];
    whenMultipleApprovers?: string;
}

export type ApprovalStepRejectBehavior = {
    type: string;
}

export type EscalationAction = {
    assignedTo?: string;
    assignedToTemplate?: string;
    assignedToType?: string;
    minutesToEscalation?: number;
    notifyCaseOwner?: boolean;
    notifyEmail: string[];
    notifyTo?: string;
    notifyToTemplate?: string;
}

export type AssistantSkillIntent = {
    action?: string;
    description?: string;
    field?: string;
    index?: number;
    intentName?: string;
    isPromptRequired?: boolean;
    isRequired?: boolean;
    mlIntent?: string;
    sobjectType?: string;
}

export type AudienceCriterion = {
    criteriaNumber?: number;
    criterionValue?: AudienceCriteriaValue;
    operator?: string;
    type: string;
}

export type PersonalizationTargetInfo = {
    groupName: string;
    priority?: number;
    targetType: string;
    targetValue: string;
}

export type AuraDefinition = {
    defType: string;
    source: string;
}

export type BatchCalcJobAbstractMetadataValue = string

export type BatchCalcJobAggregateField = {
    aggregateFunction: string;
    alias: string;
    sourceFieldName: string;
}

export type BatchCalcJobAtomicWritebackRelationship = {
    childWritebackObjectField?: string;
    childWritebackObjectName?: string;
    parentWritebackObjectField?: string;
    parentWritebackObjectName: string;
    sequenceNumber: number;
}

export type BatchCalcJobCustomNodeParameter = {
    name: string;
    value?: string;
}

export type BatchCalcJobDatasourceField = {
    alias?: string;
    dataType?: string;
    isPrimaryKey?: boolean;
    name: string;
}

export type BatchCalcJobFilterCriteria = {
    inputVariable?: string;
    operator: string;
    sequence: number;
    sourceFieldName: string;
    value?: string;
}

export type BtchCalcJobFrcstAggrFld = {
    aggregateFunction: string;
    aggregationResultLabel: string;
    fieldName: string;
}

export type BatchCalcJobFrcstGrpFld = {
    fieldName: string;
    groupBy?: string;
}

export type BatchCalcJobJoinResultField = {
    alias: string;
    sourceFieldName: string;
    sourceName: string;
}

export type BatchCalcJobJoinKey = {
    primarySourceFieldName: string;
    secondarySourceFieldName: string;
}

export type BatchCalcJobTransformDroppedField = {
    sourceFieldName: string;
}

export type BatchCalcJobTransformAddedField = {
    alias: string;
    dataType: string;
    decimalPlaces?: number;
    expression: string;
    length?: number;
}

export type BatchCalcJobOrderByField = {
    name: string;
    orderType: string;
}

export type BatchCalcJobWritebackMapping = {
    parentName?: string;
    relationshipName?: string;
    runtimeParameter?: boolean;
    sourceFieldName: string;
    targetFieldName?: string;
}

export type BatchDataSrcFilterCriteria = {
    dynamicValue: boolean;
    dynamicValueType?: string;
    fieldName: string;
    fieldValue: string;
    operator: string;
    sequenceNo: number;
}

export type BenefitActionParameterValue = {
    parameterValue: string;
}

export type ConversationContextVariableMapping = {
    SObjectType: string;
    fieldName: string;
    messageType: string;
}

export type BotStep = {
    booleanFilter?: string;
    botInvocation?: BotInvocation;
    botMessages: BotMessage[];
    botNavigation?: BotNavigation;
    botStepConditions: BotStepCondition[];
    botSteps: BotStep[];
    botVariableOperation?: BotVariableOperation;
    conditionLogicType?: string;
    conversationRecordLookup?: ConversationRecordLookup;
    conversationStepGoalMappings: ConversationDefinitionStepGoalMapping[];
    conversationSystemMessage?: ConversationSystemMessage;
    messageDefinition?: ConversationDefinitionRichMessage;
    stepIdentifier?: string;
    type: string;
}

export type BriefcaseRuleFilter = {
    filterOperator: string;
    filterSeqNumber: number;
    filterValue?: string;
    targetEntityField: string;
}

export type BusinessProcessFeedback = {
    actionName: string;
    actionParam: string;
    actionType: string;
}

export type CMSConnectResourceDefinition = {
    developerName: string;
    masterLabel: string;
    options: number;
    payloadType: string;
    resourceIdPath?: string;
    resourceNamePath?: string;
    resourcePath: string;
    rootNodePath?: string;
}

export type CallCenterItem = {
    label: string;
    name: string;
    value: string;
}

export type EmailToCaseRoutingAddress = {
    addressType?: string;
    authorizedSenders?: string;
    caseOrigin?: string;
    caseOwner?: string;
    caseOwnerType?: string;
    casePriority?: string;
    createTask?: boolean;
    emailAddress?: string;
    emailServicesAddress?: string;
    fallbackQueue?: string;
    isPermsetControlled?: boolean;
    isVerified?: boolean;
    routingFlow?: string;
    routingName?: string;
    saveEmailHeaders?: boolean;
    taskStatus?: string;
}

export type FieldMapping = {
    SObjectType: string;
    developerName: string;
    fieldMappingRows: FieldMappingRow[];
    masterLabel: string;
}

export type ChatterAnswersReputationLevel = {
    name: string;
    value: number;
}

export type IdeaReputationLevel = {
    name: string;
    value: number;
}

export type ConnectedAppOauthAssetToken = {
    assetAudiences: string;
    assetIncludeAttributes: boolean;
    assetIncludeCustomPerms: boolean;
    assetSigningCertId: string;
    assetValidityPeriod: number;
}

export type ConnectedAppOauthIdToken = {
    idTokenAudience?: string;
    idTokenIncludeAttributes?: boolean;
    idTokenIncludeCustomPerms?: boolean;
    idTokenIncludeStandardClaims?: boolean;
    idTokenValidity?: number;
}

export type ContextMapping = {
    contextMappingIntents: ContextMappingIntent[];
    contextNodeMappings: ContextNodeMapping[];
    default?: boolean;
    description?: string;
    inheritedFrom?: string;
    title: string;
}

export type ContextNode = {
    canonicalNode?: string;
    contextAttributes: ContextAttribute[];
    contextNodeAttrDictionaries: ContextNodeAttrDictionary[];
    contextTags: ContextTag[];
    displayName?: string;
    inheritedFrom?: string;
    title: string;
    transposable?: boolean;
}

export type ConversationMessageConstantCompositeValue = {
    constantItems: ConversationMessageConstant[];
    identifier: string;
}

export type ConversationMessageConstantPrimitiveValue = {
    contentAssetName?: string;
    textValue?: string;
    type: string;
    urlValue?: string;
}

export type ConvMsgExternalTemplateVersion = {
    accountIdentifier: string;
    accountName: string;
    language: string;
    status: string;
    templateName: string;
    templateVersionIdentifier: string;
}

export type ConversationMessageLayoutItem = {
    collectionType: string;
    compositeValues: ConversationMessageLayoutCompositeValue[];
    name: string;
    primitiveValues: ConversationMessageLayoutPrimitiveValue[];
}

export type ConversationMessageParameterCompositeDetails = {
    compositeChildItems: ConversationMessageParameterCompositeDetails[];
    isList?: boolean;
    isRequired?: boolean;
    label?: string;
    maxListItems?: number;
    name?: string;
    primitiveChildItems: ConversationMessageParameterPrimitiveDetails[];
}

export type ConversationMessageParameterPrimitiveDetails = {
    isList?: boolean;
    isRequired?: boolean;
    label?: string;
    maxListItems?: number;
    name?: string;
    sobjectType?: string;
    valueType?: string;
}

export type AppComponentList = {
    alignment: string;
    components: string[];
}

export type KeyboardShortcuts = {
    customShortcuts: CustomShortcut[];
    defaultShortcuts: DefaultShortcut[];
}

export type ListPlacement = {
    height?: number;
    location: string;
    units?: string;
    width?: number;
}

export type LiveAgentConfig = {
    enableLiveChat?: boolean;
    openNewAccountSubtab?: boolean;
    openNewCaseSubtab?: boolean;
    openNewContactSubtab?: boolean;
    openNewLeadSubtab?: boolean;
    openNewVFPageSubtab?: boolean;
    pageNamesToOpen: string[];
    showKnowledgeArticles?: boolean;
}

export type PushNotification = {
    fieldNames: string[];
    objectName: string;
}

export type TabLimitConfig = {
    maxNumberOfPrimaryTabs?: string;
    maxNumberOfSubTabs?: string;
}

export type WorkspaceMapping = {
    fieldName?: string;
    tab: string;
}

export type ValueSetValuesDefinition = {
    sorted: boolean;
    value: CustomValue[];
}

export type ValueSettings = {
    controllingFieldValue: string[];
    valueName: string;
}

export type ArticleTypeTemplate = {
    channel: string;
    page?: string;
    template: string;
}

export type LookupFilterTranslation = {
    errorMessage: string;
    informationalMessage: string;
}

export type PicklistValueTranslation = {
    masterLabel: string;
    translation?: string;
}

export type LayoutSectionTranslation = {
    label: string;
    section: string;
}

export type QuickActionParametersTranslation = {
    aspect?: string;
    name: string;
    value: string;
}

export type DashboardFilterOption = {
    operator: string;
    values: string[];
}

export type DashboardGridComponent = {
    colSpan: number;
    columnIndex: number;
    dashboardComponent: DashboardComponent;
    rowIndex: number;
    rowSpan: number;
}

export type DashboardComponent = {
    autoselectColumnsFromReport?: boolean;
    chartAxisRange?: string;
    chartAxisRangeMax?: number;
    chartAxisRangeMin?: number;
    chartSummary: ChartSummary[];
    componentChartTheme?: string;
    componentType: string;
    dashboardComponentContents: DashboardComponentContent[];
    dashboardDynamicValues: DashboardDynamicValue[];
    dashboardFilterColumns: DashboardFilterColumn[];
    dashboardTableColumn: DashboardTableColumn[];
    decimalPrecision?: number;
    displayUnits?: string;
    drillDownUrl?: string;
    drillEnabled?: boolean;
    drillToDetailEnabled?: boolean;
    enableHover?: boolean;
    expandOthers?: boolean;
    flexComponentProperties?: DashboardFlexTableComponentProperties;
    footer?: string;
    gaugeMax?: number;
    gaugeMin?: number;
    groupingColumn: string[];
    groupingSortProperties?: DashboardComponentGroupingSortProperties;
    header?: string;
    indicatorBreakpoint1?: number;
    indicatorBreakpoint2?: number;
    indicatorHighColor?: string;
    indicatorLowColor?: string;
    indicatorMiddleColor?: string;
    legendPosition?: string;
    maxValuesDisplayed?: number;
    metricLabel?: string;
    page?: string;
    pageHeightInPixels?: number;
    report?: string;
    scontrol?: string;
    scontrolHeightInPixels?: number;
    showPercentage?: boolean;
    showPicturesOnCharts?: boolean;
    showPicturesOnTables?: boolean;
    showRange?: boolean;
    showTotal?: boolean;
    showValues?: boolean;
    sortBy?: string;
    sortLegendValues?: boolean;
    title?: string;
    useReportChart?: boolean;
}

export type DataPlatformDataSet = {
    dataSetType?: string;
    description?: string;
    iconUri?: string;
    sortOrder?: number;
}

export type FtestSubDetailWithDeclMd = {
    booleanField?: boolean;
    dateField?: Date;
    dateTimeField?: Date;
    doubleField?: number;
    emailField?: string;
    integerField: number;
    staticEnumField?: string;
}

export type DigitalExperienceFolderShare = {
    folderPath: string;
    sharedWith: SharedWith[];
}

export type DigitalExperienceModule = {
    fullyQualifiedName: string;
    status: string;
}

export type ContentAssetLink = {
    access: string;
    isManagingWorkspace?: boolean;
    name?: string;
}

export type ContentAssetVersion = {
    number: string;
    pathOnClient: string;
    zipEntry?: string;
}

export type DiscoveryFieldMap = {
    mappedField: string;
    modelField: string;
    sobjectFieldJoinKey?: string;
    source?: string;
    sourceFieldJoinKey?: string;
    sourceType: string;
}

export type DiscoveryPrescribableField = {
    customDefinitions: DiscoveryCustomPrescribableFieldDefinition[];
    name: string;
}

export type DiscoveryFilterValue = {
    type: string;
    value: string;
}

export type DuplicateRuleFilterItem = FilterItem & {
    sortOrder: number;
    table: string;
}

export type EmbeddedServiceResource = {
    resource: string;
    resourceType: string;
}

export type EmbeddedServiceFormField = {
    choiceList?: string;
    displayOrder: number;
    embeddedServiceCustomLabels: EmbeddedServiceCustomLabel[];
    formField: string;
    formFieldType: string;
    isHidden?: boolean;
    isRequired?: boolean;
    messagingChannelParameterType: string;
}

export type EmbeddedServiceLayoutRule = {
    appointmentStatus: string;
}

export type EnablementMeasureFilterDefinition = {
    fieldApiName: string;
    fieldValue: string;
    operator: string;
    sequenceNumber: number;
}

export type EnablementMeasureRelatedObjectDefinition = {
    filterLogic?: string;
    filters: EnablementMeasureFilterDefinition[];
    idFieldApiName: string;
    objectApiName: string;
}

export type EnablementProgramTaskExercise = {
    cmsContent?: EnablementProgramTaskCmsContent;
    customContent?: EnablementProgramTaskCustomContent;
    externalContent?: EnablementProgramTaskExternalContent;
    feedbackContent?: EnablementProgramTaskFeedbackContent;
}

export type EnablementProgramTaskMilestone = {
    compositeMilestoneType?: string;
    isMilestoneAnOutcome: boolean;
    milestoneMeasures: EnablementProgramTaskMilestoneMeasure[];
    milestoneTarget?: number;
    minimumSampleSize?: number;
    startDay?: number;
}

export type MilestoneCompletionCriteria = {
    criteriaObjectName?: string;
    criteriaObjectType?: string;
}

export type EntitlementProcessMilestoneTimeTrigger = {
    actions: WorkflowActionReference[];
    timeLength?: number;
    workflowTimeTriggerUnit: string;
}

export type ExperienceResource = {
    fileName: string;
    format: string;
    source?: string;
    type: string;
}

export type ExpressionSetAdvancedCondition = {
    conditionLogic: string;
    criteria: ExpressionSetConditionCriteria[];
    errorMessage?: string;
    resultParameter?: string;
    successMessage?: string;
}

export type ExpressionSetAggregation = {
    aggergatedParameter: string;
    aggregateFunction: string;
    expression: string;
}

export type ExpressionSetAssignment = {
    assignedParameter: string;
    expression: string;
}

export type ExpressionSetConditionExpression = {
    errorMessage?: string;
    expression: string;
    resultParameter?: string;
    successMessage?: string;
}

export type ExpressionSetCustomElement = {
    parameters: ExpressionSetElementParameter[];
}

export type ExpressionSetDecisionTable = {
    decisionTableName: string;
    mappings: ExpressionSetElementParameter[];
    type: string;
}

export type ExplainabilityMessageTemplateTokenMapping = {
    expressionSetMessageToken: string;
    resourceReference: string;
}

export type ExpressionSetSubExpression = {
    expressionSet: string;
    mappings: ExpressionSetElementParameter[];
}

export type ExpressionSetVariableField = {
    dataType: string;
    decimalPlaces?: number;
    fields: ExpressionSetVariableField[];
    lookupName?: string;
    lookupType?: string;
    name: string;
    objectName?: string;
}

export type FlexiPageEventSourceProperty = {
    name: string;
    value: string;
}

export type FlexiPageEventTarget = {
    mappings: FlexiPageEventPropertyMapping[];
    method: string;
    name: string;
    properties: FlexiPageEventTargetProperty[];
    type: string;
}

export type ItemInstance = {
    componentInstance?: ComponentInstance;
    fieldInstance?: FieldInstance;
}

export type PlatformActionListItem = {
    actionName: string;
    actionType: string;
    sortOrder: number;
    subtype?: string;
}

export type QuickActionListItem = {
    quickActionName: string;
}

export type FlexipageDataSource = {
    definition?: string;
    mode?: string;
    name: string;
    properties?: string;
    type: string;
}

export type ComponentInstanceProperty = {
    name?: string;
    type?: string;
    value?: string;
    valueList?: ComponentInstancePropertyList;
}

export type FlexiPageCompSchemaPropertyDef = {
    description?: string;
    isRequired?: boolean;
    label?: string;
    name: string;
    type: string;
}

export type FlowNode = FlowElement & {
    elementSubtype?: string;
    label?: string;
    locationX: number;
    locationY: number;
}

export type FlowActionCallPath = FlowBaseElement & {
    connector: FlowConnector;
    pathName: string;
}

export type FlowConnector = FlowBaseElement & {
    isGoTo?: boolean;
    targetReference: string;
}

export type FlowDataTypeMapping = FlowBaseElement & {
    apexClass?: string;
    typeName: string;
    typeValue?: string;
}

export type FlowActionCallInputParameter = FlowBaseElement & {
    name: string;
    value?: FlowElementReferenceOrValue;
}

export type FlowActionCallOutputParameter = FlowBaseElement & {
    assignToReference: string;
    name: string;
}

export type FlowApexPluginCallInputParameter = FlowBaseElement & {
    name: string;
    value?: FlowElementReferenceOrValue;
}

export type FlowApexPluginCallOutputParameter = FlowBaseElement & {
    assignToReference: string;
    name: string;
}

export type FlowAssignmentItem = FlowBaseElement & {
    assignToReference?: string;
    operator?: string;
    value?: FlowElementReferenceOrValue;
}

export type FlowElement = FlowBaseElement & {
    description?: string;
    name?: string;
}

export type FlowChoiceUserInput = FlowBaseElement & {
    isRequired?: boolean;
    promptText?: string;
    validationRule?: FlowInputValidationRule;
}

export type FlowElementReferenceOrValue = {
    apexValue?: string;
    booleanValue?: boolean;
    complexValue?: string;
    complexValueType?: string;
    dateTimeValue?: Date;
    dateValue?: Date;
    elementReference?: string;
    formulaDataType?: string;
    formulaExpression?: string;
    numberValue?: number;
    setupReference?: string;
    setupReferenceType?: string;
    sobjectValue?: string;
    stringValue?: string;
    transform?: FlowInlineTransform;
    transformValueReference?: string;
}

export type FlowCondition = FlowBaseElement & {
    aggregationOperator?: string;
    conditionLogic?: string;
    conditionType?: string;
    conditions: FlowCondition[];
    leftValueReference?: string;
    operator: string;
    rightValue?: FlowElementReferenceOrValue;
}

export type FlowCollectionMapItem = FlowBaseElement & {
    assignToFieldReference: string;
    operator: string;
    value: FlowElementReferenceOrValue;
}

export type FlowCollectionSortOption = FlowBaseElement & {
    doesPutEmptyStringAndNullFirst: boolean;
    sortField?: string;
    sortOrder: string;
}

export type FlowCustomErrorMessage = FlowBaseElement & {
    errorMessage: string;
    fieldSelection?: string;
    isFieldError: boolean;
}

export type FlowRule = FlowElement & {
    conditionLogic: string;
    conditions: FlowCondition[];
    connector?: FlowConnector;
    doesRequireRecordChangedToMeetCriteria?: boolean;
    label: string;
}

export type FlowRecordFilter = FlowBaseElement & {
    field?: string;
    operator?: string;
    value?: FlowElementReferenceOrValue;
}

export type FlowOutputFieldAssignment = FlowBaseElement & {
    assignToReference: string;
    field: string;
}

export type FlowExperimentPath = FlowElement & {
    connector?: FlowConnector;
    label: string;
    percentage: number;
}

export type FlowStageStepExitActionInputParameter = FlowBaseElement & {
    name: string;
    value?: FlowElementReferenceOrValue;
}

export type FlowStageStepExitActionOutputParameter = FlowBaseElement & {
    assignToReference: string;
    name: string;
}

export type FlowStageStep = FlowElement & {
    actionName?: string;
    actionType?: string;
    assignees: FlowStageStepAssignee[];
    canAssigneeEdit?: boolean;
    entryActionInputParameters: FlowStageStepEntryActionInputParameter[];
    entryActionName?: string;
    entryActionOutputParameters: FlowStageStepEntryActionOutputParameter[];
    entryActionType?: string;
    entryConditionLogic: string;
    entryConditions: FlowCondition[];
    exitActionInputParameters: FlowStageStepExitActionInputParameter[];
    exitActionName?: string;
    exitActionOutputParameters: FlowStageStepExitActionOutputParameter[];
    exitActionType?: string;
    exitConditionLogic?: string;
    exitConditions: FlowCondition[];
    inputParameters: FlowStageStepInputParameter[];
    label: string;
    outputParameters: FlowStageStepOutputParameter[];
    requiresAsyncProcessing?: boolean;
    runAsUser?: boolean;
    shouldLock?: boolean;
    stepSubtype?: string;
}

export type FlowInputFieldAssignment = FlowBaseElement & {
    field?: string;
    value?: FlowElementReferenceOrValue;
}

export type FlowScreenAction = FlowElement & {
    actionName?: string;
    actionType?: string;
    inputParameters: FlowScreenActionInputParameter[];
    label: string;
    nameSegment?: string;
    versionSegment?: number;
    versionString?: string;
}

export type FlowScreenField = FlowElement & {
    choiceReferences: string[];
    dataType?: string;
    dataTypeMappings: FlowDataTypeMapping[];
    defaultSelectedChoiceReference?: string;
    defaultValue?: FlowElementReferenceOrValue;
    extensionName?: string;
    fieldText?: string;
    fieldType: string;
    fields: FlowScreenField[];
    helpText?: string;
    inputParameters: FlowScreenFieldInputParameter[];
    inputsOnNextNavToAssocScrn?: string;
    isDisabled?: FlowElementReferenceOrValue;
    isReadOnly?: FlowElementReferenceOrValue;
    isRequired?: boolean;
    isVisible?: boolean;
    objectFieldReference?: string;
    outputParameters: FlowScreenFieldOutputParameter[];
    regionContainerType?: string;
    scale?: number;
    sourceTemplateApiName?: string;
    sourceTemplateProviderType?: string;
    storeOutputAutomatically?: boolean;
    validationRule?: FlowInputValidationRule;
    visibilityRule?: FlowVisibilityRule;
}

export type FlowScreenRule = FlowBaseElement & {
    conditionLogic?: string;
    conditions: FlowCondition[];
    label: string;
    ruleActions: FlowScreenRuleAction[];
}

export type FlowScreenTrigger = FlowBaseElement & {
    eventName: string;
    eventSource: string;
    handlers: FlowScreenTriggerHandler[];
}

export type FlowCapability = FlowElement & {
    capabilityName: string;
    inputs: FlowCapabilityInput[];
}

export type FlowStartInputParameter = FlowBaseElement & {
    name: string;
    value?: FlowElementReferenceOrValue;
}

export type FlowSchedule = {
    frequency?: string;
    startDate?: Date;
    startTime?: Date;
}

export type FlowScheduledPath = FlowElement & {
    connector?: FlowConnector;
    label?: string;
    maxBatchSize?: number;
    offsetNumber?: number;
    offsetUnit?: string;
    pathType?: string;
    recordField?: string;
    timeSource?: string;
}

export type FlowSubflowInputAssignment = FlowBaseElement & {
    name: string;
    value?: FlowElementReferenceOrValue;
}

export type FlowSubflowOutputAssignment = FlowBaseElement & {
    assignToReference?: string;
    name: string;
}

export type FlowTransformValue = FlowBaseElement & {
    transformValueActions: FlowTransformValueAction[];
    transformValueDescription?: string;
    transformValueLabel?: string;
    transformValueName?: string;
}

export type FlowWaitEvent = FlowElement & {
    associatedElement?: string;
    automationEventName?: string;
    automationEventType?: string;
    conditionLogic?: string;
    conditions: FlowCondition[];
    connector?: FlowConnector;
    eventType?: string;
    filterLogic?: string;
    filters: FlowRecordFilter[];
    inputParameters: FlowWaitEventInputParameter[];
    interactionType?: string;
    label: string;
    maxBatchSize?: number;
    object?: string;
    offset?: number;
    offsetUnit?: string;
    outputParameters: FlowWaitEventOutputParameter[];
    recordTriggerType?: string;
    resumeDate?: Date;
    resumeDateReference?: string;
    resumeTime?: Date;
}

export type FlowTestAssertion = {
    conditions: FlowTestCondition[];
    errorMessage?: string;
}

export type FlowTestParameter = {
    leftValueReference: string;
    type: string;
    value: FlowTestReferenceOrValue;
}

export type ForecastingObjectListLabelMapping = {
    field: string;
    label: string;
}

export type ForecastingObjectListSelectedSettings = {
    field: string[];
}

export type ForecastingObjectListUnselectedSettings = {
    field: string[];
}

export type WeightedSourceCategory = {
    sourceCategoryApiName: string;
    weight: number;
}

export type OpportunityListFieldsLabelMapping = {
    field: string;
    label: string;
}

export type OpportunityListFieldsSelectedSettings = {
    field: string[];
}

export type OpportunityListFieldsUnselectedSettings = {
    field: string[];
}

export type GenAiLocalPlugin = {
    aiPluginUtterances: AiPluginUtteranceDef[];
    description: string;
    genAiFunctions: GenAiPluginFunctionDef[];
    genAiPluginInstructions: GenAiPluginInstructionDef[];
    language: string;
    masterLabel: string;
    name: string;
    pluginType: string;
    scope?: string;
}

export type GenAiPlannerRuleExprCondition = {
    leftOperand: string;
    leftOperandType: string;
    operator: string;
    rightOperandValue?: string;
}

export type GenAiPromptTemplateInput = {
    apiName: string;
    definition: string;
    description?: string;
    masterLabel?: string;
    referenceName: string;
    required: boolean;
}

export type GenAiPromptTemplateDataProvider = {
    definition: string;
    parameters: GenAiPromptTemplateDataProviderParam[];
    referenceName: string;
}

export type KnowledgeCommunitiesSettings = {
    community: string[];
}

export type KnowledgeSitesSettings = {
    site: string[];
}

export type KnowledgeLanguage = {
    active?: boolean;
    defaultAssignee?: string;
    defaultAssigneeType?: string;
    defaultReviewer?: string;
    defaultReviewerType?: string;
    name: string;
}

export type KnowledgeCaseFieldsSettings = {
    field: KnowledgeCaseField[];
}

export type KnowledgeWorkOrderFieldsSettings = {
    field: KnowledgeWorkOrderField[];
}

export type KnowledgeWorkOrderLineItemFieldsSettings = {
    field: KnowledgeWorkOrderLineItemField[];
}

export type PrimaryTabComponents = {
    containers: Container[];
}

export type SubtabComponents = {
    containers: Container[];
}

export type FeedLayoutFilter = {
    feedFilterName?: string;
    feedFilterType: string;
    feedItemType?: string;
}

export type FeedLayoutComponent = {
    componentType: string;
    height?: number;
    page?: string;
}

export type LayoutColumn = {
    layoutItems: LayoutItem[];
    reserved?: string;
}

export type RelatedContentItem = {
    layoutItem: LayoutItem;
}

export type SummaryLayoutItem = {
    customLink?: string;
    field?: string;
    posX: number;
    posY?: number;
    posZ?: number;
}

export type LwcResource = {
    filePath: string;
    source: string;
}

export type AgentConfigProfileAssignments = {
    profile: string[];
}

export type AgentConfigUserAssignments = {
    user: string[];
}

export type LoyaltyProgramProcessParameter = {
    condition?: LoyaltyProgramProcessCondition;
    dataType?: string;
    decimalPlaces?: number;
    description?: string;
    isCollection?: boolean;
    isInput?: boolean;
    isOutput?: boolean;
    objectName?: string;
    parameterName: string;
    parameterType?: string;
    value?: string;
}

export type LoyaltyProgramProcessRule = {
    actions: LoyaltyProgramProcessAction[];
    conditions: LoyaltyProgramProcessCondition[];
    description?: string;
    endDate?: Date;
    isProcessEligibilityRule?: boolean;
    previousRule?: string;
    promotion?: string;
    ruleName: string;
    startDate?: Date;
    status?: string;
    stepMappings: LoyaltyProgramProcessRuleStepMapping[];
}

export type MessagingChannelActionParameterMapping = {
    actionParameterName: string;
}

export type MessagingChannelParameterValueMapping = {
    lookupValue: string;
    lookupValueType: string;
    parameterValue: string;
}

export type MessagingAuthorization = {
    authIdentifier: string;
    authProviderName?: string;
    authorizationType: string;
    enabled?: boolean;
    publicKeyCertificateSetName?: string;
}

export type MlIntentUtterance = {
    language?: string;
    utterance: string;
}

export type MlRelatedIntent = {
    relatedMlIntent: string;
}

export type MlSlotClassValue = {
    synonymGroup?: SynonymGroup;
    synonymGroups: SynonymGroup[];
    value: string;
}

export type MlModelOutputEndpoint = {
    jsonPath?: string;
    label: string;
    name: string;
    outputFeature: string;
    position: number;
}

export type NavigationMenuItemBranding = {
    tileImage?: string;
}

export type NavigationSubMenu = {
    navigationMenuItem: NavigationMenuItem[];
}

export type NetworkEmailTmplAllowlist = {
    emailTemplate: string;
}

export type RecommendationAudienceDetail = {
    audienceCriteriaType?: string;
    audienceCriteriaValue?: string;
    setupName?: string;
}

export type RecommendationDefinitionDetail = {
    actionUrl?: string;
    description?: string;
    linkText?: string;
    scheduledRecommendations?: ScheduledRecommendation;
    setupName?: string;
    title?: string;
}

export type ReputationLevel = {
    branding?: ReputationBranding;
    label?: string;
    lowerThreshold: number;
}

export type ReputationPointsRule = {
    eventType: string;
    points: number;
}

export type AppSettings = {
    connectedAppName: string;
    enabled?: boolean;
}

export type NotificationChannels = {
    desktopEnabled?: boolean;
    mobileEnabled?: boolean;
    slackEnabled?: boolean;
}

export type OcrSampleDocumentPageItem = {
    hasHeader?: boolean;
    sequenceNumber: number;
    title?: string;
    type: string;
}

export type OcrTargetObjFieldMapping = {
    ocrSampleDocField?: OcrSampleDocumentField;
    targetField: string;
    type: string;
}

export type SettingOverride = {
    settingId: string;
    value: string;
}

export type PresenceConfigProfileAssignments = {
    profile: string[];
}

export type PresenceConfigUserAssignments = {
    user: string[];
}

export type PriceRuleActionItem = {
    field: string;
    fieldValue: string;
    fieldValueType: string;
    sequence: number;
}

export type PriceRuleConditionFilter = {
    field: string;
    fieldValue?: string;
    fieldValueType?: string;
    operator: string;
    sequence: number;
    variable?: string;
}

export type PricingProcedureOutputMap = {
    fieldName?: string;
    isPricingRecipeActive?: boolean;
    outputFieldName?: string;
    outputFieldNameString?: string;
    outputType?: string;
}

export type UiFormulaRule = {
    booleanFilter?: string;
    criteria: UiFormulaCriterion[];
}

export type PublicGroups = {
    publicGroup: string[];
}

export type RoleAndSubordinates = {
    roleAndSubordinate: string[];
}

export type RoleAndSubordinatesInternal = {
    roleAndSubordinateInternal: string[];
}

export type Roles = {
    role: string[];
}

export type Users = {
    user: string[];
}

export type QuickActionLayoutColumn = {
    quickActionLayoutItems: QuickActionLayoutItem[];
}

export type StrategyActionArg = {
    name: string;
    value: string;
}

export type StrategyNodeUnionBase = StrategyNodeBase & {
    limit?: number;
}

export type IfExpression = {
    childName: string;
    expression: string;
}

export type StrategyNodeInvocableActionArg = {
    name: string;
    value: string;
}

export type MapExpression = {
    expression: string;
    name: string;
    type?: string;
}

export type RecommendationLoadCondition = {
    field: string;
    operator: string;
    value: RecommendationConditionValue;
}

export type StrategyNodeSortField = {
    name: string;
    nullsFirst?: boolean;
    order?: string;
}

export type RecordActionDefaultItem = {
    action: string;
    isMandatory?: boolean;
    isUiRemoveHidden?: boolean;
    pinned: string;
    position: number;
    type: string;
}

export type RecordAggregationJoinCondition = {
    joinField: string;
    navigationSequenceNumber: number;
    relatedJoinField: string;
    relatedRecordAggregationObject: string;
    type: string;
}

export type RecordAggregationObjectFilter = {
    associatedObjectField: string;
    operator: string;
    sequenceNumber: number;
    value: string;
}

export type ReportAggregateReference = {
    aggregate: string;
}

export type ReportBucketFieldValue = {
    sourceValues: ReportBucketFieldSourceValue[];
    value: string;
}

export type ChartSummary = {
    aggregate?: string;
    axisBinding?: string;
    column: string;
}

export type ReportFilterItem = {
    column: string;
    columnToColumn?: boolean;
    isUnlocked?: boolean;
    operator: string;
    snapshot?: string;
    value?: string;
}

export type ReportFormattingRuleValue = {
    backgroundColor?: string;
    rangeUpperBound?: number;
}

export type ReportTypeColumn = {
    checkedByDefault: boolean;
    displayNameOverride?: string;
    field: string;
    table: string;
}

export type RuleDefinition = {
    actions: RuleAction[];
    apiName: string;
    criteria: RuleFilterCriteria[];
    description?: string;
    endDate?: Date;
    label: string;
    ruleStatus: string;
    sequenceNumber?: number;
    startDate: Date;
    usageSubType?: string;
    usageType: string;
    variables: RuleReferenceVariable[];
}

export type SearchCustomizationExplicitFilter = {
    fieldPath?: string;
    type: string;
}

export type SearchCustomizationFieldOverride = {
    fieldApiName: string;
    searchable: boolean;
}

export type SearchCustomizationRule = {
    fieldApiName: string;
    operator: string;
    ruleValue: SearchCustomizationRuleValue[];
}

export type ObjectSearchSetting = {
    enhancedLookupEnabled: boolean;
    lookupAutoCompleteEnabled: boolean;
    name: string;
    resultsPerPageCount: number;
}

export type IpRange = {
    description?: string;
    end?: string;
    start?: string;
}

export type SkillProfileAssignments = {
    profile: string[];
}

export type SkillUserAssignments = {
    user: string[];
}

export type StageCriteria = {
    condition: StageCondition[];
    criteriaType?: string;
    executionType: string;
    flowDefinitionName?: string;
    isChildObject?: boolean;
    logicalExpression?: string;
    targetFieldName?: string;
    targetObject?: string;
}

export type StgFulfillmentStepDefGrp = {
    name: string;
    step: StgFulfillmentStepDef[];
}

export type SvcCatalogItemAttrDetail = {
    isDefault: boolean;
    label: string;
    value: string;
}

export type TransactionSecurityNotification = {
    inApp: boolean;
    sendEmail: boolean;
    user: string;
}

export type BotBlockVersionTranslation = {
    botDialogs: BotDialogTranslation[];
    fullName: string;
}

export type BotDialogTranslation = {
    botSteps: BotStepTranslation[];
    developerName: string;
    label?: string;
}

export type BotVersionTranslation = {
    botDialogs: BotDialogTranslation[];
    fullName: string;
}

export type ConversationMessageConstantValueTranslation = {
    name: string;
    value: string;
}

export type FlowTranslation = {
    choices: FlowChoiceTranslation[];
    customErrorMessages: FlowCustomErrorMessageTranslation[];
    fullName?: string;
    label?: string;
    orchestrationSteps: FlowOrchestrationStepTranslation[];
    screens: FlowScreenTranslation[];
    stages: FlowStageTranslation[];
    textTemplates: FlowTextTemplateTranslation[];
}

export type PromptVersionTranslation = {
    actionButtonLabel?: string;
    actionButtonLink?: string;
    body?: string;
    description?: string;
    dismissButtonLabel?: string;
    header?: string;
    imageAltText?: string;
    imageLink?: string;
    label?: string;
    name: string;
    stepNumber?: number;
    title?: string;
    videoLink?: string;
}

export type ReportTypeSectionTranslation = {
    columns: ReportTypeColumnTranslation[];
    label?: string;
    name: string;
}

export type SettingValue = {
    durableId: string;
    value: string;
}

export type WaveXmdFormattingProperty = {
    formattingBins: WaveXmdFormattingBin[];
    formattingPredicates: WaveXmdFormattingPredicate[];
    property: string;
    referenceField: string;
    sortIndex: number;
    type: string;
}

export type WaveXmdDimensionCustomAction = {
    customActionName: string;
    enabled: boolean;
    icon?: string;
    method?: string;
    sortIndex: number;
    target?: string;
    tooltip?: string;
    url?: string;
}

export type WaveXmdDimensionMember = {
    color?: string;
    label?: string;
    member: string;
    sortIndex: number;
}

export type WaveXmdRecordDisplayLookup = {
    recordDisplayField: string;
    sortIndex: number;
}

export type WaveXmdDimensionSalesforceAction = {
    enabled: boolean;
    salesforceActionName: string;
    sortIndex: number;
}

export type AIFilterGroup = {
    rootFilter: AIFilter;
}

export type AIManagedField = {
    field: AIPredictionField;
}

export type AIModelDefinition = {
    approvalType?: string;
    externalId: string;
    scoringFilter?: AIFilterGroup;
    status: string;
    trainSplitRatio?: string;
    trainingFilter?: AIFilterGroup;
    type?: string;
}

export type AIPredictionExpression = {
    expressionFilterGroup?: AIFilterGroup;
    predictionExpressionName?: string;
}

export type AIPredictionField = {
    entity: string;
    field: string;
    relatedPredictionField?: AIPredictionField;
}

export type State = {
    active: boolean;
    integrationValue: string;
    isoCode: string;
    label: string;
    standard: boolean;
    visible: boolean;
}

export type AnalyticsDashPageWidget = {
    analyticsDashboardWidget: string;
    colspan?: string;
    column?: string;
    row?: string;
    rowspan?: string;
}

export type Approver = {
    name?: string;
    type: string;
}

export type AudienceCriteriaValue = {
    audienceDeveloperName?: string;
    city?: string;
    country?: string;
    domain?: string;
    entityField?: string;
    entityType?: string;
    fieldValue?: string;
    isEnabled?: string;
    permissionName?: string;
    permissionType?: string;
    profile?: string;
    subdivision?: string;
}

export type BotInvocation = {
    invocationActionName?: string;
    invocationActionType?: string;
    invocationMappings: BotInvocationMapping[];
}

export type BotMessage = {
    message: string;
    messageIdentifier?: string;
}

export type BotNavigation = {
    botNavigationLinks: BotNavigationLink[];
    type: string;
}

export type BotStepCondition = {
    leftOperandName: string;
    leftOperandType: string;
    operatorType: string;
    rightOperandValue?: string;
}

export type BotVariableOperation = {
    askCollectIfSet?: boolean;
    autoSelectIfSingleChoice?: boolean;
    botInvocation?: BotInvocation;
    botMessages: BotMessage[];
    botQuickReplyOptions: BotQuickReplyOption[];
    botVariableOperands: BotVariableOperand[];
    ignoreIntentRecognition?: boolean;
    invalidInputBotNavigation?: BotNavigation;
    messageDefinition?: ConversationDefinitionRichMessage;
    optionalCollect?: boolean;
    quickReplyOptionTemplate?: string;
    quickReplyType?: string;
    quickReplyWidgetType?: string;
    retryMessages: BotMessage[];
    sourceVariableName?: string;
    sourceVariableType?: string;
    successMessages: BotMessage[];
    type: string;
    variableOperationIdentifier?: string;
}

export type ConversationRecordLookup = {
    SObjectType: string;
    conditions: ConversationRecordLookupCondition[];
    filterLogic?: string;
    lookupFields: ConversationRecordLookupField[];
    maxLookupResults: number;
    sortFieldName?: string;
    sortOrder?: string;
    sourceVariableName?: string;
    sourceVariableType?: string;
    targetVariableName: string;
}

export type ConversationDefinitionStepGoalMapping = {
    goalName: string;
}

export type ConversationSystemMessage = {
    systemMessageMappings: ConversationSystemMessageMapping[];
    type: string;
}

export type ConversationDefinitionRichMessage = {
    executionType?: string;
    messageDefinitionMappings: BotInvocationMapping[];
    messageDefinitionName: string;
}

export type FieldMappingRow = {
    SObjectType: string;
    fieldMappingFields: FieldMappingField[];
    fieldName: string;
    mappingOperation: string;
}

export type ContextMappingIntent = {
    mappingIntent: string;
}

export type ContextNodeMapping = {
    contextAttributeMappings: ContextAttributeMapping[];
    contextNode?: string;
    contextNodeAttrDictionaries: ContextNodeAttrDictionary[];
    inheritedFrom?: string;
    mappedContextDefinition?: string;
    object?: string;
}

export type ContextAttribute = {
    contextTags: ContextTag[];
    dataType: string;
    description?: string;
    displayName?: string;
    domainSet?: string;
    fieldType: string;
    inheritedFrom?: string;
    key?: boolean;
    title: string;
    transient?: boolean;
    value?: boolean;
}

export type ContextNodeAttrDictionary = {
    contextAttrDictIdentifier: string;
    contextNodeTagPrefix: string;
}

export type ContextTag = {
    inheritedFrom?: string;
    title: string;
}

export type ConversationMessageLayoutCompositeValue = {
    compositeTypeName: string;
    layoutItems: ConversationMessageLayoutItem[];
    valueSourceReference?: string;
}

export type ConversationMessageLayoutPrimitiveValue = {
    contentAssetName?: string;
    fieldName?: string;
    formulaTemplate?: string;
    literalValue?: string;
    mergeFields: ConversationMessageMergeField[];
    type: string;
    valueFormula?: string;
    valueSourceReference?: string;
}

export type CustomShortcut = DefaultShortcut & {
    description?: string;
    eventName: string;
}

export type DefaultShortcut = {
    action: string;
    active: boolean;
    keyCommand: string;
}

export type DashboardComponentContent = {
    additionalInfo?: string;
    altText?: string;
    fileName?: string;
    fit?: string;
    horizontalAlignment?: string;
    richTextContent?: string;
    tooltip?: string;
    verticalAlignment?: string;
}

export type DashboardDynamicValue = {
    additionalInfo?: string;
    fieldName: string;
    isDynamicUser?: boolean;
}

export type DashboardFilterColumn = {
    column: string;
}

export type DashboardTableColumn = {
    aggregateType?: string;
    calculatePercent?: boolean;
    column: string;
    decimalPlaces?: number;
    showSubTotal?: boolean;
    showTotal?: boolean;
    sortBy?: string;
}

export type DashboardFlexTableComponentProperties = {
    decimalPrecision?: number;
    flexTableColumn: DashboardComponentColumn[];
    flexTableSortInfo?: DashboardComponentSortInfo;
    hideChatterPhotos?: boolean;
}

export type DashboardComponentGroupingSortProperties = {
    groupingSorts: DashboardComponentGroupingSort[];
}

export type SharedWith = {
    fullyQualifiedName: string;
}

export type DiscoveryCustomPrescribableFieldDefinition = {
    filters: DiscoveryFilter[];
    template?: string;
}

export type EnablementProgramTaskCmsContent = {
    apiName: string;
    contentKey?: string;
}

export type EnablementProgramTaskCustomContent = {
    content?: string;
}

export type EnablementProgramTaskExternalContent = {
    externalId: string;
    providerType: string;
}

export type EnablementProgramTaskFeedbackContent = {
    inviteeCount?: number;
    promptTemplate?: string;
    surveyDeveloperName?: string;
    type: string;
}

export type EnablementProgramTaskMilestoneMeasure = {
    measureDefinitionDeveloperName: string;
    sequenceNumber?: number;
}

export type ExpressionSetConditionCriteria = {
    operator: string;
    sequenceNumber: number;
    sourceFieldName: string;
    value?: string;
    valueType?: string;
}

export type ExpressionSetElementParameter = {
    input: boolean;
    name: string;
    output: boolean;
    type?: string;
    value: string;
}

export type FlexiPageEventPropertyMapping = {
    name: string;
    value?: string;
}

export type FlexiPageEventTargetProperty = {
    name: string;
    value: string;
}

export type ComponentInstance = {
    componentInstanceProperties: ComponentInstanceProperty[];
    componentName: string;
    componentType?: string;
    flexipageDataSources: FlexipageDataSource[];
    identifier?: string;
    visibilityRule?: UiFormulaRule;
}

export type FieldInstance = {
    fieldInstanceProperties: FieldInstanceProperty[];
    fieldItem: string;
    identifier?: string;
    visibilityRule?: UiFormulaRule;
}

export type ComponentInstancePropertyList = {
    valueListItems: ComponentInstancePropertyListItem[];
}

export type FlowBaseElement = {
    processMetadataValues: FlowMetadataValue[];
}

export type FlowInputValidationRule = {
    errorMessage: string;
    formulaExpression: string;
}

export type FlowInlineTransform = FlowBaseElement & {
    apexClass?: string;
    dataType?: string;
    isCollection?: boolean;
    objectType?: string;
    transformValues: FlowTransformValue[];
}

export type FlowStageStepAssignee = FlowBaseElement & {
    assignee?: FlowElementReferenceOrValue;
    assigneeType: string;
}

export type FlowStageStepEntryActionInputParameter = FlowBaseElement & {
    name: string;
    value?: FlowElementReferenceOrValue;
}

export type FlowStageStepEntryActionOutputParameter = FlowBaseElement & {
    assignToReference: string;
    name: string;
}

export type FlowStageStepInputParameter = FlowBaseElement & {
    name: string;
    value?: FlowElementReferenceOrValue;
}

export type FlowStageStepOutputParameter = FlowBaseElement & {
    assignToReference: string;
    name: string;
}

export type FlowScreenActionInputParameter = FlowBaseElement & {
    name: string;
    value?: FlowElementReferenceOrValue;
}

export type FlowScreenFieldInputParameter = FlowBaseElement & {
    name: string;
    value?: FlowElementReferenceOrValue;
}

export type FlowScreenFieldOutputParameter = FlowBaseElement & {
    assignToReference: string;
    name: string;
}

export type FlowVisibilityRule = FlowBaseElement & {
    conditionLogic?: string;
    conditions: FlowCondition[];
}

export type FlowScreenRuleAction = FlowBaseElement & {
    attribute: string;
    fieldReference: string;
    value?: FlowElementReferenceOrValue;
}

export type FlowScreenTriggerHandler = FlowBaseElement & {
    conditionLogic?: string;
    conditions: FlowCondition[];
    screenActionName: string;
}

export type FlowCapabilityInput = FlowElement & {
    capabilityInputName: string;
    dataType?: string;
    isCollection: boolean;
}

export type FlowTransformValueAction = FlowBaseElement & {
    assignToReference?: string;
    inputParameters: FlowTransformValueActionInputParameter[];
    name?: string;
    outputFieldApiName?: string;
    transformType: string;
    value?: FlowElementReferenceOrValue;
}

export type FlowWaitEventInputParameter = FlowBaseElement & {
    name?: string;
    value?: FlowElementReferenceOrValue;
}

export type FlowWaitEventOutputParameter = FlowBaseElement & {
    assignToReference: string;
    name: string;
}

export type FlowTestCondition = {
    leftValueReference: string;
    operator: string;
    rightValue?: FlowTestReferenceOrValue;
}

export type FlowTestReferenceOrValue = {
    booleanValue?: boolean;
    dateTimeValue?: Date;
    dateValue?: Date;
    numberValue?: number;
    sobjectValue?: string;
    stringValue?: string;
}

export type GenAiPromptTemplateDataProviderParam = {
    definition: string;
    isRequired?: boolean;
    parameterName: string;
    valueExpression?: string;
}

export type KnowledgeCaseField = {
    name?: string;
}

export type KnowledgeWorkOrderField = {
    name?: string;
}

export type KnowledgeWorkOrderLineItemField = {
    name?: string;
}

export type Container = {
    height?: number;
    isContainerAutoSizeEnabled: boolean;
    region: string;
    sidebarComponents: SidebarComponent[];
    style: string;
    unit: string;
    width?: number;
}

export type LayoutItem = {
    analyticsCloudComponent?: AnalyticsCloudComponentLayoutItem;
    behavior?: string;
    canvas?: string;
    component?: string;
    customLink?: string;
    emptySpace?: boolean;
    field?: string;
    height?: number;
    page?: string;
    reportChartComponent?: ReportChartComponentLayoutItem;
    scontrol?: string;
    showLabel?: boolean;
    showScrollbars?: boolean;
    width?: string;
}

export type LoyaltyProgramProcessCondition = {
    conditionCriteria?: string;
    conditionFilterCriteria: LoyaltyProgramProcessConditionFilterCriteria[];
    conditionName: string;
    conditionType?: string;
}

export type LoyaltyProgramProcessAction = {
    actionName: string;
    actionParameters: LoyaltyProgramProcessActionParameter[];
    actionType: string;
    crudActionType?: string;
    decisionTable?: string;
    decisionTableDatasetLink?: string;
    entityApiName?: string;
    flowDefinition?: string;
    loyaltyProgramProcess?: string;
}

export type LoyaltyProgramProcessRuleStepMapping = {
    associatedStep: string;
    parentStep?: string;
    sequence: number;
}

export type ScheduledRecommendation = {
    scheduledRecommendationDetails: ScheduledRecommendationDetail[];
}

export type ReputationBranding = {
    smallImage?: string;
}

export type UiFormulaCriterion = {
    leftValue: string;
    operator: string;
    rightValue?: string;
}

export type QuickActionLayoutItem = {
    emptySpace?: boolean;
    field?: string;
    uiBehavior?: string;
}

export type StrategyNodeBase = {
    childNode: string[];
    description?: string;
    label?: string;
    name: string;
}

export type RecommendationConditionValue = {
    type: string;
    value?: string;
}

export type ReportBucketFieldSourceValue = {
    from?: string;
    sourceValue?: string;
    to?: string;
}

export type RuleAction = {
    actionParameters: RuleActionParameter[];
    actionType: string;
    name: string;
    sequenceNumber: number;
}

export type RuleFilterCriteria = {
    actions: RuleAction[];
    conditionLogic: string;
    conditions: RuleCondition[];
    executionSequence: number;
    name: string;
    parentFilterCriteria?: string;
    type: string;
}

export type RuleReferenceVariable = {
    aggregateFunction?: string;
    attributeId?: string;
    contextTag?: string;
    dataType: string;
    decimalPlaces?: number;
    filterCriteriaName?: string;
    groupByTag?: string;
    name: string;
    type: string;
    value?: string;
}

export type SearchCustomizationRuleValue = {
    targetObjectApiName?: string;
    value: string;
}

export type StageCondition = {
    operator: string;
    sequenceNumber: number;
    sourceField: string;
    value: string;
}

export type StgFulfillmentStepDef = {
    apiName: string;
    assignedToQueue?: string;
    assignedToUser?: string;
    dependency: StgFulfillmentStepDpndDef[];
    executeOnRule?: string;
    flowDefinitionName?: string;
    integrationDefinitionName?: string;
    name: string;
    omniscriptName?: string;
    runAsUser?: string;
    stepType: string;
}

export type BotStepTranslation = {
    botMessages: BotMessageTranslation[];
    botSteps: BotStepTranslation[];
    botVariableOperation?: BotVariableOperationTranslation;
    stepIdentifier: string;
    type: string;
}

export type FlowChoiceTranslation = {
    choiceText?: string;
    name: string;
    userInput?: FlowChoiceUserInputTranslation;
}

export type FlowCustomErrorMessageTranslation = {
    developerName: string;
    errorMessage?: string;
    field?: string;
}

export type FlowOrchestrationStepTranslation = {
    name: string;
    stepLabel?: string;
}

export type FlowScreenTranslation = {
    backButtonLabel?: string;
    fields: FlowScreenFieldTranslation[];
    helpText?: string;
    name: string;
    nextOrFinishButtonLabel?: string;
    pauseButtonLabel?: string;
    pausedText?: string;
}

export type FlowStageTranslation = {
    label?: string;
    name: string;
}

export type FlowTextTemplateTranslation = {
    name: string;
    text?: string;
}

export type ReportTypeColumnTranslation = {
    label: string;
    name: string;
}

export type WaveXmdFormattingBin = {
    bin: string;
    formatValue: string;
    label: string;
    sortIndex: number;
}

export type WaveXmdFormattingPredicate = {
    formatValue: string;
    operator: string;
    sortIndex: number;
    value: string;
}

export type AIFilter = {
    lhField?: AIPredictionField;
    lhFilter?: AIFilter;
    lhUnit?: string;
    operation: string;
    rhField?: AIPredictionField;
    rhFilter?: AIFilter;
    rhUnit?: string;
    sortOrder?: number;
    values: AIFilterValue[];
}

export type BotInvocationMapping = {
    parameterName: string;
    recordName?: string;
    type: string;
    value?: string;
    variableName?: string;
    variableType?: string;
}

export type BotNavigationLink = {
    label?: string;
    targetBotDialog?: string;
    targetVariable?: string;
    targetVariableType?: string;
}

export type BotQuickReplyOption = {
    literalValue: string;
    quickReplyOptionIdentifier?: string;
}

export type BotVariableOperand = {
    disableAutoFill?: boolean;
    sourceName?: string;
    sourceType?: string;
    sourceValue?: string;
    targetName: string;
    targetType: string;
}

export type ConversationRecordLookupCondition = {
    leftOperand: string;
    operatorType: string;
    rightOperandName?: string;
    rightOperandType?: string;
    rightOperandValue?: string;
    sortOrder: number;
}

export type ConversationRecordLookupField = {
    fieldName: string;
}

export type ConversationSystemMessageMapping = {
    mappingType: string;
    parameterType: string;
    variableName: string;
}

export type FieldMappingField = {
    dataServiceField: string;
    dataServiceObjectName: string;
    priority: number;
}

export type ContextAttributeMapping = {
    contextAttrHydrationDetails: ContextAttrHydrationDetail[];
    contextAttribute?: string;
    contextInputAttributeName: string;
    ctxAttrHydrationCtxs: CtxAttrHydrationCtx[];
    inheritedFrom?: string;
}

export type ConversationMessageMergeField = {
    formulaTemplate: string;
    mergeFieldType: string;
    name: string;
    valueSourceReference: string;
}

export type DashboardComponentColumn = {
    breakPoint1?: number;
    breakPoint2?: number;
    breakPointOrder?: number;
    highRangeColor?: number;
    lowRangeColor?: number;
    midRangeColor?: number;
    reportColumn: string;
    showSubTotal?: boolean;
    showTotal?: boolean;
    type: string;
}

export type DashboardComponentSortInfo = {
    sortColumn?: string;
    sortOrder?: string;
}

export type DashboardComponentGroupingSort = {
    groupingLevel: string;
    inheritedReportGroupingSort?: string;
    sortColumn?: string;
    sortOrder?: string;
}

export type FieldInstanceProperty = {
    name?: string;
    value?: string;
}

export type ComponentInstancePropertyListItem = {
    value?: string;
    visibilityRule?: UiFormulaRule;
}

export type FlowTransformValueActionInputParameter = FlowBaseElement & {
    name: string;
    value?: FlowElementReferenceOrValue;
}

export type SidebarComponent = {
    componentType: string;
    createAction?: string;
    enableLinking?: boolean;
    height?: number;
    label?: string;
    lookup?: string;
    page?: string;
    relatedLists: RelatedList[];
    unit?: string;
    updateAction?: string;
    width?: number;
}

export type AnalyticsCloudComponentLayoutItem = {
    assetType: string;
    devName: string;
    error?: string;
    filter?: string;
    height?: number;
    hideOnError?: boolean;
    showHeader?: boolean;
    showSharing?: boolean;
    showTitle?: boolean;
    width?: string;
}

export type ReportChartComponentLayoutItem = {
    cacheData?: boolean;
    contextFilterableField?: string;
    error?: string;
    hideOnError?: boolean;
    includeContext?: boolean;
    reportName: string;
    showTitle?: boolean;
    size?: string;
}

export type LoyaltyProgramProcessConditionFilterCriteria = {
    operator: string;
    sequence: number;
    sourceFieldName: string;
    value?: string;
    valueType: string;
}

export type LoyaltyProgramProcessActionParameter = {
    operator?: string;
    parameterName: string;
    sequenceNumber?: number;
    value: string;
    valueType?: string;
}

export type ScheduledRecommendationDetail = {
    channel?: string;
    enabled?: boolean;
    rank?: number;
    recommendationAudience?: string;
}

export type RuleActionParameter = {
    name: string;
    sequenceNumber: number;
    sourceCriteriName?: string;
    value: string;
    valueType: string;
}

export type RuleCondition = {
    matchType?: string;
    name?: string;
    operator: string;
    sequenceNumber: number;
    value: string[];
    valueType: string;
    variable: string;
}

export type StgFulfillmentStepDpndDef = {
    step: string;
}

export type BotMessageTranslation = {
    message?: string;
    messageIdentifier: string;
}

export type BotVariableOperationTranslation = {
    botMessages: BotMessageTranslation[];
    botQuickReplyOptions: BotQuickReplyOptionTranslation[];
    quickReplyOptionTemplate?: string;
    retryMessages: BotMessageTranslation[];
    successMessages: BotMessageTranslation[];
    type: string;
    variableOperationIdentifier: string;
}

export type FlowChoiceUserInputTranslation = {
    promptText?: string;
    validationRule?: FlowInputValidationRuleTranslation;
}

export type FlowScreenFieldTranslation = {
    fieldText?: string;
    helpText?: string;
    inputParameters: FlowInputParameterTranslation[];
    name: string;
    validationRule?: FlowInputValidationRuleTranslation;
}

export type AIFilterValue = {
    side: string;
    sortOrder?: number;
    type: string;
    value: string;
}

export type ContextAttrHydrationDetail = {
    contextAttrHydrationDetails: ContextAttrHydrationDetail[];
    inheritedFrom?: string;
    objectName: string;
    queryAttribute: string;
}

export type CtxAttrHydrationCtx = {
    contextQueryAttribute: string;
    inheritedFrom?: string;
}

export type RelatedList = {
    hideOnDetail: boolean;
    name: string;
}

export type BotQuickReplyOptionTranslation = {
    literalValue?: string;
    quickReplyOptionIdentifier: string;
}

export type FlowInputValidationRuleTranslation = {
    errorMessage?: string;
}

export type FlowInputParameterTranslation = {
    name: string;
    value: FlowFerovTranslation;
}

export type FlowFerovTranslation = {
    complexValues: FlowComplexLiteralTranslation[];
    stringValue?: string;
}

export type FlowComplexLiteralTranslation = {
    customAspectKey?: string;
    value?: string;
}

