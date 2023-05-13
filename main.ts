input.onGesture(Gesture.LogoUp, function () {
    y += 1
    led.unplot(x, y - 1)
})
input.onGesture(Gesture.LogoDown, function () {
    x += -1
    led.unplot(x, y + 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    x += -1
    led.unplot(x + 1, y)
})
input.onGesture(Gesture.TiltRight, function () {
    y += 1
    led.unplot(x - 1, y)
})
let y = 0
let x = 0
x = 2
y = 2
basic.forever(function () {
    if (y < 0) {
        y = 4
    }
})
basic.forever(function () {
    if (x < 0) {
        x = 4
    }
})
basic.forever(function () {
    led.plot(x, y)
})
basic.forever(function () {
    if (y > 4) {
        y = 0
    }
})
basic.forever(function () {
    if (x > 4) {
        x = 0
    }
})
