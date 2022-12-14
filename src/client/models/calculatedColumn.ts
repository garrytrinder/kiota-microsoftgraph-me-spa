import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CalculatedColumn implements Parsable {
    /** For dateTime output types, the format of the value. Must be one of dateOnly or dateTime. */
    private _format?: string | undefined;
    /** The formula used to compute the value for this column. */
    private _formula?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The output type used to format values in this column. Must be one of boolean, currency, dateTime, number, or text. */
    private _outputType?: string | undefined;
    /**
     * Instantiates a new calculatedColumn and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.calculatedColumn";
    };
    /**
     * Gets the format property value. For dateTime output types, the format of the value. Must be one of dateOnly or dateTime.
     * @returns a string
     */
    public get format() {
        return this._format;
    };
    /**
     * Sets the format property value. For dateTime output types, the format of the value. Must be one of dateOnly or dateTime.
     * @param value Value to set for the format property.
     */
    public set format(value: string | undefined) {
        this._format = value;
    };
    /**
     * Gets the formula property value. The formula used to compute the value for this column.
     * @returns a string
     */
    public get formula() {
        return this._formula;
    };
    /**
     * Sets the formula property value. The formula used to compute the value for this column.
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
            "format": n => { this.format = n.getStringValue(); },
            "formula": n => { this.formula = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "outputType": n => { this.outputType = n.getStringValue(); },
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
     * Gets the outputType property value. The output type used to format values in this column. Must be one of boolean, currency, dateTime, number, or text.
     * @returns a string
     */
    public get outputType() {
        return this._outputType;
    };
    /**
     * Sets the outputType property value. The output type used to format values in this column. Must be one of boolean, currency, dateTime, number, or text.
     * @param value Value to set for the outputType property.
     */
    public set outputType(value: string | undefined) {
        this._outputType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("format", this.format);
        writer.writeStringValue("formula", this.formula);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("outputType", this.outputType);
    };
}
