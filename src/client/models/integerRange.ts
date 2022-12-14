import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IntegerRange implements Parsable {
    /** The inclusive upper bound of the integer range. */
    private _end?: number | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The inclusive lower bound of the integer range. */
    private _start?: number | undefined;
    /**
     * Instantiates a new integerRange and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.integerRange";
    };
    /**
     * Gets the end property value. The inclusive upper bound of the integer range.
     * @returns a int64
     */
    public get end() {
        return this._end;
    };
    /**
     * Sets the end property value. The inclusive upper bound of the integer range.
     * @param value Value to set for the end property.
     */
    public set end(value: number | undefined) {
        this._end = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "end": n => { this.end = n.getNumberValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "start": n => { this.start = n.getNumberValue(); },
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
        writer.writeNumberValue("end", this.end);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeNumberValue("start", this.start);
    };
    /**
     * Gets the start property value. The inclusive lower bound of the integer range.
     * @returns a int64
     */
    public get start() {
        return this._start;
    };
    /**
     * Sets the start property value. The inclusive lower bound of the integer range.
     * @param value Value to set for the start property.
     */
    public set start(value: number | undefined) {
        this._start = value;
    };
}
