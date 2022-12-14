import {FailureStage} from './failureStage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FailureInfo implements Parsable {
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Classification of why a call or portion of a call failed. */
    private _reason?: string | undefined;
    /** The stage property */
    private _stage?: FailureStage | undefined;
    /**
     * Instantiates a new failureInfo and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.callRecords.failureInfo";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "reason": n => { this.reason = n.getStringValue(); },
            "stage": n => { this.stage = n.getEnumValue<FailureStage>(FailureStage); },
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
     * Gets the reason property value. Classification of why a call or portion of a call failed.
     * @returns a string
     */
    public get reason() {
        return this._reason;
    };
    /**
     * Sets the reason property value. Classification of why a call or portion of a call failed.
     * @param value Value to set for the reason property.
     */
    public set reason(value: string | undefined) {
        this._reason = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("reason", this.reason);
        writer.writeEnumValue<FailureStage>("stage", this.stage);
    };
    /**
     * Gets the stage property value. The stage property
     * @returns a failureStage
     */
    public get stage() {
        return this._stage;
    };
    /**
     * Sets the stage property value. The stage property
     * @param value Value to set for the stage property.
     */
    public set stage(value: FailureStage | undefined) {
        this._stage = value;
    };
}
