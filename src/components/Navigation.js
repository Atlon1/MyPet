import React from "react";
import '../scss/main.scss';
import {Link} from "react-router-dom";
import zyla1 from "../assets/Zyla1.webp";

const Navigation = () => {





    return (
        <section className='navigation' id='navigation'>
            <div className='wrapper'>
                <div className='navigation__container'>
                    <img className='navigation__img' src={zyla1}/>
                    <div className='navigation__section'>
                        <input type='checkbox' className='menu__btn' id="menu__btn"/>
                        <label htmlFor='menu__btn' className='menu__toggle'>
                            <span/>
                            <span/>
                            <span/>
                        </label>
                        <ul className='navigation__list__container'>
                            <div className='navigation__list__container__sec'>
                                <li className='list__item'>
                                    <div className='list__link'>
                                        <Link className='list__item__sec' to='/myPet/'>O moim pupilu..</Link>
                                    </div>
                                </li>
                                <li className='list__item'>
                                    <div className='list__link'>
                                        <Link className='list__item__sec' to='/myPet/charackter'>Charakterek. :)</Link>
                                    </div>
                                </li>
                                <li className='list__item'>
                                    <div className='list__link'>
                                        <Link className='list__item__sec' to='/myPet/customize'>Jak wygląda. :)</Link>
                                    </div>
                                </li>
                                <li className='list__item'>
                                    <div className='list__link'>
                                        <Link className='list__item__sec' to='/myPet/eat'>Co je :)</Link>
                                    </div>
                                </li>
                                <li className='list__item'>
                                    <div className='list__link'>
                                        <Link className='list__item__sec' to='/myPet/cherish'>Pielęgnacja</Link>
                                    </div>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navigation;
