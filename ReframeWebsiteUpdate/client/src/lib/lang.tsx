import { createContext, useContext, useEffect, useState } from "react";

interface LangContextValue {
  lang: "en" | "ar";
  toggle: () => void;
}

const LangContext = createContext<LangContextValue>({
  lang: "en",
  toggle: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<"en" | "ar">(
    (localStorage.getItem("lang") as "en" | "ar") || "en",
  );

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const toggle = () => setLang((l) => (l === "en" ? "ar" : "en"));

  return (
    <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
