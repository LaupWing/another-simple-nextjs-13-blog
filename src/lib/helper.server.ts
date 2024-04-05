import { createHash } from "crypto"
import { z } from "zod"
import { prisma_client } from "./prisma"
import { existsSync } from "fs"

export const getSessionId = (req: Request) => {
    const ip_address = req.headers.get("x-forwarded-for") || "0.0.0.0"

    const current_user_id = createHash("md5")
        .update(ip_address + (process.env.IP_ADDRESS_SALT as string), "utf8")
        .digest("hex")
    return current_user_id
}

export const extractSlug = (req: Request) => {
    console.log(req.url)
    const splitted = req.url.split("/")
    const available_endpoints = ["content", "like", "view"]

    if (available_endpoints.includes(splitted[splitted.length - 2])) {
        const slug = z.string().parse(splitted[splitted.length - 1])
        return slug
    } else {
        throw new Error("Not a content API endpoint")
    }
}

export const getUserLikeCount = async ({
    session_id,
    slug,
}: {
    session_id: string
    slug: string
}) => {
    return await prisma_client.like.count({
        where: {
            session_id: session_id,
            ContentMeta: {
                slug: slug,
            },
        },
    })
}

export const checkIfContentDirectoryExists = async (
    lang: string,
    type: string,
) => {
    const directory_path = `src/contents/${type}/${lang}`
    return existsSync(directory_path)
}
