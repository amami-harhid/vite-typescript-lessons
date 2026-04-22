/**
 * 【11-01】音を鳴らす
 * 
 */
import byebye from 'assets/Jinx-_Bye_Bye_.mp3';

// Soundを作る
const sound = new Audio(byebye); // byebyeのmp3 を読み込む
sound.volume = 1.0;     // 音の大きさ（ 1.0 ==> 標準 )
sound.loop = true;      // 音を繰り返す設定
sound.preload = 'auto'; // 自動で読み込む設定

/** ボタン */
const bowingButton = document.querySelector('#bowing');

// マウスが触ったとき
// ? をつけることで null を無視できます
bowingButton?.addEventListener('mouseover', ()=>{
    sound.currentTime = 0; // 音の再生位置を 最初の位置にする設定( pauseした後でも最初から鳴らす)
    sound.play();
});
// マウスが離れたとき
bowingButton?.addEventListener('mouseleave', ()=>{
    sound.pause();  // 途中で音を止める
});