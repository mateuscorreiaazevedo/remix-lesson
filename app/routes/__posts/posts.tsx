import { Link } from "@remix-run/react";
import { ToggleTheme } from "~/components/common/toggle-theme";

export default function Posts() {
  return (
    <div className="flex flex-col">
      <Link to={'/'}>Voltar para home</Link>
      Posts
      <ToggleTheme />
    </div>
  )
}
