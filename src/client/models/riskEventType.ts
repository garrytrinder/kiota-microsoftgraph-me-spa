/** Provides operations to manage the user singleton. */
export enum RiskEventType {
    UnlikelyTravel = "unlikelyTravel",
    AnonymizedIPAddress = "anonymizedIPAddress",
    MaliciousIPAddress = "maliciousIPAddress",
    UnfamiliarFeatures = "unfamiliarFeatures",
    MalwareInfectedIPAddress = "malwareInfectedIPAddress",
    SuspiciousIPAddress = "suspiciousIPAddress",
    LeakedCredentials = "leakedCredentials",
    InvestigationsThreatIntelligence = "investigationsThreatIntelligence",
    Generic = "generic",
    AdminConfirmedUserCompromised = "adminConfirmedUserCompromised",
    McasImpossibleTravel = "mcasImpossibleTravel",
    McasSuspiciousInboxManipulationRules = "mcasSuspiciousInboxManipulationRules",
    InvestigationsThreatIntelligenceSigninLinked = "investigationsThreatIntelligenceSigninLinked",
    MaliciousIPAddressValidCredentialsBlockedIP = "maliciousIPAddressValidCredentialsBlockedIP",
    UnknownFutureValue = "unknownFutureValue",
}
