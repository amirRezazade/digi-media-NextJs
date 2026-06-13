"use client";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function Auth(params) {
  let [loginPasswordType, setLoginPasswordType] = useState("password");
  let [registerPasswordType, setRegisterPasswordType] = useState("password");
  let [shownForm, setShownForm] = useState("register");
  let [loginError, setLoginError] = useState(false);
  let name = useRef(null);
  let emailRef = useRef(null);
  let passwordRef = useRef(null);
  let router = useRouter();

  function LoginSubmit(e) {
    e.preventDefault();
    setLoginError(true);
  }
  function registerSubmit(e) {
    e.preventDefault();
    let obj = {
      name: name.current.value.trim(),
      email: emailRef.current.value.trim(),
      password: passwordRef.current.value.trim(),
      bio: "",
    };
    document.cookie = `user=${encodeURIComponent(JSON.stringify(obj))}; path=/; max-age=${60 * 60 * 24 * 14}`;
    router.push(`/`);
  }
  return (
    <div dir="ltr" className="h-screen flex justify-center items-center  bg-cover bg-no-repeat bg-[url(/images/default-bg.jpg)] select-none">
      <div className="max-w-75 sm:max-w-88 bg-black/40 backdrop-blur-md rounded-2xl py-3 sm:py-5 sm:px-3.5 text-white overflow-hidden">
        <div id="forms" className={`flex transition-all duration-300 ${shownForm == "register" ? "-translate-x-1/1" : ""}`}>
          <form onSubmit={(e) => LoginSubmit(e)} className={` w-full min-h-full flex flex-col gap-5 items-center justify-between shrink-0 px-5 transition-transform duration-300`}>
            <h2 className="text-2xl">Login</h2>
            <div className="w-full flex justify-between items-end border-b-2 py-1.5 border-white">
              <div className="grow">
                <div className="relative">
                  <input className=" peer border-0 outline-0 w-full" type="email" placeholder=" " required name="login-email" id="login-email" />
                  <label
                    htmlFor="login-email"
                    className="absolute left-0 -top-5 text-sm text-gray-400 transition-all
           peer-placeholder-shown:top-0
           peer-placeholder-shown:text-base
           peer-focus:-top-5
           peer-focus:text-sm
           "
                  >
                    Email
                  </label>
                </div>
              </div>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Mail-Send-Envelope--Streamline-Core" height={18} width={18}>
                  <desc>{"\n    Mail Send Envelope Streamline Icon: https://streamlinehq.com\n  "}</desc>
                  <g id="mail-send-envelope--envelope-email-message-unopened-sealed-close">
                    <path id="Subtract" fill="#fff" fillRule="evenodd" d="M0 2.75a1.5 1.5 0 0 1 1.5 -1.5h11a1.5 1.5 0 0 1 1.5 1.5v0.342L7.383 7.504A0.72 0.72 0 0 1 7 7.607a0.72 0.72 0 0 1 -0.383 -0.103L0 3.092V2.75Zm0 1.844v6.656a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5 -1.5V4.594L8.073 8.546l-0.005 0.004A1.966 1.966 0 0 1 7 8.857c-0.375 0 -0.753 -0.102 -1.068 -0.307l-0.005 -0.004L0 4.594Z" clipRule="evenodd" strokeWidth={1} />
                  </g>
                </svg>
              </span>
            </div>
            <div className="w-full flex justify-between items-end border-b-2 py-1.5 border-white">
              <div className="grow">
                <div className="relative">
                  <input className="border-0 outline-0 w-full peer" type={loginPasswordType} pattern="(?=.*\d)(?=.*[a-z]).{6,}" required name="login-password" id="login-password" placeholder=" " />

                  <label
                    htmlFor="login-password"
                    className="absolute left-0 -top-5 text-sm text-gray-400 transition-all
           peer-placeholder-shown:top-0
           peer-placeholder-shown:text-base
           peer-focus:-top-5
           peer-focus:text-sm
           "
                  >
                    password
                  </label>
                </div>
              </div>
              <button type="button" onClick={(e) => setLoginPasswordType((prev) => (prev == "password" ? "text" : "password"))}>
                {loginPasswordType == "password" ? (
                  <span>
                    <svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <title>ionicons-v5-i</title>
                        <circle cx="256" cy="256" r="64"></circle>
                        <path d="M394.82,141.18C351.1,111.2,304.31,96,255.76,96c-43.69,0-86.28,13-126.59,38.48C88.52,160.23,48.67,207,16,256c26.42,44,62.56,89.24,100.2,115.18C159.38,400.92,206.33,416,255.76,416c49,0,95.85-15.07,139.3-44.79C433.31,345,469.71,299.82,496,256,469.62,212.57,433.1,167.44,394.82,141.18ZM256,352a96,96,0,1,1,96-96A96.11,96.11,0,0,1,256,352Z"></path>
                      </g>
                    </svg>
                  </span>
                ) : (
                  <span>
                    <svg className="" fill="#ffffff" width="20px" height="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <title>ionicons-v5-i</title>
                        <rect x="240.44" y="0.03" width="31.11" height="511.95" transform="translate(-106.04 256) rotate(-45)"></rect>
                        <path d="M259.34,192.09l60.57,60.57A64.07,64.07,0,0,0,259.34,192.09Z"></path>
                        <path d="M252.66,319.91l-60.57-60.57A64.07,64.07,0,0,0,252.66,319.91Z"></path>
                        <path d="M256,352a96,96,0,0,1-92.6-121.34L94.33,161.58C66.12,187.42,39.24,221.14,16,256c26.42,44,62.56,89.24,100.2,115.18C159.38,400.92,206.33,416,255.76,416A233.47,233.47,0,0,0,335,402.2l-53.61-53.6A95.84,95.84,0,0,1,256,352Z"></path>
                        <path d="M256,160a96,96,0,0,1,92.6,121.34L419.26,352c29.15-26.25,56.07-61.56,76.74-96-26.38-43.43-62.9-88.56-101.18-114.82C351.1,111.2,304.31,96,255.76,96a222.92,222.92,0,0,0-78.21,14.29l53.11,53.11A95.84,95.84,0,0,1,256,160Z"></path>
                      </g>
                    </svg>
                  </span>
                )}
              </button>
            </div>
            <div className="flex flex-col w-full gap-4">
              <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <input className="accent-orange-400" type="checkbox" form="" id="remember" />
                  <label className="text-sm" htmlFor="remember">
                    remember me
                  </label>
                </div>
                <button type="button" className="text-xs opacity-60 hover:opacity-100 hover:underline">
                  Forgot password?
                </button>
              </div>
              <div>
                {loginError && <p className="text-sm text-red-500 text-center">User not found!</p>}

                <button type="submit" className="cursor-pointer w-full py-2.5 rounded-md bg-orange-400">
                  Login
                </button>
              </div>
              <p className="text-sm text-center">
                Don't have account?
                <button type="button" onClick={(e) => setShownForm("register")} className="mx-1 inline-block opacity-60 hover:opacity-100 hover:underline">
                  Register
                </button>
              </p>
            </div>
          </form>

          <form onSubmit={(e) => registerSubmit(e)} className={` w-full h-full flex flex-col items-center gap-6 shrink-0 px-5 transition-transform duration-300`}>
            <h2 className="text-2xl">Registration</h2>
            <div className="w-full flex justify-between items-end border-b-2 py-1.5 border-white">
              <div className="grow">
                <div className="relative">
                  <input ref={name} className="peer border-0 outline-0 w-full" type="text" placeholder=" " required minLength="3" maxLength="20" name="register-username" id="register-username" />

                  <label
                    htmlFor="register-username"
                    className="absolute left-0 -top-5 text-sm text-gray-400 transition-all
           peer-placeholder-shown:top-0
           peer-placeholder-shown:text-base
           peer-focus:-top-5
           peer-focus:text-sm
           "
                  >
                    Name
                  </label>
                </div>
              </div>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#fff" aria-hidden="true" id="User--Streamline-Heroicons" height={18} width={18}>
                  <desc>{"\n    User Streamline Icon: https://streamlinehq.com\n  "}</desc>
                  <path fillRule="evenodd" d="M5 4a3 3 0 1 1 6 0 3 3 0 0 1 -6 0ZM2.5006666666666666 13.403333333333332a5.5 5.5 0 0 1 10.998666666666667 0 0.5 0.5 0 0 1 -0.29133333333333333 0.46333333333333326A12.455333333333332 12.455333333333332 0 0 1 8 15c-1.8573333333333333 0 -3.622 -0.4053333333333333 -5.208 -1.1333333333333333a0.5 0.5 0 0 1 -0.29133333333333333 -0.46333333333333326Z" clipRule="evenodd" strokeWidth={0.6667} />
                </svg>
              </span>
            </div>
            <div className="w-full flex justify-between items-end border-b-2 py-1.5 border-white">
              <div className="grow">
                <div className="relative">
                  <input ref={emailRef} className=" peer border-0 outline-0 w-full" type="email" required placeholder=" " name="register-email" id="register-email" />

                  <label
                    htmlFor="register-email"
                    className="absolute left-0 -top-5 text-sm text-gray-400 transition-all
           peer-placeholder-shown:top-0
           peer-placeholder-shown:text-base
           peer-focus:-top-5
           peer-focus:text-sm
           "
                  >
                    Email
                  </label>
                </div>
              </div>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Mail-Send-Envelope--Streamline-Core" height={18} width={18}>
                  <desc>{"\n    Mail Send Envelope Streamline Icon: https://streamlinehq.com\n  "}</desc>
                  <g id="mail-send-envelope--envelope-email-message-unopened-sealed-close">
                    <path id="Subtract" fill="#fff" fillRule="evenodd" d="M0 2.75a1.5 1.5 0 0 1 1.5 -1.5h11a1.5 1.5 0 0 1 1.5 1.5v0.342L7.383 7.504A0.72 0.72 0 0 1 7 7.607a0.72 0.72 0 0 1 -0.383 -0.103L0 3.092V2.75Zm0 1.844v6.656a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5 -1.5V4.594L8.073 8.546l-0.005 0.004A1.966 1.966 0 0 1 7 8.857c-0.375 0 -0.753 -0.102 -1.068 -0.307l-0.005 -0.004L0 4.594Z" clipRule="evenodd" strokeWidth={1} />
                  </g>
                </svg>
              </span>
            </div>
            <div className="w-full flex justify-between items-end border-b-2 py-1.5 border-white">
              <div className="grow">
                <div className="relative">
                  <input ref={passwordRef} className="peer border-0 outline-0 w-full" type={registerPasswordType} placeholder=" " pattern="(?=.*\d)(?=.*[a-z]).{6,}" required name="register-password" id="register-password" />

                  <label
                    htmlFor="register-password"
                    className="absolute left-0 -top-5 text-sm text-gray-400 transition-all
           peer-placeholder-shown:top-0
           peer-placeholder-shown:text-base
           peer-focus:-top-5
           peer-focus:text-sm
           "
                  >
                    password
                  </label>
                </div>
              </div>
              <button type="button" onClick={(e) => setRegisterPasswordType((prev) => (prev == "password" ? "text" : "password"))}>
                {registerPasswordType == "password" ? (
                  <span>
                    <svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <title>ionicons-v5-i</title>
                        <circle cx="256" cy="256" r="64"></circle>
                        <path d="M394.82,141.18C351.1,111.2,304.31,96,255.76,96c-43.69,0-86.28,13-126.59,38.48C88.52,160.23,48.67,207,16,256c26.42,44,62.56,89.24,100.2,115.18C159.38,400.92,206.33,416,255.76,416c49,0,95.85-15.07,139.3-44.79C433.31,345,469.71,299.82,496,256,469.62,212.57,433.1,167.44,394.82,141.18ZM256,352a96,96,0,1,1,96-96A96.11,96.11,0,0,1,256,352Z"></path>
                      </g>
                    </svg>
                  </span>
                ) : (
                  <span>
                    <svg className="" fill="#ffffff" width="20px" height="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <title>ionicons-v5-i</title>
                        <rect x="240.44" y="0.03" width="31.11" height="511.95" transform="translate(-106.04 256) rotate(-45)"></rect>
                        <path d="M259.34,192.09l60.57,60.57A64.07,64.07,0,0,0,259.34,192.09Z"></path>
                        <path d="M252.66,319.91l-60.57-60.57A64.07,64.07,0,0,0,252.66,319.91Z"></path>
                        <path d="M256,352a96,96,0,0,1-92.6-121.34L94.33,161.58C66.12,187.42,39.24,221.14,16,256c26.42,44,62.56,89.24,100.2,115.18C159.38,400.92,206.33,416,255.76,416A233.47,233.47,0,0,0,335,402.2l-53.61-53.6A95.84,95.84,0,0,1,256,352Z"></path>
                        <path d="M256,160a96,96,0,0,1,92.6,121.34L419.26,352c29.15-26.25,56.07-61.56,76.74-96-26.38-43.43-62.9-88.56-101.18-114.82C351.1,111.2,304.31,96,255.76,96a222.92,222.92,0,0,0-78.21,14.29l53.11,53.11A95.84,95.84,0,0,1,256,160Z"></path>
                      </g>
                    </svg>
                  </span>
                )}
              </button>
            </div>
            <div className="flex flex-col w-full gap-4">
              <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <input className="accent-orange-400" type="checkbox" form="" id="terms" />
                  <label className="text-sm" htmlFor="terms">
                    i agree to the
                    <button type="button" className="opacity-60 hover:opacity-100 hover:underline ms-1">
                      terms&conditions
                    </button>
                  </label>
                </div>
              </div>
              <button type="submit" className="cursor-pointer w-full py-2.5  rounded-md bg-orange-400">
                Register
              </button>
              <p className="text-sm text-center">
                Already have an account?
                <button type="button" onClick={(e) => setShownForm("login")} className="mx-1 opacity-60 hover:opacity-100 hover:underline">
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
