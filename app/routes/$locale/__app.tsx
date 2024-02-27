import { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Nivo" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function AppLayout() {

  
  return (
    <main className="h-svh w-full bg-secondary">
      <Outlet />
    </main>
  )
}