import { input } from './input'; // Our puzzle input



const sum = input
    .map((line: string) => line.split('').map(Number))
    .map((bank: number[]) => recursiveBanktoJoltace(bank, 12))
    .map(logAndEcho)
    .reduce((a: number, b: number) => a + b, 0);
    ;

console.log('The sum of all joltaces is:', sum); // My answer: 168575096286051

















// Recursive approach
function recursiveBanktoJoltace(bank: number[], digitCount: number): number {

    const firstDigitCandidates = bank.slice(0, bank.length - (digitCount - 1));
    const firstDigit = Math.max(...firstDigitCandidates);
    
    if ( digitCount === 1 ) {
        return firstDigit;
    }

    const iFirstDigit = firstDigitCandidates.indexOf(firstDigit);
    const secondDigitCandidates = bank.slice(iFirstDigit + 1, bank.length);
    const otherDigits = recursiveBanktoJoltace(secondDigitCandidates, digitCount - 1);
    return Number (String(firstDigit) + String(otherDigits));
}


















// Helper. Just logs and returns the same value
function logAndEcho<T>(value: T): T {
    console.log(value);
    return value;
}

