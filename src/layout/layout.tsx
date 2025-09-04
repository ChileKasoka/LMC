import SideMenu from "../app/components/SideMenu";
import { Outlet } from "react-router-dom";
import Header from "../app/components/Header";

export default function Layout() {
  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw", overflow: "hidden" }}>
      {/* Sidebar */}
      <SideMenu />

      {/* Content wrapper */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100%", // full height
        }}
      >
        <Header />

        <main
          style={{
            flex: 1,             // fill remaining height below header
            width: "100%",       // fill remaining width
            overflowY: "auto",   // ✅ allow vertical scrolling
            overflowX: "hidden",  // prevent scroll
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
