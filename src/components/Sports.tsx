import { getImageUrl, SPORTS_ARTICLES } from '../data'
export default function Sports() {
  return (
    <div id="sports" className="mb-6">
      <h3 className="big-title text-[28px] font-serif font-bold text-[#335243] border-b border-gray-300 pb-1.5 dark:text-emerald-400">Sports</h3>
      <div className="sports-news-container grid grid-cols-1 md:grid-cols-5 gap-6 py-4">
        <a href={`#${SPORTS_ARTICLES.main.id}`} className="col-span-1 md:col-span-3 block">
          <div className="home-news-card">
            <div className="layoutRatio rounded-lg overflow-hidden mb-2">
              <img
                src={getImageUrl(SPORTS_ARTICLES.main.image)}
                alt={SPORTS_ARTICLES.main.title}
                onError={(e) => {
                  ;(e.target as HTMLImageElement).src = 'https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg'
                }}
              />
            </div>
            <div className="content">
              <h2 className="description text-[18px] font-bold font-serif lines-2 text-gray-900 dark:text-gray-100">{SPORTS_ARTICLES.main.title}</h2>
              <span className="time text-[11px] text-gray-400">{SPORTS_ARTICLES.main.publishTime}</span>
            </div>
          </div>
        </a>
        <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
          {SPORTS_ARTICLES.list.map((art) => (
            <a key={art.id} href={`#${art.id}`} className="block">
              <div className="sports-right-card flex gap-3">
                <img
                  src={getImageUrl(art.image)}
                  alt={art.title}
                  className="w-[80px] h-[80px] rounded object-cover shrink-0"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).src = 'https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg'
                  }}
                />
                <div className="content pt-0 justify-center">
                  <h2 className="description text-[13px] font-semibold text-gray-900 font-serif leading-snug line-clamp-3 dark:text-gray-200">{art.title}</h2>
                  <span className="time text-[10px] text-gray-400 block mt-1">{art.publishTime}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
