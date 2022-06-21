export function array2d(arr: number[][]): number {
  let total = -64;
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      const sum = arr[y][x] + 
                  arr[y][x + 1] + 
                  arr[y][x + 2] + 
                  arr[y + 1][x + 1] + 
                  arr[y + 2][x] + 
                  arr[y + 2][x + 1] + 
                  arr[y + 2][x + 2];
      if (sum > total) total = sum;
    }
  }
  return total;
}
