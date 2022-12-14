import {createChatMessageReactionIdentitySetFromDiscriminatorValue} from './createChatMessageReactionIdentitySetFromDiscriminatorValue';
import {ChatMessageReactionIdentitySet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatMessageReaction implements Parsable {
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _createdDateTime?: Date | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Supported values are like, angry, sad, laugh, heart, surprised. */
    private _reactionType?: string | undefined;
    /** The user property */
    private _user?: ChatMessageReactionIdentitySet | undefined;
    /**
     * Instantiates a new chatMessageReaction and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.chatMessageReaction";
    };
    /**
     * Gets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "reactionType": n => { this.reactionType = n.getStringValue(); },
            "user": n => { this.user = n.getObjectValue<ChatMessageReactionIdentitySet>(createChatMessageReactionIdentitySetFromDiscriminatorValue); },
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
     * Gets the reactionType property value. Supported values are like, angry, sad, laugh, heart, surprised.
     * @returns a string
     */
    public get reactionType() {
        return this._reactionType;
    };
    /**
     * Sets the reactionType property value. Supported values are like, angry, sad, laugh, heart, surprised.
     * @param value Value to set for the reactionType property.
     */
    public set reactionType(value: string | undefined) {
        this._reactionType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("reactionType", this.reactionType);
        writer.writeObjectValue<ChatMessageReactionIdentitySet>("user", this.user);
    };
    /**
     * Gets the user property value. The user property
     * @returns a chatMessageReactionIdentitySet
     */
    public get user() {
        return this._user;
    };
    /**
     * Sets the user property value. The user property
     * @param value Value to set for the user property.
     */
    public set user(value: ChatMessageReactionIdentitySet | undefined) {
        this._user = value;
    };
}
