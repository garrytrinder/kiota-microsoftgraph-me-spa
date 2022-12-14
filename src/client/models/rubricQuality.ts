import {createEducationItemBodyFromDiscriminatorValue} from './createEducationItemBodyFromDiscriminatorValue';
import {createRubricCriterionFromDiscriminatorValue} from './createRubricCriterionFromDiscriminatorValue';
import {EducationItemBody, RubricCriterion} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RubricQuality implements Parsable {
    /** The collection of criteria for this rubric quality. */
    private _criteria?: RubricCriterion[] | undefined;
    /** The description of this rubric quality. */
    private _description?: EducationItemBody | undefined;
    /** The name of this rubric quality. */
    private _displayName?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The ID of this resource. */
    private _qualityId?: string | undefined;
    /** If present, a numerical weight for this quality.  Weights must add up to 100. */
    private _weight?: number | undefined;
    /**
     * Instantiates a new rubricQuality and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.rubricQuality";
    };
    /**
     * Gets the criteria property value. The collection of criteria for this rubric quality.
     * @returns a rubricCriterion
     */
    public get criteria() {
        return this._criteria;
    };
    /**
     * Sets the criteria property value. The collection of criteria for this rubric quality.
     * @param value Value to set for the criteria property.
     */
    public set criteria(value: RubricCriterion[] | undefined) {
        this._criteria = value;
    };
    /**
     * Gets the description property value. The description of this rubric quality.
     * @returns a educationItemBody
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description of this rubric quality.
     * @param value Value to set for the description property.
     */
    public set description(value: EducationItemBody | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. The name of this rubric quality.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of this rubric quality.
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
            "criteria": n => { this.criteria = n.getCollectionOfObjectValues<RubricCriterion>(createRubricCriterionFromDiscriminatorValue); },
            "description": n => { this.description = n.getObjectValue<EducationItemBody>(createEducationItemBodyFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "qualityId": n => { this.qualityId = n.getStringValue(); },
            "weight": n => { this.weight = n.getNumberValue(); },
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
     * Gets the qualityId property value. The ID of this resource.
     * @returns a string
     */
    public get qualityId() {
        return this._qualityId;
    };
    /**
     * Sets the qualityId property value. The ID of this resource.
     * @param value Value to set for the qualityId property.
     */
    public set qualityId(value: string | undefined) {
        this._qualityId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<RubricCriterion>("criteria", this.criteria);
        writer.writeObjectValue<EducationItemBody>("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("qualityId", this.qualityId);
        writer.writeNumberValue("weight", this.weight);
    };
    /**
     * Gets the weight property value. If present, a numerical weight for this quality.  Weights must add up to 100.
     * @returns a float
     */
    public get weight() {
        return this._weight;
    };
    /**
     * Sets the weight property value. If present, a numerical weight for this quality.  Weights must add up to 100.
     * @param value Value to set for the weight property.
     */
    public set weight(value: number | undefined) {
        this._weight = value;
    };
}
