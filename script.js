var theData2 = theData["items"];        //grab the "items" array separately
var arraySize = theData2.length;        //get the number of items

function numbOfItems(){
    var countNum = 0;                   //reset counter to zero
    for (var i = 0; i < arraySize; i++){
        if (theData2[i]["kind"] == "shopping#product"){
            countNum = countNum + 1;
        }
    }
    var answer = document.getElementById('numItems');
    answer.innerHTML = "Number of different items: " + countNum;
}

function numbBackOrder(){
    for (var i = 0; i < arraySize; i++){
        if (theData2[i]["product"]["inventories"][0]["availability"] == "backorder"){
            var body = document.getElementById('backorder');    //access list
            var element = document.createElement('li');
            element.innerHTML = theData2[i]["product"]["title"];
            body.appendChild(element);
        }
    }
}

function numbMultImage(){
    var countNum = 0;
    for (var i = 0; i < arraySize; i++){
        if (theData2[i]["product"]["images"].length > 1){
            var body = document.getElementById('multimages');   //access list
            var element = document.createElement('li');
            element.innerHTML = theData2[i]["product"]["title"];
            body.appendChild(element);
        }
    }
}
