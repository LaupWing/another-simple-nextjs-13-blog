"use client"
import { useParams, useRouter, useSelectedLayoutSegment } from "next/navigation"
import { FC, useEffect, useState } from "react"
import clsx from "clsx"
import { UnstyledLink } from "./links/UnstyledLink.client"
import { ThemeButton } from "./buttons/ThemeButton.client"
import { SortListBox, SortOption } from "./elements/SortListBox.client"
import { IconBike, IconEarth } from "./Icons"

interface HeaderProps {
    large?: boolean
}

const sortOptions: Array<SortOption> = [
    {
        id: "en",
        name: "EN",
        icon: IconEarth,
    },
    {
        id: "nl",
        name: "NL",
        icon: IconBike,
    },
]

export const Header: FC<HeaderProps> = () => {
    const [onTop, setOnTop] = useState<boolean>(false)
    const activeSegment = useSelectedLayoutSegment()
    const [sortOrder, setSortOrder] = useState<SortOption>(() => sortOptions[0])
    const router = useRouter()
    const param = useParams()
    console.log(param)

    useEffect(() => {
        const handleScroll = () => {
            setOnTop(window.scrollY > 0)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const links = [
        {
            href: "/",
            label: "Home",
            segement: null,
        },
        {
            href: "/blog",
            label: "Blog",
            segement: "blog",
        },
        {
            href: "/projects",
            label: "Projects",
            segement: "projects",
        },
        {
            href: "/library",
            label: "Library",
            segement: "library",
        },
        {
            href: "/about",
            label: "About",
            segement: "about",
        },
        {
            href: "/contact",
            label: "Contact",
            segement: "contact",
        },
    ]

    const handleLocaleChange = (e: SortOption) => {
        console.log(e)
        router.push("/", {
            lang: "en",
        })
    }

    return (
        <header
            className={clsx(
                "sticky top-0 flex flex-col z-50 h-nav transition-shadow bg-light dark:bg-dark",
                onTop && "shadow-sm",
            )}
        >
            <div className="gradient-animation w-full h-1.5 bg-red-400" />
            <nav className="custom-container flex-1 flex items-center justify-between text-dark dark:text-light">
                <ul className="flex items-center justify-between gap-3 text-xs md:gap-6 md:text-base">
                    {links.map(({ href, label, segement }) => (
                        <li className="pb-2" key={`${href}-${label}`}>
                            <UnstyledLink href={`/${param.lang}/${href}`}>
                                {label}
                            </UnstyledLink>
                            {activeSegment === segement ? (
                                <div className="h-[3px] gradient-animation-slow w-full shadow" />
                            ) : (
                                <div className="h-[3px]" />
                            )}
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-2">
                    <ThemeButton />
                    <div className="relative z-10 flex flex-col items-end gap-4 text-gray-600 dark:text-gray-300 md:flex-row md:items-center md:justify-between">
                        <SortListBox
                            className="ml-auto"
                            selected={sortOrder}
                            setSelected={handleLocaleChange}
                            options={sortOptions}
                        />
                    </div>
                </div>
            </nav>
        </header>
    )
}
