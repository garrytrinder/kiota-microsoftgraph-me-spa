import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ItemActionStat implements Parsable {
    /** The number of times the action took place. Read-only. */
    private _actionCount?: number | undefined;
    /** The number of distinct actors that performed the action. Read-only. */
    private _actorCount?: number | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Gets the actionCount property value. The number of times the action took place. Read-only.
     * @returns a integer
     */
    public get actionCount() {
        return this._actionCount;
    };
    /**
     * Sets the actionCount property value. The number of times the action took place. Read-only.
     * @param value Value to set for the actionCount property.
     */
    public set actionCount(value: number | undefined) {
        this._actionCount = value;
    };
    /**
     * Gets the actorCount property value. The number of distinct actors that performed the action. Read-only.
     * @returns a integer
     */
    public get actorCount() {
        return this._actorCount;
    };
    /**
     * Sets the actorCount property value. The number of distinct actors that performed the action. Read-only.
     * @param value Value to set for the actorCount property.
     */
    public set actorCount(value: number | undefined) {
        this._actorCount = value;
    };
    /**
     * Instantiates a new itemActionStat and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.itemActionStat";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "actionCount": n => { this.actionCount = n.getNumberValue(); },
            "actorCount": n => { this.actorCount = n.getNumberValue(); },
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
        writer.writeNumberValue("actionCount", this.actionCount);
        writer.writeNumberValue("actorCount", this.actorCount);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
