/**
 * 【06-06】配列と繰り返し  ( for..in )
 */
import {console} from "~/console";

/** 配列 */
const hairetsu = []; // 空の配列を作ります。
// pushで要素を追加しています
hairetsu.push('001');
hairetsu.push('002');
hairetsu.push('003');
hairetsu.push('004');

// for..in で要素のIDXを順番に取得
for(const idx in hairetsu){
    const elem = hairetsu[idx];
    console.log(`IDX=${idx}, ELEM=${elem}`);
}