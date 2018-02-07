import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

class OutputComponent extends React.Component {
    render() {
        return (
            <div style={{marginTop: '25px'}}>
                <h4 style={{textAlign: 'center'}}>{this.props.label}</h4>

                <div style={{display: 'flex', flexAlign: 'row', justifyContent: 'center', width: '100%', height: '35px', margin: '10px'}}>
                    <Scrollbars  
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '50%',
                            height: '100%',
                            backgroundColor: 'white',
                            border: '1px solid black',
                            borderRadius: '10px',
                            fontSize: '20px',
                            fontFamily: 'monospace',
                            overflowX: 'hidden',
                            paddingTop: '5px',
                            textAlign: 'center'
                        }}
                        className='outputScrollbar'    
                    >
                        {this.props.path}
                    </Scrollbars>
                </div>
            </div>
        );
    }
}

export {OutputComponent};
