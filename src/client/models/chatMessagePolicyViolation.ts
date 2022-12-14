import {ChatMessagePolicyViolationDlpActionTypes} from './chatMessagePolicyViolationDlpActionTypes';
import {ChatMessagePolicyViolationUserActionTypes} from './chatMessagePolicyViolationUserActionTypes';
import {ChatMessagePolicyViolationVerdictDetailsTypes} from './chatMessagePolicyViolationVerdictDetailsTypes';
import {createChatMessagePolicyViolationPolicyTipFromDiscriminatorValue} from './createChatMessagePolicyViolationPolicyTipFromDiscriminatorValue';
import {ChatMessagePolicyViolationPolicyTip} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatMessagePolicyViolation implements Parsable {
    /** The action taken by the DLP provider on the message with sensitive content. Supported values are: NoneNotifySender -- Inform the sender of the violation but allow readers to read the message.BlockAccess -- Block readers from reading the message.BlockAccessExternal -- Block users outside the organization from reading the message, while allowing users within the organization to read the message. */
    private _dlpAction?: ChatMessagePolicyViolationDlpActionTypes | undefined;
    /** Justification text provided by the sender of the message when overriding a policy violation. */
    private _justificationText?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Information to display to the message sender about why the message was flagged as a violation. */
    private _policyTip?: ChatMessagePolicyViolationPolicyTip | undefined;
    /** Indicates the action taken by the user on a message blocked by the DLP provider. Supported values are: NoneOverrideReportFalsePositiveWhen the DLP provider is updating the message for blocking sensitive content, userAction is not required. */
    private _userAction?: ChatMessagePolicyViolationUserActionTypes | undefined;
    /** Indicates what actions the sender may take in response to the policy violation. Supported values are: NoneAllowFalsePositiveOverride -- Allows the sender to declare the policyViolation to be an error in the DLP app and its rules, and allow readers to see the message again if the dlpAction had hidden it.AllowOverrideWithoutJustification -- Allows the sender to overriide the DLP violation and allow readers to see the message again if the dlpAction had hidden it, without needing to provide an explanation for doing so. AllowOverrideWithJustification -- Allows the sender to overriide the DLP violation and allow readers to see the message again if the dlpAction had hidden it, after providing an explanation for doing so.AllowOverrideWithoutJustification and AllowOverrideWithJustification are mutually exclusive. */
    private _verdictDetails?: ChatMessagePolicyViolationVerdictDetailsTypes | undefined;
    /**
     * Instantiates a new chatMessagePolicyViolation and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.chatMessagePolicyViolation";
    };
    /**
     * Gets the dlpAction property value. The action taken by the DLP provider on the message with sensitive content. Supported values are: NoneNotifySender -- Inform the sender of the violation but allow readers to read the message.BlockAccess -- Block readers from reading the message.BlockAccessExternal -- Block users outside the organization from reading the message, while allowing users within the organization to read the message.
     * @returns a chatMessagePolicyViolationDlpActionTypes
     */
    public get dlpAction() {
        return this._dlpAction;
    };
    /**
     * Sets the dlpAction property value. The action taken by the DLP provider on the message with sensitive content. Supported values are: NoneNotifySender -- Inform the sender of the violation but allow readers to read the message.BlockAccess -- Block readers from reading the message.BlockAccessExternal -- Block users outside the organization from reading the message, while allowing users within the organization to read the message.
     * @param value Value to set for the dlpAction property.
     */
    public set dlpAction(value: ChatMessagePolicyViolationDlpActionTypes | undefined) {
        this._dlpAction = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "dlpAction": n => { this.dlpAction = n.getEnumValue<ChatMessagePolicyViolationDlpActionTypes>(ChatMessagePolicyViolationDlpActionTypes); },
            "justificationText": n => { this.justificationText = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "policyTip": n => { this.policyTip = n.getObjectValue<ChatMessagePolicyViolationPolicyTip>(createChatMessagePolicyViolationPolicyTipFromDiscriminatorValue); },
            "userAction": n => { this.userAction = n.getEnumValue<ChatMessagePolicyViolationUserActionTypes>(ChatMessagePolicyViolationUserActionTypes); },
            "verdictDetails": n => { this.verdictDetails = n.getEnumValue<ChatMessagePolicyViolationVerdictDetailsTypes>(ChatMessagePolicyViolationVerdictDetailsTypes); },
        };
    };
    /**
     * Gets the justificationText property value. Justification text provided by the sender of the message when overriding a policy violation.
     * @returns a string
     */
    public get justificationText() {
        return this._justificationText;
    };
    /**
     * Sets the justificationText property value. Justification text provided by the sender of the message when overriding a policy violation.
     * @param value Value to set for the justificationText property.
     */
    public set justificationText(value: string | undefined) {
        this._justificationText = value;
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
     * Gets the policyTip property value. Information to display to the message sender about why the message was flagged as a violation.
     * @returns a chatMessagePolicyViolationPolicyTip
     */
    public get policyTip() {
        return this._policyTip;
    };
    /**
     * Sets the policyTip property value. Information to display to the message sender about why the message was flagged as a violation.
     * @param value Value to set for the policyTip property.
     */
    public set policyTip(value: ChatMessagePolicyViolationPolicyTip | undefined) {
        this._policyTip = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<ChatMessagePolicyViolationDlpActionTypes>("dlpAction", this.dlpAction);
        writer.writeStringValue("justificationText", this.justificationText);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<ChatMessagePolicyViolationPolicyTip>("policyTip", this.policyTip);
        writer.writeEnumValue<ChatMessagePolicyViolationUserActionTypes>("userAction", this.userAction);
        writer.writeEnumValue<ChatMessagePolicyViolationVerdictDetailsTypes>("verdictDetails", this.verdictDetails);
    };
    /**
     * Gets the userAction property value. Indicates the action taken by the user on a message blocked by the DLP provider. Supported values are: NoneOverrideReportFalsePositiveWhen the DLP provider is updating the message for blocking sensitive content, userAction is not required.
     * @returns a chatMessagePolicyViolationUserActionTypes
     */
    public get userAction() {
        return this._userAction;
    };
    /**
     * Sets the userAction property value. Indicates the action taken by the user on a message blocked by the DLP provider. Supported values are: NoneOverrideReportFalsePositiveWhen the DLP provider is updating the message for blocking sensitive content, userAction is not required.
     * @param value Value to set for the userAction property.
     */
    public set userAction(value: ChatMessagePolicyViolationUserActionTypes | undefined) {
        this._userAction = value;
    };
    /**
     * Gets the verdictDetails property value. Indicates what actions the sender may take in response to the policy violation. Supported values are: NoneAllowFalsePositiveOverride -- Allows the sender to declare the policyViolation to be an error in the DLP app and its rules, and allow readers to see the message again if the dlpAction had hidden it.AllowOverrideWithoutJustification -- Allows the sender to overriide the DLP violation and allow readers to see the message again if the dlpAction had hidden it, without needing to provide an explanation for doing so. AllowOverrideWithJustification -- Allows the sender to overriide the DLP violation and allow readers to see the message again if the dlpAction had hidden it, after providing an explanation for doing so.AllowOverrideWithoutJustification and AllowOverrideWithJustification are mutually exclusive.
     * @returns a chatMessagePolicyViolationVerdictDetailsTypes
     */
    public get verdictDetails() {
        return this._verdictDetails;
    };
    /**
     * Sets the verdictDetails property value. Indicates what actions the sender may take in response to the policy violation. Supported values are: NoneAllowFalsePositiveOverride -- Allows the sender to declare the policyViolation to be an error in the DLP app and its rules, and allow readers to see the message again if the dlpAction had hidden it.AllowOverrideWithoutJustification -- Allows the sender to overriide the DLP violation and allow readers to see the message again if the dlpAction had hidden it, without needing to provide an explanation for doing so. AllowOverrideWithJustification -- Allows the sender to overriide the DLP violation and allow readers to see the message again if the dlpAction had hidden it, after providing an explanation for doing so.AllowOverrideWithoutJustification and AllowOverrideWithJustification are mutually exclusive.
     * @param value Value to set for the verdictDetails property.
     */
    public set verdictDetails(value: ChatMessagePolicyViolationVerdictDetailsTypes | undefined) {
        this._verdictDetails = value;
    };
}
