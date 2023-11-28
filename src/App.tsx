import React from "react";
import styles from "./App.module.css";
import { Icon } from "./ui/icon/icon";
import { Flex } from "./ui/icon/layout/flex";

function App() {
  return (
    <>
      <Flex container justifyContent="space-between">
        <div className={styles.test}>Hello World</div>
        <Icon name={"add"} />
        <Icon name={"back-arrow"} />
      </Flex>
    </>
  );
}

export default App;
