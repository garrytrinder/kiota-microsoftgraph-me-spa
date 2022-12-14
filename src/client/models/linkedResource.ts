import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the user singleton. */
export class LinkedResource extends Entity implements Parsable {
    /** Field indicating the app name of the source that is sending the linkedResource. */
    private _applicationName?: string | undefined;
    /** Field indicating the title of the linkedResource. */
    private _displayName?: string | undefined;
    /** Id of the object that is associated with this task on the third-party/partner system. */
    private _externalId?: string | undefined;
    /** Deep link to the linkedResource. */
    private _webUrl?: string | undefined;
    /**
     * Gets the applicationName property value. Field indicating the app name of the source that is sending the linkedResource.
     * @returns a string
     */
    public get applicationName() {
        return this._applicationName;
    };
    /**
     * Sets the applicationName property value. Field indicating the app name of the source that is sending the linkedResource.
     * @param value Value to set for the applicationName property.
     */
    public set applicationName(value: string | undefined) {
        this._applicationName = value;
    };
    /**
     * Instantiates a new linkedResource and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.linkedResource";
    };
    /**
     * Gets the displayName property value. Field indicating the title of the linkedResource.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Field indicating the title of the linkedResource.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the externalId property value. Id of the object that is associated with this task on the third-party/partner system.
     * @returns a string
     */
    public get externalId() {
        return this._externalId;
    };
    /**
     * Sets the externalId property value. Id of the object that is associated with this task on the third-party/partner system.
     * @param value Value to set for the externalId property.
     */
    public set externalId(value: string | undefined) {
        this._externalId = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "applicationName": n => { this.applicationName = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "externalId": n => { this.externalId = n.getStringValue(); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("applicationName", this.applicationName);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("externalId", this.externalId);
        writer.writeStringValue("webUrl", this.webUrl);
    };
    /**
     * Gets the webUrl property value. Deep link to the linkedResource.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. Deep link to the linkedResource.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        this._webUrl = value;
    };
}
