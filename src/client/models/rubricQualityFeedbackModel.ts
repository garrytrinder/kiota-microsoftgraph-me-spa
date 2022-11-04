import {createEducationItemBodyFromDiscriminatorValue} from './createEducationItemBodyFromDiscriminatorValue';
import {EducationItemBody} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RubricQualityFeedbackModel implements Parsable {
    /** Specific feedback for one quality of this rubric. */
    private _feedback?: EducationItemBody | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The ID of the rubricQuality that this feedback is related to. */
    private _qualityId?: string | undefined;
    /**
     * Instantiates a new rubricQualityFeedbackModel and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.rubricQualityFeedbackModel";
    };
    /**
     * Gets the feedback property value. Specific feedback for one quality of this rubric.
     * @returns a educationItemBody
     */
    public get feedback() {
        return this._feedback;
    };
    /**
     * Sets the feedback property value. Specific feedback for one quality of this rubric.
     * @param value Value to set for the feedback property.
     */
    public set feedback(value: EducationItemBody | undefined) {
        this._feedback = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "feedback": n => { this.feedback = n.getObjectValue<EducationItemBody>(createEducationItemBodyFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "qualityId": n => { this.qualityId = n.getStringValue(); },
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
     * Gets the qualityId property value. The ID of the rubricQuality that this feedback is related to.
     * @returns a string
     */
    public get qualityId() {
        return this._qualityId;
    };
    /**
     * Sets the qualityId property value. The ID of the rubricQuality that this feedback is related to.
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
        writer.writeObjectValue<EducationItemBody>("feedback", this.feedback);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("qualityId", this.qualityId);
    };
}
