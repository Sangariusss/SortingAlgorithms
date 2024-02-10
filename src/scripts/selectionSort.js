function selectionSort(array) {
    const steps = [];
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        // Find the index of the minimum element in the unsorted part of the array
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the minimum element with the first element of the unsorted part
        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
            steps.push([...array, i]); // Record current step and index of the active element
        }
    }

    return steps;
}