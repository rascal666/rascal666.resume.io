import React from 'react';
import './styles/app.scss'

import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Work from "./sections/Work";

const App = () => {
    return (
        <div className='app'>
            <Home />
            <Skills />
            <Experience />
            <Work />
        </div>
    );
};

export default App;