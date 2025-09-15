export const TEXT_DATA = {
  title: "님의 사주",
  date: "1980년 8월 27일",
  time: "08시 10분",
  row1Headers: ["時", "日", "月", "年"],
  row2Col1: { main: "十星", sub: "(십성)" },
  row2Cols2to5: {
    main: ["傷官", "比肩", "傷官", "傷官"],
    sub: ["(상관)", "(비견)", "(상관)", "(상관)"],
  },
  row3Col1: { main: "天干", sub: "(천간)" },
  row4Col1: { main: "地支", sub: "(지지)" },
  row5Col1: { main: "十星", sub: "(십성)" },
  row5Cols2to5: {
    main: ["比肩", "劫財", "食神", "偏財"],
    sub: ["(비견)", "(겁재)", "(식신)", "(편재)"],
  },
  row6Col1: { main: "十二運星", sub: "(십이운성)" },
  row6Cols2to5: {
    main: ["死", "帝旺", "胎", "長生"],
    sub: ["(사)", "(제왕)", "(태)", "(장생)"],
  },
  row7Col1: { main: "十二神殺", sub: "(십이신살)" },
  row7Cols2to5: {
    main: ["劫殺", "地殺", "驛馬殺", "將星殺"],
    sub: ["(겁살)", "(지살)", "(역마살)", "(장성살)"],
  },
  row8Col1: { main: "貴人", sub: "(귀인)" },
  row8Cols2to5: {
    col2: { main: "(없음)", sub: "" },
    col3: { main: "(없음)", sub: "" },
    col4: {
      main: "天乙",
      sub: "(천을귀인)",
      additional: [],
    },
    col5: {
      main: "天乙",
      sub: "(천을귀인)",
      additional: [
        { main: "太極", sub: "(태극귀인)" },
        { main: "文昌", sub: "(문창귀인)" },
      ],
    },
  },
} as const;

