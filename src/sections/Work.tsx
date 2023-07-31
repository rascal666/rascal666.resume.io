import React from 'react';
import Title from "../components/Title";
import '../styles/section/work.scss'
import Link from "../ux-ui/Link";

const Work = () => {
    return (
        <div id='work' className='work'>
            <Title children='Work'/>
            <p className='work__text'>работ как таковых нет (долгое время делала одни скучные лендинги).
                Тестовые работы можно посмотреть на git <Link className='work__accent' href='https://github.com/rascal666' children='https://github.com/rascal666'/> </p>

        </div>
    );
};

export default Work;