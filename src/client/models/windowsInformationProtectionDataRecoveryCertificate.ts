import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Windows Information Protection DataRecoveryCertificate */
export class WindowsInformationProtectionDataRecoveryCertificate implements Parsable {
    /** Data recovery Certificate */
    private _certificate?: string | undefined;
    /** Data recovery Certificate description */
    private _description?: string | undefined;
    /** Data recovery Certificate expiration datetime */
    private _expirationDateTime?: Date | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Data recovery Certificate subject name */
    private _subjectName?: string | undefined;
    /**
     * Gets the certificate property value. Data recovery Certificate
     * @returns a binary
     */
    public get certificate() {
        return this._certificate;
    };
    /**
     * Sets the certificate property value. Data recovery Certificate
     * @param value Value to set for the certificate property.
     */
    public set certificate(value: string | undefined) {
        this._certificate = value;
    };
    /**
     * Instantiates a new windowsInformationProtectionDataRecoveryCertificate and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.windowsInformationProtectionDataRecoveryCertificate";
    };
    /**
     * Gets the description property value. Data recovery Certificate description
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Data recovery Certificate description
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the expirationDateTime property value. Data recovery Certificate expiration datetime
     * @returns a Date
     */
    public get expirationDateTime() {
        return this._expirationDateTime;
    };
    /**
     * Sets the expirationDateTime property value. Data recovery Certificate expiration datetime
     * @param value Value to set for the expirationDateTime property.
     */
    public set expirationDateTime(value: Date | undefined) {
        this._expirationDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "certificate": n => { this.certificate = n.getStringValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "expirationDateTime": n => { this.expirationDateTime = n.getDateValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "subjectName": n => { this.subjectName = n.getStringValue(); },
        };
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
        writer.writeStringValue("certificate", this.certificate);
        writer.writeStringValue("description", this.description);
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("subjectName", this.subjectName);
    };
    /**
     * Gets the subjectName property value. Data recovery Certificate subject name
     * @returns a string
     */
    public get subjectName() {
        return this._subjectName;
    };
    /**
     * Sets the subjectName property value. Data recovery Certificate subject name
     * @param value Value to set for the subjectName property.
     */
    public set subjectName(value: string | undefined) {
        this._subjectName = value;
    };
}
