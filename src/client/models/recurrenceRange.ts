import {RecurrenceRangeType} from './recurrenceRangeType';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RecurrenceRange implements Parsable {
    /** The date to stop applying the recurrence pattern. Depending on the recurrence pattern of the event, the last occurrence of the meeting may not be this date. Required if type is endDate. */
    private _endDate?: DateOnly | undefined;
    /** The number of times to repeat the event. Required and must be positive if type is numbered. */
    private _numberOfOccurrences?: number | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Time zone for the startDate and endDate properties. Optional. If not specified, the time zone of the event is used. */
    private _recurrenceTimeZone?: string | undefined;
    /** The date to start applying the recurrence pattern. The first occurrence of the meeting may be this date or later, depending on the recurrence pattern of the event. Must be the same value as the start property of the recurring event. Required. */
    private _startDate?: DateOnly | undefined;
    /** The recurrence range. The possible values are: endDate, noEnd, numbered. Required. */
    private _type?: RecurrenceRangeType | undefined;
    /**
     * Instantiates a new recurrenceRange and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.recurrenceRange";
    };
    /**
     * Gets the endDate property value. The date to stop applying the recurrence pattern. Depending on the recurrence pattern of the event, the last occurrence of the meeting may not be this date. Required if type is endDate.
     * @returns a DateOnly
     */
    public get endDate() {
        return this._endDate;
    };
    /**
     * Sets the endDate property value. The date to stop applying the recurrence pattern. Depending on the recurrence pattern of the event, the last occurrence of the meeting may not be this date. Required if type is endDate.
     * @param value Value to set for the endDate property.
     */
    public set endDate(value: DateOnly | undefined) {
        this._endDate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "endDate": n => { this.endDate = n.getDateOnlyValue(); },
            "numberOfOccurrences": n => { this.numberOfOccurrences = n.getNumberValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "recurrenceTimeZone": n => { this.recurrenceTimeZone = n.getStringValue(); },
            "startDate": n => { this.startDate = n.getDateOnlyValue(); },
            "type": n => { this.type = n.getEnumValue<RecurrenceRangeType>(RecurrenceRangeType); },
        };
    };
    /**
     * Gets the numberOfOccurrences property value. The number of times to repeat the event. Required and must be positive if type is numbered.
     * @returns a integer
     */
    public get numberOfOccurrences() {
        return this._numberOfOccurrences;
    };
    /**
     * Sets the numberOfOccurrences property value. The number of times to repeat the event. Required and must be positive if type is numbered.
     * @param value Value to set for the numberOfOccurrences property.
     */
    public set numberOfOccurrences(value: number | undefined) {
        this._numberOfOccurrences = value;
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
     * Gets the recurrenceTimeZone property value. Time zone for the startDate and endDate properties. Optional. If not specified, the time zone of the event is used.
     * @returns a string
     */
    public get recurrenceTimeZone() {
        return this._recurrenceTimeZone;
    };
    /**
     * Sets the recurrenceTimeZone property value. Time zone for the startDate and endDate properties. Optional. If not specified, the time zone of the event is used.
     * @param value Value to set for the recurrenceTimeZone property.
     */
    public set recurrenceTimeZone(value: string | undefined) {
        this._recurrenceTimeZone = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateOnlyValue("endDate", this.endDate);
        writer.writeNumberValue("numberOfOccurrences", this.numberOfOccurrences);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("recurrenceTimeZone", this.recurrenceTimeZone);
        writer.writeDateOnlyValue("startDate", this.startDate);
        writer.writeEnumValue<RecurrenceRangeType>("type", this.type);
    };
    /**
     * Gets the startDate property value. The date to start applying the recurrence pattern. The first occurrence of the meeting may be this date or later, depending on the recurrence pattern of the event. Must be the same value as the start property of the recurring event. Required.
     * @returns a DateOnly
     */
    public get startDate() {
        return this._startDate;
    };
    /**
     * Sets the startDate property value. The date to start applying the recurrence pattern. The first occurrence of the meeting may be this date or later, depending on the recurrence pattern of the event. Must be the same value as the start property of the recurring event. Required.
     * @param value Value to set for the startDate property.
     */
    public set startDate(value: DateOnly | undefined) {
        this._startDate = value;
    };
    /**
     * Gets the type property value. The recurrence range. The possible values are: endDate, noEnd, numbered. Required.
     * @returns a recurrenceRangeType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The recurrence range. The possible values are: endDate, noEnd, numbered. Required.
     * @param value Value to set for the type property.
     */
    public set type(value: RecurrenceRangeType | undefined) {
        this._type = value;
    };
}
