const minPlanesToReachEnd = (fuel) => {
    const n = fuel.length;
    // If there is only one airport, we are already at the destination
    if (n === 1) {
        return 0;
    }

    // Initialize variables
    let maxReach = fuel[0]; // The farthest airport we can reach with the initial plane
    let steps = fuel[0];    // Remaining steps we can take with the current plane
    let planes = 1;         // We start by hiring the first plane

    // Traverse the array starting from the second airport
    for (let i = 1; i < n; i++) {
        // If the current index is beyond the max reach, we cannot proceed
        if (i > maxReach) {
            return -1;  // We cannot reach this airport
        }

        // If we've reached the last airport, return the number of planes hired
        if (i === n - 1) {
            return planes;
        }

        // Update the maximum reach with the current plane
        maxReach = Math.max(maxReach, i + fuel[i]);

        // Use one step to move to the current airport
        steps--;

        // If no steps are left with the current plane, hire a new plane
        if (steps === 0) {
            planes++;               // Increment the number of planes hired
            steps = maxReach - i;   // Update the steps with the remaining distance we can cover
        }
    }

    // If the loop completes without reaching the last airport, return -1
    return -1;
}

// Example 1:
console.log(minPlanesToReachEnd([2, 1, 2, 3, 1]));  // Output: 2

// Example 2:
console.log(minPlanesToReachEnd([1, 6, 3, 4, 5, 0, 0, 0, 6]));  // Output: 3
