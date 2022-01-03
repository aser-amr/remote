joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.up, function () {
    radio.sendString("ButtonC_Released")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    radio.sendString("ButtonE_Pressed")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.up, function () {
    radio.sendString("ButtonD_Released")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    radio.sendString("ButtonF_Pressed")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.up, function () {
    radio.sendString("ButtonF_Released")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Shake") {
        joystickbit.Vibration_Motor(200)
    }
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.up, function () {
    radio.sendString("ButtonE_Released")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    radio.sendString("ButtonD_Pressed")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    radio.sendString("ButtonC_Pressed")
})
radio.setGroup(1)
joystickbit.initJoystickBit()
let MidX = joystickbit.getRockerValue(joystickbit.rockerType.X)
let MidY = joystickbit.getRockerValue(joystickbit.rockerType.Y)
let MaxX = 1020
let MaxY = 1020
joystickbit.Vibration_Motor(200)
basic.pause(100)
joystickbit.Vibration_Motor(200)
music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
basic.forever(function () {
    radio.sendValue("X", Math.round((MidX - joystickbit.getRockerValue(joystickbit.rockerType.X)) / MidX * 100))
    radio.sendValue("Y", Math.round((joystickbit.getRockerValue(joystickbit.rockerType.Y) - MidY) / MidY * 100))
})
