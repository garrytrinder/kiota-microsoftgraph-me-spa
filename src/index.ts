import { AzureIdentityAuthenticationProvider } from '@microsoft/kiota-authentication-azure';
import { FetchRequestAdapter } from '@microsoft/kiota-http-fetchlibrary';
import { BrowserCredential } from './auth/BrowserCredential';
import { ApiClient } from './client/apiClient';

const clientId = process.env.CLIENT_ID;
if (!clientId) { throw new Error("Missing CLIENT_ID environment variable"); }
// The auth provider will only authorize requests to
// the allowed hosts, in this case Microsoft Graph
const allowedHosts = new Set<string>(['graph.microsoft.com']);
const graphScopes = ['User.Read'];

const browserCredential = new BrowserCredential(clientId, location.origin);

const authProvider =
  new AzureIdentityAuthenticationProvider(browserCredential, graphScopes, undefined, allowedHosts);

const adapter = new FetchRequestAdapter(authProvider);

const client = new ApiClient(adapter);

const getDataHandler = async (e) => {
  //login if not authenticated
  e.preventDefault();
  await browserCredential.prepare();

  if (!browserCredential.isAuthenticated()) {
    await browserCredential.loginRedirect("https://graph.microsoft.com/User.Read");
  }

  try {
    const me = await client.me.get();
    const pre = document.getElementById('data');
    if (pre) { pre.innerHTML = JSON.stringify(me, null, 2); }
  } catch (err) {
    console.log(err);
  }
}

const button = document.getElementById('getdata');
if (button) { button.addEventListener('click', getDataHandler) };
