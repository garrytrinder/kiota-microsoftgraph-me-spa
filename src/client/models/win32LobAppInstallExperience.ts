import {RunAsAccountType} from './runAsAccountType';
import {Win32LobAppRestartBehavior} from './win32LobAppRestartBehavior';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains installation experience properties for a Win32 App */
export class Win32LobAppInstallExperience implements Parsable {
    /** Indicates the type of restart action. */
    private _deviceRestartBehavior?: Win32LobAppRestartBehavior | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Indicates the type of execution context the app runs in. */
    private _runAsAccount?: RunAsAccountType | undefined;
    /**
     * Instantiates a new win32LobAppInstallExperience and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.win32LobAppInstallExperience";
    };
    /**
     * Gets the deviceRestartBehavior property value. Indicates the type of restart action.
     * @returns a win32LobAppRestartBehavior
     */
    public get deviceRestartBehavior() {
        return this._deviceRestartBehavior;
    };
    /**
     * Sets the deviceRestartBehavior property value. Indicates the type of restart action.
     * @param value Value to set for the deviceRestartBehavior property.
     */
    public set deviceRestartBehavior(value: Win32LobAppRestartBehavior | undefined) {
        this._deviceRestartBehavior = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "deviceRestartBehavior": n => { this.deviceRestartBehavior = n.getEnumValue<Win32LobAppRestartBehavior>(Win32LobAppRestartBehavior); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "runAsAccount": n => { this.runAsAccount = n.getEnumValue<RunAsAccountType>(RunAsAccountType); },
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
     * Gets the runAsAccount property value. Indicates the type of execution context the app runs in.
     * @returns a runAsAccountType
     */
    public get runAsAccount() {
        return this._runAsAccount;
    };
    /**
     * Sets the runAsAccount property value. Indicates the type of execution context the app runs in.
     * @param value Value to set for the runAsAccount property.
     */
    public set runAsAccount(value: RunAsAccountType | undefined) {
        this._runAsAccount = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<Win32LobAppRestartBehavior>("deviceRestartBehavior", this.deviceRestartBehavior);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeEnumValue<RunAsAccountType>("runAsAccount", this.runAsAccount);
    };
}
