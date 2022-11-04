import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserAttributeValuesItem implements Parsable {
    /** Determines whether the value is set as the default. */
    private _isDefault?: boolean | undefined;
    /** The display name of the property displayed to the user in the user flow. */
    private _name?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The value that is set when this item is selected. */
    private _value?: string | undefined;
    /**
     * Instantiates a new userAttributeValuesItem and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.userAttributeValuesItem";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "isDefault": n => { this.isDefault = n.getBooleanValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Gets the isDefault property value. Determines whether the value is set as the default.
     * @returns a boolean
     */
    public get isDefault() {
        return this._isDefault;
    };
    /**
     * Sets the isDefault property value. Determines whether the value is set as the default.
     * @param value Value to set for the isDefault property.
     */
    public set isDefault(value: boolean | undefined) {
        this._isDefault = value;
    };
    /**
     * Gets the name property value. The display name of the property displayed to the user in the user flow.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The display name of the property displayed to the user in the user flow.
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
        writer.writeBooleanValue("isDefault", this.isDefault);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("value", this.value);
    };
    /**
     * Gets the value property value. The value that is set when this item is selected.
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value that is set when this item is selected.
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
    };
}
