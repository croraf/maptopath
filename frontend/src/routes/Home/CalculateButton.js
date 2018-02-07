import React from 'react';
import Button from 'material-ui/Button';

import {calculatePath} from '../../modules/calculatePath';

class CalculateButton extends React.Component {
    render() {
        return (
            <div style={{display: 'flex', flexAlign: 'row', justifyContent: 'center', marginTop: '20px'}}>
                <Button 
                    raised={true}
                    color="primary" 
                    onClick={()=>{calculatePath(this.props.value);}}
                >
                    Calculate
                </Button>
            </div>
        );
    }
}

export {CalculateButton};
