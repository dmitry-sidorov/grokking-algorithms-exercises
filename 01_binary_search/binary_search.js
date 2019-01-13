function binary_search(list, item) {
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
    high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
}

const sample = [-9, -4, 0, 2, 6, 8, 9, 13, 16, 22];
console.log(binary_search(sample, 9));
console.log(binary_search(sample, -90));
