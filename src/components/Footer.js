import React,{useEffect, useRef} from "react";
import '../scss/main.scss';
import Typed from "typed.js";


const Footer = () => {


    const firstRef = useRef(null)

    useEffect(() => {
        const typedFirst = new Typed(firstRef.current, {
            strings:["Dziękuję!", "Zyla!","Zapraszam"],
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
        <section className='footer'>
            <div className='wrapper'>
                <div className='footer__cont'>
                    <div className="footer__content">
                        <h2 className="footer__header"> Wykonała: Oliwia Szajstek </h2>
                        <div ref={firstRef} className="footer__text"> </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer