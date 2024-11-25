"use client"
import React from "react";
import { signIn } from "@/app/lib/auth-client";

export default function SignInBtn() {

    return(
        <div>
            <button onClick={async() => {
                await signIn.social({
                    provider: "google",
                    callbackURL: '/personal-journal'
                })
            }}>
                Sign In w/ Google
            </button>
        </div>
    )
}