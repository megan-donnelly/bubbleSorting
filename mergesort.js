function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  const midpoint = Math.floor(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, midpoint);
  const secondHalf = wholeArray.slice(midpoint);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let mergedArr = [];
  while (arr1.length || arr2.length) {
    // debugger;
    if (arr1[0] > arr2[0] || !arr1.length) {
      let removedEl = arr2.shift();
      mergedArr.push(removedEl);
    } else if (arr1[0] < arr2[0] || !arr2.length) {
      let removedEl = arr1.shift();
      mergedArr.push(removedEl);
    } else {
      let removed1 = arr1.shift();
      let removed2 = arr2.shift();
      mergedArr.push(removed1);
      mergedArr.push(removed2);
    }
  }
  return mergedArr;
}
