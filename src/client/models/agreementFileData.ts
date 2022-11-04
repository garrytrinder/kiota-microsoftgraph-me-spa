import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AgreementFileData implements Parsable {
    /** Data that represents the terms of use PDF document. Read-only. */
    private _data?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Instantiates a new agreementFileData and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.agreementFileData";
    };
    /**
     * Gets the data property value. Data that represents the terms of use PDF document. Read-only.
     * @returns a binary
     */
    public get data() {
        return this._data;
    };
    /**
     * Sets the data property value. Data that represents the terms of use PDF document. Read-only.
     * @param value Value to set for the data property.
     */
    public set data(value: string | undefined) {
        this._data = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "data": n => { this.data = n.getStringValue(); },
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
        writer.writeStringValue("data", this.data);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
