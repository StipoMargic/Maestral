import Cookies from "js-cookie";
import React, { useContext, useState } from "react";
import { ILangContext } from "./types";
import { EN, HR, LANG_COOKIE } from "./lang.ts";

const defaultValue = {
  lang: EN,
};
export const LangContext = React.createContext<ILangContext>(defaultValue);
export const useLang = () => useContext(LangContext);

const LangProvider: React.FC = ({ children }: any) => {
  let initLang: string | undefined = Cookies.get(LANG_COOKIE);
  if (!initLang) {
    Cookies.set(LANG_COOKIE, HR);
    initLang = HR;
  }
  const [lang, setLang] = useState<string>(initLang);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangProvider;
