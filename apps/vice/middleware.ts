
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export async function middleware(request: NextRequest) {
    const secret = process.env.JWT_SECRET;
    const token = await getToken({req: request, secret});
    if(!token){
        return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
}


export const config = {
    matcher: ['/chat', '/imageChecker', '/contact', '/profile', '/api/auth/signout']
};
