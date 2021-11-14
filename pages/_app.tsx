import React, { Fragment } from "react";
import "tailwindcss/tailwind.css";
import NavigationBar from "../components/NavigationBar";
import { NavigationProvider } from "../hooks/useNavigation";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <NavigationBar />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
