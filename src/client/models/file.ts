import {createHashesFromDiscriminatorValue} from './createHashesFromDiscriminatorValue';
import {Hashes} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class File implements Parsable {
    /** Hashes of the file's binary content, if available. Read-only. */
    private _hashes?: Hashes | undefined;
    /** The MIME type for the file. This is determined by logic on the server and might not be the value provided when the file was uploaded. Read-only. */
    private _mimeType?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The processingMetadata property */
    private _processingMetadata?: boolean | undefined;
    /**
     * Instantiates a new file and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.file";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "hashes": n => { this.hashes = n.getObjectValue<Hashes>(createHashesFromDiscriminatorValue); },
            "mimeType": n => { this.mimeType = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "processingMetadata": n => { this.processingMetadata = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the hashes property value. Hashes of the file's binary content, if available. Read-only.
     * @returns a hashes
     */
    public get hashes() {
        return this._hashes;
    };
    /**
     * Sets the hashes property value. Hashes of the file's binary content, if available. Read-only.
     * @param value Value to set for the hashes property.
     */
    public set hashes(value: Hashes | undefined) {
        this._hashes = value;
    };
    /**
     * Gets the mimeType property value. The MIME type for the file. This is determined by logic on the server and might not be the value provided when the file was uploaded. Read-only.
     * @returns a string
     */
    public get mimeType() {
        return this._mimeType;
    };
    /**
     * Sets the mimeType property value. The MIME type for the file. This is determined by logic on the server and might not be the value provided when the file was uploaded. Read-only.
     * @param value Value to set for the mimeType property.
     */
    public set mimeType(value: string | undefined) {
        this._mimeType = value;
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
     * Gets the processingMetadata property value. The processingMetadata property
     * @returns a boolean
     */
    public get processingMetadata() {
        return this._processingMetadata;
    };
    /**
     * Sets the processingMetadata property value. The processingMetadata property
     * @param value Value to set for the processingMetadata property.
     */
    public set processingMetadata(value: boolean | undefined) {
        this._processingMetadata = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Hashes>("hashes", this.hashes);
        writer.writeStringValue("mimeType", this.mimeType);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeBooleanValue("processingMetadata", this.processingMetadata);
    };
}
