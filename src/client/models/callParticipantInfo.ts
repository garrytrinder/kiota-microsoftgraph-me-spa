import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CallParticipantInfo implements Parsable {
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Identity of the call participant. */
    private _participant?: IdentitySet | undefined;
    /**
     * Instantiates a new callParticipantInfo and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.callParticipantInfo";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "participant": n => { this.participant = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
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
     * Gets the participant property value. Identity of the call participant.
     * @returns a identitySet
     */
    public get participant() {
        return this._participant;
    };
    /**
     * Sets the participant property value. Identity of the call participant.
     * @param value Value to set for the participant property.
     */
    public set participant(value: IdentitySet | undefined) {
        this._participant = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<IdentitySet>("participant", this.participant);
    };
}
