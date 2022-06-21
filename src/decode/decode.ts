export function decode(input: string): string {
  if(!input) {
    return 'Input is empty';
  }
  
  let output:string = '';

  for(let i = 0; i < input.length; i+=2) {
    const currentChar:string = input[i+1];
    let quantity:number = parseInt(input[i]);

    while(quantity > 0) {
      output += currentChar;
      quantity--;
    }
  }

  return output;
}