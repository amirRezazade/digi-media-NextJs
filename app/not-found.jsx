import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function NotFound(params) {
  return (
    <>
      <div className="flex justify-center items-center flex-col w-full py-10 sm:text-lg lg:text-xl  dark:text-white">
        <Image alt="not found" className="size-70 sm:size-80" width={250} height={250} src="/images/notFound.png" />
        <span>به زودی...</span>
      </div>
    </>
  );
}
