import type { Locale } from "./i18n";
import type { Dictionary } from "@/dictionaries/pl";

const dictionaries: Record<Locale, () => Dictionary> = {
  pl: () => require("@/dictionaries/pl").default,
  en: () => require("@/dictionaries/en").default,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]();
}
