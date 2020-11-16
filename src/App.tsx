import React from 'react';
import './App.css';
import RandomUser from './components/RandomUser/RandomUser';
import UsersList from './components/UsersList/UsersList';

const App: React.FC = () => {
    return (
        <div className="App">
            <UsersList />
            <RandomUser />
        </div>
    );
}

export default App;
