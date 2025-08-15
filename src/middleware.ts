import { auth } from './auth'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
    const session = await auth();
    if (!session?.user) {
        return NextResponse.redirect(new URL('/i/flow/login', request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: [ '/compose/tweet', 
        '/home',
        '/explore',
        '/messages',
        '/search',
     ]
}