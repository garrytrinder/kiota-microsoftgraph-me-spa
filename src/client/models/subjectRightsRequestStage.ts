/** Provides operations to manage the user singleton. */
export enum SubjectRightsRequestStage {
    ContentRetrieval = "contentRetrieval",
    ContentReview = "contentReview",
    GenerateReport = "generateReport",
    ContentDeletion = "contentDeletion",
    CaseResolved = "caseResolved",
    ContentEstimate = "contentEstimate",
    UnknownFutureValue = "unknownFutureValue",
}
