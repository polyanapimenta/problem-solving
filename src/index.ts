import { encode } from "./encode/encode";
import { decode } from "./decode/decode";
import { leftRotation } from "./leftRotation/leftRotation";
import { array2d } from "./array2d/array2d";
import { compiler } from "./compiler/compiler";

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`
  \nInforme o número da opção desejada:
  \n1 - Encode
  \n2 - Decode
  \n3 - Left Rotation
  \n4 - 2D Array
  \n5 - Compiler
  `, (opcao: any) => {
  
  console.log(`Opção escolhida: '${opcao}'`);

  let input:any;

  switch (opcao) {
    case '1':
      input = 'aaaabbccca';
      console.log(`\n${input}\n`);
      console.log(encode(input));
      break;
    case '2':
      input = '4a2b3c1a';
      console.log(`\n${input}\n`);
      console.log(decode(input));
      break;
    case '3':
      const rotation = 5;
      input = [1,8,9,3,4,5,6,19];
      console.log(`\ninput: ${input} | rotation: ${rotation}\n`);
      console.log(leftRotation(input, rotation));
      break;
    case '4':
      input = [
        [ 1, 1, 1, 0, 0, 0 ],
        [ 0, 1, 0, 0, 0, 0 ],
        [ 1, 1, 1, 0, 0, 0 ],
        [ 0, 0, 2, 4, 4, 0 ],
        [ 0, 0, 0, 2, 0, 0 ],
        [ 0, 0, 1, 2, 4, 0 ]
      ];
      console.log(`\ninput: ${input}\n`);
      console.log(array2d(input));
      break;
    case '5':
      input = "{{{[[[(]]]}}}";
      console.log(`\ninput: ${input}\n`);
      console.log(compiler(input));
      break;
    default:
      console.log("\nOpção Invalida!");
      break;
  }
  readline.close();
});
