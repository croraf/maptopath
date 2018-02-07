import React from 'react';


class OutputComponent extends React.Component {
    render() {
        return (
            <div style={{marginTop: '35px'}}>
                <h3 style={{textAlign: 'center'}}>{this.props.label}</h3>

                <div style={{display: 'flex', flexAlign: 'row', justifyContent: 'center', width: '100%', height: '40px', margin: '10px'}}>
                    <div style={{
                        width: '50%',
                        height: '100%',
                        backgroundColor: 'white',
                        border: '1px solid black',
                        borderRadius: '10px',
                        textAlign: 'center',
                        paddingTop: '10px',
                        fontSize: '20px',
                        fontFamily: 'monospace'
                    }}>
                        {this.props.path}
                    </div>
                </div>
            </div>
        );
    }
}

export {OutputComponent};
