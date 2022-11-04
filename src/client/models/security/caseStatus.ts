/** Provides operations to manage the user singleton. */
export enum CaseStatus {
    Unknown = "unknown",
    Active = "active",
    PendingDelete = "pendingDelete",
    Closing = "closing",
    Closed = "closed",
    ClosedWithError = "closedWithError",
    UnknownFutureValue = "unknownFutureValue",
}
