import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationTerm implements Parsable {
    /** Display name of the term. */
    private _displayName?: string | undefined;
    /** End of the term. */
    private _endDate?: DateOnly | undefined;
    /** ID of term in the syncing system. */
    private _externalId?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Start of the term. */
    private _startDate?: DateOnly | undefined;
    /**
     * Instantiates a new educationTerm and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.educationTerm";
    };
    /**
     * Gets the displayName property value. Display name of the term.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display name of the term.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the endDate property value. End of the term.
     * @returns a DateOnly
     */
    public get endDate() {
        return this._endDate;
    };
    /**
     * Sets the endDate property value. End of the term.
     * @param value Value to set for the endDate property.
     */
    public set endDate(value: DateOnly | undefined) {
        this._endDate = value;
    };
    /**
     * Gets the externalId property value. ID of term in the syncing system.
     * @returns a string
     */
    public get externalId() {
        return this._externalId;
    };
    /**
     * Sets the externalId property value. ID of term in the syncing system.
     * @param value Value to set for the externalId property.
     */
    public set externalId(value: string | undefined) {
        this._externalId = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "endDate": n => { this.endDate = n.getDateOnlyValue(); },
            "externalId": n => { this.externalId = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "startDate": n => { this.startDate = n.getDateOnlyValue(); },
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
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateOnlyValue("endDate", this.endDate);
        writer.writeStringValue("externalId", this.externalId);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeDateOnlyValue("startDate", this.startDate);
    };
    /**
     * Gets the startDate property value. Start of the term.
     * @returns a DateOnly
     */
    public get startDate() {
        return this._startDate;
    };
    /**
     * Sets the startDate property value. Start of the term.
     * @param value Value to set for the startDate property.
     */
    public set startDate(value: DateOnly | undefined) {
        this._startDate = value;
    };
}
