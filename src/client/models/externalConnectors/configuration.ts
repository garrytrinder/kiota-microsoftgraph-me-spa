import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Configuration implements Parsable {
    /** A collection of application IDs for registered Azure Active Directory apps that are allowed to manage the externalConnection and to index content in the externalConnection. */
    private _authorizedAppIds?: string[] | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Gets the authorizedAppIds property value. A collection of application IDs for registered Azure Active Directory apps that are allowed to manage the externalConnection and to index content in the externalConnection.
     * @returns a string
     */
    public get authorizedAppIds() {
        return this._authorizedAppIds;
    };
    /**
     * Sets the authorizedAppIds property value. A collection of application IDs for registered Azure Active Directory apps that are allowed to manage the externalConnection and to index content in the externalConnection.
     * @param value Value to set for the authorizedAppIds property.
     */
    public set authorizedAppIds(value: string[] | undefined) {
        this._authorizedAppIds = value;
    };
    /**
     * Instantiates a new configuration and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.externalConnectors.configuration";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "authorizedAppIds": n => { this.authorizedAppIds = n.getCollectionOfPrimitiveValues<string>(); },
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
        writer.writeCollectionOfPrimitiveValues<string>("authorizedAppIds", this.authorizedAppIds);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
