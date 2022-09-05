import React from 'react';
import Lauyout from '../containers/Layout';
import Login from '../containers/Login';
import '../styles/global.scss';

const App = () => {
    return (
        <Lauyout>
            <Login/>
        </Lauyout>
    );
}

export default App;