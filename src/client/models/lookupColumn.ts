import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LookupColumn implements Parsable {
    /** Indicates whether multiple values can be selected from the source. */
    private _allowMultipleValues?: boolean | undefined;
    /** Indicates whether values in the column should be able to exceed the standard limit of 255 characters. */
    private _allowUnlimitedLength?: boolean | undefined;
    /** The name of the lookup source column. */
    private _columnName?: string | undefined;
    /** The unique identifier of the lookup source list. */
    private _listId?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** If specified, this column is a secondary lookup, pulling an additional field from the list item looked up by the primary lookup. Use the list item looked up by the primary as the source for the column named here. */
    private _primaryLookupColumnId?: string | undefined;
    /**
     * Gets the allowMultipleValues property value. Indicates whether multiple values can be selected from the source.
     * @returns a boolean
     */
    public get allowMultipleValues() {
        return this._allowMultipleValues;
    };
    /**
     * Sets the allowMultipleValues property value. Indicates whether multiple values can be selected from the source.
     * @param value Value to set for the allowMultipleValues property.
     */
    public set allowMultipleValues(value: boolean | undefined) {
        this._allowMultipleValues = value;
    };
    /**
     * Gets the allowUnlimitedLength property value. Indicates whether values in the column should be able to exceed the standard limit of 255 characters.
     * @returns a boolean
     */
    public get allowUnlimitedLength() {
        return this._allowUnlimitedLength;
    };
    /**
     * Sets the allowUnlimitedLength property value. Indicates whether values in the column should be able to exceed the standard limit of 255 characters.
     * @param value Value to set for the allowUnlimitedLength property.
     */
    public set allowUnlimitedLength(value: boolean | undefined) {
        this._allowUnlimitedLength = value;
    };
    /**
     * Gets the columnName property value. The name of the lookup source column.
     * @returns a string
     */
    public get columnName() {
        return this._columnName;
    };
    /**
     * Sets the columnName property value. The name of the lookup source column.
     * @param value Value to set for the columnName property.
     */
    public set columnName(value: string | undefined) {
        this._columnName = value;
    };
    /**
     * Instantiates a new lookupColumn and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.lookupColumn";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowMultipleValues": n => { this.allowMultipleValues = n.getBooleanValue(); },
            "allowUnlimitedLength": n => { this.allowUnlimitedLength = n.getBooleanValue(); },
            "columnName": n => { this.columnName = n.getStringValue(); },
            "listId": n => { this.listId = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "primaryLookupColumnId": n => { this.primaryLookupColumnId = n.getStringValue(); },
        };
    };
    /**
     * Gets the listId property value. The unique identifier of the lookup source list.
     * @returns a string
     */
    public get listId() {
        return this._listId;
    };
    /**
     * Sets the listId property value. The unique identifier of the lookup source list.
     * @param value Value to set for the listId property.
     */
    public set listId(value: string | undefined) {
        this._listId = value;
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
     * Gets the primaryLookupColumnId property value. If specified, this column is a secondary lookup, pulling an additional field from the list item looked up by the primary lookup. Use the list item looked up by the primary as the source for the column named here.
     * @returns a string
     */
    public get primaryLookupColumnId() {
        return this._primaryLookupColumnId;
    };
    /**
     * Sets the primaryLookupColumnId property value. If specified, this column is a secondary lookup, pulling an additional field from the list item looked up by the primary lookup. Use the list item looked up by the primary as the source for the column named here.
     * @param value Value to set for the primaryLookupColumnId property.
     */
    public set primaryLookupColumnId(value: string | undefined) {
        this._primaryLookupColumnId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("allowMultipleValues", this.allowMultipleValues);
        writer.writeBooleanValue("allowUnlimitedLength", this.allowUnlimitedLength);
        writer.writeStringValue("columnName", this.columnName);
        writer.writeStringValue("listId", this.listId);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("primaryLookupColumnId", this.primaryLookupColumnId);
    };
}
