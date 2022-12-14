import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OptionalClaim implements Parsable {
    /** Additional properties of the claim. If a property exists in this collection, it modifies the behavior of the optional claim specified in the name property. */
    private _additionalProperties?: string[] | undefined;
    /** If the value is true, the claim specified by the client is necessary to ensure a smooth authorization experience for the specific task requested by the end user. The default value is false. */
    private _essential?: boolean | undefined;
    /** The name of the optional claim. */
    private _name?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The source (directory object) of the claim. There are predefined claims and user-defined claims from extension properties. If the source value is null, the claim is a predefined optional claim. If the source value is user, the value in the name property is the extension property from the user object. */
    private _source?: string | undefined;
    /**
     * Gets the additionalProperties property value. Additional properties of the claim. If a property exists in this collection, it modifies the behavior of the optional claim specified in the name property.
     * @returns a string
     */
    public get additionalProperties() {
        return this._additionalProperties;
    };
    /**
     * Sets the additionalProperties property value. Additional properties of the claim. If a property exists in this collection, it modifies the behavior of the optional claim specified in the name property.
     * @param value Value to set for the additionalProperties property.
     */
    public set additionalProperties(value: string[] | undefined) {
        this._additionalProperties = value;
    };
    /**
     * Instantiates a new optionalClaim and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.optionalClaim";
    };
    /**
     * Gets the essential property value. If the value is true, the claim specified by the client is necessary to ensure a smooth authorization experience for the specific task requested by the end user. The default value is false.
     * @returns a boolean
     */
    public get essential() {
        return this._essential;
    };
    /**
     * Sets the essential property value. If the value is true, the claim specified by the client is necessary to ensure a smooth authorization experience for the specific task requested by the end user. The default value is false.
     * @param value Value to set for the essential property.
     */
    public set essential(value: boolean | undefined) {
        this._essential = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "additionalProperties": n => { this.additionalProperties = n.getCollectionOfPrimitiveValues<string>(); },
            "essential": n => { this.essential = n.getBooleanValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "source": n => { this.source = n.getStringValue(); },
        };
    };
    /**
     * Gets the name property value. The name of the optional claim.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name of the optional claim.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
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
        writer.writeCollectionOfPrimitiveValues<string>("additionalProperties", this.additionalProperties);
        writer.writeBooleanValue("essential", this.essential);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("source", this.source);
    };
    /**
     * Gets the source property value. The source (directory object) of the claim. There are predefined claims and user-defined claims from extension properties. If the source value is null, the claim is a predefined optional claim. If the source value is user, the value in the name property is the extension property from the user object.
     * @returns a string
     */
    public get source() {
        return this._source;
    };
    /**
     * Sets the source property value. The source (directory object) of the claim. There are predefined claims and user-defined claims from extension properties. If the source value is null, the claim is a predefined optional claim. If the source value is user, the value in the name property is the extension property from the user object.
     * @param value Value to set for the source property.
     */
    public set source(value: string | undefined) {
        this._source = value;
    };
}
