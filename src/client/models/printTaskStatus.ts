import {PrintTaskProcessingState} from './printTaskProcessingState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintTaskStatus implements Parsable {
    /** A human-readable description of the current processing state of the printTask. */
    private _description?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The state property */
    private _state?: PrintTaskProcessingState | undefined;
    /**
     * Instantiates a new printTaskStatus and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.printTaskStatus";
    };
    /**
     * Gets the description property value. A human-readable description of the current processing state of the printTask.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. A human-readable description of the current processing state of the printTask.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "description": n => { this.description = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "state": n => { this.state = n.getEnumValue<PrintTaskProcessingState>(PrintTaskProcessingState); },
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
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeEnumValue<PrintTaskProcessingState>("state", this.state);
    };
    /**
     * Gets the state property value. The state property
     * @returns a printTaskProcessingState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The state property
     * @param value Value to set for the state property.
     */
    public set state(value: PrintTaskProcessingState | undefined) {
        this._state = value;
    };
}
