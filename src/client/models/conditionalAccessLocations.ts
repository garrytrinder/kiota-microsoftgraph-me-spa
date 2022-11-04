import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessLocations implements Parsable {
    /** Location IDs excluded from scope of policy. */
    private _excludeLocations?: string[] | undefined;
    /** Location IDs in scope of policy unless explicitly excluded, All, or AllTrusted. */
    private _includeLocations?: string[] | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Instantiates a new conditionalAccessLocations and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.conditionalAccessLocations";
    };
    /**
     * Gets the excludeLocations property value. Location IDs excluded from scope of policy.
     * @returns a string
     */
    public get excludeLocations() {
        return this._excludeLocations;
    };
    /**
     * Sets the excludeLocations property value. Location IDs excluded from scope of policy.
     * @param value Value to set for the excludeLocations property.
     */
    public set excludeLocations(value: string[] | undefined) {
        this._excludeLocations = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "excludeLocations": n => { this.excludeLocations = n.getCollectionOfPrimitiveValues<string>(); },
            "includeLocations": n => { this.includeLocations = n.getCollectionOfPrimitiveValues<string>(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the includeLocations property value. Location IDs in scope of policy unless explicitly excluded, All, or AllTrusted.
     * @returns a string
     */
    public get includeLocations() {
        return this._includeLocations;
    };
    /**
     * Sets the includeLocations property value. Location IDs in scope of policy unless explicitly excluded, All, or AllTrusted.
     * @param value Value to set for the includeLocations property.
     */
    public set includeLocations(value: string[] | undefined) {
        this._includeLocations = value;
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
        writer.writeCollectionOfPrimitiveValues<string>("excludeLocations", this.excludeLocations);
        writer.writeCollectionOfPrimitiveValues<string>("includeLocations", this.includeLocations);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
