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
        <div>
          <Sidebar />
        </div>
        {/* TODO:fix this */}
        <div style={{ margin: "12px", flexGrow: "1" }}>
          <Outlet />
        </div>
      </Flex>
    </>
  );
}

export default App;
