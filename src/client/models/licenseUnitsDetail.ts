import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LicenseUnitsDetail implements Parsable {
    /** The number of units that are enabled for the active subscription of the service SKU. */
    private _enabled?: number | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The number of units that are suspended because the subscription of the service SKU has been cancelled. The units cannot be assigned but can still be reactivated before they are deleted. */
    private _suspended?: number | undefined;
    /** The number of units that are in warning status. When the subscription of the service SKU has expired, the customer has a grace period to renew their subscription before it is cancelled (moved to a suspended state). */
    private _warning?: number | undefined;
    /**
     * Instantiates a new licenseUnitsDetail and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.licenseUnitsDetail";
    };
    /**
     * Gets the enabled property value. The number of units that are enabled for the active subscription of the service SKU.
     * @returns a integer
     */
    public get enabled() {
        return this._enabled;
    };
    /**
     * Sets the enabled property value. The number of units that are enabled for the active subscription of the service SKU.
     * @param value Value to set for the enabled property.
     */
    public set enabled(value: number | undefined) {
        this._enabled = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "enabled": n => { this.enabled = n.getNumberValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "suspended": n => { this.suspended = n.getNumberValue(); },
            "warning": n => { this.warning = n.getNumberValue(); },
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("enabled", this.enabled);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeNumberValue("suspended", this.suspended);
        writer.writeNumberValue("warning", this.warning);
    };
    /**
     * Gets the suspended property value. The number of units that are suspended because the subscription of the service SKU has been cancelled. The units cannot be assigned but can still be reactivated before they are deleted.
     * @returns a integer
     */
    public get suspended() {
        return this._suspended;
    };
    /**
     * Sets the suspended property value. The number of units that are suspended because the subscription of the service SKU has been cancelled. The units cannot be assigned but can still be reactivated before they are deleted.
     * @param value Value to set for the suspended property.
     */
    public set suspended(value: number | undefined) {
        this._suspended = value;
    };
    /**
     * Gets the warning property value. The number of units that are in warning status. When the subscription of the service SKU has expired, the customer has a grace period to renew their subscription before it is cancelled (moved to a suspended state).
     * @returns a integer
     */
    public get warning() {
        return this._warning;
    };
    /**
     * Sets the warning property value. The number of units that are in warning status. When the subscription of the service SKU has expired, the customer has a grace period to renew their subscription before it is cancelled (moved to a suspended state).
     * @param value Value to set for the warning property.
     */
    public set warning(value: number | undefined) {
        this._warning = value;
    };
}
