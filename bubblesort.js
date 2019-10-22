let bubbleSort = {

  swap: function (arr) {
    let didSwap = false;

    for (let i = 0; i < arr.length; i++) {

      let current = arr[i];
      let next = arr[i + 1];

      if (current > next) {

        didSwap = true;

        arr[i] = next;
        arr[i + 1] = current;

      }
    }

    if (didSwap) {
      //google solution says we should put return below
      this.swap(arr)
    }

    return arr
  }
}

