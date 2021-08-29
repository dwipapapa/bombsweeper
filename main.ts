namespace SpriteKind {
    export const Cursor = SpriteKind.create()
    export const Flag = SpriteKind.create()
}
function Makee_Numbers () {
    for (let tile of tiles.getTilesByType(assets.tile`myTile0`)) {
        Neighbours = [
        tiles.locationInDirection(tile, CollisionDirection.Left),
        tiles.locationInDirection(tile, CollisionDirection.Top),
        tiles.locationInDirection(tile, CollisionDirection.Right),
        tiles.locationInDirection(tile, CollisionDirection.Bottom),
        tiles.locationInDirection(tiles.locationInDirection(tile, CollisionDirection.Bottom), CollisionDirection.Left),
        tiles.locationInDirection(tiles.locationInDirection(tile, CollisionDirection.Top), CollisionDirection.Left),
        tiles.locationInDirection(tiles.locationInDirection(tile, CollisionDirection.Right), CollisionDirection.Bottom),
        tiles.locationInDirection(tiles.locationInDirection(tile, CollisionDirection.Right), CollisionDirection.Top)
        ]
        Numbers = [
        img`
            . . . . f . . . 
            . . . f f . . . 
            . . f . f . . . 
            . f . . f . . . 
            . . . . f . . . 
            . . . . f . . . 
            . . . . f . . . 
            . . f f f f f . 
            `,
        img`
            . . . 3 3 . . . 
            . . 3 . . 3 . . 
            . 3 . . . . 3 . 
            . . . . . 3 . . 
            . . . . 3 . . . 
            . . . 3 . . . . 
            . . 3 . . . . . 
            . 3 3 3 3 3 3 . 
            `,
        img`
            . . . . . . . . 
            . 2 2 2 2 2 . . 
            . . . . . 2 . . 
            . . . 2 2 2 . . 
            . . . . . 2 . . 
            . . . . . 2 . . 
            . 2 2 2 2 2 . . 
            . . . . . . . . 
            `,
        img`
            . . . . . . . . 
            . . . . . 4 . . 
            . . . . 4 4 . . 
            . . . 4 . 4 . . 
            . . 4 . . 4 . . 
            . 4 4 4 4 4 4 . 
            . . . . . 4 . . 
            . . . . . . . . 
            `,
        img`
            . 7 7 7 7 7 . . 
            . 7 . . . . . . 
            . 7 . . . . . . 
            . 7 7 7 7 . . . 
            . . . . . 7 . . 
            . . . . . 7 . . 
            . 7 7 7 7 . . . 
            . . . . . . . . 
            `,
        img`
            . . . e e e . . 
            . . e . . . . . 
            . e . . . . . . 
            . e e e e e . . 
            . e . . . . e . 
            . e . . . . e . 
            . . e e e e . . 
            . . . . . . . . 
            `,
        img`
            . a a a a a a . 
            . . . . . . a . 
            . . . . . a . . 
            . . . . a . . . 
            . . . . a . . . 
            . . . a . . . . 
            . . a . . . . . 
            . . . . . . . . 
            `,
        img`
            . . 5 5 5 5 . . 
            . 5 . . . . 5 . 
            . 5 . . . . 5 . 
            . . 5 5 5 5 . . 
            . 5 . . . . 5 . 
            . 5 . . . . 5 . 
            . . 5 5 5 5 . . 
            . . . . . . . . 
            `
        ]
        Bombiers = 0
        for (let value of Neighbours) {
            if (tiles.tileIs(value, assets.tile`myTile1`)) {
                Bombiers += 1
            }
        }
        if (Bombiers != 0) {
            Num = sprites.create(Numbers[Bombiers - 1], SpriteKind.Player)
            Num.z = 7
            tiles.placeOnTile(Num, tile)
            Num.setFlag(SpriteFlag.Ghost, true)
        }
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Top)))) {
        tiles.placeOnTile(mySprite, tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Top))
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Desto_Neighbour(tiles.locationXY(tiles.locationOfSprite(mySprite), tiles.XY.column), tiles.locationXY(tiles.locationOfSprite(mySprite), tiles.XY.row))
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Left)))) {
        tiles.placeOnTile(mySprite, tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Left))
    }
})
function Desto_Cover (num: number, num2: number) {
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        if (sprites.readDataNumber(value, "col") == num && sprites.readDataNumber(value, "row") == num2) {
            value.destroy()
        }
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Right)))) {
        tiles.placeOnTile(mySprite, tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Right))
    }
})
function Cover () {
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        Covers = sprites.create(img`
            9 9 9 9 9 9 9 8 
            9 9 9 9 9 9 9 8 
            9 9 9 9 9 9 9 8 
            9 9 9 9 9 9 9 8 
            9 9 9 9 9 9 9 8 
            9 9 9 9 9 9 9 8 
            9 9 9 9 9 9 9 8 
            8 8 8 8 8 8 8 8 
            `, SpriteKind.Food)
        Covers.z = 8
        tiles.placeOnTile(Covers, value)
        Covers.setFlag(SpriteFlag.GhostThroughTiles, true)
        Covers.setFlag(SpriteFlag.GhostThroughWalls, true)
        Covers.setFlag(SpriteFlag.Invisible, true)
        sprites.setDataNumber(Covers, "col", tiles.locationXY(value, tiles.XY.column))
        sprites.setDataNumber(Covers, "row", tiles.locationXY(value, tiles.XY.row))
    }
}
function Make_Bombs () {
    for (let index = 0; index < 30; index++) {
        tiles.setTileAt(tiles.getTilesByType(assets.tile`myTile0`)._pickRandom(), assets.tile`myTile1`)
    }
    Makee_Numbers()
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom)))) {
        tiles.placeOnTile(mySprite, tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom))
    }
})
function Valid_Tile (num: number, num2: number) {
    if (!(tiles.tileIs(tiles.getTileLocation(num, num2), assets.tile`myTile1`) || tiles.tileIs(tiles.getTileLocation(num, num2), assets.tile`myTile`))) {
        console.log("Tile Valid")
        return true
    }
    console.log("Tile Non-Valid")
    return false
}
function Valid_Cover (num: number, num2: number) {
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        if (sprites.readDataNumber(value, "col") == num && sprites.readDataNumber(value, "row") == num2) {
            console.log("Cover Valid")
            return true
        }
    }
    console.log("Cover Non-Valid")
    return false
}
function Desto_Neighbour (num: number, num2: number) {
    Lolac = tiles.getTileLocation(num, num2)
    if (Valid_Cover(num, num2) && Valid_Tile(num, num2)) {
        console.log("Looping...")
        Desto_Cover(num, num2)
        Desto_Neighbour(tiles.locationXY(tiles.locationInDirection(Lolac, CollisionDirection.Left), tiles.XY.column), tiles.locationXY(tiles.locationInDirection(Lolac, CollisionDirection.Left), tiles.XY.row))
        Desto_Neighbour(tiles.locationXY(tiles.locationInDirection(Lolac, CollisionDirection.Top), tiles.XY.column), tiles.locationXY(tiles.locationInDirection(Lolac, CollisionDirection.Top), tiles.XY.row))
        Desto_Neighbour(tiles.locationXY(tiles.locationInDirection(Lolac, CollisionDirection.Right), tiles.XY.column), tiles.locationXY(tiles.locationInDirection(Lolac, CollisionDirection.Right), tiles.XY.row))
        Desto_Neighbour(tiles.locationXY(tiles.locationInDirection(Lolac, CollisionDirection.Bottom), tiles.XY.column), tiles.locationXY(tiles.locationInDirection(Lolac, CollisionDirection.Bottom), tiles.XY.row))
        Desto_Neighbour(tiles.locationXY(tiles.locationInDirection(tiles.locationInDirection(Lolac, CollisionDirection.Top), CollisionDirection.Left), tiles.XY.column), tiles.locationXY(tiles.locationInDirection(Lolac, CollisionDirection.Left), tiles.XY.row))
        Desto_Neighbour(tiles.locationXY(tiles.locationInDirection(tiles.locationInDirection(Lolac, CollisionDirection.Bottom), CollisionDirection.Left), tiles.XY.column), tiles.locationXY(tiles.locationInDirection(Lolac, CollisionDirection.Left), tiles.XY.row))
        Desto_Neighbour(tiles.locationXY(tiles.locationInDirection(tiles.locationInDirection(Lolac, CollisionDirection.Bottom), CollisionDirection.Right), tiles.XY.column), tiles.locationXY(tiles.locationInDirection(Lolac, CollisionDirection.Left), tiles.XY.row))
        Desto_Neighbour(tiles.locationXY(tiles.locationInDirection(tiles.locationInDirection(Lolac, CollisionDirection.Top), CollisionDirection.Right), tiles.XY.column), tiles.locationXY(tiles.locationInDirection(Lolac, CollisionDirection.Left), tiles.XY.row))
    }
}
let Lolac: tiles.Location = null
let Covers: Sprite = null
let Num: Sprite = null
let Bombiers = 0
let Numbers: Image[] = []
let Neighbours: tiles.Location[] = []
let mySprite: Sprite = null
tiles.setSmallTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    3 3 3 3 3 3 3 3 
    3 . . . . . . 3 
    3 . . . . . . 3 
    3 . . . . . . 3 
    3 . . . . . . 3 
    3 . . . . . . 3 
    3 . . . . . . 3 
    3 3 3 3 3 3 3 3 
    `, SpriteKind.Cursor)
mySprite.z = 10
tiles.placeOnTile(mySprite, tiles.locationOfSprite(mySprite))
Cover()
Make_Bombs()
