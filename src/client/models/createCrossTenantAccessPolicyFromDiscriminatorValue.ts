import {CrossTenantAccessPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCrossTenantAccessPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CrossTenantAccessPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CrossTenantAccessPolicy();
}
