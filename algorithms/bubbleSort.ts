export default function bubbleSort<Value>(arr: Value[]) {
  let length = arr.length;

  while (length !== 0) {
    let isSwapped = false;

    for (let i = 0; i < length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        isSwapped = true;
      }
    }

    length--;

    if (!isSwapped) {
      break;
    }
  }
  return arr;
}

export const sampleCode = `
while (length !== 0) {
  let isSwapped = false;

  for (let i = 0; i < length; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      isSwapped = true;
    }
  }

  if (!isSwapped) {
    break;
  }

  length--;
}

return arr;

`;
