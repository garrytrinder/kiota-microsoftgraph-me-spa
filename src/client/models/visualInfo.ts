import {createImageInfoFromDiscriminatorValue} from './createImageInfoFromDiscriminatorValue';
import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {ImageInfo, Json} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class VisualInfo implements Parsable {
    /** Optional. JSON object used to represent an icon which represents the application used to generate the activity */
    private _attribution?: ImageInfo | undefined;
    /** Optional. Background color used to render the activity in the UI - brand color for the application source of the activity. Must be a valid hex color */
    private _backgroundColor?: string | undefined;
    /** Optional. Custom piece of data - JSON object used to provide custom content to render the activity in the Windows Shell UI */
    private _content?: Json | undefined;
    /** Optional. Longer text description of the user's unique activity (example: document name, first sentence, and/or metadata) */
    private _description?: string | undefined;
    /** Required. Short text description of the user's unique activity (for example, document name in cases where an activity refers to document creation) */
    private _displayText?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Gets the attribution property value. Optional. JSON object used to represent an icon which represents the application used to generate the activity
     * @returns a imageInfo
     */
    public get attribution() {
        return this._attribution;
    };
    /**
     * Sets the attribution property value. Optional. JSON object used to represent an icon which represents the application used to generate the activity
     * @param value Value to set for the attribution property.
     */
    public set attribution(value: ImageInfo | undefined) {
        this._attribution = value;
    };
    /**
     * Gets the backgroundColor property value. Optional. Background color used to render the activity in the UI - brand color for the application source of the activity. Must be a valid hex color
     * @returns a string
     */
    public get backgroundColor() {
        return this._backgroundColor;
    };
    /**
     * Sets the backgroundColor property value. Optional. Background color used to render the activity in the UI - brand color for the application source of the activity. Must be a valid hex color
     * @param value Value to set for the backgroundColor property.
     */
    public set backgroundColor(value: string | undefined) {
        this._backgroundColor = value;
    };
    /**
     * Instantiates a new visualInfo and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.visualInfo";
    };
    /**
     * Gets the content property value. Optional. Custom piece of data - JSON object used to provide custom content to render the activity in the Windows Shell UI
     * @returns a Json
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. Optional. Custom piece of data - JSON object used to provide custom content to render the activity in the Windows Shell UI
     * @param value Value to set for the content property.
     */
    public set content(value: Json | undefined) {
        this._content = value;
    };
    /**
     * Gets the description property value. Optional. Longer text description of the user's unique activity (example: document name, first sentence, and/or metadata)
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Optional. Longer text description of the user's unique activity (example: document name, first sentence, and/or metadata)
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayText property value. Required. Short text description of the user's unique activity (for example, document name in cases where an activity refers to document creation)
     * @returns a string
     */
    public get displayText() {
        return this._displayText;
    };
    /**
     * Sets the displayText property value. Required. Short text description of the user's unique activity (for example, document name in cases where an activity refers to document creation)
     * @param value Value to set for the displayText property.
     */
    public set displayText(value: string | undefined) {
        this._displayText = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "attribution": n => { this.attribution = n.getObjectValue<ImageInfo>(createImageInfoFromDiscriminatorValue); },
            "backgroundColor": n => { this.backgroundColor = n.getStringValue(); },
            "content": n => { this.content = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "displayText": n => { this.displayText = n.getStringValue(); },
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
        writer.writeObjectValue<ImageInfo>("attribution", this.attribution);
        writer.writeStringValue("backgroundColor", this.backgroundColor);
        writer.writeObjectValue<Json>("content", this.content);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayText", this.displayText);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
