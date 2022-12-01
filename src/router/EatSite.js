import React from "react";
import '../scss/main.scss';
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Eat from "../components/Eat";

export default function EatSite() {
    return (
        <>
            <Header/>
            <Navigation/>
            <Eat/>
            <Footer/>
        </>
    )
}