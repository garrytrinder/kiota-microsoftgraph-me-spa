import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AppRole implements Parsable {
    /** Specifies whether this app role can be assigned to users and groups (by setting to ['User']), to other application's (by setting to ['Application'], or both (by setting to ['User', 'Application']). App roles supporting assignment to other applications' service principals are also known as application permissions. The 'Application' value is only supported for app roles defined on application entities. */
    private _allowedMemberTypes?: string[] | undefined;
    /** The description for the app role. This is displayed when the app role is being assigned and, if the app role functions as an application permission, during  consent experiences. */
    private _description?: string | undefined;
    /** Display name for the permission that appears in the app role assignment and consent experiences. */
    private _displayName?: string | undefined;
    /** Unique role identifier inside the appRoles collection. When creating a new app role, a new GUID identifier must be provided. */
    private _id?: string | undefined;
    /** When creating or updating an app role, this must be set to true (which is the default). To delete a role, this must first be set to false.  At that point, in a subsequent call, this role may be removed. */
    private _isEnabled?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Specifies if the app role is defined on the application object or on the servicePrincipal entity. Must not be included in any POST or PATCH requests. Read-only. */
    private _origin?: string | undefined;
    /** Specifies the value to include in the roles claim in ID tokens and access tokens authenticating an assigned user or service principal. Must not exceed 120 characters in length. Allowed characters are : ! # $ % & ' ( ) * + , - . / : ;  =  ? @ [ ] ^ + _  {  } ~, as well as characters in the ranges 0-9, A-Z and a-z. Any other character, including the space character, are not allowed. May not begin with .. */
    private _value?: string | undefined;
    /**
     * Gets the allowedMemberTypes property value. Specifies whether this app role can be assigned to users and groups (by setting to ['User']), to other application's (by setting to ['Application'], or both (by setting to ['User', 'Application']). App roles supporting assignment to other applications' service principals are also known as application permissions. The 'Application' value is only supported for app roles defined on application entities.
     * @returns a string
     */
    public get allowedMemberTypes() {
        return this._allowedMemberTypes;
    };
    /**
     * Sets the allowedMemberTypes property value. Specifies whether this app role can be assigned to users and groups (by setting to ['User']), to other application's (by setting to ['Application'], or both (by setting to ['User', 'Application']). App roles supporting assignment to other applications' service principals are also known as application permissions. The 'Application' value is only supported for app roles defined on application entities.
     * @param value Value to set for the allowedMemberTypes property.
     */
    public set allowedMemberTypes(value: string[] | undefined) {
        this._allowedMemberTypes = value;
    };
    /**
     * Instantiates a new appRole and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.appRole";
    };
    /**
     * Gets the description property value. The description for the app role. This is displayed when the app role is being assigned and, if the app role functions as an application permission, during  consent experiences.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description for the app role. This is displayed when the app role is being assigned and, if the app role functions as an application permission, during  consent experiences.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. Display name for the permission that appears in the app role assignment and consent experiences.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display name for the permission that appears in the app role assignment and consent experiences.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowedMemberTypes": n => { this.allowedMemberTypes = n.getCollectionOfPrimitiveValues<string>(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "isEnabled": n => { this.isEnabled = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "origin": n => { this.origin = n.getStringValue(); },
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Gets the id property value. Unique role identifier inside the appRoles collection. When creating a new app role, a new GUID identifier must be provided.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. Unique role identifier inside the appRoles collection. When creating a new app role, a new GUID identifier must be provided.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Gets the isEnabled property value. When creating or updating an app role, this must be set to true (which is the default). To delete a role, this must first be set to false.  At that point, in a subsequent call, this role may be removed.
     * @returns a boolean
     */
    public get isEnabled() {
        return this._isEnabled;
    };
    /**
     * Sets the isEnabled property value. When creating or updating an app role, this must be set to true (which is the default). To delete a role, this must first be set to false.  At that point, in a subsequent call, this role may be removed.
     * @param value Value to set for the isEnabled property.
     */
    public set isEnabled(value: boolean | undefined) {
        this._isEnabled = value;
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
     * Gets the origin property value. Specifies if the app role is defined on the application object or on the servicePrincipal entity. Must not be included in any POST or PATCH requests. Read-only.
     * @returns a string
     */
    public get origin() {
        return this._origin;
    };
    /**
     * Sets the origin property value. Specifies if the app role is defined on the application object or on the servicePrincipal entity. Must not be included in any POST or PATCH requests. Read-only.
     * @param value Value to set for the origin property.
     */
    public set origin(value: string | undefined) {
        this._origin = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("allowedMemberTypes", this.allowedMemberTypes);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("id", this.id);
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("origin", this.origin);
        writer.writeStringValue("value", this.value);
    };
    /**
     * Gets the value property value. Specifies the value to include in the roles claim in ID tokens and access tokens authenticating an assigned user or service principal. Must not exceed 120 characters in length. Allowed characters are : ! # $ % & ' ( ) * + , - . / : ;  =  ? @ [ ] ^ + _  {  } ~, as well as characters in the ranges 0-9, A-Z and a-z. Any other character, including the space character, are not allowed. May not begin with ..
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. Specifies the value to include in the roles claim in ID tokens and access tokens authenticating an assigned user or service principal. Must not exceed 120 characters in length. Allowed characters are : ! # $ % & ' ( ) * + , - . / : ;  =  ? @ [ ] ^ + _  {  } ~, as well as characters in the ranges 0-9, A-Z and a-z. Any other character, including the space character, are not allowed. May not begin with ..
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
    };
}
