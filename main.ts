input.onButtonPressed(Button.A, function () {
    bat.set(LedSpriteProperty.Direction, 0)
    bat.move(1)
})
function batUp () {
    bat.set(LedSpriteProperty.Direction, 180)
    bat.move(1)
}
function batDown () {
    bat.set(LedSpriteProperty.Direction, 0)
    bat.move(1)
}
input.onButtonPressed(Button.B, function () {
    bat.set(LedSpriteProperty.Direction, 180)
    bat.move(1)
})
function newBall () {
    angle = 135 + 90 * randint(0, 1)
    yStart = randint(0, 4)
    ball = game.createSprite(4, yStart)
    ball.set(LedSpriteProperty.Direction, angle)
    ball.set(LedSpriteProperty.Blink, 5)
    ball.set(LedSpriteProperty.Brightness, 110)
}
let ball: game.LedSprite = null
let yStart = 0
let angle = 0
let bat: game.LedSprite = null
newBall()
let ballDelay = 500
bat = game.createSprite(0, 2)
bat.set(LedSpriteProperty.Brightness, 255)
// Move the ball and detect if it hits the bat
basic.forever(function () {
    basic.pause(ballDelay)
    ball.move(1)
    ball.ifOnEdgeBounce()
    if (ball.get(LedSpriteProperty.X) == 0) {
        if (!(ball.isTouching(bat))) {
            basic.showIcon(IconNames.No)
            ball.delete()
            newBall()
        }
    }
})
// Move the bat randomly
basic.forever(function () {
    basic.pause(randint(5000, 10000))
    if (Math.randomBoolean()) {
        batUp()
    } else {
        batDown()
    }
})
