import React from "react";
import '../scss/main.scss';
import zyla2 from '../assets/zyla2.webp';
import decoration from '../assets/Decoration.svg'


const Information = () => {

    return (
        <section className='information'>
            <div className='wrapper'>
                <div className='information__cont'>

                    <div className="information__content">
                        <h2 className="information__header"> Szpic minaturowy</h2>
                        <img src={decoration} className="infroamtaion_decoration"/>
                        <div className="information__text">rasa psa, należąca do grupy szpiców i psów
                            pierwotnych, zaklasyfikowana do sekcji szpiców europejskich. Szpic miniaturowy
                            (Pomeranian) pomimo swojego niewielkiego wzrostu jest psem długowiecznym i średnio
                            dożywa od 12 do 16 lat. </div>
                    </div>
                    <img src={zyla2} className="information__img"/>
                </div>
            </div>
        </section>
    )
}

export default Information