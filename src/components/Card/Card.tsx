import React from 'react';
import s from './Card.module.scss'

interface propsType {
    fullName: string
    desc: string
}

const Card: React.FC<propsType> = ({fullName, desc}) => {
    return (
        <div className={s.Card}>
            <div>
                {fullName}
            </div>

            <div>
                {desc}
            </div>
        
        </div>
    );
}

export default Card;