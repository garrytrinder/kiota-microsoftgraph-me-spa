import {createAccessPackageApprovalStageFromDiscriminatorValue} from './createAccessPackageApprovalStageFromDiscriminatorValue';
import {AccessPackageApprovalStage} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageAssignmentApprovalSettings implements Parsable {
    /** If false, then approval is not required for new requests in this policy. */
    private _isApprovalRequiredForAdd?: boolean | undefined;
    /** If false, then approval is not required for updates to requests in this policy. */
    private _isApprovalRequiredForUpdate?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** If approval is required, the one, two or three elements of this collection define each of the stages of approval. An empty array is present if no approval is required. */
    private _stages?: AccessPackageApprovalStage[] | undefined;
    /**
     * Instantiates a new accessPackageAssignmentApprovalSettings and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.accessPackageAssignmentApprovalSettings";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "isApprovalRequiredForAdd": n => { this.isApprovalRequiredForAdd = n.getBooleanValue(); },
            "isApprovalRequiredForUpdate": n => { this.isApprovalRequiredForUpdate = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "stages": n => { this.stages = n.getCollectionOfObjectValues<AccessPackageApprovalStage>(createAccessPackageApprovalStageFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the isApprovalRequiredForAdd property value. If false, then approval is not required for new requests in this policy.
     * @returns a boolean
     */
    public get isApprovalRequiredForAdd() {
        return this._isApprovalRequiredForAdd;
    };
    /**
     * Sets the isApprovalRequiredForAdd property value. If false, then approval is not required for new requests in this policy.
     * @param value Value to set for the isApprovalRequiredForAdd property.
     */
    public set isApprovalRequiredForAdd(value: boolean | undefined) {
        this._isApprovalRequiredForAdd = value;
    };
    /**
     * Gets the isApprovalRequiredForUpdate property value. If false, then approval is not required for updates to requests in this policy.
     * @returns a boolean
     */
    public get isApprovalRequiredForUpdate() {
        return this._isApprovalRequiredForUpdate;
    };
    /**
     * Sets the isApprovalRequiredForUpdate property value. If false, then approval is not required for updates to requests in this policy.
     * @param value Value to set for the isApprovalRequiredForUpdate property.
     */
    public set isApprovalRequiredForUpdate(value: boolean | undefined) {
        this._isApprovalRequiredForUpdate = value;
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
        writer.writeBooleanValue("isApprovalRequiredForAdd", this.isApprovalRequiredForAdd);
        writer.writeBooleanValue("isApprovalRequiredForUpdate", this.isApprovalRequiredForUpdate);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeCollectionOfObjectValues<AccessPackageApprovalStage>("stages", this.stages);
    };
    /**
     * Gets the stages property value. If approval is required, the one, two or three elements of this collection define each of the stages of approval. An empty array is present if no approval is required.
     * @returns a accessPackageApprovalStage
     */
    public get stages() {
        return this._stages;
    };
    /**
     * Sets the stages property value. If approval is required, the one, two or three elements of this collection define each of the stages of approval. An empty array is present if no approval is required.
     * @param value Value to set for the stages property.
     */
    public set stages(value: AccessPackageApprovalStage[] | undefined) {
        this._stages = value;
    };
}
