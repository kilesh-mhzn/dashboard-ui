import React from "react";
import styles from "./App.module.css";
import { Flex } from "./ui/layout/flex";
import { Grid, GridItem } from "./ui/layout/grid";
import { IconClose } from "./ui/icons";

function App() {
  return (
    <>
      <Flex container justifyContent="space-between">
        <div className={styles.test}>Hello World</div>
        <IconClose color="#fff" />
      </Flex>

      <Grid cols={12}>
        <GridItem colSpan={5}>test</GridItem>
        <GridItem colSpan={3}>test22</GridItem>
        <GridItem colSpan={1}>test1</GridItem>
      </Grid>
    </>
  );
}

export default App;
