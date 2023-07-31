import React from 'react';
import '../styles/components/title.scss'

type propsType = {
    className?: string,
    children: React.ReactNode
}

const Title = ({className, children}: propsType) => {
    return (
        <p className={className + ' title'} >{children}</p>
    );
};

export default Title;