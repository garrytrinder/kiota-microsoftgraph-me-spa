import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SigningCertificateUpdateStatus implements Parsable {
    /** Status of the last certificate update. Read-only. For a list of statuses, see certificateUpdateResult status. */
    private _certificateUpdateResult?: string | undefined;
    /** Date and time in ISO 8601 format and in UTC time when the certificate was last updated. Read-only. */
    private _lastRunDateTime?: Date | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Gets the certificateUpdateResult property value. Status of the last certificate update. Read-only. For a list of statuses, see certificateUpdateResult status.
     * @returns a string
     */
    public get certificateUpdateResult() {
        return this._certificateUpdateResult;
    };
    /**
     * Sets the certificateUpdateResult property value. Status of the last certificate update. Read-only. For a list of statuses, see certificateUpdateResult status.
     * @param value Value to set for the certificateUpdateResult property.
     */
    public set certificateUpdateResult(value: string | undefined) {
        this._certificateUpdateResult = value;
    };
    /**
     * Instantiates a new signingCertificateUpdateStatus and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.signingCertificateUpdateStatus";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "certificateUpdateResult": n => { this.certificateUpdateResult = n.getStringValue(); },
            "lastRunDateTime": n => { this.lastRunDateTime = n.getDateValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the lastRunDateTime property value. Date and time in ISO 8601 format and in UTC time when the certificate was last updated. Read-only.
     * @returns a Date
     */
    public get lastRunDateTime() {
        return this._lastRunDateTime;
    };
    /**
     * Sets the lastRunDateTime property value. Date and time in ISO 8601 format and in UTC time when the certificate was last updated. Read-only.
     * @param value Value to set for the lastRunDateTime property.
     */
    public set lastRunDateTime(value: Date | undefined) {
        this._lastRunDateTime = value;
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("certificateUpdateResult", this.certificateUpdateResult);
        writer.writeDateValue("lastRunDateTime", this.lastRunDateTime);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
