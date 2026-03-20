/**
 * 【05-04】コンスタントで関数を定義
 */
import {console} from "~/console";

/** あいさつの言葉を作る */
const hello = function(name:string) {
    return `こんにちはーー！ ${name}さん`;
}

console.log(hello('まおまお'));
console.log(hello('たかし'));