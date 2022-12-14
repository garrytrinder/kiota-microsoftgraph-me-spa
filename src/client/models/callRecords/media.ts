import {createDeviceInfoFromDiscriminatorValue} from './createDeviceInfoFromDiscriminatorValue';
import {createMediaStreamFromDiscriminatorValue} from './createMediaStreamFromDiscriminatorValue';
import {createNetworkInfoFromDiscriminatorValue} from './createNetworkInfoFromDiscriminatorValue';
import {DeviceInfo, MediaStream, NetworkInfo} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Media implements Parsable {
    /** Device information associated with the callee endpoint of this media. */
    private _calleeDevice?: DeviceInfo | undefined;
    /** Network information associated with the callee endpoint of this media. */
    private _calleeNetwork?: NetworkInfo | undefined;
    /** Device information associated with the caller endpoint of this media. */
    private _callerDevice?: DeviceInfo | undefined;
    /** Network information associated with the caller endpoint of this media. */
    private _callerNetwork?: NetworkInfo | undefined;
    /** How the media was identified during media negotiation stage. */
    private _label?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Network streams associated with this media. */
    private _streams?: MediaStream[] | undefined;
    /**
     * Gets the calleeDevice property value. Device information associated with the callee endpoint of this media.
     * @returns a deviceInfo
     */
    public get calleeDevice() {
        return this._calleeDevice;
    };
    /**
     * Sets the calleeDevice property value. Device information associated with the callee endpoint of this media.
     * @param value Value to set for the calleeDevice property.
     */
    public set calleeDevice(value: DeviceInfo | undefined) {
        this._calleeDevice = value;
    };
    /**
     * Gets the calleeNetwork property value. Network information associated with the callee endpoint of this media.
     * @returns a networkInfo
     */
    public get calleeNetwork() {
        return this._calleeNetwork;
    };
    /**
     * Sets the calleeNetwork property value. Network information associated with the callee endpoint of this media.
     * @param value Value to set for the calleeNetwork property.
     */
    public set calleeNetwork(value: NetworkInfo | undefined) {
        this._calleeNetwork = value;
    };
    /**
     * Gets the callerDevice property value. Device information associated with the caller endpoint of this media.
     * @returns a deviceInfo
     */
    public get callerDevice() {
        return this._callerDevice;
    };
    /**
     * Sets the callerDevice property value. Device information associated with the caller endpoint of this media.
     * @param value Value to set for the callerDevice property.
     */
    public set callerDevice(value: DeviceInfo | undefined) {
        this._callerDevice = value;
    };
    /**
     * Gets the callerNetwork property value. Network information associated with the caller endpoint of this media.
     * @returns a networkInfo
     */
    public get callerNetwork() {
        return this._callerNetwork;
    };
    /**
     * Sets the callerNetwork property value. Network information associated with the caller endpoint of this media.
     * @param value Value to set for the callerNetwork property.
     */
    public set callerNetwork(value: NetworkInfo | undefined) {
        this._callerNetwork = value;
    };
    /**
     * Instantiates a new media and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.callRecords.media";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "calleeDevice": n => { this.calleeDevice = n.getObjectValue<DeviceInfo>(createDeviceInfoFromDiscriminatorValue); },
            "calleeNetwork": n => { this.calleeNetwork = n.getObjectValue<NetworkInfo>(createNetworkInfoFromDiscriminatorValue); },
            "callerDevice": n => { this.callerDevice = n.getObjectValue<DeviceInfo>(createDeviceInfoFromDiscriminatorValue); },
            "callerNetwork": n => { this.callerNetwork = n.getObjectValue<NetworkInfo>(createNetworkInfoFromDiscriminatorValue); },
            "label": n => { this.label = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "streams": n => { this.streams = n.getCollectionOfObjectValues<MediaStream>(createMediaStreamFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the label property value. How the media was identified during media negotiation stage.
     * @returns a string
     */
    public get label() {
        return this._label;
    };
    /**
     * Sets the label property value. How the media was identified during media negotiation stage.
     * @param value Value to set for the label property.
     */
    public set label(value: string | undefined) {
        this._label = value;
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
        writer.writeObjectValue<DeviceInfo>("calleeDevice", this.calleeDevice);
        writer.writeObjectValue<NetworkInfo>("calleeNetwork", this.calleeNetwork);
        writer.writeObjectValue<DeviceInfo>("callerDevice", this.callerDevice);
        writer.writeObjectValue<NetworkInfo>("callerNetwork", this.callerNetwork);
        writer.writeStringValue("label", this.label);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeCollectionOfObjectValues<MediaStream>("streams", this.streams);
    };
    /**
     * Gets the streams property value. Network streams associated with this media.
     * @returns a mediaStream
     */
    public get streams() {
        return this._streams;
    };
    /**
     * Sets the streams property value. Network streams associated with this media.
     * @param value Value to set for the streams property.
     */
    public set streams(value: MediaStream[] | undefined) {
        this._streams = value;
    };
}
