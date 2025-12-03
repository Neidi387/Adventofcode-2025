# Advent of Code 2025 - Setup Guide

## Puzzles
You'll find all puzzles at:
https://adventofcode.com/2025/


## Prerequisites

You need to have Node.js installed on your system. If you don't have it:

- **Linux/macOS**: Use your package manager or download from [nodejs.org](https://nodejs.org/)
- **Windows**: Download the installer from [nodejs.org](https://nodejs.org/)

## Installing tsx

To run TypeScript files directly without compiling, install `tsx`:

```bash
npm install -g tsx
```

Alternatively, you can use `npx` to run it without global installation (as shown below).

## Running Solutions

To run a solution for a specific day and part:

```bash
npx tsx [day]/part[1|2].ts
```

### Examples:

```bash
# Run day 1, part 1
npx tsx 01/part1.ts

# Run day 1, part 2
npx tsx 01/part2.ts

# Run day 15, part 1
npx tsx 15/part1.ts
```

## Creating a New Day

1. **Copy the template folder** to create a new day:
   ```bash
   cp -r template/ [day]/
   ```
   
   Example for day 3:
   ```bash
   cp -r template/ 03/
   ```

2. **Add your puzzle input** to `[day]/input.txt`

3. **Implement the file reading logic** in `[day]/input.ts`
   - This file should handle parsing your input from `input.txt`
   - Export the parsed data for use in part1.ts and part2.ts

4. **Implement your solution** in `[day]/part1.ts` and `[day]/part2.ts`

## Project Structure

```
.
├── 01/
│   ├── input.ts      # Input parsing logic
│   ├── input.txt     # Puzzle input
│   ├── part1.ts      # Part 1 solution
│   └── part2.ts      # Part 2 solution
├── template/
│   ├── input.ts      # Template for input parsing
│   ├── input.txt     # Empty input file
│   ├── part1.ts      # Template for part 1
│   └── part2.ts      # Template for part 2
└── readme.md
```

## Tips

- Keep your input parsing logic in `input.ts` to avoid duplication between part1 and part2
- Use the template as a starting point for each new day
- Test with the example input from the puzzle description before using your actual input
