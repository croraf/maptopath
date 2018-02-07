import React from 'react';

/*import { NavLink } from 'react-router-dom';

 const activeStyle = {
    color: 'red'
}; */

import { MapTextAreaContainer } from './MapTextAreaContainer';
import { OutputContainer } from './OutputContainer';
import { CalculateButtonContainer } from './CalculateButtonContainer';


class Home extends React.Component {
    
    render() {
        
        return (
            <div style={{position: 'relative'}}>

                <h1 style={{textAlign: 'center'}}>Map to path</h1>

                <h4 style={{textAlign: 'center'}}>Input map: </h4>
                <MapTextAreaContainer />

                <CalculateButtonContainer />

                <OutputContainer label='Path found:' />

                <OutputContainer label='Collected letters:' />
                
            </div>
        );
    }
}

export { Home };
