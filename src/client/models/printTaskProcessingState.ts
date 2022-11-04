/** Provides operations to manage the user singleton. */
export enum PrintTaskProcessingState {
    Pending = "pending",
    Processing = "processing",
    Completed = "completed",
    Aborted = "aborted",
    UnknownFutureValue = "unknownFutureValue",
}
