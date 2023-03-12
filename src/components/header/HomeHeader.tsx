import { useContext, FormEvent, useState, useEffect } from "react";
import { CartIcon, SearchIcon } from "../ui/Icons";
import { ComicsContext } from "../../context/ComicsContext";
import { publicKey, hash, apiURL, timestamp } from "../../core/config";

import Cart from "../Cart";

export default function HomeHeader({
  searchClick,
}: {
  searchClick: (b: boolean) => void;
}) {
  const selectedComics = useContext(ComicsContext);
  const [query, setQuery] = useState("");
  const [navColor, setNavColor] = useState<"transparent" | "black">(
    "transparent",
  );

  const getComics = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    selectedComics.setComicsList(data.data.results);
  };

  function search(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let url = "";
    if (query === "") {
      url = `${apiURL}?formatType=comic&ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=12`;
    } else {
      url = `${apiURL}?formatType=comic&titleStartsWith=${query}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=12`;
    }

    getComics(url);
  }

  function scrollEvent() {
    window.scrollY > 500 ? setNavColor("black") : setNavColor("transparent");
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  function refresh() {
    window.location.reload();
  }

  return (
    <header
      className={`fixed z-10 h-20 w-screen px-5 text-white bg-${navColor} transition duration-700 sm:px-10 lg:px-20`}
    >
      <nav className="flex h-full items-center justify-between">
        <button
          className="text-xl font-bold text-[#ca8a04] sm:text-2xl"
          onClick={refresh}
        >
          MARVEL API
        </button>
        <div className="flex items-center">
          <form
            className="hidden items-center sm:flex"
            onSubmit={(e) => search(e)}
          >
            <input
              type="text"
              placeholder="search"
              className="h-8 rounded-l-md bg-red-900 pb-1 pl-2 text-gray-300 placeholder:text-slate-400 focus:outline-none"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="h-8 rounded-r-md bg-red-900 pr-3"
              type="submit"
              onClick={() => searchClick(true)}
            >
              {SearchIcon}
            </button>
          </form>
          <Cart>{CartIcon}</Cart>
        </div>
      </nav>
    </header>
  );
}
