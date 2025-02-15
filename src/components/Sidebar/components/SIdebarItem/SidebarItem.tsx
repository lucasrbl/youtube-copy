import { ElementType } from "react"
import { twMerge } from "tailwind-merge"
import { buttonStyles } from "../../../Button/Button"

type SidebarItemPropsType = {
    Icon: ElementType
    title: string
    url: string
}

function SidebarItem({ Icon, title, url}: SidebarItemPropsType) {
  return (
    <a href={url} className={twMerge(buttonStyles({ variant: "ghost" }), "py-4 px-1 flex flex-col items-center rounded-lg gap-1")}>
        <Icon className="w-6 h-6"/>
        <div className="text-sm">{title}</div>
    </a>
  )
}

export default SidebarItem