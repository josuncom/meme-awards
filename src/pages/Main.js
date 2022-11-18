import React,{ useEffect } from "react";
import { useLocation } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import Project from "./Projects";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Connect from "./Connect";
import "../components/Main.css";

import { Fragment } from "react";


export default function Main(){
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return(
    <Fragment>
        <Home/>
        <About/>
        <Project/>
        <Profile/>
        <Connect/>
        <Footer/>
    </Fragment>
  )
}