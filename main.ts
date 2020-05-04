enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
function D3 () {
    Girl.setPosition(2, 54)
    scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . 6 6 6 . 
. . . . . . 6 . 6 . 
5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 
`)
    scene.setTile(5, img`
b d d d d c d d d d d d d d d c 
d b b b b b c b b b b b b b b c 
d b b b b b c b b b b b b b b c 
d b b b b b b c b b b b b b b c 
d b b b b b b c b b b b b b b c 
d b b b b b b c b b b b b b b c 
d b b b b b b b c b b b b b b c 
d b b b b b b b b c b b b b b c 
d b b b b b b b b c b b b b b c 
d b b b b b b b c d c c b b b c 
d b b b b b b b c d b b c c b c 
d b b b b b b c d b b b b b c c 
d b b b b b c c d b b b b b b c 
d b b b b b c d b b b b b b b c 
d b b b b c c d b b b b b b b c 
c c c c c c c c c c c c c c c a 
`, true)
    scene.setTile(6, img`
b d d d d c d d d d d d d d d c 
d b b b b b c b b b b b b b b c 
d b b b b b c b b b b b b b b c 
d b b b b b b c b b b b b b b c 
d b b b b b b c b b b b b b b c 
d b b b b b b c b b b b b b b c 
d b b b b b b b c b b b b b b c 
d b b b b b b b b c b b b b b c 
d b b b b b b b b c b b b b b c 
d b b b b b b b c d c c b b b c 
d b b b b b b b c d b b c c b c 
d b b b b b b c d b b b b b c c 
d b b b b b c c d b b b b b b c 
d b b b b b c d b b b b b b b c 
d b b b b c c d b b b b b b b c 
c c c c c c c c c c c c c c c a 
`, true)
}
function D4 () {
    Girl.setPosition(2, 54)
    scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . 8 8 8 . . . . 
. . . 8 . 8 . . . . 
7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 
`)
    scene.setTile(7, img`
b d d d d d d c d 1 1 1 1 1 1 c 
d b b b b b b c 1 d d d d d d c 
d b b b b b b c 1 d d d d d d c 
d b b b b b b c 1 d d d d d d c 
d b b b b b b c 1 d d d d d d c 
d b b b b b b c 1 d d d d d d c 
d b b b b b b b 1 d d d d d d d 
c c c c c c b a c c c c c c d a 
d 1 1 1 1 1 1 c b d d d d d d c 
1 d d d d d d c d b b b b b b c 
1 d d d d d d c d b b b b b b c 
1 d d d d d d c d b b b b b b c 
1 d d d d d d c d b b b b b b c 
1 d d d d d d c d b b b b b b c 
1 d d d d d d d d b b b b b b b 
c c c c c c d a b c c c c c c a 
`, true)
    scene.setTile(8, img`
b d d d d d d c d 1 1 1 1 1 1 c 
d b b b b b b c 1 d d d d d d c 
d b b b b b b c 1 d d d d d d c 
d b b b b b b c 1 d d d d d d c 
d b b b b b b c 1 d d d d d d c 
d b b b b b b c 1 d d d d d d c 
d b b b b b b b 1 d d d d d d d 
c c c c c c b a c c c c c c d a 
d 1 1 1 1 1 1 c b d d d d d d c 
1 d d d d d d c d b b b b b b c 
1 d d d d d d c d b b b b b b c 
1 d d d d d d c d b b b b b b c 
1 d d d d d d c d b b b b b b c 
1 d d d d d d c d b b b b b b c 
1 d d d d d d d d b b b b b b b 
c c c c c c d a b c c c c c c a 
`, true)
}
function D1 () {
    Girl.setPosition(2, 54)
    scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . 2 2 2 . . . . 
. . . 2 . 2 . . . . 
1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 
`)
    scene.setTile(1, img`
b d d d d d d c c d d d d d d c 
d b b b b b c d d c b b b b b c 
d b b b b c d b b b c b b b b c 
d b b b c d b b b b b c b b b c 
d b b c d b b b b b b b c b b c 
d b c d b b b b b b b b b c b c 
d c d b b b b b b b b b b b c b 
c d b b b b b b b b b b b b b c 
c d b b b b b b b b b b b b c d 
d c b b b b b b b b b b b c d c 
d b c b b b b b b b b b c d b c 
d b b c b b b b b b b c d b b c 
d b b b c b b b b b c d b b b c 
d b b b b c b b b c d b b b b c 
d b b b b b c b c d b b b b b c 
c c c c c c b c d c c c c c c a 
`, true)
    scene.setTile(2, img`
b d d d d d d c c d d d d d d c 
d b b b b b c d d c b b b b b c 
d b b b b c d b b b c b b b b c 
d b b b c d b b b b b c b b b c 
d b b c d b b b b b b b c b b c 
d b c d b b b b b b b b b c b c 
d c d b b b b b b b b b b b c b 
c d b b b b b b b b b b b b b c 
c d b b b b b b b b b b b b c d 
d c b b b b b b b b b b b c d c 
d b c b b b b b b b b b c d b c 
d b b c b b b b b b b c d b b c 
d b b b c b b b b b c d b b b c 
d b b b b c b b b c d b b b b c 
d b b b b b c b c d b b b b b c 
c c c c c c b c d c c c c c c a 
`, true)
}
scene.onHitTile(SpriteKind.Player, 6, function (sprite) {
    Q1 = game.askForString("How do you say \"name\" in Azerbaijani?")
    if (Q1 == "adi") {
        D4()
        game.showLongText("puradi", DialogLayout.Bottom)
    } else {
        D3()
    }
})
scene.onHitTile(SpriteKind.Player, 8, function (sprite) {
    Q1 = game.askForString("A snake hisses this letter")
    if (Q1 == "s") {
        D5()
        game.showLongText("puradis", DialogLayout.Bottom)
    } else {
        D4()
    }
})
scene.onHitTile(SpriteKind.Player, 10, function (sprite) {
    Q1 = game.askForString("You are almost at the _nd")
    if (Q1 == "e") {
        info.stopCountdown()
        game.showLongText("puradise", DialogLayout.Bottom)
        game.over(true, effects.confetti)
    } else {
        D5()
    }
})
function D2 () {
    Girl.setPosition(2, 54)
    scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . 4 4 4 . 
. . . . . . 4 . 4 . 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
`)
    scene.setTile(3, img`
b d d d d d d c b d d d d d d c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b b d b b b b b b b 
c c c c c c b a c c c c c c b a 
c b d d d d d d c b d d d d d c 
c d b b b b b b c d b b b b b c 
c d b b b b b b c d b b b b b c 
c d b b b b b b c b b b b b b c 
c d b b b b b c d b b b b b b c 
c d b b b b b c d b b b b b b c 
c d b b b b b c b b b b b b b b 
c c c c c c c b a b c c c c c a 
`, true)
    scene.setTile(4, img`
b d d d d d d c b d d d d d d c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b b d b b b b b b b 
c c c c c c b a c c c c c c b a 
c b d d d d d d c b d d d d d c 
c d b b b b b b c d b b b b b c 
c d b b b b b b c d b b b b b c 
c d b b b b b b c b b b b b b c 
c d b b b b b c d b b b b b b c 
c d b b b b b c d b b b b b b c 
c d b b b b b c b b b b b b b b 
c c c c c c c b a b c c c c c a 
`, true)
}
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    Q1 = game.askForString("The first letter is after o in the alphabet.")
    if (Q1 == "p") {
        game.showLongText("p", DialogLayout.Bottom)
        D2()
    } else {
        D1()
    }
})
function D5 () {
    Girl.setPosition(2, 54)
    scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . a a a 
. . . . . . . a . a 
9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 
`)
    scene.setTile(9, img`
d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d d 1 d d d d d d d 
b b b b b b d e b b b b b b d e 
d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d d 1 d d d d d d d 
b b b b b b d e d b b b b b b e 
`, true)
    scene.setTile(10, img`
d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d d 1 d d d d d d d 
b b b b b b d e b b b b b b d e 
d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d d 1 d d d d d d d 
b b b b b b d e d b b b b b b e 
`, true)
}
info.onCountdownEnd(function () {
    game.over(false)
})
scene.onHitTile(SpriteKind.Player, 4, function (sprite) {
    Q1 = game.askForString("Who is helping you solve this puzzle? (you are)")
    if (Q1 == "ur") {
        D3()
        game.showLongText("pu", DialogLayout.Bottom)
    } else {
        D2()
    }
})
let Q1 = ""
let Girl: Sprite = null
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
let answer = game.askForString("Can you escape the room?")
if (answer == "yes") {
    game.showLongText("Good luck!", DialogLayout.Center)
    info.startCountdown(250)
} else {
    game.showLongText("Bye then. Nice seeing u", DialogLayout.Center)
    game.reset()
}
kitten.setPosition(74, 59)
pause(200)
kitten.say("ready", 5000)
pause(200)
kitten.say("set", 5000)
pause(200)
// Wow you have a lot going on already!  Nice coding!
// Keep up the good work.  I can't wait to save the
// kitty!!!!
kitten.say("go", 5000)
game.showLongText("Here is how it works: You must enter the portals and answer the questions. Then use the letters from your answers to create the key word, answering the riddle. Then you will escape. You must do this before the time runs out", DialogLayout.Full)
game.showLongText("Riddle Question: Where is the missing kitten?", DialogLayout.Full)
kitten.destroy()
Girl = sprites.create(img`
. . . . . . . . . . . . . . 
. f f f . f f f f f . . . . 
f f f f f c c c c f f . . . 
f f f f b c c c c c c f . . 
f f f c 3 c c c c c c f . . 
. f 3 3 c c c c c c c c f . 
. f f f c c c c c 4 c c f . 
. f f f f c c c 4 4 c f f . 
. f f 4 4 f b f 4 4 f f f . 
. f f 4 d 4 1 f d d c f . . 
. . f f f 4 d d d d f . . . 
. . 4 d d e 4 4 4 e f . . . 
. . e d d e 3 3 3 3 f . . . 
. . f e e f 6 6 6 6 f f . . 
. . f f f f f f f f f f . . 
. . . f f . . . f f f . . . 
`, SpriteKind.Player)
controller.moveSprite(Girl)
scene.cameraFollowSprite(Girl)
D1()
