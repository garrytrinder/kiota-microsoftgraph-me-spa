import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SelfServiceSignUpAuthenticationFlowConfiguration implements Parsable {
    /** Indicates whether self-service sign-up flow is enabled or disabled. The default value is false. This property is not a key. Required. */
    private _isEnabled?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Instantiates a new selfServiceSignUpAuthenticationFlowConfiguration and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.selfServiceSignUpAuthenticationFlowConfiguration";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "isEnabled": n => { this.isEnabled = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the isEnabled property value. Indicates whether self-service sign-up flow is enabled or disabled. The default value is false. This property is not a key. Required.
     * @returns a boolean
     */
    public get isEnabled() {
        return this._isEnabled;
    };
    /**
     * Sets the isEnabled property value. Indicates whether self-service sign-up flow is enabled or disabled. The default value is false. This property is not a key. Required.
     * @param value Value to set for the isEnabled property.
     */
    public set isEnabled(value: boolean | undefined) {
        this._isEnabled = value;
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
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
