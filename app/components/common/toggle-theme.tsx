import { Theme, useTheme } from "remix-themes"
import { Switch } from "../ui/switch"

export const ToggleTheme = () => {
  const [theme, setTheme] = useTheme()
  const isLight = theme === Theme.LIGHT

  const handleChangeTheme = () => {
    setTheme(isLight ? Theme.DARK : Theme.LIGHT)
  }
  
  return (
    <>
      <Switch checked={!isLight} onCheckedChange={handleChangeTheme} />
    </>
  )
}