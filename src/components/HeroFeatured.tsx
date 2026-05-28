import { useState, useRef } from 'react'
import { getImageUrl, MAIN_FEATURED_ARTICLE, THREE_FEATURED_CARDS } from '../data'

export default function HeroFeatured() {
  const [activeSlide, setActiveSlide] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth } = containerRef.current
      const index = Math.round(Math.abs(scrollLeft) / (clientWidth || 1))
      setActiveSlide(index)
    }
  }

  const scrollToSlide = (index: number) => {
    if (containerRef.current) {
      const children = containerRef.current.children
      if (children && children[index]) {
        const child = children[index] as HTMLElement
        child.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        })
        setActiveSlide(index)
      }
    }
  }

  return (
    <div className="py-2.5">
      {/* Featured Headline Hero */}
      <a href="#exclusive-report" className="block hover:opacity-95 transition" style={{ textDecoration: 'none' }}>
        <div className="home-featured-news flex flex-col md:flex-row items-stretch gap-8 mb-6">
          <div className="left flex-1">
            <div className="layoutRatio overflow-hidden rounded-lg">
              <picture>
                <img
                  fetchPriority="high"
                  src={getImageUrl(MAIN_FEATURED_ARTICLE.image)}
                  alt={MAIN_FEATURED_ARTICLE.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).src = 'https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg'
                  }}
                />
              </picture>
            </div>
          </div>
          <div className="right md:w-[420px] flex flex-col justify-center border-t-2 border-[#C6B995] py-2">
            <span className="category text-[11px] font-bold text-[#335243] dark:text-emerald-400 tracking-wider">{MAIN_FEATURED_ARTICLE.category}</span>
            <h2 className="title text-2xl md:text-[29px] font-semibold text-gray-900 mt-1 lines-2 font-serif leading-tight dark:text-gray-100">{MAIN_FEATURED_ARTICLE.title}</h2>
            <p className="text-[13px] text-gray-600 mt-2 leading-relaxed dark:text-zinc-300">{MAIN_FEATURED_ARTICLE.description}</p>
            <span className="time text-[11px] text-gray-400 mt-3">{MAIN_FEATURED_ARTICLE.publishTime}</span>
          </div>
        </div>
      </a>

      {/* Grid of 3 accompanying featured stories */}
      <div ref={containerRef} onScroll={handleScroll} className="three-cards grid grid-cols-1 md:grid-cols-3 gap-6">
        {THREE_FEATURED_CARDS.map((card) => (
          <a key={card.id} href={`#${card.id}`} className="block border-b border-gray-100 pb-4 md:border-none md:pb-0">
            <div className="home-news-card h-full flex flex-col justify-between">
              <div className="layoutRatioSquare overflow-hidden rounded-lg mb-2">
                <img
                  src={getImageUrl(card.image)}
                  alt={card.title}
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).src = 'https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg'
                  }}
                />
              </div>
              <div className="content mt-1.5 flex flex-col flex-1">
                <span className="title text-[10px] font-bold text-[#335243] dark:text-emerald-400 uppercase tracking-wider">{card.category}</span>
                <h2 className="description text-[17px] font-semibold text-gray-900 mt-1 font-serif flex-1 dark:text-gray-200">{card.title}</h2>
                <span className="time text-[11px] text-gray-400 mt-2 block">{card.publishTime}</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Mobile Slide indicators */}
      <div className="carousel-bullets only-mobile" role="group" aria-label="Slide navigation">
        {THREE_FEATURED_CARDS.map((_, idx) => (
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
