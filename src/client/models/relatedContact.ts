import {ContactRelationship} from './contactRelationship';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RelatedContact implements Parsable {
    /** Indicates whether the user has been consented to access student data. */
    private _accessConsent?: boolean | undefined;
    /** Name of the contact. Required. */
    private _displayName?: string | undefined;
    /** Primary email address of the contact. Required. */
    private _emailAddress?: string | undefined;
    /** Mobile phone number of the contact. */
    private _mobilePhone?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The relationship property */
    private _relationship?: ContactRelationship | undefined;
    /**
     * Gets the accessConsent property value. Indicates whether the user has been consented to access student data.
     * @returns a boolean
     */
    public get accessConsent() {
        return this._accessConsent;
    };
    /**
     * Sets the accessConsent property value. Indicates whether the user has been consented to access student data.
     * @param value Value to set for the accessConsent property.
     */
    public set accessConsent(value: boolean | undefined) {
        this._accessConsent = value;
    };
    /**
     * Instantiates a new relatedContact and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.relatedContact";
    };
    /**
     * Gets the displayName property value. Name of the contact. Required.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Name of the contact. Required.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the emailAddress property value. Primary email address of the contact. Required.
     * @returns a string
     */
    public get emailAddress() {
        return this._emailAddress;
    };
    /**
     * Sets the emailAddress property value. Primary email address of the contact. Required.
     * @param value Value to set for the emailAddress property.
     */
    public set emailAddress(value: string | undefined) {
        this._emailAddress = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "accessConsent": n => { this.accessConsent = n.getBooleanValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "emailAddress": n => { this.emailAddress = n.getStringValue(); },
            "mobilePhone": n => { this.mobilePhone = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "relationship": n => { this.relationship = n.getEnumValue<ContactRelationship>(ContactRelationship); },
        };
    };
    /**
     * Gets the mobilePhone property value. Mobile phone number of the contact.
     * @returns a string
     */
    public get mobilePhone() {
        return this._mobilePhone;
    };
    /**
     * Sets the mobilePhone property value. Mobile phone number of the contact.
     * @param value Value to set for the mobilePhone property.
     */
    public set mobilePhone(value: string | undefined) {
        this._mobilePhone = value;
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
     * Gets the relationship property value. The relationship property
     * @returns a contactRelationship
     */
    public get relationship() {
        return this._relationship;
    };
    /**
     * Sets the relationship property value. The relationship property
     * @param value Value to set for the relationship property.
     */
    public set relationship(value: ContactRelationship | undefined) {
        this._relationship = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("accessConsent", this.accessConsent);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("emailAddress", this.emailAddress);
        writer.writeStringValue("mobilePhone", this.mobilePhone);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeEnumValue<ContactRelationship>("relationship", this.relationship);
    };
}
