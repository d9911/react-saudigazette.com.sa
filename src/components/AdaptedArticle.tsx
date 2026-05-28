import { useState, useEffect } from "react";
import { Play } from "lucide-react";
import LatestNews from "./LatestNews";
import EditorsChoice from "./EditorsChoice";
import MostRead from "./MostRead";
import Newsletter from "./Newsletter";
import PrintEdition from "./PrintEdition";

interface Props {
  newsLetterEmail: string;
  setNewsLetterEmail: (email: string) => void;
  newsLetterSuccess: string;
  handleSubscribe: (e: any) => void;
  mostReadPeriod: "day" | "week" | "month";
  setMostReadPeriod: (p: "day" | "week" | "month") => void;
}

export default function AdaptedArticle({
  newsLetterEmail,
  setNewsLetterEmail,
  newsLetterSuccess,
  handleSubscribe,
  mostReadPeriod,
  setMostReadPeriod
}: Props) {
  // Current Date Helper
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const d = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    setFormattedDate(d.toLocaleDateString("en-US", options));
  }, []);

  return (
    <div id="adapted-exclusive-report" className="container py-2 fluid-article-container">
      {/* Breadcrumb path */}
      <div className="text-[11px] font-bold text-[#335243] dark:text-emerald-400 uppercase tracking-widest mb-4">
        Home &gt; World &gt; Exclusive Report
      </div>

      <div className="grid grid-cols-11 gap-8">
        {/* LEFT COLUMN: MAIN ARTICLE & COMMENTS (col-span-8 / 73% width) */}
        <div className="col-span-11 md:col-span-8 flex flex-col gap-6">
          <article className="prose dark:prose-invert max-w-none">
            {/* Main Headline */}
            <h1 className="fluid-article-title font-bold tracking-tight font-serif text-gray-900 leading-tight dark:text-gray-100 mb-4">
              SPECIAL REPORT: Trump's sudden decision on Elon Musk after the reveal of an AI-powered investment platform that has taken Kuwait by storm
            </h1>

            {/* Author Profile section */}
            <div className="fluid-author-section flex items-center gap-3.5 border-y border-gray-200 py-3.5 dark:border-zinc-700">
              <img
                src="assets/img/1225_1707461067.jpg"
                alt="Reuters"
                className="w-11 h-11 rounded-full object-cover shrink-0 border border-gray-200"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/authors/693.jpg";
                }}
              />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-900 dark:text-zinc-200">
                  By Reuters / Saudi Gazette Investigative Team
                </span>
                <span className="text-[11px] text-gray-400 font-sans">
                  Published: {formattedDate || "Thursday, May 28, 2026"} At 10:21 PM
                </span>
              </div>
            </div>

            {/* Main Article Body content */}
            <div className="fluid-article-paragraph text-gray-800 leading-relaxed dark:text-zinc-200 flex flex-col gap-5 font-sans">
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src="assets/img/change-trumu1.png"
                  alt="Donald Trump and Elon Musk"
                  className="w-full object-cover transition"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg";
                  }}
                />
              </div>

              <p className="mt-2.5">
                According to sources close to decision-making circles, Trump expressed strong displeasure after reviewing information indicating that Elon Musk's team was developing an AI-powered digital investment system — a platform for managing and generating automated returns, which was initially launched during its beta phase exclusively for residents of <strong>Kuwait</strong>.
              </p>

              <h2 className="fluid-article-heading font-bold text-emerald-800 dark:text-emerald-400 font-serif mt-6 mb-2">
                Why did this cause so much controversy?
              </h2>

              <p>
                Sources familiar with the matter described the meeting in the White House as sharp and charged. The leak revealed that the newly developed system is capable of providing automated income solutions for citizens and residents of Kuwait through advanced algorithmic trading technologies, which was seen as bypassing internal economic priorities in Washington.
              </p>

              <p>
                One insider pointed out that the administration viewed this external launch as a controversial strategic move, especially given the technical capabilities that could reshape the concept of access to digital markets.
              </p>

              <p>
                In response, Musk asserted that choosing Kuwait as the initial test market was part of a carefully planned pilot scheme, given its forward-thinking regulatory environment and readiness to embrace innovation in the digital asset sector.
              </p>

              <h2 className="fluid-article-heading font-bold text-emerald-800 dark:text-emerald-400 font-serif mt-6 mb-2">
                What exactly was revealed?
              </h2>

              <p>
                Leaked documents indicate that the platform — commercially known as{" "}
                <a
                  href="{offer}"
                  className="text-emerald-700 dark:text-teal-400 font-bold underline hover:text-emerald-600"
                >
                  Crypro Platform AI
                </a>{" "}
                — relies on sophisticated machine learning models to analyze market data in real-time, executing precise trading strategies that target minor price discrepancies within digital asset markets.
              </p>

              <ul className="list-disc pl-6 flex flex-col gap-2 my-2 text-gray-700 dark:text-zinc-300">
                <li>Fully automated 24/7 operation with no manual intervention required.</li>
                <li>
                  Minimum entry deposit starting from just <strong>88 Kuwaiti Dinars (KWD)</strong>.
                </li>
                <li>Full flexibility in withdrawals and capital management at any time.</li>
              </ul>

              <p>
                According to the development team, the platform was specifically designed for individuals looking to diversify their income streams without the need to follow the markets closely or possess advanced trading expertise.
              </p>

              <h2 className="fluid-article-heading font-bold text-emerald-800 dark:text-emerald-400 font-serif mt-6 mb-2">
                Is this reshaping the concept of financial independence in Kuwait?
              </h2>

              <p>
                Analysts believe that{" "}
                <a
                  href="{offer}"
                  className="text-emerald-700 dark:text-teal-400 font-bold underline hover:text-emerald-600"
                >
                  Crypro Platform AI
                </a>{" "}
                may represent a paradigm shift in traditional investment mechanisms by lowering technical barriers and reducing reliance on high fees or traditional intermediaries, all while fully automating back-end operations.
              </p>

              <p>
                An analyst explained to reporters that scaling this technology could grant a broader segment of the population access to financial tools that were previously the exclusive domain of large institutions.
              </p>

              <p>
                The system operates as a trading infrastructure built on neural networks, scanning digital markets, spotting price arbitrage opportunities, and executing a vast number of transactions in fractions of a second. This enables potential gains even from tiny price fluctuations at a speed that far exceeds human response capabilities.
              </p>

              <h2 className="fluid-article-heading font-bold text-emerald-800 dark:text-emerald-400 font-serif mt-6 mb-2">
                What is the next step?
              </h2>

              <p>
                While political discussions regarding the legal framework continue, the rollout of{" "}
                <a
                  href="{offer}"
                  className="text-emerald-700 dark:text-teal-400 font-bold underline hover:text-emerald-600"
                >
                  Crypro Platform AI
                </a>{" "}
                inside <strong>Kuwait</strong> is moving forward within an early registration phase subject to local compliance guidelines.
              </p>

              <p>
                A limited number of slots are currently available during this beta testing phase, allowing users to experience the system early.
              </p>

              <h2 className="fluid-article-heading font-bold text-emerald-800 dark:text-emerald-400 font-serif mt-6 mb-2">
                The Quiet Financial Challenge Solved by This Technology
              </h2>

              <p>
                In Kuwait, many are feeling a growing financial squeeze — not an immediate crisis, but a general state of anticipation and uncertainty. Cost of living is steadily climbing, while the need for secondary income streams remains more pressing than ever.
              </p>

              <p>
                Between family obligations, educational expenses, and daily living requirements, many residents are actively searching for investment solutions that offer greater stability and flexibility.
              </p>

              <p>
                This is the exact context in which{" "}
                <a
                  href="{offer}"
                  className="text-emerald-700 dark:text-teal-400 font-bold underline hover:text-emerald-600"
                >
                  Crypro Platform AI
                </a>{" "}
                was developed.
              </p>

              <p>
                It was not designed for speculative gambling, but as a digital tool for efficient asset management, relying on algorithmic analysis and automated execution to slash the stress associated with daily market tracking.
              </p>

              <p className="italic border-l-4 border-[#335243] pl-4 my-4 font-serif text-gray-700 dark:text-zinc-300">
                “It is not about overnight riches, but rather about providing a stable technical framework that helps individuals navigate unpredictable market volatility.”
              </p>

              <h2 className="fluid-article-heading font-bold text-emerald-800 dark:text-emerald-400 font-serif mt-6 mb-2">
                What Distinguishes the Platform?
              </h2>

              <ul className="list-disc pl-6 flex flex-col gap-2 my-2 text-gray-700 dark:text-zinc-300">
                <li>Real-time algorithmic trading execution with zero manual effort.</li>
                <li>Simplified, user-friendly interface requiring no prior trading experience.</li>
                <li>Architected in alignment with Kuwait's digital regulatory standards.</li>
                <li>Ability to start with low capital (just 88 KWD) combined with absolute withdrawal flexibility.</li>
              </ul>

              <p className="bg-emerald-50 dark:bg-emerald-950/30 p-4 border border-emerald-100 dark:border-emerald-900 rounded-lg text-sm text-emerald-900 dark:text-emerald-300 font-medium">
                Update: Early registration has been opened for Crypro Platform AI to all residents of Kuwait during this limited launch window. Acceptance may close immediately once the designated slots are filled.
              </p>

              {/* GIANT CALL TO ACTION BUTTON */}
              <div className="my-8 text-center">
                <a
                  href="{offer}"
                  className="inline-block w-full max-w-lg bg-emerald-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg border border-emerald-600 hover:bg-emerald-600 transition-transform hover:scale-103 uppercase text-lg tracking-wider"
                  style={{ textDecoration: "none" }}
                >
                  Visit Official Website &rarr;
                </a>
              </div>

              <h2 className="fluid-article-heading font-bold text-emerald-800 dark:text-emerald-400 font-serif mt-6 mb-2">
                How to secure early access to Crypro Platform AI
              </h2>

              <p>
                The platform is currently being rolled out exclusively in <strong>Kuwait</strong> as part of a limited beta phase, allowing early users to explore the system's capabilities ahead of any potential regional expansion.
              </p>

              <p>
                Crypro Platform AI is currently undergoing technical audits and operational standard testing to align with compliance guidelines applicable in Kuwait.
              </p>

              <h2 className="fluid-article-heading font-bold text-emerald-800 dark:text-emerald-400 font-serif mt-6 mb-2">
                How to Get Started
              </h2>

              <ul className="list-disc pl-6 flex flex-col gap-2 my-2 text-gray-700 dark:text-zinc-300">
                <li>Completing registration takes less than two minutes.</li>
                <li>No long-term commitments — you dictate the size of your starting capital.</li>
                <li>Withdraw your funds anytime directly via your personal dashboard.</li>
              </ul>

              <h2 className="fluid-article-heading font-bold text-emerald-800 dark:text-emerald-400 font-serif mt-6 mb-2">
                Why Kuwait's residents are turning to this platform:
              </h2>

              <ul className="list-disc pl-6 flex flex-col gap-2 my-2 text-gray-700 dark:text-zinc-300">
                <li>All operations are secured by military-grade encryption protocols matching banking standards, compliant with user-protection guidelines in Kuwait.</li>
                <li>An operational framework aligned with Kuwait's financial tech standards.</li>
                <li>Flexible starting point without requiring large lump-sum capital.</li>
                <li>Designed for everyday individuals looking for practical solutions — not tuned for giant institutional corporations.</li>
                <li>We highly recommend registering during the early-access phase to secure your slot, even if you decide to fund and activate your account later.</li>
              </ul>

              <div className="my-8 text-center">
                <a
                  href="{offer}"
                  className="inline-block w-full max-w-lg bg-emerald-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg border border-emerald-600 hover:bg-emerald-600 transition-transform hover:scale-103 uppercase text-lg tracking-wider"
                  style={{ textDecoration: "none" }}
                >
                  Visit Official Website &rarr;
                </a>
              </div>

              {/* DAVE WHITE 7-DAY DIARY SECTION */}
              <div className="border border-gray-200 dark:border-zinc-700 rounded-xl p-5 my-8 bg-gray-50 dark:bg-zinc-800/30">
                <h3 className="text-xl font-bold text-emerald-800 dark:text-teal-400 font-serif mb-4 uppercase">
                  EXCLUSIVE: Dave White's 7-Day Experience with Crypro Platform AI in Kuwait
                </h3>

                <div className="flex flex-col gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-base">Day 1:</h4>
                    <p className="text-sm text-gray-600 dark:text-zinc-300 mt-1">
                      “Initially, I thought it might be too complex, but I decided to test the system myself. I used my credit card to make the minimum deposit of <strong>88 KWD</strong> to observe how the algorithm performs. For the first few minutes, I didn't see any activity, but then the algorithm executed a trade. The first result wasn't positive — a minor loss of 4.5 KWD — which is normal in any genuine trading environment. However, after several micro-trades, the system bounced back, leaving me with a balance that went from 88 KWD to 102 KWD, which immediately boosted my confidence in its risk-management setup.”
                    </p>
                    <div className="max-w-md mx-auto mt-4 overflow-hidden rounded-lg">
                      <img
                        src="assets/img/davewhite.png"
                        alt="Diary Day 1"
                        className="w-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg";
                        }}
                      />
                    </div>
                  </div>

                  <hr className="border-gray-200 dark:border-zinc-700" />

                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-base">Day 3:</h4>
                    <p className="text-sm text-gray-600 dark:text-zinc-300 mt-1">
                      “On the morning of the third day, I checked my dashboard. My balance had reached 185 KWD. In just 48 hours, the return exceeded 100% of my initial capital. I thought about initiating a partial withdrawal, but resolved to let the system run for a full week to see how far it could go.”
                    </p>
                  </div>

                  <hr className="border-gray-200 dark:border-zinc-700" />

                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-base">Day 7:</h4>
                    <p className="text-sm text-gray-600 dark:text-zinc-300 mt-1">
                      “I didn't monitor the account every day; I simply let the algorithm execute trades according to its automated strategy. When I logged in after a week, I reviewed the performance log. The statistics showed that the vast majority of trades were highly successful, while the minor losses were securely capped. My balance rose to 1,310 KWD! I initiated a withdrawal of 760 KWD as a trial; the funds reached my bank account in about an hour, while the remaining balance continued to trade automatically.”
                    </p>
                    <div className="max-w-md mx-auto mt-4 overflow-hidden rounded-lg whitespace-nowrap bg-white p-3 dark:bg-zinc-800">
                      <p className="text-xs text-gray-400 mb-1 font-mono uppercase tracking-wider">Account Statement Verification:</p>
                      <img
                        src="assets/img/nordiqostatement.png"
                        alt="Bank Statement KWD adaptation"
                        className="w-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg";
                        }}
                      />
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-zinc-300 mt-4 italic">
                  “My experience with Crypro Platform AI has been phenomenal. Performance is all about letting the system manage the capital consistently. The longer you keep it active, the more your compounding returns can accumulate.”
                </p>
              </div>

              <h2 className="text-2xl font-bold text-emerald-800 dark:text-emerald-400 font-serif mt-6 mb-2">
                Five Steps to Secure Your Registration
              </h2>

              <ol className="list-decimal pl-6 flex flex-col gap-2.5 my-2">
                <li>
                  Go to the official registration section of{" "}
                  <a href="{offer}" className="text-emerald-700 dark:text-teal-400 underline font-bold">
                    Crypro Platform AI
                  </a>.
                </li>
                <li>After signing up, await a call from your dedicated local account manager to activate your account profile.</li>
                <li>
                  Make your initial fund deposit. The starting threshold is <strong>88 KWD</strong>.
                </li>
                <li>Within minutes, the engine starts parsing global digital markets to execute real-time arbitrage trades.</li>
                <li>
                  Request withdrawals at any time directly to your local bank account in Kuwait. Funds typically clear in 2-3 hours.
                </li>
              </ol>

              <p className="text-sm text-gray-500 italic mt-4">
                Note: Until {formattedDate || "today"}, new account registration is free. Due to system capacity limits, only <strong>37 slots</strong> remain open. Register today to reserve your place.
              </p>

              <div className="my-8 text-center">
                <a
                  href="{offer}"
                  className="inline-block w-full max-w-lg bg-emerald-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg border border-emerald-600 hover:bg-emerald-600 transition-transform hover:scale-103 uppercase text-lg tracking-wider"
                  style={{ textDecoration: "none" }}
                >
                  Claim My Account Slot Now &rarr;
                </a>
              </div>
            </div>
          </article>

          {/* COMMENTS SECTION FROM ARABIC DONOR-1 */}
          <section className="com-section border-t-2 border-[#C6B995] pt-8 mt-4">
            <h3 className="text-2xl font-bold font-serif text-gray-900 dark:text-gray-150 mb-6">
              Recent Comments (20)
            </h3>

            <div className="flex flex-col gap-5">
              {[
                {
                  id: 1,
                  avatar: "lewis.jpg",
                  author: "Maryam Al-Hosani",
                  comment: "I've been using this platform for the past few weeks, and the results have been remarkably steady. I managed to make a total return of about 590 KWD so far. Truly satisfied with this experience!",
                  likes: 13,
                  time: "12 minutes ago"
                },
                {
                  id: 2,
                  avatar: "tanya.jpg",
                  author: "Aisha Al-Dhaheri",
                  comment: "I saw an interview about this platform and registered yesterday. I am already seeing early results of about 6.5 KWD. Looking forward to keeping a daily close eye on the performance.",
                  likes: 6,
                  time: "13 minutes ago"
                },
                {
                  id: 3,
                  avatar: "katy.jpg",
                  author: "Omar Al-Suwaidi",
                  comment: "The user interface is incredibly simple. After completing the deposit, the automated trading system immediately started executing trades without requiring constant monitoring on my end.",
                  likes: 43,
                  time: "about an hour ago"
                },
                {
                  id: 4,
                  avatar: "amanda.jpg",
                  author: "Salma Al-Nuaimi",
                  comment: "I read this special report and found it extremely informative. Thank you so much for sharing these valuable updates!",
                  likes: 3,
                  time: "1 hour ago"
                },
                {
                  id: 5,
                  avatar: "julie.jpg",
                  author: "Reem Al-Mazrouei",
                  comment: "I've always had an interest in Bitcoin and digital assets. I'm definitely going to try out this system to see how the algorithm manages trades.",
                  likes: 0,
                  time: "2 hours ago"
                },
                {
                  id: 6,
                  avatar: "sarah.jpg",
                  author: "Khaled Bin Fadel",
                  comment: "Over my first week of usage, I noticed a steady increase in my overall balance. I am still evaluating the performance before increasing my capital.",
                  likes: 12,
                  time: "2 hours ago"
                },
                {
                  id: 7,
                  avatar: "kirs.jpg",
                  author: "Noor Al-Shamsi",
                  comment: "I just bought my very first digital asset recently. Having an automated system handle the market fluctuations over the next couple of days is highly reassuring.",
                  likes: 30,
                  time: "2 hours ago"
                },
                {
                  id: 8,
                  avatar: "celia.jpg",
                  author: "Huda Al-Qasimi",
                  comment: "The process has been incredibly smooth. The platform is transparent and simple to navigate, which has kept me highly motivated to continue.",
                  likes: 53,
                  time: "2 hours ago"
                },
                {
                  id: 9,
                  avatar: "alanna.jpg",
                  author: "Latifa Al-Hammadi",
                  comment: "Thanks for the step-by-step breakdown. I just registered and will start tracking the returns starting tomorrow morning!",
                  likes: 16,
                  time: "2 hours ago"
                },
                {
                  id: 10,
                  avatar: "alice.jpg",
                  author: "Zayed Al-Sharqi",
                  comment: "With a busy family life, I was looking for a solution that runs purely on autopilot. In four days of trading, my balance has already grown noticeably. A great start for me!",
                  likes: 2,
                  time: "2 hours ago"
                },
                {
                  id: 11,
                  avatar: "mark.jpg",
                  author: "Faisal Al-Marri",
                  comment: "I started with a deposit of about 175 KWD. Within a short period, I saw a very solid increase in my account balance. I'll continue to manage my risk carefully.",
                  likes: 11,
                  time: "2 hours ago"
                },
                {
                  id: 12,
                  avatar: "ashley.jpg",
                  author: "Dana Al-Mazrouei",
                  comment: "This platform is so fast and efficient! Even though I'm not a technical person at all, I understood the setup immediately and made great initial returns.",
                  likes: 33,
                  time: "2 hours ago"
                },
                {
                  id: 13,
                  avatar: "brit.jpg",
                  author: "Yousef Al-Shehhi",
                  comment: "Two different colleagues at my office mentioned this platform to me. Since they're both having a great experience, I am planning to sign up tonight.",
                  likes: 6,
                  time: "3 hours ago"
                },
                {
                  id: 14,
                  avatar: "shel.jpg",
                  author: "Khaled Bin Suhail",
                  comment: "I shared this report with a group of friends interested in fintech and digital investments. Terrific, clear explanation!",
                  likes: 2,
                  time: "3 hours ago"
                },
                {
                  id: 15,
                  avatar: "jill.jpg",
                  author: "Majed Al-Hashemi",
                  comment: "I was highly skeptical at first, but after a short trial, I am seeing very positive results. The transaction execution speed and clear data presentation are spectacular.",
                  likes: 17,
                  time: "4 hours ago"
                },
                {
                  id: 16,
                  avatar: "molly.jpg",
                  author: "Fatima Al-Shappar",
                  comment: "Just made my initial deposit today. Super excited to watch the system run over the week and see how it performs!",
                  likes: 8,
                  time: "6 hours ago"
                },
                {
                  id: 17,
                  avatar: "jenna.jpg",
                  author: "Nouf Al-Hammadi",
                  comment: "By far one of the easiest investment dashboards I've ever used. I can manage everything directly from my phone without any prior trading background.",
                  likes: 20,
                  time: "8 hours ago"
                },
                {
                  id: 18,
                  avatar: "sara.jpg",
                  author: "Salem Al-Bastaki",
                  comment: "I used this platform previously and had a great, stable experience. Decided to activate my account again after reading about their latest technical updates.",
                  likes: 13,
                  time: "8 hours ago"
                },
                {
                  id: 19,
                  avatar: "silver.jpg",
                  author: "Rashid Al-Farsi",
                  comment: "Many of my friends recently started investing in digital assets. Reading this given deep analysis makes me highly comfortable starting now.",
                  likes: 3,
                  time: "8 hours ago"
                },
                {
                  id: 20,
                  avatar: "got.jpg",
                  author: "Layla Al-Qubaisi",
                  comment: "Does the system support multiple digital altcoins like Ethereum, or is it focused mostly on Bitcoin? I'll love to know the diversity of options.",
                  likes: 5,
                  time: "9 hours ago"
                }
              ].map((com) => (
                <div key={com.id} className="flex gap-4 border border-gray-100 rounded-lg dark:border-zinc-800 fluid-comment-card">
                  <img
                    src={`assets/img/${com.avatar}`}
                    alt={com.author}
                    className="w-12 h-12 rounded-full object-cover shrink-0 border border-gray-200"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg";
                    }}
                  />
                  <div className="flex flex-col gap-1.5 flex-1">
                    <span className="text-sm font-bold text-gray-900 dark:text-zinc-200">{com.author}</span>
                    <p className="fluid-comment-text text-gray-700 dark:text-zinc-300 leading-normal m-0">{com.comment}</p>
                    <div className="text-[11px] text-gray-400 flex gap-4 mt-1 font-sans">
                      <span>Reply</span>
                      <span>&middot;</span>
                      <span className="text-emerald-700 font-semibold dark:text-teal-400">Like &middot; {com.likes}</span>
                      <span>&middot;</span>
                      <span>{com.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: INTEGRATED NO-BAR & EXCLUSIVE ADAPTED COLUMN (col-span-3 / 27% width) */}
        <div className="col-span-11 md:col-span-3 flex flex-col gap-8 border-l border-gray-200 pl-6 dark:border-zinc-800">
          
          {/* THREE SIMPLE STEPS (Adapted Donor-1 Sidebar block) */}
          <div className="bg-emerald-50 dark:bg-emerald-950/20 rounded-xl p-5 border border-emerald-100 dark:border-emerald-900/50 flex flex-col gap-4">
            <h4 className="title text-base font-bold text-emerald-800 border-b border-emerald-250 pb-2 mb-1 dark:text-teal-400 uppercase tracking-wider font-serif">
              Three Steps To Start
            </h4>
            
            <div className="flex flex-col gap-4 text-xs text-gray-700 dark:text-zinc-300">
              <div className="flex flex-col gap-2">
                <span className="font-bold text-emerald-800 dark:text-teal-400 flex items-center gap-1.5">
                  <img
                    src="assets/img/checkmark.png"
                    alt=""
                    className="w-4 h-4 shrink-0 object-contain"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  Step 1: Free Registration
                </span>
                <p className="m-0">Create a free secure account on the official portal.</p>
                <div className="rounded overflow-hidden border border-gray-200 bg-white p-1">
                  <img
                    src="assets/img/s1.png"
                    alt="Register Account"
                    className="w-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg";
                    }}
                  />
                </div>
              </div>

              <hr className="border-emerald-100 dark:border-emerald-900" />

              <div className="flex flex-col gap-2">
                <span className="font-bold text-emerald-800 dark:text-teal-400 flex items-center gap-1.5">
                  <img
                    src="assets/img/checkmark.png"
                    alt=""
                    className="w-4 h-4 shrink-0 object-contain"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  Step 2: Fund With 88 KWD
                </span>
                <p className="m-0">Deposit the introductory threshold to load your account.</p>
                <div className="rounded overflow-hidden border border-gray-200 bg-white p-1">
                  <img
                    src="assets/img/s2.jpg"
                    alt="Fund Account"
                    className="w-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg";
                    }}
                  />
                </div>
              </div>

              <hr className="border-emerald-100 dark:border-emerald-900" />

              <div className="flex flex-col gap-2">
                <span className="font-bold text-emerald-800 dark:text-teal-400 flex items-center gap-1.5">
                  <img
                    src="assets/img/checkmark.png"
                    alt=""
                    className="w-4 h-4 shrink-0 object-contain"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  Step 3: Monitor & Withdraw
                </span>
                <p className="m-0">Track performance metrics and withdraw returns instantly.</p>
                <div className="rounded overflow-hidden border border-gray-200 bg-white p-1">
                  <img
                    src="assets/img/s3.jpg"
                    alt="Monitor Returns"
                    className="w-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* LATEST NEWS (Inactive default component) */}
          <LatestNews />

          {/* RECENT USER RESULTS (Adapted Donor-1 User Success Sidebar list) */}
          <div className="bg-amber-50/40 dark:bg-zinc-800/10 rounded-xl p-5 border border-amber-100 dark:border-zinc-800 flex flex-col gap-4">
            <h4 className="title text-base font-bold text-emerald-800 border-b border-gray-300 pb-2 mb-1 dark:text-amber-500 uppercase tracking-wider font-serif">
              Recent User Profits
            </h4>

            <div className="flex flex-col gap-5">
              {[
                {
                  id: 1,
                  avatar: "1_7.jpg",
                  title: "Khaled Mansour - Kuwait City, Kuwait",
                  desc: "“I've been using Crypro Platform AI for over two weeks. I started with a deposit of 110 KWD, and managed to grow the capital gradually until it reached 1,600 KWD.”",
                  total: "1,600 KWD"
                },
                {
                  id: 2,
                  avatar: "1_5.jpg",
                  title: "Saeed Rami - Al Ahmadi, Kuwait",
                  desc: "“After one month of using Crypro Platform AI, my profits exceeded 2,500 KWD. The platform works seamlessly via computer or phone, giving me complete lifestyle flexibility.”",
                  total: "2,500 KWD"
                },
                {
                  id: 3,
                  avatar: "0_2.jpg",
                  title: "Layla Yousef - Hawally, Kuwait",
                  desc: "“I had no prior trading experience. The user interface was clear and simple. With disciplined capital management, my weekly returns reached stable, consistent levels.”",
                  total: "6,000 KWD"
                },
                {
                  id: 4,
                  avatar: "1_3.jpg",
                  title: "Omar Al-Nuaimi - Salmiya, Kuwait",
                  desc: "“Thanks to Crypro Platform AI, I was able to diversify my income in a serious way. The regular performance of the system helped me rearrange my professional priorities.”",
                  total: "5,000 KWD"
                },
                {
                  id: 5,
                  avatar: "1_6.jpg",
                  title: "Maryam Rahman - Farwaniya, Kuwait",
                  desc: "“I used Crypro Platform AI for only two weeks, and it helped me save a very decent amount of money which I have allocated for my upcoming personal plans.”",
                  total: "2,000 KWD"
                },
                {
                  id: 6,
                  avatar: "2_3.jpg",
                  title: "Nasser Ali & Tariq Nour - Jahra, Kuwait",
                  desc: "“A close friend and I tested the platform together. The automated system completely took charge of executing operations, and we achieved highly robust results.”",
                  total: "5,800 KWD"
                },
                {
                  id: 7,
                  avatar: "0_7.jpg",
                  title: "Fatima Al-Shamsi - Fahaheel, Kuwait",
                  desc: "“My husband told me about Crypro Platform AI. I spend less than 30 minutes a day monitoring the performance, while the automated algorithm carries out trades.”",
                  total: "3,000 KWD"
                }
              ].map((res) => (
                <div key={res.id} className="flex flex-col gap-2 border-b border-gray-200 dark:border-zinc-700 pb-4 last:border-0 last:pb-0">
                  <div className="flex gap-2.5 items-center">
                    <img
                      src={`assets/img/${res.avatar}`}
                      className="w-12 h-12 rounded-full object-cover border border-gray-200"
                      alt=""
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg";
                      }}
                    />
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-400">{res.title}</span>
                      <span className="text-xs font-bold text-gray-900 dark:text-zinc-100">Profits: {res.total}</span>
                    </div>
                  </div>
                  <p className="text-[11.5px] italic text-gray-600 dark:text-zinc-300 leading-normal m-0">{res.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* EDITORS CHOICE (Inactive default component) */}
          <EditorsChoice />

          {/* MOST READ (Inactive default component) */}
          <MostRead mostReadPeriod={mostReadPeriod} setMostReadPeriod={setMostReadPeriod} />

          {/* NEWSLETTER (Inactive default component) */}
          <Newsletter
            newsLetterEmail={newsLetterEmail}
            setNewsLetterEmail={setNewsLetterEmail}
            newsLetterSuccess={newsLetterSuccess}
            handleSubscribe={handleSubscribe}
          />

          {/* PRINT EDITION (Inactive default component) */}
          <PrintEdition />
        </div>
      </div>
    </div>
  );
}
