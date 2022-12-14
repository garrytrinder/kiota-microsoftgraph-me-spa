import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FileSystemInfo implements Parsable {
    /** The UTC date and time the file was created on a client. */
    private _createdDateTime?: Date | undefined;
    /** The UTC date and time the file was last accessed. Available for the recent file list only. */
    private _lastAccessedDateTime?: Date | undefined;
    /** The UTC date and time the file was last modified on a client. */
    private _lastModifiedDateTime?: Date | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Instantiates a new fileSystemInfo and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.fileSystemInfo";
    };
    /**
     * Gets the createdDateTime property value. The UTC date and time the file was created on a client.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The UTC date and time the file was created on a client.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "lastAccessedDateTime": n => { this.lastAccessedDateTime = n.getDateValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the lastAccessedDateTime property value. The UTC date and time the file was last accessed. Available for the recent file list only.
     * @returns a Date
     */
    public get lastAccessedDateTime() {
        return this._lastAccessedDateTime;
    };
    /**
     * Sets the lastAccessedDateTime property value. The UTC date and time the file was last accessed. Available for the recent file list only.
     * @param value Value to set for the lastAccessedDateTime property.
     */
    public set lastAccessedDateTime(value: Date | undefined) {
        this._lastAccessedDateTime = value;
    };
    /**
     * Gets the lastModifiedDateTime property value. The UTC date and time the file was last modified on a client.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. The UTC date and time the file was last modified on a client.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
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
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeDateValue("lastAccessedDateTime", this.lastAccessedDateTime);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
