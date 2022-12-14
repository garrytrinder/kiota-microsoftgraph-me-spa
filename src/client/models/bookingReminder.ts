import {BookingReminderRecipients} from './bookingReminderRecipients';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** This type represents when and to whom to send an e-mail reminder. */
export class BookingReminder implements Parsable {
    /** The message in the reminder. */
    private _message?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The amount of time before the start of an appointment that the reminder should be sent. It's denoted in ISO 8601 format. */
    private _offset?: Duration | undefined;
    /** The recipients property */
    private _recipients?: BookingReminderRecipients | undefined;
    /**
     * Instantiates a new bookingReminder and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.bookingReminder";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "message": n => { this.message = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "offset": n => { this.offset = n.getDurationValue(); },
            "recipients": n => { this.recipients = n.getEnumValue<BookingReminderRecipients>(BookingReminderRecipients); },
        };
    };
    /**
     * Gets the message property value. The message in the reminder.
     * @returns a string
     */
    public get message() {
        return this._message;
    };
    /**
     * Sets the message property value. The message in the reminder.
     * @param value Value to set for the message property.
     */
    public set message(value: string | undefined) {
        this._message = value;
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
     * Gets the offset property value. The amount of time before the start of an appointment that the reminder should be sent. It's denoted in ISO 8601 format.
     * @returns a Duration
     */
    public get offset() {
        return this._offset;
    };
    /**
     * Sets the offset property value. The amount of time before the start of an appointment that the reminder should be sent. It's denoted in ISO 8601 format.
     * @param value Value to set for the offset property.
     */
    public set offset(value: Duration | undefined) {
        this._offset = value;
    };
    /**
     * Gets the recipients property value. The recipients property
     * @returns a bookingReminderRecipients
     */
    public get recipients() {
        return this._recipients;
    };
    /**
     * Sets the recipients property value. The recipients property
     * @param value Value to set for the recipients property.
     */
    public set recipients(value: BookingReminderRecipients | undefined) {
        this._recipients = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("message", this.message);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeDurationValue("offset", this.offset);
        writer.writeEnumValue<BookingReminderRecipients>("recipients", this.recipients);
    };
}
