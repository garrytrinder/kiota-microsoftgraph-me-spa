import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamMessagingSettings implements Parsable {
    /** If set to true, @channel mentions are allowed. */
    private _allowChannelMentions?: boolean | undefined;
    /** If set to true, owners can delete any message. */
    private _allowOwnerDeleteMessages?: boolean | undefined;
    /** If set to true, @team mentions are allowed. */
    private _allowTeamMentions?: boolean | undefined;
    /** If set to true, users can delete their messages. */
    private _allowUserDeleteMessages?: boolean | undefined;
    /** If set to true, users can edit their messages. */
    private _allowUserEditMessages?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Gets the allowChannelMentions property value. If set to true, @channel mentions are allowed.
     * @returns a boolean
     */
    public get allowChannelMentions() {
        return this._allowChannelMentions;
    };
    /**
     * Sets the allowChannelMentions property value. If set to true, @channel mentions are allowed.
     * @param value Value to set for the allowChannelMentions property.
     */
    public set allowChannelMentions(value: boolean | undefined) {
        this._allowChannelMentions = value;
    };
    /**
     * Gets the allowOwnerDeleteMessages property value. If set to true, owners can delete any message.
     * @returns a boolean
     */
    public get allowOwnerDeleteMessages() {
        return this._allowOwnerDeleteMessages;
    };
    /**
     * Sets the allowOwnerDeleteMessages property value. If set to true, owners can delete any message.
     * @param value Value to set for the allowOwnerDeleteMessages property.
     */
    public set allowOwnerDeleteMessages(value: boolean | undefined) {
        this._allowOwnerDeleteMessages = value;
    };
    /**
     * Gets the allowTeamMentions property value. If set to true, @team mentions are allowed.
     * @returns a boolean
     */
    public get allowTeamMentions() {
        return this._allowTeamMentions;
    };
    /**
     * Sets the allowTeamMentions property value. If set to true, @team mentions are allowed.
     * @param value Value to set for the allowTeamMentions property.
     */
    public set allowTeamMentions(value: boolean | undefined) {
        this._allowTeamMentions = value;
    };
    /**
     * Gets the allowUserDeleteMessages property value. If set to true, users can delete their messages.
     * @returns a boolean
     */
    public get allowUserDeleteMessages() {
        return this._allowUserDeleteMessages;
    };
    /**
     * Sets the allowUserDeleteMessages property value. If set to true, users can delete their messages.
     * @param value Value to set for the allowUserDeleteMessages property.
     */
    public set allowUserDeleteMessages(value: boolean | undefined) {
        this._allowUserDeleteMessages = value;
    };
    /**
     * Gets the allowUserEditMessages property value. If set to true, users can edit their messages.
     * @returns a boolean
     */
    public get allowUserEditMessages() {
        return this._allowUserEditMessages;
    };
    /**
     * Sets the allowUserEditMessages property value. If set to true, users can edit their messages.
     * @param value Value to set for the allowUserEditMessages property.
     */
    public set allowUserEditMessages(value: boolean | undefined) {
        this._allowUserEditMessages = value;
    };
    /**
     * Instantiates a new teamMessagingSettings and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.teamMessagingSettings";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowChannelMentions": n => { this.allowChannelMentions = n.getBooleanValue(); },
            "allowOwnerDeleteMessages": n => { this.allowOwnerDeleteMessages = n.getBooleanValue(); },
            "allowTeamMentions": n => { this.allowTeamMentions = n.getBooleanValue(); },
            "allowUserDeleteMessages": n => { this.allowUserDeleteMessages = n.getBooleanValue(); },
            "allowUserEditMessages": n => { this.allowUserEditMessages = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
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
        writer.writeBooleanValue("allowChannelMentions", this.allowChannelMentions);
        writer.writeBooleanValue("allowOwnerDeleteMessages", this.allowOwnerDeleteMessages);
        writer.writeBooleanValue("allowTeamMentions", this.allowTeamMentions);
        writer.writeBooleanValue("allowUserDeleteMessages", this.allowUserDeleteMessages);
        writer.writeBooleanValue("allowUserEditMessages", this.allowUserEditMessages);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
