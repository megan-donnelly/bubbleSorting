describe('Bubble Sort', function () {
  beforeAll(function () {
    spyOn(bubbleSort, 'swap').and.callThrough();
  });

  it('takes one pass for an empty array', function () {
    bubbleSort.swap([]);
    expect(bubbleSort.swap.calls.count()).toEqual(1);
  });

  it('handles an empty array', function () {
    expect(bubbleSort.swap([])).toEqual([]);
  });

  it('chaecks if the passed arr is sorted, if so just returns it', function () {
    expect(bubbleSort.swap([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('sorts the passed arr from left to right', function () {
    expect(bubbleSort.swap([2, 5, 1, 3, 4])).toEqual([1, 2, 3, 4, 5]);
  });

  it('can handle strings', function () {
    expect(bubbleSort.swap(['bubble', 'apple', 'Dog', 'test'])).toEqual(['Dog', 'apple', 'bubble', 'test']);
  })

  it('harder sorts the passed arr from left to right', function () {
    expect(bubbleSort.swap([2, 78, 7, 5, 1, 3, 4])).toEqual([1, 2, 3, 4, 5, 7, 78]);
  });

  it('harder sorts the passed arr from left to right with duplicated nums', function () {
    expect(bubbleSort.swap([2, 78, 7, 2, 2, 2, 1, 5, 1, 3, 4])).toEqual([1, 1, 2, 2, 2, 2, 3, 4, 5, 7, 78]);
  });
});
