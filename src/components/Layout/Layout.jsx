import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "components/NavBar/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  )
}
export default Layout
