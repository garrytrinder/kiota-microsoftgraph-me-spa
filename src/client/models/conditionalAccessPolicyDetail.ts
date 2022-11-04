import {createConditionalAccessConditionSetFromDiscriminatorValue} from './createConditionalAccessConditionSetFromDiscriminatorValue';
import {createConditionalAccessGrantControlsFromDiscriminatorValue} from './createConditionalAccessGrantControlsFromDiscriminatorValue';
import {createConditionalAccessSessionControlsFromDiscriminatorValue} from './createConditionalAccessSessionControlsFromDiscriminatorValue';
import {ConditionalAccessConditionSet, ConditionalAccessGrantControls, ConditionalAccessSessionControls} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessPolicyDetail implements Parsable {
    /** The conditions property */
    private _conditions?: ConditionalAccessConditionSet | undefined;
    /** Represents grant controls that must be fulfilled for the policy. */
    private _grantControls?: ConditionalAccessGrantControls | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Represents a complex type of session controls that is enforced after sign-in. */
    private _sessionControls?: ConditionalAccessSessionControls | undefined;
    /**
     * Gets the conditions property value. The conditions property
     * @returns a conditionalAccessConditionSet
     */
    public get conditions() {
        return this._conditions;
    };
    /**
     * Sets the conditions property value. The conditions property
     * @param value Value to set for the conditions property.
     */
    public set conditions(value: ConditionalAccessConditionSet | undefined) {
        this._conditions = value;
    };
    /**
     * Instantiates a new conditionalAccessPolicyDetail and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.conditionalAccessPolicyDetail";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "conditions": n => { this.conditions = n.getObjectValue<ConditionalAccessConditionSet>(createConditionalAccessConditionSetFromDiscriminatorValue); },
            "grantControls": n => { this.grantControls = n.getObjectValue<ConditionalAccessGrantControls>(createConditionalAccessGrantControlsFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "sessionControls": n => { this.sessionControls = n.getObjectValue<ConditionalAccessSessionControls>(createConditionalAccessSessionControlsFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the grantControls property value. Represents grant controls that must be fulfilled for the policy.
     * @returns a conditionalAccessGrantControls
     */
    public get grantControls() {
        return this._grantControls;
    };
    /**
     * Sets the grantControls property value. Represents grant controls that must be fulfilled for the policy.
     * @param value Value to set for the grantControls property.
     */
    public set grantControls(value: ConditionalAccessGrantControls | undefined) {
        this._grantControls = value;
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
        writer.writeObjectValue<ConditionalAccessConditionSet>("conditions", this.conditions);
        writer.writeObjectValue<ConditionalAccessGrantControls>("grantControls", this.grantControls);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<ConditionalAccessSessionControls>("sessionControls", this.sessionControls);
    };
    /**
     * Gets the sessionControls property value. Represents a complex type of session controls that is enforced after sign-in.
     * @returns a conditionalAccessSessionControls
     */
    public get sessionControls() {
        return this._sessionControls;
    };
    /**
     * Sets the sessionControls property value. Represents a complex type of session controls that is enforced after sign-in.
     * @param value Value to set for the sessionControls property.
     */
    public set sessionControls(value: ConditionalAccessSessionControls | undefined) {
        this._sessionControls = value;
    };
}
