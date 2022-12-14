import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {createWorkbookIconFromDiscriminatorValue} from './createWorkbookIconFromDiscriminatorValue';
import {Json, WorkbookIcon} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookFilterCriteria implements Parsable {
    /** The color property */
    private _color?: string | undefined;
    /** The criterion1 property */
    private _criterion1?: string | undefined;
    /** The criterion2 property */
    private _criterion2?: string | undefined;
    /** The dynamicCriteria property */
    private _dynamicCriteria?: string | undefined;
    /** The filterOn property */
    private _filterOn?: string | undefined;
    /** The icon property */
    private _icon?: WorkbookIcon | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The operator property */
    private _operator?: string | undefined;
    /** The values property */
    private _values?: Json | undefined;
    /**
     * Gets the color property value. The color property
     * @returns a string
     */
    public get color() {
        return this._color;
    };
    /**
     * Sets the color property value. The color property
     * @param value Value to set for the color property.
     */
    public set color(value: string | undefined) {
        this._color = value;
    };
    /**
     * Instantiates a new workbookFilterCriteria and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.workbookFilterCriteria";
    };
    /**
     * Gets the criterion1 property value. The criterion1 property
     * @returns a string
     */
    public get criterion1() {
        return this._criterion1;
    };
    /**
     * Sets the criterion1 property value. The criterion1 property
     * @param value Value to set for the criterion1 property.
     */
    public set criterion1(value: string | undefined) {
        this._criterion1 = value;
    };
    /**
     * Gets the criterion2 property value. The criterion2 property
     * @returns a string
     */
    public get criterion2() {
        return this._criterion2;
    };
    /**
     * Sets the criterion2 property value. The criterion2 property
     * @param value Value to set for the criterion2 property.
     */
    public set criterion2(value: string | undefined) {
        this._criterion2 = value;
    };
    /**
     * Gets the dynamicCriteria property value. The dynamicCriteria property
     * @returns a string
     */
    public get dynamicCriteria() {
        return this._dynamicCriteria;
    };
    /**
     * Sets the dynamicCriteria property value. The dynamicCriteria property
     * @param value Value to set for the dynamicCriteria property.
     */
    public set dynamicCriteria(value: string | undefined) {
        this._dynamicCriteria = value;
    };
    /**
     * Gets the filterOn property value. The filterOn property
     * @returns a string
     */
    public get filterOn() {
        return this._filterOn;
    };
    /**
     * Sets the filterOn property value. The filterOn property
     * @param value Value to set for the filterOn property.
     */
    public set filterOn(value: string | undefined) {
        this._filterOn = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "color": n => { this.color = n.getStringValue(); },
            "criterion1": n => { this.criterion1 = n.getStringValue(); },
            "criterion2": n => { this.criterion2 = n.getStringValue(); },
            "dynamicCriteria": n => { this.dynamicCriteria = n.getStringValue(); },
            "filterOn": n => { this.filterOn = n.getStringValue(); },
            "icon": n => { this.icon = n.getObjectValue<WorkbookIcon>(createWorkbookIconFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "operator": n => { this.operator = n.getStringValue(); },
            "values": n => { this.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the icon property value. The icon property
     * @returns a workbookIcon
     */
    public get icon() {
        return this._icon;
    };
    /**
     * Sets the icon property value. The icon property
     * @param value Value to set for the icon property.
     */
    public set icon(value: WorkbookIcon | undefined) {
        this._icon = value;
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
     * Gets the operator property value. The operator property
     * @returns a string
     */
    public get operator() {
        return this._operator;
    };
    /**
     * Sets the operator property value. The operator property
     * @param value Value to set for the operator property.
     */
    public set operator(value: string | undefined) {
        this._operator = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("color", this.color);
        writer.writeStringValue("criterion1", this.criterion1);
        writer.writeStringValue("criterion2", this.criterion2);
        writer.writeStringValue("dynamicCriteria", this.dynamicCriteria);
        writer.writeStringValue("filterOn", this.filterOn);
        writer.writeObjectValue<WorkbookIcon>("icon", this.icon);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("operator", this.operator);
        writer.writeObjectValue<Json>("values", this.values);
    };
    /**
     * Gets the values property value. The values property
     * @returns a Json
     */
    public get values() {
        return this._values;
    };
    /**
     * Sets the values property value. The values property
     * @param value Value to set for the values property.
     */
    public set values(value: Json | undefined) {
        this._values = value;
    };
}
