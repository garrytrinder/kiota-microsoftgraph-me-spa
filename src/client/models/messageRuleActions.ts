import {createRecipientFromDiscriminatorValue} from './createRecipientFromDiscriminatorValue';
import {Importance} from './importance';
import {Recipient} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MessageRuleActions implements Parsable {
    /** A list of categories to be assigned to a message. */
    private _assignCategories?: string[] | undefined;
    /** The ID of a folder that a message is to be copied to. */
    private _copyToFolder?: string | undefined;
    /** Indicates whether a message should be moved to the Deleted Items folder. */
    private _delete?: boolean | undefined;
    /** The email addresses of the recipients to which a message should be forwarded as an attachment. */
    private _forwardAsAttachmentTo?: Recipient[] | undefined;
    /** The email addresses of the recipients to which a message should be forwarded. */
    private _forwardTo?: Recipient[] | undefined;
    /** Indicates whether a message should be marked as read. */
    private _markAsRead?: boolean | undefined;
    /** Sets the importance of the message, which can be: low, normal, high. */
    private _markImportance?: Importance | undefined;
    /** The ID of the folder that a message will be moved to. */
    private _moveToFolder?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Indicates whether a message should be permanently deleted and not saved to the Deleted Items folder. */
    private _permanentDelete?: boolean | undefined;
    /** The email addresses to which a message should be redirected. */
    private _redirectTo?: Recipient[] | undefined;
    /** Indicates whether subsequent rules should be evaluated. */
    private _stopProcessingRules?: boolean | undefined;
    /**
     * Gets the assignCategories property value. A list of categories to be assigned to a message.
     * @returns a string
     */
    public get assignCategories() {
        return this._assignCategories;
    };
    /**
     * Sets the assignCategories property value. A list of categories to be assigned to a message.
     * @param value Value to set for the assignCategories property.
     */
    public set assignCategories(value: string[] | undefined) {
        this._assignCategories = value;
    };
    /**
     * Instantiates a new messageRuleActions and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.messageRuleActions";
    };
    /**
     * Gets the copyToFolder property value. The ID of a folder that a message is to be copied to.
     * @returns a string
     */
    public get copyToFolder() {
        return this._copyToFolder;
    };
    /**
     * Sets the copyToFolder property value. The ID of a folder that a message is to be copied to.
     * @param value Value to set for the copyToFolder property.
     */
    public set copyToFolder(value: string | undefined) {
        this._copyToFolder = value;
    };
    /**
     * Gets the delete property value. Indicates whether a message should be moved to the Deleted Items folder.
     * @returns a boolean
     */
    public get delete() {
        return this._delete;
    };
    /**
     * Sets the delete property value. Indicates whether a message should be moved to the Deleted Items folder.
     * @param value Value to set for the delete property.
     */
    public set delete(value: boolean | undefined) {
        this._delete = value;
    };
    /**
     * Gets the forwardAsAttachmentTo property value. The email addresses of the recipients to which a message should be forwarded as an attachment.
     * @returns a recipient
     */
    public get forwardAsAttachmentTo() {
        return this._forwardAsAttachmentTo;
    };
    /**
     * Sets the forwardAsAttachmentTo property value. The email addresses of the recipients to which a message should be forwarded as an attachment.
     * @param value Value to set for the forwardAsAttachmentTo property.
     */
    public set forwardAsAttachmentTo(value: Recipient[] | undefined) {
        this._forwardAsAttachmentTo = value;
    };
    /**
     * Gets the forwardTo property value. The email addresses of the recipients to which a message should be forwarded.
     * @returns a recipient
     */
    public get forwardTo() {
        return this._forwardTo;
    };
    /**
     * Sets the forwardTo property value. The email addresses of the recipients to which a message should be forwarded.
     * @param value Value to set for the forwardTo property.
     */
    public set forwardTo(value: Recipient[] | undefined) {
        this._forwardTo = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "assignCategories": n => { this.assignCategories = n.getCollectionOfPrimitiveValues<string>(); },
            "copyToFolder": n => { this.copyToFolder = n.getStringValue(); },
            "delete": n => { this.delete = n.getBooleanValue(); },
            "forwardAsAttachmentTo": n => { this.forwardAsAttachmentTo = n.getCollectionOfObjectValues<Recipient>(createRecipientFromDiscriminatorValue); },
            "forwardTo": n => { this.forwardTo = n.getCollectionOfObjectValues<Recipient>(createRecipientFromDiscriminatorValue); },
            "markAsRead": n => { this.markAsRead = n.getBooleanValue(); },
            "markImportance": n => { this.markImportance = n.getEnumValue<Importance>(Importance); },
            "moveToFolder": n => { this.moveToFolder = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "permanentDelete": n => { this.permanentDelete = n.getBooleanValue(); },
            "redirectTo": n => { this.redirectTo = n.getCollectionOfObjectValues<Recipient>(createRecipientFromDiscriminatorValue); },
            "stopProcessingRules": n => { this.stopProcessingRules = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the markAsRead property value. Indicates whether a message should be marked as read.
     * @returns a boolean
     */
    public get markAsRead() {
        return this._markAsRead;
    };
    /**
     * Sets the markAsRead property value. Indicates whether a message should be marked as read.
     * @param value Value to set for the markAsRead property.
     */
    public set markAsRead(value: boolean | undefined) {
        this._markAsRead = value;
    };
    /**
     * Gets the markImportance property value. Sets the importance of the message, which can be: low, normal, high.
     * @returns a importance
     */
    public get markImportance() {
        return this._markImportance;
    };
    /**
     * Sets the markImportance property value. Sets the importance of the message, which can be: low, normal, high.
     * @param value Value to set for the markImportance property.
     */
    public set markImportance(value: Importance | undefined) {
        this._markImportance = value;
    };
    /**
     * Gets the moveToFolder property value. The ID of the folder that a message will be moved to.
     * @returns a string
     */
    public get moveToFolder() {
        return this._moveToFolder;
    };
    /**
     * Sets the moveToFolder property value. The ID of the folder that a message will be moved to.
     * @param value Value to set for the moveToFolder property.
     */
    public set moveToFolder(value: string | undefined) {
        this._moveToFolder = value;
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
     * Gets the permanentDelete property value. Indicates whether a message should be permanently deleted and not saved to the Deleted Items folder.
     * @returns a boolean
     */
    public get permanentDelete() {
        return this._permanentDelete;
    };
    /**
     * Sets the permanentDelete property value. Indicates whether a message should be permanently deleted and not saved to the Deleted Items folder.
     * @param value Value to set for the permanentDelete property.
     */
    public set permanentDelete(value: boolean | undefined) {
        this._permanentDelete = value;
    };
    /**
     * Gets the redirectTo property value. The email addresses to which a message should be redirected.
     * @returns a recipient
     */
    public get redirectTo() {
        return this._redirectTo;
    };
    /**
     * Sets the redirectTo property value. The email addresses to which a message should be redirected.
     * @param value Value to set for the redirectTo property.
     */
    public set redirectTo(value: Recipient[] | undefined) {
        this._redirectTo = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("assignCategories", this.assignCategories);
        writer.writeStringValue("copyToFolder", this.copyToFolder);
        writer.writeBooleanValue("delete", this.delete);
        writer.writeCollectionOfObjectValues<Recipient>("forwardAsAttachmentTo", this.forwardAsAttachmentTo);
        writer.writeCollectionOfObjectValues<Recipient>("forwardTo", this.forwardTo);
        writer.writeBooleanValue("markAsRead", this.markAsRead);
        writer.writeEnumValue<Importance>("markImportance", this.markImportance);
        writer.writeStringValue("moveToFolder", this.moveToFolder);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeBooleanValue("permanentDelete", this.permanentDelete);
        writer.writeCollectionOfObjectValues<Recipient>("redirectTo", this.redirectTo);
        writer.writeBooleanValue("stopProcessingRules", this.stopProcessingRules);
    };
    /**
     * Gets the stopProcessingRules property value. Indicates whether subsequent rules should be evaluated.
     * @returns a boolean
     */
    public get stopProcessingRules() {
        return this._stopProcessingRules;
    };
    /**
     * Sets the stopProcessingRules property value. Indicates whether subsequent rules should be evaluated.
     * @param value Value to set for the stopProcessingRules property.
     */
    public set stopProcessingRules(value: boolean | undefined) {
        this._stopProcessingRules = value;
    };
}
