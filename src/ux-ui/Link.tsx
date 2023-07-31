import React from 'react';
import '../styles/ux-ui/link.scss'
import {handleClick} from "../reducers/toolbarReduce";
import {useDispatch} from "react-redux";

type propsType = {
    className: string,
    href?: string,
    children: React.ReactNode
    onClick?: () => void
}

const Link = ({className, href, children, onClick}: propsType) => {
    return (
        <a onClick={onClick} className={className + ' styleLink'} href={href}>{children}</a>
    );
};

export default Link;