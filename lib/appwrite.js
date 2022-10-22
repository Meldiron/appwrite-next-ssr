import { Client, Account, ID } from "appwrite";

export const APPWRITE_PROJECT_ID = "appwriteSsr";
export const APPWRITE_ENDPOINT = "https://demo.appwrite.io/v1";
export const APPWRITE_HOSTNAME = "demo.appwrite.io"; // Used by SSR

const client = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT_ID);

const account = new Account(client);

export const AppwriteService = {
    getAccount: async () => {
        return await account.get();
    }
}
