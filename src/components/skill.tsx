import React, {useEffect, useState, useRef} from 'react';
import {useInView} from "react-intersection-observer";
import '../styles/components/skill.scss'

type propsType = {
    title: string;
    percent: number
}


const Skill = ({title, percent}: propsType) => {
    const [width, setWidth] = useState<number>(0)
    const [anima, setAnima] = useState<number>(0)
    const [percentDynamic, setPercentDynamic] = useState<number>(0)
    const refScale = useRef<HTMLDivElement | null>(null);
    const { ref, inView } = useInView({
        threshold: 0,
    });

    const styleScaleInside = {
        width: width,
        transitionDuration: `${anima}s`
    }

    function widthRef():number {
        if (refScale.current) {
            const computedStyle = getComputedStyle(refScale.current).width.slice(0,-2);
            return Number(computedStyle)
        }
        return 0
    }


    useEffect(() => {
        if (inView && percentDynamic===0){
            setWidth(widthRef()/100*percent)
            setAnima(percent/10)
            for (let i = 0; i < percent; i++) {
                setTimeout(() => {
                    setPercentDynamic(prevPercentDynamic => prevPercentDynamic + 1);
                }, i * 100);
            }
        }
    },[inView])

    return (
        <div ref={ref} className='skill'>
            <p className='skill__title'>{title}</p>
            <div className='skill__block'>
                <div ref={refScale} className='skill__scale'>
                    <div style={styleScaleInside} className='skill__scale-inside'></div>
                </div>
                <p className='skill__percent'>{percentDynamic}%</p>
            </div>
        </div>
    );
};

export default Skill;