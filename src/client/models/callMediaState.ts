import {MediaState} from './mediaState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CallMediaState implements Parsable {
    /** The audio media state. Possible values are: active, inactive, unknownFutureValue. */
    private _audio?: MediaState | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Gets the audio property value. The audio media state. Possible values are: active, inactive, unknownFutureValue.
     * @returns a mediaState
     */
    public get audio() {
        return this._audio;
    };
    /**
     * Sets the audio property value. The audio media state. Possible values are: active, inactive, unknownFutureValue.
     * @param value Value to set for the audio property.
     */
    public set audio(value: MediaState | undefined) {
        this._audio = value;
    };
    /**
     * Instantiates a new callMediaState and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.callMediaState";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "audio": n => { this.audio = n.getEnumValue<MediaState>(MediaState); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
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
        writer.writeEnumValue<MediaState>("audio", this.audio);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
