/** Provides operations to manage the user singleton. */
export enum UserFlowType {
    SignUp = "signUp",
    SignIn = "signIn",
    SignUpOrSignIn = "signUpOrSignIn",
    PasswordReset = "passwordReset",
    ProfileUpdate = "profileUpdate",
    ResourceOwner = "resourceOwner",
    UnknownFutureValue = "unknownFutureValue",
}
