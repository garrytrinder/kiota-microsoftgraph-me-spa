import {createFileHashFromDiscriminatorValue} from './createFileHashFromDiscriminatorValue';
import {FileHash} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FileSecurityState implements Parsable {
    /** Complex type containing file hashes (cryptographic and location-sensitive). */
    private _fileHash?: FileHash | undefined;
    /** File name (without path). */
    private _name?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Full file path of the file/imageFile. */
    private _path?: string | undefined;
    /** Provider generated/calculated risk score of the alert file. Recommended value range of 0-1, which equates to a percentage. */
    private _riskScore?: string | undefined;
    /**
     * Instantiates a new fileSecurityState and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.fileSecurityState";
    };
    /**
     * Gets the fileHash property value. Complex type containing file hashes (cryptographic and location-sensitive).
     * @returns a fileHash
     */
    public get fileHash() {
        return this._fileHash;
    };
    /**
     * Sets the fileHash property value. Complex type containing file hashes (cryptographic and location-sensitive).
     * @param value Value to set for the fileHash property.
     */
    public set fileHash(value: FileHash | undefined) {
        this._fileHash = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "fileHash": n => { this.fileHash = n.getObjectValue<FileHash>(createFileHashFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "path": n => { this.path = n.getStringValue(); },
            "riskScore": n => { this.riskScore = n.getStringValue(); },
        };
    };
    /**
     * Gets the name property value. File name (without path).
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. File name (without path).
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
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
     * Gets the path property value. Full file path of the file/imageFile.
     * @returns a string
     */
    public get path() {
        return this._path;
    };
    /**
     * Sets the path property value. Full file path of the file/imageFile.
     * @param value Value to set for the path property.
     */
    public set path(value: string | undefined) {
        this._path = value;
    };
    /**
     * Gets the riskScore property value. Provider generated/calculated risk score of the alert file. Recommended value range of 0-1, which equates to a percentage.
     * @returns a string
     */
    public get riskScore() {
        return this._riskScore;
    };
    /**
     * Sets the riskScore property value. Provider generated/calculated risk score of the alert file. Recommended value range of 0-1, which equates to a percentage.
     * @param value Value to set for the riskScore property.
     */
    public set riskScore(value: string | undefined) {
        this._riskScore = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<FileHash>("fileHash", this.fileHash);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("path", this.path);
        writer.writeStringValue("riskScore", this.riskScore);
    };
}
