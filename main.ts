let item = 0
OLED.init(128, 64)
basic.forever(function () {
    basic.pause(1000)
    item += 1
    OLED.writeStringNewLine("")
})
