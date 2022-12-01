import React from "react";
import '../scss/main.scss';
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Information from "../components/Information";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Header/>
            <Navigation/>
            <Information/>
            <Footer/>
        </>
    )
}