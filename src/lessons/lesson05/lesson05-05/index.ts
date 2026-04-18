/**
 * 【05-05】アロー関数を定義
 */

/** あいさつの言葉を作る */
const hello = (name:string): string => {
    return `アロー関数よりこんにちは！ ${name}さん`;
}

console.log(hello('まおまお'));
console.log(hello('たかし'));