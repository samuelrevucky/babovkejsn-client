import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers';

export function middleware(request: NextRequest) {
    const cookieStore = cookies();
    if (request.nextUrl.pathname.startsWith('/user')) {
        const token: string | undefined = request.cookies.get('authtoken')?.value;
        if (token === undefined) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }
    if (request.nextUrl.pathname.startsWith('/login')) {
        if (request.cookies.has('authtoken')) {
            return NextResponse.redirect(new URL('/user/profile', request.url));
        }
    }
}