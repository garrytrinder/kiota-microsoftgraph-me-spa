import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationOnPremisesInfo implements Parsable {
    /** Unique identifier for the user object in Active Directory. */
    private _immutableId?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Instantiates a new educationOnPremisesInfo and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.educationOnPremisesInfo";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "immutableId": n => { this.immutableId = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the immutableId property value. Unique identifier for the user object in Active Directory.
     * @returns a string
     */
    public get immutableId() {
        return this._immutableId;
    };
    /**
     * Sets the immutableId property value. Unique identifier for the user object in Active Directory.
     * @param value Value to set for the immutableId property.
     */
    public set immutableId(value: string | undefined) {
        this._immutableId = value;
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
        writer.writeStringValue("immutableId", this.immutableId);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
