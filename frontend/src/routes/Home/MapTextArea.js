import React from 'react';


class MapTextArea extends React.Component {
    render() {

        const {handleChange, value} = this.props;

        return (

            <div style={{display: 'flex', flexAlign: 'row', justifyContent: 'center', width: '100%', height: '300px', margin: '10px'}}>

                <textarea 
                    style={{width: '50%', height: '100%', backgroundColor: 'white', fontSize: '16px', border: '1px solid black'}} 
                    value={value}
                    onChange={handleChange}
                />
            
            </div>
        );
    }
}

export {MapTextArea};
