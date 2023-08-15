import { signIn, signOut, useSession } from 'next-auth/client';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Google({
      clientId: 'YOUR_GOOGLE_CLIENT_ID',
      clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
    }),
  ],
  // Other NextAuth.js options if needed
};

export default (req, res) => NextAuth(req, res, options);
