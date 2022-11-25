import React,{ useEffect } from "react";
import { useLocation } from "react-router-dom";

import Home from "./Home";
import Clock from "./Clock";
import Vote from "./Vote";
import Profile from "./Profile";
import Project from "./Projects";
import Footer from "../components/Footer";
import Connect from "./Connect";
import Top2 from "./Top2";
import "../components/Main.css";

import { Fragment } from "react";


export default function Main(){
  const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  return(
    <Fragment>
        <Home/>
        <Top2/>
        <Clock/>
        <Vote/>
        <Project/>
        <Profile/>
        <Connect/>
        <Footer/>
    </Fragment>
  )
}