import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OperationError implements Parsable {
    /** Operation error code. */
    private _code?: string | undefined;
    /** Operation error message. */
    private _message?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Gets the code property value. Operation error code.
     * @returns a string
     */
    public get code() {
        return this._code;
    };
    /**
     * Sets the code property value. Operation error code.
     * @param value Value to set for the code property.
     */
    public set code(value: string | undefined) {
        this._code = value;
    };
    /**
     * Instantiates a new operationError and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.operationError";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "code": n => { this.code = n.getStringValue(); },
            "message": n => { this.message = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the message property value. Operation error message.
     * @returns a string
     */
    public get message() {
        return this._message;
    };
    /**
     * Sets the message property value. Operation error message.
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
        writer.writeStringValue("code", this.code);
        writer.writeStringValue("message", this.message);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
