import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** The minimum operating system required for a Windows mobile app. */
export class WindowsMinimumOperatingSystem implements Parsable {
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Windows version 10.0 or later. */
    private _v10_0?: boolean | undefined;
    /** Windows version 8.0 or later. */
    private _v8_0?: boolean | undefined;
    /** Windows version 8.1 or later. */
    private _v8_1?: boolean | undefined;
    /**
     * Instantiates a new windowsMinimumOperatingSystem and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.windowsMinimumOperatingSystem";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "v10_0": n => { this.v10_0 = n.getBooleanValue(); },
            "v8_0": n => { this.v8_0 = n.getBooleanValue(); },
            "v8_1": n => { this.v8_1 = n.getBooleanValue(); },
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
        writer.writeBooleanValue("v10_0", this.v10_0);
        writer.writeBooleanValue("v8_0", this.v8_0);
        writer.writeBooleanValue("v8_1", this.v8_1);
    };
    /**
     * Gets the v10_0 property value. Windows version 10.0 or later.
     * @returns a boolean
     */
    public get v10_0() {
        return this._v10_0;
    };
    /**
     * Sets the v10_0 property value. Windows version 10.0 or later.
     * @param value Value to set for the v10_0 property.
     */
    public set v10_0(value: boolean | undefined) {
        this._v10_0 = value;
    };
    /**
     * Gets the v8_0 property value. Windows version 8.0 or later.
     * @returns a boolean
     */
    public get v8_0() {
        return this._v8_0;
    };
    /**
     * Sets the v8_0 property value. Windows version 8.0 or later.
     * @param value Value to set for the v8_0 property.
     */
    public set v8_0(value: boolean | undefined) {
        this._v8_0 = value;
    };
    /**
     * Gets the v8_1 property value. Windows version 8.1 or later.
     * @returns a boolean
     */
    public get v8_1() {
        return this._v8_1;
    };
    /**
     * Sets the v8_1 property value. Windows version 8.1 or later.
     * @param value Value to set for the v8_1 property.
     */
    public set v8_1(value: boolean | undefined) {
        this._v8_1 = value;
    };
}
