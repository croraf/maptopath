import ReactDOM from 'react-dom';
import React from 'react';

import { Provider } from 'react-redux';

import {store} from './redux/store';
import { MyRouter } from './MyRouter';


import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
    palette: {
        //type: 'light', // Switching the dark mode on is a single property value change.
        background: {
            paper: 'whitesmoke',
            appBar: '#f00'
        },
        text: {
            primary: '#fff',
            icon: '#f00'
        }
    }
    
});

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}> 
            <MyRouter />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
