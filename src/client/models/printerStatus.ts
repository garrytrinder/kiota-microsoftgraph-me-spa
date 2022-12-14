import {PrinterProcessingState} from './printerProcessingState';
import {PrinterProcessingStateDetail} from './printerProcessingStateDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrinterStatus implements Parsable {
    /** A human-readable description of the printer's current processing state. Read-only. */
    private _description?: string | undefined;
    /** The list of details describing why the printer is in the current state. Valid values are described in the following table. Read-only. */
    private _details?: PrinterProcessingStateDetail[] | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The state property */
    private _state?: PrinterProcessingState | undefined;
    /**
     * Instantiates a new printerStatus and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.printerStatus";
    };
    /**
     * Gets the description property value. A human-readable description of the printer's current processing state. Read-only.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. A human-readable description of the printer's current processing state. Read-only.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the details property value. The list of details describing why the printer is in the current state. Valid values are described in the following table. Read-only.
     * @returns a printerProcessingStateDetail
     */
    public get details() {
        return this._details;
    };
    /**
     * Sets the details property value. The list of details describing why the printer is in the current state. Valid values are described in the following table. Read-only.
     * @param value Value to set for the details property.
     */
    public set details(value: PrinterProcessingStateDetail[] | undefined) {
        this._details = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "description": n => { this.description = n.getStringValue(); },
            "details": n => { this.details = n.getEnumValues<PrinterProcessingStateDetail>(PrinterProcessingStateDetail); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "state": n => { this.state = n.getEnumValue<PrinterProcessingState>(PrinterProcessingState); },
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
        writer.writeStringValue("description", this.description);
        this.details && writer.writeEnumValue<PrinterProcessingStateDetail>("details", ...this.details);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeEnumValue<PrinterProcessingState>("state", this.state);
    };
    /**
     * Gets the state property value. The state property
     * @returns a printerProcessingState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The state property
     * @param value Value to set for the state property.
     */
    public set state(value: PrinterProcessingState | undefined) {
        this._state = value;
    };
}
