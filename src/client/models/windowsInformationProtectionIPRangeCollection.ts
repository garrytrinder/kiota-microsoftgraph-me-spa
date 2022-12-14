import {createIpRangeFromDiscriminatorValue} from './createIpRangeFromDiscriminatorValue';
import {IpRange} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Windows Information Protection IP Range Collection */
export class WindowsInformationProtectionIPRangeCollection implements Parsable {
    /** Display name */
    private _displayName?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Collection of ip ranges */
    private _ranges?: IpRange[] | undefined;
    /**
     * Instantiates a new windowsInformationProtectionIPRangeCollection and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.windowsInformationProtectionIPRangeCollection";
    };
    /**
     * Gets the displayName property value. Display name
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display name
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
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "ranges": n => { this.ranges = n.getCollectionOfObjectValues<IpRange>(createIpRangeFromDiscriminatorValue); },
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
     * Gets the ranges property value. Collection of ip ranges
     * @returns a ipRange
     */
    public get ranges() {
        return this._ranges;
    };
    /**
     * Sets the ranges property value. Collection of ip ranges
     * @param value Value to set for the ranges property.
     */
    public set ranges(value: IpRange[] | undefined) {
        this._ranges = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeCollectionOfObjectValues<IpRange>("ranges", this.ranges);
    };
}
