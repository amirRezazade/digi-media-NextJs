import Image from "next/image";
import Link from "next/link";
const arrowIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 -6.5 38 38">
    <g id="SVGRepo_iconCarrier">
      <g id="icons" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g id="ui-gambling-website-lined-icnos-casinoshunter" fill="#fff" fillRule="nonzero" transform="translate(-1641 -158)">
          <g id="1" transform="translate(1350 120)">
            <path id="left-arrow" d="m317.812 38.58 10.513 10.424.088.082c.352.349.557.809.587 1.352l-.002.183c-.025.43-.19.842-.514 1.21l-.123.127-10.549 10.462a2.005 2.005 0 0 1-2.822 0 1.985 1.985 0 0 1 0-2.822l7.284-7.224H293c-1.102 0-1.999-.889-1.999-1.99 0-1.102.897-1.992 2-1.992h29.04l-7.05-6.99a1.985 1.985 0 0 1 0-2.822 2.005 2.005 0 0 1 2.822 0" transform="matrix(-1 0 0 1 620 0)"></path>
          </g>
        </g>
      </g>
    </g>
  </svg>
);
export default function NotFound() {
  return (
    <div className="bg-[url(/images/default-bg.jpg)] bg-cover">
      <div className="bg-black/40 flex justify-center items-center flex-col w-full min-h-[85vh] pb-10 sm:pt-10 px-3 sm:text-lg lg:text-xl  text-white">
        <Image alt="not found" className="size-70 sm:size-80" width={250} height={250} src="/images/notFound.png" />
        <span>موردی برای نمایش وجود ندارد.</span>
        <Link href={"/"} className="flex justify-center text-sm gap-3 mt-4 px-12 py-2.5 bg-linear-to-b to-orange-400 from-orange-500 rounded-2xl text-white">
          <span>بازگشت به صفحه اصلی</span>
          <span>{arrowIcon()}</span>
        </Link>
      </div>
    </div>
  );
}
