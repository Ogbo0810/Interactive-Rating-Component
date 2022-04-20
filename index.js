var rated = document.getElementById("returned");

// var list = document.getElementById("rating-list");
// var ratingList = list.childNodes;


// function (ratingList){
// for (var i=0; i<ratingList.length)
// }

var item1 = document.getElementById("rating-number-1");
var item2 = document.getElementById("rating-number-2");
var item3 = document.getElementById("rating-number-3");
var item4 = document.getElementById("rating-number-4");
var item5 = document.getElementById("rating-number-5");

// function registerRating(i1, ra){
// i1.addEventListener('click', function() {
//     // rated.innerHTML = item1.innerHTML;
//     ra.innerHTML = i1.innerHTML;
//     sessionStorage.setItem("rating",""+1)
// });

//  }
function storeRating(value){
    console.log("value",value);
    sessionStorage.setItem("rating",value);

}
function retrieveRating(){
    var rating=sessionStorage.getItem("rating");
    console.log("value-r",rating);
    var element=document.querySelector("#returned")
    //  we could have used document.getElementbyId by querySelector can reference classes, id, etc
    element.innerHTML=rating;

}
// registerRating(item1, rated);
retrieveRating();