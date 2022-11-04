import {CrossTenantAccessPolicyTargetType} from './crossTenantAccessPolicyTargetType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CrossTenantAccessPolicyTarget implements Parsable {
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The unique identifier of the user, group, or application; one of the following keywords: AllUsers and AllApplications; or for targets that are applications, you may use reserved values. */
    private _target?: string | undefined;
    /** The type of resource that you want to target. The possible values are: user, group, application, unknownFutureValue. */
    private _targetType?: CrossTenantAccessPolicyTargetType | undefined;
    /**
     * Instantiates a new crossTenantAccessPolicyTarget and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.crossTenantAccessPolicyTarget";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "target": n => { this.target = n.getStringValue(); },
            "targetType": n => { this.targetType = n.getEnumValue<CrossTenantAccessPolicyTargetType>(CrossTenantAccessPolicyTargetType); },
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
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("target", this.target);
        writer.writeEnumValue<CrossTenantAccessPolicyTargetType>("targetType", this.targetType);
    };
    /**
     * Gets the target property value. The unique identifier of the user, group, or application; one of the following keywords: AllUsers and AllApplications; or for targets that are applications, you may use reserved values.
     * @returns a string
     */
    public get target() {
        return this._target;
    };
    /**
     * Sets the target property value. The unique identifier of the user, group, or application; one of the following keywords: AllUsers and AllApplications; or for targets that are applications, you may use reserved values.
     * @param value Value to set for the target property.
     */
    public set target(value: string | undefined) {
        this._target = value;
    };
    /**
     * Gets the targetType property value. The type of resource that you want to target. The possible values are: user, group, application, unknownFutureValue.
     * @returns a crossTenantAccessPolicyTargetType
     */
    public get targetType() {
        return this._targetType;
    };
    /**
     * Sets the targetType property value. The type of resource that you want to target. The possible values are: user, group, application, unknownFutureValue.
     * @param value Value to set for the targetType property.
     */
    public set targetType(value: CrossTenantAccessPolicyTargetType | undefined) {
        this._targetType = value;
    };
}
