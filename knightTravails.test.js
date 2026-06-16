/* knightTravails.test.js */
import { travellingKnight } from "./knightTravails.js";

describe("Test group for getAngle())", () => {
  let tk;
  beforeEach(() => {
    // before each test, reset tmpList to a new empty Hash Set
    tk = travellingKnight();
  });

  test("No arguments passed in", () => {
    expect(tk.getAngle()).toEqual(undefined);
  });
  test("getAngle() with 1 argument", () => {
    expect(tk.getAngle([1, 2])).toEqual(undefined);
  });
  test("getAngle()) with 2 arguments, 1st arg array and 2nd arg non array", () => {
    expect(tk.getAngle([1, 2], 5)).toEqual(undefined);
  });
  test("getAngle()) with 2 arguments, 1st arg non array and 2nd arg array", () => {
    expect(tk.getAngle(5, [1, 2])).toEqual(undefined);
  });

  // getAngle at corner points
  test("getAngle()) with 2 arguments, 1st arg top lefthand corner 2nd arg same plane", () => {
    expect(tk.getAngle([0, 0], [0, 5])).toEqual([5, 359]);
  });
  test("getAngle()) with 2 arguments, 1st arg top lefthand corner 2nd arg lowered", () => {
    let [hyp, deg] = tk.getAngle([0, 0], [5, 2]);
    expect(parseFloat(hyp.toFixed(3))).toEqual(5.385);
    expect(parseFloat(deg.toFixed(3))).toEqual(291.801);
  });
  test("getAngle()) with 2 arguments, 1st arg top lefthand corner 2nd arg lowered", () => {
    let [hyp, deg] = tk.getAngle([0, 0], [2, 6]);
    expect(parseFloat(hyp.toFixed(3))).toEqual(6.325);
    expect(parseFloat(deg.toFixed(3))).toEqual(341.565);
  });
  test("getAngle()) with 2 arguments, 1st arg bottom lefthand corner 2nd arg on the same plane", () => {
    let [hyp, deg] = tk.getAngle([7, 0], [7, 5]);
    expect(tk.getAngle([7, 0], [7, 5])).toEqual([5, 1]);
  });
  test("getAngle()) with 2 arguments, 1st arg bottom lefthand corner 2nd arg slightly elevated", () => {
    let [hyp, deg] = tk.getAngle([7, 0], [5, 6]);
    expect(parseFloat(hyp.toFixed(3))).toEqual(6.325);
    expect(parseFloat(deg.toFixed(3))).toEqual(18.435);
  });
  test("getAngle()) with 2 arguments, 1st arg bottom lefthand corner 2nd arg elevated over 45deg", () => {
    let [hyp, deg] = tk.getAngle([7, 0], [2, 3]);
    expect(parseFloat(hyp.toFixed(3))).toEqual(5.831);
    expect(parseFloat(deg.toFixed(3))).toEqual(59.036);
  });
  test("getAngle()) with 2 arguments, 1st arg bottom righthand corner 2nd arg on the same plane", () => {
    let [hyp, deg] = tk.getAngle([7, 7], [7, 2]);
    expect(tk.getAngle([7, 7], [7, 2])).toEqual([5, 179]);
  });
  test("getAngle()) with 2 arguments, 1st arg bottom righthand corner 2nd arg on the same plane, going up", () => {
    let [hyp, deg] = tk.getAngle([7, 7], [7, 2]);
    expect(tk.getAngle([7, 7], [7, 2])).toEqual([5, 179]);
  });
  test("getAngle()) with 2 arguments, 1st arg bottom righthand corner 2nd arg slightly elevated", () => {
    let [hyp, deg] = tk.getAngle([7, 7], [5, 1]);
    expect(parseFloat(hyp.toFixed(3))).toEqual(6.325);
    expect(parseFloat(deg.toFixed(3))).toEqual(161.565);
  });
  test("getAngle()) with 2 arguments, 1st arg bottom righthand corner 2nd arg elevated over 45deg", () => {
    let [hyp, deg] = tk.getAngle([7, 7], [1, 6]);
    expect(parseFloat(hyp.toFixed(3))).toEqual(6.083);
    expect(parseFloat(deg.toFixed(3))).toEqual(99.462);
  });
  test("getAngle()) with 2 arguments, 1st arg top righthand corner 2nd arg on the same plane, going down", () => {
    let [hyp, deg] = tk.getAngle([0, 7], [0, 2]);
    expect(travellingKnight.getAngle([0, 7], [0, 1])).toEqual([6, 181]);
  });
  test("getAngle()) with 2 arguments, 1st arg top righthand corner 2nd arg on the same plane, going left", () => {
    let [hyp, deg] = tk.getAngle([0, 7], [0, 1]);
    expect(tk.getAngle([0, 7], [0, 1])).toEqual([6, 181]);
  });
});

describe.only("validPos() test group", () => {
  let tk;
  beforeEach(() => {
    // before each test, reset tmpList to a new empty Hash Set
    tk = travellingKnight();
  });

  test("No arg passed in", () => {
    expect(tk.validPos()).toEqual(undefined);
  });
  test("Non array passed in", () => {
    expect(tk.validPos(5)).toEqual(undefined);
  });
  test("Array passed in, edge case [0, 0]", () => {
    expect(tk.validPos([0, 0])).toEqual(true);
  });
  test("Array passed in, edge case [7, 0]", () => {
    expect(tk.validPos([7, 0])).toEqual(true);
  });
  test("Array passed in, edge case [0, 7]", () => {
    expect(tk.validPos([0, 7])).toEqual(true);
  });
  test("Array passed in, edge case [7, 7]", () => {
    expect(tk.validPos([7, 7])).toEqual(true);
  });
  test("Array passed in, edge case [0, -1]", () => {
    expect(tk.validPos([0, -1])).toEqual(false);
  });
  test("Array passed in, edge case [-1, 0]", () => {
    expect(tk.validPos([-1, 0])).toEqual(false);
  });
  test("Array passed in, edge case [-1, -1]", () => {
    expect(tk.validPos([-1, -1])).toEqual(false);
  });
  test("Array passed in, edge case [0, 8]", () => {
    expect(tk.validPos([0, 8])).toEqual(false);
  });
  test("Array passed in, edge case [-1, 8]", () => {
    expect(tk.validPos([-1, 8])).toEqual(false);
  });
  test("Array passed in, edge case [-1, 7]", () => {
    expect(tk.validPos([-1, 7])).toEqual(false);
  });
  test("Array passed in, edge case [8, 0]", () => {
    expect(tk.validPos([0, 8])).toEqual(false);
  });
  test("Array passed in, edge case [8, -1]", () => {
    expect(tk.validPos([-1, 8])).toEqual(false);
  });
  test("Array passed in, edge case [7, -1]", () => {
    expect(tk.validPos([-1, 7])).toEqual(false);
  });
  test("Array passed in, edge case [8, 8]", () => {
    expect(tk.validPos([8, 8])).toEqual(false);
  });
  test("Array passed in, edge case [7, 8]", () => {
    expect(tk.validPos([7, 8])).toEqual(false);
  });
  test("Array passed in, edge case [8, 7]", () => {
    expect(tk.validPos([8, 7])).toEqual(false);
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
