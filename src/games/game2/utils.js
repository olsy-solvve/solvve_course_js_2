import SudokuToolCollection from "sudokutoolcollection";

export const sudoku = SudokuToolCollection();

export const getCellBlock = (row, col) => {
  return Math.ceil(col / 3) + (Math.ceil(row / 3) - 1) * 3;
};

export const getCellMates = (
  grid,
  { id, block, row, column },
  property = "id"
) => {
  const mates = grid.filter((cell) => {
    return (
      cell.id !== id &&
      (cell.row === row || cell.column === column || cell.block === block)
    );
  });
  return mates.map((cell) => cell[property]);
};
