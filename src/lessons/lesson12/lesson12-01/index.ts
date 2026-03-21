/**
 * 【12-01】CANVASへ描画する（四角）: 2D
 * 
 */
// CANVASを作る
const main = document.querySelector('#main');
const canvas = document.createElement('canvas');
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.zIndex = '1';
canvas.style.opacity = '1'; // 不透明
main?.appendChild(canvas);
// Canvas Context を取得する
const ctx = canvas.getContext("2d", {alpha:false, willReadFrequently:true});
if(ctx){
    ctx.fillStyle = "red";
    const x = 40;
    const y = 30;
    const width = 50;
    const heigth = 50;
    ctx.fillRect(x, y, width, heigth);
}

