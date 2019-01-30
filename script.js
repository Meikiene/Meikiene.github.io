var foodname1;
var foodprice1;
var foodname2;
var foodprice2;
var foodname3;
var foodprice3;
var foodname4;
var foodprice4;
var foodname5;
var foodprice5;
var foodname6;
var foodprice6;
var sum; //The grand total of everything ordered
var priceArr = [];



var xmlhttp = new XMLHttpRequest(); //displays json
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) { //4 is ready 200 is okay
    var mydata = JSON.parse(this.responseText);

    foodname1 = mydata.food[0].name; //save the name as foodname1
    document.getElementById('item_one_name').innerHTML = mydata.food[0].name; //Output name to HTML
    foodprice1 = mydata.food[0].price; //save the price as foodprice1
    document.getElementById('item_one_price').innerHTML = mydata.food[0].price;
  
    foodname2 = mydata.food[1].name; 
    document.getElementById('item_two_name').innerHTML = mydata.food[1].name; 
    foodprice2 = mydata.food[1].price;
    document.getElementById('item_two_price').innerHTML = mydata.food[1].price;

    foodname3 = mydata.food[2].name; 
    document.getElementById('item_three_name').innerHTML = mydata.food[2].name; 
    foodprice3 = mydata.food[2].price;
    document.getElementById('item_three_price').innerHTML = mydata.food[2].price;
    
    foodname4 = mydata.food[3].name; 
    document.getElementById('item_four_name').innerHTML = mydata.food[3].name; 
    foodprice4 = mydata.food[3].price;
    document.getElementById('item_four_price').innerHTML = mydata.food[3].price;

    foodname5 = mydata.food[4].name; 
    document.getElementById('item_five_name').innerHTML = mydata.food[4].name; 
    foodprice5 = mydata.food[4].price;
    document.getElementById('item_five_price').innerHTML = mydata.food[4].price;

    foodname6 = mydata.food[5].name; 
    document.getElementById('item_six_name').innerHTML = mydata.food[5].name; 
    foodprice6 = mydata.food[5].price;
    document.getElementById('item_six_price').innerHTML = mydata.food[5].price;



    // EVERYTHING here is local. So pass these to be GLOBAL like in line 10, 11, etc//


















  }
};
//*****************BUTTON FOR FOOD 1******************//
function enterFood1() {
  var qty1 = document.getElementById('itemQty1').value;
  var total = foodprice1 * qty1;
  priceArr.push(total);
  //The following SUMS the numbers in the array
  sum = priceArr.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  document.getElementById('currentTotal').innerHTML = "Your Current Total: $" + sum.toFixed(2);
  //END SUM of array values

  var currentPrice = document.getElementById('currentOrder').innerHTML = foodname1 + " x " + qty1 + " = $" + total.toFixed(2);
}

//*****************BUTTON FOR FOOD 2******************//
function enterFood2() {
  var qty2 = document.getElementById('itemQty2').value;
  var total = foodprice2 * qty2;
  priceArr.push(total);
  //The following SUMS the numbers in the array
  sum = priceArr.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  document.getElementById('currentTotal').innerHTML = "Your Current Total: $" + sum.toFixed(2);
  //END SUM of array values

  var currentPrice = document.getElementById('currentOrder2').innerHTML = foodname2 + " x " + qty2 + " = $" + total.toFixed(2);
}

//*****************BUTTON FOR FOOD 3******************//
function enterFood3() {
  var qty3 = document.getElementById('itemQty3').value;
  var total = foodprice3 * qty3;
  priceArr.push(total);
  //The following SUMS the numbers in the array
  sum = priceArr.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  document.getElementById('currentTotal').innerHTML = "Your Current Total: $" + sum.toFixed(2);
  //END SUM of array values

  var currentPrice = document.getElementById('currentOrder3').innerHTML = foodname3 + " x " + qty3 + " = $" + total.toFixed(2);
}


