import React from 'react';

import { Route } from 'react-router-dom';
import { Home } from './routes/Home/Home';

import { withTheme } from 'material-ui/styles';

import Paper from 'material-ui/Paper';

class Main extends React.Component {
    render() {

        return (
            <Paper elevation={4} style={{position: 'absolute', bottom: '5px', top: '5px', left: '5px', right: '5px', minWidth: '800px' }}>
                <Route exact path="/" component={Home} />
            </Paper>
        );
    }
}

export default withTheme()(Main);
