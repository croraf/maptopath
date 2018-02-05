
const findNextPosition = (currentPath, rows, currentX, currentY, direction) => {

    let nextX;
    let nextY;
    let newDirection;

    console.log('current position: ', currentX, currentY);

    //direction = 'rafa';

    console.log('current direction: ', direction);

    const currentChar = rows[currentY].charAt(currentX);

    // only if current char is | or - we keep the previous direction
    // if current char is @ + or letter then the direction can change
    if (currentX !== '|' && currentChar === '-') {
        newDirection = 'any';
    } else {
        newDirection = direction;
    }

    if ((direction === 'any' || direction === 'right') && currentX < rows[currentY].length - 1) {
        // check right
        const rightChar = rows[currentY].charAt(currentX + 1);
        if (rightChar !== ' ') {
            nextX = currentX + 1;
            nextY = currentY;
        }
    }

    if ((direction === 'any' || direction === 'left') && currentX > 0) {
        // check left
        const leftChar = rows[currentY].charAt(currentX - 1);
        if (leftChar === '-' || leftChar === '+') {
            nextX = currentX - 1;
            nextY = currentY;
        }
    }

    if (currentY < rows.length - 1) {
        // check bottom
        const bottomChar = rows[currentY + 1].charAt(currentX);
        if (bottomChar === '|' || bottomChar === '+') {
            nextX = currentX;
            nextY = currentY + 1;
        }
    }

    if (currentY > 0) {
        // check top
        const topChar = rows[currentY - 1].charAt(currentX);
        if (topChar === '|' || topChar === '+') {
            nextX = currentX;
            nextY = currentY - 1;
        }
    }

    return currentPath + ' ' + currentX + ' ' + currentY;
}

const calculatePath = (value) => {

    const rows = value.split(/\r?\n/);

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

        calculatedPath = findNextPosition('@', rows, currentX, currentY, 'any');
    } else {
        calculatedPath = 'No initial position given';
    }

    return calculatedPath;
};


export {calculatePath};
