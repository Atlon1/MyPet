import React from "react";
import '../scss/main.scss';
import zyla5 from "../assets/zayla5.jpg"
import decoration from '../assets/Decoration.svg'



const Eat = () => {

    return (
        <section className='eat'>
            <div className='wrapper'>
                <div className='eat__cont'>

                    <div className="eat__content">
                        <h2 className="eat__header"> ŻYWIENIE</h2>
                        <img src={decoration} className="custom_decoration"/>
                        <div className="eat__text">Psy tej rasy na ogół mają dobry apetyt i zjedzą prawie wszystko. Posiłki przede wszystkim
                            powinny cechować się dużą zawartością mięsa. Dodatkowymi źródłami pełnowartościowego
                            białka, które mogą być podawane pomeranianowi, są jaja kurze i biały ser. Oczywiście pies
                            powinien mieć zapewniony stały dostęp do świeżej wody pitnej. Małego szczeniaka
                            pomeraniana karmi się 4-5 razy dziennie, nieco starszego – 3-4 razy, dorosłego psa – 2-3
                            razy. Jedzenie podaje się zawsze w tym samym miejscu i o tych samych porach dnia. Po 10
                            minutach miskę należy zabrać, niezależnie czy pies ją opróżnił czy nie, ponieważ psy te
                            mają tendencję do tycia co negatywnie wpływa na ich zdrowie. </div>
                    </div>
                    <img src={zyla5} className="eat__img"/>
                </div>
            </div>
        </section>
    )
}

export default Eat