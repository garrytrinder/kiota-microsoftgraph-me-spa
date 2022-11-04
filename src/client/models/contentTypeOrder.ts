import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ContentTypeOrder implements Parsable {
    /** Whether this is the default Content Type */
    private _default_escaped?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Specifies the position in which the Content Type appears in the selection UI. */
    private _position?: number | undefined;
    /**
     * Instantiates a new contentTypeOrder and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.contentTypeOrder";
    };
    /**
     * Gets the default property value. Whether this is the default Content Type
     * @returns a boolean
     */
    public get default_escaped() {
        return this._default_escaped;
    };
    /**
     * Sets the default property value. Whether this is the default Content Type
     * @param value Value to set for the default_escaped property.
     */
    public set default_escaped(value: boolean | undefined) {
        this._default_escaped = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "default": n => { this.default_escaped = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "position": n => { this.position = n.getNumberValue(); },
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
     * Gets the position property value. Specifies the position in which the Content Type appears in the selection UI.
     * @returns a integer
     */
    public get position() {
        return this._position;
    };
    /**
     * Sets the position property value. Specifies the position in which the Content Type appears in the selection UI.
     * @param value Value to set for the position property.
     */
    public set position(value: number | undefined) {
        this._position = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("default", this.default_escaped);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeNumberValue("position", this.position);
    };
}
