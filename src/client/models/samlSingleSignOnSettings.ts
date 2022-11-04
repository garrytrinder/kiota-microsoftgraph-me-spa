import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SamlSingleSignOnSettings implements Parsable {
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The relative URI the service provider would redirect to after completion of the single sign-on flow. */
    private _relayState?: string | undefined;
    /**
     * Instantiates a new samlSingleSignOnSettings and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.samlSingleSignOnSettings";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "relayState": n => { this.relayState = n.getStringValue(); },
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
     * Gets the relayState property value. The relative URI the service provider would redirect to after completion of the single sign-on flow.
     * @returns a string
     */
    public get relayState() {
        return this._relayState;
    };
    /**
     * Sets the relayState property value. The relative URI the service provider would redirect to after completion of the single sign-on flow.
     * @param value Value to set for the relayState property.
     */
    public set relayState(value: string | undefined) {
        this._relayState = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("relayState", this.relayState);
    };
}
