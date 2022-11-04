import {RatingJapanMoviesType} from './ratingJapanMoviesType';
import {RatingJapanTelevisionType} from './ratingJapanTelevisionType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaContentRatingJapan implements Parsable {
    /** Movies rating labels in Japan */
    private _movieRating?: RatingJapanMoviesType | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** TV content rating labels in Japan */
    private _tvRating?: RatingJapanTelevisionType | undefined;
    /**
     * Instantiates a new mediaContentRatingJapan and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.mediaContentRatingJapan";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "movieRating": n => { this.movieRating = n.getEnumValue<RatingJapanMoviesType>(RatingJapanMoviesType); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "tvRating": n => { this.tvRating = n.getEnumValue<RatingJapanTelevisionType>(RatingJapanTelevisionType); },
        };
    };
    /**
     * Gets the movieRating property value. Movies rating labels in Japan
     * @returns a ratingJapanMoviesType
     */
    public get movieRating() {
        return this._movieRating;
    };
    /**
     * Sets the movieRating property value. Movies rating labels in Japan
     * @param value Value to set for the movieRating property.
     */
    public set movieRating(value: RatingJapanMoviesType | undefined) {
        this._movieRating = value;
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
        writer.writeEnumValue<RatingJapanMoviesType>("movieRating", this.movieRating);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeEnumValue<RatingJapanTelevisionType>("tvRating", this.tvRating);
    };
    /**
     * Gets the tvRating property value. TV content rating labels in Japan
     * @returns a ratingJapanTelevisionType
     */
    public get tvRating() {
        return this._tvRating;
    };
    /**
     * Sets the tvRating property value. TV content rating labels in Japan
     * @param value Value to set for the tvRating property.
     */
    public set tvRating(value: RatingJapanTelevisionType | undefined) {
        this._tvRating = value;
    };
}
