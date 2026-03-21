import * as ex from 'excalibur'
import BirdImage from 'assets/bird.png';
import PipeImage from 'assets/pipe.png';
import GroundImage from 'assets/ground.png';

export const Resources = {
    BirdImage: new ex.ImageSource(BirdImage),
    PipeImage: new ex.ImageSource(PipeImage, {
        wrapping: ex.ImageWrapping.Clamp // stretch the board pixel to accommodate
    }),
    GroundImage: new ex.ImageSource(GroundImage, {
        wrapping: ex.ImageWrapping.Repeat // repeated over and over
    }),
} as const;