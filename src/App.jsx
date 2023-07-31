import React, {useRef, FC}from 'react';
import './styles/app.scss'
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Work from "./sections/Work";
import Toolbar from "./components/Toolbar";

const App:FC = () => {
    const refHome = useRef(null)
    console.log(refHome)
    return (
        <div className='app' >
            <div>jhkjhkjjkh</div>
            <Toolbar />
            <Home ref={refHome} />
            <Skills/>
            <Experience/>
            <Work/>
        </div>
    );
};

export default App;