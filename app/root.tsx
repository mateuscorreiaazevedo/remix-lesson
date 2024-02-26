import { cssBundleHref } from "@remix-run/css-bundle";
import favicon from '../public/icon.svg'
import styles from './styles/globals.css'
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

export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request)
  const theme = getTheme()

  return json({
    theme
  })
}

export const links: LinksFunction = () => [
  { rel: 'icon', href: favicon },
  { rel: 'preconnect', href: "https://fonts.googleapis.com" },
  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap' },
  { rel: 'stylesheet', href: styles },
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

export function App() {
  const data = useLoaderData<typeof loader>()
  const [theme] = useTheme()



  return (
    <html lang="pt-br" className={clsx(theme)}>
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
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
