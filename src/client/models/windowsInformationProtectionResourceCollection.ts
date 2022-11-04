import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Windows Information Protection Resource Collection */
export class WindowsInformationProtectionResourceCollection implements Parsable {
    /** Display name */
    private _displayName?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Collection of resources */
    private _resources?: string[] | undefined;
    /**
     * Instantiates a new windowsInformationProtectionResourceCollection and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.windowsInformationProtectionResourceCollection";
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
            "resources": n => { this.resources = n.getCollectionOfPrimitiveValues<string>(); },
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
     * Gets the resources property value. Collection of resources
     * @returns a string
     */
    public get resources() {
        return this._resources;
    };
    /**
     * Sets the resources property value. Collection of resources
     * @param value Value to set for the resources property.
     */
    public set resources(value: string[] | undefined) {
        this._resources = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeCollectionOfPrimitiveValues<string>("resources", this.resources);
    };
}
