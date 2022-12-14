import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class NumberColumn implements Parsable {
    /** How many decimal places to display. See below for information about the possible values. */
    private _decimalPlaces?: string | undefined;
    /** How the value should be presented in the UX. Must be one of number or percentage. If unspecified, treated as number. */
    private _displayAs?: string | undefined;
    /** The maximum permitted value. */
    private _maximum?: number | undefined;
    /** The minimum permitted value. */
    private _minimum?: number | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Instantiates a new numberColumn and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.numberColumn";
    };
    /**
     * Gets the decimalPlaces property value. How many decimal places to display. See below for information about the possible values.
     * @returns a string
     */
    public get decimalPlaces() {
        return this._decimalPlaces;
    };
    /**
     * Sets the decimalPlaces property value. How many decimal places to display. See below for information about the possible values.
     * @param value Value to set for the decimalPlaces property.
     */
    public set decimalPlaces(value: string | undefined) {
        this._decimalPlaces = value;
    };
    /**
     * Gets the displayAs property value. How the value should be presented in the UX. Must be one of number or percentage. If unspecified, treated as number.
     * @returns a string
     */
    public get displayAs() {
        return this._displayAs;
    };
    /**
     * Sets the displayAs property value. How the value should be presented in the UX. Must be one of number or percentage. If unspecified, treated as number.
     * @param value Value to set for the displayAs property.
     */
    public set displayAs(value: string | undefined) {
        this._displayAs = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "decimalPlaces": n => { this.decimalPlaces = n.getStringValue(); },
            "displayAs": n => { this.displayAs = n.getStringValue(); },
            "maximum": n => { this.maximum = n.getNumberValue(); },
            "minimum": n => { this.minimum = n.getNumberValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the maximum property value. The maximum permitted value.
     * @returns a double
     */
    public get maximum() {
        return this._maximum;
    };
    /**
     * Sets the maximum property value. The maximum permitted value.
     * @param value Value to set for the maximum property.
     */
    public set maximum(value: number | undefined) {
        this._maximum = value;
    };
    /**
     * Gets the minimum property value. The minimum permitted value.
     * @returns a double
     */
    public get minimum() {
        return this._minimum;
    };
    /**
     * Sets the minimum property value. The minimum permitted value.
     * @param value Value to set for the minimum property.
     */
    public set minimum(value: number | undefined) {
        this._minimum = value;
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
        writer.writeStringValue("decimalPlaces", this.decimalPlaces);
        writer.writeStringValue("displayAs", this.displayAs);
        writer.writeNumberValue("maximum", this.maximum);
        writer.writeNumberValue("minimum", this.minimum);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
