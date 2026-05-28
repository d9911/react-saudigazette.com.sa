import { FormEvent } from "react";
import {
  getImageUrl,
  BUSINESS_ARTICLES,
  OPINION_ARTICLES,
  SPORTS_ARTICLES,
  EDITORS_CHOICE_ARTICLES,
  MOST_READ_ARTICLES
} from "../data";

interface Props {
  mostReadPeriod: "day" | "week" | "month";
  setMostReadPeriod: (p: "day" | "week" | "month") => void;
  newsLetterEmail: string;
  setNewsLetterEmail: (email: string) => void;
  newsLetterSuccess: string;
  handleSubscribe: (e: FormEvent) => void;
}

export default function SectionBusinessOpinionSports({
  mostReadPeriod,
  setMostReadPeriod,
  newsLetterEmail,
  setNewsLetterEmail,
  newsLetterSuccess,
  handleSubscribe
}: Props) {
  return (
    <div className="container mt-6">
      <div className="row">
        {/* Left structural Column (Business, Opinion, Sports) */}
        <div className="col-md-9">
          {/* Business sub-block */}
          <div id="business" className="mb-6">
            <h3 className="big-title text-[28px] font-serif font-bold text-[#335243] border-b border-gray-300 pb-1.5 dark:text-emerald-400">
              Business
            </h3>
            <div className="grid-3-news grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
              {BUSINESS_ARTICLES.map((art) => (
                <a key={art.id} href={`#${art.id}`} className="block">
                  <div className="home-news-card">
                    <div className="layoutRatio rounded-lg overflow-hidden mb-2">
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
                      <span className="time text-[11px] text-gray-400">{art.publishTime}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Opinion sub-block */}
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

          {/* Sports sub-block */}
          <div id="sports" className="mb-6">
            <h3 className="big-title text-[28px] font-serif font-bold text-[#335243] border-b border-gray-300 pb-1.5 dark:text-emerald-400">
              Sports
            </h3>
            <div className="sports-news-container grid grid-cols-1 md:grid-cols-5 gap-6 py-4">
              {/* Leading Sports Story */}
              <a href={`#${SPORTS_ARTICLES.main.id}`} className="col-span-1 md:col-span-3 block">
                <div className="home-news-card">
                  <div className="layoutRatio rounded-lg overflow-hidden mb-2">
                    <img
                      src={getImageUrl(SPORTS_ARTICLES.main.image)}
                      alt={SPORTS_ARTICLES.main.title}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg";
                      }}
                    />
                  </div>
                  <div className="content">
                    <h2 className="description text-[18px] font-bold font-serif lines-2 text-gray-900 dark:text-gray-100">
                      {SPORTS_ARTICLES.main.title}
                    </h2>
                    <span className="time text-[11px] text-gray-400">{SPORTS_ARTICLES.main.publishTime}</span>
                  </div>
                </div>
              </a>

              {/* List Columns */}
              <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
                {SPORTS_ARTICLES.list.map((art) => (
                  <a key={art.id} href={`#${art.id}`} className="block">
                    <div className="sports-right-card flex gap-3">
                      <img
                        src={getImageUrl(art.image)}
                        alt={art.title}
                        className="w-[80px] h-[80px] rounded object-cover shrink-0"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg";
                        }}
                      />
                      <div className="content pt-0 justify-center">
                        <h2 className="description text-[13px] font-semibold text-gray-900 font-serif leading-snug line-clamp-3 dark:text-gray-200">
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

        {/* Right Column: Editor's Choice + Most Read + Newsletter Signup */}
        <div className="col-md-3">
          {/* Editor Choice widget container */}
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

          {/* Dynamic Switchable "Most Read" box */}
          <div className="most-read-container border-b border-gray-100 pb-5 mb-5">
            <div className="most-read-header flex items-center justify-between border-b border-gray-300 pb-2 mb-3">
              <h3 className="title text-[22px] font-serif font-bold text-[#335243] !border-none !pb-0 m-0 dark:text-emerald-400">
                Most Read
              </h3>
              <div className="date flex gap-1">
                <button
                  onClick={() => setMostReadPeriod("day")}
                  className={`px-1.5 py-0.5 text-[10px] uppercase font-bold rounded cursor-pointer ${
                    mostReadPeriod === "day"
                      ? "bg-[#335243] text-white"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  Day
                </button>
                <button
                  onClick={() => setMostReadPeriod("week")}
                  className={`px-1.5 py-0.5 text-[10px] uppercase font-bold rounded cursor-pointer ${
                    mostReadPeriod === "week"
                      ? "bg-[#335243] text-white"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  Week
                </button>
                <button
                  onClick={() => setMostReadPeriod("month")}
                  className={`px-1.5 py-0.5 text-[10px] uppercase font-bold rounded cursor-pointer ${
                    mostReadPeriod === "month"
                      ? "bg-[#335243] text-white"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  Month
                </button>
              </div>
            </div>

            <div className="most-read-cards flex flex-col gap-4 py-2 transition-all duration-300 font-sans">
              {MOST_READ_ARTICLES[mostReadPeriod].map((art, index) => (
                <a key={art.id} href={`#${art.id}`} className="block">
                  <div className="most-read-row flex items-start gap-2.5">
                    <div className="number text-[26px] font-bold text-[#335243] shrink-0 w-6 font-serif dark:text-emerald-450">
                      {index + 1}
                    </div>
                    <img
                      src={getImageUrl(art.image)}
                      alt={art.title}
                      className="w-[45px] h-[45px] rounded object-cover shrink-0"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg";
                      }}
                    />
                    <div className="content flex-1 max-w-[150px]">
                      <h2 className="description text-xs font-bold text-gray-900 font-serif leading-snug line-clamp-3 dark:text-gray-200">
                        {art.title}
                      </h2>
                      <div className="time text-[10px] text-gray-400 mt-0.5">{art.publishTime}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter subscription widget */}
          <div id="widget_23905" className="newsletter">
            <div className="big-title">Newsletter</div>
            {newsLetterSuccess ? (
              <div className="newsletter-description text-emerald-800 bg-emerald-50 p-2.5 rounded border border-emerald-200 mt-3 dark:bg-emerald-950 dark:text-emerald-200">
                {newsLetterSuccess}
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-content" style={{ display: 'contents' }} id="registerForm">
                <div className="newsletter-title" style={{ fontFamily: 'Newsreader, serif' }}>Stay ahead with Saudi Gazette</div>
                <div id="FormSubscriberMessage" className="newsletter-description">
                  Subscribe to our newsletter to receive daily news insights, breaking stories, and in-depth analysis straight to your inbox!
                </div>
                <div className="newsletter-input">
                  <input
                    id="newsletterEmail"
                    name="ms-email"
                    required
                    type="email"
                    placeholder="Your email address"
                    value={newsLetterEmail}
                    onChange={(e) => setNewsLetterEmail(e.target.value)}
                    className="bg-white text-black dark:bg-zinc-800 dark:text-white"
                  />
                  <button type="submit">Subscribe</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
