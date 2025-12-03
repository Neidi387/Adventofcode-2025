import { input } from './input'; // Our puzzle input


const result = input
    .map(textToArray) // E.g. "1-3" => [1,2,3]
    .map((range: number[]) => { // Filter out silly ids
        const result = range
            .filter(checkIfSilly)
        return result
    })
    .map(logAndEcho)
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



// Silly ids contain the same secuence x-times
function checkIfSilly(id: number): boolean {
    const idString = id.toString();
    for(let iParts = 2; iParts <= 20; iParts++) {
        if ( idString.length % iParts !== 0 ) {
            continue; // ID cannot be split in i equal parts
        }
        const partLength = idString.length / iParts; 
        const repeatingPart = idString.slice(0, partLength);
        const idWithoutRepeatingPart = idString.replaceAll(repeatingPart, '');
        // If the whole id consists of the repeating part,
        // the remaining string should be empty
        if ( idWithoutRepeatingPart === '' ) {
            return true; // Silly id
        };
    }
    return false; // Not silly
}












// Helper. Just logs and returns the same value
function logAndEcho<T>(value: T): T {
    console.log(value);
    return value;
}


// Answer 27180728081