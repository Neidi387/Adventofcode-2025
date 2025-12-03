import { input } from './input'; // Our puzzle input



const positionStart = 50; // Given in the puzzle

let currentPosition = positionStart;
const counter = input.
    // Formating: E.g. "L49" => -49
    map( recordToDistanceNumber ). 
    // Indrtuvtions => Positions. E.g. 50 + (-49) = 1
    map( ( step: number ) => currentPosition += step ). 
    // Filter out all "0" (dividable by 100). 
    filter( ( position: number ) => position % 100 === 0 ).
    // Finally count how many there are.
    length;

console.log(`The dial pointet do zero: ${counter} times.`);























// Make the input more computer understandable E.g. "L49" => -49
function recordToDistanceNumber(line: string): number { // E.g. = "L21"
    const value = Number( line.slice(1) ); // "L21" => 21
    if ( line[0] === 'L' ) {
        return -value;        
    } else if ( line[0] === 'R' ) {
        return value;
    }
    return NaN // Make TypeScript happy :)
}








