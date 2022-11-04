import {createExternalLinkFromDiscriminatorValue} from './createExternalLinkFromDiscriminatorValue';
import {ExternalLink} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PageLinks implements Parsable {
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Opens the page in the OneNote native client if it's installed. */
    private _oneNoteClientUrl?: ExternalLink | undefined;
    /** Opens the page in OneNote on the web. */
    private _oneNoteWebUrl?: ExternalLink | undefined;
    /**
     * Instantiates a new pageLinks and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.pageLinks";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "oneNoteClientUrl": n => { this.oneNoteClientUrl = n.getObjectValue<ExternalLink>(createExternalLinkFromDiscriminatorValue); },
            "oneNoteWebUrl": n => { this.oneNoteWebUrl = n.getObjectValue<ExternalLink>(createExternalLinkFromDiscriminatorValue); },
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
     * Gets the oneNoteClientUrl property value. Opens the page in the OneNote native client if it's installed.
     * @returns a externalLink
     */
    public get oneNoteClientUrl() {
        return this._oneNoteClientUrl;
    };
    /**
     * Sets the oneNoteClientUrl property value. Opens the page in the OneNote native client if it's installed.
     * @param value Value to set for the oneNoteClientUrl property.
     */
    public set oneNoteClientUrl(value: ExternalLink | undefined) {
        this._oneNoteClientUrl = value;
    };
    /**
     * Gets the oneNoteWebUrl property value. Opens the page in OneNote on the web.
     * @returns a externalLink
     */
    public get oneNoteWebUrl() {
        return this._oneNoteWebUrl;
    };
    /**
     * Sets the oneNoteWebUrl property value. Opens the page in OneNote on the web.
     * @param value Value to set for the oneNoteWebUrl property.
     */
    public set oneNoteWebUrl(value: ExternalLink | undefined) {
        this._oneNoteWebUrl = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<ExternalLink>("oneNoteClientUrl", this.oneNoteClientUrl);
        writer.writeObjectValue<ExternalLink>("oneNoteWebUrl", this.oneNoteWebUrl);
    };
}
