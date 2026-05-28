import { getImageUrl, LATEST_NEWS_ARTICLES } from "../data";

export default function LatestNews() {
  return (
    <div id="latest-news" className="latest-news-container border-b border-gray-300 pb-4 mb-4">
      <h3 className="big-title text-[28px] font-serif font-bold text-[#335243] border-b border-gray-300 pb-1.5 dark:text-emerald-400">
        Latest News
      </h3>
      <div className="flex flex-col gap-4.5 py-2">
        {LATEST_NEWS_ARTICLES.map((art) => (
          <a key={art.id} href={`#${art.id}`} className="block hover:bg-gray-50 dark:hover:bg-zinc-800 rounded p-1 transition">
            <div className="latest-news-card flex gap-2.5 items-start">
              <div className="w-[70px] shrink-0">
                <div className="layoutRatioSquare rounded overflow-hidden">
                  <img
                    src={getImageUrl(art.image)}
                    alt={art.title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg";
                    }}
                  />
                </div>
              </div>
              <div className="content flex-1">
                <h2 className="title text-[13px] font-bold text-gray-900 font-serif leading-snug line-clamp-3 dark:text-gray-200">
                  {art.title}
                </h2>
                <span className="time text-[10px] text-gray-400 block mt-1">{art.publishTime}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
