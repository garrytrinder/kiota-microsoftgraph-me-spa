import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PublicationFacet implements Parsable {
    /** The state of publication for this document. Either published or checkout. Read-only. */
    private _level?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The unique identifier for the version that is visible to the current caller. Read-only. */
    private _versionId?: string | undefined;
    /**
     * Instantiates a new publicationFacet and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.publicationFacet";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "level": n => { this.level = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "versionId": n => { this.versionId = n.getStringValue(); },
        };
    };
    /**
     * Gets the level property value. The state of publication for this document. Either published or checkout. Read-only.
     * @returns a string
     */
    public get level() {
        return this._level;
    };
    /**
     * Sets the level property value. The state of publication for this document. Either published or checkout. Read-only.
     * @param value Value to set for the level property.
     */
    public set level(value: string | undefined) {
        this._level = value;
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
        writer.writeStringValue("level", this.level);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("versionId", this.versionId);
    };
    /**
     * Gets the versionId property value. The unique identifier for the version that is visible to the current caller. Read-only.
     * @returns a string
     */
    public get versionId() {
        return this._versionId;
    };
    /**
     * Sets the versionId property value. The unique identifier for the version that is visible to the current caller. Read-only.
     * @param value Value to set for the versionId property.
     */
    public set versionId(value: string | undefined) {
        this._versionId = value;
    };
}
