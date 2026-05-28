import { useState, useEffect, FormEvent } from 'react'
import { Newspaper, Mail, Moon, Sun, Search, Menu, X, Play, Youtube, Facebook, Instagram, Twitter, Linkedin, ChevronRight } from 'lucide-react'
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
  MOST_READ_ARTICLES,
} from './data'
import { Article } from './types'

// Modular page components
import HeroFeatured from './components/HeroFeatured'
import SaudiArabia from './components/SaudiArabia'
import LatestNews from './components/LatestNews'
import World from './components/World'
import VideoInsights from './components/VideoInsights'
import Business from './components/Business'
import Opinion from './components/Opinion'
import Sports from './components/Sports'
import Esports from './components/Esports'
import Lifestyle from './components/Lifestyle'
import Technology from './components/Technology'
import DiscoverSaudi from './components/DiscoverSaudi'
import EditorsChoice from './components/EditorsChoice'
import MostRead from './components/MostRead'
import Newsletter from './components/Newsletter'
import PrintEdition from './components/PrintEdition'
import AdaptedArticle from './components/AdaptedArticle'

export default function App() {
  // Page view state: "article" | "home"
  const [currentView, setCurrentView] = useState<'article' | 'home'>('article')

  // Theme state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('mode')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  // Mobile drawer state
  const [drawerOpen, setDrawerOpen] = useState(false)

  // Search state
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<Article[]>([])

  // Most Read active period: "day" | "week" | "month"
  const [mostReadPeriod, setMostReadPeriod] = useState<'day' | 'week' | 'month'>('day')

  // Newsletter state
  const [newsLetterEmail, setNewsLetterEmail] = useState('')
  const [newsLetterSuccess, setNewsLetterSuccess] = useState('')

  // Dynamic Date string state
  const [liveDateString, setLiveDateString] = useState('')

  // Apply dark class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode')
      localStorage.setItem('mode', 'dark')
    } else {
      document.documentElement.classList.remove('dark-mode')
      localStorage.setItem('mode', 'light')
    }
  }, [darkMode])

  // Generate dynamic date with Hijri
  useEffect(() => {
    const calculateSaudiDate = () => {
      try {
        const today = new Date()

        // Format Gregorian
        const gregorianFormatter = new Intl.DateTimeFormat('en-US', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })
        const gregorianDate = gregorianFormatter.format(today)

        // Format Hijri (Umm al-Qura)
        const hijriFormatter = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })
        const hijriParts = hijriFormatter.formatToParts(today)

        const hijriDay = hijriParts.find((p) => p.type === 'day')?.value || '26'
        const hijriYear = hijriParts.find((p) => p.type === 'year')?.value || '1447'
        const hijriMonthRaw = hijriParts.find((p) => p.type === 'month')?.value || 'Muharram'

        // Traditional Saudi Hijri Month Transliterations
        const traditionalMonths: { [key: string]: string } = {
          Muharram: 'Muharram',
          Safar: 'Safar',
          'Rabiʻ I': 'Rabi al-awwal',
          'Rabiʻ II': 'Rabi al-thani',
          'Jumada I': 'Jumada al-ula',
          'Jumada II': 'Jumada al-akhirah',
          Rajab: 'Rajab',
          Shaʻban: "Sha'ban",
          Ramadan: 'Ramadan',
          Shawwal: 'Shawwal',
          'Dhuʻl-Qiʻdah': "Dhu al-Qi'dah",
          'Dhuʻl-Hijjah': 'Dhu al-Hijjah',
        }

        const hijriMonth = traditionalMonths[hijriMonthRaw] || hijriMonthRaw
        return `${gregorianDate} / ${hijriDay}, ${hijriMonth}, ${hijriYear}`
      } catch (err) {
        // Fallback robust date
        return 'Monday July 21, 2025 / 26, Muharram, 1447'
      }
    }

    setLiveDateString(calculateSaudiDate())
  }, [])

  // Handle Search input
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([])
      return
    }

    const query = searchQuery.toLowerCase()
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
      ...DISCOVER_SAUDI_ARTICLES,
    ]

    // Filter duplicates
    const uniqueMap = new Map<string | number, Article>()
    allArticles.forEach((art) => {
      if (art && art.title) {
        uniqueMap.set(art.url, art)
      }
    })

    const results = Array.from(uniqueMap.values()).filter((art) => art.title.toLowerCase().includes(query) || (art.description && art.description.toLowerCase().includes(query)))

    setSearchResults(results)
  }, [searchQuery])

  // Listen to hash changes for single page routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (
        hash === '#home' ||
        hash === '#saudi-arabia' ||
        hash === '#world' ||
        hash === '#business' ||
        hash === '#opinion' ||
        hash === '#sports' ||
        hash === '#esports' ||
        hash === '#life' ||
        hash === '#video' ||
        hash === '#discover-saudi'
      ) {
        setCurrentView('home')
        if (hash !== '#home') {
          setTimeout(() => {
            const el = document.querySelector(hash)
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' })
            }
          }, 100)
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      } else {
        // Default / empty hash or any other hash goes to Special Report article
        setCurrentView('article')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    // Execute on mount to handle direct hash loads
    handleHashChange()

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault()
    if (!newsLetterEmail.trim()) return
    setNewsLetterSuccess("Thank you! You are now subscribed to the Saudi Gazette's newsletter list.")
    setNewsLetterEmail('')
  }

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
                  <div className="fluid-header-date">{liveDateString || 'Loading date...'}</div>

                  {/* Middle descriptive brand header */}
                  <div className="since flex flex-col items-center gap-1.5 absolute left-1/2 -translate-x-1/2">
                    <div className="text-[11px] font-bold text-[#335243] uppercase tracking-widest font-sans dark:text-emerald-400">Since 1976</div>
                    <a href="#" className="block">
                      <div className="logo flex items-center justify-center">
                        <img
                          alt="Saudi Gazette logo"
                          id="logoDesktop"
                          className="h-[55px] w-auto transition-all"
                          src={darkMode ? 'https://saudigazette.com.sa/saudigazette/uploads/global_files/white-logo.svg' : 'https://saudigazette.com.sa/saudigazette/uploads/global_files/logo.svg'}
                        />
                      </div>
                    </a>
                    <div className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mt-1">LEADING THE WAY</div>
                  </div>

                  {/* Right Header Navigation controls */}
                  <div className="right-menu header-icons flex items-center gap-4">
                    <a href="#today-edition" title="Epaper" className="hover:text-emerald-700 transition">
                      <Newspaper className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </a>
                    <a href="#newsletter" title="Contact Us" className="hover:text-emerald-700 transition">
                      <Mail className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </a>
                    <button onClick={() => setDarkMode(!darkMode)} title="Toggle mode" className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-teal-950 transition cursor-pointer">
                      {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
                    </button>
                  </div>
                </div>
              </nav>

              {/* MOBILE NAVIGATION BAR */}
              <nav className="mobile-nav flex md:hidden items-center justify-between py-4 px-3 border-b border-gray-200">
                <button id="burger" onClick={() => setDrawerOpen(true)} className="p-1 rounded text-gray-800 dark:text-white" aria-label="Toggle Menu">
                  <Menu className="w-6 h-6" />
                </button>
                <a href="#">
                  <img
                    id="logoMobile"
                    alt="Saudi Gazette logo"
                    className="h-9 w-auto"
                    src={darkMode ? 'https://saudigazette.com.sa/saudigazette/uploads/global_files/white-logo.svg' : 'https://saudigazette.com.sa/saudigazette/uploads/global_files/logo.svg'}
                  />
                </a>
                <div className="flex items-center gap-3.5">
                  <button id="darkModeBtnMobile" onClick={() => setDarkMode(!darkMode)} className="p-1 text-gray-800 dark:text-white" aria-label="Toggle Theme">
                    {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
                  </button>
                  <button onClick={() => setSearchOpen(!searchOpen)} className="p-1 text-gray-800 dark:text-white" aria-label="Search">
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
        <div className="main-menu hidden md:flex w-full justify-between items-center py-2.5 mb-4 flex-wrap gap-y-2.5">
          <div className="hidden" />
          <div className="flex flex-row flex-wrap items-center justify-start xl:justify-center gap-1 md:gap-y-2 md:gap-x-2.5 overflow-visible flex-1 min-w-0 mr-4">
            <a
              href="#exclusive-report"
              className={`nav-item text-[13px] tracking-wide uppercase font-bold px-3 py-1.5 transition whitespace-nowrap rounded ${
                currentView === 'article' ? 'bg-emerald-800 text-white dark:bg-emerald-700' : 'text-red-700 hover:text-emerald-700 hover:bg-gray-150 dark:hover:bg-zinc-800'
              }`}
            >
              Kuwait Exclusive
            </a>
            <a
              href="#home"
              className={`nav-item text-[13px] tracking-wide uppercase font-bold px-3 py-1.5 transition whitespace-nowrap rounded ${
                currentView === 'home' ? 'bg-emerald-800 text-white dark:bg-emerald-700' : 'text-gray-800 hover:text-emerald-700 hover:bg-gray-150 dark:hover:bg-zinc-800'
              }`}
            >
              Home Feed
            </a>
            <span className="text-gray-300 px-1 font-normal select-none">|</span>
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
            <button onClick={() => setSearchOpen(!searchOpen)} className="p-1 rounded text-gray-800 dark:text-white cursor-pointer hover:bg-gray-150 transition" title="Search">
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
                  setSearchOpen(false)
                  setSearchQuery('')
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
                <p className="text-[11px] font-semibold text-gray-400 mb-3 uppercase tracking-wider">Matches found: {searchResults.length}</p>
                {searchResults.length > 0 ? (
                  <div className="divide-y divide-gray-100 dark:divide-zinc-700">
                    {searchResults.map((art) => (
                      <a key={art.id} href={`#${art.id}`} onClick={() => setSearchOpen(false)} className="py-3 flex gap-3.5 hover:bg-gray-50 dark:hover:bg-zinc-700 rounded px-2 transition">
                        <img
                          src={getImageUrl(art.image)}
                          alt=""
                          className="w-16 h-12 object-cover rounded"
                          onError={(e) => {
                            ;(e.target as HTMLImageElement).src = 'https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg'
                          }}
                        />
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold text-[#335243] uppercase dark:text-teal-400">{art.category || 'News'}</span>
                          <span className="text-[14px] font-bold text-gray-900 dark:text-white line-clamp-1">{art.title}</span>
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
      <div className={`mobile-side-overlay ${drawerOpen ? 'open' : ''}`} onClick={() => setDrawerOpen(false)} aria-hidden="true" />
      <aside className={`mobile-side-menu ${drawerOpen ? 'open' : ''}`} aria-label="Mobile Menu">
        <div className="mobile-side-header">
          <img
            id="logoDesktopSidebar"
            src={darkMode ? 'https://saudigazette.com.sa/saudigazette/uploads/global_files/white-logo.svg' : 'https://saudigazette.com.sa/saudigazette/uploads/global_files/logo.svg'}
            className="mobile-side-logo"
            alt="Saudi Gazette logo"
          />
          <button className="mobile-side-close" onClick={() => setDrawerOpen(false)} aria-label="Close Menu">
            ×
          </button>
        </div>
        <nav className="mobile-side-links">
          <a href="#exclusive-report" className="nav-item text-emerald-700 font-extrabold flex items-center gap-2 dark:text-emerald-400" onClick={() => setDrawerOpen(false)}>
            🇰🇼 KUWAIT EXCLUSIVE
          </a>
          <a href="#home" className="nav-item text-gray-500 font-bold flex items-center gap-2" onClick={() => setDrawerOpen(false)}>
            📰 HOME FEED
          </a>
          <hr className="my-2 border-gray-200 dark:border-zinc-700" />
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
        <div className={currentView === 'article' ? 'block' : 'hidden'}>
          <AdaptedArticle
            newsLetterEmail={newsLetterEmail}
            setNewsLetterEmail={setNewsLetterEmail}
            newsLetterSuccess={newsLetterSuccess}
            handleSubscribe={handleSubscribe}
            mostReadPeriod={mostReadPeriod}
            setMostReadPeriod={setMostReadPeriod}
          />
        </div>

        <div className={currentView === 'home' ? 'block' : 'hidden'}>
          {/* DESKTOP LAYOUT (>= 768px) */}
          <div className="hidden md:block container px-4">
            <div className="mb-8">
              <HeroFeatured />
            </div>
            <div className="grid grid-cols-12 gap-8">
              {/* Left Content Column (75% / col-span-9) */}
              <div className="col-span-9 flex flex-col gap-6">
                <SaudiArabia />
                <World />
                <VideoInsights />
                <Business />
                <Opinion />
                <Sports />
                <Esports />
                <Lifestyle />
                <Technology />
              </div>

              {/* Right Sidebar Column (25% / col-span-3) */}
              <div className="col-span-3 flex flex-col gap-6 border-l border-gray-200 pl-6 dark:border-zinc-800">
                <LatestNews />
                <EditorsChoice />
                <MostRead mostReadPeriod={mostReadPeriod} setMostReadPeriod={setMostReadPeriod} />
                <Newsletter newsLetterEmail={newsLetterEmail} setNewsLetterEmail={setNewsLetterEmail} newsLetterSuccess={newsLetterSuccess} handleSubscribe={handleSubscribe} />
                <PrintEdition />
              </div>
            </div>
            <div className="mt-12 border-t border-gray-200 pt-8 dark:border-zinc-800">
              <DiscoverSaudi />
            </div>
          </div>

          {/* MOBILE LAYOUT (< 768px) */}
          <div className="block md:hidden container px-4 flex flex-col gap-6">
            <HeroFeatured />
            <SaudiArabia />
            <LatestNews />
            <World />
            <VideoInsights />
            <Business />
            <Opinion />
            <Sports />
            <Esports />
            <Lifestyle />
            <Technology />
            <EditorsChoice />
            <MostRead mostReadPeriod={mostReadPeriod} setMostReadPeriod={setMostReadPeriod} />
            <Newsletter newsLetterEmail={newsLetterEmail} setNewsLetterEmail={setNewsLetterEmail} newsLetterSuccess={newsLetterSuccess} handleSubscribe={handleSubscribe} />
            <PrintEdition />
            <DiscoverSaudi />
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
                src={darkMode ? 'https://saudigazette.com.sa/saudigazette/uploads/global_files/white-logo.svg' : 'https://saudigazette.com.sa/saudigazette/uploads/global_files/logo.svg'}
              />
            </a>
            <div className="social flex gap-3 text-emerald-800 dark:text-teal-400 mt-2">
              <a href="https://www.youtube.com/channel/UC533uSPWSFXF_JmbknAtmOw" target="_blank" rel="noreferrer" className="p-1.5 rounded-full hover:bg-gray-150 transition">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/SaudiGazette/" target="_blank" rel="noreferrer" className="p-1.5 rounded-full hover:bg-gray-150 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/saudigazette_sa/" target="_blank" rel="noreferrer" className="p-1.5 rounded-full hover:bg-gray-150 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://x.com/Saudi_Gazette" target="_blank" rel="noreferrer" className="p-1.5 rounded-full hover:bg-gray-150 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/saudi-gazette" target="_blank" rel="noreferrer" className="p-1.5 rounded-full hover:bg-gray-150 transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="right-footer flex flex-col md:flex-row gap-10">
            <div className="col1">
              <div className="title text-base font-bold text-[#335243] font-serif border-b border-gray-300 pb-2">News Sections</div>
              <ul className="links mt-3 grid grid-cols-2 gap-x-6 gap-y-1.5 md:gap-y-1 text-[13.5px] font-semibold">
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
              <div className="title text-base font-bold text-[#335243] font-serif border-b border-gray-300 pb-2">Saudi Gazette</div>
              <ul className="links mt-3 flex flex-col gap-1.5 md:gap-1 text-[13.5px] font-semibold" style={{ columnCount: 1, maxHeight: 'unset' }}>
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

        <div className="copyright text-center text-xs text-[#335243] mt-8 pt-4">Copyright © 2026 Saudi Gazette – All Rights Reserved</div>
      </footer>
    </div>
  )
}
