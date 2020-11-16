import React, {memo, useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { requestUsers } from './../../store/usersReducer';
import { stateType, userType } from '../../types/types';
import s from './UsersList.module.scss';
import Card from '../Card/Card';
import Paginator from '../Paginator/Paginator';


interface mapStateToPropsType {
    users: Array<userType>
}

interface mapDispatchToPropsType {
    requestUsers: () => void
}

// performance improvement
const UsersList: React.FC<mapStateToPropsType & mapDispatchToPropsType> = ({users, requestUsers}) => {
    const pageSize: number = 5;

    let [activePage, setActivePage] = useState(1)

    useEffect(() => {
        if (users.length === 0) requestUsers()
    }, [users.length, requestUsers])

    return (
        <div className={s.List}>
            {users.length > 0 
                && users.filter((user, index) => index + 1 > (activePage - 1) *  pageSize && index + 1 <= activePage *  pageSize) // filter 5 users in page
                    .map(user => 
                        (<Card key={user.id} fullName={`${user.name} ${user.surname}`} desc={user.desc}/>) // show this 5 users
                    )}

            <Paginator totalCount={users.length} pageSize={pageSize} activePage={activePage} setActivePage={setActivePage}/>
        </div>
    );
}

const mapStateToProps = (state: stateType): mapStateToPropsType => ({
    users: state.users,
});

export default connect<mapStateToPropsType, mapDispatchToPropsType, unknown, stateType>(mapStateToProps, { requestUsers })(memo(UsersList))