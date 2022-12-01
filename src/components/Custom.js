import React from "react";
import '../scss/main.scss';
import zyla3 from '../assets/Zyla3.jpg'
import decoration from '../assets/Decoration.svg'



const Custom = () => {

    return (
        <section className='custom'>
            <div className='wrapper'>
                <div className='custom__cont'>

                    <div className="custom__content">
                        <h2 className="custom__header"> WYGLĄD</h2>
                        <img src={decoration} className="custom_decoration"/>
                        <div className="custom__text">Według wzorca masa ciała dorosłego szpica miniaturowego nie powinna przekraczać 3 kg, a
                            wysokość w kłębie powinna mieścić się między 18 – 22 cm.
                            Szpic miniaturowy (Pomeranian) jest psem o niecodziennym i przykuwającym uwagę
                            wyglądzie. Główną cechą rozpoznawczą szpica miniaturowego jest jego niezwykle bujny
                            włos, oraz wesoły pyszczek co sprawia jakby się "uśmiechał". Oczy są ciemne i nieduże.
                            Uszy pomeraniana są małe, sterczące i blisko siebie osadzone. Ogon silnie skręcony i
                            zawinięty na grzbiet. Kończyny przednie niewielkie i proste, a tylne zaś mocno umięśnione
                            przez co porusza się niezwykle dostojnie. </div>
                    </div>
                    <img src={zyla3} className="custom__img"/>
                </div>
            </div>
        </section>
    )
}

export default Custom