/** Provides operations to manage the user singleton. */
export enum RiskDetail {
    None = "none",
    AdminGeneratedTemporaryPassword = "adminGeneratedTemporaryPassword",
    UserPerformedSecuredPasswordChange = "userPerformedSecuredPasswordChange",
    UserPerformedSecuredPasswordReset = "userPerformedSecuredPasswordReset",
    AdminConfirmedSigninSafe = "adminConfirmedSigninSafe",
    AiConfirmedSigninSafe = "aiConfirmedSigninSafe",
    UserPassedMFADrivenByRiskBasedPolicy = "userPassedMFADrivenByRiskBasedPolicy",
    AdminDismissedAllRiskForUser = "adminDismissedAllRiskForUser",
    AdminConfirmedSigninCompromised = "adminConfirmedSigninCompromised",
    Hidden = "hidden",
    AdminConfirmedUserCompromised = "adminConfirmedUserCompromised",
    UnknownFutureValue = "unknownFutureValue",
    M365DAdminDismissedDetection = "m365DAdminDismissedDetection",
}
