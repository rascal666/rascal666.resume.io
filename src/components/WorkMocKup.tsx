import imgWork1 from "../img/work/work1.png";
import React from "react";

type typeProps = {
    img: any;
    link: string;
    design: string;
    target: string;
    description?: string
}

const WorkMocKup = ({img, link, design, target, description}: typeProps) => {

    function animaRotate (e:React.MouseEvent<HTMLSpanElement, MouseEvent>) {
        let element = e.currentTarget.style
        element.transform = 'rotate(' + 5 + 'deg)'
    }

    function animaRotateOut (e:React.MouseEvent<HTMLSpanElement, MouseEvent>) {
        let element = e.currentTarget.style
        element.transform = 'rotate(' + 0 + 'deg)'
    }

    return (
        <div className='WorkMocKup'>
            <a href={link} target="_blank">
                <img onMouseOver={(e) => {
                    animaRotate(e)
                }} onMouseOut={(e) => {
                    animaRotateOut(e)
                }} src={img} alt="" />
            </a>
            <div className="WorkMocKup__text">
                <p><b>Дизайн</b> - {design}</p>
                <p><b>Цель</b> - {target}</p>
                <p>{description}</p>
            </div>

        </div>
    );
};

export default WorkMocKup;