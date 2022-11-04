import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './index';
import {RoutingType} from './routingType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CallRoute implements Parsable {
    /** The final property */
    private _final?: IdentitySet | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The original property */
    private _original?: IdentitySet | undefined;
    /** The routingType property */
    private _routingType?: RoutingType | undefined;
    /**
     * Instantiates a new callRoute and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.callRoute";
    };
    /**
     * Gets the final property value. The final property
     * @returns a identitySet
     */
    public get final() {
        return this._final;
    };
    /**
     * Sets the final property value. The final property
     * @param value Value to set for the final property.
     */
    public set final(value: IdentitySet | undefined) {
        this._final = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "final": n => { this.final = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "original": n => { this.original = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "routingType": n => { this.routingType = n.getEnumValue<RoutingType>(RoutingType); },
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
     * Gets the original property value. The original property
     * @returns a identitySet
     */
    public get original() {
        return this._original;
    };
    /**
     * Sets the original property value. The original property
     * @param value Value to set for the original property.
     */
    public set original(value: IdentitySet | undefined) {
        this._original = value;
    };
    /**
     * Gets the routingType property value. The routingType property
     * @returns a routingType
     */
    public get routingType() {
        return this._routingType;
    };
    /**
     * Sets the routingType property value. The routingType property
     * @param value Value to set for the routingType property.
     */
    public set routingType(value: RoutingType | undefined) {
        this._routingType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<IdentitySet>("final", this.final);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<IdentitySet>("original", this.original);
        writer.writeEnumValue<RoutingType>("routingType", this.routingType);
    };
}
