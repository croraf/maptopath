
import { example1, example2, example3, example4 } from './mapExamples';

const solutionReducer = (state = {location: [], currentPath: ''}, action) => {
    switch (action.type) {
        case 'clearSolution':
            return {location: [], currentPath: ''};
        case 'clearLocation':
            return {location: [], currentPath: state.currentPath};
        case 'solutionUpdate':
            return {location: action.solution.location, currentPath: state.currentPath + action.solution.currentChar};
        case 'solutionError':
            return {location: state.location, currentPath: state.currentPath + action.errorMessage};
        default:
            return state;
    }
};

const solvingStateReducer = (state = 'idle', action) => {

    switch (action.type) {
        case 'solvingStarted':
            return 'solving';
        case 'solvingStopped':
            return 'idle';
        default:
            return state;
    }
};

const mapReducer = (state = example4, action) => {
    switch (action.type) {
        case 'updateMap':
            return action.map;
        default:
            return state;
    }
}

export { solutionReducer, solvingStateReducer, mapReducer };
