/** Provides operations to manage the user singleton. */
export enum VppTokenSyncStatus {
    /** Default status. */
    None = "none",
    /** Last Sync in progress. */
    InProgress = "inProgress",
    /** Last Sync completed successfully. */
    Completed = "completed",
    /** Last Sync failed. */
    Failed = "failed",
}
