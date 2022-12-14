import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Proxied Domain */
export class ProxiedDomain implements Parsable {
    /** The IP address or FQDN */
    private _ipAddressOrFQDN?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Proxy IP or FQDN */
    private _proxy?: string | undefined;
    /**
     * Instantiates a new proxiedDomain and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.proxiedDomain";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "ipAddressOrFQDN": n => { this.ipAddressOrFQDN = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "proxy": n => { this.proxy = n.getStringValue(); },
        };
    };
    /**
     * Gets the ipAddressOrFQDN property value. The IP address or FQDN
     * @returns a string
     */
    public get ipAddressOrFQDN() {
        return this._ipAddressOrFQDN;
    };
    /**
     * Sets the ipAddressOrFQDN property value. The IP address or FQDN
     * @param value Value to set for the ipAddressOrFQDN property.
     */
    public set ipAddressOrFQDN(value: string | undefined) {
        this._ipAddressOrFQDN = value;
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
     * Gets the proxy property value. Proxy IP or FQDN
     * @returns a string
     */
    public get proxy() {
        return this._proxy;
    };
    /**
     * Sets the proxy property value. Proxy IP or FQDN
     * @param value Value to set for the proxy property.
     */
    public set proxy(value: string | undefined) {
        this._proxy = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("ipAddressOrFQDN", this.ipAddressOrFQDN);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("proxy", this.proxy);
    };
}
