import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DefaultColumnValue implements Parsable {
    /** The formula used to compute the default value for this column. */
    private _formula?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The direct value to use as the default value for this column. */
    private _value?: string | undefined;
    /**
     * Instantiates a new defaultColumnValue and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.defaultColumnValue";
    };
    /**
     * Gets the formula property value. The formula used to compute the default value for this column.
     * @returns a string
     */
    public get formula() {
        return this._formula;
    };
    /**
     * Sets the formula property value. The formula used to compute the default value for this column.
     * @param value Value to set for the formula property.
     */
    public set formula(value: string | undefined) {
        this._formula = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "formula": n => { this.formula = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "value": n => { this.value = n.getStringValue(); },
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
        writer.writeStringValue("formula", this.formula);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("value", this.value);
    };
    /**
     * Gets the value property value. The direct value to use as the default value for this column.
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The direct value to use as the default value for this column.
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
    };
}
