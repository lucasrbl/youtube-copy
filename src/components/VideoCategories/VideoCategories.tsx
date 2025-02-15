import { ChevronLeft, ChevronRight } from 'lucide-react'
import Button from '../Button/Button'
import { useEffect, useRef, useState } from 'react'

type VideoCategoriesProps = {
    categories: string[]
    selectedCategory: string
    onSelect: (category: string) => void
}

const MOVING_AMOUNT = 200

function VideoCategories({ categories, selectedCategory, onSelect }: VideoCategoriesProps) {
    const [translateAmount, setTranslateAmount] = useState<number>(0)
    const [isLeftVisible, setIsLeftVisible] = useState<boolean>(false)
    const [isRightVisible, setIsRightVisible] = useState<boolean>(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(containerRef.current == null) return
        
        const observer = new ResizeObserver(entries => {
            const container = entries[0]?.target 
            if(container == null) return

            setIsLeftVisible(translateAmount > 0)
            setIsRightVisible(translateAmount + container.clientWidth < container.scrollWidth)
        })
        observer.observe(containerRef.current)

        return () => {
            observer.disconnect()
        }
    }, [categories, translateAmount])

  return (
    <div className='overflow-x-hidden relative' ref={containerRef}>
        <div className='flex whitespace-nowrap gap-3 transition-transform w-[max-content]'
             style={{ transform: `translateX(-${translateAmount}px)` }}>
            {categories.map(category => (
                <Button 
                    className='py-1 px-3 rounded-lg whitespace-nowrap' 
                    variant={selectedCategory === category ? "dark" : "default"}
                    key={category}
                    onClick={() => onSelect(category)}>
                    {category}
                </Button>
            ))}
        </div>
        {isLeftVisible && (
            <div className='absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full'>
                <Button
                    variant="ghost"
                    size="icon"                            
                    className='h-full aspect-square w-auto p-1.5' 
                    onClick={() => {
                        setTranslateAmount(translateAmount => {
                            const newTranslate = translateAmount - MOVING_AMOUNT
                            if(newTranslate <= 0) return 0
                            return newTranslate
                    })
                }}
                    >
                    <ChevronLeft/>
                </Button>
            </div>
        )}

        {isRightVisible && (
            <div className='absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end'>
                <Button
                    variant="ghost"
                    size="icon"
                    className='h-full aspect-square w-auto p-1.5'
                    onClick={() => {
                        setTranslateAmount(translateAmount => {
                            if(containerRef.current == null) {
                                return translateAmount
                            }
                            const newTranslate = translateAmount + MOVING_AMOUNT
                            
                            const edge = containerRef.current.scrollWidth
                            const width = containerRef.current.clientWidth

                            if(newTranslate + width >= edge) {
                                return edge - width
                            }
                            return newTranslate                         
                        })
                    }}
                    >
                    <ChevronRight/>
                </Button>
            </div>
        )}
    </div>
  )
}

export default VideoCategories