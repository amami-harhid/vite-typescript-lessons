/**
 * 【06-02】配列と繰り返し  ( push と length )
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
for(let idx=0; idx<hairetsu.length; idx++) {
    const elem = hairetsu[idx];
    console.log(`IDX=${idx}, ELEM=${elem}`);
}


