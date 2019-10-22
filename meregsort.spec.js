describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect(split([1, 2])).toEqual([[1], [2]]);
  });
  it('is able to handle uneven array lengths', function() {
    expect(split([1, 2, 3])).toEqual([[1], [2, 3]]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    // test the merging algorithm
    expect(merge([2, 4], [1, 3])).toEqual([1, 2, 3, 4]);
  });
  it('merge sorted arrays that would be in order if concatenated', function() {
    expect(merge([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });
  it('merge elements in between', function() {
    expect(merge([1, 3], [2])).toEqual([1, 2, 3]);
  });
});

describe('Merge Sort function', function() {
  it('can take an empty array', function() {
    // your code here
    expect(mergeSort([])).toEqual([]);
  });
  it('is able to take an array and return a sorted array', function() {
    // your code here
    expect(mergeSort([2, 1])).toEqual([1, 2]);
    expect(mergeSort([2, 78, 7, 5, 1, 3, 4])).toEqual([1, 2, 3, 4, 5, 7, 78]);
  });

});
