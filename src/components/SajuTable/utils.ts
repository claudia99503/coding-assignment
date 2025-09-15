import { LAYOUT } from "./constants";

export const getCumulativePercents = (): number[] => {
  const totalRaw = LAYOUT.columnRawWidths.reduce((a, b) => a + b, 0);
  return LAYOUT.columnRawWidths.slice(0, -1).reduce<number[]>((acc, w) => {
    const prev = acc.length ? acc[acc.length - 1] : 0;
    const next = prev + (w / totalRaw) * 100;
    acc.push(next);
    return acc;
  }, []);
};

export const getBoundaries = (cumulativePercents: number[]) => [
  0,
  ...cumulativePercents,
  100,
];

export const getRowTop = (rowIndex: number, offset: number = 0) => {
  const topBase = LAYOUT.rowHeights
    .slice(0, rowIndex)
    .reduce((a, b) => a + b, 0);
  return `${topBase + offset}px`;
};

export const getCol1Left = (
  cumulativePercents: number[],
  leftOffset: number,
  width: number
) => {
  const sepPct = cumulativePercents[0];
  return `calc(${sepPct}% - ${leftOffset}px - ${width}px)`;
};

export const getColCenter = (boundaries: number[], colIndex: number) => {
  const leftPct = boundaries[colIndex];
  const rightPct = boundaries[colIndex + 1];
  return (leftPct + rightPct) / 2;
};

export const offset = (...values: number[]) =>
  values.reduce((sum, v) => sum + v, 0);

