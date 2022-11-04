/** Provides operations to manage the user singleton. */
export enum RiskState {
    None = "none",
    ConfirmedSafe = "confirmedSafe",
    Remediated = "remediated",
    Dismissed = "dismissed",
    AtRisk = "atRisk",
    ConfirmedCompromised = "confirmedCompromised",
    UnknownFutureValue = "unknownFutureValue",
}
