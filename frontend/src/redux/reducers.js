
const solutionReducer = (state = {location: [], currentPath: ''}, action) => {
    switch (action.type) {
        case 'clearSolution':
            return {location: [], currentPath: ''};
        case 'solutionUpdate':
            return {location: action.solution.location, currentPath: state.currentPath + action.solution.currentChar};
        default:
            return state;
    }
};

export { solutionReducer };
