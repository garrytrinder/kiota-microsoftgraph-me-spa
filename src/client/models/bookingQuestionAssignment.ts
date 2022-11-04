import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BookingQuestionAssignment implements Parsable {
    /** The ID of the custom question. */
    private _isRequired?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Indicates whether it is mandatory to answer the custom question. */
    private _questionId?: string | undefined;
    /**
     * Instantiates a new bookingQuestionAssignment and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.bookingQuestionAssignment";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "isRequired": n => { this.isRequired = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "questionId": n => { this.questionId = n.getStringValue(); },
        };
    };
    /**
     * Gets the isRequired property value. The ID of the custom question.
     * @returns a boolean
     */
    public get isRequired() {
        return this._isRequired;
    };
    /**
     * Sets the isRequired property value. The ID of the custom question.
     * @param value Value to set for the isRequired property.
     */
    public set isRequired(value: boolean | undefined) {
        this._isRequired = value;
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
     * Gets the questionId property value. Indicates whether it is mandatory to answer the custom question.
     * @returns a string
     */
    public get questionId() {
        return this._questionId;
    };
    /**
     * Sets the questionId property value. Indicates whether it is mandatory to answer the custom question.
     * @param value Value to set for the questionId property.
     */
    public set questionId(value: string | undefined) {
        this._questionId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("isRequired", this.isRequired);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("questionId", this.questionId);
    };
}
