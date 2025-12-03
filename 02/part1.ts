import { input } from './input'; // Our puzzle input

const result = input
    .map(textToArray) // E.g. ["1-3,..."] => [[1,2,3],...]
    .map((range: number[]) => { // Filter out silly ids
        const result = range
            .filter(checkIfSilly)
        return result
    })
    .flat() // Flatten [[11,22], [33,44]] to [11,22,33,44]
    .reduce((sum: number, id: number) => sum + id, 0) // Sum all ids


    console.log('Final result:', result); // My answer: 19219508902
















// E.g. "1-3" => [1,2,3]
function textToArray(text: string): number[] {
    const limits = text.split('-');
    const start = parseInt(limits[0]);
    const end = parseInt(limits[1]);
    const result: number[] = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}













// Silly ids contain the same secuence twice
function checkIfSilly(id: number): boolean {
    const idString = id.toString();
    if ( idString.length % 2 !== 0 ) {
        return false; // Odd numbers cannot be silly
    }
    const halfLength = idString.length / 2;
    const firstHalf = idString.slice(0, halfLength);
    const secondHalf = idString.slice(halfLength);
    if ( firstHalf === secondHalf ) {
        return true; // Silly id
    };
    return false; // Not silly
}
















// Helper. Just logs and returns the same value
function logAndEcho<T>(value: T): T {
    console.log(value);
    return value;
}






// // Ids cannot start with zero
// function checkIfZeroPrefix(id: number): boolean {
//     const idString = id.toString();
//     if ( idString[0] === '0') {
//         return true; // Has zero prefix
//     }
//     return false;
// }

