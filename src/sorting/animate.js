export function mergeSortAnimations(arr) {
    const animations = [];
    if (arr.length <= 1) return arr;
    const auxiliaryArray = arr.slice();
    mergeSortHelper(arr, 0, arr.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArr,
    startI,
    endI,
    auxArr,
    animations,
  ) {
    if (startI === endI) return;
    const middleI = Math.floor((startI + endI) / 2);
    mergeSortHelper(auxArr, startI, middleI, mainArr, animations);
    mergeSortHelper(auxArr, middleI + 1, endI, mainArr, animations);
    merge(mainArr, startI, middleI, endI, auxArr, animations);
  }
  
  function merge(
    mainArr,
    startI,
    middleI,
    endI,
    auxArr,
    animations,
  ) {
    let k = startI;
    let i = startI;
    let j = middleI + 1;
    while (i <= middleI && j <= endI) {
      animations.push([i, j]);
      animations.push([i, j]);
      if (auxArr[i] <= auxArr[j]) {
        animations.push([k, auxArr[i]]);
        mainArr[k++] = auxArr[i++];
      } else {
        animations.push([k, auxArr[j]]);
        mainArr[k++] = auxArr[j++];
      }
    }
    while (i <= middleI) {
      animations.push([i, i]);
      animations.push([i, i]);
      animations.push([k, auxArr[i]]);
      mainArr[k++] = auxArr[i++];
    }
    while (j <= endI) {
      animations.push([j, j]);
      animations.push([j, j]);
      animations.push([k, auxArr[j]]);
      mainArr[k++] = auxArr[j++];
    }
  }