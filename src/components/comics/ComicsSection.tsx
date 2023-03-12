import { useContext, useEffect } from "react";
import { ComicsContext } from "../../context/ComicsContext";
import ComicsInterface from "../../core/Comics.interface";
import ComicsClass from "../../core/ComicsClass";
import DetalhesQuadrinho from "../modal/DetalhesQuadrinho";
import { publicKey, hash, apiURL, timestamp } from "../../core/config";

import Comics from "./Comics";

export default function ComicsSection() {
  const url = `${apiURL}?formatType=comic&ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=12`;
  const selectedComics = useContext(ComicsContext);

  function showModal(comics: ComicsInterface) {
    selectedComics.setComics(comics);
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(url, { signal })
      .then((res) => res.json())
      .then((res) => selectedComics.setComicsList(res.data.results))
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("abort");
        }
      });
  }, []);

  return (
    <section className="flex flex-wrap justify-center bg-gradient-to-b from-[#000] to-[#1f0101] pb-16 pt-24 text-slate-400">
      {selectedComics.comicsList.length > 0
        ? selectedComics.comicsList.map((item) => {
            const comics = new ComicsClass(
              item.id,
              item.title,
              item.description,
              item.thumbnail.path + "." + item.thumbnail.extension,
              true,
            );
            return <Comics key={comics.id} item={comics} click={showModal} />;
          })
        : false}
      {selectedComics.comics.isSelected && <DetalhesQuadrinho />}
    </section>
  );
}
