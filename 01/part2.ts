import { input } from './input'; // Our puzzle input



const positionStart = 50; // Given in the puzzle

// Positions Array like in Part 1
let currentPosition = positionStart;
const positions = input.
    map( recordToDistanceNumber ). 
    map( ( step: number ) => currentPosition += step );

// Walk each step one by one 
currentPosition = positionStart;
const zeroIntercepts = positions.map( (newPosition: number)  => {
    const interceptions = walkRotationStepByStep(currentPosition, newPosition);
    return interceptions
} );

// Sum all interceptions
const counter = zeroIntercepts.reduce((acc, step) => acc + step, 0);

// Display the answer
console.log(`The dial pointet do zero: ${counter} times.`);



















// Rotate tick by tick and count how many times we are at position zero
// Note: In my video was a bug. The I named the parameter "startPosition" identical to the global variable "currentPosition"
// so it started at position 50 each time.
function walkRotationStepByStep(startPosition: number, endPosition: number) {
    if ( startPosition === endPosition ) {
        return 0;
    }
    const step = Math.sign(endPosition - startPosition);
    let zeroCounter = 0;
    for( let iPos = startPosition + step; iPos !== endPosition + step; iPos += step ) {
        if ( iPos % 100 === 0 ) {
            zeroCounter += 1;
        }
    }
    currentPosition = endPosition;
    return zeroCounter;
}


// Make the input more computer understandable E.g. "L49" => -49
function recordToDistanceNumber(line: string): number { // E.g. = "L21"
    performance.measure('recordToDistanceNumber');
    const value = Number( line.slice(1) ); // "L21" => 21
    if ( line[0] === 'L' ) {
        return -value;        
    } else if ( line[0] === 'R' ) {
        return value;
    }
    return NaN // Make TypeScript happy :)
}