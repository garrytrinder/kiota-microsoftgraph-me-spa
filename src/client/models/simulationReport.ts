import {createSimulationReportOverviewFromDiscriminatorValue} from './createSimulationReportOverviewFromDiscriminatorValue';
import {createUserSimulationDetailsFromDiscriminatorValue} from './createUserSimulationDetailsFromDiscriminatorValue';
import {SimulationReportOverview, UserSimulationDetails} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SimulationReport implements Parsable {
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Overview of an attack simulation and training campaign. */
    private _overview?: SimulationReportOverview | undefined;
    /** The tenant users and their online actions in an attack simulation and training campaign. */
    private _simulationUsers?: UserSimulationDetails[] | undefined;
    /**
     * Instantiates a new simulationReport and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.simulationReport";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "overview": n => { this.overview = n.getObjectValue<SimulationReportOverview>(createSimulationReportOverviewFromDiscriminatorValue); },
            "simulationUsers": n => { this.simulationUsers = n.getCollectionOfObjectValues<UserSimulationDetails>(createUserSimulationDetailsFromDiscriminatorValue); },
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
     * Gets the overview property value. Overview of an attack simulation and training campaign.
     * @returns a simulationReportOverview
     */
    public get overview() {
        return this._overview;
    };
    /**
     * Sets the overview property value. Overview of an attack simulation and training campaign.
     * @param value Value to set for the overview property.
     */
    public set overview(value: SimulationReportOverview | undefined) {
        this._overview = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<SimulationReportOverview>("overview", this.overview);
        writer.writeCollectionOfObjectValues<UserSimulationDetails>("simulationUsers", this.simulationUsers);
    };
    /**
     * Gets the simulationUsers property value. The tenant users and their online actions in an attack simulation and training campaign.
     * @returns a userSimulationDetails
     */
    public get simulationUsers() {
        return this._simulationUsers;
    };
    /**
     * Sets the simulationUsers property value. The tenant users and their online actions in an attack simulation and training campaign.
     * @param value Value to set for the simulationUsers property.
     */
    public set simulationUsers(value: UserSimulationDetails[] | undefined) {
        this._simulationUsers = value;
    };
}
