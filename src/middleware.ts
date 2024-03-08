import { NextResponse, NextRequest } from "next/server"

export default function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl
    // const pathnameHasLocale = locales.some(
    //   (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    // )
    console.log("pathname", pathname)
    // if (pathnameHasLocale) return

    // // Redirect if there is no locale
    // const locale = getLocale(request)
    // request.nextUrl.pathname = `/${locale}${pathname}`
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(request.nextUrl)
}

console.log("middleware.ts")
export const config = {
    matcher: [
        // Skip all internal paths (_next)
        "/((?!_next).*)",
        // Optional: only run on root (/) URL
        // '/'
    ],
}
