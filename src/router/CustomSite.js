import React from "react";
import '../scss/main.scss';
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Custom from "../components/Custom";

export default function CustomSite() {
    return (
        <>
            <Header/>
            <Navigation/>
            <Custom/>
            <Footer/>
        </>
    )
}