/**
 * 【06-05】配列と繰り返し  ( for..of )
 *  配列要素を順番に処理する方法のひとつに、for..of があります。
 *  forEach と異なり、要素を取り出すことしかできません。
 *  for..in と似ているので間違えないようにしましょう。
 * 
 */

/** 配列 */
const hairetsu = []; // 空の配列を作ります。
// pushで要素を追加しています
hairetsu.push('001');
hairetsu.push('002');
hairetsu.push('003');
hairetsu.push('004');

// for..of で要素を順番に取得
for(const elem of hairetsu){
    console.log(`ELEM=${elem}`);
}