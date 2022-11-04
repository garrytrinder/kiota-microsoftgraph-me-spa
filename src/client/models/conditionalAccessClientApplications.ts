import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessClientApplications implements Parsable {
    /** Service principal IDs excluded from the policy scope. */
    private _excludeServicePrincipals?: string[] | undefined;
    /** Service principal IDs included in the policy scope, or ServicePrincipalsInMyTenant. */
    private _includeServicePrincipals?: string[] | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Instantiates a new conditionalAccessClientApplications and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.conditionalAccessClientApplications";
    };
    /**
     * Gets the excludeServicePrincipals property value. Service principal IDs excluded from the policy scope.
     * @returns a string
     */
    public get excludeServicePrincipals() {
        return this._excludeServicePrincipals;
    };
    /**
     * Sets the excludeServicePrincipals property value. Service principal IDs excluded from the policy scope.
     * @param value Value to set for the excludeServicePrincipals property.
     */
    public set excludeServicePrincipals(value: string[] | undefined) {
        this._excludeServicePrincipals = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "excludeServicePrincipals": n => { this.excludeServicePrincipals = n.getCollectionOfPrimitiveValues<string>(); },
            "includeServicePrincipals": n => { this.includeServicePrincipals = n.getCollectionOfPrimitiveValues<string>(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the includeServicePrincipals property value. Service principal IDs included in the policy scope, or ServicePrincipalsInMyTenant.
     * @returns a string
     */
    public get includeServicePrincipals() {
        return this._includeServicePrincipals;
    };
    /**
     * Sets the includeServicePrincipals property value. Service principal IDs included in the policy scope, or ServicePrincipalsInMyTenant.
     * @param value Value to set for the includeServicePrincipals property.
     */
    public set includeServicePrincipals(value: string[] | undefined) {
        this._includeServicePrincipals = value;
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
        writer.writeCollectionOfPrimitiveValues<string>("excludeServicePrincipals", this.excludeServicePrincipals);
        writer.writeCollectionOfPrimitiveValues<string>("includeServicePrincipals", this.includeServicePrincipals);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
