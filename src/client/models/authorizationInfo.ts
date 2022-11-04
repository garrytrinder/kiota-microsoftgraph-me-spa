import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuthorizationInfo implements Parsable {
    /** The certificateUserIds property */
    private _certificateUserIds?: string[] | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Gets the certificateUserIds property value. The certificateUserIds property
     * @returns a string
     */
    public get certificateUserIds() {
        return this._certificateUserIds;
    };
    /**
     * Sets the certificateUserIds property value. The certificateUserIds property
     * @param value Value to set for the certificateUserIds property.
     */
    public set certificateUserIds(value: string[] | undefined) {
        this._certificateUserIds = value;
    };
    /**
     * Instantiates a new authorizationInfo and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.authorizationInfo";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "certificateUserIds": n => { this.certificateUserIds = n.getCollectionOfPrimitiveValues<string>(); },
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
        writer.writeCollectionOfPrimitiveValues<string>("certificateUserIds", this.certificateUserIds);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
