import { TokenCredential, AccessToken } from "@azure/core-auth";
import * as msalBrowser from "@azure/msal-browser";

export class BrowserCredential implements TokenCredential {
    private publicApp: msalBrowser.PublicClientApplication;
    private hasAuthenticated: boolean = false;

    constructor(clientId: string, redirectUri: string) {
        this.publicApp = new msalBrowser.PublicClientApplication({
            auth: {
                clientId,
                redirectUri
            }
        });
    }

    // Either confirm the account already exists in memory, or tries to parse the redirect URI values.
    async prepare(): Promise<void> {
        try {
            if (this.publicApp.getAllAccounts()) {
                this.hasAuthenticated = true;
                return;
            }
            await this.publicApp.handleRedirectPromise();
            this.hasAuthenticated = true;
        } catch (e) {
            console.error("BrowserCredential prepare() failed", e);
        }
    }

    // Should be true if prepare() was successful.
    isAuthenticated(): boolean {
        return this.hasAuthenticated;
    }

    // If called, triggers authentication via redirection.
    async loginRedirect(scopes: string | string[]): Promise<void> {
        const loginRequest = {
            scopes: Array.isArray(scopes) ? scopes : [scopes]
        };
        await this.publicApp.loginRedirect(loginRequest);
    }

    // Tries to retrieve the token without triggering a redirection.
    async getToken(scopes: string[]): Promise<AccessToken> {
        if (!this.hasAuthenticated) {
            throw new Error("Authentication required");
        }
        const account = this.publicApp.getAllAccounts()[0];
        if (!account) { throw new Error("No active account"); }
        const parameters: msalBrowser.SilentRequest = {
            account,
            scopes
        };

        const result = await this.publicApp.acquireTokenSilent(parameters);
        const expiresOnTimestamp = result.expiresOn?.getTime();
        if (!expiresOnTimestamp) { throw new Error("No expiration date"); }
        return {
            token: result.accessToken,
            expiresOnTimestamp
        };
    }
}
