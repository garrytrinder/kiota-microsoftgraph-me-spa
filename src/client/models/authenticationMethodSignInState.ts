/** Provides operations to manage the user singleton. */
export enum AuthenticationMethodSignInState {
    NotSupported = "notSupported",
    NotAllowedByPolicy = "notAllowedByPolicy",
    NotEnabled = "notEnabled",
    PhoneNumberNotUnique = "phoneNumberNotUnique",
    Ready = "ready",
    NotConfigured = "notConfigured",
    UnknownFutureValue = "unknownFutureValue",
}
