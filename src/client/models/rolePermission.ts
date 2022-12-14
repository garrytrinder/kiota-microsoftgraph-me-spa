import {createResourceActionFromDiscriminatorValue} from './createResourceActionFromDiscriminatorValue';
import {ResourceAction} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains the set of ResourceActions determining the allowed and not allowed permissions for each role. */
export class RolePermission implements Parsable {
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Resource Actions each containing a set of allowed and not allowed permissions. */
    private _resourceActions?: ResourceAction[] | undefined;
    /**
     * Instantiates a new rolePermission and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.rolePermission";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "resourceActions": n => { this.resourceActions = n.getCollectionOfObjectValues<ResourceAction>(createResourceActionFromDiscriminatorValue); },
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
     * Gets the resourceActions property value. Resource Actions each containing a set of allowed and not allowed permissions.
     * @returns a resourceAction
     */
    public get resourceActions() {
        return this._resourceActions;
    };
    /**
     * Sets the resourceActions property value. Resource Actions each containing a set of allowed and not allowed permissions.
     * @param value Value to set for the resourceActions property.
     */
    public set resourceActions(value: ResourceAction[] | undefined) {
        this._resourceActions = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeCollectionOfObjectValues<ResourceAction>("resourceActions", this.resourceActions);
    };
}
