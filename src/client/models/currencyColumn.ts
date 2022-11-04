import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CurrencyColumn implements Parsable {
    /** Specifies the locale from which to infer the currency symbol. */
    private _locale?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Instantiates a new currencyColumn and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.currencyColumn";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "locale": n => { this.locale = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the locale property value. Specifies the locale from which to infer the currency symbol.
     * @returns a string
     */
    public get locale() {
        return this._locale;
    };
    /**
     * Sets the locale property value. Specifies the locale from which to infer the currency symbol.
     * @param value Value to set for the locale property.
     */
    public set locale(value: string | undefined) {
        this._locale = value;
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
        writer.writeStringValue("locale", this.locale);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
