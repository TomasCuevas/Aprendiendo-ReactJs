import { AppRouter } from "./router/AppRoutes"
import { AppTheme } from "./themes/AppTheme"

export const JournalApp = () => {

  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  )
}