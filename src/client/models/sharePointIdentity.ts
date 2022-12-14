import {Identity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SharePointIdentity extends Identity implements Parsable {
    /** The sign in name of the SharePoint identity. */
    private _loginName?: string | undefined;
    /**
     * Instantiates a new SharePointIdentity and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.sharePointIdentity";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "loginName": n => { this.loginName = n.getStringValue(); },
        };
    };
    /**
     * Gets the loginName property value. The sign in name of the SharePoint identity.
     * @returns a string
     */
    public get loginName() {
        return this._loginName;
    };
    /**
     * Sets the loginName property value. The sign in name of the SharePoint identity.
     * @param value Value to set for the loginName property.
     */
    public set loginName(value: string | undefined) {
        this._loginName = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("loginName", this.loginName);
    };
}
