import { NextResponse, NextRequest } from "next/server"
import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

const locales = ["en-US", "nl-NL", "nl"]
function getLocale(request: NextRequest): string | undefined {
    let headers = { "accept-language": "en-US,en;q=0.5" }
    let languages = new Negotiator({ headers }).languages()
    let defaultLocale = "en-US"
    const locale = match(languages, locales, defaultLocale)
    return locale
}
// console.log(match(languages, locales, defaultLocale))

export default function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl
    const pathnameHasLocale = locales.some(
        (locale) =>
            pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
    )
    console.log("pathnameHasLocale", pathnameHasLocale)
    // console.log("pathname", pathname)
    // if (pathnameHasLocale) return

    // // Redirect if there is no locale
    const locale = getLocale(request)
    console.log("locale", locale)
    return
    // request.nextUrl.pathname = `/${locale}${pathname}`
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        "/((?!_next).*)",
        // Optional: only run on root (/) URL
        // '/'
    ],
}
