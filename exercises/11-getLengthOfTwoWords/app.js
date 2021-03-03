function getLengthOfTwoWords(word1, word2) {
  // your code here
  let valor=0;
    valor=word1.length+word2.length;
  return valor;

}
var output = getLengthOfTwoWords('some', 'words');
console.log(output); // --> 9