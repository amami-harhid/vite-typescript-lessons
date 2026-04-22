/**
 * 【06-02】配列と繰り返し  ( push と length )
 *  ※ 無限ループにならないように注意しましょう
 */

/** 配列 */
const hairetsu:string[] = []; // 空の配列を作ります。
// pushで要素を追加しています
hairetsu.push('001');
hairetsu.push('002');
hairetsu.push('003');
hairetsu.push('004');

// idx<4 のところを idx<hairetsuの長さにしています
for(let idx=0; idx<hairetsu.length; idx++) {
    const elem = hairetsu[idx];
    console.log(`<01> IDX=${idx}, ELEM=${elem}`);
}

/** 配列 */
// 3個の要素を宣言し as const とします。
const hairetsu02 = [
    '00A',
    '00B',
    '00C',
] as const;

// 配列タイプ(string[])がなく、as const の配列へは 要素を追加できません。
// hairetsu02.push('00D'); <=== 文法エラー

// 値を取り出すことはできます。
console.log(`<02> hairetsu02[0] = ${hairetsu02[0]}`);

// 値を変更することはできません。
// hairetsu02[0] = 'XXXX';   // <=== 文法エラー