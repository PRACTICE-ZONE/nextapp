
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectToDatabase } from "@utils/database";
import User  from "@models/user";


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
                const user = await User.findOne({ email: profile.email })

                // if not, create a new user

                // return true
                return true
            }

            catch(error) {
                console.log(error)
                return false
            }
        }
    }

})

export  { handler as GET, handler as POST }