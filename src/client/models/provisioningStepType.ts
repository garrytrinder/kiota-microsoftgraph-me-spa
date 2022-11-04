/** Provides operations to manage the user singleton. */
export enum ProvisioningStepType {
    Import_escaped = "import",
    Scoping = "scoping",
    Matching = "matching",
    Processing = "processing",
    ReferenceResolution = "referenceResolution",
    Export_escaped = "export",
    UnknownFutureValue = "unknownFutureValue",
}
