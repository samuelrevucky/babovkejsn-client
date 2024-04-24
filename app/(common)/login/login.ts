"use server";

import axios from "axios";
import { useRouter } from "next/navigation";
import { cookies } from "next/headers";

export async function Login(email: string, password: string, rememberMe: boolean) {
    "use server";
    const router = useRouter();
    const cookieStore = cookies();
    await axios.post(process.env.SERVER + '/api/authenticate', {
        mail: email,
        password: password,
        rememberMe: rememberMe
    }, { 
        withCredentials: true,
    })
    .then(function (response) {
        if (response.data.authenticated) {
            cookieStore.set('authtoken', response.data.token, )
            router.push("/user/profile");
            router.refresh();
        }
        else {
            throw Error;
        }
    })
}