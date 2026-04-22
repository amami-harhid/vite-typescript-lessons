/**
 * 【06-09】連想配列へ配列を格納する
 */

/** MAP */
type RENSOU = {cat?: string[], dog?: string[], fish?: string[]}; // ? をつけるのがポイントです
const rensou:RENSOU = {}; // キーのタイプに ? がついているので 空の連想配列を定義できます。

// type で定義したキーを使うことができます
rensou.cat = ['ペルシャ', 'シャム', '三毛'];
rensou.dog = ['ビーグル', 'ボーダーコリー', 'ダックスフンド', 'ヨークシャーテリア'];
rensou.fish = ['さんま','いわし', 'うつぼ', 'かつお'];


// 連想配列を順次処理
for(const [key, arr] of Object.entries(rensou)) {
    console.log(`[1] key=${key}`);
    for(const name of arr) {
        console.log(`[2] key=${key}, name=${name}`);
    }
}


