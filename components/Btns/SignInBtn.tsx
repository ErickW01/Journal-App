import React from "react";
import { signIn, signOut } from "@/auth.config";

const authBtn = (loggedIn:boolean = false) => {
        return(
        <a
            href="/"
            className="text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
            {!loggedIn ?  'Log In': 'Log Out'}
        </a>
        )
    }

    export function SignIn({
        provider,
    }: {provider?: string}) {
        return(<>
        <form
        action={async () => {
            "use server"
            await signIn(provider)
        }}>
            {authBtn()}
        </form>
        </>)
    }

    export function SignOut() {
        return(<>
            <form
            action={async () => {
                "use server"
                await signOut()
            }}>
                {authBtn(true)}
            </form>
            </>)
    }

