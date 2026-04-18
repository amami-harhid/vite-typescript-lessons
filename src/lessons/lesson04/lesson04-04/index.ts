/**
 * 【04-04】連続した判定 if...else if ...else
 */
import { ReadLineUtil } from "../readline";
// 複数の条件A,B,Cがあって、 
// A のとき、そうでなければ Bのとき、そうでなければ C のとき
// の判定をしましょう。
//
// const foodName = 'Banana';
// (A) もし foodName が 'Potato'のとき、'ポテト'と表示
// (B) そうでないなら、もし foodName が 'Pasta'のとき 'パスタ'と表示
// (C) そうでないなら、もし foodName が 'Banana'のとき 'バナナ'と表示
// (D) そうでないなら、'わからない'と表示

const main = (foodName:string) => {
    if( foodName == "Potato") {
        console.log('ポテト');
    }else if( foodName == 'Pasta') {
        console.log('パスタ');
    }else if( foodName == 'Banana') {
        console.log('バナナ');
    }else{
        console.log('わからない');
    }
}


ReadLineUtil.inputString(main);