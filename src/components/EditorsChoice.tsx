import { getImageUrl, EDITORS_CHOICE_ARTICLES } from "../data";

export default function EditorsChoice() {
  return (
    <div id="editors-choice" className="editor-choice-container editor-right pb-5 mb-5 mt-4">
      <h3 className="title text-[22px] font-serif font-bold text-[#335243] border-b border-gray-300 pb-2 mb-3 dark:text-emerald-400">
        Editor's Choice
      </h3>
      {EDITORS_CHOICE_ARTICLES.map((art) => (
        <a key={art.id} href={`#${art.id}`} className="block mb-6 last:mb-0">
          <div className="editor-choice-card">
            <div className="layoutRatio rounded overflow-hidden mb-2">
              <img
                src={getImageUrl(art.image)}
                alt={art.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg";
                }}
              />
            </div>
            <div className="content">
              <div className="title text-[10px] font-bold text-[#335243] dark:text-emerald-400 tracking-wider">
                {art.category}
              </div>
              <h2 className="description text-[15px] font-bold text-gray-900 font-serif mt-1 dark:text-gray-200">
                {art.title}
              </h2>
              <div className="full-desc text-[12px] text-gray-500 line-clamp-3 mt-1 leading-normal dark:text-zinc-400">
                {art.description}
              </div>
              <div className="time text-[10px] text-gray-400 mt-1">{art.publishTime}</div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
