import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class StoragePlanInformation implements Parsable {
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Indicates whether there are higher storage quota plans available. Read-only. */
    private _upgradeAvailable?: boolean | undefined;
    /**
     * Instantiates a new storagePlanInformation and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.storagePlanInformation";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "upgradeAvailable": n => { this.upgradeAvailable = n.getBooleanValue(); },
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
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeBooleanValue("upgradeAvailable", this.upgradeAvailable);
    };
    /**
     * Gets the upgradeAvailable property value. Indicates whether there are higher storage quota plans available. Read-only.
     * @returns a boolean
     */
    public get upgradeAvailable() {
        return this._upgradeAvailable;
    };
    /**
     * Sets the upgradeAvailable property value. Indicates whether there are higher storage quota plans available. Read-only.
     * @param value Value to set for the upgradeAvailable property.
     */
    public set upgradeAvailable(value: boolean | undefined) {
        this._upgradeAvailable = value;
    };
}
