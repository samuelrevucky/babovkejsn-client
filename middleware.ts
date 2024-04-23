import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers';

export function middleware(request: NextRequest) {
    const cookieStore = cookies();
    console.log("middleware");
    console.log(request.cookies);
    console.log(cookieStore.getAll());
    if (request.nextUrl.pathname.startsWith('/user')) {
        const token: string | undefined = request.cookies.get('authtoken')?.value;
        if (token === undefined) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
        else {
            console.log("ahoj");
            console.log(jwt.decode(token));
        }
    }
    if (request.nextUrl.pathname.startsWith('/login')) {
        if (request.cookies.has('authtoken')) {
            return NextResponse.redirect(new URL('/user/profile', request.url));
        }
    }
}
/*
export const config = {
    matcher: ['/user', '/user/profile', '/user/order', '/user/modify_udata', '/user/history'],
}
*/