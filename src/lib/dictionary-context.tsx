"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Dictionary } from "@/dictionaries/pl";
import type { Locale } from "@/lib/i18n";

type DictionaryContextType = {
  dict: Dictionary;
  locale: Locale;
};

const DictionaryContext = createContext<DictionaryContextType | null>(null);

export function DictionaryProvider({
  children,
  dictionary,
  locale,
}: {
  children: ReactNode;
  dictionary: Dictionary;
  locale: Locale;
}) {
  return (
    <DictionaryContext.Provider value={{ dict: dictionary, locale }}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary() {
  const context = useContext(DictionaryContext);
  if (!context)
    throw new Error("useDictionary must be used within DictionaryProvider");
  return context;
}
