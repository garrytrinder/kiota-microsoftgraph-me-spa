import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PublicClientApplication implements Parsable {
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Specifies the URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent. */
    private _redirectUris?: string[] | undefined;
    /**
     * Instantiates a new publicClientApplication and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.publicClientApplication";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "redirectUris": n => { this.redirectUris = n.getCollectionOfPrimitiveValues<string>(); },
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
     * Gets the redirectUris property value. Specifies the URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent.
     * @returns a string
     */
    public get redirectUris() {
        return this._redirectUris;
    };
    /**
     * Sets the redirectUris property value. Specifies the URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent.
     * @param value Value to set for the redirectUris property.
     */
    public set redirectUris(value: string[] | undefined) {
        this._redirectUris = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeCollectionOfPrimitiveValues<string>("redirectUris", this.redirectUris);
    };
}
