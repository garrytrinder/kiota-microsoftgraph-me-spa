import {createErrorDetailsFromDiscriminatorValue} from './createErrorDetailsFromDiscriminatorValue';
import {createInnerErrorFromDiscriminatorValue} from './createInnerErrorFromDiscriminatorValue';
import {ErrorDetails, InnerError} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MainError implements Parsable {
    /** The code property */
    private _code?: string | undefined;
    /** The details property */
    private _details?: ErrorDetails[] | undefined;
    /** The innererror property */
    private _innererror?: InnerError | undefined;
    /** The message property */
    private _message?: string | undefined;
    /** The target property */
    private _target?: string | undefined;
    /**
     * Gets the code property value. The code property
     * @returns a string
     */
    public get code() {
        return this._code;
    };
    /**
     * Sets the code property value. The code property
     * @param value Value to set for the code property.
     */
    public set code(value: string | undefined) {
        this._code = value;
    };
    /**
     * Gets the details property value. The details property
     * @returns a ErrorDetails
     */
    public get details() {
        return this._details;
    };
    /**
     * Sets the details property value. The details property
     * @param value Value to set for the details property.
     */
    public set details(value: ErrorDetails[] | undefined) {
        this._details = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "code": n => { this.code = n.getStringValue(); },
            "details": n => { this.details = n.getCollectionOfObjectValues<ErrorDetails>(createErrorDetailsFromDiscriminatorValue); },
            "innererror": n => { this.innererror = n.getObjectValue<InnerError>(createInnerErrorFromDiscriminatorValue); },
            "message": n => { this.message = n.getStringValue(); },
            "target": n => { this.target = n.getStringValue(); },
        };
    };
    /**
     * Gets the innererror property value. The innererror property
     * @returns a InnerError
     */
    public get innererror() {
        return this._innererror;
    };
    /**
     * Sets the innererror property value. The innererror property
     * @param value Value to set for the innererror property.
     */
    public set innererror(value: InnerError | undefined) {
        this._innererror = value;
    };
    /**
     * Gets the message property value. The message property
     * @returns a string
     */
    public get message() {
        return this._message;
    };
    /**
     * Sets the message property value. The message property
     * @param value Value to set for the message property.
     */
    public set message(value: string | undefined) {
        this._message = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("code", this.code);
        writer.writeCollectionOfObjectValues<ErrorDetails>("details", this.details);
        writer.writeObjectValue<InnerError>("innererror", this.innererror);
        writer.writeStringValue("message", this.message);
        writer.writeStringValue("target", this.target);
    };
    /**
     * Gets the target property value. The target property
     * @returns a string
     */
    public get target() {
        return this._target;
    };
    /**
     * Sets the target property value. The target property
     * @param value Value to set for the target property.
     */
    public set target(value: string | undefined) {
        this._target = value;
    };
}
