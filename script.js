 var xmlhttp = new XMLHttpRequest();//displays json
    xmlhttp.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200){ //4 is ready 200 is okay
        var mydata = JSON.parse(this.responseText);
       
//var totalCurrentPrice = [];
//var qty1 = document.getElementById('itemQty1').value;
//var qty2 = document.getElementById('itemQty2').value;
function enterFood1(){
  var qty1 = document.getElementById('itemQty1').value;
  var total= mydata.food[0].price * qty1;
 window.alert(total);
  var totalPrice = total;
  var currentPrice = document.getElementById('currentOrder').innerHTML = mydata.food[0].name + " x " + qty1 +" = $" + totalPrice.toFixed(2);
  localStorage.setItem("total1", totalPrice);
  var price2 = localStorage.getItem('total2');
  var price3 = localStorage.getItem('total3');
  var price4 = localStorage.getItem('total4');
  var price5 = localStorage.getItem('total5');
  var price6 = localStorage.getItem('total6');
  var totalC = total + parseFloat(price2) + parseFloat(price3) + parseFloat(price4) + parseFloat(price5) + parseFloat(price6);
  document.getElementById('currentTotal').innerHTML = "Your total: $" + totalC.toFixed(2);
  localStorage.setItem("totalP", totalC);
  //totalCurrentPrice.push(totalPrice);
  
  //window.alert(totalPrice); a test to see if code works for calculating price.
  //var x = localStorage.getItem('sub0');
  
  //var p = $.getElementByTagName('p')[0];
  //use var newText = $.createtextNode(parseFloat(x).toFixed(2));
  //or use $.getElementById('totals').innerHTML = x;
}
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
}
xmlhttp.open("GET", "Food.json", true);
xmlhttp.send();

document.getElementById('itemQty1').value = 0;
localStorage.setItem("total1", 0);
document.getElementById('itemQty2').value = 0;
localStorage.setItem("total2", 0);
document.getElementById('itemQty3').value = 0;
localStorage.setItem("total3", 0);
document.getElementById('itemQty4').value = 0;
localStorage.setItem("total4", 0);
document.getElementById('itemQty5').value = 0;
localStorage.setItem("total5", 0);
document.getElementById('itemQty6').value = 0;
localStorage.setItem("total6", 0);

var previous = null;
var current = null;
    setInterval(function(){
        $.getJSON("json.Rest.json", function(json){
            current = JSON.stringify(json);
            if (previous && current && previous!==current){
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
  
//}
