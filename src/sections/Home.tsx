import React from 'react';
import '../styles/section/home.scss'
import img from '../img/home_img.png'


const Home = (ref) => {

    return (
            <div ref={ref} className='home'>
                <div className='home__heading'>Frontend-developer</div>
                <div className='home__heading'>F</div>
                <div className='home__subtitle'>тут будет всё тоже самое, что и в резюме. только с картинками.</div>
                <div className='home__subtitle'>ну или почти всё :)</div>
                <img className='home__img' src={img} alt=""/>
            </div>

    );
};

export default Home;