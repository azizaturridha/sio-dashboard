import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: [
            "openid",
            "email",
            "profile",
            "https://www.googleapis.com/auth/webmasters.readonly",
          ].join(" "),
          access_type: "offline",
          prompt: "consent",
        },
      },
    }),
  ],

  callbacks: {
    async jwt({ token, account }) {

      console.log("=================================");
      console.log("JWT CALLBACK");
      console.log("ACCOUNT =", account);
      console.log("TOKEN BEFORE =", token);

      if (account) {
        (token as any).accessToken = account.access_token;
      }

      console.log("TOKEN AFTER =", token);
      console.log("=================================");

      return token;
    },

    async session({ session, token }) {

      console.log("=================================");
      console.log("SESSION CALLBACK");
      console.log("TOKEN =", token);

      (session as any).accessToken =
        (token as any).accessToken;

      console.log("SESSION =", session);
      console.log("=================================");

      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };