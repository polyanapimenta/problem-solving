import { decode } from "../../../src/decode/decode";

describe("Decode", () => {
  test("Input: '4a2b3c' should be equal to Output: 'aaaabbccc'", () => {
    const result = decode("4a2b3c");

    expect(result).toBe("aaaabbccc");
  });

  test("Input: '3a2b3c1d' should be equal to Output: 'aaabbcccd'", () => {
    const result = decode("3a2b3c1d");

    expect(result).toBe("aaabbcccd");
  });

  test("Input: '4a2b3c1a' should be equal to Output: 'aaaabbccca'", () => {
    const result = decode("4a2b3c1a");

    expect(result).toBe("aaaabbccca");
  });

  test("Input: '2a1b2c1a1c' should be equal to Output: 'aabccac'", () => {
    const result = decode("2a1b2c1a1c");

    expect(result).toBe("aabccac");
  });

  test("Input: '1a1b1c1d' should be equal to Output: 'abcd'", () => {
    const result = decode("1a1b1c1d");

    expect(result).toBe("abcd");
  });

  test("Input: '9e' should be equal to Output: 'eeeeeeeee'", () => {
    const result = decode("9e");

    expect(result).toBe("eeeeeeeee");
  });

  test("Input: '' should be equal to Output: 'Input is empty'", () => {
    const result = decode("");

    expect(result).toBe("Input is empty");
  });
});
