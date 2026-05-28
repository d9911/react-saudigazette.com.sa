import { getImageUrl, MAIN_FEATURED_ARTICLE, SAUDI_ARABIA_ARTICLES, LATEST_NEWS_ARTICLES } from "../data";

export default function SectionSaudiAndLatest() {
  return (
    <div className="container mt-6">
      <div className="row mt-4">
        {/* Left Content column: Saudi Arabia Grid */}
        <div className="col-md-9 left-news-container" id="saudi-arabia">
          <h3 className="big-title text-[28px] font-serif font-bold text-[#335243] border-b border-gray-300 pb-1.5 dark:text-emerald-400">
            Saudi Arabia
          </h3>
          <div className="grid-news saudi-grid-news grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
            {/* Primary Card */}
            <a href={`#${MAIN_FEATURED_ARTICLE.id}`} className="block">
              <div className="home-news-card">
                <div className="image overflow-hidden rounded-lg mb-2">
                  <img
                    src={getImageUrl(MAIN_FEATURED_ARTICLE.image)}
                    alt={MAIN_FEATURED_ARTICLE.title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg";
                    }}
                  />
                </div>
                <div className="content">
                  <h2 className="description text-xl font-bold font-serif lines-2 text-gray-900 leading-tight dark:text-gray-200">
                    {MAIN_FEATURED_ARTICLE.title}
                  </h2>
                  <span className="time text-[11px] text-gray-400">{MAIN_FEATURED_ARTICLE.publishTime}</span>
                </div>
              </div>
            </a>

            {/* Sublist Grid column */}
            <div className="right-grid-news">
              {SAUDI_ARABIA_ARTICLES.map((art) => (
                <a key={art.id} href={`#${art.id}`} className="block">
                  <div className="home-news-card">
                    <div className="image overflow-hidden rounded">
                      <img
                        src={getImageUrl(art.image)}
                        alt={art.title}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg";
                        }}
                      />
                    </div>
                    <div className="content">
                      <h2 className="description font-semibold text-gray-900 font-serif leading-snug dark:text-gray-200">
                        {art.title}
                      </h2>
                      <span className="time text-[10px] text-gray-400 mt-1">{art.publishTime}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: Latest News Stream list */}
        <div className="col-md-3">
          <div id="latest-news" className="latest-news-container border-b border-gray-300 pb-4">
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
        </div>
      </div>
    </div>
  );
}
