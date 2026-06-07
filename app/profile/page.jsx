"use client";
import Link from "next/link";
import { useState } from "react";

export default function Profile() {
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

  return (
    <div className="bg-cover bg-fixed bg-[url(/images/default-bg.jpg)]  text-gray-200 pt-20 pb-10">
      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-5  backdrop-blur-md border border-gray-500/40 rounded-2xl ">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className=" rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-2xl shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Composition-Window-Human--Streamline-Ultimate" height={60} width={60}>
              <desc>{"\n    Composition Window Human Streamline Icon: https://streamlinehq.com\n  "}</desc>
              <path
                fill="#66e1ff"
                d="M19.1739 4.82561H4.82609c-1.01474 0 -1.98792 0.4031 -2.70546 1.12063C1.4031 6.66377 1 7.63695 1 8.65169v6.69561c0 0.5025 0.09896 1 0.29124 1.4642 0.19228 0.4642 0.47411 0.886 0.82939 1.2413 0.71754 0.7175 1.69072 1.1206 2.70546 1.1206H19.1739c0.5025 0 1 -0.0989 1.4642 -0.2912 0.4642 -0.1923 0.886 -0.4741 1.2413 -0.8294 0.3552 -0.3553 0.6371 -0.7771 0.8294 -1.2413 0.1922 -0.4642 0.2912 -0.9617 0.2912 -1.4642V8.65169c0 -1.01474 -0.4031 -1.98792 -1.1206 -2.70545 -0.7176 -0.71753 -1.6907 -1.12063 -2.7055 -1.12063Z"
                strokeWidth={1}
              />
              <path fill="#c2f3ff" d="M4.82609 4.82561c-1.01474 0 -1.98792 0.4031 -2.70546 1.12063C1.4031 6.66377 1 7.63695 1 8.65169v6.69561c0.00188 0.9711 0.37381 1.9049 1.04005 2.6113 0.66625 0.7064 1.5767 1.1323 2.54595 1.1909L18.9099 4.82561H4.82609Z" strokeWidth={1} />
              <path
                stroke="#191919"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.1739 4.82561H4.82609c-1.01474 0 -1.98792 0.4031 -2.70546 1.12063C1.4031 6.66377 1 7.63695 1 8.65169v6.69561c0 0.5025 0.09896 1 0.29124 1.4642 0.19228 0.4642 0.47411 0.886 0.82939 1.2413 0.71754 0.7175 1.69072 1.1206 2.70546 1.1206H19.1739c0.5025 0 1 -0.0989 1.4642 -0.2912 0.4642 -0.1923 0.886 -0.4741 1.2413 -0.8294 0.3552 -0.3553 0.6371 -0.7771 0.8294 -1.2413 0.1922 -0.4642 0.2912 -0.9617 0.2912 -1.4642V8.65169c0 -1.01474 -0.4031 -1.98792 -1.1206 -2.70545 -0.7176 -0.71753 -1.6907 -1.12063 -2.7055 -1.12063Z"
                strokeWidth={1}
              />
              <path
                fill="#ffffff"
                d="M5.78223 19.1734c0.00957 -0.8879 0.19318 -1.7653 0.54043 -2.5826 0.38261 -0.7652 1.97331 -1.2913 3.97244 -2.0316 0.5404 -0.1999 0.4515 -1.6108 0.2123 -1.8748 -0.381 -0.4129 -0.67044 -0.9017 -0.8493 -1.4343 -0.17885 -0.5326 -0.24309 -1.097 -0.18848 -1.65624 -0.03426 -0.35625 0.00522 -0.71573 0.11596 -1.05606 0.11075 -0.34033 0.2904 -0.6542 0.52772 -0.92206 0.2374 -0.26787 0.5274 -0.48398 0.8519 -0.63488 0.3245 -0.1509 0.6766 -0.23335 1.0344 -0.24221 0.3578 0.009 0.7098 0.09154 1.0343 0.24249 0.3244 0.15094 0.6143 0.36706 0.8517 0.63489 0.2373 0.26783 0.417 0.58165 0.5278 0.92192 0.1108 0.34026 0.1503 0.69969 0.1162 1.05591 0.0548 0.55934 -0.0094 1.12394 -0.1883 1.65674 -0.1788 0.5328 -0.4683 1.0217 -0.8495 1.4347 -0.2391 0.264 -0.3281 1.6749 0.2123 1.8748 1.9992 0.7404 3.5908 1.2693 3.9725 2.0317 0.3472 0.8172 0.5308 1.6947 0.5404 2.5826l-12.43477 -0.001Z"
                strokeWidth={1}
              />
              <path
                stroke="#191919"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.78223 19.1734c0.00957 -0.8879 0.19318 -1.7653 0.54043 -2.5826 0.38261 -0.7652 1.97331 -1.2913 3.97244 -2.0316 0.5404 -0.1999 0.4515 -1.6108 0.2123 -1.8748 -0.381 -0.4129 -0.67044 -0.9017 -0.8493 -1.4343 -0.17885 -0.5326 -0.24309 -1.097 -0.18848 -1.65624 -0.03426 -0.35625 0.00522 -0.71573 0.11596 -1.05606 0.11075 -0.34033 0.2904 -0.6542 0.52772 -0.92206 0.2374 -0.26787 0.5274 -0.48398 0.8519 -0.63488 0.3245 -0.1509 0.6766 -0.23335 1.0344 -0.24221 0.3578 0.009 0.7098 0.09154 1.0343 0.24249 0.3244 0.15094 0.6143 0.36706 0.8517 0.63489 0.2373 0.26783 0.417 0.58165 0.5278 0.92192 0.1108 0.34026 0.1503 0.69969 0.1162 1.05591 0.0548 0.55934 -0.0094 1.12394 -0.1883 1.65674 -0.1788 0.5328 -0.4683 1.0217 -0.8495 1.4347 -0.2391 0.264 -0.3281 1.6749 0.2123 1.8748 1.9992 0.7404 3.5908 1.2693 3.9725 2.0317 0.3472 0.8172 0.5308 1.6947 0.5404 2.5826l-12.43477 -0.001Z"
                strokeWidth={1}
              />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold  mb-2">{profile.name}</h1>
            <p className="text-sm text-gray-300">{profile.email}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-white/7 pb-0">
          <button className={`px-5 py-3 text-sm   border-b-2 -mb-px border-orange-500 text-orange-400 `}>👤 پروفایل</button>
          <Link href="/profile/watch-list" className={`px-5 py-3 text-sm   border-b-2 -mb-px border-transparent text-gray-300 `}>
            ❤️ علاقه‌مندی‌ها
          </Link>
        </div>

        <div className="  rounded-xl p-6 sm:p-8">
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
              <label className="block text-xs text-gray-300 mb-2 uppercase tracking-wide font-medium">بیوگرافی</label>
              {editing ? <textarea value={draft.bio} onChange={(e) => setDraft((p) => ({ ...p, bio: e.target.value }))} rows={3} className="w-full border border-gray-400/80 rounded-xl px-4 py-3 text-sm  outline-none focus:border-orange-500 transition-all resize-none" /> : <p className="text-sm  border border-gray-400/80 rounded-xl px-4 py-3 min-h-18">{profile.bio || "—"}</p>}
            </div>

            {editing && (
              <div className="flex gap-3 pt-2">
                <button onClick={handleSave} className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-colors active:scale-95">
                  ذخیره
                </button>
                <button onClick={handleCancel} className=" border border-gray-500/40 hover:border-gray-300 transition-colors font-bold text-sm px-6 py-2.5 rounded-xl ">
                  انصراف
                </button>
              </div>
            )}
          </div>

          {/* Danger zone */}
          <div className="mt-5 pt-4 border-t border-gray-500/40">
            <h3 className="text-sm font-bold text-red-400 mb-3">ناحیه خطر</h3>
            <button className="text-sm text-red-400 hover:text-red-300 border border-red-500/30 hover:border-red-400/50 px-4 py-2 rounded-xl transition-all">حذف حساب کاربری</button>
          </div>
        </div>
      </main>
    </div>
  );
}

function Field({ label, value, editing, type = "text", onChange }) {
  return (
    <div>
      <label className="block text-xs text-gray-300 mb-2 uppercase tracking-wide font-medium">{label}</label>
      {editing ? <input type={type} value={value} onChange={(e) => onChange(e.target.value)} className="w-full  border border-gray-400/80 rounded-xl px-4 py-3 text-sm  outline-none focus:border-orange-500 transition-all" /> : <p className="text-sm  border border-gray-400/80 rounded-xl px-4 py-3">{value}</p>}
    </div>
  );
}
