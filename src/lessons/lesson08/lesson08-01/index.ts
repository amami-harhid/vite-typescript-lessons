/**
 * 【08-01】要素にイベントをつける
 *  触れたときに 色を変える
 */
import {console} from "~/console";

const button = document.querySelector('#rensyu');

// DOM要素(button)を取得できていたとき
if(button) {
    // ボタンの上にマウスが移動してきたときのイベント
    button.addEventListener('mouseover', ()=>{
        button.classList.add('buttonRed'); // class='buttonRed'にする
        console.log('mouse over');
    });
    // ボタンの上からマウスが離れたときのイベント
    button.addEventListener('mouseleave', ()=>{
        button.classList = ''; // クラスを消す
        console.log('mouse leave');
    });
}
