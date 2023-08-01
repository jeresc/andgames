import { Outlet, useLocation } from "react-router-dom";
import { Nav } from "@/components";

export const Main = () => {
  const location = useLocation();

  const shouldShowNav = location.pathname !== "/";

  return (
    <>
      <main>
        {shouldShowNav && <Nav />}
        <Outlet />
      </main>
    </>
  )
}
