import {createRootFromDiscriminatorValue} from './createRootFromDiscriminatorValue';
import {Root} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SiteCollection implements Parsable {
    /** The geographic region code for where this site collection resides. Read-only. */
    private _dataLocationCode?: string | undefined;
    /** The hostname for the site collection. Read-only. */
    private _hostname?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** If present, indicates that this is a root site collection in SharePoint. Read-only. */
    private _root?: Root | undefined;
    /**
     * Instantiates a new siteCollection and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.siteCollection";
    };
    /**
     * Gets the dataLocationCode property value. The geographic region code for where this site collection resides. Read-only.
     * @returns a string
     */
    public get dataLocationCode() {
        return this._dataLocationCode;
    };
    /**
     * Sets the dataLocationCode property value. The geographic region code for where this site collection resides. Read-only.
     * @param value Value to set for the dataLocationCode property.
     */
    public set dataLocationCode(value: string | undefined) {
        this._dataLocationCode = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "dataLocationCode": n => { this.dataLocationCode = n.getStringValue(); },
            "hostname": n => { this.hostname = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "root": n => { this.root = n.getObjectValue<Root>(createRootFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the hostname property value. The hostname for the site collection. Read-only.
     * @returns a string
     */
    public get hostname() {
        return this._hostname;
    };
    /**
     * Sets the hostname property value. The hostname for the site collection. Read-only.
     * @param value Value to set for the hostname property.
     */
    public set hostname(value: string | undefined) {
        this._hostname = value;
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
     * Gets the root property value. If present, indicates that this is a root site collection in SharePoint. Read-only.
     * @returns a root
     */
    public get root() {
        return this._root;
    };
    /**
     * Sets the root property value. If present, indicates that this is a root site collection in SharePoint. Read-only.
     * @param value Value to set for the root property.
     */
    public set root(value: Root | undefined) {
        this._root = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("dataLocationCode", this.dataLocationCode);
        writer.writeStringValue("hostname", this.hostname);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<Root>("root", this.root);
    };
}
