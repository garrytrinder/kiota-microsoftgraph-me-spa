/** Provides operations to manage the user singleton. */
export enum CalendarRoleType {
    None = "none",
    FreeBusyRead = "freeBusyRead",
    LimitedRead = "limitedRead",
    Read = "read",
    Write = "write",
    DelegateWithoutPrivateEventAccess = "delegateWithoutPrivateEventAccess",
    DelegateWithPrivateEventAccess = "delegateWithPrivateEventAccess",
    Custom = "custom",
}
