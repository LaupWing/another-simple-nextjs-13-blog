"use client"
import { useSelectedLayoutSegment } from "next/navigation"
import { FC, useEffect, useState } from "react"
import clsx from "clsx"
import { UnstyledLink } from "./links/UnstyledLink.client"
import { ThemeButton } from "./buttons/ThemeButton.client"
import { SortListBox, SortOption } from "./elements/SortListBox.client"
import { IconCalendar, IconEye } from "./Icons"

interface HeaderProps {
    large?: boolean
}

const sortOptions: Array<SortOption> = [
    {
        id: "date",
        name: "Sort by date",
        icon: IconCalendar,
    },
    {
        id: "views",
        name: "Sort by views",
        icon: IconEye,
    },
]

export const Header: FC<HeaderProps> = () => {
    const [onTop, setOnTop] = useState<boolean>(false)
    const activeSegment = useSelectedLayoutSegment()
    const [sortOrder, setSortOrder] = useState<SortOption>(() => sortOptions[0])

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
                            <UnstyledLink href={href}>{label}</UnstyledLink>
                            {activeSegment === segement ? (
                                <div className="h-[3px] gradient-animation-slow w-full shadow" />
                            ) : (
                                <div className="h-[3px]" />
                            )}
                        </li>
                    ))}
                </ul>
                <ThemeButton />
                <div className="relative z-10 mt-6 flex flex-col items-end gap-4 text-gray-600 dark:text-gray-300 md:flex-row md:items-center md:justify-between">
                    <SortListBox
                        className="ml-auto"
                        selected={sortOrder}
                        setSelected={setSortOrder}
                        options={sortOptions}
                    />
                </div>
            </nav>
        </header>
    )
}
