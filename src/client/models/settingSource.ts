import {SettingSourceType} from './settingSourceType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SettingSource implements Parsable {
    /** Not yet documented */
    private _displayName?: string | undefined;
    /** Not yet documented */
    private _id?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The sourceType property */
    private _sourceType?: SettingSourceType | undefined;
    /**
     * Instantiates a new settingSource and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.settingSource";
    };
    /**
     * Gets the displayName property value. Not yet documented
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Not yet documented
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "sourceType": n => { this.sourceType = n.getEnumValue<SettingSourceType>(SettingSourceType); },
        };
    };
    /**
     * Gets the id property value. Not yet documented
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. Not yet documented
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
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
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeEnumValue<SettingSourceType>("sourceType", this.sourceType);
    };
    /**
     * Gets the sourceType property value. The sourceType property
     * @returns a settingSourceType
     */
    public get sourceType() {
        return this._sourceType;
    };
    /**
     * Sets the sourceType property value. The sourceType property
     * @param value Value to set for the sourceType property.
     */
    public set sourceType(value: SettingSourceType | undefined) {
        this._sourceType = value;
    };
}
