import {AssociatedTeamInfo, SharedWithChannelTeamInfo, TeamInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.associatedTeamInfo":
                    return new AssociatedTeamInfo();
                case "#microsoft.graph.sharedWithChannelTeamInfo":
                    return new SharedWithChannelTeamInfo();
            }
        }
    }
    return new TeamInfo();
}
