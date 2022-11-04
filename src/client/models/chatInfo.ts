import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatInfo implements Parsable {
    /** The unique identifier of a message in a Microsoft Teams channel. */
    private _messageId?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The ID of the reply message. */
    private _replyChainMessageId?: string | undefined;
    /** The unique identifier for a thread in Microsoft Teams. */
    private _threadId?: string | undefined;
    /**
     * Instantiates a new chatInfo and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.chatInfo";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "messageId": n => { this.messageId = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "replyChainMessageId": n => { this.replyChainMessageId = n.getStringValue(); },
            "threadId": n => { this.threadId = n.getStringValue(); },
        };
    };
    /**
     * Gets the messageId property value. The unique identifier of a message in a Microsoft Teams channel.
     * @returns a string
     */
    public get messageId() {
        return this._messageId;
    };
    /**
     * Sets the messageId property value. The unique identifier of a message in a Microsoft Teams channel.
     * @param value Value to set for the messageId property.
     */
    public set messageId(value: string | undefined) {
        this._messageId = value;
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
     * Gets the replyChainMessageId property value. The ID of the reply message.
     * @returns a string
     */
    public get replyChainMessageId() {
        return this._replyChainMessageId;
    };
    /**
     * Sets the replyChainMessageId property value. The ID of the reply message.
     * @param value Value to set for the replyChainMessageId property.
     */
    public set replyChainMessageId(value: string | undefined) {
        this._replyChainMessageId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("messageId", this.messageId);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("replyChainMessageId", this.replyChainMessageId);
        writer.writeStringValue("threadId", this.threadId);
    };
    /**
     * Gets the threadId property value. The unique identifier for a thread in Microsoft Teams.
     * @returns a string
     */
    public get threadId() {
        return this._threadId;
    };
    /**
     * Sets the threadId property value. The unique identifier for a thread in Microsoft Teams.
     * @param value Value to set for the threadId property.
     */
    public set threadId(value: string | undefined) {
        this._threadId = value;
    };
}
