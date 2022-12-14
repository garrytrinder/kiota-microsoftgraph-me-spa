import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Image implements Parsable {
    /** Optional. Height of the image, in pixels. Read-only. */
    private _height?: number | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Optional. Width of the image, in pixels. Read-only. */
    private _width?: number | undefined;
    /**
     * Instantiates a new image and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.image";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "height": n => { this.height = n.getNumberValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "width": n => { this.width = n.getNumberValue(); },
        };
    };
    /**
     * Gets the height property value. Optional. Height of the image, in pixels. Read-only.
     * @returns a integer
     */
    public get height() {
        return this._height;
    };
    /**
     * Sets the height property value. Optional. Height of the image, in pixels. Read-only.
     * @param value Value to set for the height property.
     */
    public set height(value: number | undefined) {
        this._height = value;
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
        writer.writeNumberValue("height", this.height);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeNumberValue("width", this.width);
    };
    /**
     * Gets the width property value. Optional. Width of the image, in pixels. Read-only.
     * @returns a integer
     */
    public get width() {
        return this._width;
    };
    /**
     * Sets the width property value. Optional. Width of the image, in pixels. Read-only.
     * @param value Value to set for the width property.
     */
    public set width(value: number | undefined) {
        this._width = value;
    };
}
