
import { store } from '../redux/store';


const findNextPosition = (currentPath, rows, currentX, currentY, oldDirection) => {

    let nextX;
    let nextY;
    let newDirection;

    //debugger;

    console.log('current position: ', currentX, currentY);

    console.log('current path:', currentPath);

    console.log('current direction: ', oldDirection);

    const currentChar = rows[currentY].charAt(currentX);
    store.dispatch({type: 'solutionUpdate', solution: {location: [currentX, currentY], currentChar}});

    if (currentChar === 'x') {return;}

    // only if current char is | or - we keep the previous direction
    // if current char is @ + or letter then the direction can change
    if (currentChar !== '|' && currentChar !== '-') {
        newDirection = 'any';
    } else {
        newDirection = oldDirection;
    }

    if ((newDirection === 'any' || newDirection === 'right') && oldDirection !== 'left' && currentX < rows[currentY].length - 1) {
        // right
        const rightChar = rows[currentY].charAt(currentX + 1);
        if (rightChar !== ' ') {
            nextX = currentX + 1;
            nextY = currentY;
            newDirection = 'right';
        }
    }

    if ((newDirection === 'any' || newDirection === 'left') && oldDirection !== 'right' && currentX > 0) {
        // left
        const leftChar = rows[currentY].charAt(currentX - 1);
        if (leftChar !== ' ') {
            nextX = currentX - 1;
            nextY = currentY;
            newDirection = 'left';
        }
    }

    if ((newDirection === 'any' || newDirection === 'bottom') && oldDirection !== 'top' && currentY < rows.length - 1) {
        // bottom
        const bottomChar = rows[currentY + 1].charAt(currentX);
        if (bottomChar !== ' ') {
            nextX = currentX;
            nextY = currentY + 1;
            newDirection = 'bottom';
        }
    }

    if ((newDirection === 'any' || newDirection === 'top') && oldDirection !== 'bottom' && currentY > 0) {
        // check top
        const topChar = rows[currentY - 1].charAt(currentX);
        if (topChar !== ' ') {
            nextX = currentX;
            nextY = currentY - 1;
            newDirection = 'top';
        }
    }

    setTimeout(
        () => {
            findNextPosition(currentPath + rows[currentY].charAt(currentX), rows, nextX, nextY, newDirection);
        },
        200
    );
};

const calculatePath = (map) => {

    store.dispatch({type: 'clearSolution'});

    const rows = map.split(/\r?\n/);

    let currentX;
    let currentY;

    let calculatedPath;
    
    rows.forEach((row, index) => {
        const xFound = row.search('@');
        if (xFound !== -1) {
            currentX = xFound;
            currentY = index;
        }
    });

    console.log(rows);

    if (typeof currentX != 'undefined' && typeof currentY != 'undefined') {

        calculatedPath = findNextPosition('', rows, currentX, currentY, 'any');
    } else {
        calculatedPath = 'No initial position given';
    }

    return calculatedPath;
};


export {calculatePath};
