import {createProvisioningErrorInfoFromDiscriminatorValue} from './createProvisioningErrorInfoFromDiscriminatorValue';
import {ProvisioningErrorInfo} from './index';
import {ProvisioningResult} from './provisioningResult';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ProvisioningStatusInfo implements Parsable {
    /** The errorInformation property */
    private _errorInformation?: ProvisioningErrorInfo | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Possible values are: success, warning, failure, skipped, unknownFutureValue. */
    private _status?: ProvisioningResult | undefined;
    /**
     * Instantiates a new provisioningStatusInfo and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.provisioningStatusInfo";
    };
    /**
     * Gets the errorInformation property value. The errorInformation property
     * @returns a provisioningErrorInfo
     */
    public get errorInformation() {
        return this._errorInformation;
    };
    /**
     * Sets the errorInformation property value. The errorInformation property
     * @param value Value to set for the errorInformation property.
     */
    public set errorInformation(value: ProvisioningErrorInfo | undefined) {
        this._errorInformation = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "errorInformation": n => { this.errorInformation = n.getObjectValue<ProvisioningErrorInfo>(createProvisioningErrorInfoFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "status": n => { this.status = n.getEnumValue<ProvisioningResult>(ProvisioningResult); },
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
        writer.writeObjectValue<ProvisioningErrorInfo>("errorInformation", this.errorInformation);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeEnumValue<ProvisioningResult>("status", this.status);
    };
    /**
     * Gets the status property value. Possible values are: success, warning, failure, skipped, unknownFutureValue.
     * @returns a provisioningResult
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Possible values are: success, warning, failure, skipped, unknownFutureValue.
     * @param value Value to set for the status property.
     */
    public set status(value: ProvisioningResult | undefined) {
        this._status = value;
    };
}
