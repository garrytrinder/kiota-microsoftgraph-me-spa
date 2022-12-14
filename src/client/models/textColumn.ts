import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TextColumn implements Parsable {
    /** Whether to allow multiple lines of text. */
    private _allowMultipleLines?: boolean | undefined;
    /** Whether updates to this column should replace existing text, or append to it. */
    private _appendChangesToExistingText?: boolean | undefined;
    /** The size of the text box. */
    private _linesForEditing?: number | undefined;
    /** The maximum number of characters for the value. */
    private _maxLength?: number | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The type of text being stored. Must be one of plain or richText */
    private _textType?: string | undefined;
    /**
     * Gets the allowMultipleLines property value. Whether to allow multiple lines of text.
     * @returns a boolean
     */
    public get allowMultipleLines() {
        return this._allowMultipleLines;
    };
    /**
     * Sets the allowMultipleLines property value. Whether to allow multiple lines of text.
     * @param value Value to set for the allowMultipleLines property.
     */
    public set allowMultipleLines(value: boolean | undefined) {
        this._allowMultipleLines = value;
    };
    /**
     * Gets the appendChangesToExistingText property value. Whether updates to this column should replace existing text, or append to it.
     * @returns a boolean
     */
    public get appendChangesToExistingText() {
        return this._appendChangesToExistingText;
    };
    /**
     * Sets the appendChangesToExistingText property value. Whether updates to this column should replace existing text, or append to it.
     * @param value Value to set for the appendChangesToExistingText property.
     */
    public set appendChangesToExistingText(value: boolean | undefined) {
        this._appendChangesToExistingText = value;
    };
    /**
     * Instantiates a new textColumn and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.textColumn";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowMultipleLines": n => { this.allowMultipleLines = n.getBooleanValue(); },
            "appendChangesToExistingText": n => { this.appendChangesToExistingText = n.getBooleanValue(); },
            "linesForEditing": n => { this.linesForEditing = n.getNumberValue(); },
            "maxLength": n => { this.maxLength = n.getNumberValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "textType": n => { this.textType = n.getStringValue(); },
        };
    };
    /**
     * Gets the linesForEditing property value. The size of the text box.
     * @returns a integer
     */
    public get linesForEditing() {
        return this._linesForEditing;
    };
    /**
     * Sets the linesForEditing property value. The size of the text box.
     * @param value Value to set for the linesForEditing property.
     */
    public set linesForEditing(value: number | undefined) {
        this._linesForEditing = value;
    };
    /**
     * Gets the maxLength property value. The maximum number of characters for the value.
     * @returns a integer
     */
    public get maxLength() {
        return this._maxLength;
    };
    /**
     * Sets the maxLength property value. The maximum number of characters for the value.
     * @param value Value to set for the maxLength property.
     */
    public set maxLength(value: number | undefined) {
        this._maxLength = value;
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
        writer.writeBooleanValue("allowMultipleLines", this.allowMultipleLines);
        writer.writeBooleanValue("appendChangesToExistingText", this.appendChangesToExistingText);
        writer.writeNumberValue("linesForEditing", this.linesForEditing);
        writer.writeNumberValue("maxLength", this.maxLength);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("textType", this.textType);
    };
    /**
     * Gets the textType property value. The type of text being stored. Must be one of plain or richText
     * @returns a string
     */
    public get textType() {
        return this._textType;
    };
    /**
     * Sets the textType property value. The type of text being stored. Must be one of plain or richText
     * @param value Value to set for the textType property.
     */
    public set textType(value: string | undefined) {
        this._textType = value;
    };
}
