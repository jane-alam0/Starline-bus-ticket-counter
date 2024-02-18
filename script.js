const seatBookingBtn = getElementByClassName("bttn");

for (const btn of seatBookingBtn) {
  btn.addEventListener("click", seatBookingControl);
}

function seatBookingControl(event) {
  const findSeat = event.target;
  const position = event.target.innerText;

  const maxSeat = getElementInnerTextValue("maxSeat");
  const totalSeat = getElementInnerTextValue("totalSeat");
  if (maxSeat < 4) {
    setBackgroundColor(findSeat);
    let countSeat = maxSeat + 1;
    setInnerText("maxSeat", countSeat);
    const sub = totalSeat - 1;
    setInnerText("totalSeat", sub);
  }
}

// utility funtion section

// find Id
function getElementById(elementId) {
  const element = document.getElementById(elementId);
  return element;
}

// find className
function getElementByClassName(className) {
  const element = document.getElementsByClassName(className);
  return element;
}

// get innerText
function getElementInnerText(elementId) {
  const element = document.getElementById(elementId).innerText;
  return element;
}

// get innerHtml value
function getElementInnerTextValue(elementId) {
  const element = document.getElementById(elementId).innerText;
  const convert = parseInt(element);
  return convert;
}

// set innerText
function setInnerText(id, value) {
  const element = document.getElementById(id);
  element.innerText = value;
}

// set background color
function setBackgroundColor(element) {
  element.classList.add("bg-green-500");
}
