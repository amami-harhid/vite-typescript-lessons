/**
 * 【09-02】Generator関数
 * 
 *  処理の途中で止めて、再開させることができます
 */

let onSizeChange = false;
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
    button.addEventListener('mouseover', (event:Event)=>{
        if(onSizeChange === true){
            return;
        }
        const _func = sizeChange(event);
        const intervalId = setInterval(()=>{
            // 'yeild'の場所から再開する
            const next = _func.next();
            // 最後まで完了したら
            if(next.done === true){ 
                clearInterval(intervalId);
            }
        }, 3); // 3ミリ秒ごとに実行
    });
}
