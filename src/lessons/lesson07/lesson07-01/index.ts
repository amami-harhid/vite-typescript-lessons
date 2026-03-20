/**
 * 【07-01】DOM要素を取り出す
 */
import {console} from "~/console";


/** DIVの中身を取り出す */
const toridasu = (): string => {
    const rensyu = document.getElementById('rensyu');
    const nakami = rensyu?.innerHTML;
    return `アロー関数よりこんにちは！ ${nakami}さん`;
}

console.log(toridasu());
