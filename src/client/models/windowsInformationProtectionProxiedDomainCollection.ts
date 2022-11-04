import {createProxiedDomainFromDiscriminatorValue} from './createProxiedDomainFromDiscriminatorValue';
import {ProxiedDomain} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Windows Information Protection Proxied Domain Collection */
export class WindowsInformationProtectionProxiedDomainCollection implements Parsable {
    /** Display name */
    private _displayName?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Collection of proxied domains */
    private _proxiedDomains?: ProxiedDomain[] | undefined;
    /**
     * Instantiates a new windowsInformationProtectionProxiedDomainCollection and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.windowsInformationProtectionProxiedDomainCollection";
    };
    /**
     * Gets the displayName property value. Display name
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display name
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
            "displayName": n => { this.displayName = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "proxiedDomains": n => { this.proxiedDomains = n.getCollectionOfObjectValues<ProxiedDomain>(createProxiedDomainFromDiscriminatorValue); },
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
     * Gets the proxiedDomains property value. Collection of proxied domains
     * @returns a proxiedDomain
     */
    public get proxiedDomains() {
        return this._proxiedDomains;
    };
    /**
     * Sets the proxiedDomains property value. Collection of proxied domains
     * @param value Value to set for the proxiedDomains property.
     */
    public set proxiedDomains(value: ProxiedDomain[] | undefined) {
        this._proxiedDomains = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeCollectionOfObjectValues<ProxiedDomain>("proxiedDomains", this.proxiedDomains);
    };
}
