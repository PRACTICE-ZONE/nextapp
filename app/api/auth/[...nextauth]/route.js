import {  NextAuth } from "next-auth/next";

const handler = NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        // ...add more providers here
    ],
    // A database is optional, but required to persist accounts in a database
    database: process.env.DATABASE_URL,

    // https://next-auth.js.org/configuration/callbacks
    callbacks: {
        async signIn(user, account, profile) {
            return true
        }
    }

    // https://next-auth.js.org/configuration/options
    // options: { ... }

    
})