import React from 'react';
import cn from 'classnames';
import s from './Paginator.module.scss'
import { pagesArray } from '../../secondaryFunctions/secondaryFunctions';

interface propsType {
    totalCount: number
    pageSize: number
    activePage: any
    setActivePage: (activepage: number) => void
}

const Paginator: React.FC<propsType> = ({ totalCount, pageSize, activePage, setActivePage }) => {
    return (
        <div className={s.Paginator}>
            {pagesArray(totalCount, pageSize).map((number, index) => (
                <div key={number}
                    className={cn(s.Paginator__btn, {[s.Paginator__activePage]: index + 1 === activePage})}
                    onClick={() => setActivePage(index + 1)}
                >
                    {number}
                </div>
            ))}
        </div>
    );
}

export default Paginator;