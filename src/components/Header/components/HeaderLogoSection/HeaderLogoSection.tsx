import { Menu } from "lucide-react"
import Button from "../../../Button/Button"
import logo from "../../../../assets/youtube.webp"
import { useSidebarContext } from "../../../../Context/SidebarProvider"


type HeaderLogoSectionPropsType = {
    hidden?: boolean
}

export function HeaderLogoSection({ hidden = false }: HeaderLogoSectionPropsType) {
    const { toggle } = useSidebarContext()


    return (
    <div className={`gap-4 items-center flex-shrink-0 
        ${hidden ? "hidden" : "flex"}`
        }>
        <Button variant="ghost" size="icon" onClick={toggle}>
            <Menu />
        </Button>
        <a href="/">
            <img src={logo} alt="" className="h-10" />
        </a>
    </div>
)}