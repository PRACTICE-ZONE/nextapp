import {  NextAuth } from "next-auth/next";

const handler = NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
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