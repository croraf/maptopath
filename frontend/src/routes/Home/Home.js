import React from 'react';

import Button from 'material-ui/Button';
import { MapTextArea } from './MapTextArea';

/*import { NavLink } from 'react-router-dom';

 const activeStyle = {
    color: 'red'
}; */

import {OutputComponent} from './OutputComponent';
import {calculatePath} from '../../modules/calculatePath';
import { example1, example2 } from './mapExamples';


class Home extends React.Component {

    constructor () {
        super();
        this.state = {
            value: example1,
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

                <h1 style={{textAlign: 'center'}}>Map to path</h1>

                <h3 style={{textAlign: 'center'}}>Input map: </h3>
                <MapTextArea value={this.state.value} handleChange={this.handleChange}/>

                <div style={{display: 'flex', flexAlign: 'row', justifyContent: 'center', marginTop: '20px'}}>
                    <Button 
                        raised={true}
                        color="primary" 
                        onClick={()=>{console.log(this.state.value); this.setState({path: calculatePath(this.state.value)});}}
                    >
                        Calculate
                    </Button>
                </div>

                <OutputComponent label='Found path:' path={this.state.path} />

                <OutputComponent label='Collected letters:' path={this.state.path} />
                
            </div>
        );
    }
}

export { Home };
