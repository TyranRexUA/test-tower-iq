import React, {memo, useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { stateType, userType } from '../../types/types';
import s from './RandomUser.module.scss';
import Card from '../Card/Card';
import { generateRandomNumber } from '../../secondaryFunctions/secondaryFunctions';


interface mapStateToPropsType {
    users: Array<userType>
}

const UsersList: React.FC<mapStateToPropsType> = ({users}) => {
    let [randomNumber, setRandomNumber] = useState<number>(generateRandomNumber(0, users.length))

    useEffect(() => {
        const interval = setInterval(() => { // every 8s show random user
            setRandomNumber(generateRandomNumber(0, users.length))
          }, 8000);
          return () => clearInterval(interval);
    }, [users.length, setRandomNumber])

    return (
        <div className={s.RandomUser}>
            <h2>RANDOM USER</h2>

            {users.length > 0 
                && users.filter((user, index) => index === randomNumber) // filter 1 users in page
                    .map(user => 
                        (<Card key={user.id} fullName={`${user.name} ${user.surname}`} desc={user.desc}/>) // show this user
                    )}
        </div>
    );
}

const mapStateToProps = (state: stateType): mapStateToPropsType => ({
    users: state.users,
});

export default connect<mapStateToPropsType, unknown, unknown, stateType>(mapStateToProps, {  })(memo(UsersList))