/** Provides operations to manage the user singleton. */
export enum AccessReviewExpirationBehavior {
    KeepAccess = "keepAccess",
    RemoveAccess = "removeAccess",
    AcceptAccessRecommendation = "acceptAccessRecommendation",
    UnknownFutureValue = "unknownFutureValue",
}
