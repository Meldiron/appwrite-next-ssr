import { Client, Account, ID } from "appwrite";

export const APPWRITE_PROJECT_ID = "appwriteSsr";
export const APPWRITE_ENDPOINT = "https://appwrite-next-ssr.matejbaco.eu/v1";
export const APPWRITE_HOSTNAME = "appwrite-next-ssr.matejbaco.eu"; // Used by SSR

const client = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT_ID);

const account = new Account(client);

export const AppwriteService = {
    getAccount: async () => {
        return await account.get();
    }
}
