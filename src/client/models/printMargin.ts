import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintMargin implements Parsable {
    /** The margin in microns from the bottom edge. */
    private _bottom?: number | undefined;
    /** The margin in microns from the left edge. */
    private _left?: number | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The margin in microns from the right edge. */
    private _right?: number | undefined;
    /** The margin in microns from the top edge. */
    private _top?: number | undefined;
    /**
     * Gets the bottom property value. The margin in microns from the bottom edge.
     * @returns a integer
     */
    public get bottom() {
        return this._bottom;
    };
    /**
     * Sets the bottom property value. The margin in microns from the bottom edge.
     * @param value Value to set for the bottom property.
     */
    public set bottom(value: number | undefined) {
        this._bottom = value;
    };
    /**
     * Instantiates a new printMargin and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.printMargin";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "bottom": n => { this.bottom = n.getNumberValue(); },
            "left": n => { this.left = n.getNumberValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "right": n => { this.right = n.getNumberValue(); },
            "top": n => { this.top = n.getNumberValue(); },
        };
    };
    /**
     * Gets the left property value. The margin in microns from the left edge.
     * @returns a integer
     */
    public get left() {
        return this._left;
    };
    /**
     * Sets the left property value. The margin in microns from the left edge.
     * @param value Value to set for the left property.
     */
    public set left(value: number | undefined) {
        this._left = value;
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
     * Gets the right property value. The margin in microns from the right edge.
     * @returns a integer
     */
    public get right() {
        return this._right;
    };
    /**
     * Sets the right property value. The margin in microns from the right edge.
     * @param value Value to set for the right property.
     */
    public set right(value: number | undefined) {
        this._right = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("bottom", this.bottom);
        writer.writeNumberValue("left", this.left);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeNumberValue("right", this.right);
        writer.writeNumberValue("top", this.top);
    };
    /**
     * Gets the top property value. The margin in microns from the top edge.
     * @returns a integer
     */
    public get top() {
        return this._top;
    };
    /**
     * Sets the top property value. The margin in microns from the top edge.
     * @param value Value to set for the top property.
     */
    public set top(value: number | undefined) {
        this._top = value;
    };
}
