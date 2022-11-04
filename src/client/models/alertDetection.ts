import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AlertDetection implements Parsable {
    /** The detectionType property */
    private _detectionType?: string | undefined;
    /** The method property */
    private _method?: string | undefined;
    /** The name property */
    private _name?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Instantiates a new alertDetection and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.alertDetection";
    };
    /**
     * Gets the detectionType property value. The detectionType property
     * @returns a string
     */
    public get detectionType() {
        return this._detectionType;
    };
    /**
     * Sets the detectionType property value. The detectionType property
     * @param value Value to set for the detectionType property.
     */
    public set detectionType(value: string | undefined) {
        this._detectionType = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "detectionType": n => { this.detectionType = n.getStringValue(); },
            "method": n => { this.method = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the method property value. The method property
     * @returns a string
     */
    public get method() {
        return this._method;
    };
    /**
     * Sets the method property value. The method property
     * @param value Value to set for the method property.
     */
    public set method(value: string | undefined) {
        this._method = value;
    };
    /**
     * Gets the name property value. The name property
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name property
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
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
        writer.writeStringValue("detectionType", this.detectionType);
        writer.writeStringValue("method", this.method);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
