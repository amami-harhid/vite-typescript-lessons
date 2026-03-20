/**
 * 【06-01】配列と繰り返し
 *  ※ 無限ループにならないように注意しましょう
 */
import {console} from "~/console";

/** 配列 */
const hairetsu = ['001','002','003','004'];

for(let idx=0; idx<4; idx++) {
    const elem = hairetsu[idx];
    console.log(`IDX=${idx}, ELEM=${elem}`);
}


