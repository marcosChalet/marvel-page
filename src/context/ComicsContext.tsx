/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from "react";
import ComicsInterface from "../core/Comics.interface";

type ComicsContextType = {
  comics: ComicsInterface;
  setComics: (comics: ComicsInterface) => void;
  comicsList: any[];
  setComicsList: (comicsList: any[]) => void;
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const ComicsContext = createContext<ComicsContextType>(null!);
