import {createApplicationEnforcedRestrictionsSessionControlFromDiscriminatorValue} from './createApplicationEnforcedRestrictionsSessionControlFromDiscriminatorValue';
import {createCloudAppSecuritySessionControlFromDiscriminatorValue} from './createCloudAppSecuritySessionControlFromDiscriminatorValue';
import {createPersistentBrowserSessionControlFromDiscriminatorValue} from './createPersistentBrowserSessionControlFromDiscriminatorValue';
import {createSignInFrequencySessionControlFromDiscriminatorValue} from './createSignInFrequencySessionControlFromDiscriminatorValue';
import {ApplicationEnforcedRestrictionsSessionControl, CloudAppSecuritySessionControl, PersistentBrowserSessionControl, SignInFrequencySessionControl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessSessionControls implements Parsable {
    /** Session control to enforce application restrictions. Only Exchange Online and Sharepoint Online support this session control. */
    private _applicationEnforcedRestrictions?: ApplicationEnforcedRestrictionsSessionControl | undefined;
    /** Session control to apply cloud app security. */
    private _cloudAppSecurity?: CloudAppSecuritySessionControl | undefined;
    /** Session control that determines whether it is acceptable for Azure AD to extend existing sessions based on information collected prior to an outage or not. */
    private _disableResilienceDefaults?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Session control to define whether to persist cookies or not. All apps should be selected for this session control to work correctly. */
    private _persistentBrowser?: PersistentBrowserSessionControl | undefined;
    /** Session control to enforce signin frequency. */
    private _signInFrequency?: SignInFrequencySessionControl | undefined;
    /**
     * Gets the applicationEnforcedRestrictions property value. Session control to enforce application restrictions. Only Exchange Online and Sharepoint Online support this session control.
     * @returns a applicationEnforcedRestrictionsSessionControl
     */
    public get applicationEnforcedRestrictions() {
        return this._applicationEnforcedRestrictions;
    };
    /**
     * Sets the applicationEnforcedRestrictions property value. Session control to enforce application restrictions. Only Exchange Online and Sharepoint Online support this session control.
     * @param value Value to set for the applicationEnforcedRestrictions property.
     */
    public set applicationEnforcedRestrictions(value: ApplicationEnforcedRestrictionsSessionControl | undefined) {
        this._applicationEnforcedRestrictions = value;
    };
    /**
     * Gets the cloudAppSecurity property value. Session control to apply cloud app security.
     * @returns a cloudAppSecuritySessionControl
     */
    public get cloudAppSecurity() {
        return this._cloudAppSecurity;
    };
    /**
     * Sets the cloudAppSecurity property value. Session control to apply cloud app security.
     * @param value Value to set for the cloudAppSecurity property.
     */
    public set cloudAppSecurity(value: CloudAppSecuritySessionControl | undefined) {
        this._cloudAppSecurity = value;
    };
    /**
     * Instantiates a new conditionalAccessSessionControls and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.conditionalAccessSessionControls";
    };
    /**
     * Gets the disableResilienceDefaults property value. Session control that determines whether it is acceptable for Azure AD to extend existing sessions based on information collected prior to an outage or not.
     * @returns a boolean
     */
    public get disableResilienceDefaults() {
        return this._disableResilienceDefaults;
    };
    /**
     * Sets the disableResilienceDefaults property value. Session control that determines whether it is acceptable for Azure AD to extend existing sessions based on information collected prior to an outage or not.
     * @param value Value to set for the disableResilienceDefaults property.
     */
    public set disableResilienceDefaults(value: boolean | undefined) {
        this._disableResilienceDefaults = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "applicationEnforcedRestrictions": n => { this.applicationEnforcedRestrictions = n.getObjectValue<ApplicationEnforcedRestrictionsSessionControl>(createApplicationEnforcedRestrictionsSessionControlFromDiscriminatorValue); },
            "cloudAppSecurity": n => { this.cloudAppSecurity = n.getObjectValue<CloudAppSecuritySessionControl>(createCloudAppSecuritySessionControlFromDiscriminatorValue); },
            "disableResilienceDefaults": n => { this.disableResilienceDefaults = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "persistentBrowser": n => { this.persistentBrowser = n.getObjectValue<PersistentBrowserSessionControl>(createPersistentBrowserSessionControlFromDiscriminatorValue); },
            "signInFrequency": n => { this.signInFrequency = n.getObjectValue<SignInFrequencySessionControl>(createSignInFrequencySessionControlFromDiscriminatorValue); },
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
     * Gets the persistentBrowser property value. Session control to define whether to persist cookies or not. All apps should be selected for this session control to work correctly.
     * @returns a persistentBrowserSessionControl
     */
    public get persistentBrowser() {
        return this._persistentBrowser;
    };
    /**
     * Sets the persistentBrowser property value. Session control to define whether to persist cookies or not. All apps should be selected for this session control to work correctly.
     * @param value Value to set for the persistentBrowser property.
     */
    public set persistentBrowser(value: PersistentBrowserSessionControl | undefined) {
        this._persistentBrowser = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<ApplicationEnforcedRestrictionsSessionControl>("applicationEnforcedRestrictions", this.applicationEnforcedRestrictions);
        writer.writeObjectValue<CloudAppSecuritySessionControl>("cloudAppSecurity", this.cloudAppSecurity);
        writer.writeBooleanValue("disableResilienceDefaults", this.disableResilienceDefaults);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<PersistentBrowserSessionControl>("persistentBrowser", this.persistentBrowser);
        writer.writeObjectValue<SignInFrequencySessionControl>("signInFrequency", this.signInFrequency);
    };
    /**
     * Gets the signInFrequency property value. Session control to enforce signin frequency.
     * @returns a signInFrequencySessionControl
     */
    public get signInFrequency() {
        return this._signInFrequency;
    };
    /**
     * Sets the signInFrequency property value. Session control to enforce signin frequency.
     * @param value Value to set for the signInFrequency property.
     */
    public set signInFrequency(value: SignInFrequencySessionControl | undefined) {
        this._signInFrequency = value;
    };
}
