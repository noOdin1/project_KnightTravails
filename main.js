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


})();
