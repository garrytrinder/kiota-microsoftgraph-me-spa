import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ListInfo implements Parsable {
    /** If true, indicates that content types are enabled for this list. */
    private _contentTypesEnabled?: boolean | undefined;
    /** If true, indicates that the list is not normally visible in the SharePoint user experience. */
    private _hidden?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** An enumerated value that represents the base list template used in creating the list. Possible values include documentLibrary, genericList, task, survey, announcements, contacts, and more. */
    private _template?: string | undefined;
    /**
     * Instantiates a new listInfo and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.listInfo";
    };
    /**
     * Gets the contentTypesEnabled property value. If true, indicates that content types are enabled for this list.
     * @returns a boolean
     */
    public get contentTypesEnabled() {
        return this._contentTypesEnabled;
    };
    /**
     * Sets the contentTypesEnabled property value. If true, indicates that content types are enabled for this list.
     * @param value Value to set for the contentTypesEnabled property.
     */
    public set contentTypesEnabled(value: boolean | undefined) {
        this._contentTypesEnabled = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "contentTypesEnabled": n => { this.contentTypesEnabled = n.getBooleanValue(); },
            "hidden": n => { this.hidden = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "template": n => { this.template = n.getStringValue(); },
        };
    };
    /**
     * Gets the hidden property value. If true, indicates that the list is not normally visible in the SharePoint user experience.
     * @returns a boolean
     */
    public get hidden() {
        return this._hidden;
    };
    /**
     * Sets the hidden property value. If true, indicates that the list is not normally visible in the SharePoint user experience.
     * @param value Value to set for the hidden property.
     */
    public set hidden(value: boolean | undefined) {
        this._hidden = value;
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
        writer.writeBooleanValue("contentTypesEnabled", this.contentTypesEnabled);
        writer.writeBooleanValue("hidden", this.hidden);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("template", this.template);
    };
    /**
     * Gets the template property value. An enumerated value that represents the base list template used in creating the list. Possible values include documentLibrary, genericList, task, survey, announcements, contacts, and more.
     * @returns a string
     */
    public get template() {
        return this._template;
    };
    /**
     * Sets the template property value. An enumerated value that represents the base list template used in creating the list. Possible values include documentLibrary, genericList, task, survey, announcements, contacts, and more.
     * @param value Value to set for the template property.
     */
    public set template(value: string | undefined) {
        this._template = value;
    };
}
