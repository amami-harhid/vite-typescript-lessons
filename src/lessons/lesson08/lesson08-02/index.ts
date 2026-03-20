/**
 * 【08-02】マウスが触れたときに要素を段階的に見えなくして
 *  しばらくしたら出現させる
 */
import { wait } from "~/timer";

const button = document.querySelector('#rensyu');

// DOM要素(button)を取得できていたとき
if(button) {
    // ボタンの上にマウスが移動してきたときのイベント
    button.addEventListener('mouseover', async()=>{
        button.classList.add('half_ghost');
        await wait(1);
        button.classList.add('ghost');
        await wait(2);
        button.classList.remove('half_ghost');
        button.classList.remove('ghost');
    });
}
