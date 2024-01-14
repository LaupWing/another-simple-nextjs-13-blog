import type { FC } from "react"

export const Loading: FC = () => {
    return (
        <div className="custom-container text-center py-10">
            <span className="animate-pulse uppercase text-xs font-bold">Loading...</span>
        </div>
    )
}