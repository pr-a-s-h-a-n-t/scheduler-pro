export const formatString = (inputString) => {
    if (inputString === null || inputString === undefined) {
        return null;
    }

    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}