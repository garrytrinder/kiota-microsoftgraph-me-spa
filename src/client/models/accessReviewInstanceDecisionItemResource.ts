import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewInstanceDecisionItemResource implements Parsable {
    /** Display name of the resource */
    private _displayName?: string | undefined;
    /** Identifier of the resource */
    private _id?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Type of resource. Types include: Group, ServicePrincipal, DirectoryRole, AzureRole, AccessPackageAssignmentPolicy. */
    private _type?: string | undefined;
    /**
     * Instantiates a new accessReviewInstanceDecisionItemResource and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.accessReviewInstanceDecisionItemResource";
    };
    /**
     * Gets the displayName property value. Display name of the resource
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display name of the resource
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
            "displayName": n => { this.displayName = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
        };
    };
    /**
     * Gets the id property value. Identifier of the resource
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. Identifier of the resource
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
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
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("type", this.type);
    };
    /**
     * Gets the type property value. Type of resource. Types include: Group, ServicePrincipal, DirectoryRole, AzureRole, AccessPackageAssignmentPolicy.
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. Type of resource. Types include: Group, ServicePrincipal, DirectoryRole, AzureRole, AccessPackageAssignmentPolicy.
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
}
