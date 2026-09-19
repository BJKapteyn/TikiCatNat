export function nextSlide(currentArrayIndex: number, arrayLength: number, placesToMove: number = 1) {
    const inBoundsPlacesToMoveFromIndex = currentArrayIndex + placesToMove;
    let inBoundsNextArrayIndex = inBoundsPlacesToMoveFromIndex;
    const isNextIndexNegative = inBoundsPlacesToMoveFromIndex < 0;

    if (inBoundsPlacesToMoveFromIndex >= arrayLength || isNextIndexNegative) {
        inBoundsNextArrayIndex = inBoundsPlacesToMoveFromIndex % arrayLength;
        
        if (isNextIndexNegative) {
            inBoundsNextArrayIndex += arrayLength;
        }
    }
 
    return inBoundsNextArrayIndex;
}