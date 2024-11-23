import { SignIn, SignOut } from "./SignInBtn";
import { getSession } from "next-auth/react";

export default async function UserBtn() {
    const session = await getSession();

    if(!session?.user) return <SignIn/>
    return <SignOut/>
}