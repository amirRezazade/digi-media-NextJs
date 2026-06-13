import Search from "./Search";

export const metadata = {
  title: "digi-media | search",
  description: "فیلم و سریال و بازیگر های مورد علاقت رو پیدا کن.",
};
export default function SearchPage() {
  return (
    <div className="min-h-screen bg-cover bg-fixed bg-[url(/images/default-bg.jpg)] text-gray-200 ">
      <main className=" py-7 px-3 md:px-6 lg:px-8 xl:px-12 xl:py-8 relative z-1 2xl:max-w-370 mx-auto">
        <Search />
      </main>
    </div>
  );
}
