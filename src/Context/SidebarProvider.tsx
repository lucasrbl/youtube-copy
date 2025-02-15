import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

type SidebarProviderPropsType = {
    children: ReactNode
}

type SidebarContextPropsType = {
    isLargeOpen: boolean
    isSmallOpen: boolean
    toggle: () => void
    close: () => void
}

const SidebarContext = createContext<SidebarContextPropsType | null>(null)

export function useSidebarContext() {
    const value = useContext(SidebarContext)

    if(value == null) throw Error("Cannot use outside of SidebarProvider")

    return value
}

function SidebarProvider({ children }: SidebarProviderPropsType) {
    const [isLargeOpen, setIsLargeOpen] = useState<boolean>(true)
    const [isSmallOpen, setIsSmallOpen] = useState<boolean>(false)

    useEffect(() => {
        const handler = () => {
            if(!isScreenSmall()) setIsSmallOpen(false)
        }
        
        window.addEventListener('resize', handler)

        return () => {
            window.removeEventListener("resize", handler)
        }
    },[])

    function isScreenSmall() {
        return window.innerWidth < 1024
    }

    function toggle() {
        if(isScreenSmall()) {
            setIsSmallOpen(small => !small)
        } else {
            setIsLargeOpen(large => !large)
        }
    }


    function close() {
        if(isScreenSmall()) {
            setIsSmallOpen(false)
        } else {
            setIsLargeOpen(false)
        }
    }
  return (
    <SidebarContext.Provider value={{ isLargeOpen, isSmallOpen, toggle, close }}>
        {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider