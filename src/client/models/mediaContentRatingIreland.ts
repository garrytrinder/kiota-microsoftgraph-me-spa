import {RatingIrelandMoviesType} from './ratingIrelandMoviesType';
import {RatingIrelandTelevisionType} from './ratingIrelandTelevisionType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaContentRatingIreland implements Parsable {
    /** Movies rating labels in Ireland */
    private _movieRating?: RatingIrelandMoviesType | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** TV content rating labels in Ireland */
    private _tvRating?: RatingIrelandTelevisionType | undefined;
    /**
     * Instantiates a new mediaContentRatingIreland and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.mediaContentRatingIreland";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "movieRating": n => { this.movieRating = n.getEnumValue<RatingIrelandMoviesType>(RatingIrelandMoviesType); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "tvRating": n => { this.tvRating = n.getEnumValue<RatingIrelandTelevisionType>(RatingIrelandTelevisionType); },
        };
    };
    /**
     * Gets the movieRating property value. Movies rating labels in Ireland
     * @returns a ratingIrelandMoviesType
     */
    public get movieRating() {
        return this._movieRating;
    };
    /**
     * Sets the movieRating property value. Movies rating labels in Ireland
     * @param value Value to set for the movieRating property.
     */
    public set movieRating(value: RatingIrelandMoviesType | undefined) {
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
        writer.writeEnumValue<RatingIrelandMoviesType>("movieRating", this.movieRating);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeEnumValue<RatingIrelandTelevisionType>("tvRating", this.tvRating);
    };
    /**
     * Gets the tvRating property value. TV content rating labels in Ireland
     * @returns a ratingIrelandTelevisionType
     */
    public get tvRating() {
        return this._tvRating;
    };
    /**
     * Sets the tvRating property value. TV content rating labels in Ireland
     * @param value Value to set for the tvRating property.
     */
    public set tvRating(value: RatingIrelandTelevisionType | undefined) {
        this._tvRating = value;
    };
}
