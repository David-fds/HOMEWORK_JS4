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
    var body = document.getElementById('backorder');
    body.innerHTML = "";                                        //clear list    
    for (var i = 0; i < arraySize; i++){
        var theData3 = theData2[i]["product"]["inventories"][0]["availability"];
        if (theData3 == "backorder"){
            var body = document.getElementById('backorder');    //access list
            var element = document.createElement('li');
            element.innerHTML = theData2[i]["product"]["title"];
            body.appendChild(element);
        }
    }
}

function numbMultImage(){
    var body = document.getElementById('multimages');
    body.innerHTML = "";                                        //clear list    
    for (var i = 0; i < arraySize; i++){
        if (theData2[i]["product"]["images"].length > 1){
            var body = document.getElementById('multimages');   //access list
            var element = document.createElement('li');
            element.innerHTML = theData2[i]["product"]["title"];
            body.appendChild(element);
        }
    }
}

function numbCanon(){
    var body = document.getElementById('canons');
    body.innerHTML = "";                                    //clear list
    for (var i = 0; i < arraySize; i++){
        var theData3 = theData2[i]["product"]["brand"];
        if (theData3 == "Canon" || theData3 == "canon"){
            var body = document.getElementById('canons');   //access list
            var element = document.createElement('li');
            element.innerHTML = theData2[i]["product"]["title"];
            body.appendChild(element);
        }
    }
}

function numbebay(){
    var body = document.getElementById('ebay');
    body.innerHTML = "";                                    //clear list
    for (var i = 0; i < arraySize; i++){
        var theData3 = theData2[i]["product"]["author"]["name"];
        var theData4 = theData2[i]["product"]["brand"];
        if ((theData3 == "eBay" || theData3 == "EBay")
            && (theData4 == "Canon" || theData4 == "canon")){
            var body = document.getElementById('ebay');    //access list
            var element = document.createElement('li');
            element.innerHTML = theData2[i]["product"]["title"];
            body.appendChild(element);
        }
    }
}

function listall(){
    var body = document.getElementById('list');
    body.innerHTML = "";
    var theData6 = "";
    for (var i = 0; i < arraySize; i++){
        var theData3 = theData2[i]["product"]["brand"];
        var theData4 = theData2[i]["product"]["title"];
        var theData5 = theData2[i]["product"]["inventories"][0]["price"];

        if (theData2[i]["product"]["images"].length > 0){
            theData6 = theData2[i]["product"]["images"][0]["link"];
        }
        else{
            theData6 = "";
        }

        var body = document.getElementById('list');
        var element = document.createElement('li');
        element.innerHTML = `${theData3}:  ${theData4}, $${theData5}/each;
             image:  ${theData6}.`;
        body.appendChild(element);
    }
}