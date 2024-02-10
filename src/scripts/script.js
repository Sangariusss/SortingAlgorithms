document.addEventListener('DOMContentLoaded', function() {
    const originalArrayDiv = document.getElementById('original-array');
    const bubbleSortStepsDiv = document.getElementById('bubble-sort-steps');

    const originalArray = [15, 3, 2, 14, 15, 5, 10, 4, 5, 0];
    
    // Display original array
    originalArray.forEach(element => {
        const elementDiv = document.createElement('div');
        elementDiv.classList.add('element');
        elementDiv.textContent = element;
        originalArrayDiv.appendChild(elementDiv);
    });

    // Bubble Sort
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

    // Execute Bubble Sort
    const bubbleSortSteps = bubbleSort(originalArray.slice());
    displaySortingSteps(bubbleSortSteps);

    // Function to display sorting steps
    function displaySortingSteps(steps) {
        steps.forEach((step, index) => {
            setTimeout(() => {
                displayStep(step, index, steps.length - 1 === index);
            }, index * 500); // Change the delay time if needed
        });
    }

    // Function to display a sorting step
    function displayStep(step, stepIndex, isLastStep) {
        const currentArray = step.slice(0, -1); // Get the array from the step data
        const activeIndex = step.slice(-1)[0]; // Get the index of the active element from the step data
        
        // Clear previous steps
        bubbleSortStepsDiv.innerHTML = '';

        // Display current step
        currentArray.forEach((element, index) => {
            const elementDiv = document.createElement('div');
            elementDiv.classList.add('element');
            elementDiv.textContent = element;

            // Check if element is already sorted from the end
            let isSorted = true;
            // Check if all elements to the left of the current element are less than or equal to it
            for (let i = 0; i < index; i++) {
                if (currentArray[i] > element) {
                    isSorted = false;
                    break;
                }
            }
            // Check if all elements to the right of the current element are greater than or equal to it
            for (let i = index + 1; i < currentArray.length; i++) {
                if (currentArray[i] < element) {
                    isSorted = false;
                    break;
                }
            }
            if (isLastStep && index === activeIndex) {
                elementDiv.classList.add('sorted');
            } else if (isSorted) {
                elementDiv.classList.add('sorted');
            }
            
            // Highlight the active element
            if (index === activeIndex && !isLastStep) {
                elementDiv.classList.add('active');
            }

            bubbleSortStepsDiv.appendChild(elementDiv);
        });
    }
});
