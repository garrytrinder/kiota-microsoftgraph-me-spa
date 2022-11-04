import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Set of allowed and not allowed actions for a resource. */
export class ResourceAction implements Parsable {
    /** Allowed Actions */
    private _allowedResourceActions?: string[] | undefined;
    /** Not Allowed Actions. */
    private _notAllowedResourceActions?: string[] | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Gets the allowedResourceActions property value. Allowed Actions
     * @returns a string
     */
    public get allowedResourceActions() {
        return this._allowedResourceActions;
    };
    /**
     * Sets the allowedResourceActions property value. Allowed Actions
     * @param value Value to set for the allowedResourceActions property.
     */
    public set allowedResourceActions(value: string[] | undefined) {
        this._allowedResourceActions = value;
    };
    /**
     * Instantiates a new resourceAction and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.resourceAction";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowedResourceActions": n => { this.allowedResourceActions = n.getCollectionOfPrimitiveValues<string>(); },
            "notAllowedResourceActions": n => { this.notAllowedResourceActions = n.getCollectionOfPrimitiveValues<string>(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the notAllowedResourceActions property value. Not Allowed Actions.
     * @returns a string
     */
    public get notAllowedResourceActions() {
        return this._notAllowedResourceActions;
    };
    /**
     * Sets the notAllowedResourceActions property value. Not Allowed Actions.
     * @param value Value to set for the notAllowedResourceActions property.
     */
    public set notAllowedResourceActions(value: string[] | undefined) {
        this._notAllowedResourceActions = value;
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
        writer.writeCollectionOfPrimitiveValues<string>("allowedResourceActions", this.allowedResourceActions);
        writer.writeCollectionOfPrimitiveValues<string>("notAllowedResourceActions", this.notAllowedResourceActions);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
