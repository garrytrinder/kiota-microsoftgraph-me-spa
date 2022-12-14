import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class GeoCoordinates implements Parsable {
    /** Optional. The altitude (height), in feet,  above sea level for the item. Read-only. */
    private _altitude?: number | undefined;
    /** Optional. The latitude, in decimal, for the item. Read-only. */
    private _latitude?: number | undefined;
    /** Optional. The longitude, in decimal, for the item. Read-only. */
    private _longitude?: number | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Gets the altitude property value. Optional. The altitude (height), in feet,  above sea level for the item. Read-only.
     * @returns a double
     */
    public get altitude() {
        return this._altitude;
    };
    /**
     * Sets the altitude property value. Optional. The altitude (height), in feet,  above sea level for the item. Read-only.
     * @param value Value to set for the altitude property.
     */
    public set altitude(value: number | undefined) {
        this._altitude = value;
    };
    /**
     * Instantiates a new geoCoordinates and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.geoCoordinates";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "altitude": n => { this.altitude = n.getNumberValue(); },
            "latitude": n => { this.latitude = n.getNumberValue(); },
            "longitude": n => { this.longitude = n.getNumberValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the latitude property value. Optional. The latitude, in decimal, for the item. Read-only.
     * @returns a double
     */
    public get latitude() {
        return this._latitude;
    };
    /**
     * Sets the latitude property value. Optional. The latitude, in decimal, for the item. Read-only.
     * @param value Value to set for the latitude property.
     */
    public set latitude(value: number | undefined) {
        this._latitude = value;
    };
    /**
     * Gets the longitude property value. Optional. The longitude, in decimal, for the item. Read-only.
     * @returns a double
     */
    public get longitude() {
        return this._longitude;
    };
    /**
     * Sets the longitude property value. Optional. The longitude, in decimal, for the item. Read-only.
     * @param value Value to set for the longitude property.
     */
    public set longitude(value: number | undefined) {
        this._longitude = value;
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
        writer.writeNumberValue("altitude", this.altitude);
        writer.writeNumberValue("latitude", this.latitude);
        writer.writeNumberValue("longitude", this.longitude);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
