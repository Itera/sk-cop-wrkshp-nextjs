export const initGrid = (rows: number, cols: number) => {
  return Array.from(Array(rows), () => new Array(cols).fill(0));
}