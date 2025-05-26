'use client';

import { useState } from 'react';
import styles from './page.module.css';
const calcTotalPoint = (arr: number[], counter: number) => {
  let result = 0;
  for (const i of arr) {
    result += i;
  }
  return result + counter;
};
// const down = (n: number) => {
//   let result = n;
//   if (result >= 0) {
//     console.log(result);
//     result -= 1;
//     down(result);
//   }
// };
// down(10);
// const sum1 = (n: number): number => {
//   if (n === 0) {
//     return n;
//   }
//   return n + sum1(n - 1);
// };
// console.log(sum1(10));

// const sum2 = (n: number, s: number): number => {
//   return n === s + 1 ? 0 : n + sum2(n + 1, s);
// };
// console.log(sum2(4, 10));

// const sum3 = (n: number, s: number): number => {
//   return ((n + s) * (s - n + 1)) / 2;
// };
// console.log(sum3(4, 10));
export default function Home() {
  const [samplePoints, setSamplePoints] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  console.log(samplePoints);
  const [sampleCounter, setSampleCounter] = useState(0);
  console.log(sampleCounter);
  const clickHamdler = () => {
    const newSamplePoints = structuredClone(samplePoints);
    newSamplePoints[sampleCounter] += 1;
    setSamplePoints(newSamplePoints);
    setSampleCounter((1 + sampleCounter) % 14);
  };
  const totalPoint = calcTotalPoint(samplePoints, sampleCounter);
  console.log(totalPoint);
  const [board, setboard] = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.cell} style={{ backgroundPosition: `${-30 * sampleCounter}px` }} />
      </div>
    </div>
  );
}
