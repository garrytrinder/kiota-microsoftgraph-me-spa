import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserSimulationEventInfo implements Parsable {
    /** Browser information from where the simulation event was initiated by a user in an attack simulation and training campaign. */
    private _browser?: string | undefined;
    /** Date and time of the simulation event by a user in an attack simulation and training campaign. */
    private _eventDateTime?: Date | undefined;
    /** Name of the simulation event by a user in an attack simulation and training campaign. */
    private _eventName?: string | undefined;
    /** IP address from where the simulation event was initiated by a user in an attack simulation and training campaign. */
    private _ipAddress?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The operating system, platform, and device details from where the simulation event was initiated by a user in an attack simulation and training campaign. */
    private _osPlatformDeviceDetails?: string | undefined;
    /**
     * Gets the browser property value. Browser information from where the simulation event was initiated by a user in an attack simulation and training campaign.
     * @returns a string
     */
    public get browser() {
        return this._browser;
    };
    /**
     * Sets the browser property value. Browser information from where the simulation event was initiated by a user in an attack simulation and training campaign.
     * @param value Value to set for the browser property.
     */
    public set browser(value: string | undefined) {
        this._browser = value;
    };
    /**
     * Instantiates a new userSimulationEventInfo and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.userSimulationEventInfo";
    };
    /**
     * Gets the eventDateTime property value. Date and time of the simulation event by a user in an attack simulation and training campaign.
     * @returns a Date
     */
    public get eventDateTime() {
        return this._eventDateTime;
    };
    /**
     * Sets the eventDateTime property value. Date and time of the simulation event by a user in an attack simulation and training campaign.
     * @param value Value to set for the eventDateTime property.
     */
    public set eventDateTime(value: Date | undefined) {
        this._eventDateTime = value;
    };
    /**
     * Gets the eventName property value. Name of the simulation event by a user in an attack simulation and training campaign.
     * @returns a string
     */
    public get eventName() {
        return this._eventName;
    };
    /**
     * Sets the eventName property value. Name of the simulation event by a user in an attack simulation and training campaign.
     * @param value Value to set for the eventName property.
     */
    public set eventName(value: string | undefined) {
        this._eventName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "browser": n => { this.browser = n.getStringValue(); },
            "eventDateTime": n => { this.eventDateTime = n.getDateValue(); },
            "eventName": n => { this.eventName = n.getStringValue(); },
            "ipAddress": n => { this.ipAddress = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "osPlatformDeviceDetails": n => { this.osPlatformDeviceDetails = n.getStringValue(); },
        };
    };
    /**
     * Gets the ipAddress property value. IP address from where the simulation event was initiated by a user in an attack simulation and training campaign.
     * @returns a string
     */
    public get ipAddress() {
        return this._ipAddress;
    };
    /**
     * Sets the ipAddress property value. IP address from where the simulation event was initiated by a user in an attack simulation and training campaign.
     * @param value Value to set for the ipAddress property.
     */
    public set ipAddress(value: string | undefined) {
        this._ipAddress = value;
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
     * Gets the osPlatformDeviceDetails property value. The operating system, platform, and device details from where the simulation event was initiated by a user in an attack simulation and training campaign.
     * @returns a string
     */
    public get osPlatformDeviceDetails() {
        return this._osPlatformDeviceDetails;
    };
    /**
     * Sets the osPlatformDeviceDetails property value. The operating system, platform, and device details from where the simulation event was initiated by a user in an attack simulation and training campaign.
     * @param value Value to set for the osPlatformDeviceDetails property.
     */
    public set osPlatformDeviceDetails(value: string | undefined) {
        this._osPlatformDeviceDetails = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("browser", this.browser);
        writer.writeDateValue("eventDateTime", this.eventDateTime);
        writer.writeStringValue("eventName", this.eventName);
        writer.writeStringValue("ipAddress", this.ipAddress);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("osPlatformDeviceDetails", this.osPlatformDeviceDetails);
    };
}
