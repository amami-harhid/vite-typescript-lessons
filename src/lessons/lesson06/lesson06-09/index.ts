/**
 * 【06-09】連想配列へ配列を格納する
 */
import {console} from "~/console";

/** MAP */
type RENSOU = {cat?: string[], dog?: string[], fish?: string[]};
const rensou:RENSOU = {};

// type で定義したキーを使うことができる
rensou.cat = ['ペルシャ', 'シャム', '三毛'];
rensou.dog = ['ビーグル', 'ボーダーコリー', 'ダックスフンド', 'ヨークシャーテリア'];
rensou.fish = ['さんま','いわし', 'うつぼ', 'かつお'];


// 連想配列を順次処理する
for(const [key,array] of Object.entries(rensou)) {
    console.log(`key=${key}`);
    for(const name of array) {
        console.log(`key=${key}, name=${name}`);
    }
}


