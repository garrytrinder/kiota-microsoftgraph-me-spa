/** Provides operations to manage the user singleton. */
export enum TeamworkApplicationIdentityType {
    AadApplication = "aadApplication",
    Bot = "bot",
    TenantBot = "tenantBot",
    Office365Connector = "office365Connector",
    OutgoingWebhook = "outgoingWebhook",
    UnknownFutureValue = "unknownFutureValue",
}
