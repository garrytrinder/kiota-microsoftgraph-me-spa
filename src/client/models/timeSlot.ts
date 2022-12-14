import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {DateTimeTimeZone} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeSlot implements Parsable {
    /** The end property */
    private _end?: DateTimeTimeZone | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The start property */
    private _start?: DateTimeTimeZone | undefined;
    /**
     * Instantiates a new timeSlot and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.timeSlot";
    };
    /**
     * Gets the end property value. The end property
     * @returns a dateTimeTimeZone
     */
    public get end() {
        return this._end;
    };
    /**
     * Sets the end property value. The end property
     * @param value Value to set for the end property.
     */
    public set end(value: DateTimeTimeZone | undefined) {
        this._end = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "end": n => { this.end = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "start": n => { this.start = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
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
        writer.writeObjectValue<DateTimeTimeZone>("end", this.end);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<DateTimeTimeZone>("start", this.start);
    };
    /**
     * Gets the start property value. The start property
     * @returns a dateTimeTimeZone
     */
    public get start() {
        return this._start;
    };
    /**
     * Sets the start property value. The start property
     * @param value Value to set for the start property.
     */
    public set start(value: DateTimeTimeZone | undefined) {
        this._start = value;
    };
}
