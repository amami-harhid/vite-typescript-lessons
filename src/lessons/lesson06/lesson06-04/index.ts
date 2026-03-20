/**
 * 【06-03】配列と繰り返し  ( for(;;) 無限ループと break )
 */
import {console} from "~/console";

/** 配列 */
const hairetsu = []; // 空の配列を作ります。
// pushで要素を追加しています
hairetsu.push('001');
hairetsu.push('002');
hairetsu.push('003');
hairetsu.push('004');

let idx = 0;
// 無限ループ、idx＜４ でないときにループを抜ける
for(;;){
    if(idx<hairetsu.length){
        const elem = hairetsu[idx];
        console.log(`IDX=${idx}, ELEM=${elem}`);
        idx = idx + 1;
    }else{
        // 永久ループを抜ける
        break;
    }
} 


