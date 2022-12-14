import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CertificationControl implements Parsable {
    /** Certification control name */
    private _name?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** URL for the Microsoft Service Trust Portal */
    private _url?: string | undefined;
    /**
     * Instantiates a new certificationControl and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.certificationControl";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "name": n => { this.name = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "url": n => { this.url = n.getStringValue(); },
        };
    };
    /**
     * Gets the name property value. Certification control name
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Certification control name
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
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
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("url", this.url);
    };
    /**
     * Gets the url property value. URL for the Microsoft Service Trust Portal
     * @returns a string
     */
    public get url() {
        return this._url;
    };
    /**
     * Sets the url property value. URL for the Microsoft Service Trust Portal
     * @param value Value to set for the url property.
     */
    public set url(value: string | undefined) {
        this._url = value;
    };
}
