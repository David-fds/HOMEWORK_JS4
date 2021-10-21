var theData = require ("./google-objects.json");
var theData2 = theData["items"];
var arraySize = theData2.length;
var countNum = 0;

for (i = 0; i < arraySize; i++){
   if (theData2[i]["kind"] == "shopping#product"){
       countNum = countNum + 1;
   }
}

console.log("Number of item types listed: " + arraySize);
console.log("Number of shopping#products listed: " + countNum);
