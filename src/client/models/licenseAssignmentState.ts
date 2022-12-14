import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LicenseAssignmentState implements Parsable {
    /** The assignedByGroup property */
    private _assignedByGroup?: string | undefined;
    /** The disabledPlans property */
    private _disabledPlans?: string[] | undefined;
    /** The error property */
    private _error_escaped?: string | undefined;
    /** The lastUpdatedDateTime property */
    private _lastUpdatedDateTime?: Date | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The skuId property */
    private _skuId?: string | undefined;
    /** The state property */
    private _state?: string | undefined;
    /**
     * Gets the assignedByGroup property value. The assignedByGroup property
     * @returns a string
     */
    public get assignedByGroup() {
        return this._assignedByGroup;
    };
    /**
     * Sets the assignedByGroup property value. The assignedByGroup property
     * @param value Value to set for the assignedByGroup property.
     */
    public set assignedByGroup(value: string | undefined) {
        this._assignedByGroup = value;
    };
    /**
     * Instantiates a new licenseAssignmentState and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.licenseAssignmentState";
    };
    /**
     * Gets the disabledPlans property value. The disabledPlans property
     * @returns a string
     */
    public get disabledPlans() {
        return this._disabledPlans;
    };
    /**
     * Sets the disabledPlans property value. The disabledPlans property
     * @param value Value to set for the disabledPlans property.
     */
    public set disabledPlans(value: string[] | undefined) {
        this._disabledPlans = value;
    };
    /**
     * Gets the error property value. The error property
     * @returns a string
     */
    public get error_escaped() {
        return this._error_escaped;
    };
    /**
     * Sets the error property value. The error property
     * @param value Value to set for the error_escaped property.
     */
    public set error_escaped(value: string | undefined) {
        this._error_escaped = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "assignedByGroup": n => { this.assignedByGroup = n.getStringValue(); },
            "disabledPlans": n => { this.disabledPlans = n.getCollectionOfPrimitiveValues<string>(); },
            "error": n => { this.error_escaped = n.getStringValue(); },
            "lastUpdatedDateTime": n => { this.lastUpdatedDateTime = n.getDateValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "skuId": n => { this.skuId = n.getStringValue(); },
            "state": n => { this.state = n.getStringValue(); },
        };
    };
    /**
     * Gets the lastUpdatedDateTime property value. The lastUpdatedDateTime property
     * @returns a Date
     */
    public get lastUpdatedDateTime() {
        return this._lastUpdatedDateTime;
    };
    /**
     * Sets the lastUpdatedDateTime property value. The lastUpdatedDateTime property
     * @param value Value to set for the lastUpdatedDateTime property.
     */
    public set lastUpdatedDateTime(value: Date | undefined) {
        this._lastUpdatedDateTime = value;
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
        writer.writeStringValue("assignedByGroup", this.assignedByGroup);
        writer.writeCollectionOfPrimitiveValues<string>("disabledPlans", this.disabledPlans);
        writer.writeStringValue("error", this.error_escaped);
        writer.writeDateValue("lastUpdatedDateTime", this.lastUpdatedDateTime);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("skuId", this.skuId);
        writer.writeStringValue("state", this.state);
    };
    /**
     * Gets the skuId property value. The skuId property
     * @returns a string
     */
    public get skuId() {
        return this._skuId;
    };
    /**
     * Sets the skuId property value. The skuId property
     * @param value Value to set for the skuId property.
     */
    public set skuId(value: string | undefined) {
        this._skuId = value;
    };
    /**
     * Gets the state property value. The state property
     * @returns a string
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The state property
     * @param value Value to set for the state property.
     */
    public set state(value: string | undefined) {
        this._state = value;
    };
}
