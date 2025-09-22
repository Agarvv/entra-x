import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, useRoutes } from "react-router-dom"
import { routes } from "./routes"
import './index.css'

function Router() {
  const element = useRoutes(routes)
  return element
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>
)
