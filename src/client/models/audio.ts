import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Audio implements Parsable {
    /** The title of the album for this audio file. */
    private _album?: string | undefined;
    /** The artist named on the album for the audio file. */
    private _albumArtist?: string | undefined;
    /** The performing artist for the audio file. */
    private _artist?: string | undefined;
    /** Bitrate expressed in kbps. */
    private _bitrate?: number | undefined;
    /** The name of the composer of the audio file. */
    private _composers?: string | undefined;
    /** Copyright information for the audio file. */
    private _copyright?: string | undefined;
    /** The number of the disc this audio file came from. */
    private _disc?: number | undefined;
    /** The total number of discs in this album. */
    private _discCount?: number | undefined;
    /** Duration of the audio file, expressed in milliseconds */
    private _duration?: number | undefined;
    /** The genre of this audio file. */
    private _genre?: string | undefined;
    /** Indicates if the file is protected with digital rights management. */
    private _hasDrm?: boolean | undefined;
    /** Indicates if the file is encoded with a variable bitrate. */
    private _isVariableBitrate?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The title of the audio file. */
    private _title?: string | undefined;
    /** The number of the track on the original disc for this audio file. */
    private _track?: number | undefined;
    /** The total number of tracks on the original disc for this audio file. */
    private _trackCount?: number | undefined;
    /** The year the audio file was recorded. */
    private _year?: number | undefined;
    /**
     * Gets the album property value. The title of the album for this audio file.
     * @returns a string
     */
    public get album() {
        return this._album;
    };
    /**
     * Sets the album property value. The title of the album for this audio file.
     * @param value Value to set for the album property.
     */
    public set album(value: string | undefined) {
        this._album = value;
    };
    /**
     * Gets the albumArtist property value. The artist named on the album for the audio file.
     * @returns a string
     */
    public get albumArtist() {
        return this._albumArtist;
    };
    /**
     * Sets the albumArtist property value. The artist named on the album for the audio file.
     * @param value Value to set for the albumArtist property.
     */
    public set albumArtist(value: string | undefined) {
        this._albumArtist = value;
    };
    /**
     * Gets the artist property value. The performing artist for the audio file.
     * @returns a string
     */
    public get artist() {
        return this._artist;
    };
    /**
     * Sets the artist property value. The performing artist for the audio file.
     * @param value Value to set for the artist property.
     */
    public set artist(value: string | undefined) {
        this._artist = value;
    };
    /**
     * Gets the bitrate property value. Bitrate expressed in kbps.
     * @returns a int64
     */
    public get bitrate() {
        return this._bitrate;
    };
    /**
     * Sets the bitrate property value. Bitrate expressed in kbps.
     * @param value Value to set for the bitrate property.
     */
    public set bitrate(value: number | undefined) {
        this._bitrate = value;
    };
    /**
     * Gets the composers property value. The name of the composer of the audio file.
     * @returns a string
     */
    public get composers() {
        return this._composers;
    };
    /**
     * Sets the composers property value. The name of the composer of the audio file.
     * @param value Value to set for the composers property.
     */
    public set composers(value: string | undefined) {
        this._composers = value;
    };
    /**
     * Instantiates a new audio and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.audio";
    };
    /**
     * Gets the copyright property value. Copyright information for the audio file.
     * @returns a string
     */
    public get copyright() {
        return this._copyright;
    };
    /**
     * Sets the copyright property value. Copyright information for the audio file.
     * @param value Value to set for the copyright property.
     */
    public set copyright(value: string | undefined) {
        this._copyright = value;
    };
    /**
     * Gets the disc property value. The number of the disc this audio file came from.
     * @returns a integer
     */
    public get disc() {
        return this._disc;
    };
    /**
     * Sets the disc property value. The number of the disc this audio file came from.
     * @param value Value to set for the disc property.
     */
    public set disc(value: number | undefined) {
        this._disc = value;
    };
    /**
     * Gets the discCount property value. The total number of discs in this album.
     * @returns a integer
     */
    public get discCount() {
        return this._discCount;
    };
    /**
     * Sets the discCount property value. The total number of discs in this album.
     * @param value Value to set for the discCount property.
     */
    public set discCount(value: number | undefined) {
        this._discCount = value;
    };
    /**
     * Gets the duration property value. Duration of the audio file, expressed in milliseconds
     * @returns a int64
     */
    public get duration() {
        return this._duration;
    };
    /**
     * Sets the duration property value. Duration of the audio file, expressed in milliseconds
     * @param value Value to set for the duration property.
     */
    public set duration(value: number | undefined) {
        this._duration = value;
    };
    /**
     * Gets the genre property value. The genre of this audio file.
     * @returns a string
     */
    public get genre() {
        return this._genre;
    };
    /**
     * Sets the genre property value. The genre of this audio file.
     * @param value Value to set for the genre property.
     */
    public set genre(value: string | undefined) {
        this._genre = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "album": n => { this.album = n.getStringValue(); },
            "albumArtist": n => { this.albumArtist = n.getStringValue(); },
            "artist": n => { this.artist = n.getStringValue(); },
            "bitrate": n => { this.bitrate = n.getNumberValue(); },
            "composers": n => { this.composers = n.getStringValue(); },
            "copyright": n => { this.copyright = n.getStringValue(); },
            "disc": n => { this.disc = n.getNumberValue(); },
            "discCount": n => { this.discCount = n.getNumberValue(); },
            "duration": n => { this.duration = n.getNumberValue(); },
            "genre": n => { this.genre = n.getStringValue(); },
            "hasDrm": n => { this.hasDrm = n.getBooleanValue(); },
            "isVariableBitrate": n => { this.isVariableBitrate = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "title": n => { this.title = n.getStringValue(); },
            "track": n => { this.track = n.getNumberValue(); },
            "trackCount": n => { this.trackCount = n.getNumberValue(); },
            "year": n => { this.year = n.getNumberValue(); },
        };
    };
    /**
     * Gets the hasDrm property value. Indicates if the file is protected with digital rights management.
     * @returns a boolean
     */
    public get hasDrm() {
        return this._hasDrm;
    };
    /**
     * Sets the hasDrm property value. Indicates if the file is protected with digital rights management.
     * @param value Value to set for the hasDrm property.
     */
    public set hasDrm(value: boolean | undefined) {
        this._hasDrm = value;
    };
    /**
     * Gets the isVariableBitrate property value. Indicates if the file is encoded with a variable bitrate.
     * @returns a boolean
     */
    public get isVariableBitrate() {
        return this._isVariableBitrate;
    };
    /**
     * Sets the isVariableBitrate property value. Indicates if the file is encoded with a variable bitrate.
     * @param value Value to set for the isVariableBitrate property.
     */
    public set isVariableBitrate(value: boolean | undefined) {
        this._isVariableBitrate = value;
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
        writer.writeStringValue("album", this.album);
        writer.writeStringValue("albumArtist", this.albumArtist);
        writer.writeStringValue("artist", this.artist);
        writer.writeNumberValue("bitrate", this.bitrate);
        writer.writeStringValue("composers", this.composers);
        writer.writeStringValue("copyright", this.copyright);
        writer.writeNumberValue("disc", this.disc);
        writer.writeNumberValue("discCount", this.discCount);
        writer.writeNumberValue("duration", this.duration);
        writer.writeStringValue("genre", this.genre);
        writer.writeBooleanValue("hasDrm", this.hasDrm);
        writer.writeBooleanValue("isVariableBitrate", this.isVariableBitrate);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("title", this.title);
        writer.writeNumberValue("track", this.track);
        writer.writeNumberValue("trackCount", this.trackCount);
        writer.writeNumberValue("year", this.year);
    };
    /**
     * Gets the title property value. The title of the audio file.
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. The title of the audio file.
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
    /**
     * Gets the track property value. The number of the track on the original disc for this audio file.
     * @returns a integer
     */
    public get track() {
        return this._track;
    };
    /**
     * Sets the track property value. The number of the track on the original disc for this audio file.
     * @param value Value to set for the track property.
     */
    public set track(value: number | undefined) {
        this._track = value;
    };
    /**
     * Gets the trackCount property value. The total number of tracks on the original disc for this audio file.
     * @returns a integer
     */
    public get trackCount() {
        return this._trackCount;
    };
    /**
     * Sets the trackCount property value. The total number of tracks on the original disc for this audio file.
     * @param value Value to set for the trackCount property.
     */
    public set trackCount(value: number | undefined) {
        this._trackCount = value;
    };
    /**
     * Gets the year property value. The year the audio file was recorded.
     * @returns a integer
     */
    public get year() {
        return this._year;
    };
    /**
     * Sets the year property value. The year the audio file was recorded.
     * @param value Value to set for the year property.
     */
    public set year(value: number | undefined) {
        this._year = value;
    };
}
