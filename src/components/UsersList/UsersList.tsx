import React, {memo, useEffect} from 'react';
import { connect } from 'react-redux';
import { requestUsers } from './../../store/usersReducer';
import { stateType, userType } from '../../types/types';
import s from './UsersList.module.scss';


interface mapStateToPropsType {
    users: Array<userType>
}

interface mapDispatchToPropsType {
    requestUsers: () => void
}

interface ownPropsType {

}

// performance improvement
const UsersList: React.FC<mapStateToPropsType & mapDispatchToPropsType> = ({users, requestUsers}) => {
    useEffect(() => {
        requestUsers()
    }, [])

    return (
        <div className={s.List}>
            {users.map(user => {
                return (
                    <div>
                        {user.name}
                    </div>
                )
            })}
        </div>
    );
}

const mapStateToProps = (state: stateType): mapStateToPropsType => ({
    users: state.users,
});

export default connect<mapStateToPropsType, mapDispatchToPropsType, ownPropsType, stateType>(mapStateToProps, { requestUsers })(memo(UsersList))