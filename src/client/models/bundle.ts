import {createAlbumFromDiscriminatorValue} from './createAlbumFromDiscriminatorValue';
import {Album} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Bundle implements Parsable {
    /** If the bundle is an [album][], then the album property is included */
    private _album?: Album | undefined;
    /** Number of children contained immediately within this container. */
    private _childCount?: number | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Gets the album property value. If the bundle is an [album][], then the album property is included
     * @returns a album
     */
    public get album() {
        return this._album;
    };
    /**
     * Sets the album property value. If the bundle is an [album][], then the album property is included
     * @param value Value to set for the album property.
     */
    public set album(value: Album | undefined) {
        this._album = value;
    };
    /**
     * Gets the childCount property value. Number of children contained immediately within this container.
     * @returns a integer
     */
    public get childCount() {
        return this._childCount;
    };
    /**
     * Sets the childCount property value. Number of children contained immediately within this container.
     * @param value Value to set for the childCount property.
     */
    public set childCount(value: number | undefined) {
        this._childCount = value;
    };
    /**
     * Instantiates a new bundle and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.bundle";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "album": n => { this.album = n.getObjectValue<Album>(createAlbumFromDiscriminatorValue); },
            "childCount": n => { this.childCount = n.getNumberValue(); },
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
        writer.writeObjectValue<Album>("album", this.album);
        writer.writeNumberValue("childCount", this.childCount);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
