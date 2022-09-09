//React basic
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import Login from '@pages/Login';

//Containers
import Layout from '@containers/Layout';

//Components
import Navbar from '@components/navbar';


//Styles
import '@styles/global.scss';


const App = () => {
    return (
        <BrowserRouter>
	        <Layout>
                <Navbar/>
                <Routes className='relative'>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />			
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
</BrowserRouter> 
    );
}

export default App;