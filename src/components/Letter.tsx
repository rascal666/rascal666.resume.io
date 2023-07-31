import React from 'react';
import '../styles/components/letter.scss'

type propsType = {
    letter:string
}



const Letter = ({letter}: propsType) => {

    function randomDeg() {
        const array = [-5, -10, -15, -25, 25, 10, 5]
        let random = Math.floor(Math.random() * array.length);
        return array[random]
    }

    function test(e:React.MouseEvent<HTMLSpanElement, MouseEvent>) {
        let element = e.currentTarget.style
        element.transform = 'rotate(' + randomDeg() + 'deg)'
        setTimeout(() => {
            element.transform = 'rotate(' + 0 + 'deg)'
        }, 1000)
    }


    return (
        <span className='letter' onMouseOver={(e) => {test(e)}} >{letter}</span>
    );
};

export default Letter;