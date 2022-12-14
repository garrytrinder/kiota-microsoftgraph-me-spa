import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PersonOrGroupColumn implements Parsable {
    /** Indicates whether multiple values can be selected from the source. */
    private _allowMultipleSelection?: boolean | undefined;
    /** Whether to allow selection of people only, or people and groups. Must be one of peopleAndGroups or peopleOnly. */
    private _chooseFromType?: string | undefined;
    /** How to display the information about the person or group chosen. See below. */
    private _displayAs?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Gets the allowMultipleSelection property value. Indicates whether multiple values can be selected from the source.
     * @returns a boolean
     */
    public get allowMultipleSelection() {
        return this._allowMultipleSelection;
    };
    /**
     * Sets the allowMultipleSelection property value. Indicates whether multiple values can be selected from the source.
     * @param value Value to set for the allowMultipleSelection property.
     */
    public set allowMultipleSelection(value: boolean | undefined) {
        this._allowMultipleSelection = value;
    };
    /**
     * Gets the chooseFromType property value. Whether to allow selection of people only, or people and groups. Must be one of peopleAndGroups or peopleOnly.
     * @returns a string
     */
    public get chooseFromType() {
        return this._chooseFromType;
    };
    /**
     * Sets the chooseFromType property value. Whether to allow selection of people only, or people and groups. Must be one of peopleAndGroups or peopleOnly.
     * @param value Value to set for the chooseFromType property.
     */
    public set chooseFromType(value: string | undefined) {
        this._chooseFromType = value;
    };
    /**
     * Instantiates a new personOrGroupColumn and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.personOrGroupColumn";
    };
    /**
     * Gets the displayAs property value. How to display the information about the person or group chosen. See below.
     * @returns a string
     */
    public get displayAs() {
        return this._displayAs;
    };
    /**
     * Sets the displayAs property value. How to display the information about the person or group chosen. See below.
     * @param value Value to set for the displayAs property.
     */
    public set displayAs(value: string | undefined) {
        this._displayAs = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowMultipleSelection": n => { this.allowMultipleSelection = n.getBooleanValue(); },
            "chooseFromType": n => { this.chooseFromType = n.getStringValue(); },
            "displayAs": n => { this.displayAs = n.getStringValue(); },
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
        writer.writeBooleanValue("allowMultipleSelection", this.allowMultipleSelection);
        writer.writeStringValue("chooseFromType", this.chooseFromType);
        writer.writeStringValue("displayAs", this.displayAs);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
