/* knightTravails.test.js */
import { board } from "./knightTravails.js";

describe.only("Test group for getAngle())", () => {
  test("No arguments passed in", () => {
    expect(board.getAngle()).toEqual(undefined);
  });
  test("getAngle() with 1 argument", () => {
    expect(board.getAngle([1, 2])).toEqual(undefined);
  });
  test("getAngle()) with 2 arguments, 1st arg array and 2nd arg non array", () => {
    expect(board.getAngle([1, 2], 5)).toEqual(undefined);
  });
  test("getAngle()) with 2 arguments, 1st arg non array and 2nd arg array", () => {
    expect(board.getAngle(5, [1, 2])).toEqual(undefined);
  });

  // getAngle at corner points
  test("getAngle()) with 2 arguments, 1st arg top lefthand corner 2nd arg same plane", () => {
    console.log(board.getAngle([0, 0], [0, 5]));
    expect(board.getAngle([0, 0], [0, 5])).toEqual([5, 0]);
  });
  test("getAngle()) with 2 arguments, 1st arg top lefthand corner 2nd arg lowered", () => {
    let [hyp, deg] = board.getAngle([0, 0], [5, 2]);
    expect(parseFloat(hyp.toFixed(3))).toEqual(5.385);
    expect(parseFloat(deg.toFixed(3))).toEqual(291.801);
  });
  test("getAngle()) with 2 arguments, 1st arg top lefthand corner 2nd arg lowered", () => {
    let [hyp, deg] = board.getAngle([0, 0], [2, 6]);
    expect(parseFloat(hyp.toFixed(3))).toEqual(6.325);
    expect(parseFloat(deg.toFixed(3))).toEqual(341.565);
  });
  test("getAngle()) with 2 arguments, 1st arg bottom lefthand corner 2nd arg on the same plane", () => {
    let [hyp, deg] = board.getAngle([7, 0], [7, 5]);
    expect(board.getAngle([0, 0], [0, 5])).toEqual([5, 0]);
  });
  test("getAngle()) with 2 arguments, 1st arg bottom lefthand corner 2nd arg slightly elevated", () => {
    let [hyp, deg] = board.getAngle([7, 0], [5, 6]);
    expect(parseFloat(hyp.toFixed(3))).toEqual(6.325);
    expect(parseFloat(deg.toFixed(3))).toEqual(18.435);
  });
  test("getAngle()) with 2 arguments, 1st arg bottom lefthand corner 2nd arg elevated over 45deg", () => {
    let [hyp, deg] = board.getAngle([7, 0], [2, 3]);
    expect(parseFloat(hyp.toFixed(3))).toEqual(5.831);
    expect(parseFloat(deg.toFixed(3))).toEqual(59.036);
  });
  test("getAngle()) with 2 arguments, 1st arg bottom righthand corner 2nd arg on the same plane", () => {
    let [hyp, deg] = board.getAngle([7, 7], [7, 2]);
    expect(board.getAngle([7, 7], [7, 2])).toEqual([5, 180]);
  });
  test("getAngle()) with 2 arguments, 1st arg bottom righthand corner 2nd arg on the same plane, going up", () => {
    let [hyp, deg] = board.getAngle([7, 7], [7, 2]);
    expect(board.getAngle([7, 7], [1, 7])).toEqual([6, 90]);
  });
  test("getAngle()) with 2 arguments, 1st arg bottom righthand corner 2nd arg slightly elevated", () => {
    let [hyp, deg] = board.getAngle([7, 7], [5, 1]);
    expect(parseFloat(hyp.toFixed(3))).toEqual(6.325);
    expect(parseFloat(deg.toFixed(3))).toEqual(161.565);
  });
  test("getAngle()) with 2 arguments, 1st arg bottom righthand corner 2nd arg elevated over 45deg", () => {
    let [hyp, deg] = board.getAngle([7, 7], [1, 6]);
    expect(parseFloat(hyp.toFixed(3))).toEqual(6.083);
    expect(parseFloat(deg.toFixed(3))).toEqual(99.462);
  });
  test.only("getAngle()) with 2 arguments, 1st arg top righthand corner 2nd arg on the same plane, going down", () => {
    let [hyp, deg] = board.getAngle([0, 7], [1, 7]);
    expect(board.getAngle([0, 7], [1, 7])).toEqual([6, 270]);
  });
  test.only("getAngle()) with 2 arguments, 1st arg top righthand corner 2nd arg on the same plane, going left", () => {
    let [hyp, deg] = board.getAngle([0, 7], [0, 1]);
    expect(board.getAngle([0, 7], [0, 1])).toEqual([6, 180]);
  });
});

