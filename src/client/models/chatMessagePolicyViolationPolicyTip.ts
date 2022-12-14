import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatMessagePolicyViolationPolicyTip implements Parsable {
    /** The URL a user can visit to read about the data loss prevention policies for the organization. (ie, policies about what users shouldn't say in chats) */
    private _complianceUrl?: string | undefined;
    /** Explanatory text shown to the sender of the message. */
    private _generalText?: string | undefined;
    /** The list of improper data in the message that was detected by the data loss prevention app. Each DLP app defines its own conditions, examples include 'Credit Card Number' and 'Social Security Number'. */
    private _matchedConditionDescriptions?: string[] | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Gets the complianceUrl property value. The URL a user can visit to read about the data loss prevention policies for the organization. (ie, policies about what users shouldn't say in chats)
     * @returns a string
     */
    public get complianceUrl() {
        return this._complianceUrl;
    };
    /**
     * Sets the complianceUrl property value. The URL a user can visit to read about the data loss prevention policies for the organization. (ie, policies about what users shouldn't say in chats)
     * @param value Value to set for the complianceUrl property.
     */
    public set complianceUrl(value: string | undefined) {
        this._complianceUrl = value;
    };
    /**
     * Instantiates a new chatMessagePolicyViolationPolicyTip and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.chatMessagePolicyViolationPolicyTip";
    };
    /**
     * Gets the generalText property value. Explanatory text shown to the sender of the message.
     * @returns a string
     */
    public get generalText() {
        return this._generalText;
    };
    /**
     * Sets the generalText property value. Explanatory text shown to the sender of the message.
     * @param value Value to set for the generalText property.
     */
    public set generalText(value: string | undefined) {
        this._generalText = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "complianceUrl": n => { this.complianceUrl = n.getStringValue(); },
            "generalText": n => { this.generalText = n.getStringValue(); },
            "matchedConditionDescriptions": n => { this.matchedConditionDescriptions = n.getCollectionOfPrimitiveValues<string>(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the matchedConditionDescriptions property value. The list of improper data in the message that was detected by the data loss prevention app. Each DLP app defines its own conditions, examples include 'Credit Card Number' and 'Social Security Number'.
     * @returns a string
     */
    public get matchedConditionDescriptions() {
        return this._matchedConditionDescriptions;
    };
    /**
     * Sets the matchedConditionDescriptions property value. The list of improper data in the message that was detected by the data loss prevention app. Each DLP app defines its own conditions, examples include 'Credit Card Number' and 'Social Security Number'.
     * @param value Value to set for the matchedConditionDescriptions property.
     */
    public set matchedConditionDescriptions(value: string[] | undefined) {
        this._matchedConditionDescriptions = value;
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
        writer.writeStringValue("complianceUrl", this.complianceUrl);
        writer.writeStringValue("generalText", this.generalText);
        writer.writeCollectionOfPrimitiveValues<string>("matchedConditionDescriptions", this.matchedConditionDescriptions);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
