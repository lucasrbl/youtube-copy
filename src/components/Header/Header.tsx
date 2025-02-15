import { ArrowLeft, Bell, Mic, Search, Upload, User } from "lucide-react"
import Button from "../Button/Button"
import { useState } from "react"
import { HeaderLogoSection } from "./components/HeaderLogoSection/HeaderLogoSection"

function Header() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
        <HeaderLogoSection hidden={showFullWidthSearch}/>
        <form className={`md:flex gap-4 flex-grow justify-center 
            ${showFullWidthSearch ? "flex" : "hidden md:flex"}`}
            >
            {showFullWidthSearch && (
         <Button 
         type="button" 
         size="icon" 
         className="flex-shrink-0" 
         variant="ghost"
         onClick={() => setShowFullWidthSearch(false)}>
            <ArrowLeft/>
        </Button>
            )}
            <div className="flex flex-grow max-w-[600px]">
                <input type="search" placeholder="Search" className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none" />
                <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0">
                    <Search />
                </Button>
            </div>
            <Button type="button" size="icon" className="flex-shrink-0">
                <Mic/>
            </Button>
        </form>
        <div className={`flex-shrink-0 md:gap-2 
            ${showFullWidthSearch ? "hidden" : "flex"}`
        }>
            <Button size="icon" variant="ghost" className="md:hidden">
                <Search onClick={() => setShowFullWidthSearch(true)}/>
            </Button>

            <Button size="icon" variant="ghost" className="md:hidden">
                <Mic/>
            </Button>

            <Button size="icon" variant="ghost">
                <Upload/>
            </Button>

            <Button size="icon" variant="ghost">
                <Bell/>
            </Button>

            <Button size="icon" variant="ghost">
                <User/>
            </Button>
        </div>
    </div>
  )
}

export default Header