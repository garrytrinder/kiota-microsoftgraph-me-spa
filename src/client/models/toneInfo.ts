import {Tone} from './tone';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ToneInfo implements Parsable {
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** An incremental identifier used for ordering DTMF events. */
    private _sequenceId?: number | undefined;
    /** The tone property */
    private _tone?: Tone | undefined;
    /**
     * Instantiates a new toneInfo and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.toneInfo";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "sequenceId": n => { this.sequenceId = n.getNumberValue(); },
            "tone": n => { this.tone = n.getEnumValue<Tone>(Tone); },
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
     * Gets the sequenceId property value. An incremental identifier used for ordering DTMF events.
     * @returns a int64
     */
    public get sequenceId() {
        return this._sequenceId;
    };
    /**
     * Sets the sequenceId property value. An incremental identifier used for ordering DTMF events.
     * @param value Value to set for the sequenceId property.
     */
    public set sequenceId(value: number | undefined) {
        this._sequenceId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeNumberValue("sequenceId", this.sequenceId);
        writer.writeEnumValue<Tone>("tone", this.tone);
    };
    /**
     * Gets the tone property value. The tone property
     * @returns a tone
     */
    public get tone() {
        return this._tone;
    };
    /**
     * Sets the tone property value. The tone property
     * @param value Value to set for the tone property.
     */
    public set tone(value: Tone | undefined) {
        this._tone = value;
    };
}
