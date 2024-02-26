import { themeSessionResolver } from "~/libs/theme.server"
import { createThemeAction } from "remix-themes"


export const action = createThemeAction(themeSessionResolver)
