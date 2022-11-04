import {AuthenticationMethodTargetType} from './authenticationMethodTargetType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ExcludeTarget implements Parsable {
    /** The object identifier of an Azure Active Directory user or group. */
    private _id?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The targetType property */
    private _targetType?: AuthenticationMethodTargetType | undefined;
    /**
     * Instantiates a new excludeTarget and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.excludeTarget";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "id": n => { this.id = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "targetType": n => { this.targetType = n.getEnumValue<AuthenticationMethodTargetType>(AuthenticationMethodTargetType); },
        };
    };
    /**
     * Gets the id property value. The object identifier of an Azure Active Directory user or group.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. The object identifier of an Azure Active Directory user or group.
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
        writer.writeEnumValue<AuthenticationMethodTargetType>("targetType", this.targetType);
    };
    /**
     * Gets the targetType property value. The targetType property
     * @returns a authenticationMethodTargetType
     */
    public get targetType() {
        return this._targetType;
    };
    /**
     * Sets the targetType property value. The targetType property
     * @param value Value to set for the targetType property.
     */
    public set targetType(value: AuthenticationMethodTargetType | undefined) {
        this._targetType = value;
    };
}
