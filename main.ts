input.onButtonPressed(Button.A, function () {
    if (Step == 0) {
        Step += 1
        basic.showString("B it!")
    }
})
input.onGesture(Gesture.FreeFall, function () {
    if (Step == 10) {
        Step += 1
        basic.showString("Nice catch!")
    }
})
input.onGesture(Gesture.LogoUp, function () {
    if (Step == 4) {
        Step += 1
        basic.showString("Logo down it!")
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (Step == 8) {
        Step += 1
        basic.showString("Tilt it right!")
    }
})
input.onGesture(Gesture.ScreenUp, function () {
    if (Step == 6) {
        Step += 1
        basic.showString("Screen down it!")
    }
})
input.onGesture(Gesture.ScreenDown, function () {
    if (Step == 7) {
        Step += 1
        basic.showString("Tilt it left!")
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Step == 2) {
        Step += 1
        basic.showString("Shake it!")
    }
})
input.onButtonPressed(Button.B, function () {
    if (Step == 1) {
        Step += 1
        basic.showString("A+B it!")
    }
})
input.onGesture(Gesture.Shake, function () {
    if (Step == 3) {
        Step += 1
        basic.showString("Logo up it!")
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (Step == 9) {
        Step += 1
        basic.showString("Toss it!")
    }
})
input.onGesture(Gesture.LogoDown, function () {
    if (Step == 5) {
        Step += 1
        basic.showString("Screen up it!")
    }
})
let Step = 0
Step = 0
basic.showString("A it!")
