var theData = require ("./google-objects.json");
var theData2 = theData["items"];    //grab the "items" array separately
var arraySize = theData2.length;    //get the number of items
var countNum = 0;

for (var i = 0; i < arraySize; i++){
   if (theData2[i]["kind"] == "shopping#product"){
       countNum = countNum + 1;
   }

   if (theData2[i]["product"]["inventories"][0]["availability"] == "backorder"){
        console.log(theData2[i]["product"]["title"] + " backordered");
   }
}

console.log("Number of item types listed: " + arraySize);
console.log("Number of shopping#products listed: " + countNum);