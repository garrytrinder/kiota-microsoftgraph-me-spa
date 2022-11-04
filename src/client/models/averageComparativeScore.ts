import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AverageComparativeScore implements Parsable {
    /** Average score within specified basis. */
    private _averageScore?: number | undefined;
    /** Scope type. The possible values are: AllTenants, TotalSeats, IndustryTypes. */
    private _basis?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Gets the averageScore property value. Average score within specified basis.
     * @returns a double
     */
    public get averageScore() {
        return this._averageScore;
    };
    /**
     * Sets the averageScore property value. Average score within specified basis.
     * @param value Value to set for the averageScore property.
     */
    public set averageScore(value: number | undefined) {
        this._averageScore = value;
    };
    /**
     * Gets the basis property value. Scope type. The possible values are: AllTenants, TotalSeats, IndustryTypes.
     * @returns a string
     */
    public get basis() {
        return this._basis;
    };
    /**
     * Sets the basis property value. Scope type. The possible values are: AllTenants, TotalSeats, IndustryTypes.
     * @param value Value to set for the basis property.
     */
    public set basis(value: string | undefined) {
        this._basis = value;
    };
    /**
     * Instantiates a new averageComparativeScore and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.averageComparativeScore";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "averageScore": n => { this.averageScore = n.getNumberValue(); },
            "basis": n => { this.basis = n.getStringValue(); },
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
        writer.writeNumberValue("averageScore", this.averageScore);
        writer.writeStringValue("basis", this.basis);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
