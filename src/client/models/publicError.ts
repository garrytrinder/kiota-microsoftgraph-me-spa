import {createPublicErrorDetailFromDiscriminatorValue} from './createPublicErrorDetailFromDiscriminatorValue';
import {createPublicInnerErrorFromDiscriminatorValue} from './createPublicInnerErrorFromDiscriminatorValue';
import {PublicErrorDetail, PublicInnerError} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PublicError implements Parsable {
    /** Represents the error code. */
    private _code?: string | undefined;
    /** Details of the error. */
    private _details?: PublicErrorDetail[] | undefined;
    /** Details of the inner error. */
    private _innerError?: PublicInnerError | undefined;
    /** A non-localized message for the developer. */
    private _message?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The target of the error. */
    private _target?: string | undefined;
    /**
     * Gets the code property value. Represents the error code.
     * @returns a string
     */
    public get code() {
        return this._code;
    };
    /**
     * Sets the code property value. Represents the error code.
     * @param value Value to set for the code property.
     */
    public set code(value: string | undefined) {
        this._code = value;
    };
    /**
     * Instantiates a new publicError and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.publicError";
    };
    /**
     * Gets the details property value. Details of the error.
     * @returns a publicErrorDetail
     */
    public get details() {
        return this._details;
    };
    /**
     * Sets the details property value. Details of the error.
     * @param value Value to set for the details property.
     */
    public set details(value: PublicErrorDetail[] | undefined) {
        this._details = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "code": n => { this.code = n.getStringValue(); },
            "details": n => { this.details = n.getCollectionOfObjectValues<PublicErrorDetail>(createPublicErrorDetailFromDiscriminatorValue); },
            "innerError": n => { this.innerError = n.getObjectValue<PublicInnerError>(createPublicInnerErrorFromDiscriminatorValue); },
            "message": n => { this.message = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "target": n => { this.target = n.getStringValue(); },
        };
    };
    /**
     * Gets the innerError property value. Details of the inner error.
     * @returns a publicInnerError
     */
    public get innerError() {
        return this._innerError;
    };
    /**
     * Sets the innerError property value. Details of the inner error.
     * @param value Value to set for the innerError property.
     */
    public set innerError(value: PublicInnerError | undefined) {
        this._innerError = value;
    };
    /**
     * Gets the message property value. A non-localized message for the developer.
     * @returns a string
     */
    public get message() {
        return this._message;
    };
    /**
     * Sets the message property value. A non-localized message for the developer.
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
        writer.writeCollectionOfObjectValues<PublicErrorDetail>("details", this.details);
        writer.writeObjectValue<PublicInnerError>("innerError", this.innerError);
        writer.writeStringValue("message", this.message);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("target", this.target);
    };
    /**
     * Gets the target property value. The target of the error.
     * @returns a string
     */
    public get target() {
        return this._target;
    };
    /**
     * Sets the target property value. The target of the error.
     * @param value Value to set for the target property.
     */
    public set target(value: string | undefined) {
        this._target = value;
    };
}