//*****************BUTTON FOR FOOD 4******************//
function enterFood4() {
  var qty4 = document.getElementById('itemQty4').value;
  var total = foodprice4 * qty4;
  priceArr.push(total);
  //The following SUMS the numbers in the array
  sum = priceArr.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  document.getElementById('currentTotal').innerHTML = "Your Current Total: $" + sum.toFixed(2);
  //END SUM of array values

  var currentPrice = document.getElementById('currentOrder4').innerHTML = foodname4 + " x " + qty4 + " = $" + total.toFixed(2);
}


//*****************BUTTON FOR FOOD 5******************//
function enterFood5() {
  var qty5 = document.getElementById('itemQty5').value;
  var total = foodprice5 * qty5;
  priceArr.push(total);
  //The following SUMS the numbers in the array
  sum = priceArr.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  document.getElementById('currentTotal').innerHTML = "Your Current Total: $" + sum.toFixed(2);
  //END SUM of array values

  var currentPrice = document.getElementById('currentOrder5').innerHTML = foodname5 + " x " + qty5 + " = $" + total.toFixed(2);
}


//*****************BUTTON FOR FOOD 6******************//
function enterFood6() {
  var qty6 = document.getElementById('itemQty6').value;
  var total = foodprice6 * qty6;
  priceArr.push(total);
  //The following SUMS the numbers in the array
  sum = priceArr.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  document.getElementById('currentTotal').innerHTML = "Your Current Total: $" + sum.toFixed(2);
  //END SUM of array values

  var currentPrice = document.getElementById('currentOrder6').innerHTML = foodname6 + " x " + qty6 + " = $" + total.toFixed(2);
}

//*************BUTTON FOR CHECKING OUT TOTAL ORDER*************//
function getAll() {
  if (!sum){ // If there is no value of sum put a window alert telling customer to order to something.
 window.alert("You have ordered nothing, please order something!");
  }
else{
  localStorage.setItem('totalSum',sum);
  location.href = "Restaurant2.html";
}
}











  /*var price2 = localStorage.getItem('total2');
  var price3 = localStorage.getItem('total3');
  var price4 = localStorage.getItem('total4');
  var price5 = localStorage.getItem('total5');
  var price6 = localStorage.getItem('total6');
  var totalC = total + parseFloat(price2) + parseFloat(price3) + parseFloat(price4) + parseFloat(price5) + parseFloat(price6);
  document.getElementById('currentTotal').innerHTML = "Your total: $" + totalC.toFixed(2);
  localStorage.setItem("totalP", totalC);*/

