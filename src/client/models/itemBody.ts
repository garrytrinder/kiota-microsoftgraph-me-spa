import {BodyType} from './bodyType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ItemBody implements Parsable {
    /** The content of the item. */
    private _content?: string | undefined;
    /** The type of the content. Possible values are text and html. */
    private _contentType?: BodyType | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Instantiates a new itemBody and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.itemBody";
    };
    /**
     * Gets the content property value. The content of the item.
     * @returns a string
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. The content of the item.
     * @param value Value to set for the content property.
     */
    public set content(value: string | undefined) {
        this._content = value;
    };
    /**
     * Gets the contentType property value. The type of the content. Possible values are text and html.
     * @returns a bodyType
     */
    public get contentType() {
        return this._contentType;
    };
    /**
     * Sets the contentType property value. The type of the content. Possible values are text and html.
     * @param value Value to set for the contentType property.
     */
    public set contentType(value: BodyType | undefined) {
        this._contentType = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "content": n => { this.content = n.getStringValue(); },
            "contentType": n => { this.contentType = n.getEnumValue<BodyType>(BodyType); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
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
        writer.writeStringValue("content", this.content);
        writer.writeEnumValue<BodyType>("contentType", this.contentType);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
