import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DomainState implements Parsable {
    /** Timestamp for when the last activity occurred. The value is updated when an operation is scheduled, the asynchronous task starts, and when the operation completes. */
    private _lastActionDateTime?: Date | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Type of asynchronous operation. The values can be ForceDelete or Verification */
    private _operation?: string | undefined;
    /** Current status of the operation.  Scheduled - Operation has been scheduled but has not started.  InProgress - Task has started and is in progress.  Failed - Operation has failed. */
    private _status?: string | undefined;
    /**
     * Instantiates a new domainState and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.domainState";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "lastActionDateTime": n => { this.lastActionDateTime = n.getDateValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "operation": n => { this.operation = n.getStringValue(); },
            "status": n => { this.status = n.getStringValue(); },
        };
    };
    /**
     * Gets the lastActionDateTime property value. Timestamp for when the last activity occurred. The value is updated when an operation is scheduled, the asynchronous task starts, and when the operation completes.
     * @returns a Date
     */
    public get lastActionDateTime() {
        return this._lastActionDateTime;
    };
    /**
     * Sets the lastActionDateTime property value. Timestamp for when the last activity occurred. The value is updated when an operation is scheduled, the asynchronous task starts, and when the operation completes.
     * @param value Value to set for the lastActionDateTime property.
     */
    public set lastActionDateTime(value: Date | undefined) {
        this._lastActionDateTime = value;
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
     * Gets the operation property value. Type of asynchronous operation. The values can be ForceDelete or Verification
     * @returns a string
     */
    public get operation() {
        return this._operation;
    };
    /**
     * Sets the operation property value. Type of asynchronous operation. The values can be ForceDelete or Verification
     * @param value Value to set for the operation property.
     */
    public set operation(value: string | undefined) {
        this._operation = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateValue("lastActionDateTime", this.lastActionDateTime);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("operation", this.operation);
        writer.writeStringValue("status", this.status);
    };
    /**
     * Gets the status property value. Current status of the operation.  Scheduled - Operation has been scheduled but has not started.  InProgress - Task has started and is in progress.  Failed - Operation has failed.
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Current status of the operation.  Scheduled - Operation has been scheduled but has not started.  InProgress - Task has started and is in progress.  Failed - Operation has failed.
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        this._status = value;
    };
}
