import React from 'react';

type propsType = {
    title: string;
    percent: number
}

const Skill = ({title, percent}: propsType) => {
    return (
        <div className='skill'>
            <p className='skill__title'>{title}</p>
            <div>
                <div className='scale'>scale</div>
                <p className='percent'>{percent}%</p>
            </div>
        </div>
    );
};

export default Skill;