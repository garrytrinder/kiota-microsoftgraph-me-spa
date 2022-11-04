import {createEmailAddressFromDiscriminatorValue} from './createEmailAddressFromDiscriminatorValue';
import {EmailAddress} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Recipient implements Parsable {
    /** The recipient's email address. */
    private _emailAddress?: EmailAddress | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Instantiates a new recipient and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.recipient";
    };
    /**
     * Gets the emailAddress property value. The recipient's email address.
     * @returns a emailAddress
     */
    public get emailAddress() {
        return this._emailAddress;
    };
    /**
     * Sets the emailAddress property value. The recipient's email address.
     * @param value Value to set for the emailAddress property.
     */
    public set emailAddress(value: EmailAddress | undefined) {
        this._emailAddress = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "emailAddress": n => { this.emailAddress = n.getObjectValue<EmailAddress>(createEmailAddressFromDiscriminatorValue); },
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
        writer.writeObjectValue<EmailAddress>("emailAddress", this.emailAddress);
        writer.writeStringValue("@odata.type", this.odataType);
    };
}
