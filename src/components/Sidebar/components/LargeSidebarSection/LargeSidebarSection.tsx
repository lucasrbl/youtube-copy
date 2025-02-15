import { Children, ReactNode, useState } from "react"
import Button from "../../../Button/Button"
import { ChevronDown, ChevronUp } from "lucide-react"

type LargeSidebarSectionPropsType = {
    children: ReactNode
    title?: string
    visibleItemCount?: number
}

function LargeSidebarSection({ children, title, visibleItemCount = Number.POSITIVE_INFINITY }: LargeSidebarSectionPropsType) {
  const [isExpanded, setIsExpanded] = useState(false)
  const childrenArray = Children.toArray(children).flat()
  const showExpandButton = childrenArray.length > visibleItemCount
  const visibleChildren = isExpanded ? childrenArray : childrenArray.slice(0, visibleItemCount)
  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown

  return (
    <div>
        {title && 
        <div className="ml-4 mt-2 text-lg mb-1">
            {title}
        </div>}

        {visibleChildren}
        {showExpandButton && (
            <Button variant="ghost" className="w-full flex items-center rounded-lg gap-4 p-3" onClick={() => setIsExpanded(e => !e)}>
                <ButtonIcon className="w-6 h-6"/>
                <div>{isExpanded ? "Show Less" : "Show More"}</div>
            </Button>
        )}
    </div>
  )
}

export default LargeSidebarSection