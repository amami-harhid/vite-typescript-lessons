/**
 * 【06-08】ＭＡＰ(マップ)と繰り返し( for..of )
 *  Map は 連想配列と同様に キー：値のペアを保持する仕組みです。
 *  Map を使うと、get / set メソッドを使うことができます。
 */

/** MAP */
// Map<string, string> と書くと、キー、値は stringだけしか使えません。
const map = new Map<string, string>([
    ['KEY01', '001'],
    ['KEY02', '002'],
    ['KEY03', '003'],
]);
console.log(`[1] mapの要素数 = ${map.size}`)

map.set('KEY04', '004');
map.set('KEY00', '000');

console.log(`[2] mapの要素数 = ${map.size}`)

// キーを指定して値を取り出す
console.log(`[3] map.get('KEY02') = ${map.get('KEY02')}`);


// 配列を順次処理する
for(const key of map.keys()) {
    console.log(`[4] key=${key}, value=${map.get(key)}`);
}

// Map へセットできるキーを制限するときは、次のようにしましょう。
type KEYS = 'KEY01' | 'KEY02' | 'KEY03';
const map02 = new Map<KEYS, string>([
    ['KEY01', '001'],
    ['KEY02', '002'],
    ['KEY03', '003'],
]);

console.log(`[5] map02の要素数 = ${map02.size}`)
console.log(`[6] map02.get('KEY02') = ${map02.get('KEY02')}`);

// キー( KEY04 )は使えません。文法エラー。 
// map02.set('KEY04', '004');

