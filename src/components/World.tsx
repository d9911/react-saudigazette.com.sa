import { getImageUrl, WORLD_ARTICLES } from '../data'

export default function World() {
  return (
    <div id="world" className="mb-6">
      <h3 className="big-title text-[28px] font-serif font-bold text-[#335243] border-b border-gray-300 pb-1.5 dark:text-emerald-400">World</h3>
      <div className="grid-3-news grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
        {WORLD_ARTICLES.slice(0, 6).map((art) => (
          <a key={art.id} href={`#${art.id}`} className="block">
            <div className="home-news-card">
              <div className="layoutRatio rounded-lg overflow-hidden mb-2">
                <img
                  src={getImageUrl(art.image)}
                  alt={art.title}
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).src = 'https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg'
                  }}
                />
              </div>
              <div className="content">
                <h2 className="description text-[14.5px] font-semibold text-gray-900 lines-2 font-serif leading-snug dark:text-gray-200">{art.title}</h2>
                <span className="time text-[11px] text-gray-400">{art.publishTime}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
