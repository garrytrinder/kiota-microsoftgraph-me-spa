import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessUsers implements Parsable {
    /** Group IDs excluded from scope of policy. */
    private _excludeGroups?: string[] | undefined;
    /** Role IDs excluded from scope of policy. */
    private _excludeRoles?: string[] | undefined;
    /** User IDs excluded from scope of policy and/or GuestsOrExternalUsers. */
    private _excludeUsers?: string[] | undefined;
    /** Group IDs in scope of policy unless explicitly excluded, or All. */
    private _includeGroups?: string[] | undefined;
    /** Role IDs in scope of policy unless explicitly excluded, or All. */
    private _includeRoles?: string[] | undefined;
    /** User IDs in scope of policy unless explicitly excluded, or None or All or GuestsOrExternalUsers. */
    private _includeUsers?: string[] | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Instantiates a new conditionalAccessUsers and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.conditionalAccessUsers";
    };
    /**
     * Gets the excludeGroups property value. Group IDs excluded from scope of policy.
     * @returns a string
     */
    public get excludeGroups() {
        return this._excludeGroups;
    };
    /**
     * Sets the excludeGroups property value. Group IDs excluded from scope of policy.
     * @param value Value to set for the excludeGroups property.
     */
    public set excludeGroups(value: string[] | undefined) {
        this._excludeGroups = value;
    };
    /**
     * Gets the excludeRoles property value. Role IDs excluded from scope of policy.
     * @returns a string
     */
    public get excludeRoles() {
        return this._excludeRoles;
    };
    /**
     * Sets the excludeRoles property value. Role IDs excluded from scope of policy.
     * @param value Value to set for the excludeRoles property.
     */
    public set excludeRoles(value: string[] | undefined) {
        this._excludeRoles = value;
    };
    /**
     * Gets the excludeUsers property value. User IDs excluded from scope of policy and/or GuestsOrExternalUsers.
     * @returns a string
     */
    public get excludeUsers() {
        return this._excludeUsers;
    };
    /**
     * Sets the excludeUsers property value. User IDs excluded from scope of policy and/or GuestsOrExternalUsers.
     * @param value Value to set for the excludeUsers property.
     */
    public set excludeUsers(value: string[] | undefined) {
        this._excludeUsers = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "excludeGroups": n => { this.excludeGroups = n.getCollectionOfPrimitiveValues<string>(); },
            "excludeRoles": n => { this.excludeRoles = n.getCollectionOfPrimitiveValues<string>(); },
            "excludeUsers": n => { this.excludeUsers = n.getCollectionOfPrimitiveValues<string>(); },
            "includeGroups": n => { this.includeGroups = n.getCollectionOfPrimitiveValues<string>(); },
            "includeRoles": n => { this.includeRoles = n.getCollectionOfPrimitiveValues<string>(); },
            "includeUsers": n => { this.includeUsers = n.getCollectionOfPrimitiveValues<string>(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the includeGroups property value. Group IDs in scope of policy unless explicitly excluded, or All.
     * @returns a string
     */
    public get includeGroups() {
        return this._includeGroups;
    };
    /**
     * Sets the includeGroups property value. Group IDs in scope of policy unless explicitly excluded, or All.
     * @param value Value to set for the includeGroups property.
     */
    public set includeGroups(value: string[] | undefined) {
        this._includeGroups = value;
    };
    /**
     * Gets the includeRoles property value. Role IDs in scope of policy unless explicitly excluded, or All.
     * @returns a string
     */
    public get includeRoles() {
        return this._includeRoles;
    };
    /**
     * Sets the includeRoles property value. Role IDs in scope of policy unless explicitly excluded, or All.
     * @param value Value to set for the includeRoles property.
     */
    public set includeRoles(value: string[] | undefined) {
        this._includeRoles = value;
    };
    /**
     * Gets the includeUsers property value. User IDs in scope of policy unless explicitly excluded, or None or All or GuestsOrExternalUsers.
     * @returns a string
     */
    public get includeUsers() {
        return this._includeUsers;
    };
    /**
     * Sets the includeUsers property value. User IDs in scope of policy unless explicitly excluded, or None or All or GuestsOrExternalUsers.
     * @param value Value to set for the includeUsers property.
     */
    public set includeUsers(value: string[] | undefined) {
        this._includeUsers = value;
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
        writer.writeCollectionOfPrimitiveValues<string>("excludeGroups", this.excludeGroups);
        writer.writeCollectionOfPrimitiveValues<string>("excludeRoles", this.excludeRoles);
        writer.writeCollectionOfPrimitiveValues<string>("excludeUsers", this.excludeUsers);
        writer.writeCollectionOfPrimitiveValues<string>("includeGroups", this.includeGroups);
        writer.writeCollectionOfPrimitiveValues<string>("includeRoles", this.includeRoles);
        writer.writeCollectionOfPrimitiveValues<string>("includeUsers", this.includeUsers);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
