/** Provides operations to manage the user singleton. */
export enum SharedPCAccountDeletionPolicyType {
    /** Delete immediately. */
    Immediate = "immediate",
    /** Delete at disk space threshold. */
    DiskSpaceThreshold = "diskSpaceThreshold",
    /** Delete at disk space threshold or inactive threshold. */
    DiskSpaceThresholdOrInactiveThreshold = "diskSpaceThresholdOrInactiveThreshold",
}
