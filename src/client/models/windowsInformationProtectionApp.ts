import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** App for Windows information protection */
export class WindowsInformationProtectionApp implements Parsable {
    /** If true, app is denied protection or exemption. */
    private _denied?: boolean | undefined;
    /** The app's description. */
    private _description?: string | undefined;
    /** App display name. */
    private _displayName?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The product name. */
    private _productName?: string | undefined;
    /** The publisher name */
    private _publisherName?: string | undefined;
    /**
     * Instantiates a new windowsInformationProtectionApp and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.windowsInformationProtectionApp";
    };
    /**
     * Gets the denied property value. If true, app is denied protection or exemption.
     * @returns a boolean
     */
    public get denied() {
        return this._denied;
    };
    /**
     * Sets the denied property value. If true, app is denied protection or exemption.
     * @param value Value to set for the denied property.
     */
    public set denied(value: boolean | undefined) {
        this._denied = value;
    };
    /**
     * Gets the description property value. The app's description.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The app's description.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. App display name.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. App display name.
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
            "denied": n => { this.denied = n.getBooleanValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "productName": n => { this.productName = n.getStringValue(); },
            "publisherName": n => { this.publisherName = n.getStringValue(); },
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
     * Gets the productName property value. The product name.
     * @returns a string
     */
    public get productName() {
        return this._productName;
    };
    /**
     * Sets the productName property value. The product name.
     * @param value Value to set for the productName property.
     */
    public set productName(value: string | undefined) {
        this._productName = value;
    };
    /**
     * Gets the publisherName property value. The publisher name
     * @returns a string
     */
    public get publisherName() {
        return this._publisherName;
    };
    /**
     * Sets the publisherName property value. The publisher name
     * @param value Value to set for the publisherName property.
     */
    public set publisherName(value: string | undefined) {
        this._publisherName = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("denied", this.denied);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("productName", this.productName);
        writer.writeStringValue("publisherName", this.publisherName);
    };
}
