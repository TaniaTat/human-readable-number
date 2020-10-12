module.exports = function toReadable(number) {

    let numberStr, units, tens, ints, word, words;

    numberStr = number.toString();
    if (parseInt(numberStr) === 0) {
        return 'zero';
    }

    units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    words = [];

    /* Turn number into array of individual integers */
    ints = numberStr.split('').reverse().map(parseFloat);

    /* Make "teens"*/
    if (ints[1] === 1) {
        ints[0] += 10;
    }

    /* Add units */
    word = units[ints[0]];
    if (word) {
        words.push(word);
    }

    /* Add tens */
    word = tens[ints[1]];
    if (word) {
        words.push(word);
    }

    /* Add hundreds */
    word = units[ints[2]];
    if (word) {
        words.push(word + ' hundred');
    }

    return words.reverse().join(' ');
}

