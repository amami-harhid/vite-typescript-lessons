/**
 * 【06-06】連想配列と繰り返し( for..of )
 */
import {console} from "~/console";

/** 連想配列 */
const hairetsu = {
    KEY01: '001',
    KEY02: '002',
    KEY03: '003',
};

// キーを配列化
const keys = Object.keys(hairetsu);
// 配列を順次処理する
keys.forEach((key)=>{
    console.log(`key=${key}`);
})

// キーと値のペアを配列化
const entries = Object.entries(hairetsu);
// 配列を順次処理する
for(let [key, value] of entries) {
    console.log(`key=${key}, value=${value}`);
}


