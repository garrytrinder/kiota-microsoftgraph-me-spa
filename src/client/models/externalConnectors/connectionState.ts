/** Provides operations to manage the user singleton. */
export enum ConnectionState {
    Draft = "draft",
    Ready = "ready",
    Obsolete = "obsolete",
    LimitExceeded = "limitExceeded",
    UnknownFutureValue = "unknownFutureValue",
}
