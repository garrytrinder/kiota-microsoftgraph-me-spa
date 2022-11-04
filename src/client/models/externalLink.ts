import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ExternalLink implements Parsable {
    /** The url of the link. */
    private _href?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Instantiates a new externalLink and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.externalLink";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "href": n => { this.href = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the href property value. The url of the link.
     * @returns a string
     */
    public get href() {
        return this._href;
    };
    /**
     * Sets the href property value. The url of the link.
     * @param value Value to set for the href property.
     */
    public set href(value: string | undefined) {
        this._href = value;
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
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
