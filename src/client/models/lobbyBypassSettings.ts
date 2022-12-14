import {LobbyBypassScope} from './lobbyBypassScope';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LobbyBypassSettings implements Parsable {
    /** Specifies whether or not to always let dial-in callers bypass the lobby. Optional. */
    private _isDialInBypassEnabled?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Specifies the type of participants that are automatically admitted into a meeting, bypassing the lobby. Optional. */
    private _scope?: LobbyBypassScope | undefined;
    /**
     * Instantiates a new lobbyBypassSettings and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.lobbyBypassSettings";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "isDialInBypassEnabled": n => { this.isDialInBypassEnabled = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "scope": n => { this.scope = n.getEnumValue<LobbyBypassScope>(LobbyBypassScope); },
        };
    };
    /**
     * Gets the isDialInBypassEnabled property value. Specifies whether or not to always let dial-in callers bypass the lobby. Optional.
     * @returns a boolean
     */
    public get isDialInBypassEnabled() {
        return this._isDialInBypassEnabled;
    };
    /**
     * Sets the isDialInBypassEnabled property value. Specifies whether or not to always let dial-in callers bypass the lobby. Optional.
     * @param value Value to set for the isDialInBypassEnabled property.
     */
    public set isDialInBypassEnabled(value: boolean | undefined) {
        this._isDialInBypassEnabled = value;
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
     * Gets the scope property value. Specifies the type of participants that are automatically admitted into a meeting, bypassing the lobby. Optional.
     * @returns a lobbyBypassScope
     */
    public get scope() {
        return this._scope;
    };
    /**
     * Sets the scope property value. Specifies the type of participants that are automatically admitted into a meeting, bypassing the lobby. Optional.
     * @param value Value to set for the scope property.
     */
    public set scope(value: LobbyBypassScope | undefined) {
        this._scope = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("isDialInBypassEnabled", this.isDialInBypassEnabled);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeEnumValue<LobbyBypassScope>("scope", this.scope);
    };
}
