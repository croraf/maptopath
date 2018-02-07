
import {connect} from 'react-redux';
import {MapTextArea} from './MapTextArea';

const mapStateToProps = (state) => {
    return ({
        locationOnMap: state.solution.location
    });
};

const MapTextAreaContainer = connect(mapStateToProps)(MapTextArea);

export {MapTextAreaContainer};