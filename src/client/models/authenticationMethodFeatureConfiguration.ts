import {AdvancedConfigState} from './advancedConfigState';
import {createFeatureTargetFromDiscriminatorValue} from './createFeatureTargetFromDiscriminatorValue';
import {FeatureTarget} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuthenticationMethodFeatureConfiguration implements Parsable {
    /** A single entity that is excluded from this feature. */
    private _excludeTarget?: FeatureTarget | undefined;
    /** A single entity that is included in this feature. */
    private _includeTarget?: FeatureTarget | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Enable or disable the feature. Possible values are: default, enabled, disabled, unknownFutureValue. The default value is used when the configuration hasn't been explicitly set and uses the default behavior of Azure AD for the setting. The default value is disabled. */
    private _state?: AdvancedConfigState | undefined;
    /**
     * Instantiates a new authenticationMethodFeatureConfiguration and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.authenticationMethodFeatureConfiguration";
    };
    /**
     * Gets the excludeTarget property value. A single entity that is excluded from this feature.
     * @returns a featureTarget
     */
    public get excludeTarget() {
        return this._excludeTarget;
    };
    /**
     * Sets the excludeTarget property value. A single entity that is excluded from this feature.
     * @param value Value to set for the excludeTarget property.
     */
    public set excludeTarget(value: FeatureTarget | undefined) {
        this._excludeTarget = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "excludeTarget": n => { this.excludeTarget = n.getObjectValue<FeatureTarget>(createFeatureTargetFromDiscriminatorValue); },
            "includeTarget": n => { this.includeTarget = n.getObjectValue<FeatureTarget>(createFeatureTargetFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "state": n => { this.state = n.getEnumValue<AdvancedConfigState>(AdvancedConfigState); },
        };
    };
    /**
     * Gets the includeTarget property value. A single entity that is included in this feature.
     * @returns a featureTarget
     */
    public get includeTarget() {
        return this._includeTarget;
    };
    /**
     * Sets the includeTarget property value. A single entity that is included in this feature.
     * @param value Value to set for the includeTarget property.
     */
    public set includeTarget(value: FeatureTarget | undefined) {
        this._includeTarget = value;
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
        writer.writeObjectValue<FeatureTarget>("excludeTarget", this.excludeTarget);
        writer.writeObjectValue<FeatureTarget>("includeTarget", this.includeTarget);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeEnumValue<AdvancedConfigState>("state", this.state);
    };
    /**
     * Gets the state property value. Enable or disable the feature. Possible values are: default, enabled, disabled, unknownFutureValue. The default value is used when the configuration hasn't been explicitly set and uses the default behavior of Azure AD for the setting. The default value is disabled.
     * @returns a advancedConfigState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. Enable or disable the feature. Possible values are: default, enabled, disabled, unknownFutureValue. The default value is used when the configuration hasn't been explicitly set and uses the default behavior of Azure AD for the setting. The default value is disabled.
     * @param value Value to set for the state property.
     */
    public set state(value: AdvancedConfigState | undefined) {
        this._state = value;
    };
}
