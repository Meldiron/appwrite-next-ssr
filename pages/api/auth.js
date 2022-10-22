import {
  APPWRITE_ENDPOINT,
  APPWRITE_PROJECT_ID,
  APPWRITE_HOSTNAME,
} from "../../lib/appwrite";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // You could get email and password here
    // const { email, password } = req.body;

    // TODO: Forward location headers
    const request = await fetch(
      APPWRITE_ENDPOINT + "/account/sessions/anonymous",
      {
        method: "POST",
        headers: {
          "x-appwrite-project": APPWRITE_PROJECT_ID,
        },
      }
    );

    const response = await request.json();

    const hostname = req.headers.host.split(":")[0];
    const cookie = request.headers
      .get("set-cookie")
      .split("." + APPWRITE_HOSTNAME)
      .join(hostname === "localhost" ? hostname : "." + hostname);

    res.setHeader("set-cookie", cookie);
    res.status(200).json({
      ...response,
    });
  } else {
    res.status(404);
  }
}
