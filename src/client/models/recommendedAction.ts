import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RecommendedAction implements Parsable {
    /** Web URL to the recommended action. */
    private _actionWebUrl?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Potential improvement in the tenant security score from the recommended action. */
    private _potentialScoreImpact?: number | undefined;
    /** Title of the recommended action. */
    private _title?: string | undefined;
    /**
     * Gets the actionWebUrl property value. Web URL to the recommended action.
     * @returns a string
     */
    public get actionWebUrl() {
        return this._actionWebUrl;
    };
    /**
     * Sets the actionWebUrl property value. Web URL to the recommended action.
     * @param value Value to set for the actionWebUrl property.
     */
    public set actionWebUrl(value: string | undefined) {
        this._actionWebUrl = value;
    };
    /**
     * Instantiates a new recommendedAction and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.recommendedAction";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "actionWebUrl": n => { this.actionWebUrl = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "potentialScoreImpact": n => { this.potentialScoreImpact = n.getNumberValue(); },
            "title": n => { this.title = n.getStringValue(); },
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
     * Gets the potentialScoreImpact property value. Potential improvement in the tenant security score from the recommended action.
     * @returns a double
     */
    public get potentialScoreImpact() {
        return this._potentialScoreImpact;
    };
    /**
     * Sets the potentialScoreImpact property value. Potential improvement in the tenant security score from the recommended action.
     * @param value Value to set for the potentialScoreImpact property.
     */
    public set potentialScoreImpact(value: number | undefined) {
        this._potentialScoreImpact = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("actionWebUrl", this.actionWebUrl);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeNumberValue("potentialScoreImpact", this.potentialScoreImpact);
        writer.writeStringValue("title", this.title);
    };
    /**
     * Gets the title property value. Title of the recommended action.
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. Title of the recommended action.
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
}
