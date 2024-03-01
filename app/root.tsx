import { cssBundleHref } from "@remix-run/css-bundle";
import favicon from '~/assets/favicon/icon.svg'
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
} from "@remix-run/react";
import { themeSessionResolver } from "./libs/theme.server";
import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from "remix-themes";
import clsx from "clsx";
import i18next from "./libs/i18n/index.server";
import { useChangeLanguage } from "./hooks/use-change-language";
import { useTranslation } from "react-i18next";

import './styles/globals.css'


export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request)
  const locale = await i18next.getLocale(request)
  const theme = getTheme()

  return json({
    theme,
    locale
  })
}

export const links: LinksFunction = () => [
  { rel: 'icon', href: favicon },
  { rel: 'preconnect', href: "https://fonts.googleapis.com" },
  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap' },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>()

  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  )
}

export const handle = {
  i18n: 'common'
}

export function App() {
  const data = useLoaderData<typeof loader>()
  const { i18n } = useTranslation()
  const [theme] = useTheme()

  useChangeLanguage(data.locale)

  return (
    <html lang={data.locale} dir={i18n.dir()} className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <LiveReload />
        <Scripts />
      </body>
    </html>
  );
}
