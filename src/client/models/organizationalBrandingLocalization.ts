import {OrganizationalBrandingProperties} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the user singleton. */
export class OrganizationalBrandingLocalization extends OrganizationalBrandingProperties implements Parsable {
    /**
     * Instantiates a new organizationalBrandingLocalization and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.organizationalBrandingLocalization";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
    };
}
