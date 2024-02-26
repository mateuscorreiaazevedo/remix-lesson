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
      <Switch className="data-[state=checked]:bg-green-500" checked={!isLight} onCheckedChange={handleChangeTheme} />
    </>
  )
}