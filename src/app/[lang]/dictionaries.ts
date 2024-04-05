import "server-only"
import enDictionary from "./dictionaries/en.json"
import nlDictionary from "./dictionaries/nl.json"
import { Locale } from "@/i18.config"

const dictionaries: Record<Locale, () => Promise<typeof enDictionary>> = {
    en: () => Promise.resolve(enDictionary),
    nl: () => Promise.resolve(nlDictionary),
}

export const getDictionary = async (locale: keyof typeof dictionaries) =>
    dictionaries[locale]()
