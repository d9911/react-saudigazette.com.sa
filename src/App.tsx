import { useState, useEffect, FormEvent } from "react";
import {
  Newspaper,
  Mail,
  Moon,
  Sun,
  Search,
  Menu,
  X,
  Play,
  Youtube,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ChevronRight
} from "lucide-react";
import {
  getImageUrl,
  MAIN_FEATURED_ARTICLE,
  THREE_FEATURED_CARDS,
  SAUDI_ARABIA_ARTICLES,
  LATEST_NEWS_ARTICLES,
  WORLD_ARTICLES,
  VIDEO_ARTICLES,
  BUSINESS_ARTICLES,
  OPINION_ARTICLES,
  SPORTS_ARTICLES,
  ESPORTS_ARTICLES,
  LIFESTYLE_ARTICLES,
  TECHNOLOGY_ARTICLES,
  EDITORS_CHOICE_ARTICLES,
  DISCOVER_SAUDI_ARTICLES,
  MOST_READ_ARTICLES
} from "./data";
import { Article } from "./types";

export default function App() {
  // Theme state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("mode");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Mobile drawer state
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Search state
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Article[]>([]);

  // Most Read active period: "day" | "week" | "month"
  const [mostReadPeriod, setMostReadPeriod] = useState<"day" | "week" | "month">("day");

  // Newsletter state
  const [newsLetterEmail, setNewsLetterEmail] = useState("");
  const [newsLetterSuccess, setNewsLetterSuccess] = useState("");

  // Dynamic Date string state
  const [liveDateString, setLiveDateString] = useState("");

  // Apply dark class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("mode", "dark");
    } else {
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("mode", "light");
    }
  }, [darkMode]);

  // Generate dynamic date with Hijri
  useEffect(() => {
    const calculateSaudiDate = () => {
      try {
        const today = new Date();

        // Format Gregorian
        const gregorianFormatter = new Intl.DateTimeFormat("en-US", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric"
        });
        const gregorianDate = gregorianFormatter.format(today);

        // Format Hijri (Umm al-Qura)
        const hijriFormatter = new Intl.DateTimeFormat("en-u-ca-islamic-umalqura", {
          day: "numeric",
          month: "long",
          year: "numeric"
        });
        const hijriParts = hijriFormatter.formatToParts(today);

        const hijriDay = hijriParts.find((p) => p.type === "day")?.value || "26";
        const hijriYear = hijriParts.find((p) => p.type === "year")?.value || "1447";
        const hijriMonthRaw = hijriParts.find((p) => p.type === "month")?.value || "Muharram";

        // Traditional Saudi Hijri Month Transliterations
        const traditionalMonths: { [key: string]: string } = {
          "Muharram": "Muharram",
          "Safar": "Safar",
          "Rabiʻ I": "Rabi al-awwal",
          "Rabiʻ II": "Rabi al-thani",
          "Jumada I": "Jumada al-ula",
          "Jumada II": "Jumada al-akhirah",
          "Rajab": "Rajab",
          "Shaʻban": "Sha'ban",
          "Ramadan": "Ramadan",
          "Shawwal": "Shawwal",
          "Dhuʻl-Qiʻdah": "Dhu al-Qi'dah",
          "Dhuʻl-Hijjah": "Dhu al-Hijjah"
        };

        const hijriMonth = traditionalMonths[hijriMonthRaw] || hijriMonthRaw;
        return `${gregorianDate} / ${hijriDay}, ${hijriMonth}, ${hijriYear}`;
      } catch (err) {
        // Fallback robust date
        return "Monday July 21, 2025 / 26, Muharram, 1447";
      }
    };

    setLiveDateString(calculateSaudiDate());
  }, []);

  // Handle Search input
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    // Gather all existing items in lists to query
    const allArticles = [
      MAIN_FEATURED_ARTICLE,
      ...THREE_FEATURED_CARDS,
      ...SAUDI_ARABIA_ARTICLES,
      ...LATEST_NEWS_ARTICLES,
      ...WORLD_ARTICLES,
      ...VIDEO_ARTICLES,
      ...BUSINESS_ARTICLES,
      ...OPINION_ARTICLES,
      SPORTS_ARTICLES.main,
      ...SPORTS_ARTICLES.list,
      ...ESPORTS_ARTICLES,
      ...LIFESTYLE_ARTICLES,
      ...TECHNOLOGY_ARTICLES,
      ...EDITORS_CHOICE_ARTICLES,
      ...DISCOVER_SAUDI_ARTICLES
    ];

    // Filter duplicates
    const uniqueMap = new Map<string | number, Article>();
    allArticles.forEach((art) => {
      if (art && art.title) {
        uniqueMap.set(art.url, art);
      }
    });

    const results = Array.from(uniqueMap.values()).filter((art) =>
      art.title.toLowerCase().includes(query) || (art.description && art.description.toLowerCase().includes(query))
    );

    setSearchResults(results);
  }, [searchQuery]);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!newsLetterEmail.trim()) return;
    setNewsLetterSuccess("Thank you! You are now subscribed to the Saudi Gazette's newsletter list.");
    setNewsLetterEmail("");
  };

  return (
    <div id="sg-newspaper-app" className="min-h-screen flex flex-col">
      {/* Target element for content access */}
      <h1 className="sr-only">Home - Latest News from Saudi Arabia and the World</h1>

      {/* TOP DESKTOP HEADER */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <header className="w-full">
              <nav className="desktop-nav flex flex-col border-b border-[#E1E1E1] py-5 gap-2">
                <div className="date w-full flex justify-between items-center relative min-h-[94px]">
                  {/* Left formatted live date */}
                  <div className="text-gray-500 font-semibold text-xs min-w-[240px]">
                    {liveDateString || "Loading date..."}
                  </div>

                  {/* Middle descriptive brand header */}
                  <div className="since flex flex-col items-center gap-1.5 absolute left-1/2 -translate-x-1/2">
                    <div className="text-[11px] font-bold text-[#335243] uppercase tracking-widest font-sans dark:text-emerald-400">
                      Since 1976
                    </div>
                    <a href="#" className="block">
                      <div className="logo flex items-center justify-center">
                        <img
                          alt="Saudi Gazette logo"
                          id="logoDesktop"
                          className="h-[55px] w-auto transition-all"
                          src={
                            darkMode
                              ? "https://saudigazette.com.sa/saudigazette/uploads/global_files/white-logo.svg"
                              : "https://saudigazette.com.sa/saudigazette/uploads/global_files/logo.svg"
                          }
                        />
                      </div>
                    </a>
                    <div className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mt-1">
                      LEADING THE WAY
                    </div>
                  </div>

                  {/* Right Header Navigation controls */}
                  <div className="right-menu header-icons flex items-center gap-4">
                    <a href="#today-edition" title="Epaper" className="hover:text-emerald-700 transition">
                      <Newspaper className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </a>
                    <a href="#newsletter" title="Contact Us" className="hover:text-emerald-700 transition">
                      <Mail className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </a>
                    <button
                      onClick={() => setDarkMode(!darkMode)}
                      title="Toggle mode"
                      className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-teal-950 transition cursor-pointer"
                    >
                      {darkMode ? (
                        <Sun className="w-5 h-5 text-amber-400" />
                      ) : (
                        <Moon className="w-5 h-5 text-gray-700" />
                      )}
                    </button>
                  </div>
                </div>
              </nav>

              {/* MOBILE NAVIGATION BAR */}
              <nav className="mobile-nav flex md:hidden items-center justify-between py-4 px-3 border-b border-gray-200">
                <button
                  id="burger"
                  onClick={() => setDrawerOpen(true)}
                  className="p-1 rounded text-gray-800 dark:text-white"
                  aria-label="Toggle Menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
                <a href="#">
                  <img
                    id="logoMobile"
                    alt="Saudi Gazette logo"
                    className="h-9 w-auto"
                    src={
                      darkMode
                        ? "https://saudigazette.com.sa/saudigazette/uploads/global_files/white-logo.svg"
                        : "https://saudigazette.com.sa/saudigazette/uploads/global_files/logo.svg"
                    }
                  />
                </a>
                <div className="flex items-center gap-3.5">
                  <button
                    id="darkModeBtnMobile"
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-1 text-gray-800 dark:text-white"
                    aria-label="Toggle Theme"
                  >
                    {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
                  </button>
                  <button
                    onClick={() => setSearchOpen(!searchOpen)}
                    className="p-1 text-gray-800 dark:text-white"
                    aria-label="Search"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </nav>
            </header>
          </div>
        </div>
      </div>

      {/* DESKTOP HIGHLIGHT NAVIGATION BAR */}
      <div className="container">
        <div className="main-menu hidden md:flex w-full justify-between items-center py-2.5 mb-4">
          <div />
          <div className="flex flex-row flex-nowrap items-center justify-center gap-1 md:gap-1.5 overflow-visible">
            <a href="#saudi-arabia" className="nav-item text-[13px] tracking-wide uppercase font-bold text-gray-800 hover:text-emerald-700 transition whitespace-nowrap">
              Saudi Arabia
            </a>
            <a href="#world" className="nav-item text-[13px] tracking-wide uppercase font-bold text-gray-800 hover:text-emerald-700 transition whitespace-nowrap">
              World
            </a>
            <a href="#business" className="nav-item text-[13px] tracking-wide uppercase font-bold text-gray-800 hover:text-emerald-700 transition whitespace-nowrap">
              Business
            </a>
            <a href="#opinion" className="nav-item text-[13px] tracking-wide uppercase font-bold text-gray-800 hover:text-emerald-700 transition whitespace-nowrap">
              Opinion
            </a>
            <a href="#sports" className="nav-item text-[13px] tracking-wide uppercase font-bold text-gray-800 hover:text-emerald-700 transition whitespace-nowrap">
              Sports
            </a>
            <a href="#esports" className="nav-item text-[13px] tracking-wide uppercase font-bold text-gray-800 hover:text-emerald-700 transition whitespace-nowrap">
              Esports
            </a>
            <a href="#life" className="nav-item text-[13px] tracking-wide uppercase font-bold text-gray-800 hover:text-emerald-700 transition whitespace-nowrap">
              Lifestyle
            </a>
            <a href="#video" className="nav-item text-[13px] tracking-wide uppercase font-bold text-gray-800 hover:text-emerald-700 transition whitespace-nowrap">
              Video
            </a>
            <a href="#discover-saudi" className="nav-item text-[13px] tracking-wide uppercase font-bold text-gray-800 hover:text-emerald-700 transition whitespace-nowrap">
              Discover Saudi
            </a>
          </div>
          {/* Desktop Search Toggle */}
          <div className="relative">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-1 rounded text-gray-800 dark:text-white cursor-pointer hover:bg-gray-150 transition"
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* FLOATING SEARCH MODAL PANEL */}
      {searchOpen && (
        <div className="bg-gray-50 border-b border-gray-200 py-6 px-4 dark:bg-zinc-900 transition-all">
          <div className="container max-w-4xl mx-auto flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h4 className="text-[17px] font-bold text-emerald-800 uppercase dark:text-teal-400">Search Saudi Gazette Archive</h4>
              <button
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery("");
                }}
                className="p-1 text-gray-500 hover:text-black dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative flex items-center gap-2">
              <Search className="absolute left-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type topics, locations, or names (e.g., King Salman, Hajj, Esports)..."
                className="w-full bg-white text-black pl-11 pr-4 py-2.5 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-emerald-700 dark:bg-zinc-800 dark:text-white dark:border-zinc-700"
              />
            </div>

            {/* Live Search Results */}
            {searchQuery.trim() && (
              <div className="bg-white dark:bg-zinc-800 rounded-lg p-4 shadow-md max-h-[350px] overflow-y-auto">
                <p className="text-[11px] font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                  Matches found: {searchResults.length}
                </p>
                {searchResults.length > 0 ? (
                  <div className="divide-y divide-gray-100 dark:divide-zinc-700">
                    {searchResults.map((art) => (
                      <a
                        key={art.id}
                        href={`#${art.id}`}
                        onClick={() => setSearchOpen(false)}
                        className="py-3 flex gap-3.5 hover:bg-gray-50 dark:hover:bg-zinc-700 rounded px-2 transition"
                      >
                        <img
                          src={getImageUrl(art.image)}
                          alt=""
                          className="w-16 h-12 object-cover rounded"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg";
                          }}
                        />
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold text-[#335243] uppercase dark:text-teal-400">
                            {art.category || "News"}
                          </span>
                          <span className="text-[14px] font-bold text-gray-900 dark:text-white line-clamp-1">
                            {art.title}
                          </span>
                          <span className="text-[11px] text-gray-500 font-sans">{art.publishTime}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="text-[13px] text-gray-500 italic py-2">No headlines match "{searchQuery}". Try other keywords.</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* MOBILE DRAWER LINK SLIDER OVERLAY */}
      <div
        className={`mobile-side-overlay ${drawerOpen ? "open" : ""}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />
      <aside className={`mobile-side-menu ${drawerOpen ? "open" : ""}`} aria-label="Mobile Menu">
        <div className="mobile-side-header">
          <img
            id="logoDesktopSidebar"
            src={
              darkMode
                ? "https://saudigazette.com.sa/saudigazette/uploads/global_files/white-logo.svg"
                : "https://saudigazette.com.sa/saudigazette/uploads/global_files/logo.svg"
            }
            className="mobile-side-logo"
            alt="Saudi Gazette logo"
          />
          <button className="mobile-side-close" onClick={() => setDrawerOpen(false)} aria-label="Close Menu">
            ×
          </button>
        </div>
        <nav className="mobile-side-links">
          <a href="#saudi-arabia" className="nav-item" onClick={() => setDrawerOpen(false)}>
            Saudi Arabia
          </a>
          <a href="#world" className="nav-item" onClick={() => setDrawerOpen(false)}>
            World
          </a>
          <a href="#business" className="nav-item" onClick={() => setDrawerOpen(false)}>
            Business
          </a>
          <a href="#opinion" className="nav-item" onClick={() => setDrawerOpen(false)}>
            Opinion
          </a>
          <a href="#sports" className="nav-item" onClick={() => setDrawerOpen(false)}>
            Sports
          </a>
          <a href="#esports" className="nav-item" onClick={() => setDrawerOpen(false)}>
            Esports
          </a>
          <a href="#life" className="nav-item" onClick={() => setDrawerOpen(false)}>
            Lifestyle
          </a>
          <a href="#video" className="nav-item" onClick={() => setDrawerOpen(false)}>
            Video
          </a>
          <a href="#discover-saudi" className="nav-item" onClick={() => setDrawerOpen(false)}>
            Discover Saudi
          </a>
        </nav>
        <div className="mobile-icons flex items-center justify-between mt-auto mb-4 border-t border-gray-100 pt-4">
          <a href="https://www.youtube.com/channel/UC533uSPWSFXF_JmbknAtmOw" target="_blank" rel="noreferrer">
            <Youtube className="w-5 h-5 text-gray-500" />
          </a>
          <a href="https://www.facebook.com/SaudiGazette/" target="_blank" rel="noreferrer">
            <Facebook className="w-5 h-5 text-gray-500" />
          </a>
          <a href="https://www.instagram.com/saudigazette_sa/" target="_blank" rel="noreferrer">
            <Instagram className="w-5 h-5 text-gray-500" />
          </a>
          <a href="https://x.com/Saudi_Gazette" target="_blank" rel="noreferrer">
            <Twitter className="w-5 h-5 text-gray-500" />
          </a>
          <a href="https://www.linkedin.com/company/saudi-gazette" target="_blank" rel="noreferrer">
            <Linkedin className="w-5 h-5 text-gray-500" />
          </a>
        </div>
        <div className="border-t border-gray-100 pt-3 flex flex-col gap-2">
          <a href="#today-edition" className="text-gray-600 dark:text-zinc-300 font-semibold flex items-center gap-2" onClick={() => setDrawerOpen(false)}>
            <Newspaper className="w-4 h-4" /> Today's PDF Edition
          </a>
        </div>
      </aside>

      {/* CORE WEB LAYOUT CONTENT CARDS */}
      <main className="flex-1 py-4">
        {/* SECTION 1: MAIN FEATURED STORY + 3 SIDE STORIES */}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div id="widget_23762" className="py-2.5">
                {/* Featured Headline Hero */}
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
                            (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg";
                          }}
                        />
                      </picture>
                    </div>
                  </div>
                  <div className="right md:w-[420px] flex flex-col justify-center border-t-2 border-[#C6B995] py-2">
                    <span className="category text-[11px] font-bold text-[#335243] dark:text-emerald-400 tracking-wider">
                      {MAIN_FEATURED_ARTICLE.category}
                    </span>
                    <h2 className="title text-2xl md:text-[29px] font-semibold text-gray-900 mt-1 lines-2 font-serif leading-tight">
                      {MAIN_FEATURED_ARTICLE.title}
                    </h2>
                    <p className="text-[13px] text-gray-600 mt-2 leading-relaxed dark:text-zinc-300">
                      {MAIN_FEATURED_ARTICLE.description}
                    </p>
                    <span className="time text-[11px] text-gray-400 mt-3">{MAIN_FEATURED_ARTICLE.publishTime}</span>
                  </div>
                </div>

                {/* Grid of 3 accompanying featured stories */}
                <div className="three-cards grid grid-cols-1 md:grid-cols-3 gap-6">
                  {THREE_FEATURED_CARDS.map((card) => (
                    <a key={card.id} href={`#${card.id}`} className="block border-b border-gray-100 pb-4 md:border-none md:pb-0">
                      <div className="home-news-card h-full flex flex-col justify-between">
                        <div className="layoutRatioSquare overflow-hidden rounded-lg mb-2">
                          <img
                            src={getImageUrl(card.image)}
                            alt={card.title}
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg";
                            }}
                          />
                        </div>
                        <div className="content mt-1.5 flex flex-col flex-1">
                          <span className="title text-[10px] font-bold text-[#335243] dark:text-emerald-400 uppercase tracking-wider">
                            {card.category}
                          </span>
                          <h2 className="description text-[17px] font-semibold text-gray-900 mt-1 font-serif flex-1">
                            {card.title}
                          </h2>
                          <span className="time text-[11px] text-gray-400 mt-2 block">{card.publishTime}</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: COL-8 SAUDI ARABIA + COL-4 LATEST NEWS */}
        <div className="container mt-6">
          <div className="row mt-4">
            {/* Left Content column: Saudi Arabia Grid */}
            <div className="col-md-9 left-news-container" id="saudi-arabia">
              <h3 className="big-title text-[28px] font-serif font-bold text-[#335243] border-b border-gray-300 pb-1.5">
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
                      <h2 className="description text-xl font-bold font-serif lines-2 text-gray-900 leading-tight">
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
                          <h2 className="description font-semibold text-gray-900 font-serif leading-snug">
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
                <h3 className="big-title text-[28px] font-serif font-bold text-[#335243] border-b border-gray-300 pb-1.5">
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
                          <h2 className="title text-[13px] font-bold text-gray-900 font-serif leading-snug line-clamp-3">
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

        {/* SECTION 3: WORLD SECTION */}
        <div id="world" className="container mt-4">
          <h3 className="big-title text-[28px] font-serif font-bold text-[#335243] border-b border-gray-300 pb-1.5">
            World
          </h3>
          <div className="grid-3-news grid grid-cols-1 md:grid-cols-3 gap-6">
            {WORLD_ARTICLES.slice(0, 6).map((art) => (
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
                    <h2 className="description text-[14.5px] font-semibold text-gray-900 lines-2 font-serif leading-snug">
                      {art.title}
                    </h2>
                    <span className="time text-[11px] text-gray-400">{art.publishTime}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* SECTION 4: LIGHTWEIGHT RICH VIDEO SECTION (DARK BACKGROUND) */}
        <div id="video" className="home-videos py-10 my-8">
          <div className="container">
            <h3 className="videos-title text-[28px] font-serif font-bold text-white border-b border-[#feffff50] pb-2 mb-6">
              Video Insights
            </h3>
            
            {/* Desktop View */}
            <div className="hidden md:block">
              {VIDEO_ARTICLES.length > 0 && (
                <a key={VIDEO_ARTICLES[0].id} href={`#${VIDEO_ARTICLES[0].id}`} className="block group mb-8">
                  <div className="flex flex-row items-center gap-6 bg-[#254034] p-5 rounded-xl border border-[#feffff15]">
                    <div className="w-2/3 shrink-0 relative ratio-video rounded-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
                      <img
                        src={getImageUrl(VIDEO_ARTICLES[0].image)}
                        alt={VIDEO_ARTICLES[0].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg";
                        }}
                      />
                      <div className="play-btn absolute bottom-4 right-4 bg-emerald-700/90 text-white rounded-full p-3.5 shadow-lg group-hover:bg-emerald-600 transition">
                        <Play className="w-5 h-5 fill-white" />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <span className="bg-emerald-600/30 text-emerald-300 text-[11px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-full w-fit mb-3">
                        Featured Video
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-bold text-zinc-100 font-serif leading-tight group-hover:text-amber-300 transition duration-300 mb-4">
                        {VIDEO_ARTICLES[0].title}
                      </h3>
                      <span className="time text-xs text-emerald-200/70 block mt-1">{VIDEO_ARTICLES[0].publishTime}</span>
                    </div>
                  </div>
                </a>
              )}

              {/* Grid of other videos */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {VIDEO_ARTICLES.slice(1).map((art) => (
                  <a key={art.id} href={`#${art.id}`} className="block video-card group">
                    <div className="thumbnail overflow-hidden rounded-lg aspect-video mb-3 relative">
                      <img
                        src={getImageUrl(art.image)}
                        alt={art.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg";
                        }}
                      />
                      <div className="play-btn absolute bottom-3 right-3 bg-emerald-700/90 text-white rounded-full p-2.5 shadow-lg group-hover:bg-emerald-600 transition">
                        <Play className="w-4 h-4 fill-white" />
                      </div>
                    </div>
                    <h3 className="text-[14.5px] font-bold text-zinc-100 font-serif line-clamp-2 leading-snug group-hover:text-amber-300 transition">
                      {art.title}
                    </h3>
                    <span className="time text-[11px] text-gray-300 block mt-1">{art.publishTime}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile View: Horizontal Scroll with 9:16 aspect ratio (276*400) and text on bottom */}
            <div className="md:hidden mt-4 overflow-x-auto overflow-y-hidden flex flex-row gap-4 pb-4 snap-x snap-mandatory scrollbar-none" style={{ scrollbarWidth: 'none' }}>
              {VIDEO_ARTICLES.map((art) => (
                <a key={art.id} href={`#${art.id}`} className="block shrink-0 snap-start group" style={{ width: '276px' }}>
                  <div className="relative overflow-hidden rounded-lg mb-3" style={{ width: '276px', height: '400px' }}>
                    <img
                      src={getImageUrl(art.image)}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300 animate-fade-in"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg";
                      }}
                    />
                    <div className="play-btn absolute bottom-4 right-4 bg-emerald-700/90 text-white rounded-full p-2.5 shadow-lg group-hover:bg-emerald-600 transition">
                      <Play className="w-4 h-4 fill-white" />
                    </div>
                  </div>
                  <h3 className="text-[14.5px] font-bold text-zinc-100 font-serif leading-snug group-hover:text-amber-300 transition line-clamp-2">
                    {art.title}
                  </h3>
                  <span className="time text-[11px] text-gray-300 block mt-1">{art.publishTime}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 5: COL-8 BUSINESS & OPINION + COL-4 EDITOR CHOICE */}
        <div className="container mt-6">
          <div className="row">
            {/* Left structural Column (Business, Opinion, Sports) */}
            <div className="col-md-9">
              {/* Business sub-block */}
              <div id="business" className="mb-6">
                <h3 className="big-title text-[28px] font-serif font-bold text-[#335243] border-b border-gray-300 pb-1.5">
                  Business
                </h3>
                <div className="grid-3-news grid grid-cols-1 md:grid-cols-3 gap-6">
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
                          <h2 className="description text-[14.5px] font-semibold text-gray-900 font-serif leading-snug">
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
                <h3 className="big-title text-[28px] font-serif font-bold text-[#335243] border-b border-gray-300 pb-1.5">
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
                            (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.png";
                          }}
                        />
                        <div className="content flex-1">
                          <h2 className="title text-[14px] font-bold text-gray-900 font-serif leading-tight line-clamp-2">
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
              <div id="sports" className="mb-6 border-t border-gray-100 pt-3">
                <h3 className="big-title text-[28px] font-serif font-bold text-[#335243] border-b border-gray-300 pb-1.5">
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
                        <h2 className="description text-[18px] font-bold font-serif lines-2 text-gray-900">
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
                            <h2 className="description text-[13px] font-semibold text-gray-900 font-serif leading-snug line-clamp-3">
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
              <div id="editors-choice" className="editor-choice-container editor-right border-b border-gray-100 pb-5 mb-5 mt-4">
                <h3 className="title text-[22px] font-serif font-bold text-[#335243] border-b border-gray-300 pb-2 mb-3">
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
                        <h2 className="description text-[15px] font-bold text-gray-900 font-serif mt-1">
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
                  <h3 className="title text-[22px] font-serif font-bold text-[#335243] !border-none !pb-0 m-0">
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

                <div className="most-read-cards flex flex-col gap-4 py-2 transition-all duration-300">
                  {MOST_READ_ARTICLES[mostReadPeriod].map((art, index) => (
                    <a key={art.id} href={`#${art.id}`} className="block">
                      <div className="most-read-row flex items-start gap-2.5">
                        <div className="number text-[26px] font-bold text-[#335243] shrink-0 w-6 font-serif">
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
                          <h2 className="description text-xs font-bold text-gray-900 font-serif leading-snug line-clamp-3">
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
              <div id="newsletter" className="newsletter bg-gray-50 p-4 rounded-xl dark:bg-zinc-800 transition">
                <h3 className="text-lg font-bold text-[#335243] dark:text-emerald-400 font-serif">
                  Gazette Newsletter
                </h3>
                <p className="text-xs text-gray-500 dark:text-zinc-300 mt-1">
                  Stay ahead. Sign up for our direct daily updates, breaking bulletins, and exclusive analysis.
                </p>
                {newsLetterSuccess ? (
                  <p className="text-xs text-emerald-800 bg-emerald-50 p-2.5 rounded border border-emerald-200 mt-3 dark:bg-emerald-950 dark:text-emerald-200">
                    {newsLetterSuccess}
                  </p>
                ) : (
                  <form onSubmit={handleSubscribe} className="mt-3.5 flex flex-col gap-2">
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      value={newsLetterEmail}
                      onChange={(e) => setNewsLetterEmail(e.target.value)}
                      className="w-full bg-white text-black p-2 rounded text-xs border border-gray-300 focus:ring-1 focus:ring-emerald-700 outline-none dark:bg-zinc-700 dark:text-white dark:border-zinc-600"
                    />
                    <button
                      type="submit"
                      className="w-full py-2 bg-[#335243] text-white rounded text-xs font-bold hover:bg-emerald-850 cursor-pointer transition uppercase tracking-wider"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 6: THREE-COLUMN SECONDARY GENERAL SECTIONS (Esports, Lifestyle, Tech) */}
        <div className="container mt-6">
          <div className="row">
            {/* Esports column */}
            <div className="col-md-4 border-r border-gray-100 pr-4" id="esports">
              <h3 className="big-title text-[23px] font-serif font-bold text-[#335243] border-b border-gray-300 pb-1">
                Esports Nations
              </h3>
              <div className="flex flex-col gap-5 py-2">
                {ESPORTS_ARTICLES.map((art) => (
                  <a key={art.id} href={`#${art.id}`} className="block group">
                    <div className="flex gap-3">
                      <img
                        src={getImageUrl(art.image)}
                        alt={art.title}
                        className="w-[100px] h-[75px] rounded object-cover shrink-0"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg";
                        }}
                      />
                      <div className="flex flex-col justify-between flex-1">
                        <h4 className="text-[13.5px] font-bold text-gray-900 group-hover:text-emerald-800 transition font-serif leading-snug line-clamp-3">
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
            <div className="col-md-4 border-r border-gray-100 px-4" id="life">
              <h3 className="big-title text-[23px] font-serif font-bold text-[#335243] border-b border-gray-300 pb-1">
                Lifestyle & Arts
              </h3>
              <div className="flex flex-col gap-5 py-2">
                {LIFESTYLE_ARTICLES.map((art) => (
                  <a key={art.id} href={`#${art.id}`} className="block group">
                    <div className="flex gap-3">
                      <img
                        src={getImageUrl(art.image)}
                        alt={art.title}
                        className="w-[100px] h-[75px] rounded object-cover shrink-0"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg";
                        }}
                      />
                      <div className="flex flex-col justify-between flex-1">
                        <h4 className="text-[13.5px] font-bold text-gray-900 group-hover:text-emerald-800 transition font-serif leading-snug line-clamp-3">
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
            <div className="col-md-4 pl-4" id="tech">
              <h3 className="big-title text-[23px] font-serif font-bold text-[#335243] border-b border-gray-300 pb-1">
                Technology
              </h3>
              <div className="flex flex-col gap-5 py-2">
                {TECHNOLOGY_ARTICLES.map((art) => (
                  <a key={art.id} href={`#${art.id}`} className="block group">
                    <div className="flex gap-3">
                      <img
                        src={getImageUrl(art.image)}
                        alt={art.title}
                        className="w-[100px] h-[75px] rounded object-cover shrink-0"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg";
                        }}
                      />
                      <div className="flex flex-col justify-between flex-1">
                        <h4 className="text-[13.5px] font-bold text-gray-900 group-hover:text-emerald-800 transition font-serif leading-snug line-clamp-3">
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
        </div>

        {/* SECTION 7: DISCOVER SAUDI BENTO SECTIONS */}
        <div id="discover-saudi" className="container mt-6 py-4">
          <h3 className="big-title text-[28px] font-serif font-bold text-[#335243] border-b border-gray-300 pb-1.5">
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
                    <h2 className="description text-[14.5px] font-semibold text-gray-900 font-serif leading-snug">
                      {art.title}
                    </h2>
                    <span className="time text-[10px] text-gray-400 block mt-1">{art.publishTime}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* SECTION 8: TODAY'S EDITION EMBED PREVIEW */}
        <div id="today-edition" className="container my-8 border-t border-gray-100 pt-6">
          <div className="row">
            <div className="col-md-9 mx-auto text-center">
              <h3 className="text-2xl font-serif text-[#335243] font-bold tracking-wide mb-2">Today’s Print Edition</h3>
              <p className="text-xs text-gray-500 mb-4">Click below to view today’s full digital print copy as PDF</p>
              <a
                href="https://www.saudigazette.com.sa/uploads/pdf/2026/05/28/sg-20260528.pdf?ts=1779963334"
                title="today_newspaper"
                target="_blank"
                rel="noreferrer"
                className="inline-block relative rounded-lg overflow-hidden shadow-lg border border-gray-200 group max-w-[270px]"
              >
                <img
                  src="https://cdnx.premiumread.com/?url=https://www.saudigazette.com.sa/uploads/pdf/2026/05/28/sg-20260528.jpeg?ts=1779963334&w=300&q=100&f=webp"
                  width="100%"
                  loading="lazy"
                  alt="today_newspaper PDF Cover"
                  className="group-hover:scale-103 transition duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-black/3 w-full h-full group-hover:bg-black/0 transition" />
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t-[25px] border-[#335243] py-10">
        <div className="container footer-content flex flex-col md:flex-row justify-between gap-10">
          <div className="left-footer flex flex-col justify-between items-start gap-4">
            <a href="#" className="block">
              <img
                alt="Saudi Gazette logo"
                id="footerLogo"
                src={
                  darkMode
                    ? "https://saudigazette.com.sa/saudigazette/uploads/global_files/white-logo.svg"
                    : "https://saudigazette.com.sa/saudigazette/uploads/global_files/logo.svg"
                }
              />
            </a>
            <div className="social flex gap-3 text-emerald-800 dark:text-teal-400 mt-2">
              <a
                href="https://www.youtube.com/channel/UC533uSPWSFXF_JmbknAtmOw"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-full hover:bg-gray-150 transition"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/SaudiGazette/"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-full hover:bg-gray-150 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/saudigazette_sa/"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-full hover:bg-gray-150 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/Saudi_Gazette"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-full hover:bg-gray-150 transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/saudi-gazette"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-full hover:bg-gray-150 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="right-footer flex flex-col md:flex-row gap-10">
            <div className="col1">
              <div className="title text-base font-bold text-[#335243] font-serif border-b border-gray-300 pb-2">
                News Sections
              </div>
              <ul className="links mt-3 grid grid-cols-2 md:grid-cols-1 gap-1.5 md:gap-1 text-[13.5px] font-semibold">
                <li className="link hover:translate-x-1 hover:text-emerald-700 transition">
                  <a href="#saudi-arabia">Saudi Arabia</a>
                </li>
                <li className="link hover:translate-x-1 hover:text-emerald-700 transition">
                  <a href="#world">World</a>
                </li>
                <li className="link hover:translate-x-1 hover:text-emerald-700 transition">
                  <a href="#business">Business</a>
                </li>
                <li className="link hover:translate-x-1 hover:text-emerald-700 transition">
                  <a href="#opinion">Opinion</a>
                </li>
                <li className="link hover:translate-x-1 hover:text-emerald-700 transition">
                  <a href="#sports">Sports</a>
                </li>
                <li className="link hover:translate-x-1 hover:text-emerald-700 transition">
                  <a href="#esports">Esports</a>
                </li>
                <li className="link hover:translate-x-1 hover:text-emerald-700 transition">
                  <a href="#life">Lifestyle</a>
                </li>
                <li className="link hover:translate-x-1 hover:text-emerald-700 transition">
                  <a href="#video">Video</a>
                </li>
                <li className="link hover:translate-x-1 hover:text-emerald-700 transition">
                  <a href="#discover-saudi">Discover Saudi</a>
                </li>
              </ul>
            </div>

            <div className="col1">
              <div className="title text-base font-bold text-[#335243] font-serif border-b border-gray-300 pb-2">
                Saudi Gazette
              </div>
              <ul className="links mt-3 flex flex-col gap-1.5 md:gap-1 text-[13.5px] font-semibold" style={{ columnCount: 1, maxHeight: "unset" }}>
                <li className="link hover:translate-x-1 hover:text-emerald-700 transition">
                  <a href="#about-us">About Us</a>
                </li>
                <li className="link hover:translate-x-1 hover:text-emerald-700 transition">
                  <a href="#privacy-policy">Privacy Policy</a>
                </li>
                <li className="link hover:translate-x-1 hover:text-emerald-700 transition">
                  <a href="#newsletter">Contact Us</a>
                </li>
                <li className="link hover:translate-x-1 hover:text-emerald-700 transition">
                  <a href="#today-edition">Epaper</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright text-center text-xs text-[#335243] mt-8 pt-4 border-t border-gray-100 dark:border-zinc-800">
          Copyright © 2026 Saudi Gazette – All Rights Reserved
        </div>
      </footer>
    </div>
  );
}
