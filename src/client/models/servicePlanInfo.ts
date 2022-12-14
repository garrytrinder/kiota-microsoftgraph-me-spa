import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServicePlanInfo implements Parsable {
    /** The object the service plan can be assigned to. The possible values are:User - service plan can be assigned to individual users.Company - service plan can be assigned to the entire tenant. */
    private _appliesTo?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The provisioning status of the service plan. The possible values are:Success - Service is fully provisioned.Disabled - Service has been disabled.ErrorStatus - The service plan has not been provisioned and is in an error state.PendingInput - Service is not yet provisioned; awaiting service confirmation.PendingActivation - Service is provisioned but requires explicit activation by administrator (for example, Intune_O365 service plan)PendingProvisioning - Microsoft has added a new service to the product SKU and it has not been activated in the tenant, yet. */
    private _provisioningStatus?: string | undefined;
    /** The unique identifier of the service plan. */
    private _servicePlanId?: string | undefined;
    /** The name of the service plan. */
    private _servicePlanName?: string | undefined;
    /**
     * Gets the appliesTo property value. The object the service plan can be assigned to. The possible values are:User - service plan can be assigned to individual users.Company - service plan can be assigned to the entire tenant.
     * @returns a string
     */
    public get appliesTo() {
        return this._appliesTo;
    };
    /**
     * Sets the appliesTo property value. The object the service plan can be assigned to. The possible values are:User - service plan can be assigned to individual users.Company - service plan can be assigned to the entire tenant.
     * @param value Value to set for the appliesTo property.
     */
    public set appliesTo(value: string | undefined) {
        this._appliesTo = value;
    };
    /**
     * Instantiates a new servicePlanInfo and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.servicePlanInfo";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "appliesTo": n => { this.appliesTo = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "provisioningStatus": n => { this.provisioningStatus = n.getStringValue(); },
            "servicePlanId": n => { this.servicePlanId = n.getStringValue(); },
            "servicePlanName": n => { this.servicePlanName = n.getStringValue(); },
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
     * Gets the provisioningStatus property value. The provisioning status of the service plan. The possible values are:Success - Service is fully provisioned.Disabled - Service has been disabled.ErrorStatus - The service plan has not been provisioned and is in an error state.PendingInput - Service is not yet provisioned; awaiting service confirmation.PendingActivation - Service is provisioned but requires explicit activation by administrator (for example, Intune_O365 service plan)PendingProvisioning - Microsoft has added a new service to the product SKU and it has not been activated in the tenant, yet.
     * @returns a string
     */
    public get provisioningStatus() {
        return this._provisioningStatus;
    };
    /**
     * Sets the provisioningStatus property value. The provisioning status of the service plan. The possible values are:Success - Service is fully provisioned.Disabled - Service has been disabled.ErrorStatus - The service plan has not been provisioned and is in an error state.PendingInput - Service is not yet provisioned; awaiting service confirmation.PendingActivation - Service is provisioned but requires explicit activation by administrator (for example, Intune_O365 service plan)PendingProvisioning - Microsoft has added a new service to the product SKU and it has not been activated in the tenant, yet.
     * @param value Value to set for the provisioningStatus property.
     */
    public set provisioningStatus(value: string | undefined) {
        this._provisioningStatus = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("appliesTo", this.appliesTo);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("provisioningStatus", this.provisioningStatus);
        writer.writeStringValue("servicePlanId", this.servicePlanId);
        writer.writeStringValue("servicePlanName", this.servicePlanName);
    };
    /**
     * Gets the servicePlanId property value. The unique identifier of the service plan.
     * @returns a string
     */
    public get servicePlanId() {
        return this._servicePlanId;
    };
    /**
     * Sets the servicePlanId property value. The unique identifier of the service plan.
     * @param value Value to set for the servicePlanId property.
     */
    public set servicePlanId(value: string | undefined) {
        this._servicePlanId = value;
    };
    /**
     * Gets the servicePlanName property value. The name of the service plan.
     * @returns a string
     */
    public get servicePlanName() {
        return this._servicePlanName;
    };
    /**
     * Sets the servicePlanName property value. The name of the service plan.
     * @param value Value to set for the servicePlanName property.
     */
    public set servicePlanName(value: string | undefined) {
        this._servicePlanName = value;
    };
}
