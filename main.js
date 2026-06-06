/* main.js */
import {
  dirTranslation,
  mapBoard,
  travellingKnight,
} from "./knightTravails.js";
import { Tree } from "./binary_search_tree.js";
import { argv } from "node:process";

(() => {
  // get the argument from console via 'argv' (of node:process)
  //  and start calculating all the moves
  // Use the following command:
  //  node main.js [3,2] [5,7]
  let startPos = JSON.parse(argv[2]);
  let destPos = JSON.parse(argv[3]);

  // NOTE:
  //  Now the following are the options to test this program:
  //    1. sort the possible moves by the square value
  //    2. sort the possible moves using distance calculation
  //  Currently sort by distance calculation returns a shorter path

  let knight = travellingKnight();
  knight.createKnightMovementMap();

  console.log(
    "Knight moving from: " +
      travellingKnight().returnSquare(startPos) +
      ", to: " +
      travellingKnight().returnSquare(destPos),
  );

})();
