import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LocalizedName implements Parsable {
    /** The language tag for the label. */
    private _languageTag?: string | undefined;
    /** The name in the localized language. */
    private _name?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Instantiates a new localizedName and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.termStore.localizedName";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "languageTag": n => { this.languageTag = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the languageTag property value. The language tag for the label.
     * @returns a string
     */
    public get languageTag() {
        return this._languageTag;
    };
    /**
     * Sets the languageTag property value. The language tag for the label.
     * @param value Value to set for the languageTag property.
     */
    public set languageTag(value: string | undefined) {
        this._languageTag = value;
    };
    /**
     * Gets the name property value. The name in the localized language.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name in the localized language.
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
        writer.writeStringValue("languageTag", this.languageTag);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
