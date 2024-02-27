/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext } from "react";
import en from "~/locales/en";
import ptBr from "~/locales/pt-br";


export type Translation = typeof ptBr | typeof en

type I18n = {
  [key: string]: Translation;
};

type Context = {
  translations: Translation,
  locale: string
}

export const I18nContext = createContext({} as Context)

export const I18nProvider = ({ children, locale }: { children: ReactNode, locale: string }) => {
  const i18n: I18n = {
    "pt-br": ptBr,
    en
  }

  const translations = i18n[locale as string]

  return (
    <I18nContext.Provider value={{ translations, locale }}>
      {children}
    </I18nContext.Provider>
  )
}
