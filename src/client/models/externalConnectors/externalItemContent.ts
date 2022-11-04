import {ExternalItemContentType} from './externalItemContentType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ExternalItemContent implements Parsable {
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The type property */
    private _type?: ExternalItemContentType | undefined;
    /** The content for the externalItem. Required. */
    private _value?: string | undefined;
    /**
     * Instantiates a new externalItemContent and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.externalConnectors.externalItemContent";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "type": n => { this.type = n.getEnumValue<ExternalItemContentType>(ExternalItemContentType); },
            "value": n => { this.value = n.getStringValue(); },
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
        writer.writeEnumValue<ExternalItemContentType>("type", this.type);
        writer.writeStringValue("value", this.value);
    };
    /**
     * Gets the type property value. The type property
     * @returns a externalItemContentType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type property
     * @param value Value to set for the type property.
     */
    public set type(value: ExternalItemContentType | undefined) {
        this._type = value;
    };
    /**
     * Gets the value property value. The content for the externalItem. Required.
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The content for the externalItem. Required.
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
    };
}
