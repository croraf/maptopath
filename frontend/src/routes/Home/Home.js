import React from 'react';

/*import { NavLink } from 'react-router-dom';

 const activeStyle = {
    color: 'red'
}; */

import { example1, example2 } from './mapExamples';
import { MapTextAreaContainer } from './MapTextAreaContainer';
import { OutputContainer } from './OutputContainer';
import { CalculateButton } from './CalculateButton';


class Home extends React.Component {

    constructor () {
        super();
        this.state = {
            value: example1,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {

        this.setState({
            value: event.target.value
        });
    }
    
    render() {
        
        return (
            <div style={{position: 'relative'}}>

                <h1 style={{textAlign: 'center'}}>Map to path</h1>

                <h4 style={{textAlign: 'center'}}>Input map: </h4>
                <MapTextAreaContainer value={this.state.value} handleChange={this.handleChange} />

                <CalculateButton value={this.state.value} />

                <OutputContainer label='Path found:' />

                <OutputContainer label='Collected letters:' />
                
            </div>
        );
    }
}

export { Home };
