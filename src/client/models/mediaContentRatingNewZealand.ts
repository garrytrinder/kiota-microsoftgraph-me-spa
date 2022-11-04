import {RatingNewZealandMoviesType} from './ratingNewZealandMoviesType';
import {RatingNewZealandTelevisionType} from './ratingNewZealandTelevisionType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaContentRatingNewZealand implements Parsable {
    /** Movies rating labels in New Zealand */
    private _movieRating?: RatingNewZealandMoviesType | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** TV content rating labels in New Zealand */
    private _tvRating?: RatingNewZealandTelevisionType | undefined;
    /**
     * Instantiates a new mediaContentRatingNewZealand and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.mediaContentRatingNewZealand";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "movieRating": n => { this.movieRating = n.getEnumValue<RatingNewZealandMoviesType>(RatingNewZealandMoviesType); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "tvRating": n => { this.tvRating = n.getEnumValue<RatingNewZealandTelevisionType>(RatingNewZealandTelevisionType); },
        };
    };
    /**
     * Gets the movieRating property value. Movies rating labels in New Zealand
     * @returns a ratingNewZealandMoviesType
     */
    public get movieRating() {
        return this._movieRating;
    };
    /**
     * Sets the movieRating property value. Movies rating labels in New Zealand
     * @param value Value to set for the movieRating property.
     */
    public set movieRating(value: RatingNewZealandMoviesType | undefined) {
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
        writer.writeEnumValue<RatingNewZealandMoviesType>("movieRating", this.movieRating);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeEnumValue<RatingNewZealandTelevisionType>("tvRating", this.tvRating);
    };
    /**
     * Gets the tvRating property value. TV content rating labels in New Zealand
     * @returns a ratingNewZealandTelevisionType
     */
    public get tvRating() {
        return this._tvRating;
    };
    /**
     * Sets the tvRating property value. TV content rating labels in New Zealand
     * @param value Value to set for the tvRating property.
     */
    public set tvRating(value: RatingNewZealandTelevisionType | undefined) {
        this._tvRating = value;
    };
}
