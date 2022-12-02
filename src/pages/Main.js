import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Home from "./Home";
import Clock from "./Clock";
import Vote from "./Vote";
import Footer from "./Footer";
import Top2 from "./Top2";
import Link from "./Link";

import "../css/Main.css";

import { Fragment } from "react";

export default function Main() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Fragment>
      <Home />
      <Top2 />
      <Clock />
      <Vote />
      <Link />
      <Footer />
    </Fragment>
  );
}
