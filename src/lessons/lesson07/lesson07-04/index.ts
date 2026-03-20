/**
 * 【07-04】DOM要素を書き換える様子を目で確認する
 *  QuerySelectorで要素を取り出す
 */
import { wait } from "~/timer";

/** DIVの中身を書き換える */
const kakikaeru = (name:string) => {
    // IDの場合、# をつける
    const rensyu = document.querySelector('#rensyu');
    if(rensyu){
        rensyu.innerHTML = `こんにちは、${name}さん`;
    }
}

// 3秒間停止した後に後続の処理を進める
await wait(3);

// index.htmlには、「練習」と書かれているが
// 引数の値をもとに書き換える
kakikaeru('さる');
