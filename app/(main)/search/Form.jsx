"use client";

const genreMap = {
  28: 10759, // اکشن
  12: 10759, // ماجراجویی
  53: 10759, // هیجان‌انگیز
  878: 10765, // علمی‌تخیلی
  14: 10765, // فانتزی
  10752: 10768, // جنگی
};
const genres = [
  { id: "all", name: "همه" },
  { id: "28", name: "اکشن" },
  { id: "99", name: "مستند" },
  { id: "36", name: "تاریخی" },
  { id: "80", name: "جنایی" },
  { id: "18", name: "درام" },
  { id: "878", name: "عملی تخیلی" },
  { id: "14", name: "فانتزی" },
  { id: "12", name: "ماجراجویی" },
  { id: "53", name: "هیجان انگیز" },
  { id: "35", name: "کمدی" },
  { id: "27", name: "ترسناک" },
  { id: "10749", name: "عاشقانه" },
  { id: "16", name: "انیمیشن" },
  { id: "10402", name: "موزیکال" },
  { id: "9648", name: "معمایی" },
  { id: "10751", name: "خانوادگی" },
  { id: "10752", name: "جنگی" },
  { id: "37", name: "وسترن" },
];

const sortOptions = [
  { id: "popularity.desc", name: "محبوب‌ترین" },
  { id: "release_date.desc", name: "جدیدترین" },
  { id: "vote_average.desc", name: "بهترین امتیاز" },
];

