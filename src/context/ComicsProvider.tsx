import { useState } from "react";
import { ComicsContext } from "./ComicsContext";
import ComicsInterface from "../core/Comics.interface";
import ComicsClass from "../core/ComicsClass";

export default function ComicsProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [comics, setComics] = useState<ComicsInterface>(ComicsClass.empty());
  const [comicsList, setComicsList] = useState<unknown[]>([]);
  return (
    <ComicsContext.Provider
      value={{ comics, setComics, comicsList, setComicsList }}
    >
      {children}
    </ComicsContext.Provider>
  );
}
