import React from "react";
import styles from "./App.module.css";
import { Icon } from "./ui/icon/icon";

function App() {
  return (
    <>
      <div className={styles.test}>Hello World</div>
      <Icon name={"add"} />
      <Icon name={"back-arrow"} />
    </>
  );
}

export default App;
