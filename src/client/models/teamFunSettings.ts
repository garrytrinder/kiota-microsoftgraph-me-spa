import {GiphyRatingType} from './giphyRatingType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamFunSettings implements Parsable {
    /** If set to true, enables users to include custom memes. */
    private _allowCustomMemes?: boolean | undefined;
    /** If set to true, enables Giphy use. */
    private _allowGiphy?: boolean | undefined;
    /** If set to true, enables users to include stickers and memes. */
    private _allowStickersAndMemes?: boolean | undefined;
    /** Giphy content rating. Possible values are: moderate, strict. */
    private _giphyContentRating?: GiphyRatingType | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Gets the allowCustomMemes property value. If set to true, enables users to include custom memes.
     * @returns a boolean
     */
    public get allowCustomMemes() {
        return this._allowCustomMemes;
    };
    /**
     * Sets the allowCustomMemes property value. If set to true, enables users to include custom memes.
     * @param value Value to set for the allowCustomMemes property.
     */
    public set allowCustomMemes(value: boolean | undefined) {
        this._allowCustomMemes = value;
    };
    /**
     * Gets the allowGiphy property value. If set to true, enables Giphy use.
     * @returns a boolean
     */
    public get allowGiphy() {
        return this._allowGiphy;
    };
    /**
     * Sets the allowGiphy property value. If set to true, enables Giphy use.
     * @param value Value to set for the allowGiphy property.
     */
    public set allowGiphy(value: boolean | undefined) {
        this._allowGiphy = value;
    };
    /**
     * Gets the allowStickersAndMemes property value. If set to true, enables users to include stickers and memes.
     * @returns a boolean
     */
    public get allowStickersAndMemes() {
        return this._allowStickersAndMemes;
    };
    /**
     * Sets the allowStickersAndMemes property value. If set to true, enables users to include stickers and memes.
     * @param value Value to set for the allowStickersAndMemes property.
     */
    public set allowStickersAndMemes(value: boolean | undefined) {
        this._allowStickersAndMemes = value;
    };
    /**
     * Instantiates a new teamFunSettings and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.teamFunSettings";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowCustomMemes": n => { this.allowCustomMemes = n.getBooleanValue(); },
            "allowGiphy": n => { this.allowGiphy = n.getBooleanValue(); },
            "allowStickersAndMemes": n => { this.allowStickersAndMemes = n.getBooleanValue(); },
            "giphyContentRating": n => { this.giphyContentRating = n.getEnumValue<GiphyRatingType>(GiphyRatingType); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the giphyContentRating property value. Giphy content rating. Possible values are: moderate, strict.
     * @returns a giphyRatingType
     */
    public get giphyContentRating() {
        return this._giphyContentRating;
    };
    /**
     * Sets the giphyContentRating property value. Giphy content rating. Possible values are: moderate, strict.
     * @param value Value to set for the giphyContentRating property.
     */
    public set giphyContentRating(value: GiphyRatingType | undefined) {
        this._giphyContentRating = value;
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
        writer.writeBooleanValue("allowCustomMemes", this.allowCustomMemes);
        writer.writeBooleanValue("allowGiphy", this.allowGiphy);
        writer.writeBooleanValue("allowStickersAndMemes", this.allowStickersAndMemes);
        writer.writeEnumValue<GiphyRatingType>("giphyContentRating", this.giphyContentRating);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
