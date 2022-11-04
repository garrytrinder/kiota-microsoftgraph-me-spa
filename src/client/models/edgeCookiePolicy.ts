/** Provides operations to manage the user singleton. */
export enum EdgeCookiePolicy {
    /** Allow the user to set. */
    UserDefined = "userDefined",
    /** Allow. */
    Allow = "allow",
    /** Block only third party cookies. */
    BlockThirdParty = "blockThirdParty",
    /** Block all cookies. */
    BlockAll = "blockAll",
}
