import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import id from "./id.json";

i18next.use(initReactI18next).init({
  resources: {
    EN: {
      translation: en,
    },
    ID: {
      translation: id,
    },
  },
  react: {
    useSuspense: true,
  },
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
  lng: window.sessionStorage.getItem("lang") ?? "EN",
});

export default i18next;
