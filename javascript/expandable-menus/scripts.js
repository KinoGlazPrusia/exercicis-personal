import { Map } from "./scripts/environment/map.js";

let map = new Map(3, 3);
let mapGrid = document.getElementById("map-grid");

for (let i = 0; i < map.getSize(); i++) {
    let cell = document.createElement("div");
    cell.classList.add("map-cell");
    cell.innerHTML = "Cell " + (i + 1);
    mapGrid.appendChild(cell);
}

mapGrid.style.gridTemplateColumns = "repeat(" +  map.sizeX + " , 1fr)";
mapGrid.style.gridTemplateRows = "repeat(" +  map.sizeY + " , 1fr)";



