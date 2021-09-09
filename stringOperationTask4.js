function numberOccurrences (){
    let string1 = "abababab";
    let string2 = "ba";
    console.log(string1.split(string2).length-1);
}
numberOccurrences()