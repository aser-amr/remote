joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.up, function () {
    radio.sendString("ButtonC_Released")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    joystickbit.Vibration_Motor(50)
    radio.sendString("ButtonE_Pressed")
    basic.showString("E")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.up, function () {
    radio.sendString("ButtonD_Released")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("ButtonA_Pressed")
    basic.showString("A")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    joystickbit.Vibration_Motor(50)
    radio.sendString("ButtonF_Pressed")
    basic.showString("F")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.up, function () {
    radio.sendString("ButtonF_Released")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("ButtonAB_Pressed")
    basic.showString("AB")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Shake") {
        joystickbit.Vibration_Motor(200)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("ButtonB_Pressed")
    basic.showString("B")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.up, function () {
    radio.sendString("ButtonE_Released")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    joystickbit.Vibration_Motor(50)
    radio.sendString("ButtonD_Pressed")
    basic.showString("D")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    joystickbit.Vibration_Motor(50)
    radio.sendString("ButtonC_Pressed")
    basic.showString("C")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("Logo_Pressed")
    basic.showIcon(IconNames.Happy)
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    radio.sendString("Logo_Released")
    basic.showIcon(IconNames.Sad)
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
