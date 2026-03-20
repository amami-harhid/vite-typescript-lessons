/**
 * 【08-04】ボタンを新規に作成してDOM要素として追加、カウントアップ
 */
import { wait } from "~/timer";

const main = document.querySelector('#main');
if(main){ // main を取得できているとき
    const button = document.createElement('button');
    button.textContent = '新規のボタン';
    let counter = 0;
    button.addEventListener('click', ()=>{
        counter += 1;
        button.textContent = `${counter}回目`;
    });
    // 2秒待つ
    await wait(2);
    main.appendChild(button);
}
