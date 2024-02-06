"use client"
import type { FC } from "react"

import { LikeButton } from "../buttons/LikeButton.client"
import { useEffect, useState } from "react"
import { LikeButtonLoading } from "../buttons/LikeButtonLoading"

interface LikesProps {
    slug: string
}

export const Likes: FC<LikesProps> = ({ slug }) => {
    const [data, setData] = useState({
        all_likes: 0,
        likes_by_user: 0,
    })
    const [loading, setLoading] = useState(true)

    const fetchLikes = async () => {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/like/${slug}`,
            {
                method: "GET",
            },
        )
        const data = await res.json()
        setData(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchLikes()
    }, [])

    return loading ? (
        <LikeButtonLoading />
    ) : (
        <LikeButton
            all_likes={data.all_likes}
            likes_by_user={data.likes_by_user}
        />
    )
}
