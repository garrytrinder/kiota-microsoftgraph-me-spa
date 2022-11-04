import {createSimulationEventFromDiscriminatorValue} from './createSimulationEventFromDiscriminatorValue';
import {SimulationEvent} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SimulationEventsContent implements Parsable {
    /** Actual percentage of users who fell for the simulated attack in an attack simulation and training campaign. */
    private _compromisedRate?: number | undefined;
    /** List of simulation events in an attack simulation and training campaign. */
    private _events?: SimulationEvent[] | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Gets the compromisedRate property value. Actual percentage of users who fell for the simulated attack in an attack simulation and training campaign.
     * @returns a double
     */
    public get compromisedRate() {
        return this._compromisedRate;
    };
    /**
     * Sets the compromisedRate property value. Actual percentage of users who fell for the simulated attack in an attack simulation and training campaign.
     * @param value Value to set for the compromisedRate property.
     */
    public set compromisedRate(value: number | undefined) {
        this._compromisedRate = value;
    };
    /**
     * Instantiates a new simulationEventsContent and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.simulationEventsContent";
    };
    /**
     * Gets the events property value. List of simulation events in an attack simulation and training campaign.
     * @returns a simulationEvent
     */
    public get events() {
        return this._events;
    };
    /**
     * Sets the events property value. List of simulation events in an attack simulation and training campaign.
     * @param value Value to set for the events property.
     */
    public set events(value: SimulationEvent[] | undefined) {
        this._events = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "compromisedRate": n => { this.compromisedRate = n.getNumberValue(); },
            "events": n => { this.events = n.getCollectionOfObjectValues<SimulationEvent>(createSimulationEventFromDiscriminatorValue); },
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
        writer.writeNumberValue("compromisedRate", this.compromisedRate);
        writer.writeCollectionOfObjectValues<SimulationEvent>("events", this.events);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
