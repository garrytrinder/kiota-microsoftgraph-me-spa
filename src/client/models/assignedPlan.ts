import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AssignedPlan implements Parsable {
    /** The date and time at which the plan was assigned. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _assignedDateTime?: Date | undefined;
    /** Condition of the capability assignment. The possible values are Enabled, Warning, Suspended, Deleted, LockedOut. See a detailed description of each value. */
    private _capabilityStatus?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The name of the service; for example, exchange. */
    private _service?: string | undefined;
    /** A GUID that identifies the service plan. For a complete list of GUIDs and their equivalent friendly service names, see Product names and service plan identifiers for licensing. */
    private _servicePlanId?: string | undefined;
    /**
     * Gets the assignedDateTime property value. The date and time at which the plan was assigned. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get assignedDateTime() {
        return this._assignedDateTime;
    };
    /**
     * Sets the assignedDateTime property value. The date and time at which the plan was assigned. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the assignedDateTime property.
     */
    public set assignedDateTime(value: Date | undefined) {
        this._assignedDateTime = value;
    };
    /**
     * Gets the capabilityStatus property value. Condition of the capability assignment. The possible values are Enabled, Warning, Suspended, Deleted, LockedOut. See a detailed description of each value.
     * @returns a string
     */
    public get capabilityStatus() {
        return this._capabilityStatus;
    };
    /**
     * Sets the capabilityStatus property value. Condition of the capability assignment. The possible values are Enabled, Warning, Suspended, Deleted, LockedOut. See a detailed description of each value.
     * @param value Value to set for the capabilityStatus property.
     */
    public set capabilityStatus(value: string | undefined) {
        this._capabilityStatus = value;
    };
    /**
     * Instantiates a new assignedPlan and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.assignedPlan";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "assignedDateTime": n => { this.assignedDateTime = n.getDateValue(); },
            "capabilityStatus": n => { this.capabilityStatus = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "service": n => { this.service = n.getStringValue(); },
            "servicePlanId": n => { this.servicePlanId = n.getStringValue(); },
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
        writer.writeDateValue("assignedDateTime", this.assignedDateTime);
        writer.writeStringValue("capabilityStatus", this.capabilityStatus);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("service", this.service);
        writer.writeStringValue("servicePlanId", this.servicePlanId);
    };
    /**
     * Gets the service property value. The name of the service; for example, exchange.
     * @returns a string
     */
    public get service() {
        return this._service;
    };
    /**
     * Sets the service property value. The name of the service; for example, exchange.
     * @param value Value to set for the service property.
     */
    public set service(value: string | undefined) {
        this._service = value;
    };
    /**
     * Gets the servicePlanId property value. A GUID that identifies the service plan. For a complete list of GUIDs and their equivalent friendly service names, see Product names and service plan identifiers for licensing.
     * @returns a string
     */
    public get servicePlanId() {
        return this._servicePlanId;
    };
    /**
     * Sets the servicePlanId property value. A GUID that identifies the service plan. For a complete list of GUIDs and their equivalent friendly service names, see Product names and service plan identifiers for licensing.
     * @param value Value to set for the servicePlanId property.
     */
    public set servicePlanId(value: string | undefined) {
        this._servicePlanId = value;
    };
}
