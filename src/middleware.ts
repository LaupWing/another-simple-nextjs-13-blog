import { NextResponse, NextRequest } from "next/server"
import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"
import { i18n } from "./i18.config"

function getLocale(request: NextRequest): string | undefined {
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))
    // @ts-ignore locales are readonly
    const locales: string[] = i18n.locales
    console.log(locales)
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
    console.log(negotiatorHeaders)
    console.log(languages)
    const locale = match(languages, locales, i18n.defaultLocale)
    console.log(locale)
    console.log("locale", locale)
    return locale
}

export default function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) =>
            !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    )

    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)
        request.nextUrl.pathname = `/${locale}${pathname}`

        return NextResponse.redirect(
            new URL(
                `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
                request.url,
            ),
        )
    }
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
