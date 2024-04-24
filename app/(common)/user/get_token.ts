import { cookies } from "next/headers";

export function getToken() {
    "use server";
    const cookieStore = cookies();
    return cookieStore.get('authtoken')?.value;
}