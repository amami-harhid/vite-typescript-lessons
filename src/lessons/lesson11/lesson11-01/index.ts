/**
 * 【11-01】音を鳴らす
 * 
 */
import byebye from 'assets/Jinx-_Bye_Bye_.mp3';

// Soundを作る
const sound = new Audio(byebye);
sound.volume = 1.0;
sound.loop = true;
sound.preload = 'auto';

/** ボタン */
const bowingButton = document.querySelector('#bowing');

// マウスが触ったとき
bowingButton?.addEventListener('mouseover', ()=>{
    sound.currentTime = 0;
    sound.play();
});
// マウスが離れたとき
bowingButton?.addEventListener('mouseleave', ()=>{
    sound.pause();    
});