import {Win32LobAppRuleType} from './win32LobAppRuleType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** A base complex type to store the detection or requirement rule data for a Win32 LOB app. */
export class Win32LobAppRule implements Parsable {
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Contains rule types for Win32 LOB apps. */
    private _ruleType?: Win32LobAppRuleType | undefined;
    /**
     * Instantiates a new win32LobAppRule and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.win32LobAppRule";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "ruleType": n => { this.ruleType = n.getEnumValue<Win32LobAppRuleType>(Win32LobAppRuleType); },
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
     * Gets the ruleType property value. Contains rule types for Win32 LOB apps.
     * @returns a win32LobAppRuleType
     */
    public get ruleType() {
        return this._ruleType;
    };
    /**
     * Sets the ruleType property value. Contains rule types for Win32 LOB apps.
     * @param value Value to set for the ruleType property.
     */
    public set ruleType(value: Win32LobAppRuleType | undefined) {
        this._ruleType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeEnumValue<Win32LobAppRuleType>("ruleType", this.ruleType);
    };
}
