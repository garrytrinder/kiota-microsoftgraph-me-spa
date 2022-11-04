/** Provides operations to manage the user singleton. */
export enum FederatedIdpMfaBehavior {
    AcceptIfMfaDoneByFederatedIdp = "acceptIfMfaDoneByFederatedIdp",
    EnforceMfaByFederatedIdp = "enforceMfaByFederatedIdp",
    RejectMfaByFederatedIdp = "rejectMfaByFederatedIdp",
    UnknownFutureValue = "unknownFutureValue",
}
