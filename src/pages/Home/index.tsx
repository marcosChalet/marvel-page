import { useState, lazy, Suspense } from "react";
import HomeHeader from "../../components/header/HomeHeader";
const ComicsSection = lazy(
  () => import("../../components/comics/ComicsSection"),
);

function HeroSection() {
  return (
    <section className="relative">
      <div
        className={`from-transparent to-black before:absolute before:-bottom-1 before:h-12 before:w-screen before:bg-gradient-to-b before:content-['']`}
      />
      <img
        className="h-[550px] w-screen bg-[url('/src/assets/cover.jpg')] bg-cover bg-center bg-no-repeat"
        alt="marvel characters"
      />
    </section>
  );
}

export default function Home() {
  const [searchedContent, setSearchedContent] = useState(false);

  return (
    <div className="">
      <HomeHeader searchClick={setSearchedContent} />
      {!searchedContent ? <HeroSection /> : false}
      <Suspense fallback={<div>loading...</div>}>
        <ComicsSection />
      </Suspense>
    </div>
  );
}
