import {createX509CertificateRuleFromDiscriminatorValue} from './createX509CertificateRuleFromDiscriminatorValue';
import {X509CertificateRule} from './index';
import {X509CertificateAuthenticationMode} from './x509CertificateAuthenticationMode';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class X509CertificateAuthenticationModeConfiguration implements Parsable {
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Rules are configured in addition to the authentication mode to bind a specific x509CertificateRuleType to an x509CertificateAuthenticationMode. For example, bind the policyOID with identifier 1.32.132.343 to x509CertificateMultiFactor authentication mode. */
    private _rules?: X509CertificateRule[] | undefined;
    /** The type of strong authentication mode. The possible values are: x509CertificateSingleFactor, x509CertificateMultiFactor, unknownFutureValue. */
    private _x509CertificateAuthenticationDefaultMode?: X509CertificateAuthenticationMode | undefined;
    /**
     * Instantiates a new x509CertificateAuthenticationModeConfiguration and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.x509CertificateAuthenticationModeConfiguration";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "rules": n => { this.rules = n.getCollectionOfObjectValues<X509CertificateRule>(createX509CertificateRuleFromDiscriminatorValue); },
            "x509CertificateAuthenticationDefaultMode": n => { this.x509CertificateAuthenticationDefaultMode = n.getEnumValue<X509CertificateAuthenticationMode>(X509CertificateAuthenticationMode); },
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
     * Gets the rules property value. Rules are configured in addition to the authentication mode to bind a specific x509CertificateRuleType to an x509CertificateAuthenticationMode. For example, bind the policyOID with identifier 1.32.132.343 to x509CertificateMultiFactor authentication mode.
     * @returns a x509CertificateRule
     */
    public get rules() {
        return this._rules;
    };
    /**
     * Sets the rules property value. Rules are configured in addition to the authentication mode to bind a specific x509CertificateRuleType to an x509CertificateAuthenticationMode. For example, bind the policyOID with identifier 1.32.132.343 to x509CertificateMultiFactor authentication mode.
     * @param value Value to set for the rules property.
     */
    public set rules(value: X509CertificateRule[] | undefined) {
        this._rules = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeCollectionOfObjectValues<X509CertificateRule>("rules", this.rules);
        writer.writeEnumValue<X509CertificateAuthenticationMode>("x509CertificateAuthenticationDefaultMode", this.x509CertificateAuthenticationDefaultMode);
    };
    /**
     * Gets the x509CertificateAuthenticationDefaultMode property value. The type of strong authentication mode. The possible values are: x509CertificateSingleFactor, x509CertificateMultiFactor, unknownFutureValue.
     * @returns a x509CertificateAuthenticationMode
     */
    public get x509CertificateAuthenticationDefaultMode() {
        return this._x509CertificateAuthenticationDefaultMode;
    };
    /**
     * Sets the x509CertificateAuthenticationDefaultMode property value. The type of strong authentication mode. The possible values are: x509CertificateSingleFactor, x509CertificateMultiFactor, unknownFutureValue.
     * @param value Value to set for the x509CertificateAuthenticationDefaultMode property.
     */
    public set x509CertificateAuthenticationDefaultMode(value: X509CertificateAuthenticationMode | undefined) {
        this._x509CertificateAuthenticationDefaultMode = value;
    };
}
