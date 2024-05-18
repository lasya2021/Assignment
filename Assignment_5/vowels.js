function countVowelsReduce(str) {
    const vowels = "aeiouAEIOU";
    return str
        .split("")
        .reduce(function (count, char) {
            return vowels.indexOf(char) !== -1
                ? count + 1
                : count;
        }, 0);
}
const result = countVowelsReduce("ittalenthub");
console.log(result);
