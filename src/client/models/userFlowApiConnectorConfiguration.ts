import {createIdentityApiConnectorFromDiscriminatorValue} from './createIdentityApiConnectorFromDiscriminatorValue';
import {IdentityApiConnector} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserFlowApiConnectorConfiguration implements Parsable {
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The postAttributeCollection property */
    private _postAttributeCollection?: IdentityApiConnector | undefined;
    /** The postFederationSignup property */
    private _postFederationSignup?: IdentityApiConnector | undefined;
    /**
     * Instantiates a new userFlowApiConnectorConfiguration and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.userFlowApiConnectorConfiguration";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "postAttributeCollection": n => { this.postAttributeCollection = n.getObjectValue<IdentityApiConnector>(createIdentityApiConnectorFromDiscriminatorValue); },
            "postFederationSignup": n => { this.postFederationSignup = n.getObjectValue<IdentityApiConnector>(createIdentityApiConnectorFromDiscriminatorValue); },
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
     * Gets the postAttributeCollection property value. The postAttributeCollection property
     * @returns a identityApiConnector
     */
    public get postAttributeCollection() {
        return this._postAttributeCollection;
    };
    /**
     * Sets the postAttributeCollection property value. The postAttributeCollection property
     * @param value Value to set for the postAttributeCollection property.
     */
    public set postAttributeCollection(value: IdentityApiConnector | undefined) {
        this._postAttributeCollection = value;
    };
    /**
     * Gets the postFederationSignup property value. The postFederationSignup property
     * @returns a identityApiConnector
     */
    public get postFederationSignup() {
        return this._postFederationSignup;
    };
    /**
     * Sets the postFederationSignup property value. The postFederationSignup property
     * @param value Value to set for the postFederationSignup property.
     */
    public set postFederationSignup(value: IdentityApiConnector | undefined) {
        this._postFederationSignup = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<IdentityApiConnector>("postAttributeCollection", this.postAttributeCollection);
        writer.writeObjectValue<IdentityApiConnector>("postFederationSignup", this.postFederationSignup);
    };
}
