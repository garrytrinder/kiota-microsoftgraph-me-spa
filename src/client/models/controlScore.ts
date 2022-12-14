import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ControlScore implements Parsable {
    /** Control action category (Identity, Data, Device, Apps, Infrastructure). */
    private _controlCategory?: string | undefined;
    /** Control unique name. */
    private _controlName?: string | undefined;
    /** Description of the control. */
    private _description?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Tenant achieved score for the control (it varies day by day depending on tenant operations on the control). */
    private _score?: number | undefined;
    /**
     * Instantiates a new controlScore and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.controlScore";
    };
    /**
     * Gets the controlCategory property value. Control action category (Identity, Data, Device, Apps, Infrastructure).
     * @returns a string
     */
    public get controlCategory() {
        return this._controlCategory;
    };
    /**
     * Sets the controlCategory property value. Control action category (Identity, Data, Device, Apps, Infrastructure).
     * @param value Value to set for the controlCategory property.
     */
    public set controlCategory(value: string | undefined) {
        this._controlCategory = value;
    };
    /**
     * Gets the controlName property value. Control unique name.
     * @returns a string
     */
    public get controlName() {
        return this._controlName;
    };
    /**
     * Sets the controlName property value. Control unique name.
     * @param value Value to set for the controlName property.
     */
    public set controlName(value: string | undefined) {
        this._controlName = value;
    };
    /**
     * Gets the description property value. Description of the control.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description of the control.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "controlCategory": n => { this.controlCategory = n.getStringValue(); },
            "controlName": n => { this.controlName = n.getStringValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "score": n => { this.score = n.getNumberValue(); },
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
     * Gets the score property value. Tenant achieved score for the control (it varies day by day depending on tenant operations on the control).
     * @returns a double
     */
    public get score() {
        return this._score;
    };
    /**
     * Sets the score property value. Tenant achieved score for the control (it varies day by day depending on tenant operations on the control).
     * @param value Value to set for the score property.
     */
    public set score(value: number | undefined) {
        this._score = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("controlCategory", this.controlCategory);
        writer.writeStringValue("controlName", this.controlName);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeNumberValue("score", this.score);
    };
}
