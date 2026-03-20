/**
 * 【04-02】もし～そうでないなら ( if...else 文 )
 */
import { console } from '~/console';

// もし〇〇なら、XXをする、そうでないなら YYをする
// 変数(tokuten)= 50 を用意しておき、tokuten >= 60 のときは「GOOD」
// そうでないなら 「NO GOOD」を表示しましょう。 

const tokuten = 50;
if( tokuten > 60 ){
    console.log('GOOD');
}else{
    console.log('NO GOOD');
}