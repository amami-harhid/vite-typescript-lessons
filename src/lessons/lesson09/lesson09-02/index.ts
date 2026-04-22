/**
 * 【09-02】Generator関数: next と yield 
 * 
 *  処理の途中で止めて、再開させることができます
 */

/** サイズ変更中フラグ */
let onSizeChange = false;
/** サイズ変更処理 */
const sizeChange = function * (event: Event) {
    onSizeChange = true;
    const button = event.target as HTMLElement;
    for(let size = 0; size < 500; size++){
        button.style.fontSize = `${100+size}%`;
        yield;
    }
    for(let size = 0; size < 500; size++){
        button.style.fontSize = `${600 - size}%`;
        yield;
    }
    onSizeChange = false;
}

const button = document.querySelector('#rensyu');
if(button){ // main を取得できているとき

    // マウスが重なったときのイベントの定義
    button.addEventListener('mouseover', (event:Event)=>{
        if(onSizeChange === true){
            // 色変更中のとき何もせずに終わらせる
            return;
        }
        // Generator関数の生成
        const _func = sizeChange(event); 
        // 3ミリ秒の間隔で、処理（ next ) を呼び出す
        const intervalId = setInterval(()=>{
            
            const next = _func.next();  // 'yeild'の場所から再開する
            
            if(next.done === true){     // 最後まで完了したら
                clearInterval(intervalId);
            }
        }, 3); // 3ミリ秒ごとに実行
    });
}
