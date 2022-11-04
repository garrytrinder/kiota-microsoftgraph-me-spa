/** Provides operations to manage the user singleton. */
export enum TeamsAsyncOperationType {
    Invalid = "invalid",
    CloneTeam = "cloneTeam",
    ArchiveTeam = "archiveTeam",
    UnarchiveTeam = "unarchiveTeam",
    CreateTeam = "createTeam",
    UnknownFutureValue = "unknownFutureValue",
    TeamifyGroup = "teamifyGroup",
    CreateChannel = "createChannel",
}