/*
function enterFood2(){
  var qty2 = document.getElementById('itemQty2').value;
  var total= mydata.food[1].price * qty2;
  var totalPrice = total;
  var currentPrice = document.getElementById('currentOrder2').innerHTML = mydata.food[1].name + " x " + qty2 +" = $" + totalPrice.toFixed(2);
  localStorage.setItem("total2", totalPrice);
  var price1 = localStorage.getItem('total1');
  var price3 = localStorage.getItem('total3');
  var price4 = localStorage.getItem('total4');
  var price5 = localStorage.getItem('total5');
  var price6 = localStorage.getItem('total6');
  var totalC = parseFloat(price1) + total + parseFloat(price3) + parseFloat(price4) + parseFloat(price5) + parseFloat(price6);
  document.getElementById('currentTotal').innerHTML = "Your total: $" + totalC.toFixed(2);
  localStorage.setItem("totalP2", totalC);

}
function enterFood3(){
  var qty3 = document.getElementById('itemQty3').value;
  var total= mydata.food[2].price * qty3;
  var totalPrice = total;
  var currentPrice = document.getElementById('currentOrder3').innerHTML = mydata.food[2].name + " x " + qty3 +" = $" + totalPrice.toFixed(2);
  localStorage.setItem("total3", totalPrice);
  var price1 = localStorage.getItem('total1');
  var price2 = localStorage.getItem('total2');
  var price4 = localStorage.getItem('total4');
  var price5 = localStorage.getItem('total5');
  var price6 = localStorage.getItem('total6');
  var totalC = parseFloat(price1) + parseFloat(price2) + total + parseFloat(price4) + parseFloat(price5) + parseFloat(price6);
  document.getElementById('currentTotal').innerHTML = "Your total: $" + totalC.toFixed(2);
  localStorage.setItem("totalP3", totalC);

}
function enterFood4(){
  var qty4 = document.getElementById('itemQty4').value;
  var total= mydata.food[3].price * qty4;
  var totalPrice = total;
  var currentPrice = document.getElementById('currentOrder4').innerHTML = mydata.food[3].name + " x " + qty4 +" = $" + totalPrice.toFixed(2);
  localStorage.setItem("total4", totalPrice);
  var price1 = localStorage.getItem('total1');
  var price2 = localStorage.getItem('total2');
  var price3 = localStorage.getItem('total3');
  var price5 = localStorage.getItem('total5');
  var price6 = localStorage.getItem('total6');
  var totalC = parseFloat(price1) + parseFloat(price2) + parseFloat(price3) + total + parseFloat(price5) + parseFloat(price6);
  document.getElementById('currentTotal').innerHTML = "Your total: $" + totalC.toFixed(2);
  localStorage.setItem("totalP4", totalC);

}
function enterFood5(){
  var qty5 = document.getElementById('itemQty5').value;
  var total= mydata.food[4].price * qty5;
  var totalPrice = total;
  var currentPrice = document.getElementById('currentOrder5').innerHTML = mydata.food[4].name + " x " + qty5 +" = $" + totalPrice.toFixed(2);
  localStorage.setItem("total5", totalPrice);
  var price1 = localStorage.getItem('total1');
  var price2 = localStorage.getItem('total2');
  var price3 = localStorage.getItem('total3');
  var price4 = localStorage.getItem('total4');
  var price6 = localStorage.getItem('total6');
  var totalC = parseFloat(price1) + parseFloat(price2) + parseFloat(price3) + parseFloat(price4) + total + parseFloat(price6);
  document.getElementById('currentTotal').innerHTML = "Your total: $" + totalC.toFixed(2);
  localStorage.setItem("totalP5", totalC);
}
function enterFood6(){
  var qty6 = document.getElementById('itemQty6').value;
  var total= mydata.food[5].price * qty6;
  var totalPrice = total;
  var currentPrice = document.getElementById('currentOrder6').innerHTML = mydata.food[5].name + " x " + qty6 +" = $" + totalPrice.toFixed(2);
  localStorage.setItem("total6", totalPrice);
  var price1 = localStorage.getItem('total1');
  var price2 = localStorage.getItem('total2');
  var price3 = localStorage.getItem('total3');
  var price4 = localStorage.getItem('total4');
  var price5 = localStorage.getItem('total5');
  var totalC = parseFloat(price1) + parseFloat(price2) + parseFloat(price3) + parseFloat(price4) + parseFloat(price5) + total;
  document.getElementById('currentTotal').innerHTML = "Your total: $" + totalC.toFixed(2);
  localStorage.setItem("totalP6", totalC);
}
*/
xmlhttp.open("GET", "Food.json", true);
xmlhttp.send();


var previous = null;
var current = null;
setInterval(function () {
  $.getJSON("Food.json", function (json) {
    current = JSON.stringify(json);
    if (previous && current && previous !== current) {
      location.reload();
    }
  });
}, 2000);

//var previous = null;
//var current = null;
//setInterval(function(){
//$.getJSON("file.json")function(json){
//current = JSON.stringify(json);
//if(previous && current && previous !== current){
//location.reload();
//}
//previous = current;
//});
//},2000);

//var price2 = localStorage.getItem('total2');

//document.getElementById('currentTotal').innerHTML = totalCurrentPrice[0] + totalCurrentPrice[1];
//function currentTotal(){
// var qty1 = document.getElementById('itemQty1').value;
// var qty2 = document.getElementById('itemQty2').value;
//var total1 = food[0].price * qty1
//var total2 = food[1].price *qty2
//var totalPrice = total1 + total2;
//var currentTotal= totalPrice.toFixed(2);

