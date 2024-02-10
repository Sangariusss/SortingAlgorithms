document.addEventListener('DOMContentLoaded', function() {
    const originalArrayDiv = document.getElementById('original-array');
    const bubbleSortStepsDiv = document.getElementById('bubble-sort-steps');
    const insertionSortStepsDiv = document.getElementById('insertion-sort-steps'); 
    const selectionSortStepsDiv = document.getElementById('selection-sort-steps');
    const mergeSortStepsDiv = document.getElementById('merge-sort-steps');
    const quickSortStepsDiv = document.getElementById('quick-sort-steps');

    const originalArray = [15, 3, 2, 14, 15, 5, 10, 4, 5, 0];
    
    // Display original array
    originalArray.forEach(element => {
        const elementDiv = document.createElement('div');
        elementDiv.classList.add('element');
        elementDiv.textContent = element;
        originalArrayDiv.appendChild(elementDiv);
    });

    // Execute Bubble Sort
    const bubbleSortSteps = bubbleSort(originalArray.slice());
    const bubbleSortTotalSteps = displaySortingSteps(bubbleSortSteps, bubbleSortStepsDiv, 'bubble-sort-steps-count');

    // Execute Insertion Sort
    const insertionSortSteps = insertionSort(originalArray.slice());
    const insertionSortTotalSteps = displaySortingSteps(insertionSortSteps, insertionSortStepsDiv, 'insertion-sort-steps-count');

    // Execute Selection Sort
    const selectionSortSteps = selectionSort(originalArray.slice());
    const selectionSortTotalSteps = displaySortingSteps(selectionSortSteps, selectionSortStepsDiv, 'selection-sort-steps-count');

    // Execute Merge Sort
    const mergeSortSteps = mergeSort(originalArray.slice());
    const mergeSortTotalSteps = displaySortingSteps(mergeSortSteps, mergeSortStepsDiv, 'merge-sort-steps-count');

    // Execute Quick Sort
    const quickSortSteps = quickSort(originalArray.slice());
    const quickSortTotalSteps = displaySortingSteps(quickSortSteps, quickSortStepsDiv, 'quick-sort-steps-count');

    // Function to display sorting steps and return the total number of steps
    function displaySortingSteps(steps, stepsDiv, stepsCountId) {
        let stepCount = 0;
        const stepsCountDiv = document.getElementById(stepsCountId);
        const interval = setInterval(() => {
            if (stepCount < steps.length) {
                displayStep(steps[stepCount], stepCount, steps.length - 1 === stepCount, stepsDiv);
                stepCount++;
                stepsCountDiv.textContent = `Total Steps: ${stepCount}`;
            } else {
                clearInterval(interval);
            }
        }, 500); // Change the delay time if needed

        return steps.length;
    }

    // Function to display a sorting step
    function displayStep(step, stepIndex, isLastStep, stepsDiv) {
        const currentArray = step.slice(0, -1); // Get the array from the step data
        const activeIndex = step.slice(-1)[0]; // Get the index of the active element from the step data
        
        // Clear previous steps
        stepsDiv.innerHTML = '';

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

            stepsDiv.appendChild(elementDiv);
        });
    }
});