import { getImageUrl, MOST_READ_ARTICLES } from '../data'
interface Props {
  mostReadPeriod: 'day' | 'week' | 'month'
  setMostReadPeriod: (p: 'day' | 'week' | 'month') => void
}
export default function MostRead({ mostReadPeriod, setMostReadPeriod }: Props) {
  return (
    <div className="most-read-container border-b border-gray-100 pb-5 mb-5">
      <div className="most-read-header flex items-center justify-between border-b border-gray-300 pb-2 mb-3">
        <h3 className="title text-[22px] font-serif font-bold text-[#335243] !border-none !pb-0 m-0 dark:text-emerald-400">Most Read</h3>
        <div className="date flex gap-1 font-sans">
          <button
            onClick={() => setMostReadPeriod('day')}
            className={`px-1.5 py-0.5 text-[10px] uppercase font-bold rounded cursor-pointer ${mostReadPeriod === 'day' ? 'bg-[#335243] text-white' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            Day
          </button>
          <button
            onClick={() => setMostReadPeriod('week')}
            className={`px-1.5 py-0.5 text-[10px] uppercase font-bold rounded cursor-pointer ${mostReadPeriod === 'week' ? 'bg-[#335243] text-white' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            Week
          </button>
          <button
            onClick={() => setMostReadPeriod('month')}
            className={`px-1.5 py-0.5 text-[10px] uppercase font-bold rounded cursor-pointer ${mostReadPeriod === 'month' ? 'bg-[#335243] text-white' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            Month
          </button>
        </div>
      </div>
      <div className="most-read-cards flex flex-col gap-4 py-2 transition-all duration-300 font-sans">
        {MOST_READ_ARTICLES[mostReadPeriod].map((art, index) => (
          <a key={art.id} href={`#${art.id}`} className="block">
            <div className="most-read-row flex items-start gap-2.5">
              <div className="number text-[26px] font-bold text-[#335243] shrink-0 w-6 font-serif dark:text-emerald-450">{index + 1}</div>
              <img
                src={getImageUrl(art.image)}
                alt={art.title}
                className="w-[45px] h-[45px] rounded object-cover shrink-0"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).src = 'https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg'
                }}
              />
              <div className="content flex-1 max-w-[150px]">
                <h2 className="description text-xs font-bold text-gray-900 font-serif leading-snug line-clamp-3 dark:text-gray-200">{art.title}</h2>
                <div className="time text-[10px] text-gray-400 mt-0.5">{art.publishTime}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
