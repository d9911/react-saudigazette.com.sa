import { getImageUrl, ESPORTS_ARTICLES, LIFESTYLE_ARTICLES, TECHNOLOGY_ARTICLES } from "../data";

export default function SectionEsportsLifestyleTech() {
  return (
    <div className="container mt-6">
      {/* Esports column */}
      <div className="mb-8" id="esports">
        <h3 className="big-title text-[28px] font-serif font-bold text-[#335243] border-b border-gray-300 pb-1.5 mb-2 dark:text-emerald-400">
          Esports Nations
        </h3>
        <div className="grid-3-news esports-mobile">
          {ESPORTS_ARTICLES.map((art) => (
            <a key={art.id} href={`#${art.id}`} className="block group">
              <div className="home-news-card">
                <div className="image overflow-hidden rounded-lg mb-2.5">
                  <img
                    src={getImageUrl(art.image)}
                    alt={art.title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg";
                    }}
                  />
                </div>
                <div className="content">
                  <h4 className="description text-[14.5px] font-bold text-gray-900 group-hover:text-emerald-800 transition font-serif leading-snug line-clamp-3 dark:text-gray-200">
                    {art.title}
                  </h4>
                  <span className="time text-[10px] text-gray-400 mt-1 block">{art.publishTime}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Lifestyle column */}
      <div className="mb-8" id="life">
        <h3 className="big-title text-[28px] font-serif font-bold text-[#335243] border-b border-gray-300 pb-1.5 mb-2 dark:text-emerald-400">
          Lifestyle & Arts
        </h3>
        <div className="grid-3-news esports-mobile">
          {LIFESTYLE_ARTICLES.map((art) => (
            <a key={art.id} href={`#${art.id}`} className="block group">
              <div className="home-news-card">
                <div className="image overflow-hidden rounded-lg mb-2.5">
                  <img
                    src={getImageUrl(art.image)}
                    alt={art.title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg";
                    }}
                  />
                </div>
                <div className="content">
                  <h4 className="description text-[14.5px] font-bold text-gray-900 group-hover:text-emerald-800 transition font-serif leading-snug line-clamp-3 dark:text-gray-200">
                    {art.title}
                  </h4>
                  <span className="time text-[10px] text-gray-400 mt-1 block">{art.publishTime}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Tech column */}
      <div className="mb-8" id="tech">
        <h3 className="big-title text-[28px] font-serif font-bold text-[#335243] border-b border-gray-300 pb-1.5 mb-2 dark:text-emerald-400">
          Technology
        </h3>
        <div className="grid-3-news esports-mobile">
          {TECHNOLOGY_ARTICLES.map((art) => (
            <a key={art.id} href={`#${art.id}`} className="block group">
              <div className="home-news-card">
                <div className="image overflow-hidden rounded-lg mb-2.5">
                  <img
                    src={getImageUrl(art.image)}
                    alt={art.title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg";
                    }}
                  />
                </div>
                <div className="content">
                  <h4 className="description text-[14.5px] font-bold text-gray-900 group-hover:text-emerald-800 transition font-serif leading-snug line-clamp-3 dark:text-gray-200">
                    {art.title}
                  </h4>
                  <span className="time text-[10px] text-gray-400 mt-1 block">{art.publishTime}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
