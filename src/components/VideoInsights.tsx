import { useState, useRef } from 'react'
import { Play } from 'lucide-react'
import { getImageUrl, VIDEO_ARTICLES } from '../data'

export default function VideoInsights() {
  const [activeSlide, setActiveSlide] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (containerRef.current) {
      const children = containerRef.current.children
      if (children && children.length > 0) {
        let closestIndex = 0
        let minDiff = Infinity
        const containerLeft = containerRef.current.getBoundingClientRect().left
        for (let i = 0; i < children.length; i++) {
          const childLeft = children[i].getBoundingClientRect().left
          const diff = Math.abs(childLeft - containerLeft)
          if (diff < minDiff) {
            minDiff = diff
            closestIndex = i
          }
        }
        setActiveSlide(closestIndex)
      }
    }
  }

  const scrollToSlide = (index: number) => {
    if (containerRef.current) {
      const container = containerRef.current
      const children = container.children
      if (children && children[index]) {
        const child = children[index] as HTMLElement
        const containerLeft = container.getBoundingClientRect().left
        const childLeft = child.getBoundingClientRect().left
        const targetScrollLeft = container.scrollLeft + (childLeft - containerLeft)

        container.scrollTo({
          left: targetScrollLeft,
          behavior: 'smooth',
        })
        setActiveSlide(index)
      }
    }
  }

  return (
    <div id="video" className="home-videos py-10 my-8 rounded-xl px-4 md:px-6">
      <h3 className="videos-title text-[28px] font-serif font-bold text-white border-b border-[#feffff50] pb-2 mb-6">Video Insights</h3>

      {/* Desktop View */}
      <div className="hidden md:block shadow-md">
        {VIDEO_ARTICLES.length > 0 && (
          <a key={VIDEO_ARTICLES[0].id} href={`#${VIDEO_ARTICLES[0].id}`} className="block group mb-8">
            <div className="flex flex-row items-center gap-6 bg-[#254034] p-5 rounded-xl border border-[#feffff15]">
              <div className="w-2/3 shrink-0 relative ratio-video rounded-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img
                  src={getImageUrl(VIDEO_ARTICLES[0].image)}
                  alt={VIDEO_ARTICLES[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).src = 'https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg'
                  }}
                />
                <div className="play-btn absolute bottom-4 right-4 bg-emerald-700/90 text-white rounded-full p-3.5 shadow-lg group-hover:bg-emerald-600 transition">
                  <Play className="w-5 h-5 fill-white" />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <span className="bg-emerald-600/30 text-emerald-300 text-[11px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-full w-fit mb-3">Featured Video</span>
                <h3 className="text-2xl lg:text-3xl font-bold text-zinc-100 font-serif leading-tight group-hover:text-amber-300 transition duration-300 mb-4">{VIDEO_ARTICLES[0].title}</h3>
                <span className="time text-xs text-emerald-200/70 block mt-1">{VIDEO_ARTICLES[0].publishTime}</span>
              </div>
            </div>
          </a>
        )}

        {/* Grid of other videos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VIDEO_ARTICLES.slice(1).map((art) => (
            <a key={art.id} href={`#${art.id}`} className="block video-card group">
              <div className="thumbnail overflow-hidden rounded-lg aspect-video mb-3 relative">
                <img
                  src={getImageUrl(art.image)}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).src = 'https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg'
                  }}
                />
                <div className="play-btn absolute bottom-3 right-3 bg-emerald-700/90 text-white rounded-full p-2.5 shadow-lg group-hover:bg-emerald-600 transition">
                  <Play className="w-4 h-4 fill-white" />
                </div>
              </div>
              <h3 className="text-[14.5px] font-bold text-zinc-100 font-serif line-clamp-2 leading-snug group-hover:text-amber-300 transition">{art.title}</h3>
              <span className="time text-[11px] text-gray-300 block mt-1">{art.publishTime}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile View: Horizontal Scroll with 9:16 aspect ratio (276*400) and text on bottom */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="md:hidden mt-4 overflow-x-auto overflow-y-hidden flex flex-row gap-4 pb-4 snap-x snap-mandatory scrollbar-none"
        style={{ scrollbarWidth: 'none' }}
      >
        {VIDEO_ARTICLES.map((art) => (
          <a key={art.id} href={`#${art.id}`} className="block shrink-0 snap-start group" style={{ width: '276px' }}>
            <div className="relative overflow-hidden rounded-lg mb-3" style={{ width: '276px', height: '400px' }}>
              <img
                src={getImageUrl(art.image)}
                alt={art.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300 animate-fade-in"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).src = 'https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg'
                }}
              />
              <div className="play-btn absolute bottom-4 right-4 bg-emerald-700/90 text-white rounded-full p-2.5 shadow-lg group-hover:bg-emerald-600 transition">
                <Play className="w-4 h-4 fill-white" />
              </div>
            </div>
            <h3 className="text-[14.5px] font-bold text-zinc-100 font-serif leading-snug group-hover:text-amber-300 transition line-clamp-2">{art.title}</h3>
            <span className="time text-[11px] text-gray-300 block mt-1">{art.publishTime}</span>
          </a>
        ))}
      </div>

      {/* Mobile Video Slides Indicators */}
      <div className="carousel-bullets only-mobile" style={{ marginTop: '16px' }} role="group" aria-label="Slide navigation">
        {VIDEO_ARTICLES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToSlide(idx)}
            className={activeSlide === idx ? 'active' : ''}
            aria-current={activeSlide === idx ? 'true' : 'false'}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
