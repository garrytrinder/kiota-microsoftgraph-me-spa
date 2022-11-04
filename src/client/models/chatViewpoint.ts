import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatViewpoint implements Parsable {
    /** Indicates whether the chat is hidden for the current user. */
    private _isHidden?: boolean | undefined;
    /** Represents the dateTime up until which the current user has read chatMessages in a specific chat. */
    private _lastMessageReadDateTime?: Date | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Instantiates a new chatViewpoint and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.chatViewpoint";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "isHidden": n => { this.isHidden = n.getBooleanValue(); },
            "lastMessageReadDateTime": n => { this.lastMessageReadDateTime = n.getDateValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the isHidden property value. Indicates whether the chat is hidden for the current user.
     * @returns a boolean
     */
    public get isHidden() {
        return this._isHidden;
    };
    /**
     * Sets the isHidden property value. Indicates whether the chat is hidden for the current user.
     * @param value Value to set for the isHidden property.
     */
    public set isHidden(value: boolean | undefined) {
        this._isHidden = value;
    };
    /**
     * Gets the lastMessageReadDateTime property value. Represents the dateTime up until which the current user has read chatMessages in a specific chat.
     * @returns a Date
     */
    public get lastMessageReadDateTime() {
        return this._lastMessageReadDateTime;
    };
    /**
     * Sets the lastMessageReadDateTime property value. Represents the dateTime up until which the current user has read chatMessages in a specific chat.
     * @param value Value to set for the lastMessageReadDateTime property.
     */
    public set lastMessageReadDateTime(value: Date | undefined) {
        this._lastMessageReadDateTime = value;
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
        writer.writeBooleanValue("isHidden", this.isHidden);
        writer.writeDateValue("lastMessageReadDateTime", this.lastMessageReadDateTime);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
