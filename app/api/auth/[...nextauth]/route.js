
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectToDatabase } from "@utils/database";


const handler = NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ],

    // https://next-auth.js.org/configuration/callbacks
    callbacks: {
        async session({session}) {
            return true
        },
        async signIn( { profile }) {
            try {
                await connectToDatabase();

                // check if a user is already exists

                // if not, create a new user
            }

            catch(error) {

            }
        }
    }

})

export  { handler as GET, handler as POST }