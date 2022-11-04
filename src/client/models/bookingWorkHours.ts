import {createBookingWorkTimeSlotFromDiscriminatorValue} from './createBookingWorkTimeSlotFromDiscriminatorValue';
import {DayOfWeek} from './dayOfWeek';
import {BookingWorkTimeSlot} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** This type represents the set of working hours in a single day of the week. */
export class BookingWorkHours implements Parsable {
    /** The day property */
    private _day?: DayOfWeek | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** A list of start/end times during a day. */
    private _timeSlots?: BookingWorkTimeSlot[] | undefined;
    /**
     * Instantiates a new bookingWorkHours and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.bookingWorkHours";
    };
    /**
     * Gets the day property value. The day property
     * @returns a dayOfWeek
     */
    public get day() {
        return this._day;
    };
    /**
     * Sets the day property value. The day property
     * @param value Value to set for the day property.
     */
    public set day(value: DayOfWeek | undefined) {
        this._day = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "day": n => { this.day = n.getEnumValue<DayOfWeek>(DayOfWeek); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "timeSlots": n => { this.timeSlots = n.getCollectionOfObjectValues<BookingWorkTimeSlot>(createBookingWorkTimeSlotFromDiscriminatorValue); },
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
        writer.writeEnumValue<DayOfWeek>("day", this.day);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeCollectionOfObjectValues<BookingWorkTimeSlot>("timeSlots", this.timeSlots);
    };
    /**
     * Gets the timeSlots property value. A list of start/end times during a day.
     * @returns a bookingWorkTimeSlot
     */
    public get timeSlots() {
        return this._timeSlots;
    };
    /**
     * Sets the timeSlots property value. A list of start/end times during a day.
     * @param value Value to set for the timeSlots property.
     */
    public set timeSlots(value: BookingWorkTimeSlot[] | undefined) {
        this._timeSlots = value;
    };
}
