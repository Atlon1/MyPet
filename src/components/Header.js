import React,{useEffect, useRef} from "react";
import '../scss/main.scss';
import Typed from "typed.js";


const Header = () => {

    const firstRef = useRef(null)

    useEffect(() => {
        const typedFirst = new Typed(firstRef.current, {
            strings:["Zyla,", "Mój mały pupilek,","Kocham ja najbardziej na świecie!"],
            startDelay: 0,
            typeSpeed: 20,
            backSpeed: 5,
            backDelay: 4000,
            bindInputFocusEvents: true,
            loop: true
        });

        return () => {
            typedFirst.destroy();
        }
    }, [])

    return (
        <section className="header">
            <div className="wrapper">
                <div className="header__section">
                    <div className="header__firstCont">Poznajcie mojego Pupila </div>
                    <div ref={firstRef} className="header__secCont"> </div>
                </div>
            </div>
        </section>
    )
}

export default Header;
