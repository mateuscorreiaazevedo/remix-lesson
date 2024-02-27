import { useContext } from "react";
import Anchor from "~/components/common/anchor";
import { ToggleTheme } from "~/components/common/toggle-theme";
import { I18nContext } from "~/contexts/i18n-context";

export default function Posts() {
  const { translations, locale } = useContext(I18nContext)



  return (
    <div className="flex flex-col">
      <Anchor to={'/'}>Voltar para home</Anchor>
      {translations.common.hello}
      <br />
      {locale}
      <ToggleTheme />
    </div>
  )
}
