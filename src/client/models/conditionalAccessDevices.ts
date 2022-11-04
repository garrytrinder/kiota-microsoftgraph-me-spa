import {createConditionalAccessFilterFromDiscriminatorValue} from './createConditionalAccessFilterFromDiscriminatorValue';
import {ConditionalAccessFilter} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessDevices implements Parsable {
    /** Filter that defines the dynamic-device-syntax rule to include/exclude devices. A filter can use device properties (such as extension attributes) to include/exclude them. */
    private _deviceFilter?: ConditionalAccessFilter | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Instantiates a new conditionalAccessDevices and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.conditionalAccessDevices";
    };
    /**
     * Gets the deviceFilter property value. Filter that defines the dynamic-device-syntax rule to include/exclude devices. A filter can use device properties (such as extension attributes) to include/exclude them.
     * @returns a conditionalAccessFilter
     */
    public get deviceFilter() {
        return this._deviceFilter;
    };
    /**
     * Sets the deviceFilter property value. Filter that defines the dynamic-device-syntax rule to include/exclude devices. A filter can use device properties (such as extension attributes) to include/exclude them.
     * @param value Value to set for the deviceFilter property.
     */
    public set deviceFilter(value: ConditionalAccessFilter | undefined) {
        this._deviceFilter = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "deviceFilter": n => { this.deviceFilter = n.getObjectValue<ConditionalAccessFilter>(createConditionalAccessFilterFromDiscriminatorValue); },
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
        writer.writeObjectValue<ConditionalAccessFilter>("deviceFilter", this.deviceFilter);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
