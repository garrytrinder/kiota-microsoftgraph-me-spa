import {createFolderViewFromDiscriminatorValue} from './createFolderViewFromDiscriminatorValue';
import {FolderView} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Folder implements Parsable {
    /** Number of children contained immediately within this container. */
    private _childCount?: number | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** A collection of properties defining the recommended view for the folder. */
    private _view?: FolderView | undefined;
    /**
     * Gets the childCount property value. Number of children contained immediately within this container.
     * @returns a integer
     */
    public get childCount() {
        return this._childCount;
    };
    /**
     * Sets the childCount property value. Number of children contained immediately within this container.
     * @param value Value to set for the childCount property.
     */
    public set childCount(value: number | undefined) {
        this._childCount = value;
    };
    /**
     * Instantiates a new folder and sets the default values.
     */
    public constructor() {
        this.odataType = "#microsoft.graph.folder";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "childCount": n => { this.childCount = n.getNumberValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "view": n => { this.view = n.getObjectValue<FolderView>(createFolderViewFromDiscriminatorValue); },
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
        writer.writeNumberValue("childCount", this.childCount);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<FolderView>("view", this.view);
    };
    /**
     * Gets the view property value. A collection of properties defining the recommended view for the folder.
     * @returns a folderView
     */
    public get view() {
        return this._view;
    };
    /**
     * Sets the view property value. A collection of properties defining the recommended view for the folder.
     * @param value Value to set for the view property.
     */
    public set view(value: FolderView | undefined) {
        this._view = value;
    };
}
