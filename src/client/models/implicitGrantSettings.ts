import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ImplicitGrantSettings implements Parsable {
    /** Specifies whether this web application can request an access token using the OAuth 2.0 implicit flow. */
    private _enableAccessTokenIssuance?: boolean | undefined;
    /** Specifies whether this web application can request an ID token using the OAuth 2.0 implicit flow. */
    private _enableIdTokenIssuance?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Instantiates a new implicitGrantSettings and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.implicitGrantSettings";
    };
    /**
     * Gets the enableAccessTokenIssuance property value. Specifies whether this web application can request an access token using the OAuth 2.0 implicit flow.
     * @returns a boolean
     */
    public get enableAccessTokenIssuance() {
        return this._enableAccessTokenIssuance;
    };
    /**
     * Sets the enableAccessTokenIssuance property value. Specifies whether this web application can request an access token using the OAuth 2.0 implicit flow.
     * @param value Value to set for the enableAccessTokenIssuance property.
     */
    public set enableAccessTokenIssuance(value: boolean | undefined) {
        this._enableAccessTokenIssuance = value;
    };
    /**
     * Gets the enableIdTokenIssuance property value. Specifies whether this web application can request an ID token using the OAuth 2.0 implicit flow.
     * @returns a boolean
     */
    public get enableIdTokenIssuance() {
        return this._enableIdTokenIssuance;
    };
    /**
     * Sets the enableIdTokenIssuance property value. Specifies whether this web application can request an ID token using the OAuth 2.0 implicit flow.
     * @param value Value to set for the enableIdTokenIssuance property.
     */
    public set enableIdTokenIssuance(value: boolean | undefined) {
        this._enableIdTokenIssuance = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "enableAccessTokenIssuance": n => { this.enableAccessTokenIssuance = n.getBooleanValue(); },
            "enableIdTokenIssuance": n => { this.enableIdTokenIssuance = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
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
        writer.writeBooleanValue("enableAccessTokenIssuance", this.enableAccessTokenIssuance);
        writer.writeBooleanValue("enableIdTokenIssuance", this.enableIdTokenIssuance);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
