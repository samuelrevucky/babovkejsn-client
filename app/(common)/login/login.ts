"use server";

import axios from "axios";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function login(email: string, password: string, rememberMe: boolean) {
    "use server";
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
            redirect("/user/profile");
        }
        else {
            throw Error;
        }
    })
}