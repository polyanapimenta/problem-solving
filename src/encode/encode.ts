export function encode(input: string): string {
  if (!input) {
    return 'Input is empty';
  }
  
  let count:number = 0;
  let output:string = '';
  let prevChar:string = '';

  for(let i = 0; i <= input.length; i++) {
    const currentChar = input[i];

    if (currentChar === prevChar) {
      count++;
    } else {
      if(prevChar !== '') {
        output += `${count}${prevChar}`;
      }

      count = 1;
      prevChar = currentChar;
    }
  }

  return output;
}