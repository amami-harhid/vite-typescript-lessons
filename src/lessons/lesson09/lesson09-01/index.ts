/**
 * 【09-01】非同期処理
 * 
 *  async がついている関数は非同期です
 *  非同期の関数は同時並行的に動作します
 *  並行的ではなく（順次に）動作させるには await で呼び出す必要があります
 */
import { wait } from "~/timer";


let onColorChange = false;
const colorChange = async (event: Event) => {
    onColorChange = true;
    const button: HTMLElement = event.target as HTMLElement;
    for(let count=0;count<3;count++){
        for(let idx = 0; idx < 100; idx++){
            const color = idx * 10;
            button.style.backgroundColor = `rgb(${color}, 0, 0)`;
            await wait(0.003); // 3 ﾐﾘ秒待つ
        }
        for(let idx = 0; idx < 100; idx++){
            const color = idx * 10;
            button.style.backgroundColor = `rgb(256, ${color}, 0)`;
            await wait(0.003); // 3 ﾐﾘ秒待つ
        }
        for(let idx = 0; idx < 100; idx++){
            const color = idx * 10;
            button.style.backgroundColor = `rgb(256, 256, ${color})`;
            await wait(0.003); // 3 ﾐﾘ秒待つ
        }
    }
    onColorChange = false;
}
let onSizeChange = false;
const sizeChange = async (event: Event) => {
    onSizeChange = true;
    const button = event.target as HTMLElement;
    for(let size = 0; size < 500; size++){
        button.style.fontSize = `${100+size}%`;
        await wait(0.003); // 3 ﾐﾘ秒待つ
    }
    for(let size = 0; size < 500; size++){
        button.style.fontSize = `${600 - size}%`;
        await wait(0.003); // 3 ﾐﾘ秒待つ
    }
    onSizeChange = false;
}
const main = document.querySelector('#main');
if(main){ // main を取得できているとき
    const button = document.createElement('button');
    button.textContent = '新規のボタン';
    button.style.fontSize = '100%';
    button.addEventListener('mouseover', (event:Event)=>{
        if(onColorChange || onSizeChange ){
            return;
        }
        // 次の２つの関数は非同期なので同時に動作する
        colorChange(event);
        sizeChange(event);
    });
    // 2秒待つ
    await wait(2);
    main.appendChild(button);
}
