/**
 * 【04-03】比較演算子(かつ)
 */
import { ReadLineUtil } from '../readline';

// 複数の条件A,Bのとき、 A かつ B を判定しましょう。
// コンスタント(eigo) = 65、コンスタント(syakai) = 50
// eigo >= 60 かつ syakai >= 50 のときに
// '合格' と表示させましょう。
const main = ( eigo:number, syakai:number) => {
    
    if( eigo >= 60 && syakai >= 50 ){
        console.log('合格');
    }

    // 次に、eigo >= 60 または syakai >= 90 のときに
    // 'まあまあ' と表示させましょう。

    if( eigo >= 60 || syakai >= 90 ){
        console.log('まあまあ');
    }

}

ReadLineUtil.inputTwoNumbers(main);
