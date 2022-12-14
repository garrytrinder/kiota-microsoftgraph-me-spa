import {createPatternedRecurrenceFromDiscriminatorValue} from './createPatternedRecurrenceFromDiscriminatorValue';
import {createTimeRangeFromDiscriminatorValue} from './createTimeRangeFromDiscriminatorValue';
import {PatternedRecurrence, TimeRange} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ShiftAvailability implements Parsable {
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Specifies the pattern for recurrence */
    private _recurrence?: PatternedRecurrence | undefined;
    /** The time slot(s) preferred by the user. */
    private _timeSlots?: TimeRange[] | undefined;
    /** Specifies the time zone for the indicated time. */
    private _timeZone?: string | undefined;
    /**
     * Instantiates a new shiftAvailability and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.shiftAvailability";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "recurrence": n => { this.recurrence = n.getObjectValue<PatternedRecurrence>(createPatternedRecurrenceFromDiscriminatorValue); },
            "timeSlots": n => { this.timeSlots = n.getCollectionOfObjectValues<TimeRange>(createTimeRangeFromDiscriminatorValue); },
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
     * Gets the recurrence property value. Specifies the pattern for recurrence
     * @returns a patternedRecurrence
     */
    public get recurrence() {
        return this._recurrence;
    };
    /**
     * Sets the recurrence property value. Specifies the pattern for recurrence
     * @param value Value to set for the recurrence property.
     */
    public set recurrence(value: PatternedRecurrence | undefined) {
        this._recurrence = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<PatternedRecurrence>("recurrence", this.recurrence);
        writer.writeCollectionOfObjectValues<TimeRange>("timeSlots", this.timeSlots);
        writer.writeStringValue("timeZone", this.timeZone);
    };
    /**
     * Gets the timeSlots property value. The time slot(s) preferred by the user.
     * @returns a timeRange
     */
    public get timeSlots() {
        return this._timeSlots;
    };
    /**
     * Sets the timeSlots property value. The time slot(s) preferred by the user.
     * @param value Value to set for the timeSlots property.
     */
    public set timeSlots(value: TimeRange[] | undefined) {
        this._timeSlots = value;
    };
    /**
     * Gets the timeZone property value. Specifies the time zone for the indicated time.
     * @returns a string
     */
    public get timeZone() {
        return this._timeZone;
    };
    /**
     * Sets the timeZone property value. Specifies the time zone for the indicated time.
     * @param value Value to set for the timeZone property.
     */
    public set timeZone(value: string | undefined) {
        this._timeZone = value;
    };
}
