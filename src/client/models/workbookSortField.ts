import {createWorkbookIconFromDiscriminatorValue} from './createWorkbookIconFromDiscriminatorValue';
import {WorkbookIcon} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookSortField implements Parsable {
    /** Represents whether the sorting is done in an ascending fashion. */
    private _ascending?: boolean | undefined;
    /** Represents the color that is the target of the condition if the sorting is on font or cell color. */
    private _color?: string | undefined;
    /** Represents additional sorting options for this field. The possible values are: Normal, TextAsNumber. */
    private _dataOption?: string | undefined;
    /** Represents the icon that is the target of the condition if the sorting is on the cell's icon. */
    private _icon?: WorkbookIcon | undefined;
    /** Represents the column (or row, depending on the sort orientation) that the condition is on. Represented as an offset from the first column (or row). */
    private _key?: number | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Represents the type of sorting of this condition. The possible values are: Value, CellColor, FontColor, Icon. */
    private _sortOn?: string | undefined;
    /**
     * Gets the ascending property value. Represents whether the sorting is done in an ascending fashion.
     * @returns a boolean
     */
    public get ascending() {
        return this._ascending;
    };
    /**
     * Sets the ascending property value. Represents whether the sorting is done in an ascending fashion.
     * @param value Value to set for the ascending property.
     */
    public set ascending(value: boolean | undefined) {
        this._ascending = value;
    };
    /**
     * Gets the color property value. Represents the color that is the target of the condition if the sorting is on font or cell color.
     * @returns a string
     */
    public get color() {
        return this._color;
    };
    /**
     * Sets the color property value. Represents the color that is the target of the condition if the sorting is on font or cell color.
     * @param value Value to set for the color property.
     */
    public set color(value: string | undefined) {
        this._color = value;
    };
    /**
     * Instantiates a new workbookSortField and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.workbookSortField";
    };
    /**
     * Gets the dataOption property value. Represents additional sorting options for this field. The possible values are: Normal, TextAsNumber.
     * @returns a string
     */
    public get dataOption() {
        return this._dataOption;
    };
    /**
     * Sets the dataOption property value. Represents additional sorting options for this field. The possible values are: Normal, TextAsNumber.
     * @param value Value to set for the dataOption property.
     */
    public set dataOption(value: string | undefined) {
        this._dataOption = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "ascending": n => { this.ascending = n.getBooleanValue(); },
            "color": n => { this.color = n.getStringValue(); },
            "dataOption": n => { this.dataOption = n.getStringValue(); },
            "icon": n => { this.icon = n.getObjectValue<WorkbookIcon>(createWorkbookIconFromDiscriminatorValue); },
            "key": n => { this.key = n.getNumberValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "sortOn": n => { this.sortOn = n.getStringValue(); },
        };
    };
    /**
     * Gets the icon property value. Represents the icon that is the target of the condition if the sorting is on the cell's icon.
     * @returns a workbookIcon
     */
    public get icon() {
        return this._icon;
    };
    /**
     * Sets the icon property value. Represents the icon that is the target of the condition if the sorting is on the cell's icon.
     * @param value Value to set for the icon property.
     */
    public set icon(value: WorkbookIcon | undefined) {
        this._icon = value;
    };
    /**
     * Gets the key property value. Represents the column (or row, depending on the sort orientation) that the condition is on. Represented as an offset from the first column (or row).
     * @returns a integer
     */
    public get key() {
        return this._key;
    };
    /**
     * Sets the key property value. Represents the column (or row, depending on the sort orientation) that the condition is on. Represented as an offset from the first column (or row).
     * @param value Value to set for the key property.
     */
    public set key(value: number | undefined) {
        this._key = value;
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
        writer.writeBooleanValue("ascending", this.ascending);
        writer.writeStringValue("color", this.color);
        writer.writeStringValue("dataOption", this.dataOption);
        writer.writeObjectValue<WorkbookIcon>("icon", this.icon);
        writer.writeNumberValue("key", this.key);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("sortOn", this.sortOn);
    };
    /**
     * Gets the sortOn property value. Represents the type of sorting of this condition. The possible values are: Value, CellColor, FontColor, Icon.
     * @returns a string
     */
    public get sortOn() {
        return this._sortOn;
    };
    /**
     * Sets the sortOn property value. Represents the type of sorting of this condition. The possible values are: Value, CellColor, FontColor, Icon.
     * @param value Value to set for the sortOn property.
     */
    public set sortOn(value: string | undefined) {
        this._sortOn = value;
    };
}
