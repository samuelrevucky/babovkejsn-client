"use server";

import { cookies } from "next/headers";

export async function getToken() {
    "use server";
    const cookieStore = cookies();
    return cookieStore.get('authtoken')?.value;
}