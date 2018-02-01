import React from 'react';

import { ConnectedRouter } from 'react-router-redux';

import {history} from './redux/store';

import Main from './Main';


class MyRouter extends React.Component {
    render() {
        return (
            
            <ConnectedRouter history={history}>
                <Main />
            </ConnectedRouter>
            
        );
    }
}

export {MyRouter};
