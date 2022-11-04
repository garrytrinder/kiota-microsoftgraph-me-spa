import {CalendarSharingAction} from './calendarSharingAction';
import {CalendarSharingActionImportance} from './calendarSharingActionImportance';
import {CalendarSharingActionType} from './calendarSharingActionType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CalendarSharingMessageAction implements Parsable {
    /** The action property */
    private _action?: CalendarSharingAction | undefined;
    /** The actionType property */
    private _actionType?: CalendarSharingActionType | undefined;
    /** The importance property */
    private _importance?: CalendarSharingActionImportance | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Gets the action property value. The action property
     * @returns a calendarSharingAction
     */
    public get action() {
        return this._action;
    };
    /**
     * Sets the action property value. The action property
     * @param value Value to set for the action property.
     */
    public set action(value: CalendarSharingAction | undefined) {
        this._action = value;
    };
    /**
     * Gets the actionType property value. The actionType property
     * @returns a calendarSharingActionType
     */
    public get actionType() {
        return this._actionType;
    };
    /**
     * Sets the actionType property value. The actionType property
     * @param value Value to set for the actionType property.
     */
    public set actionType(value: CalendarSharingActionType | undefined) {
        this._actionType = value;
    };
    /**
     * Instantiates a new calendarSharingMessageAction and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.calendarSharingMessageAction";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "action": n => { this.action = n.getEnumValue<CalendarSharingAction>(CalendarSharingAction); },
            "actionType": n => { this.actionType = n.getEnumValue<CalendarSharingActionType>(CalendarSharingActionType); },
            "importance": n => { this.importance = n.getEnumValue<CalendarSharingActionImportance>(CalendarSharingActionImportance); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the importance property value. The importance property
     * @returns a calendarSharingActionImportance
     */
    public get importance() {
        return this._importance;
    };
    /**
     * Sets the importance property value. The importance property
     * @param value Value to set for the importance property.
     */
    public set importance(value: CalendarSharingActionImportance | undefined) {
        this._importance = value;
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
        writer.writeEnumValue<CalendarSharingAction>("action", this.action);
        writer.writeEnumValue<CalendarSharingActionType>("actionType", this.actionType);
        writer.writeEnumValue<CalendarSharingActionImportance>("importance", this.importance);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
