function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  const midpoint = Math.floor(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, midpoint);
  const secondHalf = wholeArray.slice(midpoint);
  return [firstHalf, secondHalf];
}

function merge(arrA, arrB) {
  let mergedArr = [];
  let arr1 = [...arrA]
  let arr2 = [...arrB]
  while (arr1.length || arr2.length) {
    debugger;
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

function mergeSort(array) {

  let finalArr = [array]

  if (array.length === 0 || array.length === 1) {
    return array
  } else {
    while(finalArr.length < array.length) {
      let tempArr = []
      finalArr.forEach(arr => {
        tempArr = tempArr.concat(split(arr))
      })
      finalArr = tempArr
    }
  }
  let splitArr = finalArr.slice(1)
  //[ [ 2 ], [ 78 ], [ 7 ], [ 5 ], [ 1 ], [ 3 ], [ 4 ] ] = finalArr.slice(1)
  for (let i = 0; i < splitArr.length; i += 2) {
    merge(splitArr[i], splitArr[split])
  }
}

// const mappedArr = arrayTest.map((miniArr, index) => {
//   debugger;
//   let nextElement = arrayTest[index + 1]

//   if(nextElement) {
//    return merge(miniArr, nextElement)
//   } else {
//     return miniArr
//   }
// })
