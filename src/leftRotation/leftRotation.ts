// time complexidade O(n) - tempo de execução da solução ótima
// space complexity - tamanho de memória ocupada por variáveis

export function leftRotation(input: Array<number>, rotation:number):Array<number> {
  if (rotation > input.length) {
    throw new Error("Rotation must be less than input length");
  }

  let output:Array<number> = [];
  let left:Array<number> = [];
  let right:Array<number> = [];

  for (let i = 0; i < input.length; i++) {
    if (i < rotation) {
      right.push(input[i]);
    } else {
      left.push(input[i]);
    }
  }

  output = output.concat(left, right);

  return output;
}
