import {ScheduleEntityTheme} from './scheduleEntityTheme';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ScheduleEntity implements Parsable {
    /** The endDateTime property */
    private _endDateTime?: Date | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The startDateTime property */
    private _startDateTime?: Date | undefined;
    /** The theme property */
    private _theme?: ScheduleEntityTheme | undefined;
    /**
     * Instantiates a new scheduleEntity and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.scheduleEntity";
    };
    /**
     * Gets the endDateTime property value. The endDateTime property
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. The endDateTime property
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        this._endDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "endDateTime": n => { this.endDateTime = n.getDateValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
            "theme": n => { this.theme = n.getEnumValue<ScheduleEntityTheme>(ScheduleEntityTheme); },
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
        writer.writeDateValue("endDateTime", this.endDateTime);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeDateValue("startDateTime", this.startDateTime);
        writer.writeEnumValue<ScheduleEntityTheme>("theme", this.theme);
    };
    /**
     * Gets the startDateTime property value. The startDateTime property
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. The startDateTime property
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
    /**
     * Gets the theme property value. The theme property
     * @returns a scheduleEntityTheme
     */
    public get theme() {
        return this._theme;
    };
    /**
     * Sets the theme property value. The theme property
     * @param value Value to set for the theme property.
     */
    public set theme(value: ScheduleEntityTheme | undefined) {
        this._theme = value;
    };
}
