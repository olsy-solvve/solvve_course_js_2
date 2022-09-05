import { sudoku, getCellBlock, getCellMates } from './utils'

const createGrid = (difficulty) => {
	const rowNames = 'abcdefghi'
	const puzzle = sudoku.generator.generate(difficulty)
	const puzzleGrid = sudoku.conversions.stringToGrid(puzzle)
	const solvedPuzzle = sudoku.solver.solve(puzzle)
	const solvedPuzzleGrid = sudoku.conversions.stringToGrid(solvedPuzzle)

	const grid = solvedPuzzleGrid.map((row, rowIndex) => {
		return row.map((item, index) => {
			return {
				id: rowNames[rowIndex % rowNames.length] + (index + 1),
				column: index + 1,
				row: rowIndex + 1,
				block: getCellBlock(rowIndex + 1, index + 1),
				userInput: item !== puzzleGrid[rowIndex][index],
				value: item !== puzzleGrid[rowIndex][index] ? '' : item,
				expectedValue: item,
				isHighlighted: false
			}
		})
	})

	return grid.flat()
}

const selectCell = (grid, { id, row, column, block, value, expectedValue }) => {
	const cellMates = getCellMates(grid, { id, row, column, block })
	return grid.map((cell) => ({
		...cell,
		isHighlighted: cellMates.includes(cell.id),
		isSimilar: cell.value === expectedValue && value === expectedValue,
		hasFocus: cell.id === id
	}))
}

const setCellValue = (grid, { id, expectedValue }, newValue) => {
	return grid.map((cell) => ({
		...cell,
		value: cell.id === id ? newValue : cell.value,
		hasError: cell.id === id ? newValue !== expectedValue : cell.hasError,
		isSimilar: cell.value === expectedValue && newValue === expectedValue
	}))
}

const clearHighlights = (grid) => {
	return grid.map((cell) => ({
		...cell,
		isHighlighted: false,
		isSimilar: false
	}))
}

const startOver = (grid) => {
	return grid.map((cell) => ({
		...cell,
		value: cell.userInput ? '' : cell.value
	}))
}

export default {
	createGrid,
	selectCell,
	setCellValue,
	clearHighlights,
	startOver
}
