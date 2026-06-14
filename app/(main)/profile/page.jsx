"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const userIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" id="Layer_1" width="60" height="60" fill="#000" version="1.1" viewBox="0 0 512 512">
    <g id="SVGRepo_iconCarrier">
      <path fill="#CCC" d="M503.467 256c0 136.533-110.933 247.467-247.467 247.467S8.533 392.533 8.533 256 119.467 8.533 256 8.533 503.467 119.467 503.467 256"></path>
      <path fill="#E2E3E5" d="M477.867 256c0 136.533-98.987 247.467-221.867 247.467S34.133 392.533 34.133 256 133.12 8.533 256 8.533 477.867 119.467 477.867 256"></path>
      <path fill="#FFF" d="M34.133 256C34.133 119.467 133.12 8.533 256 8.533 119.467 8.533 8.533 119.467 8.533 256S119.467 503.467 256 503.467C133.12 503.467 34.133 392.533 34.133 256"></path>
      <path
        fill="#E0E0E0"
        d="M459.947 395.947c-5.12-54.613-51.2-97.28-107.52-97.28H302.08c-6.827 0-11.947-5.12-11.947-11.947v-5.12c0-5.12 3.413-9.387 7.68-11.093 49.493-18.773 83.627-99.84 76.8-157.013-6.826-54.614-50.346-98.134-104.96-104.107-4.267-.853-8.533-.853-12.8-.853-65.707 0-119.467 53.76-119.467 119.467 0 51.2 32.427 126.293 77.653 142.507 4.267 1.707 7.68 5.973 7.68 11.093v5.12c0 6.827-5.12 11.947-11.947 11.947h-50.347c-56.32 0-102.4 42.667-107.52 97.28C96.427 460.8 171.52 503.467 256 503.467s159.573-42.667 203.947-107.52"
      ></path>
      <path fill="#F0F0F0" d="M352.427 298.667h-36.693L256 366.933l-68.267-68.267h-28.16c-56.32 0-102.4 42.667-107.52 97.28C96.427 460.8 171.52 503.467 256 503.467s159.573-42.667 203.947-107.52c-5.12-54.614-51.2-97.28-107.52-97.28"></path>
      <g fill="#B6B6B6">
        <path d="M128 476.16c-5.12 0-8.533-3.413-8.533-8.533V409.6c0-5.12 3.413-8.533 8.533-8.533s8.533 3.413 8.533 8.533v58.027c0 5.12-3.413 8.533-8.533 8.533M384 476.16c-5.12 0-8.533-3.413-8.533-8.533V409.6c0-5.12 3.413-8.533 8.533-8.533s8.533 3.413 8.533 8.533v58.027c0 5.12-3.413 8.533-8.533 8.533M256 375.467c-2.56 0-4.267-.853-5.973-2.56L181.76 304.64c-2.56-2.56-3.413-5.973-1.707-9.387q2.56-5.12 7.68-5.12h22.187c5.12 0 8.533 3.413 8.533 8.533s-3.413 8.533-8.533 8.533h-1.707L256 354.987l47.787-47.787h-1.707c-5.12 0-8.533-3.413-8.533-8.533s3.413-8.533 8.533-8.533h22.187c3.413 0 6.827 1.707 7.68 5.12 1.707 3.413.853 6.827-1.707 9.387l-68.267 68.267c-1.706 1.705-3.413 2.559-5.973 2.559"></path>
        <path d="M256 512C115.2 512 0 396.8 0 256S115.2 0 256 0s256 115.2 256 256-115.2 256-256 256m0-494.933C124.587 17.067 17.067 124.587 17.067 256S124.587 494.933 256 494.933 494.933 387.413 494.933 256 387.413 17.067 256 17.067"></path>
        <path d="M256 512c-84.48 0-163.84-41.813-211.627-111.787-.853-1.707-1.707-3.413-1.707-5.973 5.973-59.733 56.32-104.96 116.053-104.96h50.347c1.707 0 3.413-1.707 3.413-3.413V281.6c0-1.707-.853-2.56-1.707-2.56C163.84 261.12 128 184.32 128 128c0-34.133 13.653-66.56 37.547-90.453S221.867 0 256 0c5.12 0 9.387 0 14.507.853 58.027 6.827 104.96 53.76 112.64 111.787 6.827 59.733-27.307 145.92-81.92 166.4-.853 0-2.56 1.707-2.56 3.413v5.12c0 1.707 1.707 3.413 3.413 3.413h50.347c59.733 0 110.08 45.227 116.053 104.96 0 1.707 0 4.267-1.707 5.973C419.84 470.187 340.48 512 256 512M60.587 393.387c45.227 64 117.76 101.547 195.413 101.547s150.187-37.547 195.413-101.547c-6.827-49.493-48.64-86.187-98.987-86.187H302.08c-11.093 0-20.48-9.387-20.48-20.48v-5.12c0-8.533 5.12-16.213 13.653-18.773 46.08-17.067 77.653-95.573 70.827-148.48C360.107 64 319.147 23.04 268.8 17.92c-4.267-.853-7.68-.853-11.947-.853-29.867 0-58.027 11.093-78.507 32.427-21.333 21.333-33.28 48.64-33.28 78.507 0 49.493 31.573 119.467 72.533 134.827 7.68 2.56 12.8 10.24 12.8 18.773v5.12c0 11.093-9.387 20.48-20.48 20.48h-50.347c-50.345-.001-92.159 36.692-98.985 86.186"></path>
      </g>
      <path fill="#F0F0F0" d="M292.693 65.707c31.573 8.533 61.44 28.16 81.067 53.76v-5.973c-7.68-53.76-52.053-97.28-105.813-103.253-4.267-.853-8.533-.853-12.8-.853-58.88 0-108.373 42.667-117.76 98.987 1.707 2.56 52.053-20.48 75.947-10.24 7.68 3.413 15.36 5.12 23.893 5.12 24.746-.002 46.08-16.215 55.466-37.548"></path>
      <path
        fill="#B6B6B6"
        d="M372.907 128c-2.56 0-5.12-.853-6.827-3.413-16.213-22.187-40.96-39.253-69.12-48.64-11.947 22.187-34.987 35.84-59.733 35.84-9.387 0-18.773-1.707-27.307-5.973-14.507-6.827-45.227 3.413-59.733 7.68-11.093 3.413-16.213 5.12-20.48-.853-1.707-1.708-1.707-4.268-1.707-5.974C139.093 45.227 192 .853 254.293.853c5.12 0 10.24 0 14.507.853 58.027 6.827 104.96 53.76 112.64 111.787v5.974c0 3.413-1.707 7.68-5.12 8.533zM254.293 17.92c-49.493 0-92.16 31.573-105.813 78.507 18.773-5.973 48.64-14.507 68.267-5.973 6.827 2.56 13.653 4.267 20.48 4.267 21.333 0 39.253-12.8 47.787-32.427 1.707-4.267 5.973-5.973 10.24-5.12 23.893 6.827 46.08 18.773 64 34.133C345.6 52.053 309.76 23.04 267.093 17.92z"
      ></path>
    </g>
  </svg>
);
export default function Profile() {
  const [profile, setProfile] = useState({});
  const [editing, setEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isDelet, setIsDelet] = useState(false);
  let router = useRouter();

  const [draft, setDraft] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    document.title = "digi-media | profile";
    function getCookie(name) {
      const value = document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${name}=`))
        ?.split("=")[1];
      return value ? JSON.parse(decodeURIComponent(value)) : null;
    }

    const user = getCookie("user");
    const safeUser = {
      name: user.name ?? "",
      email: user.email ?? "",
      password: user.password ?? "",
      bio: user.bio ?? "",
    };
    setProfile(safeUser);
    setDraft(safeUser);
  }, []);
  function handleSave(e) {
    e.preventDefault();
    document.cookie = `user=${encodeURIComponent(JSON.stringify(draft))}; path=/; max-age=${60 * 60 * 24 * 14}`;
    setProfile(draft);
    setEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  function handleCancel() {
    setDraft(profile);
    setEditing(false);
  }
  function modalShow() {
    document.body.classList.add("lock-scroll");
    setShowModal(true);
  }
  function closeModal() {
    document.body.classList.remove("lock-scroll");
    setIsDelet(false);
    setShowModal(false);
  }
  function deletAccount() {
    document.body.classList.remove("lock-scroll");
    document.cookie = "user=; path=/; max-age=0";
    router.push("/");
  }

  return (
    <div className="bg-cover bg-fixed bg-[url(/images/default-bg.jpg)]  text-gray-200 pt-20 pb-10">
      {showModal && (
        <div onClick={(e) => e.target.classList.contains("modal-bg") && closeModal()} className="modal-bg fixed px-3 w-screen h-screen top-0 left-0 flex justify-center items-center bg-black/20 backdrop-blur-2xl z-100">
          <div className="max-w-130 w-full py-7 px-5 border border-red-400/40 bg-[#202020] rounded-2xl ">
            <h2>{isDelet ? "آیا میخواهید حساب کاربری خود را حذف کنید؟" : "آیا میخواهید از حساب کاربری خود خارج شوید؟"}</h2>
            <div className="flex gap-4 mt-7">
              <button className="text-sm text-red-400 hover:text-red-300 border border-red-500/30 hover:border-red-400/50 px-4 py-2 mx-4 rounded-xl transition-colors" onClick={deletAccount}>
                {isDelet ? "حذف حساب کاربری" : "خروج"}
              </button>
              <button onClick={closeModal} className="text-sm text-white  border border-red-500/30  px-4 py-2 rounded-xl transition-colors">
                انصراف
              </button>
            </div>
          </div>
        </div>
      )}
      <main className="relative z-1 max-w-4xl mx-auto px-4 sm:px-6 py-5  backdrop-blur-md border border-gray-500/40 rounded-2xl ">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center justify-center text-2xl shrink-0">{userIcon()}</div>
          <div>
            <h1 className="text-xl font-bold  mb-2">{profile?.name}</h1>
            <p className="text-sm text-gray-300">{profile?.email}</p>
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

          <form onSubmit={(e) => handleSave(e)} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-xs text-gray-300 mb-2 uppercase tracking-wide font-medium">
                نام و نام خانوادگی*
              </label>
              <input type="text" disabled={!editing} required minLength="3" id="name" maxLength="20" value={editing ? draft.name : profile.name ?? ""} onChange={(e) => setDraft((p) => ({ ...p, name: e.target.value.trim() }))} className="w-full  border border-gray-400/80 rounded-xl px-4 py-3 text-sm  outline-none focus:border-orange-500 transition-colors" />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs text-gray-300 mb-2 uppercase tracking-wide font-medium">
                ایمیل*
              </label>
              <input type="email" disabled={!editing} required id="email" value={editing ? draft.email : profile.email ?? ""} onChange={(e) => setDraft((p) => ({ ...p, email: e.target.value.trim() }))} className="w-full  border border-gray-400/80 rounded-xl px-4 py-3 text-sm  outline-none focus:border-orange-500 transition-colors" />
            </div>
            <div>
              <label htmlFor="password" className="block text-xs text-gray-300 mb-2 uppercase tracking-wide font-medium">
                رمزعبور*
              </label>
              <input disabled={!editing} type="password" required pattern="(?=.*\d)(?=.*[a-z]).{6,}" id="password" value={editing ? draft.password : profile.password ?? ""} onChange={(e) => setDraft((p) => ({ ...p, password: e.target.value.trim() }))} className="w-full  border border-gray-400/80 rounded-xl px-4 py-3 text-sm  outline-none focus:border-orange-500 transition-colors" />
            </div>

            <div>
              <label className="block text-xs text-gray-300 mb-2 uppercase tracking-wide font-medium">بیوگرافی</label>
              <textarea value={editing ? draft.bio : profile.bio ?? ""} disabled={!editing} onChange={(e) => setDraft((p) => ({ ...p, bio: e.target.value }))} rows={3} className="w-full border border-gray-400/80 rounded-xl px-4 py-3 text-sm  outline-none focus:border-orange-500 transition-colors resize-none" />
            </div>

            {editing && (
              <div className="flex gap-3 pt-2">
                <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-colors active:scale-95">
                  ذخیره
                </button>
                <button type="button" onClick={handleCancel} className=" border border-gray-500/40 hover:border-gray-300 transition-colors font-bold text-sm px-6 py-2.5 rounded-xl ">
                  انصراف
                </button>
              </div>
            )}
          </form>

          {/* Danger zone */}
          <div className="mt-5 pt-4 border-t border-gray-500/40">
            <h3 className="text-sm font-bold text-red-400 mb-3">ناحیه خطر</h3>
            <button className="text-sm text-red-400 hover:text-red-300 border border-red-500/30 hover:border-red-400/50 px-4 py-2 mx-4 rounded-xl transition-colors" onClick={modalShow}>
              خروج
            </button>
            <button
              className="text-sm text-red-400 hover:text-red-300 border border-red-500/30 hover:border-red-400/50 px-4 py-2 rounded-xl transition-colors"
              onClick={(e) => {
                setIsDelet(true), modalShow();
              }}
            >
              حذف حساب کاربری
            </button>
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
      {editing ? <input type={type} value={value} onChange={(e) => onChange(e.target.value)} className="w-full  border border-gray-400/80 rounded-xl px-4 py-3 text-sm  outline-none focus:border-orange-500 transition-colors" /> : <p className="text-sm  border border-gray-400/80 rounded-xl px-4 py-3">{value}</p>}
    </div>
  );
}
