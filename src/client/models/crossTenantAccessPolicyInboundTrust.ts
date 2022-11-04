import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CrossTenantAccessPolicyInboundTrust implements Parsable {
    /** Specifies whether compliant devices from external Azure AD organizations are trusted. */
    private _isCompliantDeviceAccepted?: boolean | undefined;
    /** Specifies whether hybrid Azure AD joined devices from external Azure AD organizations are trusted. */
    private _isHybridAzureADJoinedDeviceAccepted?: boolean | undefined;
    /** Specifies whether MFA from external Azure AD organizations is trusted. */
    private _isMfaAccepted?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Instantiates a new crossTenantAccessPolicyInboundTrust and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.crossTenantAccessPolicyInboundTrust";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "isCompliantDeviceAccepted": n => { this.isCompliantDeviceAccepted = n.getBooleanValue(); },
            "isHybridAzureADJoinedDeviceAccepted": n => { this.isHybridAzureADJoinedDeviceAccepted = n.getBooleanValue(); },
            "isMfaAccepted": n => { this.isMfaAccepted = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the isCompliantDeviceAccepted property value. Specifies whether compliant devices from external Azure AD organizations are trusted.
     * @returns a boolean
     */
    public get isCompliantDeviceAccepted() {
        return this._isCompliantDeviceAccepted;
    };
    /**
     * Sets the isCompliantDeviceAccepted property value. Specifies whether compliant devices from external Azure AD organizations are trusted.
     * @param value Value to set for the isCompliantDeviceAccepted property.
     */
    public set isCompliantDeviceAccepted(value: boolean | undefined) {
        this._isCompliantDeviceAccepted = value;
    };
    /**
     * Gets the isHybridAzureADJoinedDeviceAccepted property value. Specifies whether hybrid Azure AD joined devices from external Azure AD organizations are trusted.
     * @returns a boolean
     */
    public get isHybridAzureADJoinedDeviceAccepted() {
        return this._isHybridAzureADJoinedDeviceAccepted;
    };
    /**
     * Sets the isHybridAzureADJoinedDeviceAccepted property value. Specifies whether hybrid Azure AD joined devices from external Azure AD organizations are trusted.
     * @param value Value to set for the isHybridAzureADJoinedDeviceAccepted property.
     */
    public set isHybridAzureADJoinedDeviceAccepted(value: boolean | undefined) {
        this._isHybridAzureADJoinedDeviceAccepted = value;
    };
    /**
     * Gets the isMfaAccepted property value. Specifies whether MFA from external Azure AD organizations is trusted.
     * @returns a boolean
     */
    public get isMfaAccepted() {
        return this._isMfaAccepted;
    };
    /**
     * Sets the isMfaAccepted property value. Specifies whether MFA from external Azure AD organizations is trusted.
     * @param value Value to set for the isMfaAccepted property.
     */
    public set isMfaAccepted(value: boolean | undefined) {
        this._isMfaAccepted = value;
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
        writer.writeBooleanValue("isCompliantDeviceAccepted", this.isCompliantDeviceAccepted);
        writer.writeBooleanValue("isHybridAzureADJoinedDeviceAccepted", this.isHybridAzureADJoinedDeviceAccepted);
        writer.writeBooleanValue("isMfaAccepted", this.isMfaAccepted);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
