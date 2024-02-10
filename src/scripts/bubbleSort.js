function bubbleSort(array) {
    let steps = [];
    let n = array.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
                steps.push([...array, i + 1]); // Record current step and index of the active element
            }
        }
        n--;
    } while (swapped);
    return steps;
}