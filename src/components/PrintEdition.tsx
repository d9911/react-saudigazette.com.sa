export default function PrintEdition() {
  return (
    <div id="today-edition" className="my-8 text-center pb-5">
      <h3 className="text-2xl font-serif text-[#335243] font-bold tracking-wide mb-2 dark:text-emerald-400">Today’s Print Edition</h3>
      <p className="text-xs text-gray-500 mb-4 dark:text-zinc-400">Click below to view today’s full digital print copy as PDF</p>
      <a
        href="https://www.saudigazette.com.sa/uploads/pdf/2026/05/28/sg-20260528.pdf?ts=1779963334"
        title="today_newspaper"
        target="_blank"
        rel="noreferrer"
        className="inline-block relative rounded-lg overflow-hidden shadow-lg border border-gray-200 group max-w-[270px] dark:border-zinc-700"
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
        <div className="absolute inset-0 bg-black/5 w-full h-full group-hover:bg-black/0 transition" />
      </a>
    </div>
  );
}
