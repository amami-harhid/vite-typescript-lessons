/**
 * 【07-02】DOM要素を書き換える
 */

/** DIVの中身を書き換える */
const kakikaeru = (name:string) => {
    const rensyu = document.getElementById('rensyu');
    if(rensyu){
        rensyu.innerHTML = `こんにちは、${name}さん`;
    }
}

// index.htmlには、「練習」と書かれているが
// 引数の値をもとに書き換える
kakikaeru('ねこ');
