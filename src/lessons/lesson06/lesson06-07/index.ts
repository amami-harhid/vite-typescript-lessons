/**
 * 【06-06】連想配列と繰り返し( for..of )
 *  連想配列のキーと値を取り出す方法を学びましょう。
 */


/** 連想配列 */
const hairetsu01 = {
    KEY01: '001',
    KEY02: '002',
    KEY03: '003',
};

// 連想配列は 連想配列の名前 . キー名 で値を取り出すことができます。
console.log("[A] hairetsu01.KEY01=", hairetsu01.KEY01);
console.log("[A] hairetsu01.KEY02=", hairetsu01.KEY02);
console.log("[A] hairetsu01.KEY03=", hairetsu01.KEY03);

// 連想配列の既存のキーを指定して、値を変更できます。
hairetsu01.KEY01 = '0000001';  // OK !

// 連想配列へ新しいキーを指定して、値を設定できません。
// 連想配列のタイプとして、キーのタイプを stringであればOK、としてあげる必要があります。
// hairetsu01['KEY04'] = '004'; // <== 文法エラー

/** 連想配列 */
const hairetsu02 = {
    KEY01: '001',
    KEY02: '002',
    KEY03: '003',
} as const;

// as const を付けた連想配列は、値の変更ができません。
// hairetsu02.KEY01 = '0000001';  // <=== 文法エラー

// 連想配列へ新しいキーを指定して、値を設定できません。
// 連想配列のタイプとして、キーのタイプを stringであればOK、としてあげる必要があります。
// hairetsu02['KEY04'] = '004'; // <== 文法エラー

/** 連想配列 */
type HAIRETSU = {[key : string]: string};
const hairetsu03: HAIRETSU = {
    KEY01: '001',
    KEY02: '002',
    KEY03: '003',
} as const;

// 連想配列のタイプとして、キーのタイプ,値のタイプを stringであれば「何でも」OK、としてあげたときは

// as const を付けた連想配列でも、値の変更ができます。
hairetsu03.KEY01 = '0000001';  // <=== OK !
// as const を付けた連想配列でも、新しいキーの追加ができます。
hairetsu03['KEY04'] = '004';   // <== OK !



// 連想配列のタイプとして、キーのタイプを stringであればOK、としていないときは
// 連想配列へ新しいキーを追加できません。
// hairetsu02['KEY04'] = '004'; // <=== 文法エラー


/** 連想配列 */
const hairetsu04:HAIRETSU = {
    KEY01: '001',
    KEY02: '002',
    KEY03: '003',
};  
// ↑ タイプ(HAIRETSU) をつけたので、文字列のキー、文字列の値であれば
// 変更、追加が許容されます。

// [B]  連想配列の要素を取り出すには、キーを知る必要があります。

// 連想配列の要素数を表示しましょう
console.log(`[B-1] hairetsu04 length=${hairetsu04.length}`)

// キーを配列としてとりだしましょう
const keys = Object.keys(hairetsu04);

// キーの配列を順次処理してみましょう。
keys.forEach((key)=>{
    const value = hairetsu04[key]; 
    console.log(`[B-2] key=${key}, value=${value}`);
})

// キーと値のペアを配列化
const entries = Object.entries(hairetsu03);
// 配列を順次処理する
for(let [key, value] of entries) {
    console.log(`[B-3] key=${key}, value=${value}`);
}


