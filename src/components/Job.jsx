import React from 'react';
import '../styles/components/job.scss'

const Job = () => {
    return (
       <div className='job'>
           <div className='job__item'>
               <div className='job__title'>Сентябрь 2019 — июнь 2022 - Абак-Пресс, медиахолдинг</div>
               <div className='job__subtitle'>Обязанности:</div>
               <div className='job__subtitle'>-  Верстка посадочных страниц (с добавление библиотек и какой либо динамики);</div>
               <div className='job__subtitle'>-  Дизайн макетов;</div>
               <div className='job__subtitle'>-  Верстка и отправка писем;</div>
           </div>
           <div className='job__item'>
               <div className='job__title'>Июль 2022 — сентябрь 2022г - Сайтсофт</div>
               <div className='job__subtitle'>Обязанности:</div>
               <div className='job__subtitle'>-  Работа с асинхронными запросами, взаимодействие с бекендом;</div>
           </div>
       </div>
    );
};

export default Job;