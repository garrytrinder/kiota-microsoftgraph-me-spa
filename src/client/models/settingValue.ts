import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SettingValue implements Parsable {
    /** Name of the setting (as defined by the groupSettingTemplate). */
    private _name?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Value of the setting. */
    private _value?: string | undefined;
    /**
     * Instantiates a new settingValue and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.settingValue";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "name": n => { this.name = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Gets the name property value. Name of the setting (as defined by the groupSettingTemplate).
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Name of the setting (as defined by the groupSettingTemplate).
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
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("value", this.value);
    };
    /**
     * Gets the value property value. Value of the setting.
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. Value of the setting.
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
    };
}
