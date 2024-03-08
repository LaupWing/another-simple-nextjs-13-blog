import { NextResponse, NextRequest } from "next/server"
import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"
import { i18n } from "./i18.config"

const locales = ["en-US", "nl-NL", "nl"]
function getLocale(request: NextRequest): string | undefined {
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))
    // @ts-ignore locales are readonly
    const locales: string[] = i18n.locales
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
    const locale = match(languages, locales, i18n.defaultLocale)
    return locale
}
// console.log(match(languages, locales, defaultLocale))

export default function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) =>
            !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    )

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)

        console.log(
            new URL(
                `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
                request.url,
            ),
        )
        // if (locale === i18n.defaultLocale) {
        //     return NextResponse.rewrite(
        //         new URL(
        //             `/${locale}${
        //                 pathname.startsWith("/") ? "" : "/"
        //             }${pathname}`,
        //             request.url,
        //         ),
        //     )
        // }
        request.nextUrl.pathname = `/${locale}${pathname}`
        // console.log(request.nextUrl)
        return NextResponse.redirect(request.nextUrl)
    }
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        "/((?!_next).*)",
        // Optional: only run on root (/) URL
        // '/'
    ],
}
