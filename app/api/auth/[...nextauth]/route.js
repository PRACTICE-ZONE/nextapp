
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";


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
            return true
        }
    }

})