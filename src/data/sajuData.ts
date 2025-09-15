export interface SajuData {
  name: string;
  birthDate: {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
  };
}

export const sajuData: SajuData = {
  name: "김로켓",
  birthDate: {
    year: 1980,
    month: 8,
    day: 27,
    hour: 8,
    minute: 10,
  },
};

