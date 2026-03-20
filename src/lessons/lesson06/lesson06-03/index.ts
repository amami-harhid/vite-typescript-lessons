/**
 * 【06-03】配列と繰り返し  ( forEach )
 */
import {console} from "~/console";

/** 配列 */
const hairetsu = []; // 空の配列を作ります。
// pushで要素を追加しています
hairetsu.push('001');
hairetsu.push('002');
hairetsu.push('003');
hairetsu.push('004');

// idx<4 のところを idx<hairetsuの長さにしています
let idx = 0;
hairetsu.forEach((elem)=>{
    console.log(`IDX=${idx}, ELEM=${elem}`);
    idx = idx + 1;
})


