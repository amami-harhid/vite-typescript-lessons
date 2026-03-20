/**
 * 【10-01】マウス操作
 * 
 *  座標、クリックを検知します。
 */

const position = document.querySelector('#position');
const updown = document.querySelector('#updown');

// マウスの動きを検知
window.onmousemove = (event:MouseEvent) => {
    // 要素内でのカーソル座標(マウスが載っているDOMの左上を原点とした座標)を取得
    const x = event.offsetX;
    const y = event.offsetY;
    if(position){
        position.textContent = `position x=(${x}), y=(${y})`; 
    }
}

window.addEventListener('contextmenu', (evnt: MouseEvent)=>{
    evnt.preventDefault(); // 右クリックでメニューを表示させない
});

const onUpDown = (down: boolean, side: string = '') => {
    if(updown){
        updown.textContent = (down === true)? `DOWN(${side})`: `UP`;
    }
}
window.addEventListener('mousedown', (evnt: MouseEvent)=>{
    const _button = evnt.buttons.toString();
    if( _button == '1') {
        onUpDown(true, '左');
    }else if( _button == '2'){
        onUpDown(true, '右');
    }
});
window.addEventListener('mouseup', ()=>{
    onUpDown(false);
});
