import * as readline from 'readline';

/**
 * ターミナルからの入力を受け取り
 * 数値(整数)へ変換して main へ渡す。
 * 数値(整数)への変換失敗（NaN)の場合は mainを呼び出さない
 */
// ターミナルへ文字を入力する仕組みを用意する
export class ReadLineUtil {
    static createInterface() {
        const rl = readline.createInterface({
            input: process.stdin,
            terminal: false,
        });
        return rl;
    }
    static inputNumber(main: CallableFunction) {
        const rl = ReadLineUtil.createInterface();
        // ターミナルへ文字を入力し Enter するたびに実行する
        rl.on("line", (line: string) => {
            const num = Number.parseInt(line); // 整数へ変換する
            if(!Number.isNaN(num) ){
                main(num); // <=== mainを呼び出す
            }
        });
    }
    static inputTwoNumbers(main: CallableFunction) {
        const rl = ReadLineUtil.createInterface();
        // ターミナルへ文字を入力し Enter するたびに実行する
        rl.on("line", (line: string) => {
            const nums = line.split(' ');
            if(nums.length == 2) {
                const num01 = Number.parseInt(nums[0]); // １番目を整数へ変換する
                const num02 = Number.parseInt(nums[1]); // ２番目を整数へ変換する
                if(!Number.isNaN(num01) && !Number.isNaN(num02) ){
                    main(num01, num02); // <=== mainを呼び出す
                }
            }
        });
    }
    static inputString(main: CallableFunction){
        const rl = ReadLineUtil.createInterface();
        rl.on("line", (line: string) => {
            main(line);
        });
    }

}

