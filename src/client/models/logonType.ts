/** Provides operations to manage the user singleton. */
export enum LogonType {
    Unknown = "unknown",
    Interactive = "interactive",
    RemoteInteractive = "remoteInteractive",
    Network = "network",
    Batch = "batch",
    Service = "service",
    UnknownFutureValue = "unknownFutureValue",
}
