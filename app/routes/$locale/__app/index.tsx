import Anchor from "~/components/common/anchor";
import { ToggleTheme } from "~/components/common/toggle-theme";


export default function Index() {
  return (
    <div className="gap-2 bg-teal-800 flex items-center justify-center">
      <h1>Olá mundo</h1>
      <ToggleTheme />
      <Anchor to='/posts'>
        ir para posts
      </Anchor>
    </div>
  );
}
