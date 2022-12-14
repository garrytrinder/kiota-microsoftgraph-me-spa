import {createAgreementFileVersionFromDiscriminatorValue} from './createAgreementFileVersionFromDiscriminatorValue';
import {AgreementFileProperties, AgreementFileVersion} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the user singleton. */
export class AgreementFileLocalization extends AgreementFileProperties implements Parsable {
    /** Read-only. Customized versions of the terms of use agreement in the Azure AD tenant. */
    private _versions?: AgreementFileVersion[] | undefined;
    /**
     * Instantiates a new agreementFileLocalization and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.agreementFileLocalization";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "versions": n => { this.versions = n.getCollectionOfObjectValues<AgreementFileVersion>(createAgreementFileVersionFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AgreementFileVersion>("versions", this.versions);
    };
    /**
     * Gets the versions property value. Read-only. Customized versions of the terms of use agreement in the Azure AD tenant.
     * @returns a agreementFileVersion
     */
    public get versions() {
        return this._versions;
    };
    /**
     * Sets the versions property value. Read-only. Customized versions of the terms of use agreement in the Azure AD tenant.
     * @param value Value to set for the versions property.
     */
    public set versions(value: AgreementFileVersion[] | undefined) {
        this._versions = value;
    };
}
