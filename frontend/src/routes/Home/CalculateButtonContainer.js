
import {connect} from 'react-redux';
import {CalculateButton} from './CalculateButton';

const mapStateToProps = (state) => {
    return ({
        map: state.map
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        
    });
};

const CalculateButtonContainer = connect(mapStateToProps, mapDispatchToProps)(CalculateButton);

export {CalculateButtonContainer};