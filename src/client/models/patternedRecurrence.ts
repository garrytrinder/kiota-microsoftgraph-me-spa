import {createRecurrencePatternFromDiscriminatorValue} from './createRecurrencePatternFromDiscriminatorValue';
import {createRecurrenceRangeFromDiscriminatorValue} from './createRecurrenceRangeFromDiscriminatorValue';
import {RecurrencePattern, RecurrenceRange} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PatternedRecurrence implements Parsable {
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The frequency of an event.  For access reviews: Do not specify this property for a one-time access review.  Only interval, dayOfMonth, and type (weekly, absoluteMonthly) properties of recurrencePattern are supported. */
    private _pattern?: RecurrencePattern | undefined;
    /** The duration of an event. */
    private _range?: RecurrenceRange | undefined;
    /**
     * Instantiates a new patternedRecurrence and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.patternedRecurrence";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "pattern": n => { this.pattern = n.getObjectValue<RecurrencePattern>(createRecurrencePatternFromDiscriminatorValue); },
            "range": n => { this.range = n.getObjectValue<RecurrenceRange>(createRecurrenceRangeFromDiscriminatorValue); },
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
     * Gets the pattern property value. The frequency of an event.  For access reviews: Do not specify this property for a one-time access review.  Only interval, dayOfMonth, and type (weekly, absoluteMonthly) properties of recurrencePattern are supported.
     * @returns a recurrencePattern
     */
    public get pattern() {
        return this._pattern;
    };
    /**
     * Sets the pattern property value. The frequency of an event.  For access reviews: Do not specify this property for a one-time access review.  Only interval, dayOfMonth, and type (weekly, absoluteMonthly) properties of recurrencePattern are supported.
     * @param value Value to set for the pattern property.
     */
    public set pattern(value: RecurrencePattern | undefined) {
        this._pattern = value;
    };
    /**
     * Gets the range property value. The duration of an event.
     * @returns a recurrenceRange
     */
    public get range() {
        return this._range;
    };
    /**
     * Sets the range property value. The duration of an event.
     * @param value Value to set for the range property.
     */
    public set range(value: RecurrenceRange | undefined) {
        this._range = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<RecurrencePattern>("pattern", this.pattern);
        writer.writeObjectValue<RecurrenceRange>("range", this.range);
    };
}
