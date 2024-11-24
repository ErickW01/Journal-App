"use client"
import React from "react";
import { authClient } from "@/app/lib/auth-client";

export default function SignInBtn() {
    const signIn = async() => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: '/personal-journal'
        });
    };
    return(
        <div>
            <button onClick={signIn}>
                Sign In w/ Google
            </button>
        </div>
    )
}