import React from 'react';
import Title from "../components/Title";
import '../styles/section/experience.scss'
import imgBackground from '../img/experience_man.png'
import Job from "../components/Job";

const Experience = () => {
    return (
        <div id='experience' className='experience'>
            <Title className='experience__title' children='Experience'/>
            <img className='experience__img' src={imgBackground} alt=""/>
            <Job/>
        </div>
    );
};

export default Experience;