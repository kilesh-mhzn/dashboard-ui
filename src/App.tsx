import { Flex } from "@ui/layout/flex";
import React from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Flex container>
        <div>sidebar</div>
        <div>
          <Outlet />
        </div>
      </Flex>
    </>
  );
}

export default App;
