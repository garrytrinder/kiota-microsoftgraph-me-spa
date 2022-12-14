import {ProvisioningStatusErrorCategory} from './provisioningStatusErrorCategory';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ProvisioningErrorInfo implements Parsable {
    /** Additional details in case of error. */
    private _additionalDetails?: string | undefined;
    /** Categorizes the error code. Possible values are failure, nonServiceFailure, success, unknownFutureValue */
    private _errorCategory?: ProvisioningStatusErrorCategory | undefined;
    /** Unique error code if any occurred. Learn more */
    private _errorCode?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Summarizes the status and describes why the status happened. */
    private _reason?: string | undefined;
    /** Provides the resolution for the corresponding error. */
    private _recommendedAction?: string | undefined;
    /**
     * Gets the additionalDetails property value. Additional details in case of error.
     * @returns a string
     */
    public get additionalDetails() {
        return this._additionalDetails;
    };
    /**
     * Sets the additionalDetails property value. Additional details in case of error.
     * @param value Value to set for the additionalDetails property.
     */
    public set additionalDetails(value: string | undefined) {
        this._additionalDetails = value;
    };
    /**
     * Instantiates a new provisioningErrorInfo and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.provisioningErrorInfo";
    };
    /**
     * Gets the errorCategory property value. Categorizes the error code. Possible values are failure, nonServiceFailure, success, unknownFutureValue
     * @returns a provisioningStatusErrorCategory
     */
    public get errorCategory() {
        return this._errorCategory;
    };
    /**
     * Sets the errorCategory property value. Categorizes the error code. Possible values are failure, nonServiceFailure, success, unknownFutureValue
     * @param value Value to set for the errorCategory property.
     */
    public set errorCategory(value: ProvisioningStatusErrorCategory | undefined) {
        this._errorCategory = value;
    };
    /**
     * Gets the errorCode property value. Unique error code if any occurred. Learn more
     * @returns a string
     */
    public get errorCode() {
        return this._errorCode;
    };
    /**
     * Sets the errorCode property value. Unique error code if any occurred. Learn more
     * @param value Value to set for the errorCode property.
     */
    public set errorCode(value: string | undefined) {
        this._errorCode = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "additionalDetails": n => { this.additionalDetails = n.getStringValue(); },
            "errorCategory": n => { this.errorCategory = n.getEnumValue<ProvisioningStatusErrorCategory>(ProvisioningStatusErrorCategory); },
            "errorCode": n => { this.errorCode = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "reason": n => { this.reason = n.getStringValue(); },
            "recommendedAction": n => { this.recommendedAction = n.getStringValue(); },
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
     * Gets the reason property value. Summarizes the status and describes why the status happened.
     * @returns a string
     */
    public get reason() {
        return this._reason;
    };
    /**
     * Sets the reason property value. Summarizes the status and describes why the status happened.
     * @param value Value to set for the reason property.
     */
    public set reason(value: string | undefined) {
        this._reason = value;
    };
    /**
     * Gets the recommendedAction property value. Provides the resolution for the corresponding error.
     * @returns a string
     */
    public get recommendedAction() {
        return this._recommendedAction;
    };
    /**
     * Sets the recommendedAction property value. Provides the resolution for the corresponding error.
     * @param value Value to set for the recommendedAction property.
     */
    public set recommendedAction(value: string | undefined) {
        this._recommendedAction = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("additionalDetails", this.additionalDetails);
        writer.writeEnumValue<ProvisioningStatusErrorCategory>("errorCategory", this.errorCategory);
        writer.writeStringValue("errorCode", this.errorCode);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("reason", this.reason);
        writer.writeStringValue("recommendedAction", this.recommendedAction);
    };
}
