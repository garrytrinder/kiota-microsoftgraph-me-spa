/** Provides operations to manage the user singleton. */
export enum DefenderScanType {
    /** User Defined, default value, no intent. */
    UserDefined = "userDefined",
    /** System scan disabled. */
    Disabled = "disabled",
    /** Quick system scan. */
    Quick = "quick",
    /** Full system scan. */
    Full = "full",
}
