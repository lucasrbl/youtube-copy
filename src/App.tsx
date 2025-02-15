import { useState } from "react"
import Header from "./components/Header/Header"
import VideoCategories from "./components/VideoCategories/VideoCategories"
import Video from "./components/Video/Video"
import { categories, videos } from "./data/home"
import Sidebar from "./components/Sidebar/Sidebar"
import SidebarProvider from "./Context/SidebarProvider"

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  return (
    <SidebarProvider>
      <section className="max-h-screen flex flex-col">
      <Header/>
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <Sidebar/>
        <div className="overflow-x-hidden px-8 pb-4">
          <div className="sticky top-0 bg-white z-10 pb-4">
            <VideoCategories 
              categories={categories} 
              selectedCategory={selectedCategory} 
              onSelect={setSelectedCategory}/>
          </div>
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {videos.map(video => (
              <Video key={video.id} {...video}/>
            ))}
          </div>
        </div>
      </div>
      </section>
    </SidebarProvider>
  )
}

export default App
