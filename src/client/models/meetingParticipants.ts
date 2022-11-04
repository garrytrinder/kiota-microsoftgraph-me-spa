import {createMeetingParticipantInfoFromDiscriminatorValue} from './createMeetingParticipantInfoFromDiscriminatorValue';
import {MeetingParticipantInfo} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MeetingParticipants implements Parsable {
    /** The attendees property */
    private _attendees?: MeetingParticipantInfo[] | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The organizer property */
    private _organizer?: MeetingParticipantInfo | undefined;
    /**
     * Gets the attendees property value. The attendees property
     * @returns a meetingParticipantInfo
     */
    public get attendees() {
        return this._attendees;
    };
    /**
     * Sets the attendees property value. The attendees property
     * @param value Value to set for the attendees property.
     */
    public set attendees(value: MeetingParticipantInfo[] | undefined) {
        this._attendees = value;
    };
    /**
     * Instantiates a new meetingParticipants and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.meetingParticipants";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "attendees": n => { this.attendees = n.getCollectionOfObjectValues<MeetingParticipantInfo>(createMeetingParticipantInfoFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "organizer": n => { this.organizer = n.getObjectValue<MeetingParticipantInfo>(createMeetingParticipantInfoFromDiscriminatorValue); },
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
     * Gets the organizer property value. The organizer property
     * @returns a meetingParticipantInfo
     */
    public get organizer() {
        return this._organizer;
    };
    /**
     * Sets the organizer property value. The organizer property
     * @param value Value to set for the organizer property.
     */
    public set organizer(value: MeetingParticipantInfo | undefined) {
        this._organizer = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<MeetingParticipantInfo>("attendees", this.attendees);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<MeetingParticipantInfo>("organizer", this.organizer);
    };
}
