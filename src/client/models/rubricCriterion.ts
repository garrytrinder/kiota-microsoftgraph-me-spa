import {createEducationItemBodyFromDiscriminatorValue} from './createEducationItemBodyFromDiscriminatorValue';
import {EducationItemBody} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RubricCriterion implements Parsable {
    /** The description of this criterion. */
    private _description?: EducationItemBody | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Instantiates a new rubricCriterion and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.rubricCriterion";
    };
    /**
     * Gets the description property value. The description of this criterion.
     * @returns a educationItemBody
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description of this criterion.
     * @param value Value to set for the description property.
     */
    public set description(value: EducationItemBody | undefined) {
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "description": n => { this.description = n.getObjectValue<EducationItemBody>(createEducationItemBodyFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
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
        writer.writeObjectValue<EducationItemBody>("description", this.description);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
