import { google } from "googleapis";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!(session as any)?.accessToken) {
    return Response.json(
      { error: "Access token tidak ditemukan" },
      { status: 401 }
    );
  }

  const oauth2Client = new google.auth.OAuth2();

  oauth2Client.setCredentials({
    access_token: (session as any).accessToken,
  });

  const searchconsole = google.searchconsole({
    version: "v1",
    auth: oauth2Client,
  });

  const result = await searchconsole.searchanalytics.query({
    siteUrl: "sc-domain:sio.co.id",
    requestBody: {
      startDate: "2026-03-01",
      endDate: "2026-06-11",
    },
  });

  return Response.json(result.data);
}
