/**
 * 【09-01】非同期処理
 * 
 *  async がついている関数は非同期で動きます
 *  非同期の関数は同時に並行動作をします
 *  並行的ではなく（順次に）動作させるには await で呼び出す必要があります
 */
import { wait } from "~/timer";

/** 色変更中フラグ */
let onColorChangeFlag = false;
/** 色変更処理 */
const colorChange = async (event: Event) => {  
    onColorChangeFlag = true; // 「色変更中」
    const button: HTMLElement = event.target as HTMLElement; // style プロパティを使うために HTMLElementとして扱います
    for(let count=0; count < 3; count++){
        // 100回繰り返します( 色RGB のREDを変更 )
        for(let idx = 0; idx < 100; idx++){
            const color = idx * 10;
            button.style.backgroundColor = `rgb(${color}, 0, 0)`;
            await wait(0.003); // 3 ﾐﾘ秒待つ
        }
        // 100回繰り返します( 色RGB のGREENを変更 )
        for(let idx = 0; idx < 100; idx++){
            const color = idx * 10;
            button.style.backgroundColor = `rgb(256, ${color}, 0)`;
            await wait(0.003); // 3 ﾐﾘ秒待つ
        }
        // 100回繰り返します( 色RGB のBLUEを変更 )
        for(let idx = 0; idx < 100; idx++){
            const color = idx * 10;
            button.style.backgroundColor = `rgb(256, 256, ${color})`;
            await wait(0.003); // 3 ﾐﾘ秒待つ
        }
    }
    onColorChangeFlag = false; // 「色変更中ではない」
}

/** サイズ変更中フラグ */
let onSizeChangeFlag = false;
/** サイズ変更処理 */
const sizeChange = async (event: Event) => {
    onSizeChangeFlag = true; // 「サイズ変更中」
    const button = event.target as HTMLElement; // style プロパティを使うために HTMLElementとして扱います
    // 500回繰り返す( 大きくする )
    for(let size = 0; size < 500; size++){
        button.style.fontSize = `${100+size}%`;
        await wait(0.003); // 3 ﾐﾘ秒待つ
    }
    // 500回繰り返す( 小さくする )
    for(let size = 0; size < 500; size++){
        button.style.fontSize = `${100 + (500 - size)}%`; // 500だけ大きくなっているので 500 - size とする
        await wait(0.003); // 3 ﾐﾘ秒待つ
    }
    onSizeChangeFlag = false; // 「サイズ変更中」ではない
}

const main = document.querySelector('#main');
if(main){ // main を取得できているとき

    const button = document.createElement('button');
    button.textContent = '新規のボタン';
    button.style.fontSize = '100%';
    button.addEventListener('mouseover', (event:Event)=>{
        if(onColorChangeFlag || onSizeChangeFlag ){
            // 色変更中、サイズ変更中のときは何もせずに終わらせる
            return;
        }
        // 次の２つの関数は非同期なので同時に動作する
        colorChange(event);
        sizeChange(event);
    });
    // 2秒たってから button を表示させる
    await wait(2);
    main.appendChild(button);
}
