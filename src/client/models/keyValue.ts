import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class KeyValue implements Parsable {
    /** Key for the key-value pair. */
    private _key?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Value for the key-value pair. */
    private _value?: string | undefined;
    /**
     * Instantiates a new keyValue and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.keyValue";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "key": n => { this.key = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Gets the key property value. Key for the key-value pair.
     * @returns a string
     */
    public get key() {
        return this._key;
    };
    /**
     * Sets the key property value. Key for the key-value pair.
     * @param value Value to set for the key property.
     */
    public set key(value: string | undefined) {
        this._key = value;
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
        writer.writeStringValue("key", this.key);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("value", this.value);
    };
    /**
     * Gets the value property value. Value for the key-value pair.
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. Value for the key-value pair.
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
    };
}
