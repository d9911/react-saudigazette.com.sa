import { getImageUrl, DISCOVER_SAUDI_ARTICLES } from "../data";

export default function SectionDiscoverSaudi() {
  return (
    <div id="discover-saudi" className="container mt-6 py-4">
      <h3 className="big-title text-[28px] font-serif font-bold text-[#335243] border-b border-gray-300 pb-1.5 dark:text-emerald-400">
        Discover Saudi
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2">
        {DISCOVER_SAUDI_ARTICLES.map((art) => (
          <a key={art.id} href={`#${art.id}`} className="block hover:shadow-sm rounded overflow-hidden">
            <div className="home-news-card">
              <div className="layoutRatio rounded-lg overflow-hidden mb-2.5">
                <img
                  src={getImageUrl(art.image)}
                  alt={art.title}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg";
                  }}
                />
              </div>
              <div className="content">
                <h2 className="description text-[14.5px] font-semibold text-gray-900 font-serif leading-snug dark:text-gray-200">
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
