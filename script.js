const buttonElement = document.querySelector("#turnOnOff");
const imgElement = document.querySelector("#bulb");

function turnOnOff() {
  if (imgElement.src.includes("ONbulb")) {
    imgElement.src = "OFFbulb.png";
    buttonElement.innerHTML = "Turn On";
  } else {
    imgElement.src = "ONbulb.png";
    buttonElement.innerHTML = "Turn Off";
  }
}

buttonElement.addEventListener('click', turnOnOff);