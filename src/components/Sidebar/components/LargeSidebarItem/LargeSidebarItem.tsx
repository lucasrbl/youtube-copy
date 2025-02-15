import { ElementType } from "react"
import { buttonStyles } from "../../../Button/Button"
import { twMerge } from "tailwind-merge"

type LargeSidebarItemPropsType = {
    IconOrImgUrl: ElementType | string
    title: string
    url: string
    isActive?: boolean
}

function LargeSidebarItem({ IconOrImgUrl, title, url, isActive = false }: LargeSidebarItemPropsType) {
  return (
    <a href={url} className={twMerge(buttonStyles({ variant: "ghost" }), `w-full flex items-center rounded-lg gap-4 p-3 ${isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : undefined}`)}>
      {typeof IconOrImgUrl === "string" ? (
        <img src={IconOrImgUrl} className="w-6 h-6 rounded-full" />
      ) : (
        <IconOrImgUrl className="w-6 h-6"/> 
      )}
        <div className="whitespace-nowrap overflow-hidden text-ellipsis">
            {title}
        </div>
    </a>
  )
}

export default LargeSidebarItem