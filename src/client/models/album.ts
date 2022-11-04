import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Album implements Parsable {
    /** Unique identifier of the [driveItem][] that is the cover of the album. */
    private _coverImageItemId?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Instantiates a new album and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.album";
    };
    /**
     * Gets the coverImageItemId property value. Unique identifier of the [driveItem][] that is the cover of the album.
     * @returns a string
     */
    public get coverImageItemId() {
        return this._coverImageItemId;
    };
    /**
     * Sets the coverImageItemId property value. Unique identifier of the [driveItem][] that is the cover of the album.
     * @param value Value to set for the coverImageItemId property.
     */
    public set coverImageItemId(value: string | undefined) {
        this._coverImageItemId = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "coverImageItemId": n => { this.coverImageItemId = n.getStringValue(); },
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
        writer.writeStringValue("coverImageItemId", this.coverImageItemId);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
