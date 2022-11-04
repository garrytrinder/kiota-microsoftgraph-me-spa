import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChannelIdentity implements Parsable {
    /** The identity of the channel in which the message was posted. */
    private _channelId?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The identity of the team in which the message was posted. */
    private _teamId?: string | undefined;
    /**
     * Gets the channelId property value. The identity of the channel in which the message was posted.
     * @returns a string
     */
    public get channelId() {
        return this._channelId;
    };
    /**
     * Sets the channelId property value. The identity of the channel in which the message was posted.
     * @param value Value to set for the channelId property.
     */
    public set channelId(value: string | undefined) {
        this._channelId = value;
    };
    /**
     * Instantiates a new channelIdentity and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.channelIdentity";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "channelId": n => { this.channelId = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "teamId": n => { this.teamId = n.getStringValue(); },
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
        writer.writeStringValue("channelId", this.channelId);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("teamId", this.teamId);
    };
    /**
     * Gets the teamId property value. The identity of the team in which the message was posted.
     * @returns a string
     */
    public get teamId() {
        return this._teamId;
    };
    /**
     * Sets the teamId property value. The identity of the team in which the message was posted.
     * @param value Value to set for the teamId property.
     */
    public set teamId(value: string | undefined) {
        this._teamId = value;
    };
}
