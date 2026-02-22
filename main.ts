input.onButtonPressed(Button.A, function () {
    if (souradky > 0) {
        souradky_old = souradky
        souradky += -1
        souradkyold_bool = 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (souradky < 4) {
        souradky_old = souradky
        souradky += 1
        souradkyold_bool = 1
    }
})
let game_over = 0
let kolize_check = 0
let i1 = 0
let seznam1: number[] = []
let y_padani = 0
let rand1 = 0
let souradkyold_bool = 0
let souradky_old = 0
let souradky = 0
souradky = 2
let rychlost_hry = 500
let wait_ms = 50
loops.everyInterval(rychlost_hry * 6, function () {
    rand1 = randint(0, 4)
    y_padani = 0
    seznam1 = [
    0,
    1,
    2,
    3,
    4
    ]
    seznam1.removeAt(rand1)
    i1 = 0
    for (let index = 0; index < seznam1.length; index++) {
        led.plot(seznam1[i1], y_padani)
        i1 += 1
    }
    basic.pause(rychlost_hry)
    i1 = 0
    y_padani += 1
    for (let index = 0; index < seznam1.length; index++) {
        led.unplot(seznam1[i1], y_padani - 1)
        i1 += 1
    }
    i1 = 0
    for (let index = 0; index < seznam1.length; index++) {
        led.plot(seznam1[i1], y_padani)
        i1 += 1
    }
    basic.pause(rychlost_hry)
    i1 = 0
    y_padani += 1
    for (let index = 0; index < seznam1.length; index++) {
        led.unplot(seznam1[i1], y_padani - 1)
        i1 += 1
    }
    i1 = 0
    for (let index = 0; index < seznam1.length; index++) {
        led.plot(seznam1[i1], y_padani)
        i1 += 1
    }
    basic.pause(rychlost_hry)
    i1 = 0
    y_padani += 1
    for (let index = 0; index < seznam1.length; index++) {
        led.unplot(seznam1[i1], y_padani - 1)
        i1 += 1
    }
    i1 = 0
    kolize_check = 1
    for (let index = 0; index < seznam1.length; index++) {
        led.plot(seznam1[i1], y_padani)
        i1 += 1
    }
    basic.pause(rychlost_hry)
    i1 = 0
    y_padani += 1
    if (game_over == 0) {
        for (let index = 0; index < seznam1.length; index++) {
            led.unplot(seznam1[i1], y_padani - 1)
            i1 += 1
        }
    }
    if (game_over == 0) {
        i1 = 0
        for (let index = 0; index < seznam1.length; index++) {
            led.plot(seznam1[i1], y_padani)
            i1 += 1
        }
    }
    basic.pause(rychlost_hry)
    i1 = 0
    y_padani += 1
    if (game_over == 0) {
        for (let index = 0; index < seznam1.length; index++) {
            led.unplot(seznam1[i1], y_padani - 1)
            i1 += 1
        }
    }
    kolize_check = 0
    basic.pause(rychlost_hry)
})
basic.forever(function () {
    basic.pause(wait_ms)
    if (game_over == 1) {
        basic.showIcon(IconNames.Skull)
        control.reset()
    }
    if (souradkyold_bool == 1) {
        souradkyold_bool = 0
        led.unplot(souradky_old, 3)
        led.unplot(souradky_old, 4)
    }
    led.plot(souradky, 3)
    led.plot(souradky, 4)
    if (kolize_check == 1 && souradky != rand1) {
        game_over = 1
        wait_ms = 500
        rychlost_hry = 10000
    }
})
