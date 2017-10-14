//Declared as global variables, so each function can access it
var height;
var weight;
var BMI;
var Name;
var yourHealth;

//Function to get height
function getHeight(height){
  height = document.getElementById("height").value;
  height = (height * 2.54)/100;
  return height;
}

//Function to get and convert weight from lb to kg
function convertWeight(weight){
  weight = document.getElementById("weight").value;
  weight = weight / 2.20462;
  return weight;
}

//Function to calculate the BMI
function calculateBMI(height, weight){
  BMI = (convertWeight() / (getHeight() * getHeight()));
  return BMI;
}

//Function to display information in Html
function displayInfo(){
    calculateBMI();
      if(BMI <= 18.5){
        yourHealth = "You are considered underweight.";
      }
      else if(BMI >= 18.5 && BMI <= 24.9){
        yourHealth = "You are considered Healthy. ";
      }
      else if(BMI >= 25 && BMI <= 29.9){
        yourHealth = "You are considered overweight. ";
      }
      else if(BMI >= 30 && BMI < 41){
        yourHealth = "You are considered Obese. ";
      }
      else {
        yourHealth = "No result. ";
      }
      Name = document.getElementById("InputName").value;
      document.getElementById("OutputName").innerHTML = Name;
      document.getElementById("OutputBmi").innerHTML = BMI.toFixed(2);
      document.getElementById("OutputMessage").innerHTML = yourHealth;
}
function change(){
	var getStuff = document.getElementById("input").value;
    	document.getElementById("H1").style.color = getStuff;
}
function myFunction(){
  displayInfo();
}
