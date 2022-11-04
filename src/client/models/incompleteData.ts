import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IncompleteData implements Parsable {
    /** The service does not have source data before the specified time. */
    private _missingDataBeforeDateTime?: Date | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Some data was not recorded due to excessive activity. */
    private _wasThrottled?: boolean | undefined;
    /**
     * Instantiates a new incompleteData and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.incompleteData";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "missingDataBeforeDateTime": n => { this.missingDataBeforeDateTime = n.getDateValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "wasThrottled": n => { this.wasThrottled = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the missingDataBeforeDateTime property value. The service does not have source data before the specified time.
     * @returns a Date
     */
    public get missingDataBeforeDateTime() {
        return this._missingDataBeforeDateTime;
    };
    /**
     * Sets the missingDataBeforeDateTime property value. The service does not have source data before the specified time.
     * @param value Value to set for the missingDataBeforeDateTime property.
     */
    public set missingDataBeforeDateTime(value: Date | undefined) {
        this._missingDataBeforeDateTime = value;
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
        writer.writeDateValue("missingDataBeforeDateTime", this.missingDataBeforeDateTime);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeBooleanValue("wasThrottled", this.wasThrottled);
    };
    /**
     * Gets the wasThrottled property value. Some data was not recorded due to excessive activity.
     * @returns a boolean
     */
    public get wasThrottled() {
        return this._wasThrottled;
    };
    /**
     * Sets the wasThrottled property value. Some data was not recorded due to excessive activity.
     * @param value Value to set for the wasThrottled property.
     */
    public set wasThrottled(value: boolean | undefined) {
        this._wasThrottled = value;
    };
}
