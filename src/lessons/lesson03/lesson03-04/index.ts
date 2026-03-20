/**
 * 【03-04】テンプレートリテラル
 */
import { console } from '~/console';

// バッククォート(`) で囲んだ中で、${ 変数名 }と書くと
// 変数を文字列のなかに埋め込むことができます。

const firstName = "Ichiro";
const lastName = "Tanaka";
console.log(`私の名前は、${firstName} ${lastName} です`);  // ==> "私の名前は、Ichiro Tnaka です"
