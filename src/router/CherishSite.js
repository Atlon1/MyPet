import React from "react";
import '../scss/main.scss';
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cherish from "../components/Cherish";


export default function CherishSite() {
    return (
        <>
            <Header/>
            <Navigation/>
            <Cherish/>
            <Footer/>
        </>
    )
}