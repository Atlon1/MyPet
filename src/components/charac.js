import React from "react";
import '../scss/main.scss';
import zyla4 from '../assets/zyla4.jpg'
import decoration from '../assets/Decoration.svg'



const Charac = () => {

    return (
        <section className='charac'>
            <div className='wrapper'>
                <div className='charac__cont'>

                    <div className="charac__content">
                        <h2 className="charac__header"> CHARAKTER</h2>
                        <img src={decoration} className="charac_decoration"/>
                        <div className="charac__text">Szpic miniaturowy jest wesołym, niezwykle sympatycznym i żywym psem. Uwielbia zabawę i
                            świetnie pływa. Jest to pies inteligentny i niezwykle czujny. Często mówi się o nim jak o psie
                            jednego właściciela, ponieważ w ogromnym stopniu bardzo się do niego przywiązuje. Jest
                            bardzo oddany i wierny. Pozostałych domowników również będzie darzył wielkim uczuciem,
                            ale tylko za jedną osobą będzie podążać krok w krok. Pomeranian jest nieufny wobec
                            obcych, więc zawsze wita ich głośnym szczekaniem, oraz zachowuje bezpieczny dystans. </div>
                    </div>
                    <img src={zyla4} className="charac__img"/>
                </div>
            </div>
        </section>
    )
}

export default Charac