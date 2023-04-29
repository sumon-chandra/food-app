import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";

export function RootLayout() {
  return (
    <>
      <Header />
      <main className="lg:w-9/12 px-4 lg:px-0 mx-auto py-10">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
