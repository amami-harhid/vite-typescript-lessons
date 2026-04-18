/**
 * 【04-01】もし～なら ( if 文 )
 *  npx tsx で実行する
 *  ターミナルに数字を入力すると main を実行する
 */
import { ReadLineUtil } from '../readline';

// もし〇〇なら、XXをする
// 変数(kosuu)= 30 を用意しておき、kosu > 20 のときに 
// `個数は${kosuu}です` を表示してください。

const main = ( kosuu : number) => {
    if( kosuu > 20 ){
        console.log(`個数は${kosuu}です`);
    }else{
        console.log('ELSEです');
    }
}

ReadLineUtil.inputNumber(main);
