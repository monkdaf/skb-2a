//export const isNumeric = num => !isNaN(parseFloat(num)) && isFinite(num);
export default function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}