/**
 * 【05-03】関数の戻り値
 */
import {console} from "~/console";

function hello(name: string) {
    return `こんにちは！ ${name}さん`;
}

console.log(hello('まお'));
console.log(hello('たかし'));