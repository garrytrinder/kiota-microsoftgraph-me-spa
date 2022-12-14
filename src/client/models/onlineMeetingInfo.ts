import {createPhoneFromDiscriminatorValue} from './createPhoneFromDiscriminatorValue';
import {Phone} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnlineMeetingInfo implements Parsable {
    /** The ID of the conference. */
    private _conferenceId?: string | undefined;
    /** The external link that launches the online meeting. This is a URL that clients will launch into a browser and will redirect the user to join the meeting. */
    private _joinUrl?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** All of the phone numbers associated with this conference. */
    private _phones?: Phone[] | undefined;
    /** The pre-formatted quickdial for this call. */
    private _quickDial?: string | undefined;
    /** The toll free numbers that can be used to join the conference. */
    private _tollFreeNumbers?: string[] | undefined;
    /** The toll number that can be used to join the conference. */
    private _tollNumber?: string | undefined;
    /**
     * Gets the conferenceId property value. The ID of the conference.
     * @returns a string
     */
    public get conferenceId() {
        return this._conferenceId;
    };
    /**
     * Sets the conferenceId property value. The ID of the conference.
     * @param value Value to set for the conferenceId property.
     */
    public set conferenceId(value: string | undefined) {
        this._conferenceId = value;
    };
    /**
     * Instantiates a new onlineMeetingInfo and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.onlineMeetingInfo";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "conferenceId": n => { this.conferenceId = n.getStringValue(); },
            "joinUrl": n => { this.joinUrl = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "phones": n => { this.phones = n.getCollectionOfObjectValues<Phone>(createPhoneFromDiscriminatorValue); },
            "quickDial": n => { this.quickDial = n.getStringValue(); },
            "tollFreeNumbers": n => { this.tollFreeNumbers = n.getCollectionOfPrimitiveValues<string>(); },
            "tollNumber": n => { this.tollNumber = n.getStringValue(); },
        };
    };
    /**
     * Gets the joinUrl property value. The external link that launches the online meeting. This is a URL that clients will launch into a browser and will redirect the user to join the meeting.
     * @returns a string
     */
    public get joinUrl() {
        return this._joinUrl;
    };
    /**
     * Sets the joinUrl property value. The external link that launches the online meeting. This is a URL that clients will launch into a browser and will redirect the user to join the meeting.
     * @param value Value to set for the joinUrl property.
     */
    public set joinUrl(value: string | undefined) {
        this._joinUrl = value;
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
     * Gets the phones property value. All of the phone numbers associated with this conference.
     * @returns a phone
     */
    public get phones() {
        return this._phones;
    };
    /**
     * Sets the phones property value. All of the phone numbers associated with this conference.
     * @param value Value to set for the phones property.
     */
    public set phones(value: Phone[] | undefined) {
        this._phones = value;
    };
    /**
     * Gets the quickDial property value. The pre-formatted quickdial for this call.
     * @returns a string
     */
    public get quickDial() {
        return this._quickDial;
    };
    /**
     * Sets the quickDial property value. The pre-formatted quickdial for this call.
     * @param value Value to set for the quickDial property.
     */
    public set quickDial(value: string | undefined) {
        this._quickDial = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("conferenceId", this.conferenceId);
        writer.writeStringValue("joinUrl", this.joinUrl);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeCollectionOfObjectValues<Phone>("phones", this.phones);
        writer.writeStringValue("quickDial", this.quickDial);
        writer.writeCollectionOfPrimitiveValues<string>("tollFreeNumbers", this.tollFreeNumbers);
        writer.writeStringValue("tollNumber", this.tollNumber);
    };
    /**
     * Gets the tollFreeNumbers property value. The toll free numbers that can be used to join the conference.
     * @returns a string
     */
    public get tollFreeNumbers() {
        return this._tollFreeNumbers;
    };
    /**
     * Sets the tollFreeNumbers property value. The toll free numbers that can be used to join the conference.
     * @param value Value to set for the tollFreeNumbers property.
     */
    public set tollFreeNumbers(value: string[] | undefined) {
        this._tollFreeNumbers = value;
    };
    /**
     * Gets the tollNumber property value. The toll number that can be used to join the conference.
     * @returns a string
     */
    public get tollNumber() {
        return this._tollNumber;
    };
    /**
     * Sets the tollNumber property value. The toll number that can be used to join the conference.
     * @param value Value to set for the tollNumber property.
     */
    public set tollNumber(value: string | undefined) {
        this._tollNumber = value;
    };
}
