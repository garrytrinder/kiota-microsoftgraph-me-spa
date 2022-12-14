import {createOfferShiftRequestFromDiscriminatorValue} from './createOfferShiftRequestFromDiscriminatorValue';
import {createOpenShiftChangeRequestFromDiscriminatorValue} from './createOpenShiftChangeRequestFromDiscriminatorValue';
import {createOpenShiftFromDiscriminatorValue} from './createOpenShiftFromDiscriminatorValue';
import {createSchedulingGroupFromDiscriminatorValue} from './createSchedulingGroupFromDiscriminatorValue';
import {createShiftFromDiscriminatorValue} from './createShiftFromDiscriminatorValue';
import {createSwapShiftsChangeRequestFromDiscriminatorValue} from './createSwapShiftsChangeRequestFromDiscriminatorValue';
import {createTimeOffFromDiscriminatorValue} from './createTimeOffFromDiscriminatorValue';
import {createTimeOffReasonFromDiscriminatorValue} from './createTimeOffReasonFromDiscriminatorValue';
import {createTimeOffRequestFromDiscriminatorValue} from './createTimeOffRequestFromDiscriminatorValue';
import {Entity, OfferShiftRequest, OpenShift, OpenShiftChangeRequest, SchedulingGroup, Shift, SwapShiftsChangeRequest, TimeOff, TimeOffReason, TimeOffRequest} from './index';
import {OperationStatus} from './operationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Schedule extends Entity implements Parsable {
    /** Indicates whether the schedule is enabled for the team. Required. */
    private _enabled?: boolean | undefined;
    /** The offerShiftRequests property */
    private _offerShiftRequests?: OfferShiftRequest[] | undefined;
    /** Indicates whether offer shift requests are enabled for the schedule. */
    private _offerShiftRequestsEnabled?: boolean | undefined;
    /** The openShiftChangeRequests property */
    private _openShiftChangeRequests?: OpenShiftChangeRequest[] | undefined;
    /** The openShifts property */
    private _openShifts?: OpenShift[] | undefined;
    /** Indicates whether open shifts are enabled for the schedule. */
    private _openShiftsEnabled?: boolean | undefined;
    /** The status of the schedule provisioning. The possible values are notStarted, running, completed, failed. */
    private readonly _provisionStatus?: OperationStatus | undefined;
    /** Additional information about why schedule provisioning failed. */
    private readonly _provisionStatusCode?: string | undefined;
    /** The logical grouping of users in the schedule (usually by role). */
    private _schedulingGroups?: SchedulingGroup[] | undefined;
    /** The shifts in the schedule. */
    private _shifts?: Shift[] | undefined;
    /** The swapShiftsChangeRequests property */
    private _swapShiftsChangeRequests?: SwapShiftsChangeRequest[] | undefined;
    /** Indicates whether swap shifts requests are enabled for the schedule. */
    private _swapShiftsRequestsEnabled?: boolean | undefined;
    /** Indicates whether time clock is enabled for the schedule. */
    private _timeClockEnabled?: boolean | undefined;
    /** The set of reasons for a time off in the schedule. */
    private _timeOffReasons?: TimeOffReason[] | undefined;
    /** The timeOffRequests property */
    private _timeOffRequests?: TimeOffRequest[] | undefined;
    /** Indicates whether time off requests are enabled for the schedule. */
    private _timeOffRequestsEnabled?: boolean | undefined;
    /** The instances of times off in the schedule. */
    private _timesOff?: TimeOff[] | undefined;
    /** Indicates the time zone of the schedule team using tz database format. Required. */
    private _timeZone?: string | undefined;
    /** The workforceIntegrationIds property */
    private _workforceIntegrationIds?: string[] | undefined;
    /**
     * Instantiates a new schedule and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.schedule";
    };
    /**
     * Gets the enabled property value. Indicates whether the schedule is enabled for the team. Required.
     * @returns a boolean
     */
    public get enabled() {
        return this._enabled;
    };
    /**
     * Sets the enabled property value. Indicates whether the schedule is enabled for the team. Required.
     * @param value Value to set for the enabled property.
     */
    public set enabled(value: boolean | undefined) {
        this._enabled = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "enabled": n => { this.enabled = n.getBooleanValue(); },
            "offerShiftRequests": n => { this.offerShiftRequests = n.getCollectionOfObjectValues<OfferShiftRequest>(createOfferShiftRequestFromDiscriminatorValue); },
            "offerShiftRequestsEnabled": n => { this.offerShiftRequestsEnabled = n.getBooleanValue(); },
            "openShiftChangeRequests": n => { this.openShiftChangeRequests = n.getCollectionOfObjectValues<OpenShiftChangeRequest>(createOpenShiftChangeRequestFromDiscriminatorValue); },
            "openShifts": n => { this.openShifts = n.getCollectionOfObjectValues<OpenShift>(createOpenShiftFromDiscriminatorValue); },
            "openShiftsEnabled": n => { this.openShiftsEnabled = n.getBooleanValue(); },
            "provisionStatus": n => { this.provisionStatus = n.getEnumValue<OperationStatus>(OperationStatus); },
            "provisionStatusCode": n => { this.provisionStatusCode = n.getStringValue(); },
            "schedulingGroups": n => { this.schedulingGroups = n.getCollectionOfObjectValues<SchedulingGroup>(createSchedulingGroupFromDiscriminatorValue); },
            "shifts": n => { this.shifts = n.getCollectionOfObjectValues<Shift>(createShiftFromDiscriminatorValue); },
            "swapShiftsChangeRequests": n => { this.swapShiftsChangeRequests = n.getCollectionOfObjectValues<SwapShiftsChangeRequest>(createSwapShiftsChangeRequestFromDiscriminatorValue); },
            "swapShiftsRequestsEnabled": n => { this.swapShiftsRequestsEnabled = n.getBooleanValue(); },
            "timeClockEnabled": n => { this.timeClockEnabled = n.getBooleanValue(); },
            "timeOffReasons": n => { this.timeOffReasons = n.getCollectionOfObjectValues<TimeOffReason>(createTimeOffReasonFromDiscriminatorValue); },
            "timeOffRequests": n => { this.timeOffRequests = n.getCollectionOfObjectValues<TimeOffRequest>(createTimeOffRequestFromDiscriminatorValue); },
            "timeOffRequestsEnabled": n => { this.timeOffRequestsEnabled = n.getBooleanValue(); },
            "timesOff": n => { this.timesOff = n.getCollectionOfObjectValues<TimeOff>(createTimeOffFromDiscriminatorValue); },
            "timeZone": n => { this.timeZone = n.getStringValue(); },
            "workforceIntegrationIds": n => { this.workforceIntegrationIds = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the offerShiftRequests property value. The offerShiftRequests property
     * @returns a offerShiftRequest
     */
    public get offerShiftRequests() {
        return this._offerShiftRequests;
    };
    /**
     * Sets the offerShiftRequests property value. The offerShiftRequests property
     * @param value Value to set for the offerShiftRequests property.
     */
    public set offerShiftRequests(value: OfferShiftRequest[] | undefined) {
        this._offerShiftRequests = value;
    };
    /**
     * Gets the offerShiftRequestsEnabled property value. Indicates whether offer shift requests are enabled for the schedule.
     * @returns a boolean
     */
    public get offerShiftRequestsEnabled() {
        return this._offerShiftRequestsEnabled;
    };
    /**
     * Sets the offerShiftRequestsEnabled property value. Indicates whether offer shift requests are enabled for the schedule.
     * @param value Value to set for the offerShiftRequestsEnabled property.
     */
    public set offerShiftRequestsEnabled(value: boolean | undefined) {
        this._offerShiftRequestsEnabled = value;
    };
    /**
     * Gets the openShiftChangeRequests property value. The openShiftChangeRequests property
     * @returns a openShiftChangeRequest
     */
    public get openShiftChangeRequests() {
        return this._openShiftChangeRequests;
    };
    /**
     * Sets the openShiftChangeRequests property value. The openShiftChangeRequests property
     * @param value Value to set for the openShiftChangeRequests property.
     */
    public set openShiftChangeRequests(value: OpenShiftChangeRequest[] | undefined) {
        this._openShiftChangeRequests = value;
    };
    /**
     * Gets the openShifts property value. The openShifts property
     * @returns a openShift
     */
    public get openShifts() {
        return this._openShifts;
    };
    /**
     * Sets the openShifts property value. The openShifts property
     * @param value Value to set for the openShifts property.
     */
    public set openShifts(value: OpenShift[] | undefined) {
        this._openShifts = value;
    };
    /**
     * Gets the openShiftsEnabled property value. Indicates whether open shifts are enabled for the schedule.
     * @returns a boolean
     */
    public get openShiftsEnabled() {
        return this._openShiftsEnabled;
    };
    /**
     * Sets the openShiftsEnabled property value. Indicates whether open shifts are enabled for the schedule.
     * @param value Value to set for the openShiftsEnabled property.
     */
    public set openShiftsEnabled(value: boolean | undefined) {
        this._openShiftsEnabled = value;
    };
    /**
     * Gets the provisionStatus property value. The status of the schedule provisioning. The possible values are notStarted, running, completed, failed.
     * @returns a operationStatus
     */
    public get provisionStatus() {
        return this._provisionStatus;
    };
    /**
     * Sets the provisionStatus property value. The status of the schedule provisioning. The possible values are notStarted, running, completed, failed.
     * @param value Value to set for the provisionStatus property.
     */
    public set provisionStatus(value: OperationStatus | undefined) {
        this._provisionStatus = value;
    };
    /**
     * Gets the provisionStatusCode property value. Additional information about why schedule provisioning failed.
     * @returns a string
     */
    public get provisionStatusCode() {
        return this._provisionStatusCode;
    };
    /**
     * Sets the provisionStatusCode property value. Additional information about why schedule provisioning failed.
     * @param value Value to set for the provisionStatusCode property.
     */
    public set provisionStatusCode(value: string | undefined) {
        this._provisionStatusCode = value;
    };
    /**
     * Gets the schedulingGroups property value. The logical grouping of users in the schedule (usually by role).
     * @returns a schedulingGroup
     */
    public get schedulingGroups() {
        return this._schedulingGroups;
    };
    /**
     * Sets the schedulingGroups property value. The logical grouping of users in the schedule (usually by role).
     * @param value Value to set for the schedulingGroups property.
     */
    public set schedulingGroups(value: SchedulingGroup[] | undefined) {
        this._schedulingGroups = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("enabled", this.enabled);
        writer.writeCollectionOfObjectValues<OfferShiftRequest>("offerShiftRequests", this.offerShiftRequests);
        writer.writeBooleanValue("offerShiftRequestsEnabled", this.offerShiftRequestsEnabled);
        writer.writeCollectionOfObjectValues<OpenShiftChangeRequest>("openShiftChangeRequests", this.openShiftChangeRequests);
        writer.writeCollectionOfObjectValues<OpenShift>("openShifts", this.openShifts);
        writer.writeBooleanValue("openShiftsEnabled", this.openShiftsEnabled);
        writer.writeCollectionOfObjectValues<SchedulingGroup>("schedulingGroups", this.schedulingGroups);
        writer.writeCollectionOfObjectValues<Shift>("shifts", this.shifts);
        writer.writeCollectionOfObjectValues<SwapShiftsChangeRequest>("swapShiftsChangeRequests", this.swapShiftsChangeRequests);
        writer.writeBooleanValue("swapShiftsRequestsEnabled", this.swapShiftsRequestsEnabled);
        writer.writeBooleanValue("timeClockEnabled", this.timeClockEnabled);
        writer.writeCollectionOfObjectValues<TimeOffReason>("timeOffReasons", this.timeOffReasons);
        writer.writeCollectionOfObjectValues<TimeOffRequest>("timeOffRequests", this.timeOffRequests);
        writer.writeBooleanValue("timeOffRequestsEnabled", this.timeOffRequestsEnabled);
        writer.writeCollectionOfObjectValues<TimeOff>("timesOff", this.timesOff);
        writer.writeStringValue("timeZone", this.timeZone);
        writer.writeCollectionOfPrimitiveValues<string>("workforceIntegrationIds", this.workforceIntegrationIds);
    };
    /**
     * Gets the shifts property value. The shifts in the schedule.
     * @returns a shift
     */
    public get shifts() {
        return this._shifts;
    };
    /**
     * Sets the shifts property value. The shifts in the schedule.
     * @param value Value to set for the shifts property.
     */
    public set shifts(value: Shift[] | undefined) {
        this._shifts = value;
    };
    /**
     * Gets the swapShiftsChangeRequests property value. The swapShiftsChangeRequests property
     * @returns a swapShiftsChangeRequest
     */
    public get swapShiftsChangeRequests() {
        return this._swapShiftsChangeRequests;
    };
    /**
     * Sets the swapShiftsChangeRequests property value. The swapShiftsChangeRequests property
     * @param value Value to set for the swapShiftsChangeRequests property.
     */
    public set swapShiftsChangeRequests(value: SwapShiftsChangeRequest[] | undefined) {
        this._swapShiftsChangeRequests = value;
    };
    /**
     * Gets the swapShiftsRequestsEnabled property value. Indicates whether swap shifts requests are enabled for the schedule.
     * @returns a boolean
     */
    public get swapShiftsRequestsEnabled() {
        return this._swapShiftsRequestsEnabled;
    };
    /**
     * Sets the swapShiftsRequestsEnabled property value. Indicates whether swap shifts requests are enabled for the schedule.
     * @param value Value to set for the swapShiftsRequestsEnabled property.
     */
    public set swapShiftsRequestsEnabled(value: boolean | undefined) {
        this._swapShiftsRequestsEnabled = value;
    };
    /**
     * Gets the timeClockEnabled property value. Indicates whether time clock is enabled for the schedule.
     * @returns a boolean
     */
    public get timeClockEnabled() {
        return this._timeClockEnabled;
    };
    /**
     * Sets the timeClockEnabled property value. Indicates whether time clock is enabled for the schedule.
     * @param value Value to set for the timeClockEnabled property.
     */
    public set timeClockEnabled(value: boolean | undefined) {
        this._timeClockEnabled = value;
    };
    /**
     * Gets the timeOffReasons property value. The set of reasons for a time off in the schedule.
     * @returns a timeOffReason
     */
    public get timeOffReasons() {
        return this._timeOffReasons;
    };
    /**
     * Sets the timeOffReasons property value. The set of reasons for a time off in the schedule.
     * @param value Value to set for the timeOffReasons property.
     */
    public set timeOffReasons(value: TimeOffReason[] | undefined) {
        this._timeOffReasons = value;
    };
    /**
     * Gets the timeOffRequests property value. The timeOffRequests property
     * @returns a timeOffRequest
     */
    public get timeOffRequests() {
        return this._timeOffRequests;
    };
    /**
     * Sets the timeOffRequests property value. The timeOffRequests property
     * @param value Value to set for the timeOffRequests property.
     */
    public set timeOffRequests(value: TimeOffRequest[] | undefined) {
        this._timeOffRequests = value;
    };
    /**
     * Gets the timeOffRequestsEnabled property value. Indicates whether time off requests are enabled for the schedule.
     * @returns a boolean
     */
    public get timeOffRequestsEnabled() {
        return this._timeOffRequestsEnabled;
    };
    /**
     * Sets the timeOffRequestsEnabled property value. Indicates whether time off requests are enabled for the schedule.
     * @param value Value to set for the timeOffRequestsEnabled property.
     */
    public set timeOffRequestsEnabled(value: boolean | undefined) {
        this._timeOffRequestsEnabled = value;
    };
    /**
     * Gets the timesOff property value. The instances of times off in the schedule.
     * @returns a timeOff
     */
    public get timesOff() {
        return this._timesOff;
    };
    /**
     * Sets the timesOff property value. The instances of times off in the schedule.
     * @param value Value to set for the timesOff property.
     */
    public set timesOff(value: TimeOff[] | undefined) {
        this._timesOff = value;
    };
    /**
     * Gets the timeZone property value. Indicates the time zone of the schedule team using tz database format. Required.
     * @returns a string
     */
    public get timeZone() {
        return this._timeZone;
    };
    /**
     * Sets the timeZone property value. Indicates the time zone of the schedule team using tz database format. Required.
     * @param value Value to set for the timeZone property.
     */
    public set timeZone(value: string | undefined) {
        this._timeZone = value;
    };
    /**
     * Gets the workforceIntegrationIds property value. The workforceIntegrationIds property
     * @returns a string
     */
    public get workforceIntegrationIds() {
        return this._workforceIntegrationIds;
    };
    /**
     * Sets the workforceIntegrationIds property value. The workforceIntegrationIds property
     * @param value Value to set for the workforceIntegrationIds property.
     */
    public set workforceIntegrationIds(value: string[] | undefined) {
        this._workforceIntegrationIds = value;
    };
}
