import {createTeamworkUserIdentityFromDiscriminatorValue} from './createTeamworkUserIdentityFromDiscriminatorValue';
import {TeamworkUserIdentity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamworkOnlineMeetingInfo implements Parsable {
    /** The identifier of the calendar event associated with the meeting. */
    private _calendarEventId?: string | undefined;
    /** The URL that users click to join or uniquely identify the meeting. */
    private _joinWebUrl?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The organizer of the meeting. */
    private _organizer?: TeamworkUserIdentity | undefined;
    /**
     * Gets the calendarEventId property value. The identifier of the calendar event associated with the meeting.
     * @returns a string
     */
    public get calendarEventId() {
        return this._calendarEventId;
    };
    /**
     * Sets the calendarEventId property value. The identifier of the calendar event associated with the meeting.
     * @param value Value to set for the calendarEventId property.
     */
    public set calendarEventId(value: string | undefined) {
        this._calendarEventId = value;
    };
    /**
     * Instantiates a new teamworkOnlineMeetingInfo and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.teamworkOnlineMeetingInfo";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "calendarEventId": n => { this.calendarEventId = n.getStringValue(); },
            "joinWebUrl": n => { this.joinWebUrl = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "organizer": n => { this.organizer = n.getObjectValue<TeamworkUserIdentity>(createTeamworkUserIdentityFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the joinWebUrl property value. The URL that users click to join or uniquely identify the meeting.
     * @returns a string
     */
    public get joinWebUrl() {
        return this._joinWebUrl;
    };
    /**
     * Sets the joinWebUrl property value. The URL that users click to join or uniquely identify the meeting.
     * @param value Value to set for the joinWebUrl property.
     */
    public set joinWebUrl(value: string | undefined) {
        this._joinWebUrl = value;
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
     * Gets the organizer property value. The organizer of the meeting.
     * @returns a teamworkUserIdentity
     */
    public get organizer() {
        return this._organizer;
    };
    /**
     * Sets the organizer property value. The organizer of the meeting.
     * @param value Value to set for the organizer property.
     */
    public set organizer(value: TeamworkUserIdentity | undefined) {
        this._organizer = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("calendarEventId", this.calendarEventId);
        writer.writeStringValue("joinWebUrl", this.joinWebUrl);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<TeamworkUserIdentity>("organizer", this.organizer);
    };
}
