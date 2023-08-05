import React, { useRef } from 'react';
import '../styles/section/home.scss'
import img from '../img/home_img.png'
import Toolbar from "../components/Toolbar";
import Letter from "../components/Letter";

const Home = (() => {

    const heading = ['f','r','o','n','t','e','n','d','-','d','e','v','e','l','o','p','e','r']



    return (
        <div id='home' className='home'>
            <Toolbar/>
            <div className='letters'>
                {
                    heading.map((letter, idx) => {
                        return <Letter key={idx} letter={letter}></Letter>
                    })
                }
            </div>
            <div className='home__subtitle'>Мини резюме в картинках, что бы не было так скучно :) </div>
            {/*<div  className={' home__subtitle'}>ну или почти всё :)</div>*/}
            <img className=' home__img' src={img} alt=""/>
        </div>
    );
});



export default Home;