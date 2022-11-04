import {SecurityResourceType} from './securityResourceType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SecurityResource implements Parsable {
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Name of the resource that is related to current alert. Required. */
    private _resource?: string | undefined;
    /** Represents type of security resources related to an alert. Possible values are: attacked, related. */
    private _resourceType?: SecurityResourceType | undefined;
    /**
     * Instantiates a new securityResource and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.securityResource";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "resource": n => { this.resource = n.getStringValue(); },
            "resourceType": n => { this.resourceType = n.getEnumValue<SecurityResourceType>(SecurityResourceType); },
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
     * Gets the resource property value. Name of the resource that is related to current alert. Required.
     * @returns a string
     */
    public get resource() {
        return this._resource;
    };
    /**
     * Sets the resource property value. Name of the resource that is related to current alert. Required.
     * @param value Value to set for the resource property.
     */
    public set resource(value: string | undefined) {
        this._resource = value;
    };
    /**
     * Gets the resourceType property value. Represents type of security resources related to an alert. Possible values are: attacked, related.
     * @returns a securityResourceType
     */
    public get resourceType() {
        return this._resourceType;
    };
    /**
     * Sets the resourceType property value. Represents type of security resources related to an alert. Possible values are: attacked, related.
     * @param value Value to set for the resourceType property.
     */
    public set resourceType(value: SecurityResourceType | undefined) {
        this._resourceType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("resource", this.resource);
        writer.writeEnumValue<SecurityResourceType>("resourceType", this.resourceType);
    };
}
