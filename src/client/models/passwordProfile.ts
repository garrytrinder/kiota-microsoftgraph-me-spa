import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PasswordProfile implements Parsable {
    /** true if the user must change her password on the next login; otherwise false. If not set, default is false. NOTE:  For Azure B2C tenants, set to false and instead use custom policies and user flows to force password reset at first sign in. See Force password reset at first logon. */
    private _forceChangePasswordNextSignIn?: boolean | undefined;
    /** If true, at next sign-in, the user must perform a multi-factor authentication (MFA) before being forced to change their password. The behavior is identical to forceChangePasswordNextSignIn except that the user is required to first perform a multi-factor authentication before password change. After a password change, this property will be automatically reset to false. If not set, default is false. */
    private _forceChangePasswordNextSignInWithMfa?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The password for the user. This property is required when a user is created. It can be updated, but the user will be required to change the password on the next login. The password must satisfy minimum requirements as specified by the user’s passwordPolicies property. By default, a strong password is required. */
    private _password?: string | undefined;
    /**
     * Instantiates a new passwordProfile and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.passwordProfile";
    };
    /**
     * Gets the forceChangePasswordNextSignIn property value. true if the user must change her password on the next login; otherwise false. If not set, default is false. NOTE:  For Azure B2C tenants, set to false and instead use custom policies and user flows to force password reset at first sign in. See Force password reset at first logon.
     * @returns a boolean
     */
    public get forceChangePasswordNextSignIn() {
        return this._forceChangePasswordNextSignIn;
    };
    /**
     * Sets the forceChangePasswordNextSignIn property value. true if the user must change her password on the next login; otherwise false. If not set, default is false. NOTE:  For Azure B2C tenants, set to false and instead use custom policies and user flows to force password reset at first sign in. See Force password reset at first logon.
     * @param value Value to set for the forceChangePasswordNextSignIn property.
     */
    public set forceChangePasswordNextSignIn(value: boolean | undefined) {
        this._forceChangePasswordNextSignIn = value;
    };
    /**
     * Gets the forceChangePasswordNextSignInWithMfa property value. If true, at next sign-in, the user must perform a multi-factor authentication (MFA) before being forced to change their password. The behavior is identical to forceChangePasswordNextSignIn except that the user is required to first perform a multi-factor authentication before password change. After a password change, this property will be automatically reset to false. If not set, default is false.
     * @returns a boolean
     */
    public get forceChangePasswordNextSignInWithMfa() {
        return this._forceChangePasswordNextSignInWithMfa;
    };
    /**
     * Sets the forceChangePasswordNextSignInWithMfa property value. If true, at next sign-in, the user must perform a multi-factor authentication (MFA) before being forced to change their password. The behavior is identical to forceChangePasswordNextSignIn except that the user is required to first perform a multi-factor authentication before password change. After a password change, this property will be automatically reset to false. If not set, default is false.
     * @param value Value to set for the forceChangePasswordNextSignInWithMfa property.
     */
    public set forceChangePasswordNextSignInWithMfa(value: boolean | undefined) {
        this._forceChangePasswordNextSignInWithMfa = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "forceChangePasswordNextSignIn": n => { this.forceChangePasswordNextSignIn = n.getBooleanValue(); },
            "forceChangePasswordNextSignInWithMfa": n => { this.forceChangePasswordNextSignInWithMfa = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "password": n => { this.password = n.getStringValue(); },
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
     * Gets the password property value. The password for the user. This property is required when a user is created. It can be updated, but the user will be required to change the password on the next login. The password must satisfy minimum requirements as specified by the user’s passwordPolicies property. By default, a strong password is required.
     * @returns a string
     */
    public get password() {
        return this._password;
    };
    /**
     * Sets the password property value. The password for the user. This property is required when a user is created. It can be updated, but the user will be required to change the password on the next login. The password must satisfy minimum requirements as specified by the user’s passwordPolicies property. By default, a strong password is required.
     * @param value Value to set for the password property.
     */
    public set password(value: string | undefined) {
        this._password = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("forceChangePasswordNextSignIn", this.forceChangePasswordNextSignIn);
        writer.writeBooleanValue("forceChangePasswordNextSignInWithMfa", this.forceChangePasswordNextSignInWithMfa);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("password", this.password);
    };
}
