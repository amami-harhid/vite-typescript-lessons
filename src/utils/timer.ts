/** 指定した秒数分、停止させる */
export const wait = async(sec: number) => {
    return new Promise<void>((resolve)=>{
        setTimeout(()=>{
            resolve();
        }, sec*1000);
    })
}