import {FileHashType} from './fileHashType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FileHash implements Parsable {
    /** File hash type. Possible values are: unknown, sha1, sha256, md5, authenticodeHash256, lsHash, ctph, peSha1, peSha256. */
    private _hashType?: FileHashType | undefined;
    /** Value of the file hash. */
    private _hashValue?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Instantiates a new fileHash and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.fileHash";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "hashType": n => { this.hashType = n.getEnumValue<FileHashType>(FileHashType); },
            "hashValue": n => { this.hashValue = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the hashType property value. File hash type. Possible values are: unknown, sha1, sha256, md5, authenticodeHash256, lsHash, ctph, peSha1, peSha256.
     * @returns a fileHashType
     */
    public get hashType() {
        return this._hashType;
    };
    /**
     * Sets the hashType property value. File hash type. Possible values are: unknown, sha1, sha256, md5, authenticodeHash256, lsHash, ctph, peSha1, peSha256.
     * @param value Value to set for the hashType property.
     */
    public set hashType(value: FileHashType | undefined) {
        this._hashType = value;
    };
    /**
     * Gets the hashValue property value. Value of the file hash.
     * @returns a string
     */
    public get hashValue() {
        return this._hashValue;
    };
    /**
     * Sets the hashValue property value. Value of the file hash.
     * @param value Value to set for the hashValue property.
     */
    public set hashValue(value: string | undefined) {
        this._hashValue = value;
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
        writer.writeEnumValue<FileHashType>("hashType", this.hashType);
        writer.writeStringValue("hashValue", this.hashValue);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
