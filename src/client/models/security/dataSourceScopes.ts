/** Provides operations to manage the user singleton. */
export enum DataSourceScopes {
    None = "none",
    AllTenantMailboxes = "allTenantMailboxes",
    AllTenantSites = "allTenantSites",
    AllCaseCustodians = "allCaseCustodians",
    AllCaseNoncustodialDataSources = "allCaseNoncustodialDataSources",
    UnknownFutureValue = "unknownFutureValue",
}
