import { Flex } from "@ui/layout/flex";
import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "@components/commons/sidebar/sidebar";
import { Navbar } from "@components/commons/navbar/navbar";
function App() {
  return (
    <>
      <Navbar />
      <Flex container>
        <div
          style={{
            flex: "0 0 250px",
            position: "fixed",
            height: "100%",
            overflowY: "auto",
          }}
        >
          <Sidebar />
        </div>
        {/* TODO: fix this */}
        <div
          style={{
            marginLeft: "200px",
            padding: "24px",
            flexGrow: "1",
            overflowY: "auto",
          }}
        >
          <Outlet />
        </div>
      </Flex>
    </>
  );
}

export default App;
