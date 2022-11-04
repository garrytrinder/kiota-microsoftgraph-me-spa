import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrivacyProfile implements Parsable {
    /** A valid smtp email address for the privacy statement contact. Not required. */
    private _contactEmail?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** A valid URL format that begins with http:// or https://. Maximum length is 255 characters. The URL that directs to the company's privacy statement. Not required. */
    private _statementUrl?: string | undefined;
    /**
     * Instantiates a new privacyProfile and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.privacyProfile";
    };
    /**
     * Gets the contactEmail property value. A valid smtp email address for the privacy statement contact. Not required.
     * @returns a string
     */
    public get contactEmail() {
        return this._contactEmail;
    };
    /**
     * Sets the contactEmail property value. A valid smtp email address for the privacy statement contact. Not required.
     * @param value Value to set for the contactEmail property.
     */
    public set contactEmail(value: string | undefined) {
        this._contactEmail = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "contactEmail": n => { this.contactEmail = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "statementUrl": n => { this.statementUrl = n.getStringValue(); },
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
        writer.writeStringValue("contactEmail", this.contactEmail);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("statementUrl", this.statementUrl);
    };
    /**
     * Gets the statementUrl property value. A valid URL format that begins with http:// or https://. Maximum length is 255 characters. The URL that directs to the company's privacy statement. Not required.
     * @returns a string
     */
    public get statementUrl() {
        return this._statementUrl;
    };
    /**
     * Sets the statementUrl property value. A valid URL format that begins with http:// or https://. Maximum length is 255 characters. The URL that directs to the company's privacy statement. Not required.
     * @param value Value to set for the statementUrl property.
     */
    public set statementUrl(value: string | undefined) {
        this._statementUrl = value;
    };
}
