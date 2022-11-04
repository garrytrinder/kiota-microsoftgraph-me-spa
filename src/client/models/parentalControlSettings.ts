import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ParentalControlSettings implements Parsable {
    /** Specifies the two-letter ISO country codes. Access to the application will be blocked for minors from the countries specified in this list. */
    private _countriesBlockedForMinors?: string[] | undefined;
    /** Specifies the legal age group rule that applies to users of the app. Can be set to one of the following values: ValueDescriptionAllowDefault. Enforces the legal minimum. This means parental consent is required for minors in the European Union and Korea.RequireConsentForPrivacyServicesEnforces the user to specify date of birth to comply with COPPA rules. RequireConsentForMinorsRequires parental consent for ages below 18, regardless of country minor rules.RequireConsentForKidsRequires parental consent for ages below 14, regardless of country minor rules.BlockMinorsBlocks minors from using the app. */
    private _legalAgeGroupRule?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Instantiates a new parentalControlSettings and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.parentalControlSettings";
    };
    /**
     * Gets the countriesBlockedForMinors property value. Specifies the two-letter ISO country codes. Access to the application will be blocked for minors from the countries specified in this list.
     * @returns a string
     */
    public get countriesBlockedForMinors() {
        return this._countriesBlockedForMinors;
    };
    /**
     * Sets the countriesBlockedForMinors property value. Specifies the two-letter ISO country codes. Access to the application will be blocked for minors from the countries specified in this list.
     * @param value Value to set for the countriesBlockedForMinors property.
     */
    public set countriesBlockedForMinors(value: string[] | undefined) {
        this._countriesBlockedForMinors = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "countriesBlockedForMinors": n => { this.countriesBlockedForMinors = n.getCollectionOfPrimitiveValues<string>(); },
            "legalAgeGroupRule": n => { this.legalAgeGroupRule = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the legalAgeGroupRule property value. Specifies the legal age group rule that applies to users of the app. Can be set to one of the following values: ValueDescriptionAllowDefault. Enforces the legal minimum. This means parental consent is required for minors in the European Union and Korea.RequireConsentForPrivacyServicesEnforces the user to specify date of birth to comply with COPPA rules. RequireConsentForMinorsRequires parental consent for ages below 18, regardless of country minor rules.RequireConsentForKidsRequires parental consent for ages below 14, regardless of country minor rules.BlockMinorsBlocks minors from using the app.
     * @returns a string
     */
    public get legalAgeGroupRule() {
        return this._legalAgeGroupRule;
    };
    /**
     * Sets the legalAgeGroupRule property value. Specifies the legal age group rule that applies to users of the app. Can be set to one of the following values: ValueDescriptionAllowDefault. Enforces the legal minimum. This means parental consent is required for minors in the European Union and Korea.RequireConsentForPrivacyServicesEnforces the user to specify date of birth to comply with COPPA rules. RequireConsentForMinorsRequires parental consent for ages below 18, regardless of country minor rules.RequireConsentForKidsRequires parental consent for ages below 14, regardless of country minor rules.BlockMinorsBlocks minors from using the app.
     * @param value Value to set for the legalAgeGroupRule property.
     */
    public set legalAgeGroupRule(value: string | undefined) {
        this._legalAgeGroupRule = value;
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
        writer.writeCollectionOfPrimitiveValues<string>("countriesBlockedForMinors", this.countriesBlockedForMinors);
        writer.writeStringValue("legalAgeGroupRule", this.legalAgeGroupRule);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
