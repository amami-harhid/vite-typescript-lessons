/**
 * 【06-08】ＭＡＰ(マップ)と繰り返し( for..of )
 */
import {console} from "~/console";

/** MAP */
const map = new Map([
    ['KEY01', '001'],
    ['KEY02', '002'],
    ['KEY03', '003'],
]);
console.log(`mapの要素数(1) = ${map.size}`)

map.set('KEY04', '004');
map.set('KEY00', '000');

console.log(`mapの要素数(2) = ${map.size}`)

// 配列を順次処理する
for(const key of map.keys()) {
    console.log(`key=${key}, value=${map.get(key)}`);
}


