import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains properties for iOS Volume-Purchased Program (Vpp) Licensing Type. */
export class VppLicensingType implements Parsable {
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Whether the program supports the device licensing type. */
    private _supportsDeviceLicensing?: boolean | undefined;
    /** Whether the program supports the user licensing type. */
    private _supportsUserLicensing?: boolean | undefined;
    /**
     * Instantiates a new vppLicensingType and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.vppLicensingType";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "supportsDeviceLicensing": n => { this.supportsDeviceLicensing = n.getBooleanValue(); },
            "supportsUserLicensing": n => { this.supportsUserLicensing = n.getBooleanValue(); },
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
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeBooleanValue("supportsDeviceLicensing", this.supportsDeviceLicensing);
        writer.writeBooleanValue("supportsUserLicensing", this.supportsUserLicensing);
    };
    /**
     * Gets the supportsDeviceLicensing property value. Whether the program supports the device licensing type.
     * @returns a boolean
     */
    public get supportsDeviceLicensing() {
        return this._supportsDeviceLicensing;
    };
    /**
     * Sets the supportsDeviceLicensing property value. Whether the program supports the device licensing type.
     * @param value Value to set for the supportsDeviceLicensing property.
     */
    public set supportsDeviceLicensing(value: boolean | undefined) {
        this._supportsDeviceLicensing = value;
    };
    /**
     * Gets the supportsUserLicensing property value. Whether the program supports the user licensing type.
     * @returns a boolean
     */
    public get supportsUserLicensing() {
        return this._supportsUserLicensing;
    };
    /**
     * Sets the supportsUserLicensing property value. Whether the program supports the user licensing type.
     * @param value Value to set for the supportsUserLicensing property.
     */
    public set supportsUserLicensing(value: boolean | undefined) {
        this._supportsUserLicensing = value;
    };
}
