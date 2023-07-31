import React from 'react';
import '../styles/components/job.scss'

const Work = () => {
    return (
       <div className='job'>
           <div className='job'>
               <div className='job__title'>Сентябрь 2019 — июнь 2022 - Абак-Пресс, медиахолдинг</div>
               <div className='job__subtitle'>обязонности:</div>
               <div className='job__subtitle'>-  верстка посадочных страниц (с добавление библиотек и какой либо динамики)</div>
               <div className='job__subtitle'>-  дизайн макетов</div>
               <div className='job__subtitle'>-  верстка и отправка писем</div>
           </div>
           <div className='job'>
               <div className='job__title'>Июль 2022 — сентябрь 2022г</div>
               <div className='job__subtitle'>обязонности:</div>
               <div className='job__subtitle'>-  работа с асинхронными запросами, взаимодействие с бекендом</div>
           </div>
       </div>
    );
};

export default Work;