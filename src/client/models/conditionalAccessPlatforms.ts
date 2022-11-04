import {ConditionalAccessDevicePlatform} from './conditionalAccessDevicePlatform';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessPlatforms implements Parsable {
    /** Possible values are: android, iOS, windows, windowsPhone, macOS, linux, all, unknownFutureValue. */
    private _excludePlatforms?: ConditionalAccessDevicePlatform[] | undefined;
    /** Possible values are: android, iOS, windows, windowsPhone, macOS, linux, all, unknownFutureValue. */
    private _includePlatforms?: ConditionalAccessDevicePlatform[] | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Instantiates a new conditionalAccessPlatforms and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.conditionalAccessPlatforms";
    };
    /**
     * Gets the excludePlatforms property value. Possible values are: android, iOS, windows, windowsPhone, macOS, linux, all, unknownFutureValue.
     * @returns a conditionalAccessDevicePlatform
     */
    public get excludePlatforms() {
        return this._excludePlatforms;
    };
    /**
     * Sets the excludePlatforms property value. Possible values are: android, iOS, windows, windowsPhone, macOS, linux, all, unknownFutureValue.
     * @param value Value to set for the excludePlatforms property.
     */
    public set excludePlatforms(value: ConditionalAccessDevicePlatform[] | undefined) {
        this._excludePlatforms = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "excludePlatforms": n => { this.excludePlatforms = n.getEnumValues<ConditionalAccessDevicePlatform>(ConditionalAccessDevicePlatform); },
            "includePlatforms": n => { this.includePlatforms = n.getEnumValues<ConditionalAccessDevicePlatform>(ConditionalAccessDevicePlatform); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the includePlatforms property value. Possible values are: android, iOS, windows, windowsPhone, macOS, linux, all, unknownFutureValue.
     * @returns a conditionalAccessDevicePlatform
     */
    public get includePlatforms() {
        return this._includePlatforms;
    };
    /**
     * Sets the includePlatforms property value. Possible values are: android, iOS, windows, windowsPhone, macOS, linux, all, unknownFutureValue.
     * @param value Value to set for the includePlatforms property.
     */
    public set includePlatforms(value: ConditionalAccessDevicePlatform[] | undefined) {
        this._includePlatforms = value;
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
        this.excludePlatforms && writer.writeEnumValue<ConditionalAccessDevicePlatform>("excludePlatforms", ...this.excludePlatforms);
        this.includePlatforms && writer.writeEnumValue<ConditionalAccessDevicePlatform>("includePlatforms", ...this.includePlatforms);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
