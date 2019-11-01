function split(arr) {
  const midpoint = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, midpoint);
  const secondHalf = arr.slice(midpoint);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let output = [];
  while (arr1.length) {
    arr1[0] > arr2[0] ? output.push(arr2.shift()) : output.push(arr1.shift());
  }
  return output.concat(arr2);
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let [firstHalf, secondHalf] = split(arr);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   const midpoint = Math.floor(arr.length / 2);
//   const firstHalf = arr.slice(0, midpoint);
//   const secondHalf = arr.slice(midpoint);
//   return merge(mergeSort(firstHalf), mergeSort(secondHalf));
// }
