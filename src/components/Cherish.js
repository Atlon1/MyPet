import React from "react";
import '../scss/main.scss';
import zyla4 from '../assets/ola_zayla.jpg';
import decoration from '../assets/Decoration.svg';



const Cherish = () => {

    return (
        <section className='cherish'>
            <div className='wrapper'>
                <div className='cherish__cont'>

                    <div className="cherish__content">
                        <h2 className="cherish__header"> PIELĘGNACJA</h2>
                        <img src={decoration} className="cherish_decoration"/>
                        <div className="cherish__text">W celu utrzymania sierści w dobrej kondycji, a także zminimalizowania wypadania włosów,
                            należy psa regularnie trymować, czyli usuwać obumarłą sierść. Za pomocą odpowiedniej
                            szczotki. Kąpiele powinny odbywać się mniej więcej raz na miesiąc, przy czym należy psa
                            dokładnie wyczesać przed i po myciu, a następnie wysuszyć. Oczy przecieramy raz na kilka
                            dni przeznaczonym do tego płynem. W przypadku uszu również używamy środków do tego przeznaczonych, raz na miesiąc lub raz na tydzień jeśli to okres letni i pies dużo przebywa na zewnątrz. </div>
                    </div>
                    <img src={zyla4} className="cherish__img"/>
                </div>
            </div>
        </section>
    )
}

export default Cherish