import { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Posts - Nivo" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function PostsLayout() {

  return (
    <main className="h-svh w-full bg-background">
      <Outlet />
    </main>
  )
}