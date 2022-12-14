import {createExpirationPatternFromDiscriminatorValue} from './createExpirationPatternFromDiscriminatorValue';
import {createPatternedRecurrenceFromDiscriminatorValue} from './createPatternedRecurrenceFromDiscriminatorValue';
import {ExpirationPattern, PatternedRecurrence} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EntitlementManagementSchedule implements Parsable {
    /** When the access should expire. */
    private _expiration?: ExpirationPattern | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** For recurring access reviews.  Not used in access requests. */
    private _recurrence?: PatternedRecurrence | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _startDateTime?: Date | undefined;
    /**
     * Instantiates a new entitlementManagementSchedule and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.entitlementManagementSchedule";
    };
    /**
     * Gets the expiration property value. When the access should expire.
     * @returns a expirationPattern
     */
    public get expiration() {
        return this._expiration;
    };
    /**
     * Sets the expiration property value. When the access should expire.
     * @param value Value to set for the expiration property.
     */
    public set expiration(value: ExpirationPattern | undefined) {
        this._expiration = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "expiration": n => { this.expiration = n.getObjectValue<ExpirationPattern>(createExpirationPatternFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "recurrence": n => { this.recurrence = n.getObjectValue<PatternedRecurrence>(createPatternedRecurrenceFromDiscriminatorValue); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
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
     * Gets the recurrence property value. For recurring access reviews.  Not used in access requests.
     * @returns a patternedRecurrence
     */
    public get recurrence() {
        return this._recurrence;
    };
    /**
     * Sets the recurrence property value. For recurring access reviews.  Not used in access requests.
     * @param value Value to set for the recurrence property.
     */
    public set recurrence(value: PatternedRecurrence | undefined) {
        this._recurrence = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<ExpirationPattern>("expiration", this.expiration);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<PatternedRecurrence>("recurrence", this.recurrence);
        writer.writeDateValue("startDateTime", this.startDateTime);
    };
    /**
     * Gets the startDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
}
