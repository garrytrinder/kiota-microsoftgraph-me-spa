import {RegistryHive} from './registryHive';
import {RegistryOperation} from './registryOperation';
import {RegistryValueType} from './registryValueType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RegistryKeyState implements Parsable {
    /** A Windows registry hive : HKEY_CURRENT_CONFIG HKEY_CURRENT_USER HKEY_LOCAL_MACHINE/SAM HKEY_LOCAL_MACHINE/Security HKEY_LOCAL_MACHINE/Software HKEY_LOCAL_MACHINE/System HKEY_USERS/.Default. Possible values are: unknown, currentConfig, currentUser, localMachineSam, localMachineSecurity, localMachineSoftware, localMachineSystem, usersDefault. */
    private _hive?: RegistryHive | undefined;
    /** Current (i.e. changed) registry key (excludes HIVE). */
    private _key?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Previous (i.e. before changed) registry key (excludes HIVE). */
    private _oldKey?: string | undefined;
    /** Previous (i.e. before changed) registry key value data (contents). */
    private _oldValueData?: string | undefined;
    /** Previous (i.e. before changed) registry key value name. */
    private _oldValueName?: string | undefined;
    /** Operation that changed the registry key name and/or value. Possible values are: unknown, create, modify, delete. */
    private _operation?: RegistryOperation | undefined;
    /** Process ID (PID) of the process that modified the registry key (process details will appear in the alert 'processes' collection). */
    private _processId?: number | undefined;
    /** Current (i.e. changed) registry key value data (contents). */
    private _valueData?: string | undefined;
    /** Current (i.e. changed) registry key value name */
    private _valueName?: string | undefined;
    /** Registry key value type REG_BINARY REG_DWORD REG_DWORD_LITTLE_ENDIAN REG_DWORD_BIG_ENDIANREG_EXPAND_SZ REG_LINK REG_MULTI_SZ REG_NONE REG_QWORD REG_QWORD_LITTLE_ENDIAN REG_SZ Possible values are: unknown, binary, dword, dwordLittleEndian, dwordBigEndian, expandSz, link, multiSz, none, qword, qwordlittleEndian, sz. */
    private _valueType?: RegistryValueType | undefined;
    /**
     * Instantiates a new registryKeyState and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.registryKeyState";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "hive": n => { this.hive = n.getEnumValue<RegistryHive>(RegistryHive); },
            "key": n => { this.key = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "oldKey": n => { this.oldKey = n.getStringValue(); },
            "oldValueData": n => { this.oldValueData = n.getStringValue(); },
            "oldValueName": n => { this.oldValueName = n.getStringValue(); },
            "operation": n => { this.operation = n.getEnumValue<RegistryOperation>(RegistryOperation); },
            "processId": n => { this.processId = n.getNumberValue(); },
            "valueData": n => { this.valueData = n.getStringValue(); },
            "valueName": n => { this.valueName = n.getStringValue(); },
            "valueType": n => { this.valueType = n.getEnumValue<RegistryValueType>(RegistryValueType); },
        };
    };
    /**
     * Gets the hive property value. A Windows registry hive : HKEY_CURRENT_CONFIG HKEY_CURRENT_USER HKEY_LOCAL_MACHINE/SAM HKEY_LOCAL_MACHINE/Security HKEY_LOCAL_MACHINE/Software HKEY_LOCAL_MACHINE/System HKEY_USERS/.Default. Possible values are: unknown, currentConfig, currentUser, localMachineSam, localMachineSecurity, localMachineSoftware, localMachineSystem, usersDefault.
     * @returns a registryHive
     */
    public get hive() {
        return this._hive;
    };
    /**
     * Sets the hive property value. A Windows registry hive : HKEY_CURRENT_CONFIG HKEY_CURRENT_USER HKEY_LOCAL_MACHINE/SAM HKEY_LOCAL_MACHINE/Security HKEY_LOCAL_MACHINE/Software HKEY_LOCAL_MACHINE/System HKEY_USERS/.Default. Possible values are: unknown, currentConfig, currentUser, localMachineSam, localMachineSecurity, localMachineSoftware, localMachineSystem, usersDefault.
     * @param value Value to set for the hive property.
     */
    public set hive(value: RegistryHive | undefined) {
        this._hive = value;
    };
    /**
     * Gets the key property value. Current (i.e. changed) registry key (excludes HIVE).
     * @returns a string
     */
    public get key() {
        return this._key;
    };
    /**
     * Sets the key property value. Current (i.e. changed) registry key (excludes HIVE).
     * @param value Value to set for the key property.
     */
    public set key(value: string | undefined) {
        this._key = value;
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
     * Gets the oldKey property value. Previous (i.e. before changed) registry key (excludes HIVE).
     * @returns a string
     */
    public get oldKey() {
        return this._oldKey;
    };
    /**
     * Sets the oldKey property value. Previous (i.e. before changed) registry key (excludes HIVE).
     * @param value Value to set for the oldKey property.
     */
    public set oldKey(value: string | undefined) {
        this._oldKey = value;
    };
    /**
     * Gets the oldValueData property value. Previous (i.e. before changed) registry key value data (contents).
     * @returns a string
     */
    public get oldValueData() {
        return this._oldValueData;
    };
    /**
     * Sets the oldValueData property value. Previous (i.e. before changed) registry key value data (contents).
     * @param value Value to set for the oldValueData property.
     */
    public set oldValueData(value: string | undefined) {
        this._oldValueData = value;
    };
    /**
     * Gets the oldValueName property value. Previous (i.e. before changed) registry key value name.
     * @returns a string
     */
    public get oldValueName() {
        return this._oldValueName;
    };
    /**
     * Sets the oldValueName property value. Previous (i.e. before changed) registry key value name.
     * @param value Value to set for the oldValueName property.
     */
    public set oldValueName(value: string | undefined) {
        this._oldValueName = value;
    };
    /**
     * Gets the operation property value. Operation that changed the registry key name and/or value. Possible values are: unknown, create, modify, delete.
     * @returns a registryOperation
     */
    public get operation() {
        return this._operation;
    };
    /**
     * Sets the operation property value. Operation that changed the registry key name and/or value. Possible values are: unknown, create, modify, delete.
     * @param value Value to set for the operation property.
     */
    public set operation(value: RegistryOperation | undefined) {
        this._operation = value;
    };
    /**
     * Gets the processId property value. Process ID (PID) of the process that modified the registry key (process details will appear in the alert 'processes' collection).
     * @returns a integer
     */
    public get processId() {
        return this._processId;
    };
    /**
     * Sets the processId property value. Process ID (PID) of the process that modified the registry key (process details will appear in the alert 'processes' collection).
     * @param value Value to set for the processId property.
     */
    public set processId(value: number | undefined) {
        this._processId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<RegistryHive>("hive", this.hive);
        writer.writeStringValue("key", this.key);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("oldKey", this.oldKey);
        writer.writeStringValue("oldValueData", this.oldValueData);
        writer.writeStringValue("oldValueName", this.oldValueName);
        writer.writeEnumValue<RegistryOperation>("operation", this.operation);
        writer.writeNumberValue("processId", this.processId);
        writer.writeStringValue("valueData", this.valueData);
        writer.writeStringValue("valueName", this.valueName);
        writer.writeEnumValue<RegistryValueType>("valueType", this.valueType);
    };
    /**
     * Gets the valueData property value. Current (i.e. changed) registry key value data (contents).
     * @returns a string
     */
    public get valueData() {
        return this._valueData;
    };
    /**
     * Sets the valueData property value. Current (i.e. changed) registry key value data (contents).
     * @param value Value to set for the valueData property.
     */
    public set valueData(value: string | undefined) {
        this._valueData = value;
    };
    /**
     * Gets the valueName property value. Current (i.e. changed) registry key value name
     * @returns a string
     */
    public get valueName() {
        return this._valueName;
    };
    /**
     * Sets the valueName property value. Current (i.e. changed) registry key value name
     * @param value Value to set for the valueName property.
     */
    public set valueName(value: string | undefined) {
        this._valueName = value;
    };
    /**
     * Gets the valueType property value. Registry key value type REG_BINARY REG_DWORD REG_DWORD_LITTLE_ENDIAN REG_DWORD_BIG_ENDIANREG_EXPAND_SZ REG_LINK REG_MULTI_SZ REG_NONE REG_QWORD REG_QWORD_LITTLE_ENDIAN REG_SZ Possible values are: unknown, binary, dword, dwordLittleEndian, dwordBigEndian, expandSz, link, multiSz, none, qword, qwordlittleEndian, sz.
     * @returns a registryValueType
     */
    public get valueType() {
        return this._valueType;
    };
    /**
     * Sets the valueType property value. Registry key value type REG_BINARY REG_DWORD REG_DWORD_LITTLE_ENDIAN REG_DWORD_BIG_ENDIANREG_EXPAND_SZ REG_LINK REG_MULTI_SZ REG_NONE REG_QWORD REG_QWORD_LITTLE_ENDIAN REG_SZ Possible values are: unknown, binary, dword, dwordLittleEndian, dwordBigEndian, expandSz, link, multiSz, none, qword, qwordlittleEndian, sz.
     * @param value Value to set for the valueType property.
     */
    public set valueType(value: RegistryValueType | undefined) {
        this._valueType = value;
    };
}
