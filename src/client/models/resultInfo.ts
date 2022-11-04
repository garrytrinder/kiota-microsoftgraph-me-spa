import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ResultInfo implements Parsable {
    /** The result code. */
    private _code?: number | undefined;
    /** The message. */
    private _message?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The result sub-code. */
    private _subcode?: number | undefined;
    /**
     * Gets the code property value. The result code.
     * @returns a integer
     */
    public get code() {
        return this._code;
    };
    /**
     * Sets the code property value. The result code.
     * @param value Value to set for the code property.
     */
    public set code(value: number | undefined) {
        this._code = value;
    };
    /**
     * Instantiates a new resultInfo and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.resultInfo";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "code": n => { this.code = n.getNumberValue(); },
            "message": n => { this.message = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "subcode": n => { this.subcode = n.getNumberValue(); },
        };
    };
    /**
     * Gets the message property value. The message.
     * @returns a string
     */
    public get message() {
        return this._message;
    };
    /**
     * Sets the message property value. The message.
     * @param value Value to set for the message property.
     */
    public set message(value: string | undefined) {
        this._message = value;
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
        writer.writeNumberValue("code", this.code);
        writer.writeStringValue("message", this.message);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeNumberValue("subcode", this.subcode);
    };
    /**
     * Gets the subcode property value. The result sub-code.
     * @returns a integer
     */
    public get subcode() {
        return this._subcode;
    };
    /**
     * Sets the subcode property value. The result sub-code.
     * @param value Value to set for the subcode property.
     */
    public set subcode(value: number | undefined) {
        this._subcode = value;
    };
}
