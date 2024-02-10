function quickSort(array) {
    const steps = [];
    // Recursive function to perform partition and sort
    function partition(start, end) {
        if (start >= end) return; // Base case for recursion
        let pivotIndex = start; // Choose the first element as pivot
        let left = start + 1; // Index to traverse from left to right
        let right = end; // Index to traverse from right to left
        
        // Loop until the left and right indices cross each other
        while (left <= right) {
            // Find the element greater than pivot from the left side
            while (left <= end && array[left] <= array[pivotIndex]) left++;
            // Find the element smaller than pivot from the right side
            while (right > start && array[right] >= array[pivotIndex]) right--;
            // Swap the elements if left index is smaller than right index
            if (left < right) {
                [array[left], array[right]] = [array[right], array[left]];
                // Record the current step
                steps.push([...array, left]);
            }
        }
        // Swap the pivot element with the element at right index
        [array[right], array[pivotIndex]] = [array[pivotIndex], array[right]];
        // Record the current step
        steps.push([...array, right]);
        // Recursive call for the partitions on the left and right sides of pivot
        partition(start, right - 1);
        partition(right + 1, end);
    }
    // Initial call to partition the entire array
    partition(0, array.length - 1);
    return steps; // Return the array of sorting steps
}