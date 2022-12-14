import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamsTabConfiguration implements Parsable {
    /** Url used for rendering tab contents in Teams. Required. */
    private _contentUrl?: string | undefined;
    /** Identifier for the entity hosted by the tab provider. */
    private _entityId?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Url called by Teams client when a Tab is removed using the Teams Client. */
    private _removeUrl?: string | undefined;
    /** Url for showing tab contents outside of Teams. */
    private _websiteUrl?: string | undefined;
    /**
     * Instantiates a new teamsTabConfiguration and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.teamsTabConfiguration";
    };
    /**
     * Gets the contentUrl property value. Url used for rendering tab contents in Teams. Required.
     * @returns a string
     */
    public get contentUrl() {
        return this._contentUrl;
    };
    /**
     * Sets the contentUrl property value. Url used for rendering tab contents in Teams. Required.
     * @param value Value to set for the contentUrl property.
     */
    public set contentUrl(value: string | undefined) {
        this._contentUrl = value;
    };
    /**
     * Gets the entityId property value. Identifier for the entity hosted by the tab provider.
     * @returns a string
     */
    public get entityId() {
        return this._entityId;
    };
    /**
     * Sets the entityId property value. Identifier for the entity hosted by the tab provider.
     * @param value Value to set for the entityId property.
     */
    public set entityId(value: string | undefined) {
        this._entityId = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "contentUrl": n => { this.contentUrl = n.getStringValue(); },
            "entityId": n => { this.entityId = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "removeUrl": n => { this.removeUrl = n.getStringValue(); },
            "websiteUrl": n => { this.websiteUrl = n.getStringValue(); },
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
     * Gets the removeUrl property value. Url called by Teams client when a Tab is removed using the Teams Client.
     * @returns a string
     */
    public get removeUrl() {
        return this._removeUrl;
    };
    /**
     * Sets the removeUrl property value. Url called by Teams client when a Tab is removed using the Teams Client.
     * @param value Value to set for the removeUrl property.
     */
    public set removeUrl(value: string | undefined) {
        this._removeUrl = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("contentUrl", this.contentUrl);
        writer.writeStringValue("entityId", this.entityId);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("removeUrl", this.removeUrl);
        writer.writeStringValue("websiteUrl", this.websiteUrl);
    };
    /**
     * Gets the websiteUrl property value. Url for showing tab contents outside of Teams.
     * @returns a string
     */
    public get websiteUrl() {
        return this._websiteUrl;
    };
    /**
     * Sets the websiteUrl property value. Url for showing tab contents outside of Teams.
     * @param value Value to set for the websiteUrl property.
     */
    public set websiteUrl(value: string | undefined) {
        this._websiteUrl = value;
    };
}
