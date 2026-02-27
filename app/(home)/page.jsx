import Image from "next/image";
import Header from "./Header";
import Filters from "@/components/filters/Filters";

export default function Home() {
  return (
    <>
      <Header />
      <Filters />
    </>
  );
}
