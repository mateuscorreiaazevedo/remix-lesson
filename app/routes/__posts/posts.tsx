import { Link, json, useLoaderData } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { ToggleTheme } from "~/components/common/toggle-theme";

export async function loader() {
  return json({ name: 'Mateus' })
}

export default function Posts() {
  const { name } = useLoaderData<typeof loader>()
  const { t } = useTranslation()
  return (
    <div className="flex flex-col">
      <Link to={'/'}>Voltar para home</Link>
      {t('name', { name })}
      <ToggleTheme />
    </div>
  )
}
