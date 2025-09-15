import React from 'react';
import SajuTable from '../SajuTable';
import { sajuData } from '../../data/sajuData';
import { SajuTableData } from '../SajuTable/types';

const WritingSection = () => {
  const sajuTableData: SajuTableData = {
    title: `${sajuData.name}님의 사주`,
    date: `${sajuData.birthDate.year}년 ${sajuData.birthDate.month}월${sajuData.birthDate.day}일`,
    time: `${sajuData.birthDate.hour.toString().padStart(2, '0')}:${sajuData.birthDate.minute.toString().padStart(2, '0')}`,
    rows: [
      {
        label: '十星',
        cells: [
          { content: '食神', type: 'dark' as const },
          { content: '比肩', type: 'dark' as const },
          { content: '正官', type: 'dark' as const },
          { content: '正財', type: 'dark' as const },
        ],
      },
      {
        label: '天干',
        cells: [
          { content: '庚', type: 'red' as const },
          { content: '戊', type: 'red' as const },
          { content: '庚', type: 'red' as const },
          { content: '庚', type: 'red' as const },
        ],
      },
      {
        label: '地支',
        cells: [
          { content: '辰', type: 'teal' as const },
          { content: '申', type: 'teal' as const },
          { content: '辰', type: 'teal' as const },
          { content: '申', type: 'teal' as const },
        ],
      },
      {
        label: '十二運星',
        cells: [
          { content: '死', type: 'light' as const },
          { content: '養', type: 'light' as const },
          { content: '胎', type: 'light' as const },
          { content: '長生', type: 'light' as const },
        ],
      },
      {
        label: '十二神殺',
        cells: [
          { content: '劫殺', type: 'light' as const },
          { content: '地殺', type: 'light' as const },
          { content: '驛馬殺', type: 'light' as const },
          { content: '將星殺', type: 'light' as const },
        ],
      },
      {
        label: '貴人',
        cells: [
          { content: '天乙', type: 'light' as const },
          { content: '太極', type: 'light' as const },
          { content: '文昌', type: 'light' as const },
          { content: '', type: 'light' as const },
        ],
      },
    ],
  };

  return (
    <div className="relative w-full h-[678px] bg-background-base bg-[#F3F2EF]">
      <div className="absolute left-3 right-3 bottom-[80px] h-[621px] z-20">
        <SajuTable data={sajuTableData} className="w-full h-full" />
      </div>
    </div>
  );
};

export default WritingSection;

