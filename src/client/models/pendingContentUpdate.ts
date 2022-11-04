import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PendingContentUpdate implements Parsable {
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Date and time the pending binary operation was queued in UTC time. Read-only. */
    private _queuedDateTime?: Date | undefined;
    /**
     * Instantiates a new pendingContentUpdate and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.pendingContentUpdate";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "queuedDateTime": n => { this.queuedDateTime = n.getDateValue(); },
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
     * Gets the queuedDateTime property value. Date and time the pending binary operation was queued in UTC time. Read-only.
     * @returns a Date
     */
    public get queuedDateTime() {
        return this._queuedDateTime;
    };
    /**
     * Sets the queuedDateTime property value. Date and time the pending binary operation was queued in UTC time. Read-only.
     * @param value Value to set for the queuedDateTime property.
     */
    public set queuedDateTime(value: Date | undefined) {
        this._queuedDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeDateValue("queuedDateTime", this.queuedDateTime);
    };
}
