import {createDisplayNameLocalizationFromDiscriminatorValue} from './createDisplayNameLocalizationFromDiscriminatorValue';
import {DisplayNameLocalization} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ColumnValidation implements Parsable {
    /** Default BCP 47 language tag for the description. */
    private _defaultLanguage?: string | undefined;
    /** Localized messages that explain what is needed for this column's value to be considered valid. User will be prompted with this message if validation fails. */
    private _descriptions?: DisplayNameLocalization[] | undefined;
    /** The formula to validate column value. For examples, see Examples of common formulas in lists. */
    private _formula?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Instantiates a new columnValidation and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.columnValidation";
    };
    /**
     * Gets the defaultLanguage property value. Default BCP 47 language tag for the description.
     * @returns a string
     */
    public get defaultLanguage() {
        return this._defaultLanguage;
    };
    /**
     * Sets the defaultLanguage property value. Default BCP 47 language tag for the description.
     * @param value Value to set for the defaultLanguage property.
     */
    public set defaultLanguage(value: string | undefined) {
        this._defaultLanguage = value;
    };
    /**
     * Gets the descriptions property value. Localized messages that explain what is needed for this column's value to be considered valid. User will be prompted with this message if validation fails.
     * @returns a displayNameLocalization
     */
    public get descriptions() {
        return this._descriptions;
    };
    /**
     * Sets the descriptions property value. Localized messages that explain what is needed for this column's value to be considered valid. User will be prompted with this message if validation fails.
     * @param value Value to set for the descriptions property.
     */
    public set descriptions(value: DisplayNameLocalization[] | undefined) {
        this._descriptions = value;
    };
    /**
     * Gets the formula property value. The formula to validate column value. For examples, see Examples of common formulas in lists.
     * @returns a string
     */
    public get formula() {
        return this._formula;
    };
    /**
     * Sets the formula property value. The formula to validate column value. For examples, see Examples of common formulas in lists.
     * @param value Value to set for the formula property.
     */
    public set formula(value: string | undefined) {
        this._formula = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "defaultLanguage": n => { this.defaultLanguage = n.getStringValue(); },
            "descriptions": n => { this.descriptions = n.getCollectionOfObjectValues<DisplayNameLocalization>(createDisplayNameLocalizationFromDiscriminatorValue); },
            "formula": n => { this.formula = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
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
        writer.writeStringValue("defaultLanguage", this.defaultLanguage);
        writer.writeCollectionOfObjectValues<DisplayNameLocalization>("descriptions", this.descriptions);
        writer.writeStringValue("formula", this.formula);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
