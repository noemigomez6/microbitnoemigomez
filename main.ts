input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Happy)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Heart)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.twinkle), SoundExpressionPlayMode.UntilDone)
        basic.showIcon(IconNames.SmallHeart)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Square)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.slide), SoundExpressionPlayMode.UntilDone)
        basic.showIcon(IconNames.SmallSquare)
    }
})
music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
basic.showString("Hola!")
music.playMelody("C5 G B A F A C5 B ", 120)
basic.forever(function () {
	
})
