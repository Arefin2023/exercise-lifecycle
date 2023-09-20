import { Outlet } from "react-router-dom";
export function RootLayout() {
  return (
    <>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p> Copyright</p>
      </footer>
    </>
  );
}
