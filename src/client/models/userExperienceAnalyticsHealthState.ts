/** Provides operations to manage the user singleton. */
export enum UserExperienceAnalyticsHealthState {
    Unknown = "unknown",
    InsufficientData = "insufficientData",
    NeedsAttention = "needsAttention",
    MeetingGoals = "meetingGoals",
    /** Evolvable enum member */
    UnknownFutureValue = "unknownFutureValue",
}
