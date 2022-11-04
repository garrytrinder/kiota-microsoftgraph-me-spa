import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ModifiedProperty implements Parsable {
    /** Indicates the property name of the target attribute that was changed. */
    private _displayName?: string | undefined;
    /** Indicates the updated value for the propery. */
    private _newValue?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Indicates the previous value (before the update) for the property. */
    private _oldValue?: string | undefined;
    /**
     * Instantiates a new modifiedProperty and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.modifiedProperty";
    };
    /**
     * Gets the displayName property value. Indicates the property name of the target attribute that was changed.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Indicates the property name of the target attribute that was changed.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "newValue": n => { this.newValue = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "oldValue": n => { this.oldValue = n.getStringValue(); },
        };
    };
    /**
     * Gets the newValue property value. Indicates the updated value for the propery.
     * @returns a string
     */
    public get newValue() {
        return this._newValue;
    };
    /**
     * Sets the newValue property value. Indicates the updated value for the propery.
     * @param value Value to set for the newValue property.
     */
    public set newValue(value: string | undefined) {
        this._newValue = value;
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
     * Gets the oldValue property value. Indicates the previous value (before the update) for the property.
     * @returns a string
     */
    public get oldValue() {
        return this._oldValue;
    };
    /**
     * Sets the oldValue property value. Indicates the previous value (before the update) for the property.
     * @param value Value to set for the oldValue property.
     */
    public set oldValue(value: string | undefined) {
        this._oldValue = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("newValue", this.newValue);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("oldValue", this.oldValue);
    };
}
