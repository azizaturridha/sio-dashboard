import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
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
            "https://www.googleapis.com/auth/analytics.readonly",
          ].join(" "),
          access_type: "offline",
          prompt: "consent",
        },
      },
    }),
  ],

  callbacks: {
  async jwt({ token, account }: any) {
    if (account) {
      (token as any).accessToken =
        account.access_token;

      (token as any).refreshToken =
        account.refresh_token;
    }

    return token;
  },

  async session({ session, token }: any) {
    (session as any).accessToken =
      (token as any).accessToken;

    (session as any).refreshToken =
      (token as any).refreshToken;

    return session;
  },
},

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
