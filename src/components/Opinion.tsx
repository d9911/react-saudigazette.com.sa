import { getImageUrl, OPINION_ARTICLES } from "../data";

export default function Opinion() {
  return (
    <div id="opinion" className="mb-6">
      <h3 className="big-title text-[28px] font-serif font-bold text-[#335243] border-b border-gray-300 pb-1.5 dark:text-emerald-400">
        Opinion Insights
      </h3>
      <div className="home-opinion-container grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
        {OPINION_ARTICLES.map((art) => (
          <a key={art.id} href={`#${art.id}`} className="block">
            <div className="opinion-card flex items-center gap-3">
              <img
                alt={art.title}
                src={getImageUrl(art.image)}
                className="w-16 h-16 rounded-full object-cover shrink-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg";
                }}
              />
              <div className="content flex-1">
                <h2 className="title text-[14px] font-bold text-gray-900 font-serif leading-tight line-clamp-2 dark:text-gray-200">
                  {art.title}
                </h2>
                <div className="author text-[11px] text-emerald-800 font-bold tracking-wider mt-1 uppercase dark:text-emerald-400">
                  {art.author}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
