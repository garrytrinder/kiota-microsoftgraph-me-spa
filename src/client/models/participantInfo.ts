import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {EndpointType} from './endpointType';
import {IdentitySet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ParticipantInfo implements Parsable {
    /** The ISO 3166-1 Alpha-2 country code of the participant's best estimated physical location at the start of the call. Read-only. */
    private _countryCode?: string | undefined;
    /** The type of endpoint the participant is using. Possible values are: default, skypeForBusiness, or skypeForBusinessVoipPhone. Read-only. */
    private _endpointType?: EndpointType | undefined;
    /** The identity property */
    private _identity?: IdentitySet | undefined;
    /** The language culture string. Read-only. */
    private _languageId?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The participant ID of the participant. Read-only. */
    private _participantId?: string | undefined;
    /** The home region of the participant. This can be a country, a continent, or a larger geographic region. This does not change based on the participant's current physical location. Read-only. */
    private _region?: string | undefined;
    /**
     * Instantiates a new participantInfo and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.participantInfo";
    };
    /**
     * Gets the countryCode property value. The ISO 3166-1 Alpha-2 country code of the participant's best estimated physical location at the start of the call. Read-only.
     * @returns a string
     */
    public get countryCode() {
        return this._countryCode;
    };
    /**
     * Sets the countryCode property value. The ISO 3166-1 Alpha-2 country code of the participant's best estimated physical location at the start of the call. Read-only.
     * @param value Value to set for the countryCode property.
     */
    public set countryCode(value: string | undefined) {
        this._countryCode = value;
    };
    /**
     * Gets the endpointType property value. The type of endpoint the participant is using. Possible values are: default, skypeForBusiness, or skypeForBusinessVoipPhone. Read-only.
     * @returns a endpointType
     */
    public get endpointType() {
        return this._endpointType;
    };
    /**
     * Sets the endpointType property value. The type of endpoint the participant is using. Possible values are: default, skypeForBusiness, or skypeForBusinessVoipPhone. Read-only.
     * @param value Value to set for the endpointType property.
     */
    public set endpointType(value: EndpointType | undefined) {
        this._endpointType = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "countryCode": n => { this.countryCode = n.getStringValue(); },
            "endpointType": n => { this.endpointType = n.getEnumValue<EndpointType>(EndpointType); },
            "identity": n => { this.identity = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "languageId": n => { this.languageId = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "participantId": n => { this.participantId = n.getStringValue(); },
            "region": n => { this.region = n.getStringValue(); },
        };
    };
    /**
     * Gets the identity property value. The identity property
     * @returns a identitySet
     */
    public get identity() {
        return this._identity;
    };
    /**
     * Sets the identity property value. The identity property
     * @param value Value to set for the identity property.
     */
    public set identity(value: IdentitySet | undefined) {
        this._identity = value;
    };
    /**
     * Gets the languageId property value. The language culture string. Read-only.
     * @returns a string
     */
    public get languageId() {
        return this._languageId;
    };
    /**
     * Sets the languageId property value. The language culture string. Read-only.
     * @param value Value to set for the languageId property.
     */
    public set languageId(value: string | undefined) {
        this._languageId = value;
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
     * Gets the participantId property value. The participant ID of the participant. Read-only.
     * @returns a string
     */
    public get participantId() {
        return this._participantId;
    };
    /**
     * Sets the participantId property value. The participant ID of the participant. Read-only.
     * @param value Value to set for the participantId property.
     */
    public set participantId(value: string | undefined) {
        this._participantId = value;
    };
    /**
     * Gets the region property value. The home region of the participant. This can be a country, a continent, or a larger geographic region. This does not change based on the participant's current physical location. Read-only.
     * @returns a string
     */
    public get region() {
        return this._region;
    };
    /**
     * Sets the region property value. The home region of the participant. This can be a country, a continent, or a larger geographic region. This does not change based on the participant's current physical location. Read-only.
     * @param value Value to set for the region property.
     */
    public set region(value: string | undefined) {
        this._region = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("countryCode", this.countryCode);
        writer.writeEnumValue<EndpointType>("endpointType", this.endpointType);
        writer.writeObjectValue<IdentitySet>("identity", this.identity);
        writer.writeStringValue("languageId", this.languageId);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("participantId", this.participantId);
        writer.writeStringValue("region", this.region);
    };
}
