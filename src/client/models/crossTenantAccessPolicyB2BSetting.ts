import {createCrossTenantAccessPolicyTargetConfigurationFromDiscriminatorValue} from './createCrossTenantAccessPolicyTargetConfigurationFromDiscriminatorValue';
import {CrossTenantAccessPolicyTargetConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CrossTenantAccessPolicyB2BSetting implements Parsable {
    /** The list of applications targeted with your cross-tenant access policy. */
    private _applications?: CrossTenantAccessPolicyTargetConfiguration | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The list of users and groups targeted with your cross-tenant access policy. */
    private _usersAndGroups?: CrossTenantAccessPolicyTargetConfiguration | undefined;
    /**
     * Gets the applications property value. The list of applications targeted with your cross-tenant access policy.
     * @returns a crossTenantAccessPolicyTargetConfiguration
     */
    public get applications() {
        return this._applications;
    };
    /**
     * Sets the applications property value. The list of applications targeted with your cross-tenant access policy.
     * @param value Value to set for the applications property.
     */
    public set applications(value: CrossTenantAccessPolicyTargetConfiguration | undefined) {
        this._applications = value;
    };
    /**
     * Instantiates a new crossTenantAccessPolicyB2BSetting and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.crossTenantAccessPolicyB2BSetting";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "applications": n => { this.applications = n.getObjectValue<CrossTenantAccessPolicyTargetConfiguration>(createCrossTenantAccessPolicyTargetConfigurationFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "usersAndGroups": n => { this.usersAndGroups = n.getObjectValue<CrossTenantAccessPolicyTargetConfiguration>(createCrossTenantAccessPolicyTargetConfigurationFromDiscriminatorValue); },
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
        writer.writeObjectValue<CrossTenantAccessPolicyTargetConfiguration>("applications", this.applications);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<CrossTenantAccessPolicyTargetConfiguration>("usersAndGroups", this.usersAndGroups);
    };
    /**
     * Gets the usersAndGroups property value. The list of users and groups targeted with your cross-tenant access policy.
     * @returns a crossTenantAccessPolicyTargetConfiguration
     */
    public get usersAndGroups() {
        return this._usersAndGroups;
    };
    /**
     * Sets the usersAndGroups property value. The list of users and groups targeted with your cross-tenant access policy.
     * @param value Value to set for the usersAndGroups property.
     */
    public set usersAndGroups(value: CrossTenantAccessPolicyTargetConfiguration | undefined) {
        this._usersAndGroups = value;
    };
}
