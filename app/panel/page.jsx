"use client";
import { useState } from "react";
import Image from "next/image";

const TABS = [
  { id: "profile", label: "پروفایل", icon: "👤" },
  { id: "watchlist", label: "علاقه‌مندی‌ها", icon: "❤️" },
];

export default function UserPanel() {
  const [activeTab, setActiveTab] = useState("profile");
  const [watchlist, setWatchlist] = useState(JSON.parse(localStorage.getItem("watchlist") || "[]"));
  const [filterType, setFilterType] = useState("all");

  // Profile state
  const [profile, setProfile] = useState({
    name: "علی رضایی",
    email: "ali@example.com",
    bio: "سینما دوست و منتقد فیلم",
    avatar: null,
  });
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(profile);
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setProfile(draft);
    setEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  function handleCancel() {
    setDraft(profile);
    setEditing(false);
  }

  function removeFromWatchlist(id) {
    setWatchlist((prev) => prev.filter((item) => item.id !== id));
  }

  const filteredWatchlist = filterType === "all" ? watchlist : watchlist.filter((item) => item.type === filterType);

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-200" dir="rtl">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-[500px] h-[400px] bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-2xl shrink-0">{profile.avatar ? <Image src={profile.avatar} alt={profile.name} width={64} height={64} className="rounded-2xl object-cover" /> : "👤"}</div>
          <div>
            <h1 className="text-xl font-bold text-white">{profile.name}</h1>
            <p className="text-sm text-slate-500">{profile.email}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-white/7 pb-0">
          {TABS.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-5 py-3 text-sm font-bold transition-all border-b-2 -mb-px ${activeTab === tab.id ? "border-orange-500 text-orange-400" : "border-transparent text-slate-500 hover:text-slate-300"}`}>
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="bg-[#0f1623] border border-white/7 rounded-2xl p-6 sm:p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold">اطلاعات حساب کاربری</h2>
              {!editing && (
                <button
                  onClick={() => {
                    setEditing(true);
                    setDraft(profile);
                  }}
                  className="text-sm text-orange-400 hover:text-orange-300 font-semibold transition-colors"
                >
                  ✏️ ویرایش
                </button>
              )}
            </div>

            {saved && <div className="mb-4 bg-green-500/10 border border-green-500/30 text-green-400 text-sm rounded-xl px-4 py-3">✅ اطلاعات با موفقیت ذخیره شد</div>}

            <div className="space-y-5">
              <Field label="نام و نام خانوادگی" value={editing ? draft.name : profile.name} editing={editing} onChange={(v) => setDraft((p) => ({ ...p, name: v }))} />
              <Field label="ایمیل" value={editing ? draft.email : profile.email} editing={editing} type="email" onChange={(v) => setDraft((p) => ({ ...p, email: v }))} />
              <div>
                <label className="block text-xs text-slate-500 mb-2 uppercase tracking-wide font-medium">بیوگرافی</label>
                {editing ? <textarea value={draft.bio} onChange={(e) => setDraft((p) => ({ ...p, bio: e.target.value }))} rows={3} className="w-full bg-[#161e2e] border border-white/8 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none focus:border-orange-500 transition-all resize-none" /> : <p className="text-sm text-slate-300 bg-[#161e2e] rounded-xl px-4 py-3 min-h-[72px]">{profile.bio || "—"}</p>}
              </div>

              {editing && (
                <div className="flex gap-3 pt-2">
                  <button onClick={handleSave} className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-all active:scale-95">
                    ذخیره
                  </button>
                  <button onClick={handleCancel} className="bg-[#161e2e] hover:bg-[#1e2a3e] text-slate-400 font-bold text-sm px-6 py-2.5 rounded-xl transition-all">
                    انصراف
                  </button>
                </div>
              )}
            </div>

            {/* Danger zone */}
            <div className="mt-8 pt-6 border-t border-white/7">
              <h3 className="text-sm font-bold text-red-400 mb-3">ناحیه خطر</h3>
              <button className="text-sm text-red-400 hover:text-red-300 border border-red-500/30 hover:border-red-400/50 px-4 py-2 rounded-xl transition-all">حذف حساب کاربری</button>
            </div>
          </div>
        )}

        {/* Watchlist Tab */}
        {activeTab === "watchlist" && (
          <div>
            {/* Filter */}
            <div className="flex gap-2 mb-5">
              {[
                { id: "all", label: "همه" },
                { id: "movie", label: "فیلم‌ها" },
                { id: "tv", label: "سریال‌ها" },
              ].map((f) => (
                <button key={f.id} onClick={() => setFilterType(f.id)} className={`px-4 py-2 rounded-lg text-sm font-bold border transition-all ${filterType === f.id ? "bg-orange-500 border-orange-500 text-white" : "border-white/10 text-slate-400 hover:border-orange-500 hover:text-orange-400 bg-transparent"}`}>
                  {f.label}
                </button>
              ))}
              <span className="mr-auto text-sm text-slate-500 self-center">{filteredWatchlist.length} مورد</span>
            </div>

            {filteredWatchlist.length === 0 ? (
              <div className="text-center py-20 text-slate-600">
                <div className="text-5xl mb-4 opacity-40">❤️</div>
                <p>هنوز چیزی اضافه نکردی</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                {filteredWatchlist.map((item) => (
                  <WatchlistCard key={item.id} item={item} onRemove={() => removeFromWatchlist(item.id)} />
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

function Field({ label, value, editing, type = "text", onChange }) {
  return (
    <div>
      <label className="block text-xs text-slate-500 mb-2 uppercase tracking-wide font-medium">{label}</label>
      {editing ? <input type={type} value={value} onChange={(e) => onChange(e.target.value)} className="w-full bg-[#161e2e] border border-white/8 rounded-xl px-4 py-3 text-sm text-slate-200 outline-none focus:border-orange-500 transition-all" /> : <p className="text-sm text-slate-300 bg-[#161e2e] rounded-xl px-4 py-3">{value}</p>}
    </div>
  );
}

function WatchlistCard({ item, onRemove }) {
  return (
    <div className="group relative bg-[#0f1623] border border-white/7 rounded-xl overflow-hidden hover:border-orange-500/40 transition-all">
      {/* Poster */}
      <div className="relative w-full aspect-[2/3] bg-[#161e2e] flex items-center justify-center">
        <span className="text-4xl opacity-20">🎬</span>
        {/* Badge */}
        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-xs px-2 py-0.5 rounded-full text-slate-300 font-medium">{item.type === "movie" ? "فیلم" : "سریال"}</div>
        {/* Remove btn */}
        <button onClick={onRemove} className="absolute top-2 left-2 w-7 h-7 bg-red-500/80 hover:bg-red-500 rounded-full text-white text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
          ✕
        </button>
      </div>

      {/* Info */}
      <div className="p-2.5">
        <p className="text-xs font-bold text-slate-200 truncate">{item.title}</p>
        <div className="flex items-center justify-between mt-1">
          <span className="text-xs text-slate-500">{item.year}</span>
          <span className="text-xs text-yellow-400 font-bold">⭐ {item.rating}</span>
        </div>
      </div>
    </div>
  );
}
