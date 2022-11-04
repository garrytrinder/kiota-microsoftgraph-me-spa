import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CloudAppSecurityState implements Parsable {
    /** Destination IP Address of the connection to the cloud application/service. */
    private _destinationServiceIp?: string | undefined;
    /** Cloud application/service name (for example 'Salesforce', 'DropBox', etc.). */
    private _destinationServiceName?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Provider-generated/calculated risk score of the Cloud Application/Service. Recommended value range of 0-1, which equates to a percentage. */
    private _riskScore?: string | undefined;
    /**
     * Instantiates a new cloudAppSecurityState and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.cloudAppSecurityState";
    };
    /**
     * Gets the destinationServiceIp property value. Destination IP Address of the connection to the cloud application/service.
     * @returns a string
     */
    public get destinationServiceIp() {
        return this._destinationServiceIp;
    };
    /**
     * Sets the destinationServiceIp property value. Destination IP Address of the connection to the cloud application/service.
     * @param value Value to set for the destinationServiceIp property.
     */
    public set destinationServiceIp(value: string | undefined) {
        this._destinationServiceIp = value;
    };
    /**
     * Gets the destinationServiceName property value. Cloud application/service name (for example 'Salesforce', 'DropBox', etc.).
     * @returns a string
     */
    public get destinationServiceName() {
        return this._destinationServiceName;
    };
    /**
     * Sets the destinationServiceName property value. Cloud application/service name (for example 'Salesforce', 'DropBox', etc.).
     * @param value Value to set for the destinationServiceName property.
     */
    public set destinationServiceName(value: string | undefined) {
        this._destinationServiceName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "destinationServiceIp": n => { this.destinationServiceIp = n.getStringValue(); },
            "destinationServiceName": n => { this.destinationServiceName = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "riskScore": n => { this.riskScore = n.getStringValue(); },
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
     * Gets the riskScore property value. Provider-generated/calculated risk score of the Cloud Application/Service. Recommended value range of 0-1, which equates to a percentage.
     * @returns a string
     */
    public get riskScore() {
        return this._riskScore;
    };
    /**
     * Sets the riskScore property value. Provider-generated/calculated risk score of the Cloud Application/Service. Recommended value range of 0-1, which equates to a percentage.
     * @param value Value to set for the riskScore property.
     */
    public set riskScore(value: string | undefined) {
        this._riskScore = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("destinationServiceIp", this.destinationServiceIp);
        writer.writeStringValue("destinationServiceName", this.destinationServiceName);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("riskScore", this.riskScore);
    };
}
