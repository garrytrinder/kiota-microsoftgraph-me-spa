import {IosLobAppAssignmentSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosLobAppAssignmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosLobAppAssignmentSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosLobAppAssignmentSettings();
}
