import Link from "next/link";
import ScrollToTop from "./ScrollToTop";

export default function Footer(params) {
  return (
    <footer className="theme mt-5 lg:mt-10 pt-7 text-black dark:text-gray-200 ">
      <div className=" grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4  gap-y-4 gap-x-3 items-start pb-10 lg:pb-4 px-3 md:px-6 lg:px-8 xl:px-12 xl:py-8  bg-[url('/images/footer-bg.png')]  bg-cover ">
        <div className="xs:col-span-2  flex flex-col items-center gap-6 md:gap-4 md:w-auto md:order-2 lg:px-10">
          <p className="text-xs lg:text-sm leading-9 text-center">هدف از ایجاد دیجی مدیا ارائه خدمات کیفی در سطح عالی بود که سایت های فیلم و سریال قادر به رقابت با سایت های قدرتمند خارجی و ایرانی باشند. دیجی مدیا متشکل از بهترین و کامل ترین امکانات هر سایت فیلم و سریال می باشد و سطح کیفی خود را تا آخر حفظ خواهد نمود</p>
          <h3 className=" ">دیجی مدیا در شبکه های اجتماعی</h3>
          <div className="flex gap-2 items-center">
            <button className="w-9 h-9 rounded-full transition-all duration-300 hover:bg-white group flex justify-center items-center">
              <svg className="transition-all duration-300 group-hover:fill-sky-500 fill-gray-500 dark:fill-white" width="22px" height="22px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
                </g>
              </svg>
            </button>
            <button className="w-9 h-9 rounded-full transition-all duration-300 hover:bg-white group flex justify-center items-center">
              <svg className="transition-all duration-300 group-hover:fill-rose-600 fill-gray-500 dark:fill-white" width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"></path>{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                  ></path>{" "}
                </g>
              </svg>
            </button>
            <button className="w-9 h-9 rounded-full transition-all duration-300 hover:bg-white group flex justify-center items-center">
              <svg className="transition-all duration-300 group-hover:fill-sky-500 fill-gray-500 dark:fill-white" width="22px" height="22px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M1920 311.856c-70.701 33.769-146.598 56.47-226.221 66.86 81.317-52.517 143.774-135.529 173.252-234.691-76.236 48.678-160.716 84.028-250.391 103.002-71.718-82.56-174.268-134.06-287.435-134.06-217.75 0-394.165 189.966-394.165 424.206 0 33.318 3.614 65.619 10.165 96.678C617.9 616.119 327.304 447.385 133.045 190.67c-33.77 62.57-53.309 135.53-53.309 213.233 0 147.162 91.031 276.818 196.744 353.054-64.602-2.26-157.101-21.46-157.101-53.309v5.648c0 205.327 114.41 376.658 294.55 415.849-32.978 9.487-78.38 14.795-114.409 14.795-25.412 0-55.454-2.71-79.624-7.793 50.26 168.509 193.13 291.163 365.478 294.777-134.852 113.506-306.07 181.383-490.616 181.383-31.85 0-64.038-2.033-94.758-5.873 174.494 120.17 381.176 190.532 603.67 190.532 724.97 0 1121.055-646.136 1121.055-1206.55 0-18.41-.452-36.932-1.356-55.116 77.026-59.746 143.887-134.4 196.631-219.444"
                    fillRule="evenodd"
                  ></path>{" "}
                </g>
              </svg>
            </button>
            <button className="w-9 h-9 rounded-full transition-all duration-300 hover:bg-white group flex justify-center items-center">
              <svg className="transition-all duration-300 group-hover:fill-rose-600 fill-gray-500 dark:fill-white" width="26" height="26" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" fill="none" width="20" height="20" />

                <g>
                  <path d="M10.2 2C5.8 2 3.5 4.8 3.5 7.9c0 1.5.8 3 2.1 3.8.4.2.3 0 .6-1.2 0-.1 0-.2-.1-.3C4.3 8 5.8 3.7 10 3.7c6.1 0 4.9 8.4 1.1 8.4-.8.1-1.5-.5-1.5-1.3v-.4c.4-1.1.7-2.1.8-3.2 0-2.1-3.1-1.8-3.1 1 0 .5.1 1 .3 1.4 0 0-1 4.1-1.2 4.8-.2 1.2-.1 2.4.1 3.5-.1.1 0 .1 0 .1h.1c.7-1 1.3-2 1.7-3.1.1-.5.6-2.3.6-2.3.5.7 1.4 1.1 2.3 1.1 3.1 0 5.3-2.7 5.3-6S13.7 2 10.2 2z" />
                </g>
              </svg>
            </button>
            <button className="w-9 h-9 rounded-full transition-all duration-300 hover:bg-white group flex justify-center items-center">
              <svg className="transition-all duration-300 group-hover:fill-blue-500 fill-gray-500 dark:fill-white" width="26px" height="26px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path>
                </g>
              </svg>
            </button>
          </div>
          <ScrollToTop />
        </div>
        <div className="felx flex-col  md:order-1 md:min-w-1/6 lg:min-w-1/4">
          <div className="flex items-center">
            <span>
              <svg width="30px" height="30px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path fill="#ffffff" d="M270.877 444.542C576.857 496.618 318.44 29.007 23.097 25.68 447.57-7.506 696.864 640.745 270.878 444.54z"></path>
                </g>
              </svg>
            </span>
            <span className="">دسترسی سریع</span>
          </div>
          <ul className=" flex flex-col gap-3 mt-4 px-3 ">
            <li>
              <Link href="/" className="text-xs lg:text-sm transition-all duration-300 font-extralight hover:opacity-100 opacity-75">
                صفحه نخست
              </Link>
            </li>
            <li className="">
              <button className="text-xs lg:text-sm transition-all duration-300 font-extralight hover:opacity-100 opacity-75">بلاگ</button>
            </li>
            <li>
              <Link href="/profile" className=" text-xs lg:text-sm transition-all duration-300 font-extralight hover:opacity-100 opacity-75">
                پروفایل
              </Link>
            </li>
            <li>
              <Link href="/profile/watch-list" className=" text-xs lg:text-sm transition-all duration-300 font-extralight hover:opacity-100 opacity-75">
                علاقه مندی ها
              </Link>
            </li>
          </ul>
        </div>
        <div className="felx flex-col  xs:mt-4 md:order-3 md:min-w-2/6 lg:min-w-1/4">
          <div className="flex items-center">
            <span>
              <svg width="22" height="22" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M32.3132966,17.0344534 L34.0729071,16.8698521 C34.3335679,16.8443847 34.57558,16.7305148 34.7589541,16.5470578 L36.8668846,14.4391273 C37.172093,14.1339189 37.627781,14.0315805 38.0439657,14.1747785 C38.4601504,14.3179765 38.7653918,14.6821303 38.8324303,15.1154189 C39.2283687,17.6352909 38.2060823,20.1342578 36.1745622,21.6125455 C34.1430421,23.0908333 31.4340401,23.3070343 29.1313599,22.174652 L15.2822892,36.0237227 C14.3694733,36.9365386 12.8895062,36.9365386 11.9766903,36.0237227 C11.0638743,35.1109067 11.0638743,33.6309397 11.9766903,32.7181237 L25.8273725,18.8674415 C24.6967399,16.5647203 24.913721,13.8567631 26.3915992,11.8258058 C27.8694775,9.79484853 30.3672209,8.77212658 32.8866056,9.16637107 C33.3198942,9.23340957 33.684048,9.53865096 33.827246,9.95483565 C33.970444,10.3710203 33.8681056,10.8267084 33.5628972,11.1319168 L31.4678593,13.2269547 C31.2760448,13.4196585 31.1611383,13.6762881 31.1438887,13.9505032 L31.0242247,15.7840591 C31.0021934,16.1256399 31.1335511,16.4630069 31.3826662,16.7046475 C31.6317812,16.9462881 31.9728284,17.0671517 32.3132966,17.0344534 Z M13.3994135,34.6043006 C13.7899378,34.9948249 14.4231027,34.9948249 14.813627,34.6043006 C15.2041513,34.2137764 15.2041513,33.5806114 14.813627,33.1900871 C14.4231027,32.7995628 13.7899378,32.7995628 13.3994135,33.1900871 C13.0088892,33.5806114 13.0088892,34.2137764 13.3994135,34.6043006 Z"
                  fill="#fff"
                  fillRule="evenodd"
                  transform="translate(-11 -9)"
                />
              </svg>
            </span>
            <span className="  mx-2"> ابزار های سایت</span>
          </div>
          <button className="w-full flex items-center justify-between dark:bg-gray-700 bg-white py-2 px-3 rounded-xl mt-5 mb-3">
            <div className="flex flex-col gap-1.5">
              <span className="text-orange-400 text-sm">درخواستی دارید</span>
              <span className="text-xs">دیجی مدیا برای شما قرار میدهد</span>
            </div>
            <span className="md:hidden lg:inline">
              <svg width="28px" height="28px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M0 1H5L8 3H13V5H3.7457L2.03141 11H4.11144L5.2543 7H16L14 14H0V1Z" fill="#ff9800"></path>{" "}
                </g>
              </svg>
            </span>
          </button>
          <button className="w-full flex items-center justify-between dark:bg-gray-700 bg-white py-2 px-3 rounded-xl mb-3">
            <div className="flex flex-col gap-1.5">
              <span className="text-sky-500 text-sm">وبلاگ دیجی مدیا</span>
              <span className="text-xs">اخبار دنیای فیلم و سریال را با ما تجربه کنید</span>
            </div>
            <span className="md:hidden lg:inline">
              <svg fill="#1fa2f0" width="28px" height="28px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" stroke="#1fa2f0">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z"></path>
                </g>
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 pt-2 pb-12 xs:pb-2! mb-14 lg:mb-0">
        <p className="text-xs">«طراحی و توسعه توسط امیر رضازاده — 2026»</p>
        <a href="https://github.com/amirRezazade" target="-blank" className="px-2 py-1 fill-white">
          <svg width="25px" height="25px" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" className="jam jam-github">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M18.88 1.099C18.147.366 17.265 0 16.233 0H3.746C2.714 0 1.832.366 1.099 1.099.366 1.832 0 2.714 0 3.746v12.487c0 1.032.366 1.914 1.099 2.647.733.733 1.615 1.099 2.647 1.099H6.66c.19 0 .333-.007.429-.02a.504.504 0 0 0 .286-.169c.095-.1.143-.245.143-.435l-.007-.885c-.004-.564-.006-1.01-.006-1.34l-.3.052c-.19.035-.43.05-.721.046a5.555 5.555 0 0 1-.904-.091 2.026 2.026 0 0 1-.872-.39 1.651 1.651 0 0 1-.572-.8l-.13-.3a3.25 3.25 0 0 0-.41-.663c-.186-.243-.375-.407-.566-.494l-.09-.065a.956.956 0 0 1-.17-.156.723.723 0 0 1-.117-.182c-.026-.061-.004-.111.065-.15.07-.04.195-.059.378-.059l.26.04c.173.034.388.138.643.311a2.1 2.1 0 0 1 .631.677c.2.355.44.626.722.813.282.186.566.28.852.28.286 0 .533-.022.742-.065a2.59 2.59 0 0 0 .585-.196c.078-.58.29-1.028.637-1.34a8.907 8.907 0 0 1-1.333-.234 5.314 5.314 0 0 1-1.223-.507 3.5 3.5 0 0 1-1.047-.872c-.277-.347-.505-.802-.683-1.365-.177-.564-.266-1.215-.266-1.952 0-1.049.342-1.942 1.027-2.68-.32-.788-.29-1.673.091-2.652.252-.079.625-.02 1.119.175.494.195.856.362 1.086.5.23.14.414.257.553.352a9.233 9.233 0 0 1 2.497-.338c.859 0 1.691.113 2.498.338l.494-.312a6.997 6.997 0 0 1 1.197-.572c.46-.174.81-.221 1.054-.143.39.98.424 1.864.103 2.653.685.737 1.028 1.63 1.028 2.68 0 .737-.089 1.39-.267 1.957-.177.568-.407 1.023-.689 1.366-.282.343-.633.63-1.053.865-.42.234-.828.403-1.223.507a8.9 8.9 0 0 1-1.333.235c.45.39.676 1.005.676 1.846v3.11c0 .147.021.266.065.357a.36.36 0 0 0 .208.189c.096.034.18.056.254.064.074.01.18.013.318.013h2.914c1.032 0 1.914-.366 2.647-1.099.732-.732 1.099-1.615 1.099-2.647V3.746c0-1.032-.367-1.914-1.1-2.647z"></path>
            </g>
          </svg>
        </a>
      </div>
    </footer>
  );
}
