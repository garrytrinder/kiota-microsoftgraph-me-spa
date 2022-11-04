import {EmailAuthenticationMethod} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEmailAuthenticationMethodFromDiscriminatorValue(parseNode: ParseNode | undefined) : EmailAuthenticationMethod {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EmailAuthenticationMethod();
}
