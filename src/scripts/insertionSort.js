function insertionSort(array) {
    let steps = []; // Array to store sorting steps
    const n = array.length;

    // Iterate through all elements of the array starting from the second one
    for (let i = 1; i < n; i++) {
        let current = array[i]; // Current element to be inserted at the correct position
        let j = i - 1;

        // Move all elements greater than the current one one position ahead
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }

        // Insert the current element at the correct position
        array[j + 1] = current;

        // Record the current state of the array after each step
        steps.push([...array, j + 1]);
    }

    return steps;
}