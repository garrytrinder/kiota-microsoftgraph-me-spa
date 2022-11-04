import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Deleted implements Parsable {
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Represents the state of the deleted item. */
    private _state?: string | undefined;
    /**
     * Instantiates a new deleted and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.deleted";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "state": n => { this.state = n.getStringValue(); },
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
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("state", this.state);
    };
    /**
     * Gets the state property value. Represents the state of the deleted item.
     * @returns a string
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. Represents the state of the deleted item.
     * @param value Value to set for the state property.
     */
    public set state(value: string | undefined) {
        this._state = value;
    };
}
