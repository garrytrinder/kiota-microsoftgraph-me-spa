import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationCourse implements Parsable {
    /** Unique identifier for the course. */
    private _courseNumber?: string | undefined;
    /** Description of the course. */
    private _description?: string | undefined;
    /** Name of the course. */
    private _displayName?: string | undefined;
    /** ID of the course from the syncing system. */
    private _externalId?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Subject of the course. */
    private _subject?: string | undefined;
    /**
     * Instantiates a new educationCourse and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.educationCourse";
    };
    /**
     * Gets the courseNumber property value. Unique identifier for the course.
     * @returns a string
     */
    public get courseNumber() {
        return this._courseNumber;
    };
    /**
     * Sets the courseNumber property value. Unique identifier for the course.
     * @param value Value to set for the courseNumber property.
     */
    public set courseNumber(value: string | undefined) {
        this._courseNumber = value;
    };
    /**
     * Gets the description property value. Description of the course.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description of the course.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. Name of the course.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Name of the course.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the externalId property value. ID of the course from the syncing system.
     * @returns a string
     */
    public get externalId() {
        return this._externalId;
    };
    /**
     * Sets the externalId property value. ID of the course from the syncing system.
     * @param value Value to set for the externalId property.
     */
    public set externalId(value: string | undefined) {
        this._externalId = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "courseNumber": n => { this.courseNumber = n.getStringValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "externalId": n => { this.externalId = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "subject": n => { this.subject = n.getStringValue(); },
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
        writer.writeStringValue("courseNumber", this.courseNumber);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("externalId", this.externalId);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("subject", this.subject);
    };
    /**
     * Gets the subject property value. Subject of the course.
     * @returns a string
     */
    public get subject() {
        return this._subject;
    };
    /**
     * Sets the subject property value. Subject of the course.
     * @param value Value to set for the subject property.
     */
    public set subject(value: string | undefined) {
        this._subject = value;
    };
}
