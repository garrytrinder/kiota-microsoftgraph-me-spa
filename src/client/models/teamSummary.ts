import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamSummary implements Parsable {
    /** The guestsCount property */
    private _guestsCount?: number | undefined;
    /** The membersCount property */
    private _membersCount?: number | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The ownersCount property */
    private _ownersCount?: number | undefined;
    /**
     * Instantiates a new teamSummary and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.teamSummary";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "guestsCount": n => { this.guestsCount = n.getNumberValue(); },
            "membersCount": n => { this.membersCount = n.getNumberValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "ownersCount": n => { this.ownersCount = n.getNumberValue(); },
        };
    };
    /**
     * Gets the guestsCount property value. The guestsCount property
     * @returns a integer
     */
    public get guestsCount() {
        return this._guestsCount;
    };
    /**
     * Sets the guestsCount property value. The guestsCount property
     * @param value Value to set for the guestsCount property.
     */
    public set guestsCount(value: number | undefined) {
        this._guestsCount = value;
    };
    /**
     * Gets the membersCount property value. The membersCount property
     * @returns a integer
     */
    public get membersCount() {
        return this._membersCount;
    };
    /**
     * Sets the membersCount property value. The membersCount property
     * @param value Value to set for the membersCount property.
     */
    public set membersCount(value: number | undefined) {
        this._membersCount = value;
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
     * Gets the ownersCount property value. The ownersCount property
     * @returns a integer
     */
    public get ownersCount() {
        return this._ownersCount;
    };
    /**
     * Sets the ownersCount property value. The ownersCount property
     * @param value Value to set for the ownersCount property.
     */
    public set ownersCount(value: number | undefined) {
        this._ownersCount = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("guestsCount", this.guestsCount);
        writer.writeNumberValue("membersCount", this.membersCount);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeNumberValue("ownersCount", this.ownersCount);
    };
}
