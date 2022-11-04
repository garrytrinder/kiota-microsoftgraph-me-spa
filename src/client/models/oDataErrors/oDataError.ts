import {createMainErrorFromDiscriminatorValue} from './createMainErrorFromDiscriminatorValue';
import {MainError} from './index';
import {ApiError, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ODataError extends ApiError implements Parsable {
    /** The error property */
    private _error_escaped?: MainError | undefined;
    /**
     * Gets the error property value. The error property
     * @returns a MainError
     */
    public get error_escaped() {
        return this._error_escaped;
    };
    /**
     * Sets the error property value. The error property
     * @param value Value to set for the error_escaped property.
     */
    public set error_escaped(value: MainError | undefined) {
        this._error_escaped = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "error": n => { this.error_escaped = n.getObjectValue<MainError>(createMainErrorFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<MainError>("error", this.error_escaped);
    };
}
