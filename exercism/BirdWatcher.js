// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
    let count = 0
    for (let index = 0; index < birdsPerDay.length; index++) {
       count += birdsPerDay[index]
    }
    return count
  }
  
  /**
   * Calculates the total number of birds seen in a specific week.
   *
   * @param {number[]} birdsPerDay
   * @param {number} week
   * @returns {number} birds counted in the given week
   */
  export function birdsInWeek(birdsPerDay, week) {
    // Assuming each week has 7 days
      const daysInWeek = 7;
  
      // Calculate the start and end index of the specified week
      const startIndex = (week - 1) * daysInWeek;
      const endIndex = startIndex + daysInWeek;
  
      // Slice the array to get the bird counts for the specified week
      const birdsInSpecifiedWeek = birdsPerDay.slice(startIndex, endIndex);
  
      // Calculate and return the total number of birds in the specified week
      const totalBirdsInWeek = birdsInSpecifiedWeek.reduce((acc, count) => acc + count, 0);
  
      return totalBirdsInWeek;
  }
  
  /**
   * Fixes the counting mistake by increasing the bird count
   * by one for every second day.
   *
   * @param {number[]} birdsPerDay
   * @returns {number[]} corrected bird count data
   */
  export function fixBirdCountLog(birdsPerDay) {
    for (let index = 0; index < birdsPerDay.length; index++) {
      if (index % 2 == 0){
        birdsPerDay[index]++;
      }
      
    }
    return birdsPerDay
  }
  