import React from 'react';
import { SajuTableData } from './types';
import { sajuData } from '../../data/sajuData';
import Image from 'next/image';
import SajuCell from './SajuCell';
import TextBox from './TextBox';
import { LAYOUT, DESIGN_WIDTH_PX, DESIGN_HEIGHT_PX, MAIN_LINE_PX, SUB_LINE_PX } from './constants';
import { getCumulativePercents, getBoundaries, getRowTop, getCol1Left, getColCenter } from './utils';
import { TEXT_DATA } from './textData';

interface SajuTableProps {
  data: SajuTableData;
  className?: string;
}

const SajuTable = ({ data: _data, className = '' }: SajuTableProps) => {
  const cumulativePercents = getCumulativePercents();
  const boundaries = getBoundaries(cumulativePercents);

  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [scale, setScale] = React.useState(1);

  React.useEffect(() => {
    if (!wrapperRef.current) return;
    const update = () => {
      const w = wrapperRef.current!.clientWidth;
      setScale(w / DESIGN_WIDTH_PX);
    };
    update();
    const ro = new ResizeObserver(() => update());
    ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{ width: '100%', position: 'relative', aspectRatio: `${DESIGN_WIDTH_PX} / ${DESIGN_HEIGHT_PX}` }}
    >
      <div
        className={`relative`}
        style={{ width: `${DESIGN_WIDTH_PX}px`, transform: `scale(${scale})`, transformOrigin: 'top left' }}
      >
        <div className={`relative bg-saju-surface border-[3px] border-saju-border rounded-none p-4`} style={{ height: `${DESIGN_HEIGHT_PX}px` }}>
          <div className="pointer-events-none absolute left-0 right-0 top-[8px] border-t border-saju-divider border-t-[1px]"></div>
          <div className="pointer-events-none absolute left-0 right-0 bottom-[8px] border-b border-saju-divider border-b-[1px]"></div>
          <div className="pointer-events-none absolute top-0 bottom-0 left-[8px] border-l border-saju-divider border-l-[1px]"></div>
          <div className="pointer-events-none absolute top-0 bottom-0 right-[8px] border-r border-saju-divider border-r-[1px]"></div>

          <div className="absolute left-[8px] top-[29px] z-10">
            <Image src="/arch-double.svg" alt="Left arch" width={0} height={0} style={{ width: 'auto', height: 'auto' }} />
          </div>
          <div className="absolute right-[8px] top-[10px] z-10">
            <Image src="/arch-line.svg" alt="Right arch" width={0} height={0} style={{ width: 'auto', height: 'auto' }} />
          </div>

          <div className="absolute left-[49px] right-[49px] top-[24px] h-[48px] z-10">
            <div className="h-[16px] flex items-center justify-center">
              <span className="text-[16px] text-[#424242]">{sajuData.name}님의 사주</span>
            </div>
            <div className="absolute left-0 right-0 top-[28px] h-[20px] flex items-center justify-center">
              <span className="text-[20px] text-[#000000]">{TEXT_DATA.date} {TEXT_DATA.time}</span>
            </div>
          </div>

          <div className="absolute left-[20px] right-[20px] top-[92px] h-[473px] z-0">
            <div className="relative w-full h-full overflow-hidden">
              {cumulativePercents.map((pct, idx) => (
                <div
                  key={idx}
                  className="absolute top-0 bottom-0"
                  style={{ left: `${pct}%`, width: '0.0001px', borderRight: `${idx === 0 ? 1.05 : 0.49}px solid #000000` }}
                />
              ))}
              <div className="absolute top-0 bottom-0 right-0" style={{ width: '0.0001px', borderRight: '1.05px solid #000000' }} />

              {(() => {
                const positions: number[] = [];
                let acc = 0;
                for (let i = 0; i < LAYOUT.rowHeights.length; i++) {
                  acc += LAYOUT.rowHeights[i];
                  positions.push(acc);
                }
                return (
                  <>
                    {positions.slice(0, -1).map((y, idx) => (
                      <div
                        key={idx}
                        className="absolute left-0 right-0"
                        style={{ top: `${y}px`, height: (idx === 2 ? '0.52px' : '1.05px'), backgroundColor: '#000000' }}
                      />
                    ))}
                    <div className="absolute left-0 right-0 bottom-0" style={{ height: '1.05px', backgroundColor: '#000000' }} />
                  </>
                );
              })()}

              {TEXT_DATA.row1Headers.map((label, i) => {
                const colIndex = i + 1;
                const midPct = getColCenter(boundaries, colIndex);
                return (
                  <TextBox
                    key={label}
                    left={`${midPct}%`}
                    top="5px"
                    width="20.92px"
                    height="25.11px"
                    text={label}
                    fontSize="text-[20.92px]"
                    style={{ transform: 'translateX(-50%)' }}
                  />
                );
              })}

              <TextBox
                left={getCol1Left(cumulativePercents, 12.65, 24.51)}
                top={getRowTop(1, 6.84)}
                width="24.51px"
                height="17.05px"
                text={TEXT_DATA.row2Col1.main}
                fontSize="text-[12px]"
                bold
              />
              <TextBox
                left={getCol1Left(cumulativePercents, 13.98, 20.25)}
                top={getRowTop(1, 24.43)}
                width="20.25px"
                height="7.46px"
                text={TEXT_DATA.row2Col1.sub}
                fontSize="text-[7.82px]"
              />

              {TEXT_DATA.row2Cols2to5.main.map((label, i) => {
                const col = i + 1;
                const midPct = getColCenter(boundaries, col);
                return (
                  <React.Fragment key={`r2c${col+1}`}>
                    <TextBox
                      left={`${midPct}%`}
                      top={getRowTop(1, 1.95)}
                      width="30px"
                      height={`${MAIN_LINE_PX}px`}
                      text={label}
                      fontSize="text-[14.67px]"
                      style={{ transform: 'translateX(-50%)' }}
                    />
                    <TextBox
                      left={`${midPct}%`}
                      top={getRowTop(1, 23.99)}
                      width="25px"
                      height={`${SUB_LINE_PX}px`}
                      text={TEXT_DATA.row2Cols2to5.sub[i]}
                      fontSize="text-[9.78px]"
                      style={{ transform: 'translateX(-50%)' }}
                    />
                  </React.Fragment>
                );
              })}

              <TextBox
                left={getCol1Left(cumulativePercents, 12.65, 24.51)}
                top={getRowTop(2, 18.58)}
                width="24.51px"
                height="17.05px"
                text={TEXT_DATA.row3Col1.main}
                fontSize="text-[12px]"
                bold
              />
              <TextBox
                left={getCol1Left(cumulativePercents, 14.95, 20.25)}
                top={getRowTop(2, 36.17)}
                width="20.25px"
                height="7.46px"
                text={TEXT_DATA.row3Col1.sub}
                fontSize="text-[7.82px]"
              />

              <SajuCell
                topText="임"
                middleText="壬"
                bottomText="陽水"
                backgroundColor="#2F2F2F"
                textColor="#FFFFFF"
                left={`calc(${boundaries[1]}% + 5.79px)`}
                top={getRowTop(2, 5.87)}
              />
              <SajuCell
                topText="정"
                middleText="丁"
                bottomText="陰火"
                backgroundColor="#C23030"
                textColor="#FFFFFF"
                left={`calc(${boundaries[2]}% + 5.79px)`}
                top={getRowTop(2, 5.87)}
              />
              <SajuCell
                topText="계"
                middleText="癸"
                bottomText="陰水"
                backgroundColor="#2F2F2F"
                textColor="#FFFFFF"
                left={`calc(${boundaries[3]}% + 5.79px)`}
                top={getRowTop(2, 5.87)}
              />
              <SajuCell
                topText="계"
                middleText="癸"
                bottomText="陰水"
                backgroundColor="#2F2F2F"
                textColor="#FFFFFF"
                left={`calc(${boundaries[4]}% + 5.79px)`}
                top={getRowTop(2, 5.87)}
              />

              <TextBox
                left={getCol1Left(cumulativePercents, 12.65, 24.51)}
                top={getRowTop(3, 18.58)}
                width="24.51px"
                height="17.05px"
                text={TEXT_DATA.row4Col1.main}
                fontSize="text-[12px]"
                bold
              />
              <TextBox
                left={getCol1Left(cumulativePercents, 14.95, 20.25)}
                top={getRowTop(3, 36.17)}
                width="20.25px"
                height="7.46px"
                text={TEXT_DATA.row4Col1.sub}
                fontSize="text-[7.82px]"
              />

              <SajuCell
                topText="인"
                middleText="寅"
                bottomText="陽木"
                backgroundColor="#18868C"
                textColor="#FFFFFF"
                left={`calc(${boundaries[1]}% + 5.79px)`}
                top={getRowTop(3, 5.87)}
              />
              <SajuCell
                topText="사"
                middleText="巳"
                bottomText="陰火"
                backgroundColor="#C23030"
                textColor="#FFFFFF"
                left={`calc(${boundaries[2]}% + 5.79px)`}
                top={getRowTop(3, 5.87)}
              />
              <SajuCell
                topText="해"
                middleText="亥"
                bottomText="陰水"
                backgroundColor="#2F2F2F"
                textColor="#FFFFFF"
                left={`calc(${boundaries[3]}% + 5.79px)`}
                top={getRowTop(3, 5.87)}
              />
              <SajuCell
                topText="유"
                middleText="酉"
                bottomText="陰金"
                backgroundColor="#FFFFFF"
                textColor="#000000"
                left={`calc(${boundaries[4]}% + 5.79px)`}
                top={getRowTop(3, 5.87)}
              />

              <TextBox
                left={getCol1Left(cumulativePercents, 12.65, 24.51)}
                top={getRowTop(4, 6.84)}
                width="24.51px"
                height="17.05px"
                text={TEXT_DATA.row5Col1.main}
                fontSize="text-[12px]"
                bold
              />
              <TextBox
                left={getCol1Left(cumulativePercents, 13.98, 20.25)}
                top={getRowTop(4, 24.43)}
                width="20.25px"
                height="7.46px"
                text={TEXT_DATA.row5Col1.sub}
                fontSize="text-[7.82px]"
              />

              {TEXT_DATA.row5Cols2to5.main.map((label, i) => {
                const col = i + 1;
                const midPct = getColCenter(boundaries, col);
                return (
                  <React.Fragment key={`r5c${col+1}`}>
                    <TextBox
                      left={`${midPct}%`}
                      top={getRowTop(4, 3.91)}
                      width="30px"
                      height={`${MAIN_LINE_PX}px`}
                      text={label}
                      fontSize="text-[14.67px]"
                      style={{ transform: 'translateX(-50%)' }}
                    />
                    <TextBox
                      left={`${midPct}%`}
                      top={getRowTop(4, 26.95)}
                      width="25px"
                      height={`${SUB_LINE_PX}px`}
                      text={TEXT_DATA.row5Cols2to5.sub[i]}
                      fontSize="text-[9.78px]"
                      style={{ transform: 'translateX(-50%)' }}
                    />
                  </React.Fragment>
                );
              })}

              <TextBox
                left={getCol1Left(cumulativePercents, 4.57, 39.43)}
                top={getRowTop(5, 8.8)}
                width="39.43px"
                height="13.86px"
                text={TEXT_DATA.row6Col1.main}
                fontSize="text-[9.78px]"
                bold
              />
              <TextBox
                left={getCol1Left(cumulativePercents, 7.46, 34.1)}
                top={getRowTop(5, 24.45)}
                width="34.1px"
                height="7.46px"
                text={TEXT_DATA.row6Col1.sub}
                fontSize="text-[7.82px]"
              />

              {TEXT_DATA.row6Cols2to5.main.map((label, i) => {
                const col = i + 1;
                const leftSepPct = boundaries[col];
                const rightSepPct = boundaries[col + 1];
                const positions = [
                  { mainLeft: 25.5, mainWidth: 15, subLeft: 24.46, subWidth: 16 },
                  { mainLeft: 17.74, mainWidth: 30, subLeft: 19.7, subWidth: 25.43 },
                  { mainLeft: 25.74, mainWidth: 15, subLeft: 25.74, subWidth: 16 },
                  { mainLeft: 17.74, mainWidth: 30, subLeft: 19.69, subWidth: 25.43 }
                ];
                const pos = positions[i];
                return (
                  <React.Fragment key={`r6c${col+1}`}>
                    <div
                      className="absolute z-10 flex items-center justify-center"
                      style={{
                        left: `calc(${leftSepPct}% + ${pos.mainLeft}px)`,
                        top: getRowTop(5, 3.65),
                        width: `${pos.mainWidth}px`,
                        height: `${MAIN_LINE_PX}px`,
                      }}
                    >
                      <span className="text-[14.67px] leading-none">{label}</span>
                    </div>
                    <div
                      className="absolute z-10 flex items-center justify-center"
                      style={{
                        left: `calc(${leftSepPct}% + ${pos.subLeft}px)`,
                        top: getRowTop(5, 25.69),
                        width: `${pos.subWidth}px`,
                        height: `${SUB_LINE_PX}px`,
                      }}
                    >
                      <span className="text-[9.78px] leading-none">{TEXT_DATA.row6Cols2to5.sub[i]}</span>
                    </div>
                  </React.Fragment>
                );
              })}

              <TextBox
                left={getCol1Left(cumulativePercents, 4.57, 39.43)}
                top={getRowTop(6, 8.8)}
                width="39.43px"
                height="13.86px"
                text={TEXT_DATA.row7Col1.main}
                fontSize="text-[9.78px]"
                bold
              />
              <TextBox
                left={getCol1Left(cumulativePercents, 7.46, 34.1)}
                top={getRowTop(6, 24.45)}
                width="34.1px"
                height="7.46px"
                text={TEXT_DATA.row7Col1.sub}
                fontSize="text-[7.82px]"
              />

              {TEXT_DATA.row7Cols2to5.main.map((label, i) => {
                const col = i + 1;
                const leftSepPct = boundaries[col];
                const rightSepPct = boundaries[col + 1];
                const positions = [
                  { mainLeft: 17.5, mainWidth: 30, subLeft: 20.46, subWidth: 25 },
                  { mainLeft: 17.74, mainWidth: 30, subLeft: 20.7, subWidth: 25 },
                  { mainLeft: 10.74, mainWidth: 44, subLeft: 15.7, subWidth: 34 },
                  { mainLeft: 10.74, mainWidth: 44, subLeft: 15.69, subWidth: 34 }
                ];
                const pos = positions[i];
                return (
                  <React.Fragment key={`r7c${col+1}`}>
                    <div
                      className="absolute z-10 flex items-center justify-center"
                      style={{
                        left: `calc(${leftSepPct}% + ${pos.mainLeft}px)`,
                        top: getRowTop(6, 3.04),
                        width: `${pos.mainWidth}px`,
                        height: `${MAIN_LINE_PX}px`,
                      }}
                    >
                      <span className="text-[14.67px] leading-none">{label}</span>
                    </div>
                    <div
                      className="absolute z-10 flex items-center justify-center"
                      style={{
                        left: `calc(${leftSepPct}% + ${pos.subLeft}px)`,
                        top: getRowTop(6, 25.08),
                        width: `${pos.subWidth}px`,
                        height: `${SUB_LINE_PX}px`,
                      }}
                    >
                      <span className="text-[9.78px] leading-none">{TEXT_DATA.row7Cols2to5.sub[i]}</span>
                    </div>
                  </React.Fragment>
                );
              })}

              <TextBox
                left={getCol1Left(cumulativePercents, 12.65, 24.51)}
                top={getRowTop(7, 42.02)}
                width="24.51px"
                height="17.05px"
                text={TEXT_DATA.row8Col1.main}
                fontSize="text-[12px]"
                bold
              />
              <div
                className="absolute z-10 flex items-center justify-center"
                style={{
                  left: `calc(${cumulativePercents[0]}% - 14.06px - 20.25px)`,
                  top: getRowTop(7, 59.61),
                  width: '20.25px',
                  height: '7.46px',
                }}
              >
                <span className="text-[7.82px] leading-none">(귀인)</span>
              </div>

              <div
                className="absolute z-10 flex items-center justify-center"
                style={{
                  left: `calc(${boundaries[1]}% + 20.46px)`,
                  top: getRowTop(7, 54.95),
                  width: '25.58px',
                  height: '9.59px',
                }}
              >
                <span className="text-[9.78px] leading-none">(없음)</span>
              </div>

              <div
                className="absolute z-10 flex items-center justify-center"
                style={{
                  left: `calc(${boundaries[2]}% + 20.46px)`,
                  top: getRowTop(7, 54.95),
                  width: '25.58px',
                  height: '9.59px',
                }}
              >
                <span className="text-[9.78px] leading-none">(없음)</span>
              </div>

              <div
                className="absolute z-10 flex items-center justify-center"
                style={{
                  left: `calc(${boundaries[3]}% + 18.72px)`,
                  top: getRowTop(7, 41.26),
                  width: '30px',
                  height: '21px',
                }}
              >
                <span className="text-[14.67px] leading-none">天乙</span>
              </div>
              <div
                className="absolute z-10 flex items-center justify-center"
                style={{
                  left: `calc(${boundaries[3]}% + 12.68px)`,
                  top: getRowTop(7, 63.3),
                  width: '43px',
                  height: '10px',
                }}
              >
                <span className="text-[9.78px] leading-none">(천을귀인)</span>
              </div>

              <div
                className="absolute z-10 flex items-center justify-center"
                style={{
                  left: `calc(${boundaries[4]}% + 17.74px)`,
                  top: getRowTop(7, 2.93),
                  width: '30px',
                  height: '21px',
                }}
              >
                <span className="text-[14.67px] leading-none">天乙</span>
              </div>
              <div
                className="absolute z-10 flex items-center justify-center"
                style={{
                  left: `calc(${boundaries[4]}% + 11.69px)`,
                  top: getRowTop(7, 25.97),
                  width: '43px',
                  height: '10px',
                }}
              >
                <span className="text-[9.78px] leading-none">(천을귀인)</span>
              </div>
              <div
                className="absolute z-10 flex items-center justify-center"
                style={{
                  left: `calc(${boundaries[4]}% + 17.74px)`,
                  top: getRowTop(7, 41.26),
                  width: '30px',
                  height: '21px',
                }}
              >
                <span className="text-[14.67px] leading-none">太極</span>
              </div>
              <div
                className="absolute z-10 flex items-center justify-center"
                style={{
                  left: `calc(${boundaries[4]}% + 10.69px)`,
                  top: getRowTop(7, 63.34),
                  width: '44px',
                  height: '10px',
                }}
              >
                <span className="text-[9.78px] leading-none">(태극귀인)</span>
              </div>
              <div
                className="absolute z-10 flex items-center justify-center"
                style={{
                  left: `calc(${boundaries[4]}% + 17.74px)`,
                  top: getRowTop(7, 79.05),
                  width: '30px',
                  height: '21px',
                }}
              >
                <span className="text-[14.67px] leading-none">文昌</span>
              </div>
              <div
                className="absolute z-10 flex items-center justify-center"
                style={{
                  left: `calc(${boundaries[4]}% + 10.69px)`,
                  top: getRowTop(7, 101.13),
                  width: '44px',
                  height: '10px',
                }}
              >
                <span className="text-[9.78px] leading-none">(문창귀인)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SajuTable;

