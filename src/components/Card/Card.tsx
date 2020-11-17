import React from 'react';
import s from './Card.module.scss'

interface propsType {
    fullName: string
    desc: string
}

const Card: React.FC<propsType> = ({fullName, desc}) => {
    return (
        <div className={s.Card}>
            <div className={s.Card__fullName}>
                {fullName}
            </div>

            <div className={s.Card__desc}>
                {desc}
            </div>
        
        </div>
    );
}

export default Card;