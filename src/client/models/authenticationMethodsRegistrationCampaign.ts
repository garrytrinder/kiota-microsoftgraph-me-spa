import {AdvancedConfigState} from './advancedConfigState';
import {createAuthenticationMethodsRegistrationCampaignIncludeTargetFromDiscriminatorValue} from './createAuthenticationMethodsRegistrationCampaignIncludeTargetFromDiscriminatorValue';
import {createExcludeTargetFromDiscriminatorValue} from './createExcludeTargetFromDiscriminatorValue';
import {AuthenticationMethodsRegistrationCampaignIncludeTarget, ExcludeTarget} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuthenticationMethodsRegistrationCampaign implements Parsable {
    /** Users and groups of users that are excluded from being prompted to set up the authentication method. */
    private _excludeTargets?: ExcludeTarget[] | undefined;
    /** Users and groups of users that are prompted to set up the authentication method. */
    private _includeTargets?: AuthenticationMethodsRegistrationCampaignIncludeTarget[] | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Specifies the number of days that the user sees a prompt again if they select 'Not now' and snoozes the prompt. Minimum: 0 days. Maximum: 14 days. If the value is '0', the user is prompted during every MFA attempt. */
    private _snoozeDurationInDays?: number | undefined;
    /** The state property */
    private _state?: AdvancedConfigState | undefined;
    /**
     * Instantiates a new authenticationMethodsRegistrationCampaign and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.authenticationMethodsRegistrationCampaign";
    };
    /**
     * Gets the excludeTargets property value. Users and groups of users that are excluded from being prompted to set up the authentication method.
     * @returns a excludeTarget
     */
    public get excludeTargets() {
        return this._excludeTargets;
    };
    /**
     * Sets the excludeTargets property value. Users and groups of users that are excluded from being prompted to set up the authentication method.
     * @param value Value to set for the excludeTargets property.
     */
    public set excludeTargets(value: ExcludeTarget[] | undefined) {
        this._excludeTargets = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "excludeTargets": n => { this.excludeTargets = n.getCollectionOfObjectValues<ExcludeTarget>(createExcludeTargetFromDiscriminatorValue); },
            "includeTargets": n => { this.includeTargets = n.getCollectionOfObjectValues<AuthenticationMethodsRegistrationCampaignIncludeTarget>(createAuthenticationMethodsRegistrationCampaignIncludeTargetFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "snoozeDurationInDays": n => { this.snoozeDurationInDays = n.getNumberValue(); },
            "state": n => { this.state = n.getEnumValue<AdvancedConfigState>(AdvancedConfigState); },
        };
    };
    /**
     * Gets the includeTargets property value. Users and groups of users that are prompted to set up the authentication method.
     * @returns a authenticationMethodsRegistrationCampaignIncludeTarget
     */
    public get includeTargets() {
        return this._includeTargets;
    };
    /**
     * Sets the includeTargets property value. Users and groups of users that are prompted to set up the authentication method.
     * @param value Value to set for the includeTargets property.
     */
    public set includeTargets(value: AuthenticationMethodsRegistrationCampaignIncludeTarget[] | undefined) {
        this._includeTargets = value;
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
        writer.writeCollectionOfObjectValues<ExcludeTarget>("excludeTargets", this.excludeTargets);
        writer.writeCollectionOfObjectValues<AuthenticationMethodsRegistrationCampaignIncludeTarget>("includeTargets", this.includeTargets);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeNumberValue("snoozeDurationInDays", this.snoozeDurationInDays);
        writer.writeEnumValue<AdvancedConfigState>("state", this.state);
    };
    /**
     * Gets the snoozeDurationInDays property value. Specifies the number of days that the user sees a prompt again if they select 'Not now' and snoozes the prompt. Minimum: 0 days. Maximum: 14 days. If the value is '0', the user is prompted during every MFA attempt.
     * @returns a integer
     */
    public get snoozeDurationInDays() {
        return this._snoozeDurationInDays;
    };
    /**
     * Sets the snoozeDurationInDays property value. Specifies the number of days that the user sees a prompt again if they select 'Not now' and snoozes the prompt. Minimum: 0 days. Maximum: 14 days. If the value is '0', the user is prompted during every MFA attempt.
     * @param value Value to set for the snoozeDurationInDays property.
     */
    public set snoozeDurationInDays(value: number | undefined) {
        this._snoozeDurationInDays = value;
    };
    /**
     * Gets the state property value. The state property
     * @returns a advancedConfigState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The state property
     * @param value Value to set for the state property.
     */
    public set state(value: AdvancedConfigState | undefined) {
        this._state = value;
    };
}
