import React from 'react';
import Title from "../components/Title";
import '../styles/section/work.scss'
import Link from "../ux-ui/Link";
import imgWork1 from '../img/work/work1.png'
import imgWork2 from '../img/work/work2.png'
import imgWork3 from '../img/work/work3.png'
import imgWork4 from '../img/work/work4.png'
import imgWork5 from '../img/work/work5.png'
import imgWork6 from '../img/work/work6.png'
import imgWork7 from '../img/work/work7.png'
import WorkMocKup from "../components/WorkMocKup";

const Work = () => {


    return (
        <div id='work' className='work'>
            <Title children='Work' />

            <div className='work__mookAp'>
                <WorkMocKup design='чужой' target='тестовое в компанию' img={imgWork6} link="https://rascal666.github.io/lidera-dev/"/>
                <WorkMocKup design='мой' target='в учебных целях' description='Описание - поиск рандомных фильмов / сериалов / мультиков по фильтрам' img={imgWork7} link="https://rascal666.github.io/kinoSvidanie/"/>
                <WorkMocKup design='чужой' target='по работе' img={imgWork1} link='https://www.pulscen.ru/about/promo/Tarif_Biznes_luchshiy_drug_vashego_biznesa?utm_rascal=pay'/>
                <WorkMocKup design='чужой' target='по работе' img={imgWork2} link="https://www.pulscen.ru/about/promo/schastlivyy_vtornik?utm_rascal=free"/>
                <WorkMocKup design='чужой' target='по работе' img={imgWork3} link='https://www.pulscen.ru/about/promo/Darim_bonusy_na_15000_rubley'/>
                <WorkMocKup design='чужой' target='по работе' img={imgWork4} link='https://www.pulscen.ru/about/promo/Chernaya_pyatnitsa_na_Pulse_tsen?utm_rascal=pay'/>
                <WorkMocKup design='чужой' target='по работе' img={imgWork5} link="https://www.pulscen.ru/about/promo/Ideal'naya_reklama_v_Yandekse"/>

            </div>

        </div>
    );
};

export default Work;