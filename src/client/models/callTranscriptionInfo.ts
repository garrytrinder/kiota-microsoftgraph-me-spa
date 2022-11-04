import {CallTranscriptionState} from './callTranscriptionState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CallTranscriptionInfo implements Parsable {
    /** The state modified time in UTC. */
    private _lastModifiedDateTime?: Date | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The state property */
    private _state?: CallTranscriptionState | undefined;
    /**
     * Instantiates a new callTranscriptionInfo and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.callTranscriptionInfo";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "state": n => { this.state = n.getEnumValue<CallTranscriptionState>(CallTranscriptionState); },
        };
    };
    /**
     * Gets the lastModifiedDateTime property value. The state modified time in UTC.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. The state modified time in UTC.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
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
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeEnumValue<CallTranscriptionState>("state", this.state);
    };
    /**
     * Gets the state property value. The state property
     * @returns a callTranscriptionState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The state property
     * @param value Value to set for the state property.
     */
    public set state(value: CallTranscriptionState | undefined) {
        this._state = value;
    };
}
