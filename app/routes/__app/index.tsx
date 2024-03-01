import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { ToggleTheme } from "~/components/common/toggle-theme";


export default function Index() {
  const { t } = useTranslation()

  return (
    <div className="gap-2 bg-teal-800 flex items-center justify-center">
      <h1>{t('hello')}</h1>
      <ToggleTheme />
      <Link to='/posts'>
        ir para posts
      </Link>
    </div>
  );
}
