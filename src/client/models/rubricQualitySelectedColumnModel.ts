import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RubricQualitySelectedColumnModel implements Parsable {
    /** ID of the selected level for this quality. */
    private _columnId?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** ID of the associated quality. */
    private _qualityId?: string | undefined;
    /**
     * Gets the columnId property value. ID of the selected level for this quality.
     * @returns a string
     */
    public get columnId() {
        return this._columnId;
    };
    /**
     * Sets the columnId property value. ID of the selected level for this quality.
     * @param value Value to set for the columnId property.
     */
    public set columnId(value: string | undefined) {
        this._columnId = value;
    };
    /**
     * Instantiates a new rubricQualitySelectedColumnModel and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.rubricQualitySelectedColumnModel";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "columnId": n => { this.columnId = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "qualityId": n => { this.qualityId = n.getStringValue(); },
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
     * Gets the qualityId property value. ID of the associated quality.
     * @returns a string
     */
    public get qualityId() {
        return this._qualityId;
    };
    /**
     * Sets the qualityId property value. ID of the associated quality.
     * @param value Value to set for the qualityId property.
     */
    public set qualityId(value: string | undefined) {
        this._qualityId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("columnId", this.columnId);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("qualityId", this.qualityId);
    };
}
