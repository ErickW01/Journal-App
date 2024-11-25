import { createAuthClient } from "better-auth/react"

export const {signIn, signOut, signUp, useSession} = createAuthClient({
    baseURL: process.env.BASE_URL!
})