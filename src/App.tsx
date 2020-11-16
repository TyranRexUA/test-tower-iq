import React from 'react';
import './App.css';
import UsersList from './components/UsersList/UsersList';

const App: React.FC = () => {
    return (
        <div className="App">
            <UsersList />
        </div>
    );
}

export default App;
