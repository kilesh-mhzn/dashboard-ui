import React from "react";
import { useRouteError } from "react-router-dom";
import styles from "./error-page.module.css";

const ErrorPage: React.FC = () => {
  const error: unknown = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className={styles.container}>
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          {(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
