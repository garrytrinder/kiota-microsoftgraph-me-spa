import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AssignedLicense implements Parsable {
    /** A collection of the unique identifiers for plans that have been disabled. */
    private _disabledPlans?: string[] | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The unique identifier for the SKU. */
    private _skuId?: string | undefined;
    /**
     * Instantiates a new assignedLicense and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.assignedLicense";
    };
    /**
     * Gets the disabledPlans property value. A collection of the unique identifiers for plans that have been disabled.
     * @returns a string
     */
    public get disabledPlans() {
        return this._disabledPlans;
    };
    /**
     * Sets the disabledPlans property value. A collection of the unique identifiers for plans that have been disabled.
     * @param value Value to set for the disabledPlans property.
     */
    public set disabledPlans(value: string[] | undefined) {
        this._disabledPlans = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "disabledPlans": n => { this.disabledPlans = n.getCollectionOfPrimitiveValues<string>(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "skuId": n => { this.skuId = n.getStringValue(); },
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
        writer.writeCollectionOfPrimitiveValues<string>("disabledPlans", this.disabledPlans);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("skuId", this.skuId);
    };
    /**
     * Gets the skuId property value. The unique identifier for the SKU.
     * @returns a string
     */
    public get skuId() {
        return this._skuId;
    };
    /**
     * Sets the skuId property value. The unique identifier for the SKU.
     * @param value Value to set for the skuId property.
     */
    public set skuId(value: string | undefined) {
        this._skuId = value;
    };
}
