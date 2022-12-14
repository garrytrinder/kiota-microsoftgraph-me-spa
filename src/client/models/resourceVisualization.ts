import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ResourceVisualization implements Parsable {
    /** A string describing where the item is stored. For example, the name of a SharePoint site or the user name identifying the owner of the OneDrive storing the item. */
    private _containerDisplayName?: string | undefined;
    /** Can be used for filtering by the type of container in which the file is stored. Such as Site or OneDriveBusiness. */
    private _containerType?: string | undefined;
    /** A path leading to the folder in which the item is stored. */
    private _containerWebUrl?: string | undefined;
    /** The item's media type. Can be used for filtering for a specific type of file based on supported IANA Media Mime Types. Note that not all Media Mime Types are supported. */
    private _mediaType?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** A URL leading to the preview image for the item. */
    private _previewImageUrl?: string | undefined;
    /** A preview text for the item. */
    private _previewText?: string | undefined;
    /** The item's title text. */
    private _title?: string | undefined;
    /** The item's media type. Can be used for filtering for a specific file based on a specific type. See below for supported types. */
    private _type?: string | undefined;
    /**
     * Instantiates a new resourceVisualization and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.resourceVisualization";
    };
    /**
     * Gets the containerDisplayName property value. A string describing where the item is stored. For example, the name of a SharePoint site or the user name identifying the owner of the OneDrive storing the item.
     * @returns a string
     */
    public get containerDisplayName() {
        return this._containerDisplayName;
    };
    /**
     * Sets the containerDisplayName property value. A string describing where the item is stored. For example, the name of a SharePoint site or the user name identifying the owner of the OneDrive storing the item.
     * @param value Value to set for the containerDisplayName property.
     */
    public set containerDisplayName(value: string | undefined) {
        this._containerDisplayName = value;
    };
    /**
     * Gets the containerType property value. Can be used for filtering by the type of container in which the file is stored. Such as Site or OneDriveBusiness.
     * @returns a string
     */
    public get containerType() {
        return this._containerType;
    };
    /**
     * Sets the containerType property value. Can be used for filtering by the type of container in which the file is stored. Such as Site or OneDriveBusiness.
     * @param value Value to set for the containerType property.
     */
    public set containerType(value: string | undefined) {
        this._containerType = value;
    };
    /**
     * Gets the containerWebUrl property value. A path leading to the folder in which the item is stored.
     * @returns a string
     */
    public get containerWebUrl() {
        return this._containerWebUrl;
    };
    /**
     * Sets the containerWebUrl property value. A path leading to the folder in which the item is stored.
     * @param value Value to set for the containerWebUrl property.
     */
    public set containerWebUrl(value: string | undefined) {
        this._containerWebUrl = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "containerDisplayName": n => { this.containerDisplayName = n.getStringValue(); },
            "containerType": n => { this.containerType = n.getStringValue(); },
            "containerWebUrl": n => { this.containerWebUrl = n.getStringValue(); },
            "mediaType": n => { this.mediaType = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "previewImageUrl": n => { this.previewImageUrl = n.getStringValue(); },
            "previewText": n => { this.previewText = n.getStringValue(); },
            "title": n => { this.title = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
        };
    };
    /**
     * Gets the mediaType property value. The item's media type. Can be used for filtering for a specific type of file based on supported IANA Media Mime Types. Note that not all Media Mime Types are supported.
     * @returns a string
     */
    public get mediaType() {
        return this._mediaType;
    };
    /**
     * Sets the mediaType property value. The item's media type. Can be used for filtering for a specific type of file based on supported IANA Media Mime Types. Note that not all Media Mime Types are supported.
     * @param value Value to set for the mediaType property.
     */
    public set mediaType(value: string | undefined) {
        this._mediaType = value;
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
     * Gets the previewImageUrl property value. A URL leading to the preview image for the item.
     * @returns a string
     */
    public get previewImageUrl() {
        return this._previewImageUrl;
    };
    /**
     * Sets the previewImageUrl property value. A URL leading to the preview image for the item.
     * @param value Value to set for the previewImageUrl property.
     */
    public set previewImageUrl(value: string | undefined) {
        this._previewImageUrl = value;
    };
    /**
     * Gets the previewText property value. A preview text for the item.
     * @returns a string
     */
    public get previewText() {
        return this._previewText;
    };
    /**
     * Sets the previewText property value. A preview text for the item.
     * @param value Value to set for the previewText property.
     */
    public set previewText(value: string | undefined) {
        this._previewText = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("containerDisplayName", this.containerDisplayName);
        writer.writeStringValue("containerType", this.containerType);
        writer.writeStringValue("containerWebUrl", this.containerWebUrl);
        writer.writeStringValue("mediaType", this.mediaType);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("previewImageUrl", this.previewImageUrl);
        writer.writeStringValue("previewText", this.previewText);
        writer.writeStringValue("title", this.title);
        writer.writeStringValue("type", this.type);
    };
    /**
     * Gets the title property value. The item's title text.
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. The item's title text.
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
    /**
     * Gets the type property value. The item's media type. Can be used for filtering for a specific file based on a specific type. See below for supported types.
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The item's media type. Can be used for filtering for a specific file based on a specific type. See below for supported types.
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
}
