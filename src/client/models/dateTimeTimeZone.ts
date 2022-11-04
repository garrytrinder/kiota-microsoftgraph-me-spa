import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DateTimeTimeZone implements Parsable {
    /** A single point of time in a combined date and time representation ({date}T{time}; for example, 2017-08-29T04:00:00.0000000). */
    private _dateTime?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Represents a time zone, for example, 'Pacific Standard Time'. See below for more possible values. */
    private _timeZone?: string | undefined;
    /**
     * Instantiates a new dateTimeTimeZone and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.dateTimeTimeZone";
    };
    /**
     * Gets the dateTime property value. A single point of time in a combined date and time representation ({date}T{time}; for example, 2017-08-29T04:00:00.0000000).
     * @returns a string
     */
    public get dateTime() {
        return this._dateTime;
    };
    /**
     * Sets the dateTime property value. A single point of time in a combined date and time representation ({date}T{time}; for example, 2017-08-29T04:00:00.0000000).
     * @param value Value to set for the dateTime property.
     */
    public set dateTime(value: string | undefined) {
        this._dateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "dateTime": n => { this.dateTime = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "timeZone": n => { this.timeZone = n.getStringValue(); },
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
        writer.writeStringValue("dateTime", this.dateTime);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("timeZone", this.timeZone);
    };
    /**
     * Gets the timeZone property value. Represents a time zone, for example, 'Pacific Standard Time'. See below for more possible values.
     * @returns a string
     */
    public get timeZone() {
        return this._timeZone;
    };
    /**
     * Sets the timeZone property value. Represents a time zone, for example, 'Pacific Standard Time'. See below for more possible values.
     * @param value Value to set for the timeZone property.
     */
    public set timeZone(value: string | undefined) {
        this._timeZone = value;
    };
}
