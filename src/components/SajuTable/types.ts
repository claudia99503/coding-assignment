export interface SajuCell {
  content: string;
  type: 'dark' | 'red' | 'teal' | 'light';
}

export interface SajuTableData {
  title: string;
  date: string;
  time: string;
  rows: {
    label: string;
    cells: SajuCell[];
  }[];
}

