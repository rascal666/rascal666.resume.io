import React from 'react';


import Title from "../components/Title";
import Skill from "../components/skill";

import '../styles/section/skills.scss'

const skillParams = {
    script: {
        title: 'javaScript',
        percent: 50,
    },
    html: {
        title: 'html',
        percent: 80,
    },
    css: {
        title: 'css',
        percent: 80,
    },
    scss: {
        title: 'scss',
        percent: 50,
    },
    react: {
        title: 'react',
        percent: 30,
    },
    redux: {
        title: 'redux',
        percent: 15,
    },
    typeScript: {
        title: 'typeScript',
        percent: 15,
    },
    pug: {
        title: 'pug',
        percent: 30,
    },
    git: {
        title: 'git',
        percent: 50,
    }
}
const Skills = () => {


    return (
        <div id='skills' className='skills'>
            <Title children='Skills'/>
            <div className='skills__block'>
                <Skill title={skillParams.script.title} percent={skillParams.script.percent}/>
                <Skill title={skillParams.html.title} percent={skillParams.html.percent}/>
                <Skill title={skillParams.css.title} percent={skillParams.css.percent}/>
                <Skill title={skillParams.scss.title} percent={skillParams.scss.percent}/>
                <Skill title={skillParams.react.title} percent={skillParams.react.percent}/>
                <Skill title={skillParams.redux.title} percent={skillParams.redux.percent}/>
                <Skill title={skillParams.typeScript.title} percent={skillParams.typeScript.percent}/>
                <Skill title={skillParams.pug.title} percent={skillParams.pug.percent}/>
                <Skill title={skillParams.git.title} percent={skillParams.git.percent}/>
            </div>
        </div>
    );
};

export default Skills;