export class Map {
    constructor(sizeX, sizeY) {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }

    getSize() {
        return this.sizeX * this.sizeY;
    }
}