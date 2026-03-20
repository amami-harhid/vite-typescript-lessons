/**
 * 【08-03】DOM要素ボタンをクリックしたらカウントアップ
 */

const button = document.querySelector('#rensyu');

if( button ) {
    /** カウンター */
    let counter = 0;
    button.addEventListener('click', (elem:Event)=>{
        counter += 1;
        const _button = elem.target as Element; // DOM Element の型にする
        _button.textContent = `${counter} 回目`;
    })
};
