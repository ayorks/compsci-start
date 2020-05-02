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
scene.onHitTile(SpriteKind.Player, 9, function (sprite) {
    answer = game.askForString("√p^2")
    if (answer == "p") {
        D2()
    } else {
        game.showLongText("Nope, Sorry!", DialogLayout.Center)
        D1()
    }
})
function D3 () {
	
}
function D1 () {
    scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . b b b . . . . 
. . . b . b . . . . 
9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 
`)
    scene.setTile(9, img`
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
    scene.setTile(11, img`
b d d d d d d d d d d d d d d c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
c c c c c c c c c c c c c c c a 
`, false)
}
function D2 () {
    scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . 4 4 4 . 
. . . . . . 4 . 4 . 
8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 
`)
    scene.setTile(8, img`
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
`, false)
    scene.setTile(4, img`
b d d d d d d d d d d d d d d c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
c c c c c c c c c c c c c c c a 
`, false)
}
scene.onHitTile(SpriteKind.Player, 4, function (sprite) {
    answer = game.askForString("Who is helping you figure out this puzzle? ")
    if (answer == "ur") {
    	
    } else {
    	
    }
})
let answer = ""
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
answer = game.askForString("Can you escape the room?")
if (answer == "yes") {
    game.showLongText("Good luck!", DialogLayout.Center)
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
kitten.say("go", 5000)
game.showLongText("Here is how it works: You must enter the portals and answer the questions. Then use the letters from your answers to create the key word, answering the riddle. Then you will escape. You must do this before the time runs out.", DialogLayout.Full)
game.showLongText("Riddle Question: Where is the missing kitten? (Cause that sounds like a riddle question) UR WELCOME ", DialogLayout.Full)
scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . 3 . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`)
kitten.destroy()
let girl = sprites.create(img`
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
controller.moveSprite(girl)
girl.setPosition(-1, 54)
