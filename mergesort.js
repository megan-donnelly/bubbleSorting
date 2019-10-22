function split(wholeArray) {
  const midpoint = Math.floor(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, midpoint);
  const secondHalf = wholeArray.slice(midpoint);
  return [firstHalf, secondHalf];
}
function merge(arr1, arr2) {
  let sortedArr = [];
  while (arr1.length) {
    arr1[0] > arr2[0]
      ? sortedArr.push(arr2.shift())
      : sortedArr.push(arr1.shift());
  }
  return sortedArr.concat(arr2);
}

function mergeSort(array) {
  if (array.length <= 1) return array;
  let [firstHalf, secondHalf] = split(array);
  if (firstHalf.length <= 1 && secondHalf <= 1)
    return merge(firstHalf, secondHalf);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}
