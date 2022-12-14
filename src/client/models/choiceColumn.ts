import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChoiceColumn implements Parsable {
    /** If true, allows custom values that aren't in the configured choices. */
    private _allowTextEntry?: boolean | undefined;
    /** The list of values available for this column. */
    private _choices?: string[] | undefined;
    /** How the choices are to be presented in the UX. Must be one of checkBoxes, dropDownMenu, or radioButtons */
    private _displayAs?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Gets the allowTextEntry property value. If true, allows custom values that aren't in the configured choices.
     * @returns a boolean
     */
    public get allowTextEntry() {
        return this._allowTextEntry;
    };
    /**
     * Sets the allowTextEntry property value. If true, allows custom values that aren't in the configured choices.
     * @param value Value to set for the allowTextEntry property.
     */
    public set allowTextEntry(value: boolean | undefined) {
        this._allowTextEntry = value;
    };
    /**
     * Gets the choices property value. The list of values available for this column.
     * @returns a string
     */
    public get choices() {
        return this._choices;
    };
    /**
     * Sets the choices property value. The list of values available for this column.
     * @param value Value to set for the choices property.
     */
    public set choices(value: string[] | undefined) {
        this._choices = value;
    };
    /**
     * Instantiates a new choiceColumn and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.choiceColumn";
    };
    /**
     * Gets the displayAs property value. How the choices are to be presented in the UX. Must be one of checkBoxes, dropDownMenu, or radioButtons
     * @returns a string
     */
    public get displayAs() {
        return this._displayAs;
    };
    /**
     * Sets the displayAs property value. How the choices are to be presented in the UX. Must be one of checkBoxes, dropDownMenu, or radioButtons
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
            "allowTextEntry": n => { this.allowTextEntry = n.getBooleanValue(); },
            "choices": n => { this.choices = n.getCollectionOfPrimitiveValues<string>(); },
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
        writer.writeBooleanValue("allowTextEntry", this.allowTextEntry);
        writer.writeCollectionOfPrimitiveValues<string>("choices", this.choices);
        writer.writeStringValue("displayAs", this.displayAs);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
