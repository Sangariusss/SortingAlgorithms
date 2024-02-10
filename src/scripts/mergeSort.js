function mergeSort(arr) {
    const steps = [];
    
    // Function to recursively split the array into halves
    function split(arr) {
        if (arr.length <= 1) return arr;

        const middle = Math.floor(arr.length / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);

        return merge(split(left), split(right), left, right);
    }

    // Function to merge two sorted arrays
    function merge(left, right, leftArray, rightArray) {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;
    
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }
    
        // Append remaining elements if any
        while (leftIndex < left.length) {
            result.push(left[leftIndex]);
            leftIndex++;
        }
    
        while (rightIndex < right.length) {
            result.push(right[rightIndex]);
            rightIndex++;
        }

        // Append the last element if it exists
        if (leftArray.length + rightArray.length === arr.length) {
            result.push(arr[arr.length - 1]);
        }
    
        // Append the current state of the array to the steps array
        const currentArray = [...result];
        steps.push(currentArray);
    
        return result;
    }
    
    split(arr);
    return steps; 
}