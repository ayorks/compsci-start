music.jumpDown.playUntilDone()
scene.setBackgroundColor(13)
let kitten = sprites.create(img`
. . . . . . . . . . . . . . . . 
e e e . . . . e e e . . . . . . 
c d d c . . c d d c . . . . . . 
c b d d f f d d b c . . . . . . 
c 3 b d d b d b 3 c . . . . . . 
f b 3 d d d d 3 b f . . . . . . 
e d d d d d d d d e . . . . . . 
e d f d d d d f d e . b f b . . 
f d d f d d f d d f . f d f . . 
f b d d b b d d 2 b f f d f . . 
. f 2 2 2 2 2 2 d b b d b f . . 
. f d d d d d d d f f f f . . . 
. . f d b d f d f . . . . . . . 
. . . f f f f f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
pause(100)
kitten.say("Meow!!!")
kitten.setVelocity(0, 29)
pause(2000)
let name = game.askForString("What is your name?")
game.splash("Hello " + name)
game.splash(name, "I am looking for a missing kitten.")
let answer = game.askForString("Can you help me?")
if (answer == "yes") {
    game.showLongText("Thank you! Good luck!", DialogLayout.Bottom)
} else {
    game.showLongText("Bye then. Nice seeing u", DialogLayout.Full)
    game.reset()
}
