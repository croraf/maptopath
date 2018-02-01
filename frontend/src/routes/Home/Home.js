import React from 'react';

import Button from 'material-ui/Button';
import { MapTextArea } from './MapTextArea';

/*import { NavLink } from 'react-router-dom';

 const activeStyle = {
    color: 'red'
}; */

import {calculatePath} from '../../modules/calculatePath';

class Home extends React.Component {

    constructor () {
        super();
        this.state = {
            value: 'asd',
            path: ''
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

                {/* <NavLink to='/game' activeStyle={activeStyle} style={{position: 'absolute', bottom: '5px', left: '5px'}}>Game</NavLink> */}
                
                <h1 style={{textAlign: 'center'}}>Calculate from Map</h1>

                <h3 style={{textAlign: 'center'}}>Input map: </h3>
                <MapTextArea value={this.state.value} handleChange={this.handleChange}/>

                <div style={{display: 'flex', flexAlign: 'row', justifyContent: 'center'}}>
                    <Button raised color="primary" 
                        onClick={()=>{this.setState({path: calculatePath(this.state.value)});}}
                    >
                        Calculate
                    </Button>
                </div>

                <div style={{display: 'flex', flexAlign: 'row', justifyContent: 'center', width: '100%', height: '40px', margin: '10px'}}>
                    <div style={{
                        width: '80%',
                        height: '100%',
                        backgroundColor: 'white',
                        border: '1px solid black',
                        borderRadius: '10px',
                        textAlign: 'center',
                        paddingTop: '10px',
                        fontSize: '20px'
                    }}>
                        {this.state.path}
                    </div>
                </div>
            </div>
        );
    }
}

export { Home };
