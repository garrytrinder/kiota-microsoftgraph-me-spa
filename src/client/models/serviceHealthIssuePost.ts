import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {ItemBody} from './index';
import {PostType} from './postType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServiceHealthIssuePost implements Parsable {
    /** The published time of the post. */
    private _createdDateTime?: Date | undefined;
    /** The content of the service issue post. The supported value for the contentType property is html. */
    private _description?: ItemBody | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The post type of the service issue historical post. Possible values are: regular, quick, strategic, unknownFutureValue. */
    private _postType?: PostType | undefined;
    /**
     * Instantiates a new serviceHealthIssuePost and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.serviceHealthIssuePost";
    };
    /**
     * Gets the createdDateTime property value. The published time of the post.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The published time of the post.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the description property value. The content of the service issue post. The supported value for the contentType property is html.
     * @returns a itemBody
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The content of the service issue post. The supported value for the contentType property is html.
     * @param value Value to set for the description property.
     */
    public set description(value: ItemBody | undefined) {
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "postType": n => { this.postType = n.getEnumValue<PostType>(PostType); },
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
     * Gets the postType property value. The post type of the service issue historical post. Possible values are: regular, quick, strategic, unknownFutureValue.
     * @returns a postType
     */
    public get postType() {
        return this._postType;
    };
    /**
     * Sets the postType property value. The post type of the service issue historical post. Possible values are: regular, quick, strategic, unknownFutureValue.
     * @param value Value to set for the postType property.
     */
    public set postType(value: PostType | undefined) {
        this._postType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue<ItemBody>("description", this.description);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeEnumValue<PostType>("postType", this.postType);
    };
}
