  var number_one = document.getElementById("numberOne").value
  
var number_two = document.getElementById("numberTwo").value

  var answer =
 (parseInt(number_one) +  parseInt(number_two))
  
  var showAnswer = document.getElementById("sum").innerHTML = answer
}

function divide(number_one, number_two){
  var number_one = document.getElementById("numberOne").value
  
var number_two = document.getElementById("numberTwo").value

  var answer =
 (parseInt(number_one) /  parseInt(number_two))
  
  var showAnswer = document.getElementById("sum").innerHTML = answer
}

function subtract(number_one, number_two){
  var number_one = document.getElementById("numberOne").value
  
var number_two = document.getElementById("numberTwo").value

  var answer =
 (parseInt(number_one) - parseInt(number_two))
  
  var showAnswer = document.getElementById("subtract").innerHTML = answer
}

function multiply(number_one, number_two){
  var number_one = document.getElementById("numberOne").value
  
var number_two = document.getElementById("numberTwo").value

  var answer =
 (parseInt(number_one) * parseInt(number_two))
  
  var showAnswer = document.getElementById("multiply").innerHTML = answer
}
