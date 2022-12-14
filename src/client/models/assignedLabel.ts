import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AssignedLabel implements Parsable {
    /** The display name of the label. Read-only. */
    private _displayName?: string | undefined;
    /** The unique identifier of the label. */
    private _labelId?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Instantiates a new assignedLabel and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.assignedLabel";
    };
    /**
     * Gets the displayName property value. The display name of the label. Read-only.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name of the label. Read-only.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "labelId": n => { this.labelId = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the labelId property value. The unique identifier of the label.
     * @returns a string
     */
    public get labelId() {
        return this._labelId;
    };
    /**
     * Sets the labelId property value. The unique identifier of the label.
     * @param value Value to set for the labelId property.
     */
    public set labelId(value: string | undefined) {
        this._labelId = value;
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
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("labelId", this.labelId);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
