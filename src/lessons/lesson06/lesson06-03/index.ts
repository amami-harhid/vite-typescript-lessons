/**
 * 【06-03】配列と繰り返し
 *  forEach で配列要素を順次に処理しましょう
 */

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
    console.log(`(1) IDX=${idx}, ELEM=${elem}`);
    idx = idx + 1;
})

// forEach で、要素とindexを同時に取り出しましょう
hairetsu.forEach((elem, idx)=>{
    console.log(`(2) IDX=${idx}, ELEM=${elem}`);
})

// forEach で、要素とindexを同時に取り出しましょう
hairetsu.forEach((elem, idx, array)=>{
    console.log(`(3) IDX=${idx}, ELEM=${elem}`);
    if( idx % 2 == 0){
        // index が偶数のとき
        array[idx] = '偶数だよ';

    }
    console.log(array);
});

console.log('Final hairetsu =', hairetsu);
