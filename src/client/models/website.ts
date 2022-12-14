import {WebsiteType} from './websiteType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Website implements Parsable {
    /** The URL of the website. */
    private _address?: string | undefined;
    /** The display name of the web site. */
    private _displayName?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The possible values are: other, home, work, blog, profile. */
    private _type?: WebsiteType | undefined;
    /**
     * Gets the address property value. The URL of the website.
     * @returns a string
     */
    public get address() {
        return this._address;
    };
    /**
     * Sets the address property value. The URL of the website.
     * @param value Value to set for the address property.
     */
    public set address(value: string | undefined) {
        this._address = value;
    };
    /**
     * Instantiates a new website and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.website";
    };
    /**
     * Gets the displayName property value. The display name of the web site.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name of the web site.
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
            "address": n => { this.address = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "type": n => { this.type = n.getEnumValue<WebsiteType>(WebsiteType); },
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
        writer.writeStringValue("address", this.address);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeEnumValue<WebsiteType>("type", this.type);
    };
    /**
     * Gets the type property value. The possible values are: other, home, work, blog, profile.
     * @returns a websiteType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The possible values are: other, home, work, blog, profile.
     * @param value Value to set for the type property.
     */
    public set type(value: WebsiteType | undefined) {
        this._type = value;
    };
}
