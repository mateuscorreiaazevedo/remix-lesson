import { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = ({ params }) => {
  const { locale } = params
  return [
    { title: `${locale} - Nivo` },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function MainLayout() {

  return (
    <main className="h-svh w-full bg-background">
      <Outlet />
    </main>
  )
}