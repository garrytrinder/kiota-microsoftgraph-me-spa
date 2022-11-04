import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class HyperlinkOrPictureColumn implements Parsable {
    /** Specifies whether the display format used for URL columns is an image or a hyperlink. */
    private _isPicture?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Instantiates a new hyperlinkOrPictureColumn and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.hyperlinkOrPictureColumn";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "isPicture": n => { this.isPicture = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the isPicture property value. Specifies whether the display format used for URL columns is an image or a hyperlink.
     * @returns a boolean
     */
    public get isPicture() {
        return this._isPicture;
    };
    /**
     * Sets the isPicture property value. Specifies whether the display format used for URL columns is an image or a hyperlink.
     * @param value Value to set for the isPicture property.
     */
    public set isPicture(value: boolean | undefined) {
        this._isPicture = value;
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
        writer.writeBooleanValue("isPicture", this.isPicture);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
