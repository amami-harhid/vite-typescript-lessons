/**
 * 【06-03】配列と繰り返し  ( for(;;) 無限ループと break )
 *  break文を使おう
 *  forEachのときは配列の要素数だけ繰り返すので「無限ループ」にはなりませんが
 *  for文のときは無限ループになる可能性があります。
 *  無限ループになるとプログラムが終わりません。
 *  for(;;)とすると無限ループなので、ロジック(break)でループを抜ける対処が必要です。
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
        // 無限ループを抜ける
        break;
    }
} 


