import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ImageInfo implements Parsable {
    /** Optional; parameter used to indicate the server is able to render image dynamically in response to parameterization. For example – a high contrast image */
    private _addImageQuery?: boolean | undefined;
    /** Optional; alt-text accessible content for the image */
    private _alternateText?: string | undefined;
    /** The alternativeText property */
    private _alternativeText?: string | undefined;
    /** Optional; URI that points to an icon which represents the application used to generate the activity */
    private _iconUrl?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Gets the addImageQuery property value. Optional; parameter used to indicate the server is able to render image dynamically in response to parameterization. For example – a high contrast image
     * @returns a boolean
     */
    public get addImageQuery() {
        return this._addImageQuery;
    };
    /**
     * Sets the addImageQuery property value. Optional; parameter used to indicate the server is able to render image dynamically in response to parameterization. For example – a high contrast image
     * @param value Value to set for the addImageQuery property.
     */
    public set addImageQuery(value: boolean | undefined) {
        this._addImageQuery = value;
    };
    /**
     * Gets the alternateText property value. Optional; alt-text accessible content for the image
     * @returns a string
     */
    public get alternateText() {
        return this._alternateText;
    };
    /**
     * Sets the alternateText property value. Optional; alt-text accessible content for the image
     * @param value Value to set for the alternateText property.
     */
    public set alternateText(value: string | undefined) {
        this._alternateText = value;
    };
    /**
     * Gets the alternativeText property value. The alternativeText property
     * @returns a string
     */
    public get alternativeText() {
        return this._alternativeText;
    };
    /**
     * Sets the alternativeText property value. The alternativeText property
     * @param value Value to set for the alternativeText property.
     */
    public set alternativeText(value: string | undefined) {
        this._alternativeText = value;
    };
    /**
     * Instantiates a new imageInfo and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.imageInfo";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "addImageQuery": n => { this.addImageQuery = n.getBooleanValue(); },
            "alternateText": n => { this.alternateText = n.getStringValue(); },
            "alternativeText": n => { this.alternativeText = n.getStringValue(); },
            "iconUrl": n => { this.iconUrl = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the iconUrl property value. Optional; URI that points to an icon which represents the application used to generate the activity
     * @returns a string
     */
    public get iconUrl() {
        return this._iconUrl;
    };
    /**
     * Sets the iconUrl property value. Optional; URI that points to an icon which represents the application used to generate the activity
     * @param value Value to set for the iconUrl property.
     */
    public set iconUrl(value: string | undefined) {
        this._iconUrl = value;
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
        writer.writeBooleanValue("addImageQuery", this.addImageQuery);
        writer.writeStringValue("alternateText", this.alternateText);
        writer.writeStringValue("alternativeText", this.alternativeText);
        writer.writeStringValue("iconUrl", this.iconUrl);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
