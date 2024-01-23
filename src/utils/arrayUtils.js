export const getArrayFromRange = (start, end, step = 1) => {
    const arrayLength = (end - start) / step + 1;
    return Array.from({length: arrayLength}, (e, i) => start + (i * step));
}