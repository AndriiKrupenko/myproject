import React from 'react';
import './title.css';

const Title = ({title_1, title_2}) => {
    return (
        <div>
            <p className="title">{title_1}<span>{title_2}</span></p>
        </div>
    )
};

export default Title;
