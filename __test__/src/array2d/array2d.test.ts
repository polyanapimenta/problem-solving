import { array2d } from "../../../src/array2d/array2d";

describe("array2d", () => {
  test("Should receive max sum to equal 19", () => {
    const input = [
      [ 1, 1, 1, 0, 0, 0 ],
      [ 0, 1, 0, 0, 0, 0 ],
      [ 1, 1, 1, 0, 0, 0 ],
      [ 0, 0, 2, 4, 4, 0 ],
      [ 0, 0, 0, 2, 0, 0 ],
      [ 0, 0, 1, 2, 4, 0 ]
    ];

    const received = array2d(input);

    expect(received).toEqual(19);
  })
});