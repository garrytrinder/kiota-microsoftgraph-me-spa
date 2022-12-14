import {FeatureTargetType} from './featureTargetType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FeatureTarget implements Parsable {
    /** The ID of the entity that's targeted in the include or exclude rule, or all_users to target all users. */
    private _id?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The kind of entity that's targeted. The possible values are: group, administrativeUnit, role, unknownFutureValue. */
    private _targetType?: FeatureTargetType | undefined;
    /**
     * Instantiates a new featureTarget and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.featureTarget";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "id": n => { this.id = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "targetType": n => { this.targetType = n.getEnumValue<FeatureTargetType>(FeatureTargetType); },
        };
    };
    /**
     * Gets the id property value. The ID of the entity that's targeted in the include or exclude rule, or all_users to target all users.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. The ID of the entity that's targeted in the include or exclude rule, or all_users to target all users.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
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
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeEnumValue<FeatureTargetType>("targetType", this.targetType);
    };
    /**
     * Gets the targetType property value. The kind of entity that's targeted. The possible values are: group, administrativeUnit, role, unknownFutureValue.
     * @returns a featureTargetType
     */
    public get targetType() {
        return this._targetType;
    };
    /**
     * Sets the targetType property value. The kind of entity that's targeted. The possible values are: group, administrativeUnit, role, unknownFutureValue.
     * @param value Value to set for the targetType property.
     */
    public set targetType(value: FeatureTargetType | undefined) {
        this._targetType = value;
    };
}
