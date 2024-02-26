import type { MetaFunction } from "@remix-run/node";
import { ToggleTheme } from "~/components/common/toggle-theme";

export const meta: MetaFunction = () => {
  return [
    { title: "Nivo" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="w-full gap-2 h-screen flex items-center justify-center">
      <h1>Olá mundo</h1>
      <ToggleTheme />
    </div>
  );
}
