import { Clapperboard, Clock, Film, Flame, Gamepad2, History, Home, Library, ListVideo, Music2, PlaySquare, Radio, Repeat, ShoppingBag } from "lucide-react"
import SidebarItem from "./components/SIdebarItem/SidebarItem"
import LargeSidebarSection from "./components/LargeSidebarSection/LargeSidebarSection"
import LargeSidebarItem from "./components/LargeSidebarItem/LargeSidebarItem"
import { playlists, subscriptions } from "../../data/sidebar"
import { useSidebarContext } from "../../Context/SidebarProvider"
import { HeaderLogoSection } from "../Header/components/HeaderLogoSection/HeaderLogoSection"

function Sidebar() {
  const { isLargeOpen, isSmallOpen, close } = useSidebarContext()


  return (
    <> 
    <aside className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-l ${isLargeOpen ? "lg:hidden" : "lg-flex"}`}>
        <SidebarItem Icon={Home} title="Home" url="/"/>
        <SidebarItem Icon={Repeat} title="Shorts" url="/"/>
        <SidebarItem Icon={Clapperboard} title="Subscriptions" url="/subscriptions"/>
        <SidebarItem Icon={Library} title="Library" url="/library"/>
    </aside>

    { isSmallOpen && (
        <div onClick={close} className="lg:hidden fixed inset-0 z-[999] bg-secondary-dark opacity-50" />
    )}

    <aside className={`w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 ${isLargeOpen ? "lg-flex" : "lg-hidden"} ${isSmallOpen ? "flex z-[999] bg-white max-h-screen" : "hidden"}`}>
        <div className="lg:hidden pt-2 pb-4 px-2 sticky top-0 bg-white">
            <HeaderLogoSection/>
        </div>
        <LargeSidebarSection>
            <LargeSidebarItem 
                IconOrImgUrl={Home} 
                isActive 
                title="Home" 
                url="/"/>

            <LargeSidebarItem 
                IconOrImgUrl={Clapperboard} 
                title="Subscriptions" 
                url="/subscriptions"/>
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection visibleItemCount={5}>
            <LargeSidebarItem 
                IconOrImgUrl={Library} 
                title="Library" 
                url="/library"/>

            <LargeSidebarItem 
                IconOrImgUrl={History} 
                title="History" 
                url="History"/>

            <LargeSidebarItem 
                IconOrImgUrl={PlaySquare} 
                title="Your Videos" 
                url="/your-videos"/>

            <LargeSidebarItem 
                IconOrImgUrl={Clock} 
                title="Watch Later" 
                url="/playlist?list=WL"/>
            {playlists.map(playlist => (
                <LargeSidebarItem
                    key={playlist.id}
                    IconOrImgUrl={ListVideo}
                    title={playlist.name}
                    url={`/playlist?list=${playlist.id}`}
                />
            ))}
        </LargeSidebarSection>
        <hr/>
        <LargeSidebarSection title="Subscriptions">
            {subscriptions.map(subscription => (
                <LargeSidebarItem
                    key={subscription.id}
                    IconOrImgUrl={subscription.imgUrl}
                    title={subscription.channelName}
                    url={`/@${subscription.id}`}
                />
            ))}
        </LargeSidebarSection>

        <LargeSidebarSection title="Explore">
            <LargeSidebarItem 
                IconOrImgUrl={Flame}
                title="Trending"
                url="/trending"/>

            <LargeSidebarItem 
                IconOrImgUrl={ShoppingBag}
                title="Shopping"
                url="/shopping"/>

            <LargeSidebarItem 
                IconOrImgUrl={Music2}
                title="Music"
                url="/music"/>

            <LargeSidebarItem 
                IconOrImgUrl={Film}
                title="Movies & TV"
                url="/movies-tv"/>

            <LargeSidebarItem 
                IconOrImgUrl={Radio}
                title="Live"
                url="/live"/>
            
            <LargeSidebarItem 
                IconOrImgUrl={Gamepad2}
                title="Gaming"
                url="/gaming"/>
        </LargeSidebarSection>
    </aside>
    </>
  )
}

export default Sidebar