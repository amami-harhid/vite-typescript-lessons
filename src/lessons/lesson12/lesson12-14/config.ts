/**
 * 【config】
 */
import * as ex from 'excalibur';

// 連想配列に as const をつけることで、
// 読み取り専用化（上書き禁止、コンスタント化）
export const Config = {
    BirdStartPos: ex.vec(200, 300),
    BirdAcceleration: 1200,
    BirdJumpVelocity: -200 , //  -800,
    BirdMinVelocity: -500,
    BirdMaxVelocity: 500, 
    PipeSpeed: 200,
    PipeInterval: 1500, //1500,
    PipeGap: 150,
} as const;