import React from "react";
import '../scss/main.scss';
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Charac from "../components/charac";

export default function CharacSite() {
    return (
        <>
            <Header/>
            <Navigation/>
            <Charac/>
            <Footer/>
        </>
    )
}