describe("Test group for dir() function", () => {
  test("dir with no arguments", () => {
    expect(board.dir()).toEqual(undefined);
  });
  test("dir with 1 argument", () => {
    expect(board.dir([1, 2])).toEqual(undefined);
  });
  test("dir with 2 arguments, 1st arg array and 2nd arg non array", () => {
    expect(board.dir([1, 2], 5)).toEqual(undefined);
  });
  test("dir with 2 arguments, 1st arg non array and 2nd arg array", () => {
    expect(board.dir(5, [1, 2])).toEqual(undefined);
  });

  // testing the corner positions
  // top left corner [0,0]
  test("curPos = [0,0], destPos = [0,6]", () => {
    expect(board.dir([0, 0], [0, 6])).toEqual("NEE");
  });
  test("curPos = [0,0], destPos = [2,6]", () => {
    expect(board.dir([0, 0], [2, 6])).toEqual("SEE");
  });
  test("curPos = [0,0], destPos = [6,2]", () => {
    expect(board.dir([0, 0], [6, 2])).toEqual("SSE");
  });
  test("curPos = [0,0], destPos = [6,0]", () => {
    expect(board.dir([0, 0], [6, 0])).toEqual("SSE");
  });

  // test bottom left corner [7,0]
  test("curPos = [7,0], destPos = [2,0]", () => {
    expect(board.dir([7, 0], [2, 0])).toEqual("NEE");
  });
  test("curPos = [0,0], destPos = [0,6]", () => {
    expect(board.dir([7, 0], [1, 2])).toEqual("NEE");
  });
});

describe("validPos() test group", () => {
  test("No arg passed in", () => {
    expect(board.validPos()).toEqual(undefined);
  });
  test("Non array passed in", () => {
    expect(board.validPos(5)).toEqual(undefined);
  });
  test("Array passed in, edge case [0, 0]", () => {
    expect(board.validPos([0, 0])).toEqual(true);
  });
  test("Array passed in, edge case [7, 0]", () => {
    expect(board.validPos([7, 0])).toEqual(true);
  });
  test("Array passed in, edge case [0, 7]", () => {
    expect(board.validPos([0, 7])).toEqual(true);
  });
  test("Array passed in, edge case [7, 7]", () => {
    expect(board.validPos([7, 7])).toEqual(true);
  });
  test("Array passed in, edge case [0, -1]", () => {
    expect(board.validPos([0, -1])).toEqual(false);
  });
  test("Array passed in, edge case [-1, 0]", () => {
    expect(board.validPos([-1, 0])).toEqual(false);
  });
  test("Array passed in, edge case [-1, -1]", () => {
    expect(board.validPos([-1, -1])).toEqual(false);
  });
  test("Array passed in, edge case [0, 8]", () => {
    expect(board.validPos([0, 8])).toEqual(false);
  });
  test("Array passed in, edge case [-1, 8]", () => {
    expect(board.validPos([-1, 8])).toEqual(false);
  });
  test("Array passed in, edge case [-1, 7]", () => {
    expect(board.validPos([-1, 7])).toEqual(false);
  });
  test("Array passed in, edge case [8, 0]", () => {
    expect(board.validPos([0, 8])).toEqual(false);
  });
  test("Array passed in, edge case [8, -1]", () => {
    expect(board.validPos([-1, 8])).toEqual(false);
  });
  test("Array passed in, edge case [7, -1]", () => {
    expect(board.validPos([-1, 7])).toEqual(false);
  });
  test("Array passed in, edge case [8, 8]", () => {
    expect(board.validPos([8, 8])).toEqual(false);
  });
  test("Array passed in, edge case [7, 8]", () => {
    expect(board.validPos([7, 8])).toEqual(false);
  });
  test("Array passed in, edge case [8, 7]", () => {
    expect(board.validPos([8, 7])).toEqual(false);
  });
});

describe("Tests for sameValues()", () => {
  test("No arguments", () => {
    expect(board.sameValues()).toEqual(undefined);
  });
  test("With only 1 argument", () => {
    expect(board.sameValues(4)).toEqual(undefined);
  });
  test("With only 1 argument, array with 2 elem", () => {
    expect(board.sameValues([2, 2])).toEqual(undefined);
  });
  test("With 2 argument, 2 numbers", () => {
    expect(board.sameValues(2, 3)).toEqual(undefined);
  });
  test("With 2 argument, 1 array with 2 elem and a number", () => {
    expect(board.sameValues([2, 2], 4)).toEqual(undefined);
  });
  test("With 2 argument, 1 array with 2 elem and a number", () => {
    expect(board.sameValues(2, [2, 2])).toEqual(undefined);
  });
  test("With 2 argument, 2 array with different length", () => {
    expect(board.sameValues([2], [2, 2])).toEqual(false);
  });
  test("With 2 argument, 2 array with different values", () => {
    expect(board.sameValues([2, 3], [2, 2])).toEqual(false);
  });
  test("With 2 argument, 2 array with same values", () => {
    expect(board.sameValues([2, 3], [2, 3])).toEqual(true);
  });
});
