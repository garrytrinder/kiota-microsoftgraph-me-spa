import {createContentTypeInfoFromDiscriminatorValue} from './createContentTypeInfoFromDiscriminatorValue';
import {ContentTypeInfo} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DocumentSetContent implements Parsable {
    /** Content type information of the file. */
    private _contentType?: ContentTypeInfo | undefined;
    /** Name of the file in resource folder that should be added as a default content or a template in the document set. */
    private _fileName?: string | undefined;
    /** Folder name in which the file will be placed when a new document set is created in the library. */
    private _folderName?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Instantiates a new documentSetContent and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.documentSetContent";
    };
    /**
     * Gets the contentType property value. Content type information of the file.
     * @returns a contentTypeInfo
     */
    public get contentType() {
        return this._contentType;
    };
    /**
     * Sets the contentType property value. Content type information of the file.
     * @param value Value to set for the contentType property.
     */
    public set contentType(value: ContentTypeInfo | undefined) {
        this._contentType = value;
    };
    /**
     * Gets the fileName property value. Name of the file in resource folder that should be added as a default content or a template in the document set.
     * @returns a string
     */
    public get fileName() {
        return this._fileName;
    };
    /**
     * Sets the fileName property value. Name of the file in resource folder that should be added as a default content or a template in the document set.
     * @param value Value to set for the fileName property.
     */
    public set fileName(value: string | undefined) {
        this._fileName = value;
    };
    /**
     * Gets the folderName property value. Folder name in which the file will be placed when a new document set is created in the library.
     * @returns a string
     */
    public get folderName() {
        return this._folderName;
    };
    /**
     * Sets the folderName property value. Folder name in which the file will be placed when a new document set is created in the library.
     * @param value Value to set for the folderName property.
     */
    public set folderName(value: string | undefined) {
        this._folderName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "contentType": n => { this.contentType = n.getObjectValue<ContentTypeInfo>(createContentTypeInfoFromDiscriminatorValue); },
            "fileName": n => { this.fileName = n.getStringValue(); },
            "folderName": n => { this.folderName = n.getStringValue(); },
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
        writer.writeObjectValue<ContentTypeInfo>("contentType", this.contentType);
        writer.writeStringValue("fileName", this.fileName);
        writer.writeStringValue("folderName", this.folderName);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
