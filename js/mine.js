function gallons(){
  alert("This is a Liter converter to gallons")

  var gallon

  var input;
  input = prompt("Enter the Litres to convert")
  gallon = input * 0.264172;

  document.getElementById("output").innerHTML = gallon;
}
