import { leftRotation } from "../../../src/leftRotation/leftRotation";

describe("Left Rotation", () => {
  test("Shoud be 4 left rotations of input", () => {
    const rotation = 4;
    const input = [1,2,3,4,5,6];
    const expected = [5,6,1,2,3,4];

    const received = leftRotation(input, rotation);

    expect(received).toStrictEqual(expected);
  });
  
  test("Shoud be 5 left rotations of input", () => {
    const rotation = 5;
    const input = [1,2,3,4,5,6];
    const expected = [6,1,2,3,4,5];

    const received = leftRotation(input, rotation);

    expect(received).toStrictEqual(expected);
  });
  
  test("Shoud be 10 left rotations of input", () => {
    const rotation = 10;

    const input = [
      41, 73, 89,  7, 10,  1, 59,
      58, 84, 77, 77, 97, 58,  1,
      86, 58, 26, 10, 86, 51
    ];

    const expected = [
      77, 97, 58, 1, 86, 58, 26, 
      10, 86, 51, 41, 73, 89, 7, 
      10, 1, 59, 58, 84, 77
    ];

    const received = leftRotation(input, rotation);

    expect(received).toStrictEqual(expected);
  });
  
  test("Shoud be 13 left rotations of input", () => {
    const rotation = 13;

    const input = [
      33, 47, 70, 37,  8,  53,
      13, 93, 71, 72, 51, 100,
      60, 87, 97
    ];

    const expected = [
      87, 97, 33, 47, 70, 37, 8, 
      53, 13, 93, 71, 72, 51, 100, 60
    ];

    const received = leftRotation(input, rotation);

    expect(received).toStrictEqual(expected);
  });
  
  test("Shoud be 10 left rotations of input", () => {
    const rotation = 10;

    const input = [
      41, 73, 89,  7, 10,  1, 59,
      58, 84, 77, 77, 97, 58,  1,
      86, 58, 26, 10, 86, 51
    ];

    const expected = [
      77, 97, 58, 1, 86, 58, 26, 
      10, 86, 51, 41, 73, 89, 7, 
      10, 1, 59, 58, 84, 77
    ];

    const received = leftRotation(input, rotation);

    expect(received).toStrictEqual(expected);
  });

  test("Should throw error", () => {
    const rotation = 10;
    const input = [1,2,3,4,5];
    const expected = "Rotation must be less than input length";

    expect(() => leftRotation(input, rotation)).toThrow(expected);
  });
});
