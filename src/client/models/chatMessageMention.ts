import {createChatMessageMentionedIdentitySetFromDiscriminatorValue} from './createChatMessageMentionedIdentitySetFromDiscriminatorValue';
import {ChatMessageMentionedIdentitySet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatMessageMention implements Parsable {
    /** Index of an entity being mentioned in the specified chatMessage. Matches the {index} value in the corresponding <at id='{index}'> tag in the message body. */
    private _id?: number | undefined;
    /** The entity (user, application, team, or channel) that was @mentioned. */
    private _mentioned?: ChatMessageMentionedIdentitySet | undefined;
    /** String used to represent the mention. For example, a user's display name, a team name. */
    private _mentionText?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Instantiates a new chatMessageMention and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.chatMessageMention";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "id": n => { this.id = n.getNumberValue(); },
            "mentioned": n => { this.mentioned = n.getObjectValue<ChatMessageMentionedIdentitySet>(createChatMessageMentionedIdentitySetFromDiscriminatorValue); },
            "mentionText": n => { this.mentionText = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the id property value. Index of an entity being mentioned in the specified chatMessage. Matches the {index} value in the corresponding <at id='{index}'> tag in the message body.
     * @returns a integer
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. Index of an entity being mentioned in the specified chatMessage. Matches the {index} value in the corresponding <at id='{index}'> tag in the message body.
     * @param value Value to set for the id property.
     */
    public set id(value: number | undefined) {
        this._id = value;
    };
    /**
     * Gets the mentioned property value. The entity (user, application, team, or channel) that was @mentioned.
     * @returns a chatMessageMentionedIdentitySet
     */
    public get mentioned() {
        return this._mentioned;
    };
    /**
     * Sets the mentioned property value. The entity (user, application, team, or channel) that was @mentioned.
     * @param value Value to set for the mentioned property.
     */
    public set mentioned(value: ChatMessageMentionedIdentitySet | undefined) {
        this._mentioned = value;
    };
    /**
     * Gets the mentionText property value. String used to represent the mention. For example, a user's display name, a team name.
     * @returns a string
     */
    public get mentionText() {
        return this._mentionText;
    };
    /**
     * Sets the mentionText property value. String used to represent the mention. For example, a user's display name, a team name.
     * @param value Value to set for the mentionText property.
     */
    public set mentionText(value: string | undefined) {
        this._mentionText = value;
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
        writer.writeNumberValue("id", this.id);
        writer.writeObjectValue<ChatMessageMentionedIdentitySet>("mentioned", this.mentioned);
        writer.writeStringValue("mentionText", this.mentionText);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
