import React from 'react';
import '../styles/components/toolbar.scss'
import { Link} from 'react-scroll'


const Toolbar = () => {
    return (
        <div  className='toolbar'>
            <Link className="toolbar__item" activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
            <Link className="toolbar__item" activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500}>Skills</Link>
            <Link className="toolbar__item" activeClass="active" to="experience" spy={true} smooth={true} offset={-50} duration={500}>Experience</Link>
            <Link className="toolbar__item" activeClass="active" to="work" spy={true} smooth={true} offset={-50} duration={500}>Work</Link>
        </div>
    );
};

export default Toolbar;