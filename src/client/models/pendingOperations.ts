import {createPendingContentUpdateFromDiscriminatorValue} from './createPendingContentUpdateFromDiscriminatorValue';
import {PendingContentUpdate} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PendingOperations implements Parsable {
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** A property that indicates that an operation that might update the binary content of a file is pending completion. */
    private _pendingContentUpdate?: PendingContentUpdate | undefined;
    /**
     * Instantiates a new pendingOperations and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.pendingOperations";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "pendingContentUpdate": n => { this.pendingContentUpdate = n.getObjectValue<PendingContentUpdate>(createPendingContentUpdateFromDiscriminatorValue); },
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
     * Gets the pendingContentUpdate property value. A property that indicates that an operation that might update the binary content of a file is pending completion.
     * @returns a pendingContentUpdate
     */
    public get pendingContentUpdate() {
        return this._pendingContentUpdate;
    };
    /**
     * Sets the pendingContentUpdate property value. A property that indicates that an operation that might update the binary content of a file is pending completion.
     * @param value Value to set for the pendingContentUpdate property.
     */
    public set pendingContentUpdate(value: PendingContentUpdate | undefined) {
        this._pendingContentUpdate = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<PendingContentUpdate>("pendingContentUpdate", this.pendingContentUpdate);
    };
}
