import {createInsightIdentityFromDiscriminatorValue} from './createInsightIdentityFromDiscriminatorValue';
import {createResourceReferenceFromDiscriminatorValue} from './createResourceReferenceFromDiscriminatorValue';
import {InsightIdentity, ResourceReference} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SharingDetail implements Parsable {
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The user who shared the document. */
    private _sharedBy?: InsightIdentity | undefined;
    /** The date and time the file was last shared. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    private _sharedDateTime?: Date | undefined;
    /** The sharingReference property */
    private readonly _sharingReference?: ResourceReference | undefined;
    /** The subject with which the document was shared. */
    private _sharingSubject?: string | undefined;
    /** Determines the way the document was shared, can be by a 'Link', 'Attachment', 'Group', 'Site'. */
    private _sharingType?: string | undefined;
    /**
     * Instantiates a new sharingDetail and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.sharingDetail";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "sharedBy": n => { this.sharedBy = n.getObjectValue<InsightIdentity>(createInsightIdentityFromDiscriminatorValue); },
            "sharedDateTime": n => { this.sharedDateTime = n.getDateValue(); },
            "sharingReference": n => { this.sharingReference = n.getObjectValue<ResourceReference>(createResourceReferenceFromDiscriminatorValue); },
            "sharingSubject": n => { this.sharingSubject = n.getStringValue(); },
            "sharingType": n => { this.sharingType = n.getStringValue(); },
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
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<InsightIdentity>("sharedBy", this.sharedBy);
        writer.writeDateValue("sharedDateTime", this.sharedDateTime);
        writer.writeStringValue("sharingSubject", this.sharingSubject);
        writer.writeStringValue("sharingType", this.sharingType);
    };
    /**
     * Gets the sharedBy property value. The user who shared the document.
     * @returns a insightIdentity
     */
    public get sharedBy() {
        return this._sharedBy;
    };
    /**
     * Sets the sharedBy property value. The user who shared the document.
     * @param value Value to set for the sharedBy property.
     */
    public set sharedBy(value: InsightIdentity | undefined) {
        this._sharedBy = value;
    };
    /**
     * Gets the sharedDateTime property value. The date and time the file was last shared. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @returns a Date
     */
    public get sharedDateTime() {
        return this._sharedDateTime;
    };
    /**
     * Sets the sharedDateTime property value. The date and time the file was last shared. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @param value Value to set for the sharedDateTime property.
     */
    public set sharedDateTime(value: Date | undefined) {
        this._sharedDateTime = value;
    };
    /**
     * Gets the sharingReference property value. The sharingReference property
     * @returns a resourceReference
     */
    public get sharingReference() {
        return this._sharingReference;
    };
    /**
     * Sets the sharingReference property value. The sharingReference property
     * @param value Value to set for the sharingReference property.
     */
    public set sharingReference(value: ResourceReference | undefined) {
        this._sharingReference = value;
    };
    /**
     * Gets the sharingSubject property value. The subject with which the document was shared.
     * @returns a string
     */
    public get sharingSubject() {
        return this._sharingSubject;
    };
    /**
     * Sets the sharingSubject property value. The subject with which the document was shared.
     * @param value Value to set for the sharingSubject property.
     */
    public set sharingSubject(value: string | undefined) {
        this._sharingSubject = value;
    };
    /**
     * Gets the sharingType property value. Determines the way the document was shared, can be by a 'Link', 'Attachment', 'Group', 'Site'.
     * @returns a string
     */
    public get sharingType() {
        return this._sharingType;
    };
    /**
     * Sets the sharingType property value. Determines the way the document was shared, can be by a 'Link', 'Attachment', 'Group', 'Site'.
     * @param value Value to set for the sharingType property.
     */
    public set sharingType(value: string | undefined) {
        this._sharingType = value;
    };
}
