function numberOccurrences(a, b) {
    let result = a.split(b).length - 1;
    console.log(result);
    return result;
}

numberOccurrences("abababab", "ab");