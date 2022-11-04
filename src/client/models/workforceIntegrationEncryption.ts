import {WorkforceIntegrationEncryptionProtocol} from './workforceIntegrationEncryptionProtocol';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkforceIntegrationEncryption implements Parsable {
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Possible values are: sharedSecret, unknownFutureValue. */
    private _protocol?: WorkforceIntegrationEncryptionProtocol | undefined;
    /** Encryption shared secret. */
    private _secret?: string | undefined;
    /**
     * Instantiates a new workforceIntegrationEncryption and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.workforceIntegrationEncryption";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "protocol": n => { this.protocol = n.getEnumValue<WorkforceIntegrationEncryptionProtocol>(WorkforceIntegrationEncryptionProtocol); },
            "secret": n => { this.secret = n.getStringValue(); },
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
     * Gets the protocol property value. Possible values are: sharedSecret, unknownFutureValue.
     * @returns a workforceIntegrationEncryptionProtocol
     */
    public get protocol() {
        return this._protocol;
    };
    /**
     * Sets the protocol property value. Possible values are: sharedSecret, unknownFutureValue.
     * @param value Value to set for the protocol property.
     */
    public set protocol(value: WorkforceIntegrationEncryptionProtocol | undefined) {
        this._protocol = value;
    };
    /**
     * Gets the secret property value. Encryption shared secret.
     * @returns a string
     */
    public get secret() {
        return this._secret;
    };
    /**
     * Sets the secret property value. Encryption shared secret.
     * @param value Value to set for the secret property.
     */
    public set secret(value: string | undefined) {
        this._secret = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeEnumValue<WorkforceIntegrationEncryptionProtocol>("protocol", this.protocol);
        writer.writeStringValue("secret", this.secret);
    };
}
