import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';

import './custom.css'
import Selecta from './components/Selecta/Selecta';

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/selecta' component={Selecta}/>
    </Layout>
);
