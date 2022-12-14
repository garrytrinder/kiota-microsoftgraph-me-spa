import {ActionState} from './actionState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Device action result */
export class DeviceActionResult implements Parsable {
    /** Action name */
    private _actionName?: string | undefined;
    /** State of the action on the device */
    private _actionState?: ActionState | undefined;
    /** Time the action state was last updated */
    private _lastUpdatedDateTime?: Date | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Time the action was initiated */
    private _startDateTime?: Date | undefined;
    /**
     * Gets the actionName property value. Action name
     * @returns a string
     */
    public get actionName() {
        return this._actionName;
    };
    /**
     * Sets the actionName property value. Action name
     * @param value Value to set for the actionName property.
     */
    public set actionName(value: string | undefined) {
        this._actionName = value;
    };
    /**
     * Gets the actionState property value. State of the action on the device
     * @returns a actionState
     */
    public get actionState() {
        return this._actionState;
    };
    /**
     * Sets the actionState property value. State of the action on the device
     * @param value Value to set for the actionState property.
     */
    public set actionState(value: ActionState | undefined) {
        this._actionState = value;
    };
    /**
     * Instantiates a new deviceActionResult and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.deviceActionResult";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "actionName": n => { this.actionName = n.getStringValue(); },
            "actionState": n => { this.actionState = n.getEnumValue<ActionState>(ActionState); },
            "lastUpdatedDateTime": n => { this.lastUpdatedDateTime = n.getDateValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
        };
    };
    /**
     * Gets the lastUpdatedDateTime property value. Time the action state was last updated
     * @returns a Date
     */
    public get lastUpdatedDateTime() {
        return this._lastUpdatedDateTime;
    };
    /**
     * Sets the lastUpdatedDateTime property value. Time the action state was last updated
     * @param value Value to set for the lastUpdatedDateTime property.
     */
    public set lastUpdatedDateTime(value: Date | undefined) {
        this._lastUpdatedDateTime = value;
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
        writer.writeStringValue("actionName", this.actionName);
        writer.writeEnumValue<ActionState>("actionState", this.actionState);
        writer.writeDateValue("lastUpdatedDateTime", this.lastUpdatedDateTime);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeDateValue("startDateTime", this.startDateTime);
    };
    /**
     * Gets the startDateTime property value. Time the action was initiated
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. Time the action was initiated
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
}
