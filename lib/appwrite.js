import { Client, Account, ID } from "appwrite";

export const APPWRITE_PROJECT_ID = "appwriteSsr";
export const APPWRITE_ENDPOINT = "https://api.appwrite-next-ssr.matejbaco.eu/v1";

// Used by SSR
export const APP_HOSTNAME = "appwrite-next-ssr.matejbaco.eu"; 
export const APPWRITE_HOSTNAME = "api.appwrite-next-ssr.matejbaco.eu"; // Must be subdomain of APP_HOSTNAME

const client = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT_ID);

const account = new Account(client);

export const AppwriteService = {
    setSession: (hash) => {
      const authCookies = {};
      authCookies['a_session_' + APPWRITE_PROJECT_ID] = hash;
      client.headers['X-Fallback-Cookies'] = JSON.stringify(authCookies);
    },
    getAccount: async () => {
        return await account.get();
    },
    deleteSession: async () => {
        return await account.deleteSession('current');
    }
}
