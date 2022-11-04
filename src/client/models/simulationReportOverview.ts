import {createRecommendedActionFromDiscriminatorValue} from './createRecommendedActionFromDiscriminatorValue';
import {createSimulationEventsContentFromDiscriminatorValue} from './createSimulationEventsContentFromDiscriminatorValue';
import {createTrainingEventsContentFromDiscriminatorValue} from './createTrainingEventsContentFromDiscriminatorValue';
import {RecommendedAction, SimulationEventsContent, TrainingEventsContent} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SimulationReportOverview implements Parsable {
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** List of recommended actions for a tenant to improve its security posture based on the attack simulation and training campaign attack type. */
    private _recommendedActions?: RecommendedAction[] | undefined;
    /** Number of valid users in the attack simulation and training campaign. */
    private _resolvedTargetsCount?: number | undefined;
    /** Summary of simulation events in the attack simulation and training campaign. */
    private _simulationEventsContent?: SimulationEventsContent | undefined;
    /** Summary of assigned trainings in the attack simulation and training campaign. */
    private _trainingEventsContent?: TrainingEventsContent | undefined;
    /**
     * Instantiates a new simulationReportOverview and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.simulationReportOverview";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "recommendedActions": n => { this.recommendedActions = n.getCollectionOfObjectValues<RecommendedAction>(createRecommendedActionFromDiscriminatorValue); },
            "resolvedTargetsCount": n => { this.resolvedTargetsCount = n.getNumberValue(); },
            "simulationEventsContent": n => { this.simulationEventsContent = n.getObjectValue<SimulationEventsContent>(createSimulationEventsContentFromDiscriminatorValue); },
            "trainingEventsContent": n => { this.trainingEventsContent = n.getObjectValue<TrainingEventsContent>(createTrainingEventsContentFromDiscriminatorValue); },
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
     * Gets the recommendedActions property value. List of recommended actions for a tenant to improve its security posture based on the attack simulation and training campaign attack type.
     * @returns a recommendedAction
     */
    public get recommendedActions() {
        return this._recommendedActions;
    };
    /**
     * Sets the recommendedActions property value. List of recommended actions for a tenant to improve its security posture based on the attack simulation and training campaign attack type.
     * @param value Value to set for the recommendedActions property.
     */
    public set recommendedActions(value: RecommendedAction[] | undefined) {
        this._recommendedActions = value;
    };
    /**
     * Gets the resolvedTargetsCount property value. Number of valid users in the attack simulation and training campaign.
     * @returns a integer
     */
    public get resolvedTargetsCount() {
        return this._resolvedTargetsCount;
    };
    /**
     * Sets the resolvedTargetsCount property value. Number of valid users in the attack simulation and training campaign.
     * @param value Value to set for the resolvedTargetsCount property.
     */
    public set resolvedTargetsCount(value: number | undefined) {
        this._resolvedTargetsCount = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeCollectionOfObjectValues<RecommendedAction>("recommendedActions", this.recommendedActions);
        writer.writeNumberValue("resolvedTargetsCount", this.resolvedTargetsCount);
        writer.writeObjectValue<SimulationEventsContent>("simulationEventsContent", this.simulationEventsContent);
        writer.writeObjectValue<TrainingEventsContent>("trainingEventsContent", this.trainingEventsContent);
    };
    /**
     * Gets the simulationEventsContent property value. Summary of simulation events in the attack simulation and training campaign.
     * @returns a simulationEventsContent
     */
    public get simulationEventsContent() {
        return this._simulationEventsContent;
    };
    /**
     * Sets the simulationEventsContent property value. Summary of simulation events in the attack simulation and training campaign.
     * @param value Value to set for the simulationEventsContent property.
     */
    public set simulationEventsContent(value: SimulationEventsContent | undefined) {
        this._simulationEventsContent = value;
    };
    /**
     * Gets the trainingEventsContent property value. Summary of assigned trainings in the attack simulation and training campaign.
     * @returns a trainingEventsContent
     */
    public get trainingEventsContent() {
        return this._trainingEventsContent;
    };
    /**
     * Sets the trainingEventsContent property value. Summary of assigned trainings in the attack simulation and training campaign.
     * @param value Value to set for the trainingEventsContent property.
     */
    public set trainingEventsContent(value: TrainingEventsContent | undefined) {
        this._trainingEventsContent = value;
    };
}
