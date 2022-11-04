import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Package implements Parsable {
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** A string indicating the type of package. While oneNote is the only currently defined value, you should expect other package types to be returned and handle them accordingly. */
    private _type?: string | undefined;
    /**
     * Instantiates a new package and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.package";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
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
        writer.writeStringValue("type", this.type);
    };
    /**
     * Gets the type property value. A string indicating the type of package. While oneNote is the only currently defined value, you should expect other package types to be returned and handle them accordingly.
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. A string indicating the type of package. While oneNote is the only currently defined value, you should expect other package types to be returned and handle them accordingly.
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
}