const countries = [
  { id: "all", name: "همه کشورها" },
  { id: "US", name: "آمریکا" },
  { id: "IR", name: "ایران " },
  { id: "TR", name: "ترکیه" },
  { id: "KR", name: "کره جنوبی" },
  { id: "GB", name: "بریتانیا" },
  { id: "FR", name: "فرانسه" },
  { id: "DE", name: "آلمان جنوبی" },
  { id: "IN", name: "هند" },
  { id: "CN", name: "چین" },
  { id: "JP", name: "ژاپن" },
];
export default function Form({ query, onQuery, resetPage, type, onType, genre, onGenre, country, onCountry, sort, onSort, fromYear, onFromYear, toYear, onToYear, fromRate, onFromRate, toRate, onToRate, dubbed, onDubbed, subtitled, onSubtitled }) {
  return (
    <div className=" max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <div className="text-center mb-10">
        <h1 className="text-3xl xs:text-4xl lg:text-5xl font-bold mb-3 bg-linear-to-l from-orange-500 to-orange-50 bg-clip-text text-transparent">جستجوی حرفه‌ای</h1>
        <p className=" text-sm">فیلم‌ها، سریال‌ها و هنرمندان مورد علاقه‌ات رو پیدا کن</p>
      </div>

      {/* Search input */}
      <div className="relative mb-6">
        <input type="text" value={query} onChange={(e) => onQuery(e.target.value)} onKeyDown={(e) => e.key === "Enter" && resetPage()} placeholder="نام فیلم، سریال یا بازیگر را بنویسید..." className="w-full text-gray-500 dark:text-gray-200 bg-white dark:bg-gray-800 border border-white/8 rounded-2xl py-4 pr-5 pl-36 text-sm sm:text-base   outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/15 transition-colors" />
        <button onClick={resetPage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-transform active:scale-95">
          🔍 جستجو
        </button>
      </div>

      {/* Filters card */}
      <div className="text-gray-500 dark:text-gray-200 bg-stone-200 dark:bg-gray-800 border border-white/7 rounded-2xl p-5 sm:p-6 ">
        {/* Type tabs */}
        <div className="flex gap-2 mb-6">
          {[
            { id: "all", label: "همه" },
            { id: "movie", label: "فیلم" },
            { id: "series", label: "سریال" },
          ].map((t) => (
            <button key={t.id} onClick={() => onType(t.id)} className={`px-5 py-2 rounded-lg text-sm bg-white dark:bg-gray-800 border transition-colors ${type === t.id ? "bg-orange-500 border-orange-500 text-orange-400" : "border-white/10  hover:border-orange-500 hover:text-orange-400 bg-transparent"}`}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Filter grid */}
        <div className="grid grid-cols-2 xs:grid-cols-3  gap-3 mb-4 text-xs md:text-sm  ">
          <FilterSelect label="ژانر" value={genre} onChange={onGenre} options={genres} />
          <FilterSelect label="کشور" value={country} onChange={onCountry} options={countries} />
          <div className="col-span-2 xs:col-span-1">
            <FilterSelect label="مرتب‌سازی" value={sort} onChange={onSort} options={sortOptions} />
          </div>
        </div>

        {/* Range row */}
        <div className="grid grid-cols-2 gap-3 mb-5 text-gray-500 dark:text-gray-200">
          {/* Year range */}
          <div>
            <label className="block text-xs  mb-2 uppercase tracking-wide font-medium">بازه سال</label>
            <div className="flex items-center gap-2">
              <input type="text" maxLength="4" onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))} placeholder="از" value={fromYear} onChange={(e) => onFromYear(e.target.value)} className="w-full bg-white dark:bg-gray-800 border border-white/8 rounded-lg px-3 py-2.5 text-sm  placeholder-slate-400 outline-none focus:border-orange-500 transition-colors" />
              <span className=" text-sm shrink-0">تا</span>
              <input type="text" maxLength="4" onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))} placeholder="تا" value={toYear} onChange={(e) => onToYear(e.target.value)} className="w-full bg-white dark:bg-gray-800 border border-white/8 rounded-lg px-3 py-2.5 text-sm  placeholder-slate-400 outline-none focus:border-orange-500 transition-colors" />
            </div>
          </div>

          {/* Rating range */}
          <div>
            <label className="block text-xs  mb-2 uppercase tracking-wide font-medium">بازه امتیاز</label>
            <div className="flex items-center gap-2">
              <input type="text" maxLength="1" onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))} placeholder="از" value={fromRate} onChange={(e) => onFromRate(e.target.value)} className="w-full bg-white dark:bg-gray-800 border border-white/8 rounded-lg px-3 py-2.5 text-sm  placeholder-slate-400 outline-none focus:border-orange-500 transition-colors" />
              <span className=" text-sm shrink-0">تا</span>
              <input type="text" maxLength="1" onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))} placeholder="تا" value={toRate} onChange={(e) => onToRate(e.target.value)} className="w-full bg-white dark:bg-gray-800 border border-white/8 rounded-lg px-3 py-2.5 text-sm  placeholder-slate-400 outline-none focus:border-orange-500 transition-colors" />
            </div>
          </div>
        </div>

        {/* Toggles + Submit */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/7">
          <div className=" flex items-center gap-0 sm:gap-2 xl:gap-4">
            <div>
              <label className="inline-flex flex-col xl:flex-row items-center gap-1 xl:gap-4 cursor-pointer">
                <span className="ms-3 text-xs xl:text-sm font-medium text-nowrap">دوبله فارسی</span>
                <input type="checkbox" checked={dubbed} onChange={(e) => onDubbed(e.target.checked)} className="sr-only peer" />
                <div className="relative w-11 h-6  rounded-full peer bg-stone-200 dark:bg-gray-900 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-transform  peer-checked:bg-orange-400"></div>
              </label>
            </div>
            <div>
              <label className="inline-flex flex-col xl:flex-row items-center gap-1 xl:gap-4 cursor-pointer">
                <span className="ms-3 text-xs xl:text-sm font-medium text-nowrap  ">زیرنویس فارسی</span>
                <input type="checkbox" checked={subtitled} onChange={(e) => onSubtitled(e.target.checked)} className="sr-only peer" />
                <div className="relative w-11 h-6  rounded-full peer bg-stone-200 dark:bg-gray-900 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-transform  peer-checked:bg-orange-400"></div>
              </label>
            </div>
          </div>
          <button onClick={resetPage} className="mr-auto bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-transform active:scale-95">
            اعمال فیلترها
          </button>
        </div>
      </div>
    </div>
  );
}
function FilterSelect({ label, value, onChange, options }) {
  return (
    <div>
      <label className="block mb-2 uppercase tracking-wide font-medium">{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full bg-white dark:bg-gray-800 border border-white/8 rounded-lg px-3 py-2.5  outline-none focus:border-orange-500 transition-colors cursor-pointer appearance-none">
        {options.map((o) => (
          <option key={o.id} value={o.id}>
            {o.name}
          </option>
        ))}
      </select>
    </div>
  );
}
