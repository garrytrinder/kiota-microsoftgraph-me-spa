import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SharingInvitation implements Parsable {
    /** The email address provided for the recipient of the sharing invitation. Read-only. */
    private _email?: string | undefined;
    /** Provides information about who sent the invitation that created this permission, if that information is available. Read-only. */
    private _invitedBy?: IdentitySet | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The redeemedBy property */
    private _redeemedBy?: string | undefined;
    /** If true the recipient of the invitation needs to sign in in order to access the shared item. Read-only. */
    private _signInRequired?: boolean | undefined;
    /**
     * Instantiates a new sharingInvitation and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.sharingInvitation";
    };
    /**
     * Gets the email property value. The email address provided for the recipient of the sharing invitation. Read-only.
     * @returns a string
     */
    public get email() {
        return this._email;
    };
    /**
     * Sets the email property value. The email address provided for the recipient of the sharing invitation. Read-only.
     * @param value Value to set for the email property.
     */
    public set email(value: string | undefined) {
        this._email = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "email": n => { this.email = n.getStringValue(); },
            "invitedBy": n => { this.invitedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "redeemedBy": n => { this.redeemedBy = n.getStringValue(); },
            "signInRequired": n => { this.signInRequired = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the invitedBy property value. Provides information about who sent the invitation that created this permission, if that information is available. Read-only.
     * @returns a identitySet
     */
    public get invitedBy() {
        return this._invitedBy;
    };
    /**
     * Sets the invitedBy property value. Provides information about who sent the invitation that created this permission, if that information is available. Read-only.
     * @param value Value to set for the invitedBy property.
     */
    public set invitedBy(value: IdentitySet | undefined) {
        this._invitedBy = value;
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
     * Gets the redeemedBy property value. The redeemedBy property
     * @returns a string
     */
    public get redeemedBy() {
        return this._redeemedBy;
    };
    /**
     * Sets the redeemedBy property value. The redeemedBy property
     * @param value Value to set for the redeemedBy property.
     */
    public set redeemedBy(value: string | undefined) {
        this._redeemedBy = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("email", this.email);
        writer.writeObjectValue<IdentitySet>("invitedBy", this.invitedBy);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("redeemedBy", this.redeemedBy);
        writer.writeBooleanValue("signInRequired", this.signInRequired);
    };
    /**
     * Gets the signInRequired property value. If true the recipient of the invitation needs to sign in in order to access the shared item. Read-only.
     * @returns a boolean
     */
    public get signInRequired() {
        return this._signInRequired;
    };
    /**
     * Sets the signInRequired property value. If true the recipient of the invitation needs to sign in in order to access the shared item. Read-only.
     * @param value Value to set for the signInRequired property.
     */
    public set signInRequired(value: boolean | undefined) {
        this._signInRequired = value;
    };
}
