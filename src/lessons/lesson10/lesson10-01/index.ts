/**
 * 【10-01】マウス操作
 * 
 *  座標、クリックを検知します。
 */

const position = document.querySelector('#position');
const updown = document.querySelector('#updown');

// マウスの動きを検知
window.onmousemove = (event:MouseEvent) => {
    // offsetX, offsetY: 要素内でのカーソル座標(マウスが載っているDOM要素の左上を原点とした座標)を取得
    const x = event.offsetX;
    const y = event.offsetY;
    if(position){
        
        position.textContent = `要素上でのマウス位置 x=(${x}), y=(${y})`; 
    }
}

// ブラウザ右クリックの動作をされると「邪魔」なので、ブラウザ右クリックを無視
window.addEventListener('contextmenu', (evnt: MouseEvent)=>{
    evnt.preventDefault(); // 右クリックでメニューを表示させない設定
});

/** マウスボタンがUP/DOWNされたときの動作 */
const onUpDown = (down: boolean, side: string = '') => {
    if(updown){
        // updown 要素が存在するとき
        updown.textContent = (down === true)? `DOWN(${side})`: `UP`;
    }
}
// マウスボタン押されたときのイベント
window.addEventListener('mousedown', (evnt: MouseEvent)=>{
    const _button = evnt.buttons.toString();
    if( _button == '1') {
        onUpDown(true, '左');
    }else if( _button == '2'){
        onUpDown(true, '右');
    }
});
// マウスボタンが上がったときのイベント
window.addEventListener('mouseup', ()=>{
    onUpDown(false);
});
