import {PlannerContainerType} from './plannerContainerType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PlannerPlanContainer implements Parsable {
    /** The identifier of the resource that contains the plan. */
    private _containerId?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The type property */
    private _type?: PlannerContainerType | undefined;
    /** The full canonical URL of the container. */
    private _url?: string | undefined;
    /**
     * Instantiates a new plannerPlanContainer and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.plannerPlanContainer";
    };
    /**
     * Gets the containerId property value. The identifier of the resource that contains the plan.
     * @returns a string
     */
    public get containerId() {
        return this._containerId;
    };
    /**
     * Sets the containerId property value. The identifier of the resource that contains the plan.
     * @param value Value to set for the containerId property.
     */
    public set containerId(value: string | undefined) {
        this._containerId = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "containerId": n => { this.containerId = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "type": n => { this.type = n.getEnumValue<PlannerContainerType>(PlannerContainerType); },
            "url": n => { this.url = n.getStringValue(); },
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
        writer.writeStringValue("containerId", this.containerId);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeEnumValue<PlannerContainerType>("type", this.type);
        writer.writeStringValue("url", this.url);
    };
    /**
     * Gets the type property value. The type property
     * @returns a plannerContainerType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type property
     * @param value Value to set for the type property.
     */
    public set type(value: PlannerContainerType | undefined) {
        this._type = value;
    };
    /**
     * Gets the url property value. The full canonical URL of the container.
     * @returns a string
     */
    public get url() {
        return this._url;
    };
    /**
     * Sets the url property value. The full canonical URL of the container.
     * @param value Value to set for the url property.
     */
    public set url(value: string | undefined) {
        this._url = value;
    };
}
