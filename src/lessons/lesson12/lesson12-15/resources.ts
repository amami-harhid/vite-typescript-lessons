import * as ex from 'excalibur'
import BirdImage from 'assets/bird.png';
import PipeImage from 'assets/pipe.png';
import GroundImage from 'assets/ground.png';
import FlapSound from 'assets/flap.wav';
import FailSound from 'assets/fail.wav';
import ScoreSound from 'assets/score.wav';
import BackgroundMusic from 'assets/two_left_socks.ogg';

export const Resources = {
    BirdImage: new ex.ImageSource(BirdImage),
    PipeImage: new ex.ImageSource(PipeImage, {
        wrapping: ex.ImageWrapping.Clamp // stretch the board pixel to accommodate
    }),
    GroundImage: new ex.ImageSource(GroundImage, {
        wrapping: ex.ImageWrapping.Repeat // repeated over and over
    }),
    FlapSound: new ex.Sound(FlapSound),
    FailSound: new ex.Sound(FailSound),
    ScoreSound: new ex.Sound(ScoreSound),
    BackgroundMusic: new ex.Sound(BackgroundMusic),
} as const;