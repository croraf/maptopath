import React from 'react';

import { Route } from 'react-router-dom';
import { Home } from './routes/Home/Home';

import { withTheme } from 'material-ui/styles';

import Paper from 'material-ui/Paper';

class Main extends React.Component {
    render() {

        return (
            <Paper elevation={4} 
                style={{
                    position: 'absolute',
                    bottom: '0%',
                    top: '0%',
                    left: '0%',
                    right: '0%',
                    minWidth: '800px',
                    overflowY: 'auto',
                    overflowX: 'hidden'
                }}>
                <Route exact path="/" component={Home} />
            </Paper>
        );
    }
}

export default withTheme()(Main);
