import {Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export class BookingWorkTimeSlot implements Parsable {
    /** The time of the day when work stops. For example, 17:00:00.0000000. */
    private _endTime?: TimeOnly | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The time of the day when work starts. For example, 08:00:00.0000000. */
    private _startTime?: TimeOnly | undefined;
    /**
     * Instantiates a new bookingWorkTimeSlot and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.bookingWorkTimeSlot";
    };
    /**
     * Gets the endTime property value. The time of the day when work stops. For example, 17:00:00.0000000.
     * @returns a TimeOnly
     */
    public get endTime() {
        return this._endTime;
    };
    /**
     * Sets the endTime property value. The time of the day when work stops. For example, 17:00:00.0000000.
     * @param value Value to set for the endTime property.
     */
    public set endTime(value: TimeOnly | undefined) {
        this._endTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "endTime": n => { this.endTime = n.getTimeOnlyValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "startTime": n => { this.startTime = n.getTimeOnlyValue(); },
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
        writer.writeTimeOnlyValue("endTime", this.endTime);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeTimeOnlyValue("startTime", this.startTime);
    };
    /**
     * Gets the startTime property value. The time of the day when work starts. For example, 08:00:00.0000000.
     * @returns a TimeOnly
     */
    public get startTime() {
        return this._startTime;
    };
    /**
     * Sets the startTime property value. The time of the day when work starts. For example, 08:00:00.0000000.
     * @param value Value to set for the startTime property.
     */
    public set startTime(value: TimeOnly | undefined) {
        this._startTime = value;
    };
}
