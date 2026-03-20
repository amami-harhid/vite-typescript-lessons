/**
 * 【10-02】キーボード検知
 * 
 *  キーが押された（そのキー）、キーが離された
 */
const keyPress = document.querySelector('#keypress');

document.addEventListener("keydown", (event: KeyboardEvent) => {
    // F5, Altキーなどの特殊キーのときのブラウザ操作をキャンセルする
    event.preventDefault();

    if(keyPress){
        const key = (event.key == ' ')? 'SPACE': event.key; // SPACEを判別しやすく
        keyPress.textContent = `KEY=(${key})`;
    }
});
document.addEventListener('keyup', ()=>{
    if(keyPress){
        keyPress.textContent = `KEY=()`;
    }
})

